import { HERO } from '../data/telecomData';

/**
 * Hero — full-bleed dark section with strong typographic hierarchy.
 * No decorative SVG lines, no glowing orbs, no badges. 
 * The impact comes from typography scale contrast and whitespace.
 */
export default function Hero({ onContact }) {
  return (
    <section className="relative bg-brand-navy text-white min-h-[85vh] flex items-end pb-20 pt-32 overflow-hidden">
      {/* Subtle texture — just a faint dot grid, almost invisible */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'radial-gradient(circle, #fff 0.5px, transparent 0.5px)',
          backgroundSize: '20px 20px',
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 w-full">
        {/* Main heading — large, tight, letting typography do the work */}
        <h1 className="text-[clamp(2rem,5vw,3.75rem)] font-extrabold leading-[1.1] tracking-tight max-w-3xl">
          {HERO.heading}
        </h1>

        {/* Supporting text — moderate size, max-width for readability */}
        <p className="mt-6 text-neutral-400 text-lg leading-relaxed max-w-xl">
          {HERO.lead}
        </p>

        {/* Actions — two links, no pills, no icons */}
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

        {/* Minimal trust line — just text, no icons, no badges */}
        <p className="mt-16 text-[13px] text-neutral-500 tracking-wide">
          Opérateur agréé · Licence Catégorie 1 · Interconnexion CAMTEL · 500+ entreprises connectées
        </p>
      </div>
    </section>
  );
}
