import { useState, useEffect, useRef } from 'react';
import { NAV_LINKS, SOLUTIONS } from '../data/telecomData';

/**
 * Navigation — Logo GTS seul, grand et net sans bordure ni ombre.
 * Menu déroulant moderne pour le lien "Solutions".
 * Supporte la navigation fluide vers la page dédiée Numéro PRO.
 */
export default function Navbar({ onContact, currentRoute = 'home', onNavigate }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const dropdownTimeout = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Fermer le dropdown si on clique en dehors
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleMouseEnter = () => {
    clearTimeout(dropdownTimeout.current);
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeout.current = setTimeout(() => setDropdownOpen(false), 200);
  };

  const handleLinkClick = (e, link) => {
    if (link.label === 'Accueil') {
      e.preventDefault();
      onNavigate('home');
      setMenuOpen(false);
    } else if (link.label === 'Numéro PRO') {
      e.preventDefault();
      onNavigate('numero-pro');
      setMenuOpen(false);
    } else if (link.label === 'À propos') {
      e.preventDefault();
      onNavigate('about');
      setMenuOpen(false);
    } else if (link.label === 'Contact') {
      e.preventDefault();
      onNavigate('contact');
      setMenuOpen(false);
    } else if (link.href && link.href.startsWith('#') && link.href !== '#') {
      if (currentRoute !== 'home') {
        e.preventDefault();
        onNavigate('home');
        setTimeout(() => {
          const el = document.querySelector(link.href);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
      setMenuOpen(false);
    }
  };

  const handleSolutionClick = (e, solId) => {
    setDropdownOpen(false);
    setMenuOpen(false);
    if (solId.startsWith('mobinawa')) {
      e.preventDefault();
      window.open('https://www.mobinawa.com/', '_blank', 'noopener,noreferrer');
      return;
    }
    if (solId === 'digicontacts') {
      e.preventDefault();
      window.open('https://www.digicontacts.net/', '_blank', 'noopener,noreferrer');
      return;
    }
    e.preventDefault();
    if (solId === 'numero-pro') {
      onNavigate('numero-pro');
    } else if (solId === '3cx-callcenter') {
      onNavigate('3cx-callcenter');
    } else if (solId === 'procom-crm') {
      onNavigate('reseau-procom');
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-white border-b border-neutral-200 shadow-sm' : 'bg-brand-navy/60 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo GTS seul, sans bordure ni ombre */}
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); onNavigate('home'); }}
          className="flex items-center select-none"
          aria-label="GTS Accueil"
        >
          <div className="bg-white p-1.5 rounded-lg flex items-center justify-center">
            <img
              src="/assets/gts-logo.png"
              alt="GTS - Global Telecom Services"
              className="h-12 sm:h-14 w-auto object-contain"
            />
          </div>
        </a>

        {/* Liens de navigation desktop */}
        <nav className="hidden lg:flex items-center gap-7">
          {NAV_LINKS.map((l) =>
            l.hasDropdown ? (
              /* Lien Solutions avec dropdown */
              <div
                key={l.label}
                ref={dropdownRef}
                className="relative"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className={`flex items-center gap-1 text-[13px] font-medium transition-colors ${
                    scrolled
                      ? 'text-neutral-600 hover:text-brand-navy'
                      : 'text-neutral-200 hover:text-white'
                  }`}
                >
                  {l.label}
                  <svg
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Dropdown panel */}
                <div
                  className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 transition-all duration-200 ${
                    dropdownOpen
                      ? 'opacity-100 translate-y-0 pointer-events-auto'
                      : 'opacity-0 -translate-y-2 pointer-events-none'
                  }`}
                >
                  <div className="bg-white border border-neutral-200 shadow-xl w-[440px] p-2">
                    {/* Flèche */}
                    <div className="absolute -top-[7px] left-1/2 -translate-x-1/2 mt-4">
                      <div className="w-3 h-3 bg-white border-l border-t border-neutral-200 rotate-45" />
                    </div>

                    {SOLUTIONS.items.map((sol, idx) => {
                      const isMobinawa = sol.id.startsWith('mobinawa');
                      const isDigicontacts = sol.id === 'digicontacts';
                      const isClickable = sol.id === 'numero-pro' || sol.id === '3cx-callcenter' || sol.id === 'procom-crm' || isMobinawa || isDigicontacts;
                      const targetHref = isMobinawa
                        ? 'https://www.mobinawa.com/'
                        : isDigicontacts
                        ? 'https://www.digicontacts.net/'
                        : sol.id === 'numero-pro'
                        ? '#numero-pro'
                        : sol.id === '3cx-callcenter'
                        ? '#3cx-callcenter'
                        : sol.id === 'procom-crm'
                        ? '#reseau-procom'
                        : '#';

                      return (
                        <a
                          key={sol.id}
                          href={targetHref}
                          target={isMobinawa || isDigicontacts ? '_blank' : undefined}
                          rel={isMobinawa || isDigicontacts ? 'noopener noreferrer' : undefined}
                          onClick={(e) => handleSolutionClick(e, sol.id)}
                          className={`flex items-start gap-3.5 px-3 py-3 transition-colors group ${
                            isClickable ? 'hover:bg-neutral-50 cursor-pointer' : 'hover:bg-neutral-50/50'
                          }`}
                        >
                          {/* Numéro d'ordre */}
                          <span className="text-[11px] font-mono font-bold text-neutral-300 mt-0.5 shrink-0 w-5">
                            {String(idx + 1).padStart(2, '0')}
                          </span>

                          {/* Contenu */}
                          <div className="min-w-0 flex-1">
                            <div className="flex items-center gap-2">
                              <span className="text-sm font-semibold text-neutral-900 group-hover:text-brand-navy transition-colors">
                                {sol.title}
                              </span>
                              <span className="text-[10px] font-medium text-brand-blue/70 bg-brand-blue/5 px-1.5 py-0.5 uppercase tracking-wider shrink-0">
                                {sol.badge.split(' ')[0]}
                              </span>
                              {isMobinawa ? (
                                <span className="text-[9px] font-semibold text-brand-orange bg-orange-50 px-1 py-0.2 rounded shrink-0">
                                  mobinawa.com ↗
                                </span>
                              ) : isDigicontacts ? (
                                <span className="text-[9px] font-semibold text-brand-blue bg-blue-50 px-1 py-0.2 rounded shrink-0">
                                  digicontacts.net ↗
                                </span>
                              ) : isClickable ? (
                                <span className="text-[9px] font-semibold text-emerald-600 bg-emerald-50 px-1 py-0.2 rounded shrink-0">
                                  Disponible
                                </span>
                              ) : null}
                            </div>
                            <p className="text-xs text-neutral-500 mt-0.5 leading-relaxed line-clamp-1">
                              {sol.tagline}
                            </p>
                          </div>

                          {/* Flèche hover */}
                          <svg
                            className={`w-4 h-4 mt-0.5 shrink-0 ml-auto transition-colors ${
                              isClickable
                                ? 'text-neutral-400 group-hover:text-brand-orange'
                                : 'text-neutral-200'
                            }`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                          </svg>
                        </a>
                      );
                    })}

                    {/* Lien vers toutes les solutions */}
                    <div className="border-t border-neutral-100 mt-1 pt-2 px-3 pb-2">
                      <a
                        href="#solutions"
                        onClick={(e) => {
                          e.preventDefault();
                          setDropdownOpen(false);
                          if (currentRoute !== 'home') {
                            onNavigate('home');
                            setTimeout(() => {
                              const el = document.querySelector('#solutions');
                              if (el) el.scrollIntoView({ behavior: 'smooth' });
                            }, 100);
                          } else {
                            const el = document.querySelector('#solutions');
                            if (el) el.scrollIntoView({ behavior: 'smooth' });
                          }
                        }}
                        className="text-xs font-semibold text-brand-navy hover:text-brand-blue transition-colors flex items-center gap-1.5"
                      >
                        Voir toutes les solutions
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              /* Liens classiques */
              <a
                key={l.label}
                href={l.href}
                onClick={(e) => handleLinkClick(e, l)}
                className={`text-[13px] font-medium transition-colors ${
                  (l.label === 'Accueil' && currentRoute === 'home') ||
                  (l.label === 'Numéro PRO' && currentRoute === 'numero-pro') ||
                  (l.label === 'À propos' && currentRoute === 'about') ||
                  (l.label === 'Contact' && currentRoute === 'contact')
                    ? scrolled
                      ? 'text-brand-orange font-semibold'
                      : 'text-brand-orange font-semibold'
                    : scrolled
                    ? 'text-neutral-600 hover:text-brand-navy'
                    : 'text-neutral-200 hover:text-white'
                }`}
              >
                {l.label}
              </a>
            )
          )}
        </nav>

        {/* CTA */}
        <button
          onClick={onContact}
          className={`hidden md:block text-[13px] font-semibold px-5 py-2.5 transition-colors ${
            scrolled
              ? 'bg-brand-navy text-white hover:bg-brand-navy/90'
              : 'bg-brand-orange text-white hover:bg-brand-orange/90'
          }`}
        >
          Nous contacter
        </button>

        {/* Bouton Mobile */}
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

      {/* Menu Mobile */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-b border-neutral-200 px-6 py-6">
          {NAV_LINKS.map((l) =>
            l.hasDropdown ? (
              <div key={l.label}>
                <button
                  onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                  className="flex items-center justify-between w-full py-2.5 text-sm text-neutral-700 hover:text-brand-navy font-medium"
                >
                  {l.label}
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${mobileDropdownOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {mobileDropdownOpen && (
                  <div className="pl-4 pb-2 space-y-1 border-l-2 border-brand-orange/30 ml-2">
                    {SOLUTIONS.items.map((sol) => (
                      <a
                        key={sol.id}
                        href="#"
                        onClick={(e) => handleSolutionClick(e, sol.id)}
                        className="block py-2 text-sm text-neutral-600 hover:text-brand-navy"
                      >
                        <div className="flex items-center justify-between">
                          <span>{sol.title}</span>
                          {sol.id.startsWith('mobinawa') ? (
                            <span className="text-[10px] text-brand-orange font-medium">mobinawa.com ↗</span>
                          ) : sol.id === 'digicontacts' ? (
                            <span className="text-[10px] text-brand-blue font-medium">digicontacts.net ↗</span>
                          ) : (sol.id === 'numero-pro' || sol.id === '3cx-callcenter' || sol.id === 'procom-crm') ? (
                            <span className="text-[10px] text-emerald-600 font-medium">Disponible</span>
                          ) : null}
                        </div>
                        <span className="block text-[11px] text-neutral-400">{sol.badge}</span>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <a
                key={l.label}
                href={l.href}
                onClick={(e) => handleLinkClick(e, l)}
                className="block py-2.5 text-sm text-neutral-700 hover:text-brand-navy font-medium"
              >
                {l.label}
              </a>
            )
          )}
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
