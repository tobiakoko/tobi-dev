import PageHeader from '~/components/PageHeader';
import ProjectCard from '~/components/ProjectCard';
import { getAllWork } from '~/data/work.server';
import { pageMeta } from '~/data/site';
import type { Route } from './+types/work';

export function meta() {
  return pageMeta({
    title: 'Work · Daniel (Tobi) Akoko',
    description:
      'Case studies from Daniel Akoko: church websites, a live-voting competition platform, and small-business sites, with architecture and measured results.',
    path: '/work',
  });
}

export function loader() {
  return { work: getAllWork() };
}

const pad = (n: number) => String(n).padStart(2, '0');

export default function Work({ loaderData }: Route.ComponentProps) {
  const { work } = loaderData;

  return (
    <div className="page-top shell">
      <PageHeader
        eyebrow={['Projects', `01–${pad(work.length)}`]}
        title="Work"
        lead={
          <p className="page-header__lead">
            Projects I&rsquo;ve planned, built and supported, each with a full case study.
          </p>
        }
      />
      <ul className="work-grid work-grid--ruled">
        {work.map((w, i) => (
          <li key={w.slug} className="min-w-0">
            <ProjectCard work={w} number={i + 1} total={work.length} level={2} />
          </li>
        ))}
      </ul>
    </div>
  );
}
