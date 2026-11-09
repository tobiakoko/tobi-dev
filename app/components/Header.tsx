import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router';
import { ALT_NAME } from '~/data/site';
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
      <div className="shell flex h-18 items-center justify-between gap-6 min-[1000px]:h-[74px]">
        {/* Brand: the name, with the trailing period in teal. */}
        <Link
          to="/"
          className="font-display text-[1.15rem] font-semibold tracking-[-0.03em] whitespace-nowrap"
        >
          {ALT_NAME}
          <span className="text-accent">.</span>
        </Link>

        {/* Nav, theme toggle and (below 1000px) the menu button sit together on the right. */}
        <div className="flex items-center gap-4 min-[1000px]:gap-[22px]">
          <nav aria-label="Main" className="hidden items-center gap-7 min-[1000px]:flex">
            {NAV.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                aria-current={isActive(item.to) ? 'page' : undefined}
                className={`ulink text-[13px] ${isActive(item.to) ? 'text-accent' : 'text-muted hover:text-ink'}`}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
          <ThemeToggle />
          <button
            ref={menuButton}
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            className="grid h-11 place-items-center px-1 text-[13px] font-medium text-ink min-[1000px]:hidden"
          >
            {isMenuOpen ? 'Close' : 'Menu'}
          </button>
        </div>
      </div>

      <nav
        id="mobile-menu"
        aria-label="Main"
        hidden={!isMenuOpen}
        className="border-t border-line bg-bg min-[1000px]:hidden"
      >
        <ul className="shell flex flex-col pt-6 pb-8">
          {NAV.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                aria-current={isActive(item.to) ? 'page' : undefined}
                className={`flex min-h-16 items-center font-display text-[1.9rem] font-medium tracking-[-0.03em] hover:text-ink ${isActive(item.to) ? 'text-ink' : 'text-muted'}`}
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
