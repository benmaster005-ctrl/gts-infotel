import { useState, useEffect, useRef } from 'react';
import { NAV_LINKS, SOLUTIONS } from '../data/telecomData';
import { ChevronDown, ArrowRight, Menu, X } from 'lucide-react';

export default function Navbar({ onContact, currentRoute = 'home', onNavigate }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const dropdownTimeout = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

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
    dropdownTimeout.current = setTimeout(() => setDropdownOpen(false), 150);
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
      e.preventDefault();
      if (currentRoute !== 'home') {
        onNavigate('home');
        setTimeout(() => {
          const el = document.querySelector(link.href);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      } else {
        const el = document.querySelector(link.href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
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

  const isActive = (label) => {
    if (label === 'Accueil' && currentRoute === 'home') return true;
    if (label === 'Numéro PRO' && currentRoute === 'numero-pro') return true;
    if (label === 'À propos' && currentRoute === 'about') return true;
    if (label === 'Contact' && currentRoute === 'contact') return true;
    return false;
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 transition-all duration-200">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* Logo GTS bien visible seul, sans texte parasite */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); onNavigate('home'); }}
            className="flex items-center select-none"
            aria-label="GTS-Infotel Accueil"
          >
            <img
              src="/assets/gts-logo.png"
              alt="GTS-Infotel"
              className="h-12 w-auto object-contain"
            />
          </a>

          {/* Navigation Bureau */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((l) =>
              l.hasDropdown ? (
                <div
                  key={l.label}
                  ref={dropdownRef}
                  className="relative"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-gray-700 hover:text-brand-navy rounded-md transition-colors"
                  >
                    {l.label}
                    <ChevronDown className="w-4 h-4 text-gray-500" />
                  </button>

                  {/* Menu déroulant sur fond blanc pur */}
                  {dropdownOpen && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2">
                      <div className="bg-white border border-gray-200 shadow-lg rounded-xl w-[440px] p-2">
                        <div className="grid gap-1">
                          {SOLUTIONS.items.map((sol) => {
                            const isMobinawa = sol.id.startsWith('mobinawa');
                            const isDigicontacts = sol.id === 'digicontacts';
                            const targetHref = isMobinawa ? 'https://www.mobinawa.com/' : isDigicontacts ? 'https://www.digicontacts.net/' : sol.id === 'numero-pro' ? '#numero-pro' : sol.id === '3cx-callcenter' ? '#3cx-callcenter' : sol.id === 'procom-crm' ? '#reseau-procom' : '#';

                            return (
                              <a
                                key={sol.id}
                                href={targetHref}
                                target={isMobinawa || isDigicontacts ? '_blank' : undefined}
                                rel={isMobinawa || isDigicontacts ? 'noopener noreferrer' : undefined}
                                onClick={(e) => handleSolutionClick(e, sol.id)}
                                className="block p-3 rounded-lg hover:bg-gray-50 transition-colors"
                              >
                                <span className="text-sm font-semibold text-brand-navy block mb-0.5">
                                  {sol.title}
                                </span>
                                <p className="text-xs text-gray-500 leading-relaxed">
                                  {sol.tagline}
                                </p>
                              </a>
                            );
                          })}
                        </div>
                        <div className="border-t border-gray-100 mt-2 pt-2 px-1">
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
                            className="flex items-center justify-between text-xs font-medium text-gray-600 hover:text-brand-navy p-2 rounded transition-colors"
                          >
                            <span>Voir toutes les offres</span>
                            <ArrowRight className="w-3.5 h-3.5 text-gray-500" />
                          </a>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={(e) => handleLinkClick(e, l)}
                  className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                    isActive(l.label)
                      ? 'text-brand-navy font-semibold bg-gray-100'
                      : 'text-gray-700 hover:text-brand-navy'
                  }`}
                >
                  {l.label}
                </a>
              )
            )}
          </nav>

          {/* Action Contact */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onContact}
              className="btn-accent"
            >
              Commander un numéro
              <ArrowRight className="w-4 h-4 ml-1 text-white" />
            </button>
          </div>

          {/* Menu Mobile */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-brand-navy hover:bg-gray-100 transition-colors"
            aria-label="Menu"
          >
            {menuOpen ? <X className="w-6 h-6 text-current" /> : <Menu className="w-6 h-6 text-current" />}
          </button>
        </div>
      </header>

      {/* Tiroir Mobile sur fond blanc pur */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-white pt-24 px-6 lg:hidden flex flex-col justify-between pb-8">
          <nav className="flex flex-col gap-2">
            {NAV_LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={(e) => handleLinkClick(e, l)}
                className={`text-lg font-medium py-3 border-b border-gray-100 ${
                  isActive(l.label) ? 'text-brand-navy font-semibold' : 'text-gray-700'
                }`}
              >
                {l.label}
              </a>
            ))}
          </nav>
          
          <button
            onClick={() => { setMenuOpen(false); onContact(); }}
            className="w-full btn-accent py-3.5 text-base justify-center mt-6"
          >
            Commander un Numéro PRO
          </button>
        </div>
      )}
    </>
  );
}
