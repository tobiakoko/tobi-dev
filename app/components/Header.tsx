import { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router';
import { FULL_NAME } from '~/data/site';
import ThemeToggle from './ThemeToggle';

const NAV = [
  { label: 'Work', to: '/work' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();

  // Work stays lit on project detail pages, not just the index.
  const isActive = (to: string) =>
    to === '/work' ? pathname.startsWith('/work') : pathname === to;

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between gap-8 border-b border-line bg-bg px-6 py-6 md:px-12 md:py-7">
      <Link to="/" className="text-[17px] font-bold tracking-[0.02em] whitespace-nowrap text-ink hover:text-accent">
        {FULL_NAME}
      </Link>

      {/* Desktop */}
      <nav className="hidden items-center gap-9 md:flex">
        {NAV.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={`text-[13px] tracking-[0.14em] uppercase hover:text-accent ${
              isActive(item.to) ? 'text-accent' : 'text-ink'
            }`}
          >
            {item.label}
          </NavLink>
        ))}
        <ThemeToggle />
      </nav>

      {/* Mobile */}
      <div className="flex items-center gap-5 md:hidden">
        <ThemeToggle />
        <button
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
          className="z-50 flex h-5 w-6 flex-col justify-between"
        >
          <span
            className={`h-px w-full bg-ink transition-transform ${isMenuOpen ? 'translate-y-[9px] rotate-45' : ''}`}
          />
          <span
            className={`h-px w-full bg-ink transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}
          />
          <span
            className={`h-px w-full bg-ink transition-transform ${isMenuOpen ? '-translate-y-[9px] -rotate-45' : ''}`}
          />
        </button>
      </div>

      {isMenuOpen && (
        <nav className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-10 bg-bg md:hidden">
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={() => setIsMenuOpen(false)}
              className={`text-base tracking-[0.14em] uppercase ${
                isActive(item.to) ? 'text-accent' : 'text-ink'
              }`}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
}
