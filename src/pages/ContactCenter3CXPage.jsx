import React from 'react';
import { ArrowRight, ChevronRight, CheckCircle2 } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const ADVANTAGES = [
  {
    title: 'Simplicité & Zéro CAPEX',
    desc: 'Déploiement Cloud rapide en mode managé sans investissement matériel lourd, avec un modèle économique 100% OPEX prévisible.',
  },
  {
    title: 'Efficacité & Routage Métier',
    desc: 'Scénarios SVI dynamiques pour router intelligemment vos flux d’appels selon les plages horaires, compétences et langues des agents.',
  },
  {
    title: 'Sécurité & Routes Directes',
    desc: 'Acheminement certifié sur le réseau ProCom sans passer par des agrégateurs douteux ou des routes grises vulnérables à la fraude.',
  },
  {
    title: 'Flexibilité Omnicanale',
    desc: 'Évolutivité instantanée du nombre d’agents et bascule fluide entre Voix HD, WhatsApp Business, SMS et Live Chat sans rupture.',
  },
];

const SUPERVISOR_FEATURES = [
  'Gestion intelligente des files d’attente, priorisation des flux et affectation dynamique des agents',
  'Écoute discrète, chuchotement et intervention en direct lors des appels sensibles ou transactions critiques',
  'Wallboard & Switchboard temps réel : monitoring dynamique de la charge, des SLA et des temps de réponse',
  'Rapports statistiques avancés, enregistrement des conversations et export des métriques de productivité 24/7',
];

const AGENT_FEATURES = [
  'Interface omnicanale unifiée : Téléphonie Voix HD, WhatsApp Business vérifié, Live Chat et SMS A2P',
  'Identité d’émetteur officielle : émission d’appels et messages sous le Numéro PRO certifié de l’organisation',
  'Remontée automatique de fiches clients contextuelles lors des appels pour personnaliser la prise en charge',
  'Transferts d’échanges fluides entre collaborateurs avec transmission intégrale de l’historique conversationnel',
  'Partage sécurisé de pièces jointes et documents directement dans la session de conversation',
  'Bascule instantanée en un clic d’une session chat vers un appel vocal sans interruption de service',
];

export default function ContactCenter3CXPage({ onContact, onNavigateHome }) {
  const [heroRef] = useScrollAnimation();
  const [advantagesRef] = useScrollAnimation();
  const [toolsRef] = useScrollAnimation();

  return (
    <div className="bg-white">
      
      {/* 1. HERO SECTION */}
      <section className="pt-36 pb-20 md:pt-44 md:pb-28 bg-white border-b border-gray-200" ref={heroRef}>
        <div className="max-w-7xl mx-auto px-6">
          
          <nav className="inline-flex items-center gap-2 text-xs font-medium text-gray-500 mb-8">
            <button onClick={onNavigateHome} className="hover:text-brand-navy">Accueil</button>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <span>Solutions</span>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <span className="text-brand-navy font-semibold">3CX-CallCenter</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7 space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-brand-navy leading-tight">
                Le centre de contact omnicanal pour équipes modernes.
              </h1>
              
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-normal max-w-2xl">
                Améliorez la performance de votre support et de vos téléconseillers grâce à la plateforme 3CX interconnectée au réseau ProCom de GTS-Infotel. Terminaison Voix HD directe, fin des routes grises non sécurisées, SVI intelligent, messagerie WhatsApp Business certifiée et Live Chat unifiés avec votre Numéro PRO officiel.
              </p>
              
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={onContact}
                  className="btn-accent text-base py-3 px-6"
                >
                  Déployer 3CX pour votre équipe
                  <ArrowRight className="w-4 h-4 ml-1 text-white" />
                </button>
                <button
                  onClick={onNavigateHome}
                  className="btn-secondary text-base py-3 px-6"
                >
                  Consulter les autres solutions
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="clean-card p-6 sm:p-8 flex items-center justify-center">
                <img
                  src="/assets/3cx-partner.jpg"
                  alt="Partenaire Officiel 3CX"
                  className="w-full h-auto object-cover rounded-lg"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. ADVANTAGES SECTION */}
      <section className="py-24 md:py-32 bg-white border-b border-gray-200" ref={advantagesRef}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy leading-tight mb-4">
              Conçu pour simplifier votre relation client
            </h2>
            <p className="text-base text-gray-600 font-normal">
              4 piliers technologiques pour transformer la productivité de vos équipes d'accueil et de support.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ADVANTAGES.map((adv, idx) => (
              <div key={idx} className="clean-card p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-brand-navy mb-2">
                    {adv.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed font-normal">
                    {adv.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. TOOLS SECTION (SUPERVISEUR / AGENT) */}
      <section className="py-24 md:py-32 bg-white border-b border-gray-200" ref={toolsRef}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy leading-tight mb-4">
              Une suite complète pour superviseurs et téléconseillers
            </h2>
            <p className="text-base text-gray-600 font-normal">
              Des fonctionnalités avancées pensées pour chaque profil de votre centre de contacts.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            <div className="clean-card p-8">
              <h3 className="text-xl font-bold text-brand-navy mb-6 pb-4 border-b border-gray-100">
                Espace Superviseur & Manager
              </h3>
              <ul className="space-y-4">
                {SUPERVISOR_FEATURES.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700 leading-relaxed font-normal">{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="clean-card p-8">
              <h3 className="text-xl font-bold text-brand-navy mb-6 pb-4 border-b border-gray-100">
                Espace Agent & Téléconseiller
              </h3>
              <ul className="space-y-4">
                {AGENT_FEATURES.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700 leading-relaxed font-normal">{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* 4. CTA SECTION sur fond blanc pur (AUCUN DÉGRADÉ) */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-navy">
            Modernisez votre centre de contact dès maintenant.
          </h2>
          <p className="text-gray-600 text-base max-w-2xl mx-auto mb-8 leading-relaxed font-normal">
            Nos spécialistes certifiés 3CX vous accompagnent dans le dimensionnement, l'installation et la formation de vos agents.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onContact}
              className="btn-accent text-base py-3 px-8"
            >
              Demander une démonstration 3CX
              <ArrowRight className="w-4 h-4 ml-1 text-white" />
            </button>
            <button
              onClick={onNavigateHome}
              className="btn-secondary text-base py-3 px-6"
            >
              Retour à l'accueil
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
