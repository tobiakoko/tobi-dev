import { EMAIL, GITHUB_URL, LINKEDIN_URL, LOCATION, pageMeta } from '~/data/site';
import type { Route } from './+types/contact';

export function meta({}: Route.MetaArgs) {
  return pageMeta({
    title: 'Contact Daniel “Tobi” Akoko',
    description:
      'Get in touch with Daniel Akoko (Tobi Akoko), a full stack software engineer based in Dallas, Texas, open to new opportunities.',
    path: '/contact',
  });
}

export default function Contact() {
  return (
    <section className="mx-auto grid max-w-[1200px] grid-cols-1 items-start gap-12 px-6 pt-24 pb-28 md:grid-cols-2 md:gap-20 md:px-12 md:pt-[100px] md:pb-[120px]">
      <div className="flex flex-col gap-7">
        <h1 className="text-[clamp(44px,6vw,72px)] font-light tracking-[-0.02em]">Say hello.</h1>
        <p className="max-w-[46ch] text-[17px] leading-[1.7] text-muted">
          Whether you have a project in mind or simply want to connect, Daniel is always open to new
          opportunities. Send a note and he&rsquo;ll respond as soon as possible.
        </p>
        <a href={`mailto:${EMAIL}`} className="btn-solid self-start">
          Send an Email
        </a>
      </div>

      <div className="flex flex-col gap-7 border-t-2 border-ink pt-7">
        <div className="flex flex-col gap-1.5">
          <span className="label">Email</span>
          <a href={`mailto:${EMAIL}`} className="text-base">
            {EMAIL}
          </a>
        </div>
        <div className="flex flex-col gap-1.5">
          <span className="label">Location</span>
          <span className="text-base text-ink">{LOCATION}</span>
        </div>
        <div className="flex flex-col gap-1.5">
          <span className="label">Elsewhere</span>
          <div className="flex gap-5">
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="text-base">
              GitHub
            </a>
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="text-base">
              LinkedIn
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-1.5">
          <span className="label">Availability</span>
          <span className="flex items-center gap-2.5 text-base text-ink">
            <span className="inline-block h-2 w-2 rounded-full bg-accent" />
            Open to new opportunities
          </span>
        </div>
      </div>
    </section>
  );
}
