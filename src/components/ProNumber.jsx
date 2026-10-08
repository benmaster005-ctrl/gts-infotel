import { PRO_NUMBER } from '../data/telecomData';

/**
 * PRO Number / Numéros fixes virtuels — uses the real infographic image.
 * Left: infographic. Right: editorial content with "Idéal pour" and capabilities.
 */
export default function ProNumber() {
  return (
    <section id="pro-number" className="py-24 bg-white border-b border-neutral-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left — infographic */}
          <div>
            <img
              src="/assets/pro-number-infographic.png"
              alt="PRO Number — Voix, SMS, WhatsApp dans le cloud"
              className="w-full max-w-md mx-auto lg:mx-0"
            />
          </div>

          {/* Right — content */}
          <div>
            <span className="text-xs font-semibold tracking-widest uppercase text-brand-blue">
              Numéro Professionnel
            </span>

            <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold tracking-tight text-brand-navy">
              {PRO_NUMBER.heading}
            </h2>

            <p className="mt-2 text-base text-neutral-500 font-medium">
              {PRO_NUMBER.subheading}
            </p>

            <p className="mt-5 text-[15px] leading-relaxed text-neutral-600">
              {PRO_NUMBER.text}
            </p>

            {/* Channels */}
            <div className="mt-8 flex items-center gap-6">
              {PRO_NUMBER.channels.map((ch) => (
                <span key={ch} className="text-sm font-semibold text-brand-navy">
                  {ch}
                </span>
              ))}
            </div>

            {/* Idéal pour */}
            {PRO_NUMBER.idealFor && (
              <div className="mt-8 border-t border-neutral-100 pt-6">
                <span className="text-xs font-semibold tracking-widest uppercase text-neutral-400">
                  Idéal pour
                </span>
                <ul className="mt-3 space-y-2">
                  {PRO_NUMBER.idealFor.map((item, i) => (
                    <li key={i} className="text-sm text-neutral-700 flex items-baseline gap-3">
                      <span className="text-brand-orange text-xs select-none">—</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Capabilities */}
            <details className="mt-8 group">
              <summary className="text-sm font-semibold text-brand-navy cursor-pointer hover:text-brand-blue transition-colors select-none">
                Voir toutes les fonctionnalités
              </summary>
              <ul className="mt-4 space-y-2">
                {PRO_NUMBER.capabilities.map((cap, i) => (
                  <li key={i} className="text-sm text-neutral-600 flex items-baseline gap-3">
                    <span className="text-neutral-300 text-xs select-none">—</span>
                    {cap.label}
                  </li>
                ))}
              </ul>
            </details>
          </div>
        </div>
      </div>
    </section>
  );
}
