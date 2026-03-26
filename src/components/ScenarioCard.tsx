import type { Scenario, InventoryVisualData, BreakEvenVisualData } from '../types/game';
import { formatCurrency } from '../utils/gameLogic';

interface ScenarioCardProps {
  scenario: Scenario;
  scenarioIndex: number;
  totalScenarios: number;
}

function InventoryVisual({ data }: { data: InventoryVisualData }) {
  return (
    <div className="mt-4 bg-slate-50 rounded-lg p-4">
      <h4 className="text-sm font-semibold text-slate-700 mb-3">Inventory Layers</h4>
      <div className="flex flex-col gap-2">
        {[...data.layers].reverse().map((layer, i) => (
          <div
            key={i}
            className="flex items-center gap-3 bg-white rounded-lg p-3 border border-slate-200"
          >
            <div className="w-8 h-8 bg-primary-100 rounded flex items-center justify-center text-xs font-bold text-primary-700">
              {data.layers.length - i}
            </div>
            <div className="flex-1">
              <span className="text-sm font-medium text-slate-700">{layer.label}</span>
            </div>
            <div className="text-right">
              <div className="text-sm font-semibold text-slate-800">
                {layer.units} units @ {formatCurrency(layer.costPerUnit)}
              </div>
              <div className="text-xs text-slate-500">
                Total: {formatCurrency(layer.units * layer.costPerUnit)}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-3 pt-3 border-t border-slate-200 flex justify-between items-center">
        <span className="text-sm font-medium text-slate-600">Units to sell:</span>
        <span className="text-lg font-bold text-primary-700">{data.unitsSold} units</span>
      </div>
    </div>
  );
}

function BreakEvenVisual({ data }: { data: BreakEvenVisualData }) {
  const contributionMargin = data.pricePerUnit - data.variableCostPerUnit;
  const breakEvenUnits = Math.ceil(data.fixedCosts / contributionMargin);
  const maxUnits = Math.ceil(breakEvenUnits * 1.5);
  const points = 6;

  return (
    <div className="mt-4 bg-slate-50 rounded-lg p-4">
      <h4 className="text-sm font-semibold text-slate-700 mb-3">Cost & Revenue Data</h4>
      <div className="grid grid-cols-3 gap-3 mb-4">
        <div className="bg-white rounded-lg p-3 border border-slate-200 text-center">
          <div className="text-xs text-slate-500 mb-1">Fixed Costs</div>
          <div className="text-sm font-bold text-slate-800">{formatCurrency(data.fixedCosts)}</div>
        </div>
        <div className="bg-white rounded-lg p-3 border border-slate-200 text-center">
          <div className="text-xs text-slate-500 mb-1">Variable Cost/Unit</div>
          <div className="text-sm font-bold text-slate-800">{formatCurrency(data.variableCostPerUnit)}</div>
        </div>
        <div className="bg-white rounded-lg p-3 border border-slate-200 text-center">
          <div className="text-xs text-slate-500 mb-1">Price/Unit</div>
          <div className="text-sm font-bold text-slate-800">{formatCurrency(data.pricePerUnit)}</div>
        </div>
      </div>
      {/* Simple chart representation */}
      <div className="bg-white rounded-lg p-4 border border-slate-200">
        <div className="flex justify-between text-xs text-slate-500 mb-2">
          <span>Revenue vs Total Cost</span>
          <span>Break-even zone</span>
        </div>
        <div className="relative h-32">
          {/* Y-axis labels */}
          <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-xs text-slate-400 pr-2">
            <span>{formatCurrency(maxUnits * data.pricePerUnit)}</span>
            <span>{formatCurrency(data.fixedCosts)}</span>
            <span>$0</span>
          </div>
          {/* Chart area */}
          <div className="ml-16 relative h-full">
            <svg className="w-full h-full" viewBox={`0 0 ${points * 50} 120`} preserveAspectRatio="none">
              {/* Revenue line */}
              <polyline
                fill="none"
                stroke="#3b82f6"
                strokeWidth="2"
                points={Array.from({ length: points + 1 }, (_, i) => {
                  const units = (maxUnits / points) * i;
                  const revenue = units * data.pricePerUnit;
                  const maxVal = maxUnits * data.pricePerUnit;
                  return `${i * 50},${120 - (revenue / maxVal) * 120}`;
                }).join(' ')}
              />
              {/* Total cost line */}
              <polyline
                fill="none"
                stroke="#ef4444"
                strokeWidth="2"
                points={Array.from({ length: points + 1 }, (_, i) => {
                  const units = (maxUnits / points) * i;
                  const totalCost = data.fixedCosts + units * data.variableCostPerUnit;
                  const maxVal = maxUnits * data.pricePerUnit;
                  return `${i * 50},${120 - (totalCost / maxVal) * 120}`;
                }).join(' ')}
              />
              {/* Break-even point */}
              {(() => {
                const beX = (breakEvenUnits / maxUnits) * (points * 50);
                const beRevenue = breakEvenUnits * data.pricePerUnit;
                const maxVal = maxUnits * data.pricePerUnit;
                const beY = 120 - (beRevenue / maxVal) * 120;
                return (
                  <circle cx={beX} cy={beY} r="4" fill="#22c55e" stroke="white" strokeWidth="2" />
                );
              })()}
            </svg>
          </div>
        </div>
        <div className="ml-16 flex justify-between text-xs text-slate-400 mt-1">
          <span>0 units</span>
          <span>{Math.round(maxUnits)} units</span>
        </div>
        <div className="flex gap-4 justify-center mt-2 text-xs">
          <span className="flex items-center gap-1">
            <span className="w-3 h-0.5 bg-primary-500 inline-block"></span> Revenue
          </span>
          <span className="flex items-center gap-1">
            <span className="w-3 h-0.5 bg-danger-500 inline-block"></span> Total Cost
          </span>
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 bg-success-500 rounded-full inline-block"></span> Break-even
          </span>
        </div>
      </div>
    </div>
  );
}

export function ScenarioCard({ scenario, scenarioIndex, totalScenarios }: ScenarioCardProps) {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-5 sm:p-6 animate-fade-in">
      <div className="flex items-center justify-between mb-4">
        <span className="inline-flex items-center gap-2 text-xs font-medium text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
          Scenario {scenarioIndex + 1} of {totalScenarios}
        </span>
        <span className={`text-xs font-medium px-2 py-1 rounded-full ${
          scenario.difficulty === 'hard'
            ? 'bg-danger-50 text-danger-700'
            : scenario.difficulty === 'medium'
            ? 'bg-warning-50 text-warning-500'
            : 'bg-success-50 text-success-700'
        }`}>
          {scenario.difficulty.charAt(0).toUpperCase() + scenario.difficulty.slice(1)}
        </span>
      </div>

      <h3 className="text-lg font-bold text-slate-800 mb-2">{scenario.title}</h3>
      <p className="text-sm text-slate-600 leading-relaxed mb-4">{scenario.description}</p>

      {scenario.visualData?.type === 'inventory' && (
        <InventoryVisual data={scenario.visualData as InventoryVisualData} />
      )}
      {scenario.visualData?.type === 'breakeven' && (
        <BreakEvenVisual data={scenario.visualData as BreakEvenVisualData} />
      )}

      <div className="mt-4 p-4 bg-primary-50 rounded-lg border border-primary-100">
        <p className="text-sm font-semibold text-primary-800">{scenario.question}</p>
      </div>
    </div>
  );
}
