import { TopicPerformance } from '../types/game';

interface Props {
  score: number;
  accuracy: number;
  topicPerformance: Record<string, TopicPerformance>;
  onReplay: () => void;
}

const topicLabel: Record<string, string> = {
  debitsCredits: 'Debits & Credits',
  fifoLifo: 'FIFO vs LIFO',
  breakEven: 'Break-even Analysis',
};

const FinalResultsScreen = ({ score, accuracy, topicPerformance, onReplay }: Props) => (
  <div className="mx-auto max-w-4xl rounded-3xl bg-white p-8 shadow-card">
    <h1 className="text-3xl font-extrabold">Final Performance Evaluation</h1>
    <p className="mt-2 text-slate-700">NorthStar leadership review complete. Here is your decision impact profile.</p>

    <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
      <div className="rounded-xl bg-blue-50 p-4"><p className="text-sm text-slate-600">Final Score</p><p className="text-3xl font-bold text-blue-700">{score}</p></div>
      <div className="rounded-xl bg-green-50 p-4"><p className="text-sm text-slate-600">Overall Accuracy</p><p className="text-3xl font-bold text-green-700">{accuracy}%</p></div>
    </div>

    <div className="mt-6 space-y-3">
      {Object.entries(topicPerformance).map(([topic, performance]) => {
        const pct = performance.attempts ? Math.round((performance.correct / performance.attempts) * 100) : 0;
        return (
          <div key={topic} className="rounded-xl border border-slate-200 p-3">
            <p className="font-semibold">{topicLabel[topic]}</p>
            <p className="text-sm text-slate-600">{performance.correct}/{performance.attempts} correct ({pct}%)</p>
          </div>
        );
      })}
    </div>

    <button onClick={onReplay} className="mt-6 rounded-xl bg-slate-900 px-4 py-2 font-semibold text-white">Replay Challenge</button>
  </div>
);

export default FinalResultsScreen;
