import { useGameState } from './hooks/useGameState';
import { StartScreen } from './components/StartScreen';
import { ChapterIntroScreen } from './components/ChapterIntroScreen';
import { GameplayScreen } from './components/GameplayScreen';
import { ChapterSummaryScreen } from './components/ChapterSummaryScreen';
import { FinalResultsScreen } from './components/FinalResultsScreen';
import { chapters } from './data/scenarios';

function App() {
  const {
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
    restartGame,
  } = useGameState();

  switch (screen) {
    case 'start':
      return <StartScreen onStart={startGame} />;

    case 'chapter-intro':
      return currentChapter ? (
        <ChapterIntroScreen
          chapter={currentChapter}
          chapterIndex={progress.currentChapter}
          onStart={startChapter}
        />
      ) : null;

    case 'gameplay':
      return currentChapter && currentScenario ? (
        <GameplayScreen
          chapter={currentChapter}
          scenario={currentScenario}
          scenarioIndex={progress.currentScenario}
          totalChapterScenarios={chapterScenarios.length}
          progress={progress}
          totalScenariosInGame={totalScenariosInGame}
          completedScenarios={completedScenarios}
          lastAnswerCorrect={lastAnswerCorrect}
          selectedAnswer={selectedAnswer}
          showFeedback={showFeedback}
          onSubmit={submitAnswer}
          onNext={nextScenario}
        />
      ) : null;

    case 'chapter-summary':
      return currentChapter ? (
        <ChapterSummaryScreen
          chapter={currentChapter}
          chapterIndex={progress.currentChapter}
          progress={progress}
          isLastChapter={progress.currentChapter === chapters.length - 1}
          onNext={nextChapter}
        />
      ) : null;

    case 'final-results':
      return <FinalResultsScreen progress={progress} onReplay={restartGame} />;

    default:
      return null;
  }
}

export default App;
