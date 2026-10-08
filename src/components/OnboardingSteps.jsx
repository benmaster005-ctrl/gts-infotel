import { PROCESS } from '../data/telecomData';

/**
 * Process steps — three numbered steps in a simple vertical list.
 * No dashboard mockup, no cards, no visual noise.
 * The numbered steps with a left border accent create structure.
 */
export default function OnboardingSteps({ onContact }) {
  return (
    <section className="py-24 border-b border-neutral-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left — heading */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-brand-navy">
              {PROCESS.heading}
            </h2>
            <p className="mt-4 text-[15px] text-neutral-500 max-w-sm">
              Un déploiement rapide et sans interruption de service.
            </p>
            <button
              onClick={onContact}
              className="mt-8 bg-brand-navy text-white text-sm font-semibold px-7 py-3.5 hover:bg-brand-navy/90 transition-colors"
            >
              Demander un audit gratuit
            </button>
          </div>

          {/* Right — steps */}
          <div className="space-y-10">
            {PROCESS.steps.map((step) => (
              <div key={step.num} className="flex gap-6">
                {/* Step number */}
                <span className="text-3xl font-extrabold text-neutral-200 select-none shrink-0 w-12 text-right">
                  {step.num}
                </span>
                {/* Step content */}
                <div className="border-l border-neutral-200 pl-6">
                  <h3 className="text-base font-bold text-neutral-900">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                    {step.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
