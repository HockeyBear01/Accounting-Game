import { Chapter } from '../types/game';

interface Props {
  chapter: Chapter;
  chapterNumber: number;
  onContinue: () => void;
}

const ChapterIntroScreen = ({ chapter, chapterNumber, onContinue }: Props) => (
  <section className="rounded-2xl bg-white p-6 shadow-card">
    <p className="text-sm font-semibold text-blue-700">Role Rotation {chapterNumber + 1}</p>
    <h2 className="mt-1 text-2xl font-bold">{chapter.role}</h2>
    <p className="mt-2 text-slate-700">{chapter.title}</p>
    <ul className="mt-4 list-disc space-y-1 pl-6 text-slate-700">
      {chapter.objectives.map((objective) => (
        <li key={objective}>{objective}</li>
      ))}
    </ul>
    <button onClick={onContinue} className="mt-6 rounded-xl bg-blue-700 px-4 py-2 font-semibold text-white">Begin Chapter</button>
  </section>
);

export default ChapterIntroScreen;
