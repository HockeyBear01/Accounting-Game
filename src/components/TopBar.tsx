interface TopBarProps {
  role: string;
  score: number;
  chapterProgress: string;
  scenarioProgress: string;
}

const TopBar = ({ role, score, chapterProgress, scenarioProgress }: TopBarProps) => (
  <header className="sticky top-0 z-10 border-b border-slate-200 bg-white/95 backdrop-blur">
    <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-3">
      <div>
        <p className="text-sm font-semibold text-blue-700">NorthStar Goods</p>
        <h1 className="text-lg font-bold">Accounting Challenge</h1>
      </div>
      <div className="flex flex-wrap items-center gap-4 text-sm">
        <span><strong>Role:</strong> {role}</span>
        <span><strong>{chapterProgress}</strong></span>
        <span>{scenarioProgress}</span>
        <span className="rounded-full bg-blue-100 px-3 py-1 font-semibold text-blue-700">Score: {score}</span>
      </div>
    </div>
  </header>
);

export default TopBar;
