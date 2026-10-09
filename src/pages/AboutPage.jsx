/**
 * Page Dédiée : À propos de GTS-Infotel Cameroon
 * Intègre l'historique, la vision, la mission, le positionnement COMTECH
 * et un bandeau exécutif dédié au Directeur Général (Dr.-Ing. Pierre-François KAMANOU)
 * avec sa photo officielle portrait élégamment organisée.
 */

const MILESTONES = [
  {
    year: '2002',
    title: 'Création de GTS-Infotel Cameroon',
    desc: 'Fondation de la 1ère filiale camerounaise par GTS AFRICA pour introduire des numéros virtuels dédiés aux services de communications à valeur ajoutée.',
  },
  {
    year: '2002 - 2017',
    title: '3 Licences SVA Obtenues',
    desc: 'Attribution successive de licences ministérielles et régulateur (2002, 2015, 2017) et consolidation de l’expertise technique en services SMS & Voix.',
  },
  {
    year: '2021',
    title: 'Partenariat Historique CAMTEL',
    desc: 'Signature de l’accord d’interconnexion stratégique avec l’opérateur historique et déploiement du réseau ProCom en phase pilote au Cameroun.',
  },
  {
    year: '2022',
    title: 'Décret sur la Numérotation',
    desc: 'Promulgation du décret officiel introduisant la catégorie des numéros fixes virtuels dédiés à l’identification des personnes morales.',
  },
];

export default function AboutPage({ onContact, onNavigateHome }) {
  return (
    <div className="bg-white">
      {/* 1. HERO SECTION */}
      <section className="relative bg-brand-navy text-white pt-36 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'radial-gradient(circle, #fff 0.5px, transparent 0.5px)',
            backgroundSize: '20px 20px',
          }}
        />

        <div className="relative max-w-6xl mx-auto px-6">
          {/* Fil d'Ariane */}
          <nav className="flex items-center gap-2 text-xs text-neutral-400 mb-6">
            <button
              onClick={onNavigateHome}
              className="hover:text-white transition-colors"
            >
              Accueil
            </button>
            <span>/</span>
            <span className="text-brand-orange font-medium">À propos</span>
          </nav>

          <div className="max-w-3xl">
            <span className="text-xs font-semibold tracking-widest uppercase text-cyan-400 block mb-3">
              HISTOIRE, VISION & LEADERSHIP
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-[2.65rem] font-extrabold leading-[1.15] tracking-tight">
              À propos de GTS-Infotel Cameroon
            </h1>

            <div className="w-16 h-1 bg-brand-orange my-6" />

            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
              1er opérateur télécom alternatif de numéros fixes virtuels multi-services des entreprises au Cameroun, et acteur COMTECH pionnier de la communication professionnelle en Afrique.
            </p>
          </div>
        </div>
      </section>

      {/* 2. CONTEXTE HISTORIQUE & VISION TÉLÉCOM */}
      <section className="py-24 bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            <div className="lg:col-span-7 space-y-6 text-[15px] text-neutral-700 leading-relaxed">
              <div>
                <span className="text-xs font-semibold tracking-widest uppercase text-brand-orange block mb-2">
                  PARCOURS & GENÈSE
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy tracking-tight">
                  Pionnier de la virtualisation télécom en Afrique
                </h2>
              </div>

              <p>
                Contrairement à ce que l’on observe dans les pays occidentaux, il n’existait jusqu'à récemment aucun opérateur de téléphonie fixe en Afrique (à l’exception de l’Afrique du Sud) offrant un service de numéros fixes virtuels dédiés aux plateformes de standard téléphonique virtuel des entreprises.
              </p>

              <p>
                Aussi, malgré le développement croissant de la téléphonie mobile et de l’Internet depuis plus de 20 ans au Cameroun, l’offre existante de téléphonie fixe traditionnelle sur ligne filaire est en déclin perpétuel et ne répondait plus aux exigences multiples des organisations à l’ère de la mobilité.
              </p>

              <p>
                C’est dans ce contexte que la première filiale <strong>GTS-Infotel</strong> a été créée en 2002 au Cameroun par <strong>GTS AFRICA</strong> avec pour objectif d’introduire sur le marché une offre de numéros virtuels dédiés aux services de communications à valeur ajoutée des entreprises, couronnée par l'obtention successive de 3 licences de services télécoms (2002, 2015 et 2017).
              </p>

              <p>
                Grâce à son partenariat stratégique décisif avec <strong>CAMTEL</strong>, GTS-Infotel a déployé en 2021 le réseau <strong>ProCom</strong> dans sa phase pilote au Cameroun et est devenu le tout premier opérateur alternatif de services de téléphonie A2P Voix &amp; SMS sur des numéros PRO (fixes virtuels), positionnant GTS-Infotel comme l’opérateur COMTECH de référence.
              </p>
            </div>

            {/* Frise chronologique des étapes */}
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-semibold tracking-widest uppercase text-brand-blue block mb-4">
                JALONS DÉCISIFS
              </span>
              {MILESTONES.map((m, idx) => (
                <div key={idx} className="bg-white border border-neutral-200 p-5 shadow-sm">
                  <span className="text-xs font-mono font-bold text-brand-orange block mb-1">
                    {m.year}
                  </span>
                  <h3 className="text-sm font-bold text-neutral-900 mb-1">
                    {m.title}
                  </h3>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    {m.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 3. NOTRE MISSION & POSITIONNEMENT COMTECH */}
      <section className="py-20 bg-white border-b border-neutral-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border border-neutral-200 p-8 bg-neutral-50/50">
              <span className="text-xs font-semibold uppercase tracking-wider text-brand-orange block mb-2">
                NOTRE VOCATION
              </span>
              <h3 className="text-xl font-bold text-brand-navy mb-3">
                Notre Mission
              </h3>
              <p className="text-sm text-neutral-700 leading-relaxed">
                Permettre aux entreprises et administrations de toutes tailles de mettre en place de nouveaux services de communications mobiles à valeur ajoutée sur un numéro virtuel d’identification, en support direct de leur transformation numérique.
              </p>
            </div>

            <div className="border border-neutral-200 p-8 bg-neutral-50/50">
              <span className="text-xs font-semibold uppercase tracking-wider text-brand-blue block mb-2">
                MODÈLE OPÉRATEUR OTT
              </span>
              <h3 className="text-xl font-bold text-brand-navy mb-3">
                L’Opérateur Télécoms OTT Local
              </h3>
              <p className="text-sm text-neutral-700 leading-relaxed">
                Grâce aux solutions offertes par le réseau ProCom, nous accompagnons les entreprises à répondre à l’ensemble de leurs besoins de Communication, Collaboration et marketing mobile à l’ère du « tout numérique et tout mobile ».
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. BANDEAU DE DIRECTION : LE DIRECTEUR GÉNÉRAL & FONDATEUR */}
      <section className="py-20 bg-gradient-to-br from-brand-navy via-[#0C2340] to-brand-navy text-white relative overflow-hidden">
        {/* Lignes de repère d'arrière-plan */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />

        <div className="relative max-w-6xl mx-auto px-6">
          {/* En-tête du bandeau */}
          <div className="flex items-center gap-3 mb-8">
            <span className="h-px w-8 bg-brand-orange" />
            <span className="text-xs font-semibold tracking-widest uppercase text-cyan-400">
              DIRECTION GÉNÉRALE &amp; LEADERSHIP
            </span>
          </div>

          {/* Carte horizontale structurée */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-10 backdrop-blur-sm shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Photo officielle du Directeur */}
              <div className="lg:col-span-4 flex flex-col items-center text-center">
                <div className="relative">
                  <div className="w-44 h-44 sm:w-48 sm:h-48 rounded-full overflow-hidden border-4 border-brand-orange/80 shadow-2xl bg-brand-navy">
                    <img
                      src="/assets/pierre-francois-kamanou-portrait.jpg"
                      alt="Dr.-Ing. Pierre-François KAMANOU"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-brand-navy border border-white/20 text-cyan-300 text-[10px] font-semibold px-3 py-1 rounded-full uppercase tracking-wider whitespace-nowrap shadow-md">
                    Fondateur &amp; CEO
                  </span>
                </div>

                <h3 className="text-xl font-bold mt-5 text-white">
                  Dr.-Ing. Pierre-François KAMANOU
                </h3>
                <p className="text-xs text-neutral-400 mt-1 max-w-xs">
                  Fondateur de GTS Africa · Président-Fondateur du REPTIC.CM
                </p>
                <span className="text-[11px] text-cyan-300/90 font-medium mt-2 bg-white/5 px-2.5 py-1 rounded">
                  🎓 SUPELEC Paris · Docteur-Ingénieur SUP TELECOM Paris
                </span>
              </div>

              {/* Contenu éditorial & chiffres clés */}
              <div className="lg:col-span-8 space-y-6 lg:border-l lg:border-white/10 lg:pl-10">
                {/* 3 Chiffres clés */}
                <div className="grid grid-cols-3 gap-3 bg-white/5 p-4 rounded-xl border border-white/5 text-center sm:text-left">
                  <div>
                    <span className="text-2xl sm:text-3xl font-extrabold text-brand-orange block">40+</span>
                    <span className="text-[11px] text-neutral-300 leading-tight block mt-0.5">
                      ans d'expérience pionnière en télécoms
                    </span>
                  </div>
                  <div>
                    <span className="text-2xl sm:text-3xl font-extrabold text-cyan-400 block">1997</span>
                    <span className="text-[11px] text-neutral-300 leading-tight block mt-0.5">
                      premiers réseaux GSM déployés en Afrique
                    </span>
                  </div>
                  <div>
                    <span className="text-2xl sm:text-3xl font-extrabold text-white block">2002</span>
                    <span className="text-[11px] text-neutral-300 leading-tight block mt-0.5">
                      fondation officielle de GTS Africa
                    </span>
                  </div>
                </div>

                {/* Citation */}
                <blockquote className="border-l-4 border-brand-orange pl-4 italic text-sm sm:text-base text-neutral-200 leading-snug">
                  « Pas d’économie numérique inclusive et souveraine sans identité téléphonique unique des entreprises. »
                </blockquote>

                {/* Bio synthétique & vision */}
                <div className="space-y-2.5 text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  <p>
                    Cumulant plus de 40 ans d'expérience pionnière dans les télécommunications (des premiers réseaux GSM en France et en Afrique aux services mobiles SVA), <strong>Pierre-François KAMANOU</strong> a conçu le réseau panafricain <strong>ProCom</strong> fondé sur le <strong>Numéro PRO</strong> comme attribut KYC de référence des personnes morales au cœur de l'économie numérique africaine.
                  </p>
                  <p>
                    Également concepteur de la solution <strong>Mobinawa</strong> (plateforme mobile-first de standard téléphonique virtuel B2B/B2C), il œuvre activement pour l'inclusion financière et la souveraineté numérique du continent.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 5. APPEL À L'ACTION */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy tracking-tight mb-4">
            Rejoignez l’écosystème ProCom avec GTS-Infotel
          </h2>
          <p className="text-sm text-neutral-600 max-w-xl mx-auto mb-8 leading-relaxed">
            Nos experts vous accompagnent pour équiper votre entreprise de numéros PRO conformes et déployer vos plateformes de communication.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onContact}
              className="bg-brand-orange text-white text-sm font-semibold px-8 py-4 hover:bg-brand-orange/90 transition-colors shadow-sm"
            >
              Prendre contact avec nous
            </button>
            <button
              onClick={onNavigateHome}
              className="text-xs text-neutral-500 hover:text-brand-navy transition-colors underline underline-offset-4"
            >
              ← Retour à l'accueil
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
