export type ChapterId = 'debits-credits' | 'fifo-lifo' | 'break-even' | 'final-round';

export interface Account {
  name: string;
  type: 'asset' | 'liability' | 'equity' | 'revenue' | 'expense';
  normalBalance: 'debit' | 'credit';
}

export interface JournalEntry {
  account: string;
  side: 'debit' | 'credit';
  amount: number;
}

export interface CFOFeedback {
  correct: string;
  incorrect: string;
  keyInsight: string;
  commonMistake: string;
  whyItMatters: string;
  explainMore: string;
}

export interface ScenarioOption {
  id: string;
  label: string;
}

export interface Scenario {
  id: string;
  chapterId: ChapterId;
  title: string;
  description: string;
  question: string;
  type: 'multiple-choice' | 'journal-entry' | 'numeric-input';
  options?: ScenarioOption[];
  correctAnswer: string;
  correctJournalEntries?: JournalEntry[];
  feedback: CFOFeedback;
  metricEffects: {
    correct: MetricDelta;
    incorrect: MetricDelta;
  };
  difficulty: 'easy' | 'medium' | 'hard';
  visualData?: InventoryVisualData | BreakEvenVisualData;
  reviewTip: string;
}

export interface InventoryLayer {
  units: number;
  costPerUnit: number;
  label: string;
}

export interface InventoryVisualData {
  type: 'inventory';
  layers: InventoryLayer[];
  unitsSold: number;
}

export interface BreakEvenVisualData {
  type: 'breakeven';
  fixedCosts: number;
  variableCostPerUnit: number;
  pricePerUnit: number;
}

export interface MetricDelta {
  cash?: number;
  inventory?: number;
  profit?: number;
  reputation?: number;
}

export interface CompanyMetrics {
  cash: number;
  inventory: number;
  profit: number;
  reputation: number;
}

export interface FormulaItem {
  label: string;
  expression: string;
  note?: string;
}

export type FormulaSectionContent =
  | { type: 'formulas'; items: FormulaItem[] }
  | { type: 'table'; headers: string[]; rows: string[][] };

export interface FormulaSection {
  title: string;
  content: FormulaSectionContent;
}

export interface ChapterConfig {
  id: ChapterId;
  title: string;
  role: string;
  description: string;
  objectives: string[];
  icon: string;
  formulas: FormulaSection[];
}

export interface PlayerProgress {
  currentChapter: number;
  currentScenario: number;
  score: number;
  totalCorrect: number;
  totalAnswered: number;
  streak: number;
  bestStreak: number;
  chapterScores: Record<ChapterId, { correct: number; total: number }>;
  metrics: CompanyMetrics;
  answeredScenarios: string[];
  skippedScenarios: string[];
  incorrectScenarios: string[];
}

export type GameScreen =
  | 'start'
  | 'chapter-intro'
  | 'gameplay'
  | 'chapter-summary'
  | 'final-results';
