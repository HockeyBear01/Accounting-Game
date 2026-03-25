import { Metrics } from '../types/game';

const metricStyle = 'rounded-xl bg-white p-3 shadow-card';

const money = (value: number) =>
  new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(value);

const MetricsPanel = ({ metrics }: { metrics: Metrics }) => (
  <section className="space-y-3">
    <h2 className="text-sm font-bold uppercase tracking-wide text-slate-500">Company Metrics</h2>
    <div className={metricStyle}><p className="text-xs text-slate-500">Cash</p><p className="text-xl font-bold">{money(metrics.cash)}</p></div>
    <div className={metricStyle}><p className="text-xs text-slate-500">Inventory Value</p><p className="text-xl font-bold">{money(metrics.inventory)}</p></div>
    <div className={metricStyle}><p className="text-xs text-slate-500">Profit Impact</p><p className="text-xl font-bold">{money(metrics.profit)}</p></div>
    <div className={metricStyle}><p className="text-xs text-slate-500">Accuracy</p><p className="text-xl font-bold">{metrics.accuracy}%</p></div>
    <div className={metricStyle}><p className="text-xs text-slate-500">Reputation</p><p className="text-xl font-bold">{metrics.reputation}/100</p></div>
  </section>
);

export default MetricsPanel;
