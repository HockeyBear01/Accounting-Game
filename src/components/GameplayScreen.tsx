import { useState, useEffect } from 'react';
import { Scenario, ChapterConfig, PlayerProgress, CompanyMetrics } from '../types/game';
import { TopBar } from './TopBar';
import { MetricsPanel } from './MetricsPanel';
import { ScenarioCard } from './ScenarioCard';
import { InteractionPanel } from './InteractionPanel';
import { CFOFeedbackPanel } from './CFOFeedbackPanel';

interface GameplayScreenProps {
  chapter: ChapterConfig;
  scenario: Scenario;
  scenarioIndex: number;
  totalChapterScenarios: number;
  progress: PlayerProgress;
  totalScenariosInGame: number;
  completedScenarios: number;
  lastAnswerCorrect: boolean | null;
  selectedAnswer: string | null;
  showFeedback: boolean;
  onSubmit: (answer: string) => void;
  onNext: () => void;
}

export function GameplayScreen({
  chapter,
  scenario,
  scenarioIndex,
  totalChapterScenarios,
  progress,
  totalScenariosInGame,
  completedScenarios,
  lastAnswerCorrect,
  selectedAnswer,
  showFeedback,
  onSubmit,
  onNext,
}: GameplayScreenProps) {
  const [prevMetrics, setPrevMetrics] = useState<CompanyMetrics | undefined>(undefined);

  useEffect(() => {
    if (showFeedback) {
      // Store previous metrics for delta display
      const timer = setTimeout(() => setPrevMetrics(undefined), 2000);
      return () => clearTimeout(timer);
    }
  }, [showFeedback]);

  useEffect(() => {
    if (!showFeedback) {
      setPrevMetrics({ ...progress.metrics });
    }
  }, [scenario.id]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col">
      <TopBar
        chapter={chapter}
        progress={progress}
        totalScenarios={totalScenariosInGame}
        completedScenarios={completedScenarios}
      />

      <div className="flex-1 max-w-4xl mx-auto w-full px-4 py-4 sm:py-6 space-y-4">
        {/* Metrics */}
        <MetricsPanel
          metrics={progress.metrics}
          previousMetrics={showFeedback ? prevMetrics : undefined}
        />

        {/* Scenario */}
        <ScenarioCard
          scenario={scenario}
          scenarioIndex={scenarioIndex}
          totalScenarios={totalChapterScenarios}
        />

        {/* Interaction */}
        <InteractionPanel
          scenario={scenario}
          onSubmit={onSubmit}
          selectedAnswer={selectedAnswer}
          showFeedback={showFeedback}
          isCorrect={lastAnswerCorrect}
        />

        {/* CFO Feedback */}
        {showFeedback && lastAnswerCorrect !== null && (
          <CFOFeedbackPanel
            feedback={scenario.feedback}
            isCorrect={lastAnswerCorrect}
            onNext={onNext}
          />
        )}
      </div>
    </div>
  );
}
