import React from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const ACCOUNTS = [
  {
    title: 'Compte SIP Trunk',
    desc: 'À interconnecter sur votre IPBX ou centre de contact pour émettre et recevoir vos appels voix simultanés sans limitation physique.',
  },
  {
    title: 'Compte API SMS',
    desc: 'Intégration directe via API HTTP ou SMPP pour l’envoi de notifications (SMS-MT) et la réception de messages clients (SMS-MO).',
  },
  {
    title: 'Portail Client Selfcare',
    desc: 'Accès web sécurisé pour piloter vos consommations, consulter les rapports d’appels en temps réel et gérer vos soldes de crédits.',
  },
];

const FEATURES = [
  'Intégration aisée sur tout type de plateforme VoIP, SMS & IT/CRM incluant WhatsApp et Telegram, à travers tous les réseaux Internet',
  'Accessible à tous les abonnés mobiles via leurs réseaux GSM ou Internet',
  'Supporte plusieurs appels simultanés (entrants et sortants) : plus aucun appel perdu',
  'Améliore l\'expérience utilisateur pour vos clients et vos collaborateurs',
  'Appels et SMS gratuits et illimités entre les numéros GTS du réseau ProCom',
  'Renforce l\'identité numérique officielle et certifiée de votre organisation',
  'Remplace définitivement les numéros GSM personnels non autorisés et les lignes filaires cuivre obsolètes',
  'Réduction de plus de 50% du coût des communications vers tous les opérateurs locaux',
  'Accès Web transparent aux rapports d’audience, CDR et statistiques de trafic 24/7',
];

export default function NumeroProPage({ onContact, onNavigateHome }) {
  const [heroRef] = useScrollAnimation();
  const [accountsRef] = useScrollAnimation();
  const [featuresRef] = useScrollAnimation();

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
            <span className="text-brand-navy font-semibold">Numéro PRO</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7 space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-brand-navy leading-tight">
                Renforcez l’identité numérique de votre entreprise.
              </h1>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-normal max-w-2xl">
                Fort de son partenariat stratégique avec l’opérateur historique <strong>CAMTEL</strong>, GTS-Infotel attribue aux entreprises des numéros fixes virtuels dédiés à la convergence Voix, SMS et plateformes collaboratives.
              </p>
              
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={onContact}
                  className="btn-accent text-base py-3 px-6"
                >
                  Commander un Numéro PRO
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

            <div className="lg:col-span-5">
              <div className="clean-card p-6 sm:p-8 flex items-center justify-center">
                <img
                  src="/assets/numero-pro/image-numero.png"
                  alt="Numéro Fixe Virtuel GTS"
                  className="max-h-72 w-auto object-contain"
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. ACCOUNTS SECTION */}
      <section className="py-24 md:py-32 bg-white border-b border-gray-200" ref={accountsRef}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy leading-tight mb-4">
              Une infrastructure complète mise à votre disposition
            </h2>
            <p className="text-base text-gray-600 font-normal">
              Chaque numéro professionnel inclut l'accès à 3 comptes techniques indépendants pour s'adapter à votre organisation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {ACCOUNTS.map((acc, idx) => (
              <div key={idx} className="clean-card p-8 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-brand-navy mb-3">
                    {acc.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed font-normal">
                    {acc.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. FEATURES SECTION */}
      <section className="py-24 md:py-32 bg-white border-b border-gray-200" ref={featuresRef}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy leading-tight mb-4">
              Pourquoi adopter les numéros GTS-Infotel ?
            </h2>
            <p className="text-base text-gray-600 font-normal">
              Les bénéfices immédiats pour votre efficacité commerciale et la relation avec vos abonnés.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((feat, idx) => (
              <div key={idx} className="clean-card p-6 flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-brand-orange shrink-0 mt-2" />
                <p className="text-sm text-gray-800 font-normal leading-relaxed">
                  {feat}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CTA SECTION sur fond blanc pur (AUCUN DÉGRADÉ) */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-navy">
            Attribuez un Numéro PRO à votre entreprise dès aujourd'hui.
          </h2>
          <p className="text-gray-600 text-base max-w-2xl mx-auto mb-8 leading-relaxed font-normal">
            Nos conseillers techniques configurent votre compte SIP et vos accès API en moins de 24 heures.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onContact}
              className="btn-accent text-base py-3 px-8"
            >
              Commander maintenant
              <ArrowRight className="w-4 h-4 ml-1 text-white" />
            </button>
            <button
              onClick={onNavigateHome}
              className="btn-secondary text-base py-3 px-6"
            >
              Consulter d'autres solutions
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
