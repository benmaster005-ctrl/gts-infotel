import { PROCESS } from '../data/telecomData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { ArrowRight, Check } from 'lucide-react';

export default function OnboardingSteps({ onContact }) {
  const [containerRef] = useScrollAnimation();

  return (
    <section className="py-24 md:py-32 bg-white border-b border-gray-200" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6">
        
        {/* En-tête */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy leading-tight mb-4">
            {PROCESS.heading}
          </h2>
          <p className="text-base text-gray-600 font-normal leading-relaxed">
            Un processus d'activation en 3 étapes simples, sans rupture d'activité et sans investissement matériel lourd.
          </p>
        </div>

        {/* 3 étapes épurées */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {PROCESS.steps.map((step, index) => (
            <div 
              key={step.num || index} 
              className="clean-card p-8 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center font-bold text-sm text-brand-navy mb-6">
                  {index + 1}
                </div>

                <h3 className="text-xl font-bold text-brand-navy mb-3">
                  {step.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed font-normal">
                  {step.text}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-gray-100 flex items-center gap-2 text-xs text-gray-600">
                <Check className="w-4 h-4 text-brand-orange" />
                <span>Zéro coupure de service</span>
              </div>
            </div>
          ))}
        </div>

        {/* Action CTA sur fond blanc pur */}
        <div className="flex flex-col sm:flex-row items-center justify-between p-8 rounded-xl border border-gray-200 bg-white gap-6">
          <div>
            <h4 className="text-lg font-bold text-brand-navy mb-1">
              Vous avez déjà des numéros ou une flotte existante ?
            </h4>
            <p className="text-sm text-gray-600">
              Nos ingénieurs organisent la transition et l'interconnexion avec vos équipes.
            </p>
          </div>
          <button
            onClick={onContact}
            className="btn-accent whitespace-nowrap text-sm shrink-0"
          >
            Demander un audit gratuit
            <ArrowRight className="w-4 h-4 ml-1 text-white" />
          </button>
        </div>

      </div>
    </section>
  );
}
