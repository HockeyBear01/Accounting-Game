import type { ChapterConfig, PlayerProgress, ChapterId } from '../types/game';
import { getChapterGrade, getChapterSummary } from '../utils/gameLogic';

interface ChapterSummaryScreenProps {
  chapter: ChapterConfig;
  chapterIndex: number;
  progress: PlayerProgress;
  isLastChapter: boolean;
  canPlayMore: boolean;
  onNext: () => void;
  onPlayMore: () => void;
}

export function ChapterSummaryScreen({
  chapter,
  chapterIndex,
  progress,
  isLastChapter,
  canPlayMore,
  onNext,
  onPlayMore,
}: ChapterSummaryScreenProps) {
  const chapterScore = progress.chapterScores[chapter.id as ChapterId];
  const grade = getChapterGrade(chapterScore.correct, chapterScore.total);
  const summary = getChapterSummary(chapter.id as ChapterId, chapterScore.correct, chapterScore.total);
  const pct = chapterScore.total > 0 ? Math.round((chapterScore.correct / chapterScore.total) * 100) : 0;

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4">
      <div className="max-w-xl w-full animate-fade-in">
        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
          {/* Header */}
          <div className={`px-6 py-6 text-center ${pct >= 70 ? 'bg-gradient-to-r from-success-600 to-success-700' : 'bg-gradient-to-r from-primary-600 to-primary-700'}`}>
            <div className="text-xs text-white/70 uppercase tracking-wider mb-1">Chapter {chapterIndex + 1} Complete</div>
            <h2 className="text-xl font-bold text-white mb-3">{chapter.title}</h2>
            <div className="inline-flex items-center gap-4 bg-white/20 backdrop-blur rounded-xl px-6 py-3">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">{grade}</div>
                <div className="text-xs text-white/70">Grade</div>
              </div>
              <div className="w-px h-10 bg-white/20" />
              <div className="text-center">
                <div className="text-3xl font-bold text-white">{pct}%</div>
                <div className="text-xs text-white/70">Accuracy</div>
              </div>
              <div className="w-px h-10 bg-white/20" />
              <div className="text-center">
                <div className="text-3xl font-bold text-white">{chapterScore.correct}/{chapterScore.total}</div>
                <div className="text-xs text-white/70">Correct</div>
              </div>
            </div>
          </div>

          {/* Summary */}
          <div className="px-6 py-6 space-y-4">
            {/* Strengths */}
            <div className="bg-success-50 rounded-xl p-4 border border-success-100">
              <h3 className="text-xs font-bold text-success-700 uppercase tracking-wider mb-2">Strengths</h3>
              <ul className="space-y-1.5">
                {summary.strengths.map((s, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                    <span className="text-success-500 shrink-0">✓</span>
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            {/* Areas for Improvement */}
            <div className="bg-primary-50 rounded-xl p-4 border border-primary-100">
              <h3 className="text-xs font-bold text-primary-700 uppercase tracking-wider mb-2">Areas for Improvement</h3>
              <ul className="space-y-1.5">
                {summary.improvements.map((s, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                    <span className="text-primary-500 shrink-0">→</span>
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            {/* CFO Advice */}
            <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg">👔</span>
                <span className="text-xs font-bold text-slate-700">CFO Jordan Blake's Advice</span>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed italic">"{summary.advice}"</p>
            </div>

            {/* Play More – available while unseen scenarios remain in this chapter */}
            {canPlayMore && (
              <button
                onClick={onPlayMore}
                className="w-full py-3.5 bg-white text-primary-600 rounded-xl font-semibold text-sm border-2 border-primary-300 hover:bg-primary-50 transition-colors"
              >
                Play More — Keep Practicing This Topic
              </button>
            )}

            <button
              onClick={onNext}
              className="w-full py-3.5 bg-primary-600 text-white rounded-xl font-semibold text-sm hover:bg-primary-700 transition-colors shadow-sm"
            >
              {isLastChapter ? 'View Final Results' : 'Next Chapter →'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
