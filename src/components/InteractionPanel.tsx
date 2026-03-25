import { Scenario } from '../types/game';

interface InteractionPanelProps {
  scenario: Scenario;
  selectedOptionId: string | null;
  locked: boolean;
  onSelect: (id: string) => void;
  onSubmit: () => void;
  onNext: () => void;
}

const InteractionPanel = ({ scenario, selectedOptionId, locked, onSelect, onSubmit, onNext }: InteractionPanelProps) => (
  <section className="mt-4 rounded-2xl bg-white p-5 shadow-card">
    <h3 className="text-lg font-semibold">Your Decision</h3>
    <div className="mt-3 space-y-2">
      {scenario.options.map((option) => {
        const isSelected = selectedOptionId === option.id;
        return (
          <button
            key={option.id}
            disabled={locked}
            onClick={() => onSelect(option.id)}
            className={`w-full rounded-xl border px-4 py-3 text-left transition ${isSelected ? 'border-blue-600 bg-blue-50' : 'border-slate-200 bg-white hover:border-blue-300'} ${locked ? 'cursor-not-allowed opacity-90' : ''}`}
          >
            {option.label}
          </button>
        );
      })}
    </div>
    <div className="mt-4 flex gap-3">
      <button
        onClick={onSubmit}
        disabled={!selectedOptionId || locked}
        className="rounded-xl bg-blue-700 px-4 py-2 font-semibold text-white disabled:cursor-not-allowed disabled:bg-slate-300"
      >
        Submit Decision
      </button>
      {locked && (
        <button onClick={onNext} className="rounded-xl bg-slate-900 px-4 py-2 font-semibold text-white">
          Continue
        </button>
      )}
    </div>
  </section>
);

export default InteractionPanel;
