import { EMAIL, FULL_NAME, GITHUB_URL, LINKEDIN_URL } from '~/data/site';

const external = { target: '_blank', rel: 'noopener noreferrer' } as const;

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-line md:mt-40">
      <div className="mx-auto flex w-full max-w-wide flex-col gap-4 px-6 py-10 text-small text-muted md:flex-row md:items-center md:justify-between md:px-12">
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
    </footer>
  );
}
