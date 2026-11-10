import { Link } from 'react-router';
import type { WorkMeta } from '~/data/work';

const external = { target: '_blank', rel: 'noopener noreferrer' } as const;

/**
 * Back link, "Case study NN" and the title with the proposition beside it,
 * then the Year · Role · Team · Tools facts and the cover.
 */
export default function CaseStudyHeader({ work, number }: { work: WorkMeta; number: number }) {
  const { live, code } = work.links;

  return (
    <header>
      <Link to="/work" className="ulink text-[13px]">
        <span aria-hidden="true">←</span> All work
      </Link>

      <div className="case-title-grid">
        <div>
          <p className="label tabular-nums">Case study {String(number).padStart(2, '0')}</p>
          <h1>{work.title}</h1>
        </div>
        <p className="case-summary">{work.proposition}</p>
      </div>

      {/* Facts: Year, Role, Team (only when the case study has one) and Tools. */}
      <dl className="case-facts">
        <div className="case-facts__year">
          <dt>Year</dt>
          <dd>{work.year}</dd>
        </div>
        <div>
          <dt>Role</dt>
          <dd>{work.role}</dd>
        </div>
        {work.team && (
          <div>
            <dt>Team</dt>
            <dd>{work.team}</dd>
          </div>
        )}
        <div className="case-facts__tools">
          <dt>{work.stackLabel ?? 'Tools'}</dt>
          <dd>{work.stack.join(', ')}</dd>
        </div>
      </dl>

      {(live || code) && (
        <p className="flex flex-wrap gap-x-6 gap-y-2">
          {live && (
            <a href={live} className="arrowlink ulink" {...external}>
              Live site <span aria-hidden="true">↗</span>
            </a>
          )}
          {code && (
            <a href={code} className="arrowlink ulink" {...external}>
              Code <span aria-hidden="true">↗</span>
            </a>
          )}
        </p>
      )}

      {work.cover && (
        <div className="case-cover">
          <img
            src={work.cover.src}
            srcSet={work.cover.srcSet}
            sizes={work.cover.srcSet ? '(min-width: 78rem) 75rem, 100vw' : undefined}
            width={work.cover.width}
            height={work.cover.height}
            alt={work.cover.alt}
            fetchPriority="high"
          />
        </div>
      )}
    </header>
  );
}
