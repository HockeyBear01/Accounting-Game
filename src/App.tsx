import { useState } from 'react';
import AppLayout from './components/AppLayout';
import CFOFeedbackPanel from './components/CFOFeedbackPanel';
import ChapterIntroScreen from './components/ChapterIntroScreen';
import FinalResultsScreen from './components/FinalResultsScreen';
import InteractionPanel from './components/InteractionPanel';
import MetricsPanel from './components/MetricsPanel';
import ScenarioCard from './components/ScenarioCard';
import StartScreen from './components/StartScreen';
import SummaryScreen from './components/SummaryScreen';
import TopBar from './components/TopBar';
import { useGameEngine } from './game/useGameEngine';

const App = () => {
  const engine = useGameEngine();
  const [draftOptionId, setDraftOptionId] = useState<string | null>(null);

  if (!engine.state.started) {
    return <StartScreen onStart={engine.startGame} />;
  }

  if (engine.state.gameCompleted) {
    return (
      <div className="min-h-screen bg-slate-100 px-4 py-8">
        <FinalResultsScreen
          score={engine.state.score}
          accuracy={engine.state.metrics.accuracy}
          topicPerformance={engine.state.topicPerformance}
          onReplay={() => {
            setDraftOptionId(null);
            engine.resetGame();
          }}
        />
      </div>
    );
  }

  if (!engine.currentScenario) {
    return null;
  }

  const chapterProgress = `Chapter ${engine.chapterIndex + 1} of ${engine.chapters.length}`;
  const scenarioProgress = `Scenario ${engine.scenarioPositionInChapter + 1} of ${engine.chapterScenarios.length}`;
  const currentScenarioIsEndOfChapter = engine.scenarioPositionInChapter === engine.chapterScenarios.length - 1;
  const shouldShowSummary = Boolean(
    engine.state.lastResult &&
    currentScenarioIsEndOfChapter &&
    !engine.state.chapterSummariesShown.includes(engine.currentChapter.id)
  );

  const onSubmit = () => {
    if (!draftOptionId) return;
    engine.submitAnswer(engine.currentScenario!, draftOptionId);
  };

  const onContinue = () => {
    setDraftOptionId(null);
    engine.advanceScenario();
  };

  return (
    <AppLayout
      topBar={
        <TopBar
          role={engine.currentChapter.role}
          score={engine.state.score}
          chapterProgress={chapterProgress}
          scenarioProgress={scenarioProgress}
        />
      }
      metricsPanel={<MetricsPanel metrics={engine.state.metrics} />}
      main={
        engine.state.chapterIntroVisible ? (
          <ChapterIntroScreen
            chapter={engine.currentChapter}
            chapterNumber={engine.chapterIndex}
            onContinue={engine.continueFromChapterIntro}
          />
        ) : shouldShowSummary ? (
          <SummaryScreen
            chapter={engine.currentChapter}
            onContinue={(chapterId) => {
              engine.continuePastSummary(chapterId);
              onContinue();
            }}
          />
        ) : (
          <>
            <ScenarioCard scenario={engine.currentScenario} />
            <InteractionPanel
              scenario={engine.currentScenario}
              selectedOptionId={draftOptionId}
              locked={Boolean(engine.state.lastResult)}
              onSelect={setDraftOptionId}
              onSubmit={onSubmit}
              onNext={onContinue}
            />
          </>
        )
      }
      feedback={<CFOFeedbackPanel feedback={engine.state.lastResult?.feedback ?? null} wasCorrect={engine.state.lastResult?.wasCorrect} />}
    />
  );
};

export default App;
