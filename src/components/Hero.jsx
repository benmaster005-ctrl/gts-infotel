import { HERO } from '../data/telecomData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { ArrowRight, Play } from 'lucide-react';

export default function Hero({ onContact }) {
  const [trustRef] = useScrollAnimation();

  return (
    <section className="pt-36 pb-20 md:pt-44 md:pb-28 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* En-tête Hero sans dégradé avec grand espace blanc */}
        <div className="max-w-4xl animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-brand-navy leading-tight mb-8">
            {HERO.heading}
          </h1>

          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl font-normal mb-10">
            {HERO.lead}
          </p>

          {/* Boutons d'action */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-16">
            <button
              onClick={onContact}
              className="btn-accent text-base py-3 px-6"
            >
              {HERO.cta}
              <ArrowRight className="w-4 h-4 ml-1 text-white" />
            </button>
            <a
              href="#solutions"
              className="btn-secondary text-base py-3 px-6"
            >
              <Play className="w-4 h-4 mr-1 text-gray-700 fill-gray-700" />
              {HERO.ctaSecondary}
            </a>
          </div>
        </div>

        {/* Ligne de réassurance épurée sans nommages parasites */}
        <div ref={trustRef} className="pt-10 border-t border-gray-100 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="clean-card p-4">
            <span className="text-sm font-semibold text-brand-navy block mb-0.5">Opérateur Agréé</span>
            <span className="text-xs text-gray-600">Licence ART & Décret 2022</span>
          </div>

          <div className="clean-card p-4">
            <span className="text-sm font-semibold text-brand-navy block mb-0.5">Partenaire CAMTEL</span>
            <span className="text-xs text-gray-600">Interconnexion souveraine</span>
          </div>

          <div className="clean-card p-4">
            <span className="text-sm font-semibold text-brand-navy block mb-0.5">Réseau ProCom</span>
            <span className="text-xs text-gray-600">Voix, SMS, WhatsApp & USSD</span>
          </div>

          <div className="clean-card p-4">
            <span className="text-sm font-semibold text-brand-navy block mb-0.5">Support & Proximité</span>
            <span className="text-xs text-gray-600">Équipes à Douala & Yaoundé</span>
          </div>
        </div>

      </div>
    </section>
  );
}
