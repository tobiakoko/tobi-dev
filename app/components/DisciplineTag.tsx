import type { Discipline } from '~/data/work';

/** Disciplines as plain text separated by " · ", not pills. */
export default function DisciplineTag({ disciplines }: { disciplines: Discipline[] }) {
  return <>{disciplines.join(' · ')}</>;
}
