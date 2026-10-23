import React from 'react';
import { ArrowRight, ChevronRight, ShieldCheck, Cpu, Clock, Linkedin, Twitter, Globe, Mail } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const MILESTONES = [
  {
    year: '1986 \u2013 1997',
    title: 'Pionnier GSM & R&D T\u00e9l\u00e9coms en France',
    desc: 'Travaux de recherche et d\u00e9veloppement pionniers sur les r\u00e9seaux mobiles 2G/GSM en France (SUPELEC & T\u00e9l\u00e9com Paris), participant aux fondations de la r\u00e9volution mobile.',
  },
  {
    year: '2002',
    title: 'Fondation de GTS-Infotel Cameroun',
    desc: "Cr\u00e9ation de la 1\u00e8re filiale par le groupe GTS AFRICA pour introduire au Cameroun les num\u00e9ros virtuels d\u00e9di\u00e9s aux services de communications \u00e0 valeur ajout\u00e9e (SVA/A2P).",
  },
  {
    year: '2017 \u2013 2021',
    title: 'Partenariat CAMTEL & Alliance APEBI\u2013REPTIC',
    desc: "Signature de l'accord d'interconnexion directe avec l'op\u00e9rateur historique public CAMTEL pour lancer le r\u00e9seau ProCom, et convention historique Sud-Sud APEBI\u2013REPTIC.",
  },
  {
    year: '2022',
    title: 'D\u00e9cret n\u00b02022/10902 sur la num\u00e9rotation',
    desc: "Cons\u00e9cration r\u00e9glementaire instaurant la cat\u00e9gorie officielle des num\u00e9ros fixes virtuels d\u00e9di\u00e9s \u00e0 l'identification, aux services A2P et \u00e0 la joignabilit\u00e9 l\u00e9gale des personnes morales.",
  },
  {
    year: '2025 \u2013 2026',
    title: 'FADB, Alliance CIRPACK & Lancement Mobinawa',
    desc: "Co-fondation de la F\u00e9d\u00e9ration des Entreprises Num\u00e9riques Africaines (FADB), partenariat c\u0153ur de r\u00e9seau avec CIRPACK, lancement de Mobinawa \u00e0 PROMOTE 2026 et tribune GITEX Africa 2026 sur l'IA souveraine.",
  },
];

const VALUES = [
  {
    icon: ShieldCheck,
    title: "Souverainet\u00e9 & Confiance Num\u00e9rique",
    desc: "Op\u00e9rateur titulaire d'une licence ART Cat\u00e9gorie 1. Nous \u00e9rigeons le Num\u00e9ro PRO en attribut KYC commun pour \u00e9liminer l'usurpation d'identit\u00e9 et s\u00e9curiser l'\u00e9conomie num\u00e9rique.",
  },
  {
    icon: Cpu,
    title: "Technologies COMTECH & C\u0153ur de R\u00e9seau",
    desc: "Infrastructures Softswitch et IMSaaS de classe op\u00e9rateur d\u00e9velopp\u00e9es avec CIRPACK et 3CX, garantissant la ma\u00eetrise des donn\u00e9es de communication sur le sol africain.",
  },
  {
    icon: Clock,
    title: "Engagement Panafricain & ZLECAf",
    desc: "Plus de 20 ans au Cameroun et une action r\u00e9solue (REPTIC.CM, FADB) pour un r\u00e9seau de communication professionnelle unifi\u00e9 permettant d'interagir \u00e0 co\u00fbt local au-del\u00e0 des fronti\u00e8res.",
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
                  Historiquement en Afrique subsaharienne, il n'existait aucun opérateur de téléphonie fixe offrant un service de numéros virtuels modernes dédié aux plateformes de communication unifiée des entreprises.
                </p>
                <p>
                  C'est dans ce contexte que la filiale <strong>GTS-Infotel</strong> a été fondée en 2002 au Cameroun par le groupe <strong>GTS AFRICA</strong> pour introduire sur le marché une nouvelle catégorie de numéros professionnels dématérialisés.
                </p>
                <p>
                  Grâce à son interconnexion stratégique avec l'opérateur national <strong>CAMTEL</strong>, GTS-Infotel garantit aujourd'hui un acheminement fiable et souverain des flux Voix & SMS sur des numéros PRO officiels.
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

      {/* 3. DIRECTION GÉNÉRALE — layout colonne flex centré */}
      <section className="py-24 md:py-32 bg-white border-b border-gray-200" ref={directorRef}>
        <div className="max-w-7xl mx-auto px-6">

          {/* En-tête de section */}
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy tracking-tight leading-tight mb-4">
              Direction Générale
            </h2>
            <p className="text-base text-gray-600 font-normal leading-relaxed">
              Une gouvernance portée par plus de quatre décennies d'expertise à l'avant-garde des télécommunications africaines et internationales.
            </p>
          </div>

          <div className="clean-card p-8 sm:p-12 lg:p-16">
            <div className="flex flex-col items-center">

              {/* ── IDENTITÉ : photo ronde + nom + poste + réseaux sociaux ── */}
              <div className="flex flex-col items-center text-center mb-10">

                {/* Photo du directeur — ronde et centrée */}
                <div className="w-40 h-40 sm:w-52 sm:h-52 rounded-full overflow-hidden border-4 border-white shadow-xl ring-2 ring-gray-100 mb-6 shrink-0">
                  <img
                    src="/assets/pierre-francois-kamanou-portrait.jpg"
                    alt="Dr.-Ing. Pierre-François KAMANOU"
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                {/* Nom */}
                <h3 className="text-2xl sm:text-3xl font-bold text-brand-navy mb-1 leading-tight">
                  Dr.-Ing. Pierre-François KAMANOU
                </h3>

                {/* Titre du poste */}
                <p className="text-sm sm:text-base text-brand-orange font-semibold tracking-wide mb-1">
                  Fondateur &amp; Directeur Général
                </p>
                <p className="text-xs text-gray-500 font-normal mb-6">
                  GTS Africa · GTS-Infotel · SUPELEC Paris · Télécom Paris
                </p>

                {/* Icônes des réseaux sociaux */}
                <div className="flex items-center gap-3">
                  <a
                    href="https://fr.linkedin.com/company/gts-infotel-nigeria-ltd"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn GTS-Infotel"
                    className="w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-500 hover:border-brand-navy hover:text-brand-navy hover:shadow-md transition-all duration-200"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href="https://twitter.com/gtsinfotel"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter / X GTS-Infotel"
                    className="w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-500 hover:border-brand-navy hover:text-brand-navy hover:shadow-md transition-all duration-200"
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                  <a
                    href="https://www.gts-infotel.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Site web GTS-Infotel"
                    className="w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-500 hover:border-brand-navy hover:text-brand-navy hover:shadow-md transition-all duration-200"
                  >
                    <Globe className="w-4 h-4" />
                  </a>
                  <button
                    onClick={onContact}
                    aria-label="Contacter par e-mail"
                    className="w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-500 hover:border-brand-orange hover:text-brand-orange hover:shadow-md transition-all duration-200"
                  >
                    <Mail className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Séparateur orange */}
              <div className="w-16 h-0.5 bg-brand-orange mb-10 opacity-50 rounded-full" />

              {/* ── CORPS : citation + biographie + indicateurs + CTA ── */}
              <div className="w-full max-w-3xl flex flex-col gap-8">

                {/* Citation */}
                <blockquote className="border-l-2 border-brand-orange pl-6 py-1">
                  <p className="text-lg sm:text-xl text-brand-navy font-medium leading-relaxed italic">
                    « Pas d'économie numérique souveraine sans identité numérique fiable des entreprises ! Les données de communication professionnelle constituent l'actif stratégique indispensable pour bâtir une IA africaine utile et autonome. »
                  </p>
                </blockquote>

                {/* Paragraphes biographiques enrichis avec les infos du document */}
                <div className="space-y-4 text-base text-gray-600 font-normal leading-relaxed">
                  <p>
                    Diplômé de <strong>SUPELEC Paris</strong> et Docteur-Ingénieur de <strong>Télécom Paris</strong>, Pierre-François KAMANOU cumule plus de 40 années d'expérience pionnière : de la numérisation des faisceaux hertziens dès 1985, au développement des premiers outils d'ingénierie radio GSM chez <strong>Alcatel</strong> (1990), jusqu'à l'optimisation du premier réseau GSM de <strong>France Télécom</strong> (1995).
                  </p>
                  <p>
                    Dès 1997, il participe au déploiement des tout premiers réseaux GSM d'Afrique au sein des groupes <strong>MSI-CI</strong> (devenu Celtel puis Airtel) et <strong>Telecel</strong>. Il fonde ensuite <strong>GTS Africa</strong> en 2002, avec l'ambition de co-construire le premier réseau panafricain <strong>ProCom</strong> de plateformes cloud de communication — fondé sur le <strong>Numéro PRO</strong> comme identifiant officiel des entreprises — permettant d'interagir via Voix, SMS, USSD, WhatsApp Business et <strong>Mobinawa</strong>.
                  </p>
                  <p>
                    Il est également le concepteur de <strong>Mobinawa</strong>, plateforme mobile-first de communication unifiée B2B et B2C intégrant un standard téléphonique virtuel adapté aux entreprises de toutes tailles. Président-Fondateur du <strong>REPTIC.CM</strong> et membre co-fondateur de la <strong>FADB</strong> (Federation of African Digital Businesses), il est régulièrement sollicité sur les grands forums panafricains — <strong>GITEX Africa</strong>, <strong>CEMAC Talks</strong>, <strong>FGI-Cameroun</strong>, ateliers de l'<strong>UIT</strong> — pour porter la vision du Numéro PRO comme attribut KYC universel des personnes morales africaines.
                  </p>
                </div>

                {/* Indicateurs clés */}
                <div className="grid grid-cols-3 gap-3 sm:gap-4">
                  <div className="flex flex-col items-center text-center p-4 sm:p-5 rounded-xl border border-gray-200 bg-gray-50">
                    <span className="text-2xl sm:text-3xl font-bold text-brand-navy">40+</span>
                    <span className="text-xs text-gray-500 mt-1 leading-tight">Ans d'expérience</span>
                  </div>
                  <div className="flex flex-col items-center text-center p-4 sm:p-5 rounded-xl border border-gray-200 bg-gray-50">
                    <span className="text-2xl sm:text-3xl font-bold text-brand-navy">1997</span>
                    <span className="text-xs text-gray-500 mt-1 leading-tight">Pionnier GSM Afrique</span>
                  </div>
                  <div className="flex flex-col items-center text-center p-4 sm:p-5 rounded-xl border border-gray-200 bg-gray-50">
                    <span className="text-2xl sm:text-3xl font-bold text-brand-orange">2002</span>
                    <span className="text-xs text-gray-500 mt-1 leading-tight">Fondation GTS Africa</span>
                  </div>
                </div>

                {/* CTA final */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                  <button
                    onClick={onContact}
                    className="btn-accent text-base py-3 px-7"
                  >
                    Prendre contact avec la direction
                    <ArrowRight className="w-4 h-4 ml-1 text-white" />
                  </button>
                  <a
                    href="https://fr.linkedin.com/company/gts-infotel-nigeria-ltd"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary text-base py-3 px-7"
                  >
                    <Linkedin className="w-4 h-4" />
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
