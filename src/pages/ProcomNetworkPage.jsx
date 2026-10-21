import React from 'react';
import {
  ArrowRight,
  ChevronRight,
  DoorOpen,
  ShieldCheck,
  Handshake,
  FolderKey,
  Globe2,
} from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

/* ─── Data ─────────────────────────────────────────────────────────────────── */

const NUMERO_PRO_ADVANTAGES = [
  "Un numéro unique pour toute l'organisation, quels que soient ses sites",
  "Zéro CAPEX — plus besoin d'infrastructure de téléphonie traditionnelle",
  "Centralisation, sécurisation et valorisation des données de communication",
  "Gratuité des appels internes dans le réseau ProCom",
];

const NUMERO_PRO_ROLES = [
  {
    Icon: DoorOpen,
    title: "Porte d'entrée nationale",
    desc: "Jouer le rôle que jouent les opérateurs mobiles pour leurs abonnés, vers WhatsApp Business et les plateformes OTT.",
  },
  {
    Icon: ShieldCheck,
    title: "Protection des données",
    desc: "Séparer les communications professionnelles des employés de celles de l'entreprise.",
  },
  {
    Icon: Handshake,
    title: "Confiance numérique",
    desc: "Identité téléphonique vérifiable contre l'usurpation et la fraude Mobile Money.",
  },
  {
    Icon: FolderKey,
    title: "Référentiel KYC",
    desc: "Attribut commun pour les registres du commerce, fiscalité, banques, fintechs, e-commerce.",
  },
  {
    Icon: Globe2,
    title: "Interopérabilité panafricaine",
    desc: "Interconnecter les référentiels nationaux à l'échelle de la CEMAC puis du continent.",
  },
];

const CLOUD_PLATFORMS = [
  {
    title: "Mobinawa",
    desc: "Application mobile-first de communication unifiée. Alternative souveraine aux plateformes OTT pour les entreprises et leurs clients mobiles. Trois profils : Basic (annuaire gratuit), PRO (indépendants), Business (UCaaS entreprise).",
  },
  {
    title: "3CX-CallCenter",
    desc: "Centre d'appels et messagerie intégrant SVI, files d'attente, supervision des agents, enregistrement des appels et campagnes. Intégrable à Mobinawa-Business.",
  },
  {
    title: "DigiContacts",
    desc: "Centre de contact omnicanal (Voix, SMS, WhatsApp, Email) avec gestion des tickets, chatbot et campagnes. Déployable en cloud souverain ou sur site.",
  },
  {
    title: "ProCRM",
    desc: "Solution CRM omnicanale (Voix, SMS, WhatsApp) pour gérer le parcours client, centraliser les fiches et intégrer les communications aux processus métier.",
  },
];

const BENEFITS = [
  {
    role: "Entreprises & Organisations",
    desc: "Identité téléphonique professionnelle dédiée, communications centralisées, meilleure mobilité des équipes et outils adaptés à la relation client.",
  },
  {
    role: "Administrations",
    desc: "Communication professionnelle vérifiable, notification multicanale et interopérabilité avec les systèmes autorisés selon les cadres de gouvernance retenus.",
  },
  {
    role: "Consommateurs & Usagers",
    desc: "Identification plus claire des interlocuteurs professionnels, expérience de communication améliorée et accès aux services par des canaux adaptés.",
  },
  {
    role: "Opérateurs télécoms",
    desc: "Valorisation des ressources de numérotation et des infrastructures existantes, développement de nouveaux services de communication professionnelle et A2P.",
  },
  {
    role: "Partenaires technologiques",
    desc: "Possibilités d'intégration avec un réseau de plateformes de communication et de services numériques complémentaires.",
  },
  {
    role: "Écosystèmes numériques nationaux",
    desc: "Infrastructure complémentaire soutenant l'identité numérique des personnes morales, la confiance dans les échanges et l'interopérabilité des services.",
  },
];

const CHANNELS = ['Voix HD', 'SMS A2P', 'WhatsApp', 'USSD', 'Mobinawa'];

/* ─── Component ─────────────────────────────────────────────────────────────── */

export default function ProcomNetworkPage({ onContact, onNavigateHome }) {
  const [heroRef]     = useScrollAnimation();
  const [whyRef]      = useScrollAnimation();
  const [numproRef]   = useScrollAnimation();
  const [archRef]     = useScrollAnimation();
  const [platRef]     = useScrollAnimation();
  const [benefitsRef] = useScrollAnimation();
  const [gtsRef]      = useScrollAnimation();
  const [ctaRef]      = useScrollAnimation();

  return (
    <div className="bg-white">

      {/* ══════════════════════════════════════════════════════════════════════
          1. HERO — dark navy, logo watermark, animations
      ══════════════════════════════════════════════════════════════════════ */}
      <section
        className="relative pt-36 pb-28 md:pt-44 md:pb-36 overflow-hidden border-b border-white/10"
        ref={heroRef}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#040D1A] via-brand-navy to-[#0C1F3D]" />
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />

        {/* Logo watermark */}
        <div className="absolute inset-0 flex items-center justify-end pr-8 lg:pr-20 pointer-events-none select-none">
          <div className="relative w-[420px] h-[420px] lg:w-[560px] lg:h-[560px] flex items-center justify-center">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="absolute inset-0 rounded-full border border-brand-orange/20 procom-signal"
                style={{ animationDelay: `${i * 1}s` }}
              />
            ))}
            <div className="absolute inset-8 rounded-full bg-brand-orange/5 blur-2xl procom-pulse-ring" />
            <img
              src="/assets/procom-logo.png"
              alt=""
              aria-hidden="true"
              className="w-64 h-64 lg:w-80 lg:h-80 object-contain opacity-[0.12] procom-spin"
              style={{ filter: 'brightness(0) invert(1)' }}
            />
          </div>
        </div>

        <div className="absolute top-16 left-1/3 w-72 h-72 rounded-full bg-brand-blue/15 blur-3xl procom-float-slow pointer-events-none" />
        <div
          className="absolute bottom-12 right-1/3 w-56 h-56 rounded-full bg-brand-orange/10 blur-3xl procom-float-slow pointer-events-none"
          style={{ animationDelay: '4s' }}
        />

        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-brand-orange/50 procom-drift pointer-events-none"
            style={{
              left: `${10 + i * 11}%`,
              bottom: `${15 + (i % 3) * 20}%`,
              animationDelay: `${i * 0.9}s`,
              animationDuration: `${6 + i * 0.5}s`,
            }}
          />
        ))}

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <nav className="inline-flex items-center gap-2 text-xs font-medium text-white/50 mb-10">
            <button onClick={onNavigateHome} className="hover:text-white transition-colors">
              Accueil
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-white/30" />
            <span className="text-white/50">Infrastructure</span>
            <ChevronRight className="w-3.5 h-3.5 text-white/30" />
            <span className="text-white font-semibold">Réseau ProCom</span>
          </nav>

          <div className="max-w-2xl space-y-7">
            <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-brand-orange">
              <span className="w-6 h-px bg-brand-orange inline-block" />
              Infrastructure Souveraine · Afrique
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
              L'infrastructure numérique souveraine d'identité téléphonique et de communication des entreprises africaines.
            </h1>

            <p className="text-base sm:text-lg text-white/70 leading-relaxed font-normal">
              ProCom est un réseau panafricain de plateformes de communication professionnelle, conçu par GTS Africa pour accompagner la transformation numérique des entreprises, des administrations et de l'ensemble des organisations africaines.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button onClick={onContact} className="btn-accent text-base py-3 px-6">
                Raccorder votre infrastructure
                <ArrowRight className="w-4 h-4 ml-1 text-white" />
              </button>
              <button
                onClick={onNavigateHome}
                className="inline-flex items-center justify-center gap-2 py-3 px-6 text-base font-medium rounded-lg border border-white/25 text-white bg-white/8 backdrop-blur-sm hover:bg-white/15 transition-all duration-200"
              >
                Retour à l'accueil
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          2. POURQUOI PROCOM
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-white border-b border-gray-200" ref={whyRef}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy leading-tight mb-4">
              Pourquoi ProCom ?
            </h2>
            <p className="text-base text-gray-600 font-normal leading-relaxed">
              L'économie numérique africaine se développe rapidement. Pourtant, un enjeu fondamental demeure : l'absence d'une identité téléphonique professionnelle de référence, facilement identifiable et utilisable sur plusieurs canaux.
            </p>
          </div>

          {/* Analogy callout — épuré sans icône parasite */}
          <div className="border-l-4 border-brand-orange pl-6 py-5 bg-orange-50/60 rounded-r-xl mb-12 max-w-3xl">
            <p className="text-gray-800 text-base leading-relaxed font-normal">
              De la même façon qu'une personne morale dispose d'un numéro d'identification fiscale et d'un numéro de registre du commerce, elle devrait pouvoir disposer d'un <strong className="text-brand-navy">Numéro PRO unique</strong> pour identifier officiellement l'ensemble de ses services de communication.
            </p>
          </div>

          {/* Two-column problem/solution — design épuré et sobre */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="clean-card p-8">
              <h3 className="text-lg font-bold text-brand-navy mb-3">
                Le problème actuel
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed font-normal">
                Les organisations s'appuient encore fréquemment sur des numéros mobiles personnels, des lignes téléphoniques traditionnelles et des comptes de messagerie grand public. Cette situation entretient la confusion entre identité personnelle et identité professionnelle, complique la vérification des interlocuteurs et fragmente les échanges entre systèmes numériques.
              </p>
            </div>
            <div className="clean-card p-8">
              <h3 className="text-lg font-bold text-brand-navy mb-3">
                La solution ProCom
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed font-normal">
                ProCom apporte une réponse intégrée, en associant une identité téléphonique professionnelle à des services de communication multicanale et à des plateformes numériques interopérables. À l'ère du numérique, un seul Numéro PRO peut devenir l'identité de communication de l'entreprise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          3. LE NUMÉRO PRO
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-white border-b border-gray-200" ref={numproRef}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            {/* Left column */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy leading-tight mb-2">
                  Le Numéro PRO
                </h2>
                <p className="text-base text-brand-orange font-semibold mb-4">
                  L'identifiant unique officiel de communication de toute personne morale
                </p>
                <p className="text-base text-gray-600 leading-relaxed font-normal">
                  C'est un numéro fixe virtuel et multicanal (Voix, SMS/USSD, WhatsApp Business, Mobinawa et autres canaux numériques) qui s'active sur des plateformes numériques pour ses communications et transactions avec les consommateurs mobiles.
                </p>
              </div>

              {/* Channel badges */}
              <div className="flex flex-wrap gap-2">
                {CHANNELS.map((ch) => (
                  <span
                    key={ch}
                    className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-orange-50 text-brand-orange border border-orange-100"
                  >
                    {ch}
                  </span>
                ))}
              </div>

              {/* Advantages — puces orange minimalistes épurées */}
              <ul className="space-y-3 pt-2">
                {NUMERO_PRO_ADVANTAGES.map((text, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-orange shrink-0 mt-2" />
                    <span className="text-gray-700 text-sm font-normal leading-relaxed">
                      {text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right column — 5 rôles avec icônes fines ciblées */}
            <div className="space-y-3">
              {NUMERO_PRO_ROLES.map(({ Icon, title, desc }, i) => (
                <div
                  key={i}
                  className="clean-card p-5 flex items-start gap-3.5 hover:border-gray-300 transition-colors"
                >
                  <Icon className="w-4 h-4 text-brand-orange shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-brand-navy text-sm mb-1">{title}</h3>
                    <p className="text-xs text-gray-600 leading-relaxed font-normal">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          4. ARCHITECTURE DU RÉSEAU
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-white border-b border-gray-200" ref={archRef}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy leading-tight mb-2">
              Architecture du réseau ProCom
            </h2>
            <p className="text-base text-gray-600 font-normal">
              Un réseau panafricain, déployé pays par pays
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="clean-card p-8">
              <h3 className="text-lg font-bold text-brand-navy mb-3">Modèle FVNO</h3>
              <p className="text-sm text-gray-600 leading-relaxed font-normal">
                GTS Africa conçoit ProCom comme un réseau de téléphonie fixe virtuel panafricain, développé progressivement, pays par pays. Dans chaque pays : un opérateur FVNO adossé à l'opérateur historique de téléphonie fixe, spécialisé dans la fourniture de Numéros PRO aux entreprises.
              </p>
            </div>
            <div className="clean-card p-8">
              <h3 className="text-lg font-bold text-brand-navy mb-3">Souveraineté numérique</h3>
              <p className="text-sm text-gray-600 leading-relaxed font-normal">
                La souveraineté numérique implique la capacité des organisations à maîtriser leurs identités professionnelles, leurs communications et les conditions d'accès à leurs services numériques. ProCom contribue à l'émergence d'un écosystème panafricain dans lequel les entreprises peuvent communiquer au-delà de leurs frontières.
              </p>
            </div>
          </div>

          <div className="clean-card p-6 sm:p-10">
            <img
              src="/assets/procom-architecture-full.png"
              alt="Architecture Réseau ProCom"
              className="w-full h-auto object-contain"
              onError={(e) => {
                e.target.src = '/assets/procom-architecture.jpg';
              }}
            />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          5. PLATEFORMES CLOUD
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-white border-b border-gray-200" ref={platRef}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy leading-tight mb-4">
              Plateformes cloud de communications
            </h2>
            <p className="text-base text-gray-600 font-normal leading-relaxed">
              Le réseau ProCom associe le Numéro PRO à un ensemble intégré de solutions de communication cloud accessibles en mode SaaS.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CLOUD_PLATFORMS.map(({ title, desc }, idx) => (
              <div
                key={idx}
                className="clean-card p-8 flex flex-col justify-between hover:border-gray-300 transition-colors"
              >
                <div>
                  <h3 className="text-lg font-bold text-brand-navy mb-2.5">{title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed font-normal">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          6. BÉNÉFICES PAR ACTEUR
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-white border-b border-gray-200" ref={benefitsRef}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy leading-tight mb-4">
              Les bénéfices pour chaque acteur
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {BENEFITS.map(({ role, desc }, idx) => (
              <div
                key={idx}
                className="clean-card p-6 flex flex-col justify-between hover:border-gray-300 transition-colors"
              >
                <div>
                  <h3 className="text-sm font-bold text-brand-navy mb-2">{role}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed font-normal">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          7. GTS AFRICA
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-white border-b border-gray-200" ref={gtsRef}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy leading-tight mb-4">
              GTS Africa, concepteur du réseau ProCom
            </h2>
            <p className="text-base text-gray-600 leading-relaxed font-normal">
              GTS Africa développe une vision panafricaine des communications professionnelles, fondée sur l'association des ressources en numéros de téléphone fixe et des plateformes cloud de communication. Le Cameroun constitue le pays de référence de ce projet, à travers GTS-Infotel Cameroon et son expérience des services de communication professionnelle sur numéros fixes virtuels.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-l-4 border-brand-orange pl-6 py-5 bg-orange-50/50 rounded-r-xl">
              <p className="text-base text-gray-800 leading-relaxed font-normal">
                Nous avons donné aux personnes physiques une identité téléphonique :{' '}
                <strong className="text-brand-navy">le numéro mobile.</strong>
              </p>
            </div>
            <div className="border-l-4 border-brand-orange pl-6 py-5 bg-orange-50/50 rounded-r-xl">
              <p className="text-base text-gray-800 leading-relaxed font-normal">
                Il est temps de donner aux personnes morales la leur :{' '}
                <strong className="text-brand-navy">le Numéro PRO</strong>, vérifiable par les consommateurs mobiles et par tous les acteurs de l'écosystème numérique.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          8. CTA
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-white" ref={ctaRef}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4 leading-tight">
            Vous êtes un opérateur télécom, une administration, un investisseur ou un partenaire technologique ?
          </h2>
          <p className="text-gray-600 text-base max-w-2xl mx-auto mb-8 leading-relaxed font-normal">
            Échangeons sur les possibilités de partenariat et de déploiement du réseau ProCom dans votre pays.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button onClick={onContact} className="btn-accent text-base py-3 px-8">
              Contactez-nous
              <ArrowRight className="w-4 h-4 ml-1 text-white" />
            </button>
            <button onClick={onNavigateHome} className="btn-secondary text-base py-3 px-6">
              Retour à l'accueil
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
