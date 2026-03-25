import { ReactNode } from 'react';

interface AppLayoutProps {
  topBar: ReactNode;
  metricsPanel: ReactNode;
  main: ReactNode;
  feedback: ReactNode;
}

const AppLayout = ({ topBar, metricsPanel, main, feedback }: AppLayoutProps) => (
  <div className="min-h-screen bg-slate-100 text-slate-900">
    {topBar}
    <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-4 p-4 lg:grid-cols-[280px_1fr]">
      <aside>{metricsPanel}</aside>
      <main>{main}</main>
    </div>
    <div className="mx-auto w-full max-w-7xl px-4 pb-6">{feedback}</div>
  </div>
);

export default AppLayout;
