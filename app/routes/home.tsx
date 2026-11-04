import { Link } from 'react-router';
import ProjectCard from '~/components/ProjectCard';
import { projects } from '~/data/projects';
import { DISPLAY_NAME, EMAIL, LOCATION, RESUME_URL, pageMeta } from '~/data/site';

export function meta() {
  return pageMeta({
    title: 'Daniel (Tobi) Akoko · Software Engineer in Dallas',
    description:
      'Daniel (Tobi) Akoko is a software engineer in Dallas who plans, builds, tests and hands over web software for churches and small businesses.',
    path: '/',
    type: 'profile',
  });
}

export default function Home() {
  const featured = projects.filter((p) => p.featured);

  return (
    <>
      <section className="mx-auto max-w-[1200px] px-6 pt-24 pb-24 md:px-12 md:pt-[120px] md:pb-[100px]">
        <p className="mb-7 text-xs tracking-[0.2em] text-muted uppercase">
          {DISPLAY_NAME} &middot; {LOCATION}
        </p>
        {/* TODO(content): headline is option A until Daniel picks one (CONTENT.md §2.1). */}
        <h1 className="max-w-[18ch] text-[clamp(44px,6vw,84px)] leading-[1.05] font-light tracking-[-0.02em] text-pretty">
          From requirements to release.
        </h1>
        <p className="mt-9 max-w-[56ch] text-[19px] leading-[1.65] text-muted">
          I&rsquo;m a software engineer who plans, builds, tests and hands over web software for
          churches and small businesses. My work runs from paid voting and live leaderboards to
          content systems that staff update themselves.
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Link to="/work" className="btn-solid">
            Work
          </Link>
          <Link to="/about" className="btn-outline">
            About
          </Link>
          {RESUME_URL && (
            <a href={RESUME_URL} className="btn-outline">
              Résumé
            </a>
          )}
          <a href={`mailto:${EMAIL}`} className="btn-outline">
            Email
          </a>
        </div>
      </section>

      <section className="border-t border-line bg-bg-alt px-6 py-20 md:px-12 md:py-[90px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-12 flex flex-wrap items-baseline justify-between gap-6">
            <h2 className="text-[34px] font-light tracking-[-0.01em]">Selected work</h2>
            <Link to="/work" className="text-xs tracking-[0.16em] uppercase">
              All work →
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {featured.map((project) => (
              <ProjectCard key={project.slug} project={project} variant="featured" />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
