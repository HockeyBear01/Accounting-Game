import type { PlayerProgress, CompanyMetrics, ChapterId, MetricDelta } from '../types/game';

export const INITIAL_METRICS: CompanyMetrics = {
  cash: 50000,
  inventory: 25000,
  profit: 0,
  reputation: 75,
};

export function createInitialProgress(): PlayerProgress {
  return {
    currentChapter: 0,
    currentScenario: 0,
    score: 0,
    totalCorrect: 0,
    totalAnswered: 0,
    streak: 0,
    bestStreak: 0,
    chapterScores: {
      'debits-credits': { correct: 0, total: 0 },
      'fifo-lifo': { correct: 0, total: 0 },
      'break-even': { correct: 0, total: 0 },
      'final-round': { correct: 0, total: 0 },
    },
    metrics: { ...INITIAL_METRICS },
    answeredScenarios: [],
    skippedScenarios: [],
    incorrectScenarios: [],
  };
}

export function calculateScore(isCorrect: boolean, streak: number, difficulty: string): number {
  if (!isCorrect) return 0;
  const base = difficulty === 'hard' ? 150 : difficulty === 'medium' ? 100 : 75;
  const streakBonus = Math.min(streak, 5) * 10;
  return base + streakBonus;
}

export function applyMetricDelta(metrics: CompanyMetrics, delta: MetricDelta): CompanyMetrics {
  return {
    cash: metrics.cash + (delta.cash ?? 0),
    inventory: metrics.inventory + (delta.inventory ?? 0),
    profit: metrics.profit + (delta.profit ?? 0),
    reputation: Math.max(0, Math.min(100, metrics.reputation + (delta.reputation ?? 0))),
  };
}

export function getChapterGrade(correct: number, total: number): string {
  if (total === 0) return 'N/A';
  const pct = correct / total;
  if (pct >= 0.9) return 'A';
  if (pct >= 0.8) return 'B';
  if (pct >= 0.7) return 'C';
  if (pct >= 0.6) return 'D';
  return 'F';
}

export function getOverallGrade(progress: PlayerProgress): string {
  if (progress.totalAnswered === 0) return 'N/A';
  return getChapterGrade(progress.totalCorrect, progress.totalAnswered);
}

export function getPerformanceMessage(correct: number, total: number): { title: string; message: string } {
  const pct = total > 0 ? correct / total : 0;
  if (pct >= 0.9) return { title: 'Outstanding Performance', message: 'You demonstrated an excellent grasp of accounting fundamentals. Your analytical skills would be a strong asset to any finance team.' };
  if (pct >= 0.8) return { title: 'Strong Performance', message: 'You showed solid understanding across most areas. With a bit more practice on the concepts you missed, you\'ll be fully confident in these fundamentals.' };
  if (pct >= 0.7) return { title: 'Good Progress', message: 'You\'re building a solid foundation. Review the areas where you struggled and focus on understanding the underlying logic behind each concept.' };
  if (pct >= 0.6) return { title: 'Room for Growth', message: 'You understand some core concepts but would benefit from additional practice. Focus on the relationship between accounts and how transactions flow through the financial statements.' };
  return { title: 'Keep Learning', message: 'Accounting takes practice to master. Review the fundamentals of debits and credits, cost flow methods, and break-even analysis. Each concept builds on the last.' };
}

export function getChapterSummary(chapterId: ChapterId, correct: number, total: number): { strengths: string[]; improvements: string[]; advice: string } {
  const pct = total > 0 ? correct / total : 0;

  const summaries: Record<ChapterId, { strengths: string[]; improvements: string[]; advice: string }> = {
    'debits-credits': {
      strengths: pct >= 0.7
        ? ['Good understanding of the double-entry system', 'Correctly identifying account types and their normal balances']
        : ['You attempted all scenarios', 'Some understanding of basic transaction recording'],
      improvements: pct >= 0.7
        ? ['Continue practicing with more complex multi-account transactions', 'Review any scenarios involving contra accounts']
        : ['Review the rules for debits and credits by account type', 'Practice identifying whether accounts increase with debits or credits', 'Focus on the accounting equation: Assets = Liabilities + Equity'],
      advice: pct >= 0.7
        ? 'Strong foundation. As you advance, focus on how journal entries flow into financial statements.'
        : 'Remember: Assets and Expenses increase with debits. Liabilities, Equity, and Revenue increase with credits. This pattern is the backbone of all accounting.',
    },
    'fifo-lifo': {
      strengths: pct >= 0.7
        ? ['Understanding of inventory cost flow assumptions', 'Ability to calculate COGS under different methods']
        : ['Engagement with inventory costing concepts', 'Exposure to both FIFO and LIFO methods'],
      improvements: pct >= 0.7
        ? ['Consider the tax and financial reporting implications of each method', 'Practice with more complex multi-layer scenarios']
        : ['Review how FIFO sells oldest inventory first and LIFO sells newest first', 'Practice layer-by-layer COGS calculations', 'Understand why the choice between FIFO and LIFO matters for taxes and profits'],
      advice: pct >= 0.7
        ? 'You understand the mechanics well. Next, think about when a company would choose one method over the other strategically.'
        : 'Think of inventory as a stack of layers. FIFO pulls from the bottom (oldest costs), LIFO pulls from the top (newest costs). This directly affects reported profit and taxes.',
    },
    'break-even': {
      strengths: pct >= 0.7
        ? ['Solid understanding of cost-volume-profit relationships', 'Ability to apply break-even concepts to business decisions']
        : ['Willingness to work through quantitative analysis', 'Some grasp of fixed vs. variable cost distinctions'],
      improvements: pct >= 0.7
        ? ['Explore sensitivity analysis and margin of safety concepts', 'Apply break-even thinking to more complex multi-product scenarios']
        : ['Review the break-even formula: Fixed Costs ÷ (Price − Variable Cost)', 'Practice distinguishing fixed costs from variable costs', 'Focus on understanding contribution margin as the key driver'],
      advice: pct >= 0.7
        ? 'Excellent analytical thinking. Break-even analysis is one of the most practical tools in business decision-making.'
        : 'Break-even analysis answers a critical question: How many units must we sell to cover all our costs? Master this, and you can evaluate any business proposal.',
    },
    'final-round': {
      strengths: pct >= 0.7
        ? ['Strong integration of concepts across all topics', 'Ability to apply accounting knowledge independently']
        : ['Persistence through challenging integrated scenarios', 'Growing familiarity with key accounting concepts'],
      improvements: pct >= 0.7
        ? ['Continue building connections between topics', 'Practice applying these concepts to real business cases']
        : ['Revisit earlier chapters to strengthen foundational knowledge', 'Focus on understanding how different accounting concepts connect', 'Practice applying concepts without step-by-step guidance'],
      advice: pct >= 0.7
        ? 'You\'ve demonstrated the ability to think like a financial analyst. Keep building on this strong foundation.'
        : 'Integration takes practice. Review each topic individually, then work on connecting them. Every business decision involves multiple accounting concepts working together.',
    },
  };

  return summaries[chapterId];
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatNumber(num: number): string {
  return new Intl.NumberFormat('en-US').format(num);
}
