import { PROCOM } from '../data/telecomData';

/**
 * Section Réseau ProCom sur la page d'accueil.
 * Enrichie avec les détails officiels du réseau ProCom :
 * - 1er réseau virtuel panafricain A2P
 * - 3 passerelles opérateurs (Voice, SMS, Extranet)
 * - Décret réglementaire 2022
 * - Navigation directe vers la page dédiée Réseau ProCom
 */
export default function ProductSpotlight({ onContact, onNavigate }) {
  return (
    <section id="procom" className="py-24 bg-neutral-50 border-b border-neutral-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Colonne Gauche : Logo officiel ProCom + Argumentaire détaillé */}
          <div className="lg:col-span-7">
            <div className="mb-6 flex items-center gap-3">
              <img
                src="/assets/procom-logo.png"
                alt="ProCom - the Online Communication on PRO Numbers"
                className="h-12 w-auto object-contain"
              />
              <span className="text-[11px] font-semibold text-brand-orange bg-brand-orange/10 px-2.5 py-1 rounded">
                1er Réseau Virtuel Panafricain A2P
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-brand-navy whitespace-pre-line leading-snug">
              Le réseau ProCom, support de la transformation numérique réussie des entreprises
            </h2>

            <p className="mt-4 text-[15px] leading-relaxed text-neutral-600">
              Déployé dans le cloud en partenariat stratégique avec <strong>CAMTEL</strong> et conformément au décret de décembre 2022 sur la numérotation, le <strong>réseau ProCom</strong> permet aux organisations d'identifier leurs services sur des numéros PRO et de centraliser leurs communications (Voix, SMS/USSD, WhatsApp, Web).
            </p>

            {/* 3 passerelles du cœur de réseau */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 border-y border-neutral-200 py-5">
              <div>
                <span className="text-xs font-bold text-brand-navy block">Voice Gateway</span>
                <span className="text-[11px] text-neutral-500">SIP Trunk &amp; VoIP HD</span>
              </div>
              <div>
                <span className="text-xs font-bold text-brand-navy block">SMS Gateway</span>
                <span className="text-[11px] text-neutral-500">API HTTP &amp; SMPP</span>
              </div>
              <div>
                <span className="text-xs font-bold text-brand-navy block">Extranet Client</span>
                <span className="text-[11px] text-neutral-500">Rapports &amp; Soldes</span>
              </div>
            </div>

            {/* Liste de fonctionnalités */}
            <ul className="mt-6 space-y-2.5">
              {PROCOM.features.map((f, i) => (
                <li key={i} className="text-xs sm:text-sm text-neutral-700 flex items-baseline gap-2.5">
                  <span className="text-brand-orange text-xs select-none font-bold">—</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onNavigate && onNavigate('reseau-procom')}
                className="bg-brand-navy text-white text-sm font-semibold px-6 py-3.5 hover:bg-brand-navy/90 transition-colors shadow-sm"
              >
                En savoir plus sur le réseau ProCom →
              </button>
              <button
                onClick={onContact}
                className="text-sm font-semibold text-brand-navy border-b border-brand-navy pb-0.5 hover:text-brand-blue hover:border-brand-blue transition-colors"
              >
                Demander un raccordement
              </button>
            </div>
          </div>

          {/* Colonne Droite : Schéma officiel d'architecture ProCom */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end">
            <div className="bg-white border border-neutral-200 p-6 flex flex-col items-center text-center max-w-md shadow-sm">
              <img
                src="/assets/procom-architecture-full.png"
                alt="Architecture du Réseau ProCom"
                className="w-full h-auto object-contain mb-4"
              />
              <span className="text-xs font-semibold uppercase tracking-wider text-brand-orange">
                Cœur de Réseau Opérateur
              </span>
              <h3 className="text-base font-bold text-neutral-900 mt-1">
                Interconnexion Nationale CAMTEL
              </h3>
              <p className="text-xs text-neutral-500 mt-1.5 leading-relaxed">
                Acheminement direct garanti vers tous les abonnés fixes &amp; mobiles du Cameroun, avec haute disponibilité 24/7.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
