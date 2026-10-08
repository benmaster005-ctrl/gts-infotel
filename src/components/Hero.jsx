import { HERO } from '../data/telecomData';

/**
 * Hero — Version précédente : présentation sobre et percutante.
 * Contraste typographique et espacement généreux.
 */
export default function Hero({ onContact }) {
  return (
    <section className="relative bg-brand-navy text-white min-h-[85vh] flex items-end pb-20 pt-32 overflow-hidden">
      {/* Texture subtile */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'radial-gradient(circle, #fff 0.5px, transparent 0.5px)',
          backgroundSize: '20px 20px',
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 w-full">
        {/* Titre principal */}
        <h1 className="text-[clamp(2rem,5vw,3.75rem)] font-extrabold leading-[1.1] tracking-tight max-w-3xl">
          {HERO.heading}
        </h1>

        {/* Texte d'accompagnement */}
        <p className="mt-6 text-neutral-400 text-lg leading-relaxed max-w-xl">
          {HERO.lead}
        </p>

        {/* Boutons d'action */}
        <div className="mt-10 flex flex-wrap items-center gap-6">
          <button
            onClick={onContact}
            className="bg-brand-orange text-white text-sm font-semibold px-7 py-3.5 hover:bg-brand-orange/90 transition-colors"
          >
            {HERO.cta}
          </button>
          <a
            href="#solutions"
            className="text-sm font-medium text-neutral-400 hover:text-white transition-colors border-b border-neutral-600 hover:border-white pb-0.5"
          >
            {HERO.ctaSecondary}
          </a>
        </div>

        {/* Ligne de confiance */}
        <p className="mt-16 text-[13px] text-neutral-500 tracking-wide">
          Opérateur agréé · Licence Catégorie 1 · Interconnexion CAMTEL · 500+ entreprises connectées
        </p>
      </div>
    </section>
  );
}
