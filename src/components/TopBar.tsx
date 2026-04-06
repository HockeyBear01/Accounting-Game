import type { PlayerProgress, ChapterConfig } from '../types/game';
import { formatNumber } from '../utils/gameLogic';

interface TopBarProps {
  chapter?: ChapterConfig;
  progress: PlayerProgress;
  totalScenarios: number;
  completedScenarios: number;
  showProgress?: boolean;
}

export function TopBar({ chapter, progress, totalScenarios, completedScenarios, showProgress = true }: TopBarProps) {
  const displayCompleted = Math.min(completedScenarios, totalScenarios);
  const progressPct = totalScenarios > 0 ? (displayCompleted / totalScenarios) * 100 : 0;

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-30">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-9 h-9 bg-primary-600 rounded-lg flex items-center justify-center shrink-0">
            <span className="text-white text-lg">★</span>
          </div>
          <div className="min-w-0">
            <h1 className="text-sm font-bold text-slate-800 truncate">NorthStar Goods</h1>
            {chapter && (
              <p className="text-xs text-slate-500 truncate">{chapter.role}</p>
            )}
          </div>
        </div>

        {showProgress && (
          <div className="hidden sm:flex items-center gap-3 flex-1 max-w-xs">
            <div className="flex-1 bg-slate-100 rounded-full h-2 overflow-hidden">
              <div
                className="bg-primary-500 h-full rounded-full transition-all duration-500"
                style={{ width: `${progressPct}%` }}
              />
            </div>
            <span className="text-xs text-slate-500 whitespace-nowrap">
              {displayCompleted}/{totalScenarios}
            </span>
          </div>
        )}

        <div className="flex items-center gap-4">
          {progress.streak >= 2 && (
            <div className="hidden sm:flex items-center gap-1 text-warning-500">
              <span className="text-sm">🔥</span>
              <span className="text-xs font-semibold">{progress.streak}</span>
            </div>
          )}
          <div className="bg-primary-50 text-primary-700 px-3 py-1.5 rounded-lg">
            <span className="text-xs font-medium">Score: </span>
            <span className="text-sm font-bold">{formatNumber(progress.score)}</span>
          </div>
        </div>
      </div>
    </header>
  );
}
