import { FOOTER } from '../data/telecomData';

/**
 * Footer — Logo GTS officiel seul, coordonnées officielles, réseaux sociaux et copyright légal.
 */
export default function Footer({ onContact, onNavigate }) {
  return (
    <footer id="contact" className="bg-brand-navy text-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Identité de l'entreprise avec logo GTS seul */}
          <div className="md:col-span-2">
            <div className="mb-6">
              <div className="bg-white p-3.5 rounded-2xl inline-flex items-center justify-center shadow-lg border border-neutral-100">
                <img
                  src="/assets/gts-logo.png"
                  alt="GTS - Global Telecom Services"
                  className="h-16 sm:h-20 w-auto object-contain"
                />
              </div>
            </div>

            <p className="text-sm text-neutral-300 max-w-md leading-relaxed">
              {FOOTER.tagline}
            </p>

            <div className="mt-8 space-y-2.5 text-sm text-neutral-300">
              <p className="font-medium text-white">{FOOTER.address}</p>
              <p>
                <a href={`tel:${FOOTER.phoneRaw}`} className="hover:text-white transition-colors text-brand-orange font-semibold">
                  {FOOTER.phone}
                </a>
              </p>
              <p>
                <a href={`mailto:${FOOTER.email}`} className="hover:text-white transition-colors">
                  {FOOTER.email}
                </a>
              </p>
              <p>
                <a href={`https://${FOOTER.website}`} target="_blank" rel="noreferrer" className="hover:text-white transition-colors underline underline-offset-4 text-cyan-400">
                  {FOOTER.website}
                </a>
              </p>
            </div>

            {/* Réseaux sociaux officiels */}
            <div className="mt-6 flex items-center gap-3">
              <a
                href={FOOTER.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-emerald-600/20 hover:bg-emerald-600 text-emerald-400 hover:text-white flex items-center justify-center transition-colors"
                aria-label="WhatsApp GTS-Infotel"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.187-2.59-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.079-2.115-.514-1.815-.758-2.985-2.607-3.076-2.727-.089-.12-.733-.974-.733-1.859 0-.886.463-1.32.628-1.498.165-.179.36-.224.48-.224.12 0 .241.002.346.007.11.006.257-.042.402.308.15.36.51 1.246.554 1.337.045.09.075.195.015.315-.06.12-.09.195-.18.3-.09.105-.19.234-.271.315-.09.09-.184.188-.079.368.105.18.468.772 1.004 1.25.69.614 1.272.805 1.452.895.18.09.285.076.39-.045.105-.12.45-.525.57-.705.12-.18.24-.15.405-.09.165.06 1.05.495 1.23.585.18.09.3.135.345.21.045.075.045.435-.099.84z"/>
                </svg>
              </a>
              <a
                href={FOOTER.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-sky-600/20 hover:bg-sky-500 text-sky-400 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Twitter / X GTS-Infotel"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a
                href={`mailto:${FOOTER.email}`}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white text-neutral-300 hover:text-brand-navy flex items-center justify-center transition-colors"
                aria-label="Email GTS-Infotel"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </a>
              <a
                href={FOOTER.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-blue-700/20 hover:bg-blue-600 text-blue-400 hover:text-white flex items-center justify-center transition-colors"
                aria-label="LinkedIn GTS-Infotel"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.53 1.53 0 0 0 1.53-1.53c0-.85-.68-1.53-1.53-1.53a1.53 1.53 0 0 0-1.53 1.53c0 .85.68 1.53 1.53 1.53m1.37 9.74v-8.37H5.09v8.37h2.74z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Liens de navigation */}
          <div>
            <div className="text-xs font-semibold tracking-widest uppercase text-neutral-400 mb-4">
              Navigation
            </div>
            <nav className="space-y-2.5">
              {[
                ['Numéros PRO', '#pro-number'],
                ['ProCom', '#procom'],
                ['Solutions', '#solutions'],
                ['Pourquoi GTS', '#pourquoi'],
                ['Partenaires', '#partenaires'],
                ['FAQ', '#faq'],
              ].map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  onClick={(e) => {
                    if (onNavigate && href.startsWith('#')) {
                      e.preventDefault();
                      onNavigate('home');
                      setTimeout(() => {
                        const el = document.querySelector(href);
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }, 100);
                    }
                  }}
                  className="block text-sm text-neutral-300 hover:text-white transition-colors"
                >
                  {label}
                </a>
              ))}
              <button
                onClick={() => onNavigate ? onNavigate('contact') : onContact()}
                className="text-sm text-brand-orange hover:text-orange-300 transition-colors font-medium block"
              >
                Page Contact &amp; Devis →
              </button>
            </nav>
          </div>

        </div>
      </div>

      <div className="border-t border-neutral-800">
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <span>©2025 {FOOTER.legalName} - All Rights Reserved.</span>
          <span>Yaoundé, Cameroun</span>
        </div>
      </div>
    </footer>
  );
}
