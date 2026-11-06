import { EMAIL, FULL_NAME, GITHUB_URL, LINKEDIN_URL } from '~/data/site';

const external = { target: '_blank', rel: 'noopener noreferrer' } as const;

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-line md:mt-40">
      <div className="mx-auto w-full max-w-wide px-6 py-10 text-small text-muted md:px-12">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            <li>
              <a href={`mailto:${EMAIL}`} className="link">
                {EMAIL}
              </a>
            </li>
            <li>
              <a href={GITHUB_URL} className="link" {...external}>
                GitHub
              </a>
            </li>
            <li>
              <a href={LINKEDIN_URL} className="link" {...external}>
                LinkedIn
              </a>
            </li>
          </ul>
          <p>
            © {new Date().getFullYear()} {FULL_NAME}
          </p>
        </div>
        {/* Required by Google's Analytics terms (CONTENT.md §5.1). */}
        <p className="mt-6 max-w-measure">
          This site uses Google Analytics, which sets cookies, to count visits. Vercel Analytics
          counts visits too, without cookies.{' '}
          <a
            href="https://policies.google.com/technologies/partner-sites"
            className="link"
            {...external}
          >
            How Google uses this data
          </a>
        </p>
      </div>
    </footer>
  );
}
