import { Scenario } from '../types/game';

const ScenarioCard = ({ scenario }: { scenario: Scenario }) => (
  <section className="rounded-2xl bg-white p-5 shadow-card">
    <p className="text-sm font-semibold text-blue-700">Objective: {scenario.roleObjective}</p>
    <h2 className="mt-2 text-2xl font-bold">{scenario.title}</h2>
    <p className="mt-3 text-slate-700">{scenario.prompt}</p>

    {scenario.type === 'inventory' && (
      <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-3">
        <p className="mb-2 text-sm font-semibold">Inventory layers (oldest to newest)</p>
        <div className="flex flex-wrap gap-2">
          {scenario.inventoryLayers.map((layer, idx) => (
            <div key={`${layer.units}-${idx}`} className="rounded-lg border bg-white px-3 py-2 text-sm">
              {layer.units} units @ ${layer.costPerUnit}
            </div>
          ))}
        </div>
        <p className="mt-2 text-sm text-slate-600">Units sold: {scenario.unitsSold}</p>
      </div>
    )}

    {scenario.type === 'breakEven' && (
      <div className="mt-4 grid grid-cols-1 gap-2 rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm sm:grid-cols-3">
        <div>Fixed Costs: <strong>${scenario.fixedCost.toLocaleString()}</strong></div>
        <div>Price/Unit: <strong>${scenario.pricePerUnit}</strong></div>
        <div>Variable Cost/Unit: <strong>${scenario.variableCost}</strong></div>
      </div>
    )}
  </section>
);

export default ScenarioCard;
