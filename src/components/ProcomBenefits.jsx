import { PROCOM_BENEFITS } from '../data/telecomData';

/**
 * Section Avantages Clés du Réseau ProCom (Page 4 du document officiel).
 * Mise en page éditoriale rigoureuse, typographie hiérarchisée, zéro carte IA stéréotypée.
 */
export default function ProcomBenefits() {
  return (
    <section id="avantages" className="py-24 bg-brand-navy text-white">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* En-tête */}
        <div className="max-w-2xl mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase text-cyan-400">
            INNOVATION & PERFORMANCE
          </span>
          <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold tracking-tight">
            {PROCOM_BENEFITS.heading}
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-neutral-300">
            {PROCOM_BENEFITS.lead}
          </p>
        </div>

        {/* Grille des 7 avantages */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 border-t border-neutral-800 pt-12">
          {PROCOM_BENEFITS.items.map((b) => (
            <div key={b.num} className="flex flex-col justify-between border-b border-neutral-800/80 pb-8">
              <div>
                <span className="text-sm font-mono font-bold text-neutral-400 block mb-3">
                  {b.num}
                </span>
                <h3 className="text-base font-bold text-white mb-3">
                  {b.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  {b.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Conclusion officielle */}
        <div className="mt-14 pt-8 border-t border-neutral-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-neutral-400">
          <p className="italic text-neutral-300">
            « Rejoignez le réseau ProCom et faites partie des entreprises qui façonnent l'avenir des communications professionnelles au Cameroun. »
          </p>
          <span className="font-mono text-cyan-400 shrink-0">GTS-Infotel Cameroon SA · Juin 2026</span>
        </div>

      </div>
    </section>
  );
}
