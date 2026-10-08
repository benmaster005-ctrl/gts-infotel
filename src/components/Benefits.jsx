import { BENEFITS } from '../data/telecomData';

/**
 * Benefits — three columns of text, no cards.
 * Uses a strong heading and simple paragraph columns separated by layout alone.
 * No icons, no badges, no card wrappers, no shadows.
 */
export default function Benefits() {
  return (
    <section className="py-24 border-b border-neutral-100">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section heading — left-aligned, strong */}
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-brand-navy max-w-lg">
          {BENEFITS.heading}
        </h2>

        {/* Three text columns — no cards, just typography and spacing */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-10">
          {BENEFITS.items.map((item, i) => (
            <div key={i}>
              {/* Small ordinal accent */}
              <span className="text-xs font-semibold text-brand-orange tracking-wider uppercase">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-2 text-lg font-bold text-neutral-900">
                {item.title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-neutral-600">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
