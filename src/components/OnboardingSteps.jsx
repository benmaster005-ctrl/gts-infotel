import { PROCESS } from '../data/telecomData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { ArrowRight, Check } from 'lucide-react';

export default function OnboardingSteps({ onContact }) {
  const [headerRef, headerVisible] = useScrollAnimation();
  const [stepsRef, stepsVisible] = useScrollAnimation();
  const [ctaRef, ctaVisible] = useScrollAnimation();

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
            {PROCESS.heading}
          </h2>
          <p className="text-base text-gray-600 font-normal leading-relaxed">
            Un processus d'activation en 3 etapes simples, sans rupture d'activite et sans investissement materiel lourd.
          </p>
        </div>

        {/* 3 etapes en stagger */}
        <div
          ref={stepsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12"
        >
          {PROCESS.steps.map((step, index) => (
            <div
              key={step.num || index}
              className={`clean-card p-8 flex flex-col justify-between reveal stagger-${index + 1} ${stepsVisible ? 'is-visible' : ''}`}
            >
              <div>
                <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center font-bold text-sm text-brand-navy mb-6 transition-colors duration-300 group-hover:bg-brand-orange group-hover:text-white">
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
                <span>Zero coupure de service</span>
              </div>
            </div>
          ))}
        </div>

        {/* Action CTA */}
        <div
          ref={ctaRef}
          className={`flex flex-col sm:flex-row items-center justify-between p-8 rounded-xl border border-gray-200 bg-white gap-6 reveal ${ctaVisible ? 'is-visible' : ''}`}
        >
          <div>
            <h4 className="text-lg font-bold text-brand-navy mb-1">
              Vous avez deja des numeros ou une flotte existante ?
            </h4>
            <p className="text-sm text-gray-600">
              Nos ingenieurs organisent la transition et l'interconnexion avec vos equipes.
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
