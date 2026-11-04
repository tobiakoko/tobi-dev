import { Link } from 'react-router';
import type { WorkMeta } from '~/data/work';
import DisciplineTag from './DisciplineTag';
import Figure from './Figure';
import MetaGrid from './MetaGrid';
import Stats from './Stats';

const external = { target: '_blank', rel: 'noopener noreferrer' } as const;

export default function CaseStudyHeader({ work }: { work: WorkMeta }) {
  const { live, code } = work.links;
  const links = (live || code) && (
    <span className="flex flex-wrap gap-x-4">
      {live && (
        <a href={live} className="link" {...external}>
          Live site ↗
        </a>
      )}
      {code && (
        <a href={code} className="link" {...external}>
          Code ↗
        </a>
      )}
    </span>
  );

  return (
    <header className="flex flex-col gap-12 md:gap-18">
      <div className="flex flex-col gap-6">
        <Link to="/work" className="link self-start text-small">
          ← Work
        </Link>
        <h1 className="max-w-[18ch] text-title text-balance">{work.title}</h1>
        {work.outcome && (
          <p className="line-clamp-2 max-w-measure text-h2 text-muted">{work.outcome}</p>
        )}
      </div>
      <MetaGrid
        items={[
          { label: 'Role', value: work.role },
          { label: 'Timeline', value: work.timeline },
          { label: 'Team', value: work.team },
          { label: 'Location', value: work.location },
          { label: 'Disciplines', value: <DisciplineTag disciplines={work.disciplines} /> },
          { label: 'Links', value: links },
          { label: 'Stack', value: work.stack.join(', '), wide: true },
        ]}
      />
      {work.cover && <Figure image={work.cover} eager />}
      <Stats stats={work.stats} />
    </header>
  );
}
