import { useState } from 'react';
import type { CFOFeedback } from '../types/game';

interface CFOFeedbackPanelProps {
  feedback: CFOFeedback;
  isCorrect: boolean;
  onNext: () => void;
}

export function CFOFeedbackPanel({ feedback, isCorrect, onNext }: CFOFeedbackPanelProps) {
  const [showExplainMore, setShowExplainMore] = useState(false);

  return (
    <div className={`rounded-xl border-2 overflow-hidden animate-slide-up ${
      isCorrect ? 'border-success-500 bg-success-50' : 'border-danger-500 bg-danger-50'
    }`}>
      {/* Header */}
      <div className={`px-5 py-3 flex items-center gap-3 ${
        isCorrect ? 'bg-success-100' : 'bg-danger-100'
      }`}>
        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
          <span className="text-lg">👔</span>
        </div>
        <div>
          <div className="text-xs text-slate-500">CFO Feedback</div>
          <div className="text-sm font-bold text-slate-800">Jordan Blake, CFO</div>
        </div>
        <div className={`ml-auto px-3 py-1 rounded-full text-xs font-bold ${
          isCorrect ? 'bg-success-500 text-white' : 'bg-danger-500 text-white'
        }`}>
          {isCorrect ? 'Correct' : 'Incorrect'}
        </div>
      </div>

      {/* Main feedback */}
      <div className="px-5 py-4">
        <p className="text-sm text-slate-700 leading-relaxed mb-4">
          {isCorrect ? feedback.correct : feedback.incorrect}
        </p>

        {/* Key insight cards */}
        <div className="grid gap-3 sm:grid-cols-2 mb-4">
          <div className="bg-white rounded-lg p-3 border border-slate-200">
            <div className="text-xs font-bold text-primary-600 mb-1">💡 Key Insight</div>
            <p className="text-xs text-slate-600 leading-relaxed">{feedback.keyInsight}</p>
          </div>
          <div className="bg-white rounded-lg p-3 border border-slate-200">
            <div className="text-xs font-bold text-warning-500 mb-1">⚠️ Common Mistake</div>
            <p className="text-xs text-slate-600 leading-relaxed">{feedback.commonMistake}</p>
          </div>
        </div>

        <div className="bg-white rounded-lg p-3 border border-slate-200 mb-4">
          <div className="text-xs font-bold text-success-600 mb-1">🏢 Why This Matters</div>
          <p className="text-xs text-slate-600 leading-relaxed">{feedback.whyItMatters}</p>
        </div>

        {/* Explain More */}
        <button
          onClick={() => setShowExplainMore(!showExplainMore)}
          className="flex items-center gap-2 text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors mb-4 min-h-[44px] py-2"
        >
          <span className={`transition-transform ${showExplainMore ? 'rotate-90' : ''}`}>▶</span>
          {showExplainMore ? 'Show Less' : 'Explain More'}
        </button>

        {showExplainMore && (
          <div className="bg-white rounded-lg p-4 border border-primary-200 mb-4 animate-fade-in">
            <p className="text-sm text-slate-700 leading-relaxed">{feedback.explainMore}</p>
          </div>
        )}

        {/* Next button */}
        <button
          onClick={onNext}
          className="w-full py-3 bg-primary-600 text-white rounded-lg font-semibold text-sm hover:bg-primary-700 transition-colors shadow-sm"
        >
          Continue →
        </button>
      </div>
    </div>
  );
}
