import React from 'react';
import { PARTNERS } from '../data/telecomData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Partners = () => {
  const [sectionRef] = useScrollAnimation();

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* En-tête */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy leading-tight mb-4">
            Nos Partenaires Stratégiques
          </h2>
          <p className="text-base text-gray-600 font-normal leading-relaxed">
            Une synergie d'opérateurs nationaux et d'éditeurs télécoms certifiés pour garantir la qualité de service.
          </p>
        </div>

        {/* Grille Partenaires : logos visibles sans textes superflus */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PARTNERS?.map((partner, index) => (
            <div
              key={index}
              className="clean-card p-6 flex flex-col justify-between"
            >
              <div>
                <div className="h-20 flex items-center justify-center p-3 mb-6 bg-white border border-gray-100 rounded-lg">
                  {partner.logo ? (
                    <img 
                      src={partner.logo} 
                      alt={partner.name} 
                      className="max-h-12 max-w-[80%] object-contain" 
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                  ) : null}
                </div>

                <h3 className="text-base font-bold text-brand-navy mb-2">{partner.name}</h3>
                <p className="text-sm text-gray-600 leading-relaxed font-normal">
                  {partner.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Partners;
