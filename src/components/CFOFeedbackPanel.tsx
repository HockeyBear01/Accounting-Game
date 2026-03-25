import { Feedback } from '../types/game';

interface Props {
  feedback: Feedback | null;
  wasCorrect?: boolean;
}

const CFOFeedbackPanel = ({ feedback, wasCorrect }: Props) => (
  <section className="rounded-2xl border-2 border-slate-200 bg-white p-5 shadow-card">
    <div className="flex items-center justify-between">
      <h3 className="text-lg font-bold">Jordan Blake, CFO Mentor</h3>
      <span className={`rounded-full px-3 py-1 text-xs font-bold ${wasCorrect ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
        {feedback ? (wasCorrect ? 'Correct Decision' : 'Needs Revision') : 'Awaiting Decision'}
      </span>
    </div>

    {feedback ? (
      <div className="mt-3 space-y-2 text-sm">
        <p><strong>{feedback.correctStatement}</strong></p>
        <p><strong>Accounting Logic:</strong> {feedback.accountingLogic}</p>
        <p><strong>Business Relevance:</strong> {feedback.businessRelevance}</p>
        {feedback.keyInsight && <p><strong>Key Insight:</strong> {feedback.keyInsight}</p>}
        {feedback.commonMistake && <p><strong>Common Mistake:</strong> {feedback.commonMistake}</p>}
        <details className="mt-2 rounded-lg border border-slate-200 bg-slate-50 p-3">
          <summary className="cursor-pointer font-semibold">Explain More</summary>
          <p className="mt-2 text-slate-700">{feedback.explainMore}</p>
        </details>
      </div>
    ) : (
      <p className="mt-3 text-sm text-slate-600">Submit your decision to receive targeted coaching on the accounting logic and business impact.</p>
    )}
  </section>
);

export default CFOFeedbackPanel;
