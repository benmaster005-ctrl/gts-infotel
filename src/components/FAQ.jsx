import { useState } from 'react';
import { FAQ_ITEMS } from '../data/telecomData';

/**
 * FAQ — simple accordion. No search bar (unnecessary for 6 items),
 * no cards around each item, no icons. Just text that opens and closes.
 */
export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section id="faq" className="py-24 bg-neutral-50">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-brand-navy">
          Questions fréquentes
        </h2>

        <div className="mt-12 divide-y divide-neutral-200">
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = openIdx === i;
            return (
              <div key={i}>
                <button
                  onClick={() => setOpenIdx(isOpen ? -1 : i)}
                  className="w-full text-left py-5 flex items-start justify-between gap-4"
                  aria-expanded={isOpen}
                >
                  <span className={`text-[15px] font-semibold transition-colors ${isOpen ? 'text-brand-navy' : 'text-neutral-800'}`}>
                    {item.q}
                  </span>
                  <span className="text-neutral-400 text-xl leading-none shrink-0 mt-0.5 select-none">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>
                {isOpen && (
                  <div className="pb-5 pr-12">
                    <p className="text-sm leading-relaxed text-neutral-600">
                      {item.a}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
