import { Chapter, ChapterId } from '../types/game';

interface SummaryScreenProps {
  chapter: Chapter;
  onContinue: (chapterId: ChapterId) => void;
}

const SummaryScreen = ({ chapter, onContinue }: SummaryScreenProps) => (
  <section className="rounded-2xl bg-white p-6 shadow-card">
    <h2 className="text-2xl font-bold">{chapter.title} Summary</h2>
    <div className="mt-4 space-y-3 text-sm text-slate-700">
      <p><strong>Strengths:</strong> {chapter.summaryGuidance.strengths}</p>
      <p><strong>Weaknesses to Watch:</strong> {chapter.summaryGuidance.weaknesses}</p>
      <p><strong>CFO Advice:</strong> {chapter.summaryGuidance.advice}</p>
    </div>
    <button onClick={() => onContinue(chapter.id)} className="mt-6 rounded-xl bg-blue-700 px-4 py-2 font-semibold text-white">Continue Rotation</button>
  </section>
);

export default SummaryScreen;
