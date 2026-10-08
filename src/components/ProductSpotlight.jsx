import { PROCOM } from '../data/telecomData';

/**
 * Section Réseau ProCom — Présentation officielle du 1er réseau
 * de communication professionnelle basé sur le Numéro PRO.
 */
export default function ProductSpotlight({ onContact }) {
  return (
    <section id="procom" className="py-24 bg-white border-b border-neutral-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Colonne Gauche : Logo officiel ProCom + Argumentaire */}
          <div className="lg:col-span-7">
            <div className="mb-6">
              <img
                src="/assets/procom-extracted.png"
                alt="ProCom - The Cloud business communication on PRO Numbers"
                className="h-14 w-auto object-contain"
              />
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-brand-navy leading-snug">
              Le 1er réseau de communication professionnelle basé sur le Numéro PRO
            </h2>

            <p className="mt-4 text-[15px] leading-relaxed text-neutral-600">
              Fort de son partenariat avec <strong>CAMTEL</strong>, l'opérateur historique de téléphonie fixe, et conformément au nouveau décret de 2022 sur les numéros téléphoniques au Cameroun, <strong>GTS-Infotel</strong> devient le tout 1er Opérateur licencié des numéros fixes virtuels et du réseau ProCom.
            </p>

            {/* Caractéristiques majeures */}
            <ul className="mt-8 space-y-3.5">
              {PROCOM.features.map((f, i) => (
                <li key={i} className="text-sm text-neutral-700 flex items-baseline gap-3">
                  <span className="text-brand-orange text-xs select-none font-bold">—</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap items-center gap-5">
              <button
                onClick={onContact}
                className="bg-brand-navy text-white text-sm font-semibold px-7 py-3.5 hover:bg-brand-navy/90 transition-colors"
              >
                Demander un raccordement ProCom
              </button>
              <a
                href="#solutions"
                className="text-sm font-semibold text-brand-blue border-b border-brand-blue pb-0.5 hover:text-brand-navy hover:border-brand-navy transition-colors"
              >
                Explorer le catalogue des solutions
              </a>
            </div>
          </div>

          {/* Colonne Droite : Visuel officiel Numéro PRO */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end gap-6">
            <div className="bg-neutral-50 border border-neutral-200 p-8 flex flex-col items-center text-center max-w-sm">
              <img
                src="/assets/numero-pro-badge.png"
                alt="Numéro PRO"
                className="w-40 h-auto object-contain mb-4"
              />
              <span className="text-xs font-semibold uppercase tracking-wider text-brand-orange">
                Identifiant Unique Universel
              </span>
              <h3 className="text-lg font-bold text-neutral-900 mt-1">
                Le Numéro PRO
              </h3>
              <p className="text-xs text-neutral-500 mt-2 leading-relaxed">
                Numéro fixe virtuel multicanal (Voix, SMS, WhatsApp, Mobinawa) et attribut KYC de référence pour toutes vos interactions clients.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
