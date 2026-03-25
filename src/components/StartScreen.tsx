const StartScreen = ({ onStart }: { onStart: () => void }) => (
  <div className="mx-auto flex min-h-screen w-full max-w-4xl flex-col justify-center px-4 py-10">
    <div className="rounded-3xl bg-white p-8 shadow-card">
      <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">NorthStar Goods</p>
      <h1 className="mt-2 text-4xl font-extrabold">Accounting Challenge</h1>
      <p className="mt-3 text-slate-700">Step into a rotational analyst role and drive smarter decisions across accounting operations, costing, and planning.</p>
      <h2 className="mt-6 text-lg font-bold">Learning Objectives</h2>
      <ul className="mt-2 list-disc space-y-1 pl-6 text-slate-700">
        <li>Apply debits and credits accurately in real business transactions.</li>
        <li>Compute FIFO and LIFO outcomes for COGS and ending inventory.</li>
        <li>Use break-even analysis to support pricing and operating decisions.</li>
      </ul>
      <button onClick={onStart} className="mt-8 rounded-xl bg-blue-700 px-5 py-3 text-lg font-semibold text-white">Start Challenge</button>
      <div className="mt-8 text-center text-xs text-slate-500">
        <p>Created by Jonas Lang and Jaime Gandy</p>
        <p>BUSI 7230: Cost Analysis and Systems</p>
      </div>
    </div>
  </div>
);

export default StartScreen;
