import { useState, useCallback, useMemo } from 'react';
import type { GameScreen, PlayerProgress, Scenario, ChapterId } from '../types/game';
import { chapters, scenarios } from '../data/scenarios';
import {
  createInitialProgress,
  calculateScore,
  applyMetricDelta,
} from '../utils/gameLogic';

const SCENARIOS_PER_ROUND = 5;

/**
 * Select up to SCENARIOS_PER_ROUND scenarios from a chapter pool with weighted
 * difficulty ordering:
 *   slots 1-2 → prefer easy, fallback to medium then hard
 *   slots 3-4 → prefer medium, fallback to easy then hard
 *   slot  5   → prefer hard,  fallback to medium then easy
 *
 * Already-seen scenario IDs (seenIds) are excluded so "Play More" never
 * repeats a question within the same session.
 */
function selectWeightedScenarios(
  allChapterScenarios: Scenario[],
  seenIds: string[],
): Scenario[] {
  const available = allChapterScenarios.filter((s) => !seenIds.includes(s.id));
  if (available.length === 0) return [];

  const used = new Set<string>();
  const selected: Scenario[] = [];

  function pickFrom(preferences: Array<'easy' | 'medium' | 'hard'>): Scenario | null {
    for (const diff of preferences) {
      const candidates = available.filter((s) => s.difficulty === diff && !used.has(s.id));
      if (candidates.length > 0) {
        const picked = candidates[Math.floor(Math.random() * candidates.length)];
        used.add(picked.id);
        return picked;
      }
    }
    // Fallback: any remaining available scenario
    const remaining = available.filter((s) => !used.has(s.id));
    if (remaining.length === 0) return null;
    const picked = remaining[Math.floor(Math.random() * remaining.length)];
    used.add(picked.id);
    return picked;
  }

  // Slots 1-2: bias toward easy
  for (let i = 0; i < 2; i++) {
    const s = pickFrom(['easy', 'medium', 'hard']);
    if (s) selected.push(s);
  }

  // Slots 3-4: bias toward medium
  for (let i = 0; i < 2; i++) {
    const s = pickFrom(['medium', 'easy', 'hard']);
    if (s) selected.push(s);
  }

  // Slot 5: bias toward hard
  const s5 = pickFrom(['hard', 'medium', 'easy']);
  if (s5) selected.push(s5);

  return selected;
}

export function useGameState() {
  const [screen, setScreen] = useState<GameScreen>('start');
  const [progress, setProgress] = useState<PlayerProgress>(createInitialProgress());
  const [lastAnswerCorrect, setLastAnswerCorrect] = useState<boolean | null>(null);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [selectedScenarios, setSelectedScenarios] = useState<Scenario[]>([]);

  const currentChapter = useMemo(() => chapters[progress.currentChapter], [progress.currentChapter]);

  // Full pool for the current chapter – used for canPlayMore check
  const chapterScenarios = useMemo(() => {
    if (!currentChapter) return [];
    return scenarios.filter((s) => s.chapterId === currentChapter.id);
  }, [currentChapter]);

  const currentScenario: Scenario | undefined = useMemo(
    () => selectedScenarios[progress.currentScenario],
    [selectedScenarios, progress.currentScenario]
  );

  // Total for the main game run (5 per chapter × 4 chapters = 20)
  const totalScenariosInGame = useMemo(() => chapters.length * SCENARIOS_PER_ROUND, []);

  const completedScenarios = useMemo(() => progress.answeredScenarios.length, [progress.answeredScenarios]);

  // "Play More" is available as long as there are unseen scenarios left in this chapter
  const canPlayMore = useMemo(
    () => chapterScenarios.filter((s) => !progress.answeredScenarios.includes(s.id)).length > 0,
    [chapterScenarios, progress.answeredScenarios]
  );

  const startGame = useCallback(() => {
    setProgress(createInitialProgress());
    setScreen('chapter-intro');
    setLastAnswerCorrect(null);
    setSelectedAnswer(null);
    setShowFeedback(false);
    setSelectedScenarios([]);
  }, []);

  // Shared logic for beginning a new 5-scenario round in the current chapter.
  // Used by both startChapter (first time) and playMore (subsequent rounds).
  const beginRound = useCallback(() => {
    const newSelected = selectWeightedScenarios(chapterScenarios, progress.answeredScenarios);
    setSelectedScenarios(newSelected);
    setProgress((prev) => ({ ...prev, currentScenario: 0 }));
    setScreen('gameplay');
    setLastAnswerCorrect(null);
    setSelectedAnswer(null);
    setShowFeedback(false);
  }, [chapterScenarios, progress.answeredScenarios]);

  const startChapter = beginRound;
  const playMore = beginRound;

  const submitAnswer = useCallback(
    (answer: string) => {
      if (!currentScenario || showFeedback) return;

      const isCorrect = answer.trim().toLowerCase() === currentScenario.correctAnswer.trim().toLowerCase();
      setLastAnswerCorrect(isCorrect);
      setSelectedAnswer(answer);
      setShowFeedback(true);

      setProgress((prev) => {
        const chapterId = currentScenario.chapterId as ChapterId;
        const newStreak = isCorrect ? prev.streak + 1 : 0;
        const points = calculateScore(isCorrect, newStreak, currentScenario.difficulty);
        const delta = isCorrect
          ? currentScenario.metricEffects.correct
          : currentScenario.metricEffects.incorrect;

        return {
          ...prev,
          score: prev.score + points,
          totalCorrect: prev.totalCorrect + (isCorrect ? 1 : 0),
          totalAnswered: prev.totalAnswered + 1,
          streak: newStreak,
          bestStreak: Math.max(prev.bestStreak, newStreak),
          chapterScores: {
            ...prev.chapterScores,
            [chapterId]: {
              correct: prev.chapterScores[chapterId].correct + (isCorrect ? 1 : 0),
              total: prev.chapterScores[chapterId].total + 1,
            },
          },
          metrics: applyMetricDelta(prev.metrics, delta),
          answeredScenarios: [...prev.answeredScenarios, currentScenario.id],
          incorrectScenarios: isCorrect
            ? prev.incorrectScenarios
            : [...prev.incorrectScenarios, currentScenario.id],
        };
      });
    },
    [currentScenario, showFeedback]
  );

  const nextScenario = useCallback(() => {
    setLastAnswerCorrect(null);
    setSelectedAnswer(null);
    setShowFeedback(false);

    if (progress.currentScenario + 1 < selectedScenarios.length) {
      setProgress((prev) => ({
        ...prev,
        currentScenario: prev.currentScenario + 1,
      }));
    } else {
      setScreen('chapter-summary');
    }
  }, [progress.currentScenario, selectedScenarios.length]);

  const nextChapter = useCallback(() => {
    if (progress.currentChapter + 1 < chapters.length) {
      setProgress((prev) => ({
        ...prev,
        currentChapter: prev.currentChapter + 1,
        currentScenario: 0,
      }));
      setScreen('chapter-intro');
    } else {
      setScreen('final-results');
    }
    setLastAnswerCorrect(null);
    setSelectedAnswer(null);
    setShowFeedback(false);
  }, [progress.currentChapter]);

  const restartGame = useCallback(() => {
    setProgress(createInitialProgress());
    setScreen('start');
    setLastAnswerCorrect(null);
    setSelectedAnswer(null);
    setShowFeedback(false);
    setSelectedScenarios([]);
  }, []);

  const skipScenario = useCallback(() => {
    if (!currentScenario || showFeedback) return;

    const scenarioId = currentScenario.id;
    setLastAnswerCorrect(null);
    setSelectedAnswer(null);
    setShowFeedback(false);

    setProgress((prev) => ({
      ...prev,
      skippedScenarios: [...prev.skippedScenarios, scenarioId],
    }));

    if (progress.currentScenario + 1 < selectedScenarios.length) {
      setProgress((prev) => ({
        ...prev,
        currentScenario: prev.currentScenario + 1,
      }));
    } else {
      setScreen('chapter-summary');
    }
  }, [currentScenario, showFeedback, progress.currentScenario, selectedScenarios.length]);

  const skipChapter = useCallback(() => {
    setLastAnswerCorrect(null);
    setSelectedAnswer(null);
    setShowFeedback(false);
    if (progress.currentChapter + 1 < chapters.length) {
      setProgress((prev) => ({
        ...prev,
        currentChapter: prev.currentChapter + 1,
        currentScenario: 0,
      }));
      setScreen('chapter-intro');
    } else {
      setScreen('final-results');
    }
  }, [progress.currentChapter]);

  return {
    screen,
    progress,
    currentChapter,
    currentScenario,
    chapterScenarios,
    selectedScenarios,
    canPlayMore,
    lastAnswerCorrect,
    selectedAnswer,
    showFeedback,
    totalScenariosInGame,
    completedScenarios,
    startGame,
    startChapter,
    submitAnswer,
    nextScenario,
    nextChapter,
    skipScenario,
    skipChapter,
    restartGame,
    playMore,
  };
}
