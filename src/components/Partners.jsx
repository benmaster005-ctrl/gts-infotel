import { PARTNERS } from '../data/telecomData';

/**
 * Section Partenaires Stratégiques & Écosystème Agréé
 * Met en valeur CAMTEL (partenaire stratégique national), 3CX (partenaire mondial),
 * l'ART (autorité de régulation) ainsi que ProCom et Mobinawa.
 * Design éditorial épuré, logos réels nets sans filtres destructeurs.
 */
export default function Partners() {
  return (
    <section id="partenaires" className="py-20 bg-white border-b border-neutral-100">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* En-tête de section */}
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-semibold tracking-widest uppercase text-brand-orange">
            ÉCOSYSTÈME & CONFIANCE
          </span>
          <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold tracking-tight text-brand-navy">
            Nos partenaires stratégiques
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-neutral-600">
            GTS-Infotel s'appuie sur des alliances stratégiques et des agréments institutionnels de référence pour garantir la sécurité, la haute disponibilité et la conformité de vos communications d'entreprise.
          </p>
        </div>

        {/* Grille des partenaires officiels */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PARTNERS.map((partner, idx) => (
            <div
              key={idx}
              className="border border-neutral-200 bg-neutral-50/50 p-6 flex flex-col justify-between hover:border-neutral-300 transition-colors"
            >
              {/* Logo container */}
              <div className="h-16 flex items-center justify-start mb-4">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-12 max-w-[160px] object-contain"
                />
              </div>

              {/* Informations du partenaire */}
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-brand-blue block">
                  {partner.category}
                </span>
                <h3 className="text-base font-bold text-neutral-900 mt-1">
                  {partner.name}
                </h3>
                <p className="text-xs text-neutral-500 mt-1 leading-relaxed">
                  {partner.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mention de partenariat stratégique national */}
        <div className="mt-10 pt-8 border-t border-neutral-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-neutral-500">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0"></span>
            <span>Interconnexion directe garantie avec le réseau public CAMTEL et les opérateurs nationaux.</span>
          </div>
          <span className="font-mono text-neutral-400">Licence Opérateur ART Cat. 1</span>
        </div>

      </div>
    </section>
  );
}
