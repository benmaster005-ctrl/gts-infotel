import React from 'react';
import { FOOTER } from '../data/telecomData';
import { ArrowUp, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer({ onContact, onNavigate }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-gray-200 text-brand-navy pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Grille Principale */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-14 border-b border-gray-100">
          
          {/* Colonne Marque */}
          <div className="lg:col-span-4 space-y-4">
            <img
              src="/assets/gts-logo.png"
              alt="GTS-Infotel"
              className="h-11 w-auto object-contain"
            />
            <p className="text-sm text-gray-600 leading-relaxed font-normal max-w-sm">
              {FOOTER.tagline || "1er opérateur télécom alternatif de numéros fixes virtuels multi-services des entreprises au Cameroun."}
            </p>
            
            {/* Réseaux sociaux discrets (couleur de la police) */}
            <div className="flex items-center gap-3 pt-2 text-gray-500">
              {FOOTER.linkedin && (
                <a
                  href={FOOTER.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 text-gray-500 hover:text-brand-navy transition-colors rounded hover:bg-gray-50"
                  aria-label="LinkedIn"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.2a1.64 1.64 0 0 0-1.64 1.63 1.64 1.64 0 0 0 1.64 1.64 1.64 1.64 0 0 0 1.64-1.64A1.64 1.64 0 0 0 7.83 6.2Z" />
                  </svg>
                </a>
              )}
              {FOOTER.twitter && (
                <a
                  href={FOOTER.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 text-gray-500 hover:text-brand-navy transition-colors rounded hover:bg-gray-50"
                  aria-label="X (Twitter)"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              )}
              {FOOTER.whatsapp && (
                <a
                  href={FOOTER.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 text-gray-500 hover:text-brand-navy transition-colors rounded hover:bg-gray-50"
                  aria-label="WhatsApp"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.41a8.204 8.204 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25.7-.72 1.3-1.37 1.62-.48.24-1.1.37-1.78.37-1.48 0-3.32-.78-5.06-2.52-1.74-1.74-2.52-3.58-2.52-5.06 0-.68.13-1.3.37-1.78.32-.65.92-1.12 1.62-1.37.25-.09.52-.14.79-.14.2 0 .4.03.6.09.28.09.47.6.61 1.05.15.48.33 1.08.36 1.15.04.1.06.22.02.34s-.12.23-.21.32c-.11.12-.23.23-.34.34-.11.11-.22.21-.13.38.3.56.76 1.19 1.33 1.76.57.57 1.2 1.03 1.76 1.33.17.09.27-.02.38-.13.11-.11.22-.23.34-.34.09-.09.2-.17.32-.21.12-.04.24-.02.34.02.07.03.67.21 1.15.36.45.14.96.33 1.05.61.06.2.09.4.09.6 0 .27-.05.54-.14.79" />
                  </svg>
                </a>
              )}
            </div>
          </div>

          {/* Colonne Solutions */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-semibold text-brand-navy mb-4">
              Solutions
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => onNavigate('numero-pro')}
                  className="text-gray-600 hover:text-brand-navy transition-colors text-left"
                >
                  Numéros PRO virtuels
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('3cx-callcenter')}
                  className="text-gray-600 hover:text-brand-navy transition-colors text-left"
                >
                  Centre de Contact 3CX
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('reseau-procom')}
                  className="text-gray-600 hover:text-brand-navy transition-colors text-left"
                >
                  Réseau ProCom
                </button>
              </li>
              <li>
                <a
                  href="https://www.mobinawa.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-brand-navy transition-colors block"
                >
                  Mobinawa-Business
                </a>
              </li>
              <li>
                <a
                  href="https://www.digicontacts.net/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-brand-navy transition-colors block"
                >
                  DigiContacts Omnicanal
                </a>
              </li>
            </ul>
          </div>

          {/* Colonne Entreprise */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-semibold text-brand-navy mb-4">
              Entreprise
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="text-gray-600 hover:text-brand-navy transition-colors text-left"
                >
                  À propos de GTS
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="text-gray-600 hover:text-brand-navy transition-colors text-left"
                >
                  Contact & Support
                </button>
              </li>
              <li>
                <button
                  onClick={onContact}
                  className="text-gray-600 hover:text-brand-navy transition-colors text-left"
                >
                  Demander un devis
                </button>
              </li>
            </ul>
          </div>

          {/* Colonne Coordonnées */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-semibold text-brand-navy mb-4">
              Coordonnées
            </h4>
            <div className="space-y-2.5 text-sm text-gray-600">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-gray-500 shrink-0 mt-1" />
                <span className="text-xs leading-relaxed">{FOOTER.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gray-500 shrink-0" />
                <a href={`tel:${FOOTER.phoneRaw}`} className="text-xs hover:text-brand-navy">
                  {FOOTER.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-gray-500 shrink-0" />
                <a href={`mailto:${FOOTER.email}`} className="text-xs hover:text-brand-navy">
                  {FOOTER.email}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Copyright & Réseaux */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div>
            © {new Date().getFullYear()} {FOOTER.legalName || 'GTS-Infotel Cameroon S.A.'} · Tous droits réservés.
          </div>

          <div className="flex items-center gap-4 text-gray-500">
            {FOOTER.linkedin && (
              <a
                href={FOOTER.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand-navy transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.2a1.64 1.64 0 0 0-1.64 1.63 1.64 1.64 0 0 0 1.64 1.64 1.64 1.64 0 0 0 1.64-1.64A1.64 1.64 0 0 0 7.83 6.2Z" />
                </svg>
              </a>
            )}
            {FOOTER.twitter && (
              <a
                href={FOOTER.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand-navy transition-colors"
                aria-label="X (Twitter)"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            )}
            {FOOTER.whatsapp && (
              <a
                href={FOOTER.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand-navy transition-colors"
                aria-label="WhatsApp"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.41a8.204 8.204 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25.7-.72 1.3-1.37 1.62-.48.24-1.1.37-1.78.37-1.48 0-3.32-.78-5.06-2.52-1.74-1.74-2.52-3.58-2.52-5.06 0-.68.13-1.3.37-1.78.32-.65.92-1.12 1.62-1.37.25-.09.52-.14.79-.14.2 0 .4.03.6.09.28.09.47.6.61 1.05.15.48.33 1.08.36 1.15.04.1.06.22.02.34s-.12.23-.21.32c-.11.12-.23.23-.34.34-.11.11-.22.21-.13.38.3.56.76 1.19 1.33 1.76.57.57 1.2 1.03 1.76 1.33.17.09.27-.02.38-.13.11-.11.22-.23.34-.34.09-.09.2-.17.32-.21.12-.04.24-.02.34.02.07.03.67.21 1.15.36.45.14.96.33 1.05.61.06.2.09.4.09.6 0 .27-.05.54-.14.79" />
                </svg>
              </a>
            )}
          </div>
          
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-brand-navy transition-colors"
          >
            <span>Haut de page</span>
            <ArrowUp className="w-3.5 h-3.5 text-gray-500" />
          </button>
        </div>

      </div>
    </footer>
  );
}
