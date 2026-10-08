import { FOOTER } from '../data/telecomData';

/**
 * Footer — Logo GTS officiel net, coordonnées réelles et navigation.
 */
export default function Footer({ onContact }) {
  return (
    <footer id="contact" className="bg-brand-navy text-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Identité de l'entreprise */}
          <div className="md:col-span-2">
            <div className="inline-flex bg-white px-3 py-1.5 rounded mb-4">
              <img
                src="/assets/gts-logo.png"
                alt="GTS - Global Telecom Services"
                className="h-8 w-auto object-contain"
              />
            </div>

            <p className="text-sm text-neutral-400 max-w-md leading-relaxed">
              {FOOTER.tagline}
            </p>

            <div className="mt-8 space-y-2 text-sm text-neutral-400">
              <p>{FOOTER.address}</p>
              <p>
                <a href={`tel:${FOOTER.phone.replace(/\s/g, '')}`} className="hover:text-white transition-colors">
                  {FOOTER.phone}
                </a>
              </p>
              <p>
                <a href={`mailto:${FOOTER.email}`} className="hover:text-white transition-colors">
                  {FOOTER.email}
                </a>
              </p>
              <p>
                <a href={`https://${FOOTER.website}`} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                  {FOOTER.website}
                </a>
              </p>
            </div>
          </div>

          {/* Liens de navigation */}
          <div>
            <div className="text-xs font-semibold tracking-widest uppercase text-neutral-500 mb-4">
              Navigation
            </div>
            <nav className="space-y-2.5">
              {[
                ['Numéros PRO', '#pro-number'],
                ['ProCom', '#procom'],
                ['Solutions', '#solutions'],
                ['Pourquoi GTS', '#pourquoi'],
                ['FAQ', '#faq'],
              ].map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  className="block text-sm text-neutral-400 hover:text-white transition-colors"
                >
                  {label}
                </a>
              ))}
              <button
                onClick={onContact}
                className="text-sm text-brand-orange hover:text-orange-300 transition-colors"
              >
                Nous contacter
              </button>
            </nav>
          </div>
        </div>
      </div>

      <div className="border-t border-neutral-800">
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <span>© {new Date().getFullYear()} GTS-Infotel. Tous droits réservés.</span>
          <span>Yaoundé, Cameroun</span>
        </div>
      </div>
    </footer>
  );
}
