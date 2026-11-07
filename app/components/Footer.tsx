import { Link } from 'react-router';
import {
  DISPLAY_NAME,
  EMAIL,
  FULL_NAME,
  GITHUB_URL,
  JOB_TITLE,
  LINKEDIN_URL,
  LOCATION,
} from '~/data/site';

const external = { target: '_blank', rel: 'noopener noreferrer' } as const;

/*
 * Dark in both themes (CONTENT.md §5.1). The light-theme teal is too dark to
 * read on the footer, so the footer uses the dark-theme teal for focus rings.
 */
export default function Footer() {
  return (
    <footer className="mt-30 bg-footer-bg text-footer-ink [--accent:oklch(0.82_0.1_185)]">
      <div className="shell">
        <div className="py-[clamp(72px,9vw,100px)]">
          <p className="label text-footer-ink/60">Start a conversation</p>
          <h2 className="mt-5 mb-[34px] max-w-[1000px] text-[clamp(47px,8vw,110px)]">
            Have a role or project in mind?
          </h2>
          <Link
            to="/contact"
            className="text-[17px] font-semibold underline underline-offset-[5px] hover:text-accent"
          >
            Let’s talk{' '}
            <span aria-hidden="true" className="arrow-sm">
              ↗
            </span>
          </Link>
        </div>

        <div className="grid grid-cols-2 items-end gap-6 border-t border-footer-line pt-[30px] pb-10 text-[13px] min-[761px]:grid-cols-[1.4fr_1fr_auto] min-[761px]:gap-10">
          <div>
            <p className="font-semibold">{DISPLAY_NAME}</p>
            <p className="mt-0.5 text-footer-ink/60">
              {JOB_TITLE} · {LOCATION}
            </p>
          </div>

          <ul className="flex flex-wrap gap-x-[22px] gap-y-2 text-footer-ink/80">
            <li>
              <a href={`mailto:${EMAIL}`} className="hover:text-footer-ink hover:underline">
                Email
              </a>
            </li>
            <li>
              <a
                href={LINKEDIN_URL}
                className="hover:text-footer-ink hover:underline"
                {...external}
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a href={GITHUB_URL} className="hover:text-footer-ink hover:underline" {...external}>
                GitHub
              </a>
            </li>
          </ul>

          <div className="col-span-full min-[761px]:col-span-1 min-[761px]:text-right">
            <p className="text-footer-ink/80">
              © {new Date().getFullYear()} {FULL_NAME}
            </p>
            {/* Required by Google's Analytics terms (CONTENT.md §5.2). */}
            <p className="mt-3.5 max-w-[34ch] text-[11px] leading-normal text-footer-ink/60 min-[761px]:ml-auto">
              This site uses Google Analytics, which sets cookies, to count visits. Vercel Analytics
              counts visits too, without cookies.{' '}
              <a
                href="https://policies.google.com/technologies/partner-sites"
                className="underline hover:text-footer-ink"
                {...external}
              >
                How Google uses this data
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
