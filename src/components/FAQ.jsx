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
    <section ref={sectionRef} className="py-24 md:py-32 bg-white border-b border-gray-200">
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

        {/* Accordéon sur fond blanc pur */}
        <div className="space-y-3">
          {FAQ_ITEMS?.map((item, index) => {
            const isOpen = openIndex === index;
            
            return (
              <div 
                key={index}
                className="rounded-lg border border-gray-200 bg-white overflow-hidden"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left focus:outline-none hover:bg-gray-50 transition-colors"
                >
                  <span className="text-base font-semibold text-brand-navy">
                    {item.q}
                  </span>
                  <ChevronDown className={`w-5 h-5 text-gray-600 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isOpen && (
                  <div className="px-6 pb-6 pt-1 border-t border-gray-100 text-gray-600 text-sm leading-relaxed font-normal">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FAQ;
