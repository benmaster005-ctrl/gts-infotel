import React from 'react';
import { ArrowRight, ChevronRight, ShieldCheck, Cpu, Clock } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const MILESTONES = [
  {
    year: '1986 – 1997',
    title: 'Pionnier GSM & R&D Télécoms en France',
    desc: 'Travaux de recherche et développement pionniers sur les réseaux mobiles 2G/GSM en France (SUPELEC & Télécom Paris), participant aux fondations de la révolution mobile.',
  },
  {
    year: '2002',
    title: 'Fondation de GTS-Infotel Cameroun',
    desc: 'Création de la 1ère filiale par le groupe GTS AFRICA pour introduire au Cameroun les numéros virtuels dédiés aux services de communications à valeur ajoutée (SVA/A2P).',
  },
  {
    year: '2017 – 2021',
    title: 'Partenariat CAMTEL & Alliance APEBI–REPTIC',
    desc: 'Signature de l’accord d’interconnexion directe avec l’opérateur historique public CAMTEL pour lancer le réseau ProCom, et convention historique Sud-Sud APEBI–REPTIC.',
  },
  {
    year: '2022',
    title: 'Décret n°2022/10902 sur la numérotation',
    desc: 'Consécration réglementaire instaurant la catégorie officielle des numéros fixes virtuels dédiés à l’identification, aux services A2P et à la joignabilité légale des personnes morales.',
  },
  {
    year: '2025 – 2026',
    title: 'FADB, Alliance CIRPACK & Lancement Mobinawa',
    desc: 'Co-fondation de la Fédération des Entreprises Numériques Africaines (FADB), partenariat cœur de réseau avec CIRPACK, lancement de Mobinawa à PROMOTE 2026 et tribune GITEX Africa 2026 sur l’IA souveraine.',
  },
];

const VALUES = [
  {
    icon: ShieldCheck,
    title: 'Souveraineté & Confiance Numérique',
    desc: 'Opérateur titulaire d’une licence ART Catégorie 1. Nous érigeons le Numéro PRO en attribut KYC commun pour éliminer l’usurpation d’identité et sécuriser l’économie numérique.',
  },
  {
    icon: Cpu,
    title: 'Technologies COMTECH & Cœur de Réseau',
    desc: 'Infrastructures Softswitch et IMSaaS de classe opérateur développées avec CIRPACK et 3CX, garantissant la maîtrise des données de communication sur le sol africain.',
  },
  {
    icon: Clock,
    title: 'Engagement Panafricain & ZLECAf',
    desc: 'Plus de 20 ans au Cameroun et une action résolue (REPTIC.CM, FADB) pour un réseau de communication professionnelle unifié permettant d’interagir à coût local au-delà des frontières.',
  },
];

export default function AboutPage({ onContact, onNavigateHome }) {
  const [heroRef] = useScrollAnimation();
  const [visionRef] = useScrollAnimation();
  const [directorRef] = useScrollAnimation();
  const [valuesRef] = useScrollAnimation();

  return (
    <div className="bg-white">
      
      {/* 1. HERO SECTION MINIMALISTE */}
      <section className="pt-36 pb-20 md:pt-44 md:pb-28 bg-white border-b border-gray-200" ref={heroRef}>
        <div className="max-w-7xl mx-auto px-6">
          
          <nav className="inline-flex items-center gap-2 text-xs font-medium text-gray-500 mb-8">
            <button onClick={onNavigateHome} className="hover:text-brand-navy transition-colors">
              Accueil
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <span className="text-brand-navy font-semibold">À propos</span>
          </nav>

          <div className="max-w-4xl space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-brand-navy leading-tight">
              Pionnier de la virtualisation télécom en Afrique.
            </h1>
            
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-normal max-w-3xl">
              1er opérateur alternatif de numéros fixes virtuels multi-services des entreprises au Cameroun, et acteur COMTECH pionnier de la communication professionnelle sur le continent depuis plus de 20 ans.
            </p>
            
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onContact}
                className="btn-accent text-base py-3 px-6"
              >
                Prendre contact avec la direction
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

      {/* 2. VISION & HISTORIQUE */}
      <section className="py-24 md:py-32 bg-white border-b border-gray-200" ref={visionRef}>
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            <div className="lg:col-span-5 space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy tracking-tight leading-tight">
                Une vision bâtie pour le développement de l'Afrique
              </h2>
              
              <div className="space-y-4 text-base text-gray-600 font-normal leading-relaxed">
                <p>
                  Historiquement en Afrique subsaharienne, il n’existait aucun opérateur de téléphonie fixe offrant un service de numéros virtuels modernes dédié aux plateformes de communication unifiée des entreprises.
                </p>
                <p>
                  C’est dans ce contexte que la filiale <strong>GTS-Infotel</strong> a été fondée en 2002 au Cameroun par le groupe <strong>GTS AFRICA</strong> pour introduire sur le marché une nouvelle catégorie de numéros professionnels dématérialisés.
                </p>
                <p>
                  Grâce à son interconnexion stratégique avec l'opérateur national <strong>CAMTEL</strong>, GTS-Infotel garantit aujourd’hui un acheminement fiable et souverain des flux Voix & SMS sur des numéros PRO officiels.
                </p>
              </div>
            </div>

            {/* Timeline chronologique épurée */}
            <div className="lg:col-span-7 space-y-4">
              {MILESTONES.map((m, idx) => (
                <div key={idx} className="clean-card p-6 flex flex-col sm:flex-row gap-6 items-start">
                  <div className="font-bold text-xs sm:text-sm text-brand-orange bg-orange-50 border border-orange-200 px-3 py-1.5 rounded shrink-0">
                    {m.year}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-brand-navy mb-1.5">{m.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed font-normal">{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* 3. DIRECTION GÉNÉRALE (DESIGN ÉPURÉ & PROFESSIONNEL) */}
      <section className="py-24 md:py-32 bg-white border-b border-gray-200" ref={directorRef}>
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy tracking-tight leading-tight mb-4">
              Direction Générale
            </h2>
            <p className="text-base text-gray-600 font-normal leading-relaxed">
              Une gouvernance portée par plus de quatre décennies d'expertise à l'avant-garde des télécommunications africaines et internationales.
            </p>
          </div>

          <div className="clean-card p-4 sm:p-12 lg:p-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
              
              {/* Photo du Directeur & Filiation académique */}
              <div className="lg:col-span-5 flex flex-col items-center sm:items-start text-center sm:text-left">
                <div className="w-full max-w-xs sm:max-w-sm aspect-square rounded-2xl overflow-hidden border border-gray-200 bg-white mb-6 shadow-sm">
                  <img
                    src="/assets/pierre-francois-kamanou-portrait.png"
                    alt="Dr.-Ing. Pierre-François KAMANOU"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                
                <h3 className="text-2xl font-bold text-brand-navy mb-1">
                  Dr.-Ing. Pierre-François KAMANOU
                </h3>
                <p className="text-sm text-brand-orange font-semibold mb-1">
                  Fondateur & Directeur Général · GTS Africa & GTS-Infotel
                </p>
                <p className="text-xs text-gray-500 font-normal leading-relaxed mb-6">
                  Docteur-Ingénieur · SUPELEC Paris · TÉLÉCOM Paris
                </p>

                {/* 3 Indicateurs clés épurés sans débordement sur mobile */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 w-full pt-6 border-t border-gray-100">
                  <div className="p-3 rounded-lg border border-gray-200 bg-white flex sm:flex-col items-center justify-between sm:justify-start text-left">
                    <span className="text-xl font-bold text-brand-navy block">40+</span>
                    <span className="text-xs text-gray-500">Ans d'expérience</span>
                  </div>
                  <div className="p-3 rounded-lg border border-gray-200 bg-white flex sm:flex-col items-center justify-between sm:justify-start text-left">
                    <span className="text-xl font-bold text-brand-navy block">1997</span>
                    <span className="text-xs text-gray-500">Pionnier GSM</span>
                  </div>
                  <div className="p-3 rounded-lg border border-gray-200 bg-white flex sm:flex-col items-center justify-between sm:justify-start text-left">
                    <span className="text-xl font-bold text-brand-orange block">2002</span>
                    <span className="text-xs text-gray-500">Création GTS</span>
                  </div>
                </div>
              </div>

              {/* Propos de la Direction & Vision Télécom */}
              <div className="lg:col-span-7 space-y-6">
                
                <blockquote className="border-l-2 border-brand-orange pl-6 py-2">
                  <p className="text-lg sm:text-xl text-brand-navy font-medium leading-relaxed italic">
                    « Pas d’économie numérique souveraine sans identité numérique fiable des entreprises ! Les données de communication professionnelle constituent l'actif stratégique indispensable pour bâtir une IA africaine utile et autonome. »
                  </p>
                </blockquote>

                <div className="space-y-4 text-base text-gray-600 font-normal leading-relaxed">
                  <p>
                    Diplômé de <strong>SUPELEC Paris</strong> et de <strong>Télécom Paris</strong>, le Dr.-Ing. Pierre-François KAMANOU capitalise sur plus de 40 ans d'expérience pionnière dans les télécommunications : de la recherche & développement des réseaux mobiles cellulaires 2G/GSM en France jusqu’à la conception d'architectures ComTech et de cœurs de réseau virtuels en Afrique.
                  </p>
                  <p>
                    Dès 2002, il fonde <strong>GTS-Infotel</strong> au Cameroun, introduisant la téléphonie fixe virtuelle sur le continent. Acteur incontournable de l’écosystème numérique africain, il est également <strong>Président du REPTIC.CM</strong> (Réseau des Professionnels des TIC du Cameroun) et membre co-fondateur de la <strong>FADB</strong> (Federation of African Digital Businesses), portée avec l'APEBI et des organisations de tout le continent.
                  </p>
                  <p>
                    Régulièrement sollicité comme expert de référence lors de forums panafricains majeurs (<strong>GITEX Africa</strong> au Forum IA & Souveraineté Numérique, <strong>CEMAC Talks</strong>, <strong>FGI-Cameroun</strong>, ateliers de l'<strong>UIT</strong>), il milite pour la reconnaissance du <strong>Numéro PRO</strong> comme identifiant universel des personnes morales, attribut KYC commun et garant de la souveraineté des données face aux monopoles technologiques des GAFAM.
                  </p>
                </div>

                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <button
                    onClick={onContact}
                    className="btn-accent"
                  >
                    Prendre contact avec la direction
                    <ArrowRight className="w-4 h-4 ml-1 text-white" />
                  </button>
                  <a
                    href="https://fr.linkedin.com/company/gts-infotel-nigeria-ltd"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary"
                  >
                    Profil GTS sur LinkedIn
                  </a>
                </div>

              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 4. VALEURS & ENGAGEMENTS DE L'ENTREPRISE */}
      <section className="py-24 md:py-32 bg-white border-b border-gray-200" ref={valuesRef}>
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy tracking-tight leading-tight mb-4">
              Nos Engagements Fondamentaux
            </h2>
            <p className="text-base text-gray-600 font-normal leading-relaxed">
              Trois piliers qui guident chacune de nos solutions pour accompagner la transition numérique des entreprises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {VALUES.map((val, index) => {
              const Icon = val.icon;
              return (
                <div key={index} className="clean-card p-8 flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-gray-700 mb-6">
                      <Icon className="w-5 h-5 text-current" />
                    </div>
                    <h3 className="text-lg font-bold text-brand-navy mb-3">
                      {val.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed font-normal">
                      {val.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 5. CTA SECTION MINIMALISTE SUR FOND BLANC PUR */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-navy">
            Construisons ensemble vos solutions de demain.
          </h2>
          <p className="text-gray-600 text-base max-w-2xl mx-auto mb-8 leading-relaxed font-normal">
            Nos ingénieurs et conseillers télécoms sont à votre disposition pour vous accompagner dans le déploiement de vos numéros PRO.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onContact}
              className="btn-accent text-base py-3 px-8"
            >
              Échanger avec nos équipes
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
