import { useState } from 'react';
import type { Scenario } from '../types/game';

interface InteractionPanelProps {
  scenario: Scenario;
  onSubmit: (answer: string) => void;
  onSkip: () => void;
  selectedAnswer: string | null;
  showFeedback: boolean;
  isCorrect: boolean | null;
}

export function InteractionPanel({
  scenario,
  onSubmit,
  onSkip,
  selectedAnswer,
  showFeedback,
  isCorrect,
}: InteractionPanelProps) {
  const [numericInput, setNumericInput] = useState('');

  const handleNumericSubmit = () => {
    if (numericInput.trim()) {
      onSubmit(numericInput.trim());
    }
  };

  if (scenario.type === 'numeric-input') {
    return (
      <div className="bg-white rounded-xl border border-slate-200 p-5 animate-fade-in">
        <h4 className="text-sm font-semibold text-slate-700 mb-3">Your Answer</h4>
        <div className="flex gap-3">
          <input
            type="number"
            value={showFeedback ? (selectedAnswer ?? '') : numericInput}
            onChange={(e) => !showFeedback && setNumericInput(e.target.value)}
            placeholder="Enter your answer..."
            disabled={showFeedback}
            className={`flex-1 px-4 py-3 border-2 rounded-lg text-sm font-medium transition-colors outline-none ${
              showFeedback
                ? isCorrect
                  ? 'border-success-500 bg-success-50 text-success-700'
                  : 'border-danger-500 bg-danger-50 text-danger-700'
                : 'border-slate-200 focus:border-primary-400'
            }`}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !showFeedback) handleNumericSubmit();
            }}
          />
          {!showFeedback && (
            <button
              onClick={handleNumericSubmit}
              disabled={!numericInput.trim()}
              className="px-6 py-3 min-h-[44px] bg-primary-600 text-white rounded-lg font-medium text-sm hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Submit
            </button>
          )}
        </div>
        {showFeedback && !isCorrect && (
          <p className="mt-2 text-sm text-slate-600">
            Correct answer: <span className="font-bold text-success-700">{scenario.correctAnswer}</span>
          </p>
        )}
        {!showFeedback && (
          <div className="flex justify-center mt-3">
            <button
              onClick={onSkip}
              className="text-sm text-slate-400 hover:text-slate-600 transition-colors py-3 px-4 min-h-[44px] rounded-lg hover:bg-slate-100"
            >
              Skip Scenario →
            </button>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-5 animate-fade-in">
      <h4 className="text-sm font-semibold text-slate-700 mb-3">Select Your Answer</h4>
      <div className="flex flex-col gap-2.5">
        {scenario.options?.map((option) => {
          const isSelected = selectedAnswer === option.id;
          const isCorrectOption = option.id === scenario.correctAnswer;
          let optionStyle = 'border-slate-200 hover:border-primary-300 hover:bg-primary-50 cursor-pointer';

          if (showFeedback) {
            if (isCorrectOption) {
              optionStyle = 'border-success-500 bg-success-50 ring-1 ring-success-500';
            } else if (isSelected && !isCorrect) {
              optionStyle = 'border-danger-500 bg-danger-50 ring-1 ring-danger-500';
            } else {
              optionStyle = 'border-slate-200 opacity-50';
            }
          }

          return (
            <button
              key={option.id}
              onClick={() => !showFeedback && onSubmit(option.id)}
              disabled={showFeedback}
              className={`w-full text-left p-4 min-h-[44px] border-2 rounded-lg text-sm transition-all ${optionStyle}`}
            >
              <div className="flex items-start gap-3">
                <span className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold ${
                  showFeedback
                    ? isCorrectOption
                      ? 'border-success-500 bg-success-500 text-white'
                      : isSelected
                      ? 'border-danger-500 bg-danger-500 text-white'
                      : 'border-slate-300'
                    : 'border-slate-300'
                }`}>
                  {showFeedback ? (isCorrectOption ? '✓' : isSelected ? '✗' : '') : option.id.toUpperCase()}
                </span>
                <span className={`font-medium ${
                  showFeedback && isCorrectOption ? 'text-success-700' : showFeedback && isSelected && !isCorrect ? 'text-danger-700' : 'text-slate-700'
                }`}>
                  {option.label}
                </span>
              </div>
            </button>
          );
        })}
      </div>
      {!showFeedback && (
        <div className="flex justify-center mt-3">
          <button
            onClick={onSkip}
            className="text-sm text-slate-400 hover:text-slate-600 transition-colors py-3 px-4 min-h-[44px] rounded-lg hover:bg-slate-100"
          >
            Skip Scenario →
          </button>
        </div>
      )}
    </div>
  );
}
