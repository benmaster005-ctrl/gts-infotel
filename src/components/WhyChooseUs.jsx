import React from 'react';
import { WHY_GTS } from '../data/telecomData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Handshake, Award, Shield, HeadphonesIcon } from 'lucide-react';

const icons = [Handshake, Award, Shield, HeadphonesIcon];

const WhyChooseUs = () => {
  const [sectionRef] = useScrollAnimation();

  return (
    <section id="pourquoi" ref={sectionRef} className="py-24 md:py-32 bg-white border-b border-gray-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* En-tête */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy leading-tight mb-4">
            {WHY_GTS.heading}
          </h2>
          <p className="text-base text-gray-600 font-normal leading-relaxed">
            {WHY_GTS.text}
          </p>
        </div>

        {/* Grille : Garanties + Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Colonne Garanties */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {WHY_GTS.guarantees?.map((guarantee, index) => {
              const Icon = icons[index % icons.length];
              return (
                <div
                  key={index}
                  className="clean-card p-6 flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-gray-700 mb-4 group-hover:bg-brand-navy group-hover:text-white transition-colors duration-200">
                      <Icon className="w-5 h-5 text-current" />
                    </div>
                    <h3 className="text-base font-bold text-brand-navy mb-2">
                      {guarantee.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed font-normal">
                      {guarantee.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Colonne Statistiques sur fond blanc pur */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {WHY_GTS.stats?.map((stat, index) => (
              <div
                key={index}
                className="p-6 rounded-xl border border-gray-200 bg-white flex flex-col justify-between"
              >
                <span className="text-3xl sm:text-4xl font-bold text-brand-navy mb-2 block">
                  {stat.value}
                </span>
                <span className="text-xs text-gray-600 uppercase tracking-wider font-medium leading-snug">
                  {stat.label}
                </span>
              </div>
            ))}
            
            {/* Statut officiel */}
            <div className="col-span-2 p-5 rounded-xl border border-gray-200 bg-white flex items-center justify-between">
              <span className="text-xs font-medium text-gray-700">
                Licence ART Cat. 1 · Décret n°2022/10902 (Fixe Virtuel A2P)
              </span>
              <span className="text-xs font-semibold text-brand-navy">Agréé & Conforme</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
