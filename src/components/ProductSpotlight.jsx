import { PROCOM } from '../data/telecomData';

/**
 * Section Réseau ProCom — Présentation officielle du réseau ProCom.
 * Colonne gauche : Logo officiel ProCom, argumentaire et fonctionnalités.
 * Colonne droite : Visuel officiel Numéro PRO (badge extrait et attribut KYC).
 */
export default function ProductSpotlight({ onContact }) {
  return (
    <section id="procom" className="py-24 bg-neutral-50 border-b border-neutral-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Colonne Gauche : Logo officiel ProCom + Argumentaire */}
          <div className="lg:col-span-7">
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

          {/* Colonne Droite : Visuel officiel Numéro PRO */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end">
            <div className="bg-white border border-neutral-200 p-8 flex flex-col items-center text-center max-w-sm shadow-sm">
              <img
                src="/assets/numero-pro-badge.png"
                alt="Numéro PRO"
                className="w-36 h-auto object-contain mb-4"
              />
              <span className="text-xs font-semibold uppercase tracking-wider text-brand-orange">
                Identifiant Unique Universel
              </span>
              <h3 className="text-lg font-bold text-neutral-900 mt-1">
                Le Numéro PRO
              </h3>
              <p className="text-xs text-neutral-500 mt-2 leading-relaxed">
                Numéro fixe virtuel multicanal (Voix, SMS, WhatsApp, Mobinawa) et attribut KYC de référence pour toutes les communications de votre organisation.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
