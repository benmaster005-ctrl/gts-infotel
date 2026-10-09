/**
 * Page Dédiée : Numéro Fixe Virtuel / Numéro PRO
 * Contenu officiel GTS-Infotel (extrait de la plateforme cm.gts-africa.com).
 */

const ACCOUNTS = [
  {
    title: 'Un compte SIP',
    desc: 'À configurer sur toute plateforme IPBX et/ou plateforme de centre d’appel, permettant de passer et de recevoir des appels Voix en simultané.',
    icon: (
      <svg className="w-6 h-6 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    title: 'Un compte API SMS',
    desc: 'À configurer sur notre plateforme SMS-Center et/ou sur votre plateforme IT, permettant d’envoyer des messages (SMS-MT) et de recevoir des messages (SMS-MO).',
    icon: (
      <svg className="w-6 h-6 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    title: 'Un compte Selfcare',
    desc: 'Sur le portail client, permettant de consulter le reporting & statistique de trafic Voix & SMS, ainsi que le solde des crédits Voix et SMS (en mode prépayé).',
    icon: (
      <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
];

const FEATURES = [
  {
    icon: '/assets/numero-pro/integration-voip.svg',
    title: 'Intégration aisée sur tout type de plateforme VoIP, SMS & IT/CRM incluant WhatsApp et Telegram, à travers tous les réseaux Internet',
  },
  {
    icon: '/assets/numero-pro/accessible-mobiles.svg',
    title: 'Accessible à tous les abonnés mobiles via leurs réseaux GSM ou Internet',
  },
  {
    icon: '/assets/numero-pro/simultaneous-calls.svg',
    title: 'Supporte plusieurs appels simultanés (entrants et sortants) : plus aucun appel perdu',
  },
  {
    icon: '/assets/numero-pro/user-experience.svg',
    title: "Améliore l'expérience utilisateur (clients et collaborateurs)",
  },
  {
    icon: '/assets/numero-pro/free-calls.svg',
    title: 'Appels et SMS gratuits entre les numéros GTS',
  },
  {
    icon: '/assets/numero-pro/digital-identity.png',
    title: "Renforce l'identité numérique de l'entreprise",
  },
  {
    icon: '/assets/numero-pro/virtual-cloud.svg',
    title: "Plus besoin d'utiliser des numéros mobiles (non autorisés) ou des numéros fixes sur des lignes filaires (en voie de disparition) pour les communications professionnelles",
  },
  {
    icon: '/assets/numero-pro/cost-reduction.svg',
    title: 'Réduction de plus de 50% du coût des appels vers numéros fixes/mobiles locaux',
  },
  {
    icon: '/assets/numero-pro/web-reports.svg',
    title: 'Accès Web aux rapports et statistiques de trafic Voix & SMS',
  },
];

export default function NumeroProPage({ onContact, onNavigateHome }) {
  return (
    <div className="bg-white">
      {/* 1. HERO DE LA SOLUTION NUMÉRO FIXE VIRTUEL */}
      <section className="relative bg-brand-navy text-white pt-36 pb-20 overflow-hidden">
        {/* Motif subtil d'arrière-plan */}
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
            <span className="text-brand-orange font-medium">Numéro PRO</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Texte & Argumentaire Hero */}
            <div className="lg:col-span-7">
              <span className="text-xs font-semibold tracking-widest uppercase text-cyan-400 block mb-3">
                SOLUTION TÉLÉCOM D'ENTREPRISE
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold leading-[1.15] tracking-tight">
                Renforcez l’identité numérique de votre entreprise avec un Numéro GTS
              </h1>

              <div className="w-16 h-1 bg-brand-orange my-6" />

              <p className="text-base sm:text-lg text-neutral-300 leading-relaxed max-w-2xl">
                Fort de son partenariat stratégique avec l’opérateur historique <strong>CAMTEL</strong>, GTS-Infotel innove en introduisant au Cameroun une offre de <strong>numéros fixes virtuels commercialisés comme numéros GTS</strong> dédiés aux plateformes de services TIC (<strong>VoIP, SMS, IT</strong>) accessibles à tous les abonnés fixes &amp; mobiles locaux.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button
                  onClick={onContact}
                  className="bg-brand-orange text-white text-sm font-semibold px-7 py-3.5 hover:bg-brand-orange/90 transition-colors"
                >
                  Commander un Numéro PRO
                </button>
                <a
                  href="#comptes-activation"
                  className="text-sm font-medium text-neutral-300 hover:text-white transition-colors border-b border-neutral-600 hover:border-white pb-0.5"
                >
                  Voir les 3 comptes d'activation
                </a>
              </div>
            </div>

            {/* Visuel officiel : image-numero */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative p-2 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm max-w-sm sm:max-w-md">
                <img
                  src="/assets/numero-pro/image-numero.png"
                  alt="Numéro Fixe Virtuel GTS"
                  className="w-full h-auto object-contain rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CIBLE & LES 3 COMPTES D'ACTIVATION FOURNIS */}
      <section id="comptes-activation" className="py-24 bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-semibold tracking-widest uppercase text-brand-orange">
              ACTIVATION & ARCHITECTURE TECHNIQUE
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold tracking-tight text-brand-navy">
              Une infrastructure complète mise à votre disposition
            </h2>
            <div className="mt-4 space-y-3 text-[15px] text-neutral-600 leading-relaxed">
              <p>
                Notre offre de numéros GTS s’adresse aux <strong>Entreprises &amp; Administrations de toutes tailles</strong> souhaitant disposer d’un numéro d’identification pour tous leurs services de communication &amp; marketing mobile.
              </p>
              <p>
                Elle s’adresse également à tout <strong>fournisseur de services TIC</strong> disposant d’une base de clients professionnels et souhaitant enrichir son offre de services de communications numériques.
              </p>
              <p className="font-medium text-neutral-900 pt-2">
                Selon vos besoins, l’activation de votre numéro fixe virtuel (numéro GTS) consiste en la mise à votre disposition des 3 comptes suivants :
              </p>
            </div>
          </div>

          {/* Grille des 3 comptes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ACCOUNTS.map((acc, idx) => (
              <div
                key={idx}
                className="bg-white border border-neutral-200 p-8 flex flex-col justify-between hover:border-neutral-300 transition-colors shadow-sm"
              >
                <div>
                  <div className="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center mb-6">
                    {acc.icon}
                  </div>
                  <span className="text-xs font-mono font-bold text-neutral-400 block mb-1">
                    COMPTE 0{idx + 1}
                  </span>
                  <h3 className="text-lg font-bold text-neutral-900 mb-3">
                    {acc.title}
                  </h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {acc.desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center gap-2 text-xs font-semibold text-brand-navy">
                  <span>Inclus dans l'activation</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PRINCIPAUX AVANTAGES ET FONCTIONNALITÉS */}
      <section className="py-24 bg-white border-b border-neutral-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <span className="text-xs font-semibold tracking-widest uppercase text-brand-blue">
              VALEUR AJOUTÉE & CONFORMITÉ
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold tracking-tight text-brand-navy">
              Principaux avantages et fonctionnalités des numéros GTS
            </h2>
            <p className="mt-4 text-[15px] text-neutral-600 leading-relaxed">
              Une solution de rupture technologique pour moderniser vos communications professionnelles, éliminer les coûts cachés et garantir une disponibilité 24/7.
            </p>
          </div>

          {/* Grille des 9 fonctionnalités avec pictogrammes officiels */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FEATURES.map((feat, idx) => (
              <div
                key={idx}
                className="border border-neutral-200 bg-neutral-50/50 p-6 flex flex-col justify-between hover:bg-white hover:border-brand-navy/30 transition-all"
              >
                <div>
                  {/* Pictogramme officiel */}
                  <div className="h-14 flex items-center justify-start mb-5">
                    <img
                      src={feat.icon}
                      alt={`Fonctionnalité ${idx + 1}`}
                      className="max-h-12 max-w-[56px] object-contain"
                    />
                  </div>
                  <span className="text-[11px] font-mono font-bold text-neutral-400 block mb-2">
                    POINT 0{idx + 1}
                  </span>
                  <h3 className="text-sm font-bold text-neutral-900 leading-snug">
                    {feat.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. APPEL À L'ACTION / COMMANDE */}
      <section className="py-20 bg-brand-navy text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8">
              <span className="text-xs font-semibold tracking-widest uppercase text-cyan-400 block mb-2">
                TRANSFORMATION NUMÉRIQUE
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight leading-snug">
                Communiquez votre numéro virtuel unique et faites-le enregistrer par vos clients
              </h2>
              <p className="mt-4 text-sm sm:text-base text-neutral-300 leading-relaxed max-w-2xl">
                En complément des numéros GTS, le réseau ProCom intègre des plateformes cloud de communication à valeur ajoutée, en vue de répondre efficacement aux divers besoins de transformation numérique des entreprises, à l'ère de la mobilité et du télétravail.
              </p>
              <p className="mt-4 text-xs font-medium text-neutral-400">
                Exprimez vos besoins ici et nos conseillers vous recontacteront immédiatement pour finaliser votre commande.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col items-start lg:items-end gap-4">
              <button
                onClick={onContact}
                className="w-full sm:w-auto bg-brand-orange text-white text-sm font-semibold px-8 py-4 hover:bg-brand-orange/90 transition-colors shadow-lg"
              >
                Finaliser ma commande
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
