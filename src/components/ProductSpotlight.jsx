import { PROCOM } from '../data/telecomData';

/**
 * Section Réseau ProCom — Présentation officielle du réseau ProCom
 * ("the Online Communication on PRO Numbers").
 * Layout asymétrique : logo officiel ProCom + texte à gauche, 
 * visuel officiel Numéro GTS à droite.
 */
export default function ProductSpotlight({ onContact }) {
  return (
    <section id="procom" className="py-24 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Colonne Gauche : Logo officiel ProCom + Argumentaire */}
          <div>
            <div className="mb-6">
              <img
                src="/assets/procom-logo.png"
                alt="ProCom - the Online Communication on PRO Numbers"
                className="h-14 w-auto object-contain"
              />
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-brand-navy whitespace-pre-line leading-snug">
              {PROCOM.heading}
            </h2>

            <p className="mt-6 text-[15px] leading-relaxed text-neutral-600 max-w-md">
              {PROCOM.text}
            </p>

            {/* Liste de fonctionnalités sobre */}
            <ul className="mt-8 space-y-3">
              {PROCOM.features.map((f, i) => (
                <li key={i} className="text-sm text-neutral-700 flex items-baseline gap-3">
                  <span className="text-brand-orange text-xs select-none font-bold">—</span>
                  {f}
                </li>
              ))}
            </ul>

            <button
              onClick={onContact}
              className="mt-10 bg-brand-navy text-white text-sm font-semibold px-7 py-3.5 hover:bg-brand-navy/90 transition-colors"
            >
              En savoir plus sur ProCom
            </button>
          </div>

          {/* Colonne Droite : Visuel officiel Numéro GTS */}
          <div className="flex justify-center lg:justify-end items-center">
            <img
              src="/assets/numero-gts-logo.png"
              alt="Numéro GTS"
              className="w-72 max-w-full h-auto object-contain"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
