import React from 'react';
import { Building2, MessageSquare, GitMerge } from 'lucide-react';
import { BENEFITS } from '../data/telecomData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const iconMap = [Building2, MessageSquare, GitMerge];

const Benefits = () => {
  const [headerRef, headerVisible] = useScrollAnimation();
  const [cardsRef, cardsVisible] = useScrollAnimation();

  return (
    <section className="py-24 md:py-32 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6">

        {/* En-tete */}
        <div
          ref={headerRef}
          className={`max-w-3xl mb-16 reveal ${headerVisible ? 'is-visible' : ''}`}
        >
          <span className={`orange-bar mb-4 ${headerVisible ? 'is-visible' : ''}`} />
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy leading-tight mb-4 mt-4">
            {BENEFITS.heading}
          </h2>
          <p className="text-base text-gray-600 leading-relaxed font-normal">
            Une identite telephonique virtuelle perenne pour identifier, professionnaliser et centraliser vos communications d'entreprise.
          </p>
        </div>

        {/* Cartes en stagger */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {BENEFITS.items.map((item, index) => {
            const Icon = iconMap[index] || Building2;
            const staggerClass = `stagger-${index + 1}`;

            return (
              <div
                key={index}
                className={`clean-card p-8 flex flex-col justify-between group reveal ${staggerClass} ${cardsVisible ? 'is-visible' : ''}`}
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center mb-6 text-gray-700 group-hover:bg-brand-navy group-hover:text-white transition-colors duration-300">
                    <Icon className="w-5 h-5 text-current" />
                  </div>

                  <h3 className="text-xl font-bold text-brand-navy mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed font-normal">
                    {item.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
