import CaseStudyHeader from '~/components/CaseStudyHeader';
import ProjectPagination from '~/components/ProjectPagination';
import Stats from '~/components/Stats';
import NotFound from './not-found';
import { getWorkBySlug, getWorkPosition } from '~/data/work.server';
import { FULL_NAME, pageMeta } from '~/data/site';
import type { Route } from './+types/work-detail';

export function loader({ params }: Route.LoaderArgs) {
  const work = getWorkBySlug(params.slug);
  if (!work) throw new Response('Not found', { status: 404 });
  return { work, ...getWorkPosition(work.slug) };
}

export function meta({ loaderData }: Route.MetaArgs) {
  if (!loaderData) return [{ title: 'Page not found · Daniel (Tobi) Akoko' }];
  const { work } = loaderData;
  return pageMeta({
    title: `${work.title} · Daniel (Tobi) Akoko`,
    description:
      work.outcome ??
      `${work.title}${work.location ? `, ${work.location}` : ''}: built by ${FULL_NAME}.`,
    path: `/work/${work.slug}`,
    type: 'article',
    image: work.ogImage,
    imageAlt: work.ogImage ? work.cover?.alt : undefined,
  });
}

export default function WorkDetail({ loaderData }: Route.ComponentProps) {
  const { work, number, prev, next } = loaderData;

  return (
    <article>
      <div className="page-top shell">
        <CaseStudyHeader work={work} number={number} />
      </div>

      <div className="case-body shell">
        {/* Overview: the outcome line and the key numbers. Hidden when neither exists. */}
        {(work.outcome || work.stats.length > 0) && (
          <div className="case-intro">
            <p className="label">Overview</p>
            <div>
              {work.outcome && <p className="case-intro__text">{work.outcome}</p>}
              <Stats stats={work.stats} />
            </div>
          </div>
        )}

        {/* Each ## section of the markdown file; sections with no content don't exist. */}
        {work.sections.map((section) => (
          <section key={section.id} className="case-section" aria-labelledby={section.id}>
            <h2 id={section.id}>{section.heading}</h2>
            <div className="prose" dangerouslySetInnerHTML={{ __html: section.html }} />
          </section>
        ))}
      </div>

      <ProjectPagination prev={prev} next={next} />
    </article>
  );
}

/**
 * An unknown slug (no prerendered data) renders the 404 page here, inside the
 * layout, instead of bubbling up to the bare root error page.
 */
export function ErrorBoundary() {
  return <NotFound />;
}
