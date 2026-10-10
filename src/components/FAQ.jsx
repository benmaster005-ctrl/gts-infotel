import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/telecomData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  const [sectionRef] = useScrollAnimation();
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" ref={sectionRef} className="py-24 md:py-32 bg-white border-b border-gray-200 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* En-tête */}
        <div className="max-w-2xl mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy leading-tight mb-4">
            Questions Fréquemment Posées
          </h2>
          <p className="text-base text-gray-600 font-normal">
            Tout comprendre sur l'attribution des numéros virtuels et le fonctionnement du réseau ProCom.
          </p>
        </div>

        {/* Accordéon avec transition fluide */}
        <div className="space-y-3">
          {FAQ_ITEMS?.map((item, index) => {
            const isOpen = openIndex === index;
            
            return (
              <div 
                key={index}
                className="rounded-xl border border-gray-200 bg-white overflow-hidden transition-colors hover:border-gray-300"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left focus:outline-none hover:bg-gray-50/70 transition-colors"
                >
                  <span className={`text-base font-semibold transition-colors ${isOpen ? 'text-brand-orange' : 'text-brand-navy'}`}>
                    {item.q}
                  </span>
                  <ChevronDown 
                    className={`w-5 h-5 text-gray-500 shrink-0 transition-transform duration-300 ease-in-out ${
                      isOpen ? 'rotate-180 text-brand-orange' : ''
                    }`} 
                  />
                </button>
                
                {/* Conteneur animé en CSS Grid */}
                <div 
                  className={`grid transition-all duration-300 ease-in-out ${
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
