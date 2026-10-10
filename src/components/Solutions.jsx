import React from 'react';
import { SOLUTIONS } from '../data/telecomData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Check, ArrowRight, ExternalLink } from 'lucide-react';

const Solutions = ({ onContact }) => {
  const [headerRef] = useScrollAnimation();

  return (
    <section id="solutions" className="py-24 md:py-32 bg-white border-b border-gray-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* En-tête */}
        <div ref={headerRef} className="max-w-3xl mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy leading-tight mb-4">
            {SOLUTIONS?.heading || "Solutions de communication professionnelle"}
          </h2>
          <p className="text-base text-gray-600 font-normal leading-relaxed">
            {SOLUTIONS?.lead || "Des plateformes certifiées pour unifier la voix, le SMS et les messageries d'entreprise."}
          </p>
        </div>

        {/* Grille Solutions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SOLUTIONS?.items?.map((solution, index) => {
            const isExternal = solution.ctaHref && solution.ctaHref.startsWith('http');
            
            return (
              <div 
                key={solution.id || index}
                className="clean-card p-8 flex flex-col justify-between"
              >
                <div>
                  {/* Logo de la solution */}
                  <div className="h-16 flex items-center mb-6">
                    <img 
                      src={solution.image} 
                      alt={solution.title}
                      className="max-h-12 w-auto object-contain"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                  </div>

                  <h3 className="text-2xl font-bold text-brand-navy mb-2">
                    {solution.title}
                  </h3>
                  <p className="text-brand-blue font-medium text-sm mb-3">
                    {solution.tagline}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 font-normal">
                    {solution.text}
                  </p>

                  {/* Liste des fonctionnalités avec icônes orange */}
                  {solution.features && solution.features.length > 0 && (
                    <div className="space-y-2.5 pt-4 border-t border-gray-100 mb-8">
                      {solution.features.map((feature, fIndex) => (
                        <div key={fIndex} className="flex items-start gap-2.5">
                          <Check className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-700 font-normal">{feature}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Footer de carte */}
                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  {solution.ctaHref ? (
                    <a 
                      href={solution.ctaHref}
                      target={isExternal ? "_blank" : "_self"}
                      rel={isExternal ? "noopener noreferrer" : ""}
                      className="inline-flex items-center text-sm font-semibold text-brand-navy hover:text-brand-orange transition-colors"
                    >
                      {solution.cta || "En savoir plus"}
                      {isExternal ? (
                        <ExternalLink className="w-4 h-4 ml-1.5 text-gray-500" />
                      ) : (
                        <ArrowRight className="w-4 h-4 ml-1.5 text-gray-500" />
                      )}
                    </a>
                  ) : (
                    <button 
                      onClick={() => onContact && onContact(solution.id)}
                      className="inline-flex items-center text-sm font-semibold text-brand-blue hover:text-brand-orange transition-colors"
                    >
                      {solution.cta || "Demander un devis"}
                      <ArrowRight className="w-4 h-4 ml-1.5" />
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Banner sur fond blanc avec bordure nette (AUCUN DÉGRADÉ) */}
        <div className="mt-16 rounded-xl border border-gray-200 bg-white p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="max-w-xl">
            <h3 className="text-2xl font-bold text-brand-navy mb-2">
              Prêt à déployer votre solution télécom ?
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed font-normal">
              Nos ingénieurs analysent votre infrastructure existante et vous proposent le dimensionnement adapté en moins de 24h.
            </p>
          </div>
          
          <button 
            onClick={() => onContact && onContact()}
            className="btn-accent text-sm py-3 px-6 whitespace-nowrap shrink-0"
          >
            Parler à un expert GTS
            <ArrowRight className="w-4 h-4 ml-1 text-white" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default Solutions;
