export type Topic = 'debitsCredits' | 'fifoLifo' | 'breakEven';

export type ScenarioType = 'journal' | 'inventory' | 'breakEven';

export type ChapterId = 'chapter1' | 'chapter2' | 'chapter3' | 'chapter4';

export interface Metrics {
  cash: number;
  inventory: number;
  profit: number;
  accuracy: number;
  reputation: number;
}

export interface Feedback {
  correctStatement: string;
  accountingLogic: string;
  businessRelevance: string;
  keyInsight?: string;
  commonMistake?: string;
  explainMore: string;
}

export interface ScenarioOption {
  id: string;
  label: string;
}

export interface BaseScenario {
  id: string;
  chapterId: ChapterId;
  topic: Topic;
  type: ScenarioType;
  title: string;
  roleObjective: string;
  prompt: string;
  options: ScenarioOption[];
  correctOptionId: string;
  feedback: {
    correct: Feedback;
    incorrect: Feedback;
  };
  metricImpact: {
    correct: Partial<Metrics>;
    incorrect: Partial<Metrics>;
  };
}

export interface JournalScenario extends BaseScenario {
  type: 'journal';
}

export interface InventoryLayer {
  units: number;
  costPerUnit: number;
}

export interface InventoryScenario extends BaseScenario {
  type: 'inventory';
  inventoryLayers: InventoryLayer[];
  unitsSold: number;
}

export interface BreakEvenScenario extends BaseScenario {
  type: 'breakEven';
  fixedCost: number;
  variableCost: number;
  pricePerUnit: number;
}

export type Scenario = JournalScenario | InventoryScenario | BreakEvenScenario;

export interface Chapter {
  id: ChapterId;
  title: string;
  role: string;
  objectives: string[];
  summaryGuidance: {
    strengths: string;
    weaknesses: string;
    advice: string;
  };
}

export interface TopicPerformance {
  attempts: number;
  correct: number;
}

export interface GameState {
  started: boolean;
  chapterIntroVisible: boolean;
  currentScenarioIndex: number;
  selectedOptionId: string | null;
  lastResult: {
    wasCorrect: boolean;
    feedback: Feedback;
  } | null;
  metrics: Metrics;
  score: number;
  streak: number;
  topicPerformance: Record<Topic, TopicPerformance>;
  chapterSummariesShown: ChapterId[];
  gameCompleted: boolean;
}
