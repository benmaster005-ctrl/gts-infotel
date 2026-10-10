import React from 'react';
import { ArrowRight, ChevronRight, Check } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const CORE_GATEWAYS = [
  {
    name: 'Voice Number Gateway',
    desc: 'Interconnexion directe entre tous les réseaux GSM locaux et les comptes Voix (SIP TRUNK) associés aux numéros PRO attribués aux clients.',
  },
  {
    name: 'SMS Number Gateway',
    desc: 'Interconnexion haute disponibilité entre tous les réseaux GSM locaux et les comptes SMS (API HTTP ou SMPP) associés aux numéros PRO.',
  },
  {
    name: 'Customer Extranet',
    desc: 'Portail web unifié pour la visualisation par chaque client de ses données de reporting, statistiques de trafic Voix & SMS, et solde des crédits.',
  },
];

const CLOUD_PLATFORMS = [
  {
    title: 'Cloud PBX & Communication unifiée',
    desc: 'Standard de téléphonie fixe-mobile virtuel, collaboration (messagerie instantanée & visioconférence), centre de contact omnicanal (Voix, Web Chat, WhatsApp) avec intégration CRM/IT.',
  },
  {
    title: 'WebSMS & Campagnes',
    desc: 'Plateforme de gestion de campagnes marketing (BulkSMS), Chat SMS interactif et fourniture de services SMS (Code-Gagnant, Vote, Quiz, alertes transactionnelles).',
  },
  {
    title: 'CRM / Helpdesk Omnicanal',
    desc: 'Remontée automatique de fiche client lors de la réception d’appels et chat multicanal (Webform, WebChat, Email, SMS, Telegram) avec gestion de ticketing.',
  },
  {
    title: 'WhatsApp Business API',
    desc: 'Plateforme de gestion de campagnes promotionnelles et chat WhatsApp automatisé pour le service client avec routage et ticketing.',
  },
  {
    title: 'Mobinawa Mobile App',
    desc: 'Application mobile de standard virtuel en libre-service pour les professionnels locaux et la diaspora, pour émettre et recevoir des appels à des tarifs locaux.',
  },
];

const ECOSYSTEM_STAKEHOLDERS = [
  {
    role: 'Entreprises de toutes tailles',
    benefit: 'Obtenir facilement un numéro PRO d’identification pour offrir des services numériques (Voix, SMS, WhatsApp, Web, paiement mobile) sur tous les réseaux.',
  },
  {
    role: 'Consommateurs',
    benefit: 'Expérience client optimale avec possibilité d’enregistrer le numéro PRO identifiant la personne morale, garantissant authenticité et confiance.',
  },
  {
    role: 'Revendeurs (ISP & IT)',
    benefit: 'Permettre aux fournisseurs d’accès Internet et prestataires IT de devenir CSP (Communication Service Providers) pour enrichir leurs offres d’entreprise.',
  },
  {
    role: 'Acteurs de l’écosystème',
    benefit: 'Accès sécurisé via Web/API à la base de données des numéros PRO attribués aux personnes morales (Régulateur ART, banques, fisc, fintechs).',
  },
  {
    role: 'Diaspora dans le monde',
    benefit: 'Obtention d’un numéro PRO local via l’application Mobinawa pour joindre des collaborateurs et clients locaux à des tarifs nationaux.',
  },
];

export default function ProcomNetworkPage({ onContact, onNavigateHome }) {
  const [heroRef] = useScrollAnimation();
  const [regulatoryRef] = useScrollAnimation();
  const [gatewaysRef] = useScrollAnimation();
  const [benefitsRef] = useScrollAnimation();

  return (
    <div className="bg-white">
      
      {/* 1. HERO SECTION */}
      <section className="pt-36 pb-20 md:pt-44 md:pb-28 bg-white border-b border-gray-200" ref={heroRef}>
        <div className="max-w-7xl mx-auto px-6">
          
          <nav className="inline-flex items-center gap-2 text-xs font-medium text-gray-500 mb-8">
            <button onClick={onNavigateHome} className="hover:text-brand-navy">Accueil</button>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <span>Infrastructure</span>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <span className="text-brand-navy font-semibold">Réseau ProCom</span>
          </nav>

          <div className="max-w-4xl space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-brand-navy leading-tight">
              L'infrastructure télécom cloud pour les organisations en Afrique.
            </h1>
            
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-normal max-w-3xl">
              ProCom est une infrastructure cloud de classe opérateur interconnectée avec l'opérateur historique national <strong>CAMTEL</strong>. Elle permet aux organisations d'attribuer et d'exploiter des numéros fixes virtuels multi-services (Voix, SMS, WhatsApp) sur tous les réseaux de télécommunications.
            </p>
            
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onContact}
                className="btn-accent text-base py-3 px-6"
              >
                Raccorder votre infrastructure
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

        </div>
      </section>

      {/* 2. ARCHITECTURE SCHEMA SECTION */}
      <section className="py-24 md:py-32 bg-white border-b border-gray-200" ref={regulatoryRef}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy leading-tight mb-4">
              Architecture Haute Disponibilité
            </h2>
            <p className="text-base text-gray-600 font-normal">
              Liaison directe avec le réseau commuté public et routage intelligent vers les applications d'entreprise.
            </p>
          </div>

          <div className="clean-card p-6 sm:p-10">
            <img
              src="/assets/procom-architecture-full.png"
              alt="Architecture Réseau ProCom"
              className="w-full h-auto object-contain mb-8"
              onError={(e) => {
                e.target.src = '/assets/procom-architecture.jpg';
              }}
            />

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-gray-100 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-brand-orange" />
                <span>Redondance multi-sites</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-brand-orange" />
                <span>Protocoles SIP / HTTP REST / SMPP</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-brand-orange" />
                <span>Supervision réseau 24/7/365</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. GATEWAYS */}
      <section className="py-24 md:py-32 bg-white border-b border-gray-200" ref={gatewaysRef}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy leading-tight mb-4">
              Les 3 passerelles fondamentales du réseau
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {CORE_GATEWAYS.map((gw, idx) => (
              <div key={idx} className="clean-card p-8 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-brand-navy mb-3">
                    {gw.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed font-normal">
                    {gw.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PLATFORMS & ECOSYSTEM */}
      <section className="py-24 md:py-32 bg-white border-b border-gray-200" ref={benefitsRef}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy leading-tight mb-4">
              Plateformes applicatives connectées à ProCom
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {CLOUD_PLATFORMS.map((plat, idx) => (
              <div key={idx} className="clean-card p-6">
                <h3 className="text-lg font-bold text-brand-navy mb-2">{plat.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed font-normal">{plat.desc}</p>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mb-12">
            <h3 className="text-2xl font-bold text-brand-navy mb-4">
              Bénéfices pour les parties prenantes
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ECOSYSTEM_STAKEHOLDERS.map((stake, idx) => (
              <div key={idx} className="clean-card p-6">
                <span className="text-sm font-bold text-brand-navy block mb-2">{stake.role}</span>
                <p className="text-sm text-gray-600 leading-relaxed font-normal">{stake.benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA SECTION sur fond blanc pur (AUCUN DÉGRADÉ) */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-navy">
            Raccordez votre entreprise au réseau ProCom.
          </h2>
          <p className="text-gray-600 text-base max-w-2xl mx-auto mb-8 leading-relaxed font-normal">
            Nos équipes techniques sont prêtes à déployer votre solution ou à intégrer votre plateforme via nos API.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onContact}
              className="btn-accent text-base py-3 px-8"
            >
              Initier une interconnexion
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
