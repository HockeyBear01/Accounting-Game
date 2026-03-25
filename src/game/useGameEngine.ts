import { useMemo, useState } from 'react';
import { chapters, scenarios } from '../data/gameData';
import { Chapter, ChapterId, Feedback, GameState, Metrics, Scenario, Topic } from '../types/game';

const baseMetrics: Metrics = {
  cash: 50000,
  inventory: 18000,
  profit: 0,
  accuracy: 0,
  reputation: 70,
};

const initialTopicPerformance = {
  debitsCredits: { attempts: 0, correct: 0 },
  fifoLifo: { attempts: 0, correct: 0 },
  breakEven: { attempts: 0, correct: 0 },
};

const initialState: GameState = {
  started: false,
  chapterIntroVisible: true,
  currentScenarioIndex: 0,
  selectedOptionId: null,
  lastResult: null,
  metrics: baseMetrics,
  score: 0,
  streak: 0,
  topicPerformance: initialTopicPerformance,
  chapterSummariesShown: [],
  gameCompleted: false,
};

const mergeMetrics = (current: Metrics, delta: Partial<Metrics>): Metrics => ({
  ...current,
  cash: current.cash + (delta.cash ?? 0),
  inventory: Math.max(0, current.inventory + (delta.inventory ?? 0)),
  profit: current.profit + (delta.profit ?? 0),
  accuracy: current.accuracy,
  reputation: Math.max(0, Math.min(100, current.reputation + (delta.reputation ?? 0))),
});

export const useGameEngine = () => {
  const [state, setState] = useState<GameState>(initialState);

  const currentScenario = scenarios[state.currentScenarioIndex] ?? null;
  const currentChapterId = currentScenario?.chapterId ?? 'chapter4';

  const chapterIndex = chapters.findIndex((chapter) => chapter.id === currentChapterId);

  const chapterScenarios = useMemo(
    () => scenarios.filter((scenario) => scenario.chapterId === currentChapterId),
    [currentChapterId]
  );

  const scenarioPositionInChapter = useMemo(
    () => chapterScenarios.findIndex((scenario) => scenario.id === currentScenario?.id),
    [chapterScenarios, currentScenario?.id]
  );

  const startGame = () => {
    setState({ ...initialState, started: true, chapterIntroVisible: true });
  };

  const continueFromChapterIntro = () => {
    setState((prev) => ({ ...prev, chapterIntroVisible: false }));
  };

  const submitAnswer = (scenario: Scenario, selectedOptionId: string) => {
    if (state.lastResult) return;

    const wasCorrect = scenario.correctOptionId === selectedOptionId;
    const feedback: Feedback = wasCorrect ? scenario.feedback.correct : scenario.feedback.incorrect;
    const impact = wasCorrect ? scenario.metricImpact.correct : scenario.metricImpact.incorrect;
    const nextStreak = wasCorrect ? state.streak + 1 : 0;
    const streakBonus = wasCorrect ? Math.min(nextStreak, 5) * 5 : 0;
    const baseScoreDelta = wasCorrect ? 100 : 20;

    setState((prev) => {
      const updatedTopic = { ...prev.topicPerformance };
      const topic: Topic = scenario.topic;
      updatedTopic[topic] = {
        attempts: updatedTopic[topic].attempts + 1,
        correct: updatedTopic[topic].correct + (wasCorrect ? 1 : 0),
      };

      const answeredCount = prev.currentScenarioIndex + 1;
      const correctTotal = Object.values(updatedTopic).reduce((acc, value) => acc + value.correct, 0);
      const accuracyPct = Math.round((correctTotal / answeredCount) * 100);

      return {
        ...prev,
        selectedOptionId,
        lastResult: { wasCorrect, feedback },
        metrics: { ...mergeMetrics(prev.metrics, impact), accuracy: accuracyPct },
        score: prev.score + baseScoreDelta + streakBonus,
        streak: nextStreak,
        topicPerformance: updatedTopic,
      };
    });
  };

  const advanceScenario = () => {
    setState((prev) => {
      const nextIndex = prev.currentScenarioIndex + 1;
      const nextScenario = scenarios[nextIndex];
      const completedChapter = scenarios[prev.currentScenarioIndex]?.chapterId as ChapterId;

      if (!nextScenario) {
        return {
          ...prev,
          gameCompleted: true,
          chapterIntroVisible: false,
          lastResult: null,
          selectedOptionId: null,
        };
      }

      const isNewChapter = nextScenario.chapterId !== completedChapter;
      return {
        ...prev,
        currentScenarioIndex: nextIndex,
        selectedOptionId: null,
        lastResult: null,
        chapterIntroVisible: isNewChapter,
        chapterSummariesShown: prev.chapterSummariesShown.includes(completedChapter)
          ? prev.chapterSummariesShown
          : [...prev.chapterSummariesShown, completedChapter],
      };
    });
  };

  const continuePastSummary = (chapterId: ChapterId) => {
    setState((prev) => ({
      ...prev,
      chapterSummariesShown: prev.chapterSummariesShown.includes(chapterId)
        ? prev.chapterSummariesShown
        : [...prev.chapterSummariesShown, chapterId],
    }));
  };

  const resetGame = () => setState(initialState);

  return {
    state,
    chapters,
    scenarios,
    currentScenario,
    currentChapter: chapters[Math.max(0, chapterIndex)] as Chapter,
    chapterIndex,
    chapterScenarios,
    scenarioPositionInChapter,
    startGame,
    continueFromChapterIntro,
    submitAnswer,
    advanceScenario,
    continuePastSummary,
    resetGame,
  };
};
