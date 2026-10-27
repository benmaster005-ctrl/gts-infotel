import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/telecomData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  const [headerRef, headerVisible] = useScrollAnimation();
  const [listRef, listVisible] = useScrollAnimation();
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 md:py-32 bg-white border-b border-gray-200 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-6">

        {/* En-tete */}
        <div
          ref={headerRef}
          className={`max-w-2xl mb-16 reveal ${headerVisible ? 'is-visible' : ''}`}
        >
          <span className={`orange-bar mb-4 ${headerVisible ? 'is-visible' : ''}`} />
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy leading-tight mb-4 mt-4">
            Questions Frequemment Posees
          </h2>
          <p className="text-base text-gray-600 font-normal">
            Tout comprendre sur l'attribution des numeros virtuels et le fonctionnement du reseau ProCom.
          </p>
        </div>

        {/* Accordeon avec transitions fluides */}
        <div
          ref={listRef}
          className="space-y-3"
        >
          {FAQ_ITEMS?.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`rounded-xl border bg-white overflow-hidden transition-all duration-300 reveal stagger-${Math.min(index + 1, 6)} ${listVisible ? 'is-visible' : ''} ${
                  isOpen ? 'border-brand-orange/30 shadow-sm' : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left focus:outline-none hover:bg-gray-50/70 transition-colors"
                >
                  <span className={`text-base font-semibold transition-colors duration-200 ${isOpen ? 'text-brand-orange' : 'text-brand-navy'}`}>
                    {item.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 shrink-0 transition-all duration-300 ease-in-out ${
                      isOpen ? 'rotate-180 text-brand-orange' : 'text-gray-400'
                    }`}
                  />
                </button>

                {/* Accordeon anime par CSS Grid */}
                <div
                  className={`grid transition-all duration-350 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-6 pt-1 border-t border-gray-100 text-gray-600 text-sm leading-relaxed font-normal">
                      {item.a}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FAQ;
