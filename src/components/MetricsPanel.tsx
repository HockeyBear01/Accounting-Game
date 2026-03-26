import type { CompanyMetrics } from '../types/game';
import { formatCurrency } from '../utils/gameLogic';

interface MetricsPanelProps {
  metrics: CompanyMetrics;
  previousMetrics?: CompanyMetrics;
}

interface MetricCardProps {
  label: string;
  value: string;
  icon: string;
  change?: number;
  color: string;
}

function MetricCard({ label, value, icon, change, color }: MetricCardProps) {
  const hasChange = change !== undefined && change !== 0;

  return (
    <div className={`bg-white rounded-xl p-3 border border-slate-200 ${hasChange ? (change! > 0 ? 'animate-pulse-green' : 'animate-pulse-red') : ''}`}>
      <div className="flex items-center gap-2 mb-1">
        <span className="text-base">{icon}</span>
        <span className="text-xs text-slate-500 font-medium">{label}</span>
      </div>
      <div className="flex items-end justify-between">
        <span className={`text-lg font-bold ${color}`}>{value}</span>
        {hasChange && (
          <span className={`text-xs font-semibold ${change! > 0 ? 'text-success-600' : 'text-danger-600'}`}>
            {change! > 0 ? '+' : ''}{formatCurrency(change!)}
          </span>
        )}
      </div>
    </div>
  );
}

export function MetricsPanel({ metrics, previousMetrics }: MetricsPanelProps) {
  const cashChange = previousMetrics ? metrics.cash - previousMetrics.cash : undefined;
  const inventoryChange = previousMetrics ? metrics.inventory - previousMetrics.inventory : undefined;
  const profitChange = previousMetrics ? metrics.profit - previousMetrics.profit : undefined;

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
      <MetricCard
        label="Cash"
        value={formatCurrency(metrics.cash)}
        icon="💵"
        change={cashChange}
        color="text-slate-800"
      />
      <MetricCard
        label="Inventory"
        value={formatCurrency(metrics.inventory)}
        icon="📦"
        change={inventoryChange}
        color="text-slate-800"
      />
      <MetricCard
        label="Profit"
        value={formatCurrency(metrics.profit)}
        icon="📈"
        change={profitChange}
        color={metrics.profit >= 0 ? 'text-success-700' : 'text-danger-700'}
      />
      <MetricCard
        label="Reputation"
        value={`${metrics.reputation}/100`}
        icon="⭐"
        color="text-primary-700"
      />
    </div>
  );
}
