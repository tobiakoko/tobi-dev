import { useEffect, useRef, useState } from 'react';
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
  const [isScrolled, setIsScrolled] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const { pathname } = useLocation();

  // The bottom rule appears only once the page has scrolled.
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 0);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Navigating closes the menu.
  useEffect(() => setIsMenuOpen(false), [pathname]);

  // Escape closes the menu and returns focus to the button that opened it.
  useEffect(() => {
    if (!isMenuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false);
        menuButton.current?.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [isMenuOpen]);

  // Work stays lit on case study pages, not just the index.
  const isActive = (to: string) =>
    to === '/work' ? pathname.startsWith('/work') : pathname === to;

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-bg ${isScrolled || isMenuOpen ? 'border-line' : 'border-transparent'}`}
    >
      <div className="mx-auto flex h-18 w-full max-w-wide items-center justify-between gap-8 px-6 md:px-12">
        <Link to="/" className="font-medium whitespace-nowrap hover:text-accent">
          {FULL_NAME}
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              aria-current={isActive(item.to) ? 'page' : undefined}
              className={`text-small underline-offset-[0.2em] hover:text-accent ${isActive(item.to) ? 'underline decoration-1' : ''}`}
            >
              {item.label}
            </NavLink>
          ))}
          <ThemeToggle />
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            ref={menuButton}
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            className="flex h-11 w-11 items-center justify-center hover:text-accent"
          >
            <span className="sr-only">Menu</span>
            <svg
              aria-hidden="true"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              strokeLinecap="round"
            >
              {isMenuOpen ? <path d="M4 4l12 12M16 4L4 16" /> : <path d="M2 6h16M2 14h16" />}
            </svg>
          </button>
        </div>
      </div>

      <nav
        id="mobile-menu"
        aria-label="Main"
        hidden={!isMenuOpen}
        className="border-t border-line bg-bg md:hidden"
      >
        <ul className="mx-auto flex max-w-wide flex-col px-6 py-4">
          {NAV.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                aria-current={isActive(item.to) ? 'page' : undefined}
                className={`flex min-h-11 items-center text-h3 underline-offset-[0.2em] hover:text-accent ${isActive(item.to) ? 'underline decoration-1' : ''}`}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
