import { Link } from 'react-router';
import { DISPLAY_NAME, EMAIL, FULL_NAME, GITHUB_URL, JOB_TITLE, LINKEDIN_URL, LOCATION } from '~/data/site';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-bg-alt px-6 pt-14 pb-10 md:px-12">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-10 md:grid-cols-[2fr_1fr_1fr] md:gap-12">
        <div className="flex flex-col gap-3">
          <span className="text-base font-bold text-ink">{DISPLAY_NAME}</span>
          <span className="text-[13px] leading-[1.6] text-muted">
            {JOB_TITLE}
            <br />
            {LOCATION}
          </span>
        </div>

        <div className="flex flex-col gap-3">
          <span className="label">Site</span>
          <Link to="/work" className="text-[13px] text-ink hover:text-accent">
            Work
          </Link>
          <Link to="/about" className="text-[13px] text-ink hover:text-accent">
            About
          </Link>
          <Link to="/contact" className="text-[13px] text-ink hover:text-accent">
            Contact
          </Link>
        </div>

        <div className="flex flex-col gap-3">
          <span className="label">Quick Links</span>
          <a href={`mailto:${EMAIL}`} className="text-[13px] text-ink hover:text-accent">
            {EMAIL}
          </a>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] text-ink hover:text-accent"
          >
            GitHub
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] text-ink hover:text-accent"
          >
            LinkedIn
          </a>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-[1200px] border-t border-line pt-5 text-xs text-muted">
        ©{currentYear} {FULL_NAME}. All Rights Reserved
      </div>
    </footer>
  );
}
