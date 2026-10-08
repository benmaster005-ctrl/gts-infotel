import { useState, useEffect } from 'react';
import { NAV_LINKS } from '../data/telecomData';

/**
 * Navigation — uses the real GTS logo.
 * Transparent over the hero, solid white on scroll with a single bottom border.
 */
export default function Navbar({ onContact }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-white border-b border-neutral-200' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 select-none">
          <img
            src="/assets/gts-logo.png"
            alt="GTS"
            className="h-9 w-auto"
          />
        </a>

        {/* Desktop links */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-[13px] font-medium transition-colors ${
                scrolled
                  ? 'text-neutral-600 hover:text-brand-navy'
                  : 'text-white/80 hover:text-white'
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <button
          onClick={onContact}
          className={`hidden md:block text-[13px] font-semibold px-5 py-2 transition-colors ${
            scrolled
              ? 'bg-brand-navy text-white hover:bg-brand-navy/90'
              : 'bg-white text-brand-navy hover:bg-white/90'
          }`}
        >
          Nous contacter
        </button>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden p-2"
          aria-label="Menu"
        >
          <div className="space-y-1.5">
            <span className={`block w-5 h-0.5 transition-all ${scrolled ? 'bg-brand-navy' : 'bg-white'} ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-5 h-0.5 transition-all ${scrolled ? 'bg-brand-navy' : 'bg-white'} ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-0.5 transition-all ${scrolled ? 'bg-brand-navy' : 'bg-white'} ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-b border-neutral-200 px-6 py-6">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="block py-2.5 text-sm text-neutral-700 hover:text-brand-navy font-medium"
            >
              {l.label}
            </a>
          ))}
          <button
            onClick={() => { setMenuOpen(false); onContact(); }}
            className="mt-4 w-full text-sm font-semibold bg-brand-navy text-white py-3 hover:bg-brand-navy/90"
          >
            Nous contacter
          </button>
        </div>
      )}
    </header>
  );
}
