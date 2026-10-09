/**
 * Page Dédiée : 3CX-Centre de Contacts
 * Contenu officiel GTS-Infotel (extrait de la plateforme cm.gts-africa.com).
 */

const ADVANTAGES = [
  {
    num: '01',
    title: 'Simplicité',
    desc: 'Déploiement et gestion de la solution de manière autonome et sans aucun équipement matériel spécifique nécessaire.',
    icon: (
      <svg className="w-6 h-6 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Efficacité',
    desc: 'Paramétrage fin des fonctionnalités pour qualifier au mieux les appels entrants (heure d’appel, zone géographique, disponibilité des agents, etc.).',
    icon: (
      <svg className="w-6 h-6 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Maîtrise',
    desc: 'Répartition intelligente des appels selon des critères prédéfinis pour optimiser l’expérience client et la productivité de vos équipes.',
    icon: (
      <svg className="w-6 h-6 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Flexibilité',
    desc: 'Adaptation continue de la plateforme aux besoins réels de votre activité sur la base des rapports et statistiques en temps réel.',
    icon: (
      <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const SUPERVISOR_FEATURES = [
  'Gestion des files d’attente & des agents de réception des messages',
  'Formation en temps réel des agents grâce à l’écoute, chuchotement et interruption d’appel',
  'Switchboard / Wallboard : supervision dynamique des appels, des agents et des files d’attente',
  'Reporting statistique complet de la performance des agents et du centre',
];

const AGENT_FEATURES = [
  'Conversation multicanale unifiée (Live chat via site web, Facebook messaging, SMS) avec clients et prospects',
  'Transfert fluide d’un chat vers un autre agent spécialisé',
  'Blocage instantané des interlocuteurs anonymes au live chat pour une sécurité renforcée',
  'Envoi et partage de fichiers, documents ou courriels directement dans l’échange',
  'Ajout automatique ou manuel de l’interlocuteur au carnet de contacts clients',
  'Conversion immédiate d’une session live chat en appel téléphonique vocal',
];

export default function ContactCenter3CXPage({ onContact, onNavigateHome }) {
  return (
    <div className="bg-white">
      {/* 1. HERO SECTION */}
      <section className="relative bg-brand-navy text-white pt-36 pb-20 overflow-hidden">
        {/* Motif d'arrière-plan discret */}
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
            <span>Solutions</span>
            <span>/</span>
            <span className="text-brand-orange font-medium">3CX-Centre de Contacts</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Texte Hero */}
            <div className="lg:col-span-8">
              <span className="text-xs font-semibold tracking-widest uppercase text-cyan-400 block mb-3">
                SOLUTION 3CX · CENTRE DE SERVICE CLIENTS CLOUD
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-[2.65rem] font-extrabold leading-[1.15] tracking-tight">
                Offrez à vos clients mobiles un service d'assistance de qualité supérieure sur plusieurs canaux
              </h1>

              <div className="w-16 h-1 bg-brand-orange my-6" />

              <p className="text-base sm:text-lg text-neutral-300 leading-relaxed max-w-2xl">
                Prenez soin de vos clients avant que vos concurrents ne le fassent. En optant pour la solution <strong>3CX-Centre de Contacts</strong> du réseau ProCom, nous vous accompagnons dans la mise en place d’un véritable <strong>Centre de Service Clients Omnicanal dans le cloud</strong>, permettant à vos équipes d’assurer en interne la gestion de toutes les interactions sur tous les canaux disponibles (<strong>Voix, SMS, Web Chat, Facebook</strong>).
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button
                  onClick={onContact}
                  className="bg-brand-orange text-white text-sm font-semibold px-7 py-3.5 hover:bg-brand-orange/90 transition-colors"
                >
                  Demander une démonstration
                </button>
                <a
                  href="#outils-centre"
                  className="text-sm font-medium text-neutral-300 hover:text-white transition-colors border-b border-neutral-600 hover:border-white pb-0.5"
                >
                  Découvrir les fonctionnalités PC
                </a>
              </div>
            </div>

            {/* Badge Partenaire Officiel 3CX */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="bg-white p-6 rounded-2xl shadow-xl flex flex-col items-center text-center max-w-xs">
                <img
                  src="/assets/3cx-partner.jpg"
                  alt="3CX Partner Certifié GTS-Infotel"
                  className="w-48 h-auto object-contain rounded-lg mb-4"
                />
                <span className="text-xs font-bold uppercase tracking-wider text-brand-navy">
                  Partenaire Agréé 3CX
                </span>
                <p className="text-[11px] text-neutral-500 mt-1">
                  Déploiement certifié, infogérance et interconnexion télécom directe au Cameroun.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. LES 4 AVANTAGES CLÉS DE LA RELATION CLIENT */}
      <section className="py-24 bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-semibold tracking-widest uppercase text-brand-orange">
              PERFORMANCE & EXPÉRIENCE CLIENT
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold tracking-tight text-brand-navy">
              Pourquoi choisir 3CX-Centre de Contacts ?
            </h2>
            <p className="mt-4 text-[15px] text-neutral-600 leading-relaxed">
              Couplée aux fonctionnalités avancées du <strong>3CX-CloudPBX</strong>, la solution s’adresse aux PME et Grandes Entreprises qui souhaitent améliorer la fidélisation client et optimiser la rentabilité de leurs équipes de téléconseillers.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ADVANTAGES.map((adv) => (
              <div
                key={adv.num}
                className="bg-white border border-neutral-200 p-7 flex flex-col justify-between hover:border-neutral-300 transition-colors shadow-sm"
              >
                <div>
                  <div className="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center mb-5">
                    {adv.icon}
                  </div>
                  <span className="text-xs font-mono font-bold text-neutral-400 block mb-1">
                    PILIER {adv.num}
                  </span>
                  <h3 className="text-lg font-bold text-neutral-900 mb-2">
                    {adv.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    {adv.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. LES OUTILS PC (WEB & WINDOWS) : SUPERVISEUR & AGENTS */}
      <section id="outils-centre" className="py-24 bg-white border-b border-neutral-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-semibold tracking-widest uppercase text-brand-blue">
              POSTES DE TRAVAIL UNIFIÉS
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold tracking-tight text-brand-navy">
              Fonctionnalités avancées des applications PC (Web &amp; Windows)
            </h2>
            <p className="mt-4 text-[15px] text-neutral-600 leading-relaxed">
              Des interfaces intuitives et puissantes conçues sur mesure pour superviser l’activité en direct et donner aux téléconseillers tous les leviers pour convertir et satisfaire vos clients.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Colonne Superviseur */}
            <div className="border border-neutral-200 bg-neutral-50/50 p-8 flex flex-col justify-between hover:border-neutral-300 transition-colors">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-2.5 h-2.5 rounded-full bg-brand-orange" />
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-orange">
                    Espace Superviseur
                  </span>
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-6">
                  Pilotage et contrôle qualité du centre
                </h3>
                <ul className="space-y-4">
                  {SUPERVISOR_FEATURES.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-neutral-700 leading-relaxed">
                      <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                        ✓
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-neutral-200 text-xs text-neutral-500 font-medium">
                Wallboard dynamique en temps réel &amp; double écoute pédagogique.
              </div>
            </div>

            {/* Colonne Agents */}
            <div className="border border-neutral-200 bg-neutral-50/50 p-8 flex flex-col justify-between hover:border-neutral-300 transition-colors">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-2.5 h-2.5 rounded-full bg-brand-blue" />
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-blue">
                    Espace Téléconseillers
                  </span>
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-6">
                  Traitement omnicanal des interactions
                </h3>
                <ul className="space-y-4">
                  {AGENT_FEATURES.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-neutral-700 leading-relaxed">
                      <span className="w-5 h-5 rounded-full bg-brand-blue/10 text-brand-blue flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                        ✓
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-neutral-200 text-xs text-neutral-500 font-medium">
                Live Chat, messagerie instantanée, SMS et bascule voix en 1 clic.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. APPEL À L'ACTION / DÉPLOIEMENT */}
      <section className="py-20 bg-brand-navy text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8">
              <span className="text-xs font-semibold tracking-widest uppercase text-cyan-400 block mb-2">
                DÉPLOIEMENT CLOUD IMMÉDIAT
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight leading-snug">
                Prêt à professionnaliser votre centre de relation client ?
              </h2>
              <p className="mt-4 text-sm sm:text-base text-neutral-300 leading-relaxed max-w-2xl">
                GTS-Infotel configure votre standard 3CX, raccorde vos numéros fixes virtuels et forme vos superviseurs pour un lancement rapide et maîtrisé.
              </p>
              <p className="mt-4 text-xs font-medium text-neutral-400">
                Audit gratuit de vos flux d’appels et estimation sur mesure sans engagement.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col items-start lg:items-end gap-4">
              <button
                onClick={onContact}
                className="w-full sm:w-auto bg-brand-orange text-white text-sm font-semibold px-8 py-4 hover:bg-brand-orange/90 transition-colors shadow-lg"
              >
                Demander un devis 3CX
              </button>
              <button
                onClick={onNavigateHome}
                className="text-xs text-neutral-400 hover:text-white transition-colors underline underline-offset-4"
              >
                ← Retour à l'accueil
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
