import { SOLUTIONS } from '../data/telecomData';

/**
 * Solutions — editorial layout. Each solution is a full-width row
 * alternating text alignment. The first (Numéros PRO) gets expanded
 * treatment with its "Idéal pour" list. Others are concise rows.
 */
export default function Solutions({ onContact }) {
  const [featured, ...rest] = SOLUTIONS.items;

  return (
    <section id="solutions" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <span className="text-xs font-semibold tracking-widest uppercase text-brand-orange">
          {SOLUTIONS.surtitle}
        </span>
        <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold tracking-tight text-brand-navy max-w-xl">
          {SOLUTIONS.heading}
        </h2>
        <p className="mt-4 text-[15px] text-neutral-600 max-w-lg leading-relaxed">
          {SOLUTIONS.intro}
        </p>

        {/* Featured solution — Numéros fixes virtuels */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 pb-16 border-b border-neutral-200">
          <div>
            <h3 className="text-xl font-bold text-neutral-900">
              {featured.title}
            </h3>
            <p className="mt-2 text-base text-neutral-500 font-medium">
              {featured.tagline}
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-neutral-600">
              {featured.text}
            </p>
            {featured.ctaHref ? (
              <a
                href={featured.ctaHref}
                className="inline-block mt-6 text-sm font-semibold text-brand-navy border-b border-brand-navy pb-0.5 hover:text-brand-blue hover:border-brand-blue transition-colors"
              >
                {featured.cta}
              </a>
            ) : (
              <button
                onClick={onContact}
                className="mt-6 text-sm font-semibold text-brand-navy border-b border-brand-navy pb-0.5 hover:text-brand-blue hover:border-brand-blue transition-colors"
              >
                {featured.cta}
              </button>
            )}
          </div>
          {featured.idealFor && (
            <div className="lg:border-l lg:border-neutral-200 lg:pl-12">
              <span className="text-xs font-semibold tracking-widest uppercase text-neutral-400">
                Idéal pour
              </span>
              <ul className="mt-4 space-y-3">
                {featured.idealFor.map((item, i) => (
                  <li key={i} className="text-sm text-neutral-700 flex items-baseline gap-3">
                    <span className="text-brand-orange text-xs select-none">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Remaining solutions — stacked rows */}
        {rest.map((sol, i) => (
          <div
            key={sol.id}
            className={`py-12 grid grid-cols-1 md:grid-cols-12 gap-6 items-start ${
              i < rest.length - 1 ? 'border-b border-neutral-100' : ''
            }`}
          >
            {/* Number + title */}
            <div className="md:col-span-4">
              <span className="text-xs font-semibold text-neutral-300 tabular-nums">
                {String(i + 2).padStart(2, '0')}
              </span>
              <h3 className="mt-1 text-lg font-bold text-neutral-900">
                {sol.title}
              </h3>
              <p className="mt-1 text-sm text-neutral-500 font-medium">
                {sol.tagline}
              </p>
            </div>

            {/* Description */}
            <div className="md:col-span-5">
              <p className="text-[15px] leading-relaxed text-neutral-600">
                {sol.text}
              </p>
            </div>

            {/* CTA */}
            <div className="md:col-span-3 md:text-right">
              {sol.ctaHref ? (
                <a
                  href={sol.ctaHref}
                  className="text-sm font-semibold text-brand-navy border-b border-brand-navy pb-0.5 hover:text-brand-blue hover:border-brand-blue transition-colors"
                >
                  {sol.cta}
                </a>
              ) : (
                <button
                  onClick={onContact}
                  className="text-sm font-semibold text-brand-navy border-b border-brand-navy pb-0.5 hover:text-brand-blue hover:border-brand-blue transition-colors"
                >
                  {sol.cta}
                </button>
              )}
            </div>
          </div>
        ))}

        {/* Bottom CTA */}
        <div className="mt-16 pt-12 border-t border-neutral-200 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <p className="text-lg font-bold text-neutral-900">
              Prêt à transformer vos communications ?
            </p>
            <p className="mt-1 text-sm text-neutral-500">
              Nos conseillers vous accompagnent pour configurer votre solution sur mesure.
            </p>
          </div>
          <button
            onClick={onContact}
            className="shrink-0 bg-brand-orange text-white text-sm font-semibold px-7 py-3.5 hover:bg-brand-orange/90 transition-colors"
          >
            Prendre contact
          </button>
        </div>
      </div>
    </section>
  );
}
