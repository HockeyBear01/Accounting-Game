import type { PlayerProgress, ChapterId } from '../types/game';
import { chapters } from '../data/scenarios';
import {
  getOverallGrade,
  getChapterGrade,
  getPerformanceMessage,
  formatCurrency,
  formatNumber,
} from '../utils/gameLogic';

interface FinalResultsScreenProps {
  progress: PlayerProgress;
  onReplay: () => void;
}

export function FinalResultsScreen({ progress, onReplay }: FinalResultsScreenProps) {
  const overallGrade = getOverallGrade(progress);
  const overallPct = progress.totalAnswered > 0
    ? Math.round((progress.totalCorrect / progress.totalAnswered) * 100)
    : 0;
  const { title, message } = getPerformanceMessage(progress.totalCorrect, progress.totalAnswered);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-primary-900 to-slate-900 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full animate-fade-in">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-white/20">
            <span className="text-3xl">🏆</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">Challenge Complete</h1>
          <p className="text-primary-300 text-sm">{title}</p>
        </div>

        {/* Score Card */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-6">
          {/* Top stats */}
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 px-6 py-6">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-4xl font-bold text-white">{overallGrade}</div>
                <div className="text-xs text-primary-200 mt-1">Overall Grade</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white">{overallPct}%</div>
                <div className="text-xs text-primary-200 mt-1">Accuracy</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white">{formatNumber(progress.score)}</div>
                <div className="text-xs text-primary-200 mt-1">Total Score</div>
              </div>
            </div>
          </div>

          <div className="px-6 py-6 space-y-6">
            {/* Performance message */}
            <p className="text-sm text-slate-600 leading-relaxed text-center">{message}</p>

            {/* Chapter Breakdown */}
            <div>
              <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">
                Performance by Chapter
              </h3>
              <div className="space-y-3">
                {chapters.map((ch, i) => {
                  const score = progress.chapterScores[ch.id as ChapterId];
                  const pct = score.total > 0 ? Math.round((score.correct / score.total) * 100) : 0;
                  const grade = getChapterGrade(score.correct, score.total);

                  return (
                    <div key={ch.id} className="flex items-center gap-3 bg-slate-50 rounded-lg p-3">
                      <span className="text-xl">{ch.icon}</span>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-medium text-slate-700 truncate">
                            Ch. {i + 1}: {ch.title}
                          </span>
                          <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                            pct >= 80 ? 'bg-success-100 text-success-700' :
                            pct >= 60 ? 'bg-primary-100 text-primary-700' :
                            'bg-danger-100 text-danger-700'
                          }`}>
                            {grade}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="flex-1 bg-slate-200 rounded-full h-1.5">
                            <div
                              className={`h-full rounded-full transition-all duration-500 ${
                                pct >= 80 ? 'bg-success-500' : pct >= 60 ? 'bg-primary-500' : 'bg-danger-500'
                              }`}
                              style={{ width: `${pct}%` }}
                            />
                          </div>
                          <span className="text-xs text-slate-500 w-16 text-right">
                            {score.correct}/{score.total} ({pct}%)
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="bg-slate-50 rounded-lg p-3 text-center">
                <div className="text-lg font-bold text-slate-800">{progress.bestStreak}</div>
                <div className="text-xs text-slate-500">Best Streak</div>
              </div>
              <div className="bg-slate-50 rounded-lg p-3 text-center">
                <div className="text-lg font-bold text-slate-800">{formatCurrency(progress.metrics.cash)}</div>
                <div className="text-xs text-slate-500">Final Cash</div>
              </div>
              <div className="bg-slate-50 rounded-lg p-3 text-center">
                <div className="text-lg font-bold text-slate-800">{formatCurrency(progress.metrics.profit)}</div>
                <div className="text-xs text-slate-500">Total Profit</div>
              </div>
              <div className="bg-slate-50 rounded-lg p-3 text-center">
                <div className="text-lg font-bold text-slate-800">{progress.metrics.reputation}/100</div>
                <div className="text-xs text-slate-500">Reputation</div>
              </div>
            </div>

            {/* Replay */}
            <button
              onClick={onReplay}
              className="w-full py-3.5 bg-primary-600 text-white rounded-xl font-semibold text-sm hover:bg-primary-700 transition-colors shadow-sm"
            >
              Play Again
            </button>
          </div>
        </div>

        {/* Attribution */}
        <div className="text-center text-primary-400 text-xs space-y-1 mt-6">
          <p>Created by Jonas Lang and Jaime Gandy</p>
          <p>BUSI 7230: Cost Analysis and Systems</p>
        </div>
      </div>
    </div>
  );
}
