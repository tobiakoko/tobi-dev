import { Link } from 'react-router';
import type { WorkMeta } from '~/data/work';

/** Full-width link to the next case study, wrapping to the first. */
export default function NextProject({ work }: { work: WorkMeta }) {
  return (
    <Link to={`/work/${work.slug}`} className="group flex flex-col gap-2 border-t border-line pt-8">
      <span className="label">Next project</span>
      <span className="text-h2 decoration-1 underline-offset-[0.2em] group-hover:text-accent group-hover:underline">
        {work.title} →
      </span>
    </Link>
  );
}
