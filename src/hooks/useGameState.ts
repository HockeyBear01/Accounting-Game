import { useState, useCallback, useMemo } from 'react';
import type { GameScreen, PlayerProgress, Scenario, ChapterId } from '../types/game';
import { chapters, scenarios } from '../data/scenarios';
import {
  createInitialProgress,
  calculateScore,
  applyMetricDelta,
} from '../utils/gameLogic';

export function useGameState() {
  const [screen, setScreen] = useState<GameScreen>('start');
  const [progress, setProgress] = useState<PlayerProgress>(createInitialProgress());
  const [lastAnswerCorrect, setLastAnswerCorrect] = useState<boolean | null>(null);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);

  const currentChapter = useMemo(() => chapters[progress.currentChapter], [progress.currentChapter]);

  const chapterScenarios = useMemo(() => {
    if (!currentChapter) return [];
    return scenarios.filter((s) => s.chapterId === currentChapter.id);
  }, [currentChapter]);

  const currentScenario: Scenario | undefined = useMemo(
    () => chapterScenarios[progress.currentScenario],
    [chapterScenarios, progress.currentScenario]
  );

  const totalScenariosInGame = useMemo(() => scenarios.length, []);

  const completedScenarios = useMemo(() => progress.answeredScenarios.length, [progress.answeredScenarios]);

  const startGame = useCallback(() => {
    setProgress(createInitialProgress());
    setScreen('chapter-intro');
    setLastAnswerCorrect(null);
    setSelectedAnswer(null);
    setShowFeedback(false);
  }, []);

  const startChapter = useCallback(() => {
    setScreen('gameplay');
    setLastAnswerCorrect(null);
    setSelectedAnswer(null);
    setShowFeedback(false);
  }, []);

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
        };
      });
    },
    [currentScenario, showFeedback]
  );

  const nextScenario = useCallback(() => {
    setLastAnswerCorrect(null);
    setSelectedAnswer(null);
    setShowFeedback(false);

    if (progress.currentScenario + 1 < chapterScenarios.length) {
      setProgress((prev) => ({
        ...prev,
        currentScenario: prev.currentScenario + 1,
      }));
    } else {
      setScreen('chapter-summary');
    }
  }, [progress.currentScenario, chapterScenarios.length]);

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
  }, []);

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
    skipChapter,
    restartGame,
  };
}
