import React from 'react';
import { ArrowRight, ChevronRight, Check } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const CORE_GATEWAYS = [
  {
    name: 'Voice Number Gateway',
    desc: 'Interconnexion directe de classe opérateur avec CAMTEL et tous les réseaux GSM locaux pour acheminer les flux Voix HD vers les comptes SIP TRUNK associés aux numéros PRO, sans transiter par des serveurs offshore.',
  },
  {
    name: 'SMS Number Gateway',
    desc: 'Passerelle A2P haute disponibilité pour flux transactionnels et OTP fiabilisés (API HTTP / SMPP). Élimine les routes grises et garantit des taux de livraison optimaux avec filtrage anti-abus.',
  },
  {
    name: 'Customer Extranet & BI Analytics',
    desc: 'Portail web unifié de pilotage offrant la supervision en direct des flux, le détail des CDR, les statistiques d’audience Voix & SMS, la gestion des soldes et la traçabilité complète des transactions.',
  },
];

const CLOUD_PLATFORMS = [
  {
    title: 'Cloud PBX & Communications Unifiées (CIRPACK)',
    desc: 'Standard virtuel fixe-mobile, collaboration d’équipe (chat, visioconférence) et centre de contact omnicanal sans investissement matériel (zéro CAPEX), propulsé par le cœur de réseau CIRPACK.',
  },
  {
    title: 'Mobinawa Mobile App (Alternative Souveraine)',
    desc: 'Première application panafricaine de communication professionnelle lancée à PROMOTE 2026. Permet aux professionnels d’échanger sous leur Nom/Organisation avec un Numéro PRO au tarif local.',
  },
  {
    title: 'WhatsApp Business API Officiel',
    desc: 'Passerelle officielle pour connecter votre identifiant d’entreprise aux flux de messagerie conversationnelle, avec routage intelligent, chatbots automatisés et ticketing.',
  },
  {
    title: 'WebSMS & Campagnes A2P Structurées',
    desc: 'Plateforme de diffusion de SMS transactionnels, alertes et notifications en masse (BulkSMS), sécurisées par des identifiants d’émetteurs vérifiés conformes au cadre réglementaire.',
  },
  {
    title: 'CRM & Helpdesk Omnicanal',
    desc: 'Remontée automatique de fiches clients et contextualisation des échanges (Voix, SMS, WhatsApp, Webform, Email), transformant les interactions en données souveraines prêtes pour l’IA.',
  },
  {
    title: 'ProMoney & Codes Marchands USSD',
    desc: 'Utilisation du Numéro PRO comme code marchand unique pour le paiement mobile par USSD, assurant la traçabilité des transactions et l’inclusion financière des commerçants.',
  },
];

const ECOSYSTEM_STAKEHOLDERS = [
  {
    role: 'Entreprises & Organisations',
    benefit: 'Identité téléphonique officielle, sécurisation des communications des salariés et centralisation des données stratégiques pour alimenter leur IA d’entreprise.',
  },
  {
    role: 'Consommateurs & Citoyens',
    benefit: 'Joignabilité directe et certifiée des entreprises et administrations, éradication de la fraude sur les comptes Mobile Money et confiance numérique retrouvée.',
  },
  {
    role: 'Opérateur Historique CAMTEL',
    benefit: 'Synergie avec le Data Center souverain de Zamengoé (Tier III) et valorisation des ressources de numérotation pour devenir le hub national d’interconnexion multicanale.',
  },
  {
    role: 'Écosystème Régional & ZLECAf',
    benefit: 'Réseau unifié de téléphonie professionnelle permettant aux entreprises de commercer à tarif local par-delà les frontières nationales dans la CEMAC et sur le continent.',
  },
  {
    role: 'Administrations, Régulateur & Fisc',
    benefit: 'Référentiel national d’identité téléphonique des personnes morales, servant d’attribut KYC unique vérifiable par API pour sécuriser l’ensemble des registres sectoriels.',
  },
  {
    role: 'Diaspora dans le monde',
    benefit: 'Attribution d’un Numéro PRO local via l’application Mobinawa pour piloter des activités et joindre collaborateurs et clients en Afrique au tarif local.',
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
              L'infrastructure télécom souveraine pour les organisations en Afrique.
            </h1>
            
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-normal max-w-3xl">
              ProCom est un réseau panafricain de type FVNO / Enterprise MVNO développé par GTS Africa, adossé à l'opérateur historique <strong>CAMTEL</strong> et propulsé par la technologie Softswitch & IMS de <strong>CIRPACK</strong>. Il interconnecte l'ensemble des réseaux de télécommunication (Internet, Voix, SMS, USSD, WhatsApp) pour attribuer des Numéros PRO vérifiables, centraliser les données d'échanges sur le sol africain et catalyser l'intégration économique (CEMAC, ZLECAf).
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
