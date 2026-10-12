import React from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const ACCOUNTS = [
  {
    title: 'Compte SIP Trunk Haute Capacité',
    desc: 'Interconnexion directe de classe opérateur pour votre IPBX physique ou Cloud (Mobinawa-Business, 3CX, etc.). Émettez et recevez vos appels Voix HD simultanés sans saturation ni équipement filaire.',
  },
  {
    title: 'Compte API SMS A2P Certifié',
    desc: 'Passerelle HTTP REST ou SMPP haute disponibilité pour l’envoi de notifications critiques, alertes et codes OTP fiabilisés (SMS-MT) ainsi que la réception client (SMS-MO), sans passer par les routes grises.',
  },
  {
    title: 'Compte WhatsApp Business & Extranet',
    desc: 'Activation officielle de votre Numéro PRO sur WhatsApp Business API et accès au portail web Selfcare pour piloter vos consommations, consulter les CDR en temps réel et superviser vos flux 24/7.',
  },
];

const FEATURES = [
  'Identifiant officiel et attribut KYC de référence faisant dialoguer le RCCM, l’administration fiscale, les banques et les fintechs',
  'Conformité légale stricte avec le décret présidentiel n°2022/10902 sur les ressources en numérotation et les services A2P',
  'Rempart contre l’usurpation d’identité de marque et les fraudes sur les comptes Mobile Money générées par les SIM anonymes',
  'Fin de la dépendance aux numéros mobiles personnels des employés : stricte conformité avec la loi sur la protection des données',
  'Interconnexion directe avec CAMTEL garantissant un acheminement souverain et sans coupure vers tous les réseaux GSM et fixes',
  'Convergence multicanale sur un identifiant unique : Voix HD, SMS A2P transactionnel, WhatsApp Business et codes marchands USSD',
  'Gestion d’appels simultanés illimités entrants et sortants : ne perdez plus aucun appel de prospect ou client',
  'Communications voix et SMS gratuites et illimitées entre tous les numéros PRO connectés au réseau ProCom',
  'Centralisation et rétention locale des données de communication professionnelle, préparant le déploiement d’une IA africaine souveraine',
  'Accès Web transparent et continu aux rapports d’audience, statistiques de trafic, SLA et traçabilité 24/7',
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
                L’identité téléphonique et numérique officielle des personnes morales.
              </h1>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-normal max-w-2xl">
                Conforme au décret n°2022/10902 et fort de son interconnexion stratégique avec l'opérateur historique <strong>CAMTEL</strong>, GTS-Infotel dote les organisations d'un <strong>Numéro PRO</strong> (fixe virtuel multicanal). Cet identifiant universel et souverain certifie votre entreprise, unifie vos flux Voix, SMS & WhatsApp Business, et protège vos données stratégiques.
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
