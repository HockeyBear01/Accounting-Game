import type { ChapterConfig } from '../types/game';

interface ChapterIntroScreenProps {
  chapter: ChapterConfig;
  chapterIndex: number;
  totalChapters: number;
  onStart: () => void;
  onSkip: () => void;
}

export function ChapterIntroScreen({ chapter, chapterIndex, totalChapters, onStart, onSkip }: ChapterIntroScreenProps) {
  const isLastChapter = chapterIndex === totalChapters - 1;

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4">
      <div className="max-w-xl w-full animate-fade-in">
        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 px-6 py-8 text-center">
            <div className="text-4xl mb-3">{chapter.icon}</div>
            <div className="text-primary-200 text-xs font-semibold uppercase tracking-wider mb-2">
              Chapter {chapterIndex + 1}
            </div>
            <h2 className="text-2xl font-bold text-white mb-1">{chapter.title}</h2>
            <p className="text-primary-200 text-sm">{chapter.role}</p>
          </div>

          {/* Content */}
          <div className="px-6 py-6">
            <p className="text-sm text-slate-600 leading-relaxed mb-6">{chapter.description}</p>

            <div className="bg-slate-50 rounded-xl p-4 mb-6">
              <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">
                Chapter Objectives
              </h3>
              <ul className="space-y-2">
                {chapter.objectives.map((obj, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-5 h-5 bg-primary-100 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-primary-600 text-xs font-bold">{i + 1}</span>
                    </span>
                    <span className="text-sm text-slate-700">{obj}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={onStart}
              className="w-full py-3.5 bg-primary-600 text-white rounded-xl font-semibold text-sm hover:bg-primary-700 transition-colors shadow-sm"
            >
              Start Chapter →
            </button>

            {!isLastChapter && (
              <button
                onClick={onSkip}
                className="w-full mt-3 py-2.5 bg-transparent text-slate-400 rounded-xl font-medium text-xs hover:text-slate-600 hover:bg-slate-50 transition-colors border border-slate-200"
              >
                Skip to Next Chapter →
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
