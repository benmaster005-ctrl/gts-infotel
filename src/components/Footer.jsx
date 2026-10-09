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

            {/* Réseaux sociaux officiels & Contact direct */}
            <div className="mt-8">
              <span className="text-xs font-semibold tracking-wider uppercase text-neutral-400 block mb-3">
                Réseaux sociaux &amp; Canaux officiels
              </span>
              <div className="flex items-center gap-3">
                {/* WhatsApp */}
                <a
                  href={FOOTER.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-xl bg-emerald-600/20 hover:bg-emerald-600 text-emerald-400 hover:text-white flex items-center justify-center transition-all duration-200 border border-emerald-500/20 hover:border-emerald-500 hover:scale-105 shadow-sm"
                  aria-label="WhatsApp GTS-Infotel (+237 242 232 000)"
                  title="WhatsApp GTS-Infotel (+237 242 232 000)"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.711 1.457h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </a>

                {/* Twitter / X */}
                <a
                  href={FOOTER.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-xl bg-sky-600/20 hover:bg-sky-500 text-sky-400 hover:text-white flex items-center justify-center transition-all duration-200 border border-sky-500/20 hover:border-sky-500 hover:scale-105 shadow-sm"
                  aria-label="Twitter / X GTS-Infotel (@gtsinfotelcm)"
                  title="Twitter / X GTS-Infotel (@gtsinfotelcm)"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href={FOOTER.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-xl bg-blue-700/20 hover:bg-blue-600 text-blue-400 hover:text-white flex items-center justify-center transition-all duration-200 border border-blue-500/20 hover:border-blue-600 hover:scale-105 shadow-sm"
                  aria-label="LinkedIn GTS-Infotel"
                  title="LinkedIn GTS-Infotel"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${FOOTER.email}`}
                  className="w-11 h-11 rounded-xl bg-white/10 hover:bg-white text-neutral-300 hover:text-brand-navy flex items-center justify-center transition-all duration-200 border border-white/10 hover:border-white hover:scale-105 shadow-sm"
                  aria-label={`Email (${FOOTER.email})`}
                  title={`Email (${FOOTER.email})`}
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </a>

                {/* Téléphone direct */}
                <a
                  href={`tel:${FOOTER.phoneRaw}`}
                  className="w-11 h-11 rounded-xl bg-amber-500/15 hover:bg-brand-orange text-amber-400 hover:text-white flex items-center justify-center transition-all duration-200 border border-amber-500/20 hover:border-brand-orange hover:scale-105 shadow-sm"
                  aria-label={`Appel téléphonique (${FOOTER.phone})`}
                  title={`Appel téléphonique (${FOOTER.phone})`}
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </a>
              </div>
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
