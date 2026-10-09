import { SOLUTIONS } from '../data/telecomData';

/**
 * Solutions — Catalogue officiel des solutions ProCom (Juin 2026).
 * Présentation éditoriale sans cartes génériques répétitives :
 * Chaque solution associe son visuel extrait du document officiel,
 * sa typographie soignée, ses modules clés et son action directe.
 */
export default function Solutions({ onContact }) {
  return (
    <section id="solutions" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* En-tête de section */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase text-brand-orange">
            {SOLUTIONS.surtitle}
          </span>
          <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold tracking-tight text-brand-navy">
            {SOLUTIONS.heading}
          </h2>
          <p className="mt-4 text-[15px] text-neutral-600 leading-relaxed">
            {SOLUTIONS.lead}
          </p>
        </div>

        {/* Liste des solutions ProCom */}
        <div className="divide-y divide-neutral-200 border-t border-b border-neutral-200">
          {SOLUTIONS.items.map((sol, idx) => (
            <div
              key={sol.id}
              className="py-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
            >
              {/* Colonne 1 : Index, Logo/Visuel officiel extrait & Titre */}
              <div className="lg:col-span-4">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-mono font-bold text-neutral-300">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-brand-blue">
                    {sol.badge}
                  </span>
                </div>

                {/* Visuel officiel extrait */}
                <div className="h-16 flex items-center justify-start mb-4">
                  <img
                    src={sol.image}
                    alt={sol.title}
                    className="max-h-14 max-w-[200px] object-contain"
                  />
                </div>

                <h3 className="text-xl font-bold text-neutral-900">
                  {sol.title}
                </h3>
                <p className="mt-1 text-sm font-medium text-neutral-500">
                  {sol.tagline}
                </p>
              </div>

              {/* Colonne 2 : Description détaillée & Modules clés */}
              <div className="lg:col-span-5">
                <p className="text-[15px] leading-relaxed text-neutral-600">
                  {sol.text}
                </p>

                {sol.features && (
                  <ul className="mt-5 space-y-2">
                    {sol.features.map((feat, i) => (
                      <li key={i} className="text-xs sm:text-sm text-neutral-700 flex items-start gap-2.5">
                        <span className="text-brand-orange text-xs select-none mt-0.5">—</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Colonne 3 : Action / Souscription */}
              <div className="lg:col-span-3 lg:text-right flex flex-col items-start lg:items-end justify-between h-full pt-1">
                {sol.ctaHref ? (
                  <a
                    href={sol.ctaHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-brand-navy text-white text-xs sm:text-sm font-semibold px-5 py-3 hover:bg-brand-blue transition-colors inline-flex items-center gap-2 shadow-sm"
                  >
                    <span>{sol.cta}</span>
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                ) : (
                  <button
                    onClick={onContact}
                    className="bg-brand-navy text-white text-xs sm:text-sm font-semibold px-5 py-3 hover:bg-brand-blue transition-colors"
                  >
                    {sol.cta}
                  </button>
                )}
                <span className="text-[11px] text-neutral-400 mt-3">
                  {sol.id.startsWith('mobinawa')
                    ? 'Portail officiel mobinawa.com ↗'
                    : sol.id === 'digicontacts'
                    ? 'Portail officiel digicontacts.net ↗'
                    : 'Mode SaaS · Sans engagement lourd'}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Appel à l'action de synthèse */}
        <div className="mt-16 pt-10 border-t border-neutral-100 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <p className="text-lg font-bold text-neutral-900">
              Besoin d'un audit de vos flux télécoms d'entreprise ?
            </p>
            <p className="mt-1 text-sm text-neutral-500">
              Nos ingénieurs certifiés configurent votre architecture ProCom sur mesure.
            </p>
          </div>
          <button
            onClick={onContact}
            className="shrink-0 bg-brand-orange text-white text-sm font-semibold px-8 py-3.5 hover:bg-brand-orange/90 transition-colors"
          >
            Prendre contact
          </button>
        </div>

      </div>
    </section>
  );
}
