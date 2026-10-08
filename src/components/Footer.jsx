import { FOOTER } from '../data/telecomData';

/**
 * Footer — Logo GTS officiel seul, grand et bien visible sans titre à côté.
 */
export default function Footer({ onContact }) {
  return (
    <footer id="contact" className="bg-brand-navy text-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Identité de l'entreprise avec logo GTS seul, grand format */}
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
                <a href={`tel:${FOOTER.phone.replace(/\s/g, '')}`} className="hover:text-white transition-colors text-brand-orange font-semibold">
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
                  className="block text-sm text-neutral-300 hover:text-white transition-colors"
                >
                  {label}
                </a>
              ))}
              <button
                onClick={onContact}
                className="text-sm text-brand-orange hover:text-orange-300 transition-colors font-medium"
              >
                Nous contacter
              </button>
            </nav>
          </div>

        </div>
      </div>

      <div className="border-t border-neutral-800">
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <span>© {new Date().getFullYear()} GTS-Infotel. Tous droits réservés.</span>
          <span>Yaoundé, Cameroun</span>
        </div>
      </div>
    </footer>
  );
}
