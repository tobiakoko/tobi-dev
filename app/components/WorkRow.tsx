import { Link } from 'react-router';
import type { WorkMeta } from '~/data/work';
import DisciplineTag from './DisciplineTag';

/** One project as a text row. The whole row is one link. Use inside WorkList. */
export function WorkRow({ work, level = 3 }: { work: WorkMeta; level?: 2 | 3 }) {
  const Heading = `h${level}` as const;
  return (
    <li className="border-b border-line">
      <Link to={`/work/${work.slug}`} className="group flex flex-col gap-2 py-6 md:py-8">
        <Heading className="text-h3 decoration-1 underline-offset-[0.2em] group-hover:text-accent group-hover:underline">
          {work.title}
        </Heading>
        {work.outcome && <p className="text-muted">{work.outcome}</p>}
        <p className="label tabular-nums">
          {work.year} · <DisciplineTag disciplines={work.disciplines} />
        </p>
      </Link>
    </li>
  );
}

/** `level` keeps headings in order: 2 under a page H1, 3 under a section H2. */
export function WorkList({ work, level = 3 }: { work: WorkMeta[]; level?: 2 | 3 }) {
  return (
    <ul className="border-t border-line">
      {work.map((w) => (
        <WorkRow key={w.slug} work={w} level={level} />
      ))}
    </ul>
  );
}
