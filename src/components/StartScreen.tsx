interface StartScreenProps {
  onStart: () => void;
}

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-900 via-primary-800 to-slate-900 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full text-center animate-fade-in">
        {/* Logo */}
        <div className="w-20 h-20 bg-white/10 backdrop-blur rounded-2xl flex items-center justify-center mx-auto mb-8 border border-white/20">
          <span className="text-4xl">★</span>
        </div>

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-3 tracking-tight">
          NorthStar Goods
        </h1>
        <p className="text-lg sm:text-xl text-primary-200 mb-8 font-medium">
          Accounting Challenge
        </p>

        {/* Description */}
        <p className="text-primary-300 text-sm sm:text-base mb-10 max-w-lg mx-auto leading-relaxed">
          Step into the role of a rotational analyst at NorthStar Goods. Navigate real business
          scenarios, make financial decisions, and build your accounting expertise under the
          guidance of CFO Jordan Blake.
        </p>

        {/* Learning Objectives */}
        <div className="bg-white/10 backdrop-blur rounded-xl p-6 mb-8 border border-white/10 text-left">
          <h2 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">
            Learning Objectives
          </h2>
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="bg-white/5 rounded-lg p-4">
              <div className="text-2xl mb-2">📒</div>
              <h3 className="text-sm font-bold text-white mb-1">Debits & Credits</h3>
              <p className="text-xs text-primary-300 leading-relaxed">
                Master the double-entry bookkeeping system. Record transactions by correctly
                identifying which accounts to debit and credit.
              </p>
            </div>
            <div className="bg-white/5 rounded-lg p-4">
              <div className="text-2xl mb-2">📦</div>
              <h3 className="text-sm font-bold text-white mb-1">FIFO & LIFO</h3>
              <p className="text-xs text-primary-300 leading-relaxed">
                Understand inventory costing methods. Calculate cost of goods sold and ending
                inventory under FIFO and LIFO assumptions.
              </p>
            </div>
            <div className="bg-white/5 rounded-lg p-4">
              <div className="text-2xl mb-2">📊</div>
              <h3 className="text-sm font-bold text-white mb-1">Break-Even Analysis</h3>
              <p className="text-xs text-primary-300 leading-relaxed">
                Apply cost-volume-profit analysis to business decisions. Calculate break-even
                points and evaluate profitability scenarios.
              </p>
            </div>
          </div>
        </div>

        {/* Estimated time */}
        <p className="text-xs text-primary-400 mb-6">
          Estimated completion time: 15–25 minutes
        </p>

        {/* Start Button */}
        <button
          onClick={onStart}
          className="px-10 py-4 bg-white text-primary-800 rounded-xl font-bold text-lg hover:bg-primary-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
        >
          Begin Challenge
        </button>

        {/* Attribution */}
        <div className="mt-12 text-primary-400 text-xs space-y-1">
          <p>BUSI 7230: Cost Analysis and Systems</p>
        </div>
      </div>
    </div>
  );
}
