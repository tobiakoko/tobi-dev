import { Link } from 'react-router';
import type { WorkMeta } from '~/data/work';

/** Previous and next case studies; both wrap around the list. */
export default function ProjectPagination({ prev, next }: { prev: WorkMeta; next: WorkMeta }) {
  return (
    <nav className="project-pagination shell" aria-label="More case studies">
      <Link to={`/work/${prev.slug}`} rel="prev">
        <span className="label">
          <span aria-hidden="true">←</span> Previous
        </span>
        <strong>{prev.title}</strong>
      </Link>
      <Link to={`/work/${next.slug}`} rel="next">
        <span className="label">
          Next <span aria-hidden="true">→</span>
        </span>
        <strong>{next.title}</strong>
      </Link>
    </nav>
  );
}
