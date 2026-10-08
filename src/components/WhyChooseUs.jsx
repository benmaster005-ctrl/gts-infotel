import { WHY_GTS } from '../data/telecomData';

/**
 * Section Réassurance : "Pourquoi choisir GTS-Infotel ?"
 * Met en avant le partenariat stratégique avec CAMTEL, l'alliance 3CX,
 * la conformité ART et les 4 métriques clés.
 */
export default function WhyChooseUs() {
  return (
    <section id="pourquoi" className="py-24 bg-brand-navy text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Colonne Gauche : Argumentaire & Garanties de service */}
          <div className="lg:col-span-7">
            <span className="text-xs font-semibold tracking-widest uppercase text-cyan-400">
              EXPERTISE & ASSURANCE OPÉRATEUR
            </span>

            <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold tracking-tight">
              {WHY_GTS.heading}
            </h2>

            <p className="mt-6 text-[15px] leading-relaxed text-neutral-300 max-w-xl">
              {WHY_GTS.text}
            </p>

            {/* Garanties clés incluant le partenariat CAMTEL et 3CX */}
            <div className="mt-8 space-y-5 border-t border-neutral-800 pt-8 max-w-xl">
              {WHY_GTS.guarantees.map((g, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <span className="text-brand-orange text-sm font-bold select-none shrink-0 mt-0.5">—</span>
                  <div>
                    <h3 className="text-sm font-bold text-white">
                      {g.title}
                    </h3>
                    <p className="mt-1 text-xs sm:text-sm text-neutral-400 leading-relaxed">
                      {g.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Badges logos officiels : CAMTEL, 3CX, GTS, ProCom, Mobinawa */}
            <div className="mt-10">
              <span className="text-xs text-neutral-400 tracking-wider uppercase font-medium block mb-3">
                Partenaires clés & Écosystème :
              </span>
              <div className="flex flex-wrap items-center gap-3">
                <div className="bg-white px-3 py-1.5 rounded flex items-center justify-center">
                  <img src="/assets/camtel-logo.png" alt="CAMTEL" className="h-6 w-auto object-contain" />
                </div>
                <div className="bg-white px-3 py-1.5 rounded flex items-center justify-center">
                  <img src="/assets/3cx-logo.svg" alt="3CX" className="h-5 w-auto object-contain" />
                </div>
                <div className="bg-white px-3 py-1.5 rounded flex items-center justify-center">
                  <img src="/assets/art-logo.jpg" alt="ART Cameroun" className="h-6 w-auto object-contain" />
                </div>
                <div className="bg-white px-3 py-1.5 rounded flex items-center justify-center">
                  <img src="/assets/procom-logo.png" alt="ProCom" className="h-6 w-auto object-contain" />
                </div>
                <div className="bg-white px-3 py-1.5 rounded flex items-center justify-center">
                  <img src="/assets/mobinawa-logo.png" alt="Mobinawa" className="h-6 w-auto object-contain" />
                </div>
              </div>
            </div>
          </div>

          {/* Colonne Droite : Les 4 métriques clés de la maquette */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {WHY_GTS.stats.map((s, i) => (
              <div
                key={i}
                className="border border-neutral-800 bg-neutral-900/60 p-6 flex flex-col justify-between"
              >
                <div className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white font-mono">
                  {s.value}
                </div>
                <div className="mt-3 text-xs sm:text-sm font-medium text-neutral-300 leading-snug">
                  {s.label}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
