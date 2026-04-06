import { useEffect } from 'react';
import type { FormulaSection } from '../types/game';

interface FormulaSheetProps {
  sections: FormulaSection[];
  chapterTitle: string;
  onClose: () => void;
}

export function FormulaSheet({ sections, chapterTitle, onClose }: FormulaSheetProps) {
  // Close on Escape key
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
    }
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Formula Sheet"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Panel */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[85dvh] sm:max-h-[85vh] flex flex-col overflow-hidden animate-fade-in">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-200 bg-primary-50 shrink-0">
          <div className="flex items-center gap-2">
            <span className="text-xl">📋</span>
            <div>
              <h2 className="text-sm font-bold text-primary-800">Formula Sheet</h2>
              <p className="text-xs text-primary-600">{chapterTitle}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-11 h-11 flex items-center justify-center rounded-lg text-slate-500 hover:bg-slate-200 hover:text-slate-700 transition-colors"
            aria-label="Close formula sheet"
          >
            ✕
          </button>
        </div>

        {/* Body */}
        <div className="overflow-y-auto flex-1 px-5 py-4 space-y-5">
          {sections.map((section, si) => (
            <div key={si}>
              <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                {section.title}
              </h3>

              {section.content.type === 'table' ? (
                <div className="overflow-x-auto rounded-lg border border-slate-200">
                  <table className="w-full text-sm text-left">
                    <thead>
                      <tr className="bg-slate-50">
                        {section.content.headers.map((h, i) => (
                          <th
                            key={i}
                            className="px-3 py-2 text-xs font-semibold text-slate-600 border-b border-slate-200"
                          >
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {section.content.rows.map((row, ri) => (
                        <tr key={ri} className={ri % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                          {row.map((cell, ci) => (
                            <td
                              key={ci}
                              className={`px-3 py-2 text-xs border-b border-slate-100 last:border-b-0 ${
                                ci === 0 ? 'font-semibold text-slate-700' : 'text-slate-600'
                              } ${
                                cell === 'Debit' ? 'text-primary-600' :
                                cell === 'Credit' ? 'text-success-600' : ''
                              }`}
                            >
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="space-y-2">
                  {section.content.items.map((item, ii) => (
                    <div
                      key={ii}
                      className="bg-slate-50 rounded-lg px-4 py-3 border border-slate-200"
                    >
                      <div className="flex items-start gap-2">
                        <span className="text-xs font-semibold text-slate-500 mt-0.5 shrink-0 w-4">
                          {ii + 1}.
                        </span>
                        <div className="min-w-0">
                          <p className="text-xs font-semibold text-slate-600 mb-0.5">
                            {item.label}
                          </p>
                          <p className="text-sm font-mono font-medium text-primary-700 break-words">
                            {item.expression}
                          </p>
                          {item.note && (
                            <p className="text-xs text-slate-400 mt-1 italic">{item.note}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
