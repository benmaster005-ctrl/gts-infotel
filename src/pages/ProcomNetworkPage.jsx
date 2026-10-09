/**
 * Page Dédiée : Réseau ProCom (GTS-Infotel / GTS Africa)
 * Contenu officiel extrait de la plateforme cm.gts-africa.com.
 * Remplace l'ancienne appellation GTSnetwork par ProCom.
 */

const CORE_GATEWAYS = [
  {
    name: 'Voice Number Gateway',
    desc: 'Interconnexion directe entre tous les réseaux GSM locaux et les comptes Voix (SIP TRUNK) associés aux numéros PRO attribués aux clients.',
    tag: 'Voix & SIP Trunk',
  },
  {
    name: 'SMS Number Gateway',
    desc: 'Interconnexion haute disponibilité entre tous les réseaux GSM locaux et les comptes SMS (API HTTP ou SMPP) associés aux numéros PRO.',
    tag: 'SMS API & SMPP',
  },
  {
    name: 'Customer Extranet',
    desc: 'Portail web unifié pour la visualisation par chaque client de ses données de reporting, statistiques de trafic Voix & SMS, et solde des crédits.',
    tag: 'Supervision & Solde',
  },
];

const PRO_BENEFITS = [
  'Intégration aisée à tout type de plateforme d’application, quel que soit le réseau Internet',
  'Renforce l’identité numérique de l’entreprise et la sécurisation des interactions avec les clients mobiles dans un climat de confiance',
  'Gestion centralisée et prise de contrôle de toutes les communications professionnelles avec les clients mobiles via les canaux Voix, SMS/USSD, WhatsApp',
  'Accès Web aux rapports et statistiques de trafic Voix et SMS en temps réel',
  'Plus besoin d’utiliser des numéros mobiles personnels (non autorisés) ou des numéros fixes sur des lignes filaires (technologie obsolète)',
  'Possibilité d’utiliser le numéro PRO comme code marchand unique lié au compte PRO-Money™ de l’entreprise, quel que soit le prestataire de paiement',
  'Possibilité pour les clients d’enregistrer dans leur répertoire le numéro PRO officiel d’identification de l’entreprise',
  'Protection absolue des numéros mobiles des collaborateurs en tant que données personnelles sensibles.',
];

const CLOUD_PLATFORMS = [
  {
    title: 'Cloud PBX & Communication unifiée',
    desc: 'Standard de téléphonie fixe-mobile virtuel, collaboration (messagerie instantanée & visioconférence), centre de contact omnicanal (Voix, Web Chat, WhatsApp) avec intégration CRM/IT.',
    badge: 'Téléphonie & Visio',
  },
  {
    title: 'WebSMS & Campagnes',
    desc: 'Plateforme de gestion de campagnes marketing (BulkSMS), Chat SMS interactif et fourniture de services SMS (Code-Gagnant, Vote, Quiz, alertes transactionnelles).',
    badge: 'Marketing & Alertes',
  },
  {
    title: 'CRM / Helpdesk Omnicanal',
    desc: 'Remontée automatique de fiche client lors de la réception d’appels et chat multicanal (Webform, WebChat, Email, SMS, Telegram) avec gestion de ticketing.',
    badge: 'Support & Tickets',
  },
  {
    title: 'WhatsApp Business API',
    desc: 'Plateforme de gestion de campagnes promotionnelles et chat WhatsApp automatisé pour le service client avec routage et ticketing.',
    badge: 'Messagerie Instantanée',
  },
  {
    title: 'Mobinawa Mobile App',
    desc: 'Application mobile de standard virtuel en libre-service pour les professionnels locaux et la diaspora, pour émettre et recevoir des appels à des tarifs locaux.',
    badge: 'Application Mobile',
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
            <span className="text-brand-orange font-medium">Réseau ProCom</span>
          </nav>

          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-semibold tracking-widest uppercase text-cyan-400">
                1ER RÉSEAU VIRTUEL PANAFRICAIN A2P
              </span>
              <span className="text-xs font-mono bg-white/10 px-2 py-0.5 rounded text-neutral-300">
                Décret Décembre 2022
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-[2.65rem] font-extrabold leading-[1.15] tracking-tight">
              Le réseau ProCom, le support de la transformation numérique réussie des entreprises
            </h1>

            <div className="w-16 h-1 bg-brand-orange my-6" />

            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
              Le <strong>réseau ProCom</strong> est le premier réseau virtuel panafricain de communication A2P d’entreprise, basé sur des <strong>numéros PRO</strong> (fixes virtuels multicanaux) d’identification des personnes morales sur des plateformes d’application. Il permet d’offrir différents services numériques accessibles aux utilisateurs (clients et collaborateurs identifiés par numéros mobiles) via plusieurs canaux : <strong>Voix, SMS, USSD, WhatsApp, Email, Web et applications mobiles</strong>.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={onContact}
                className="bg-brand-orange text-white text-sm font-semibold px-7 py-3.5 hover:bg-brand-orange/90 transition-colors"
              >
                Demander un raccordement ProCom
              </button>
              <a
                href="#architecture"
                className="text-sm font-medium text-neutral-300 hover:text-white transition-colors border-b border-neutral-600 hover:border-white pb-0.5"
              >
                Consulter l’architecture réseau
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CONTEXTE RÉGLEMENTAIRE & HISTORIQUE */}
      <section className="py-20 bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-4 text-[15px] text-neutral-700 leading-relaxed">
              <span className="text-xs font-semibold tracking-widest uppercase text-brand-orange block">
                INNOVATION TÉLÉCOM & CADRE LÉGAL
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy tracking-tight">
                Une décennie de R&amp;D et un partenariat historique avec CAMTEL
              </h2>
              <p>
                Après une dizaine d’années de recherche et développement et grâce à des partenariats technologiques de premier plan, le <strong>réseau ProCom</strong> a été conçu pour être déployé dans le cloud en partenariat avec les opérateurs historiques de téléphonie fixe de chaque pays africain.
              </p>
              <p>
                Le <strong>Cameroun est le tout premier pays de référence</strong> du réseau ProCom, déployé dès 2021 pour le compte de GTS-Infotel Cameroon, 1er opérateur titulaire de licence disposant d’une tranche officielle de numéros fixes virtuels, grâce à son partenariat avec <strong>CAMTEL</strong>.
              </p>
              <p className="border-l-2 border-brand-orange pl-4 italic text-neutral-600">
                En décembre 2022, les Pouvoirs publics ont promulgué un nouveau décret sur les ressources de numérotation, introduisant légalement cette nouvelle catégorie de numéros fixes virtuels dédiés aux plateformes d’application, rendant obligatoire l’identification des personnes morales pour leurs communications professionnelles.
              </p>
            </div>

            <div className="lg:col-span-5 bg-white border border-neutral-200 p-8 shadow-sm">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-blue block mb-2">
                Écosystème Convergence
              </span>
              <h3 className="text-lg font-bold text-neutral-900 mb-3">
                Convergence Télécom &amp; PRO-Money™
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed mb-4">
                Sur la base des numéros PRO, le réseau ProCom propulse un nouvel écosystème numérique associant la digitalisation des communications et celle du paiement mobile USSD entre comptes Mobile-Money et compte <strong>PRO-Money™</strong> de l’entreprise, agissant comme code marchand universel unique.
              </p>
              <div className="text-xs text-neutral-500 pt-3 border-t border-neutral-100 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span>Inclusion financière accélérée des TPE, PME &amp; Startups</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ARCHITECTURE DU RÉSEAU PROCOM */}
      <section id="architecture" className="py-24 bg-white border-b border-neutral-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-semibold tracking-widest uppercase text-brand-blue">
              CŒUR DE RÉSEAU DE CLASSE OPÉRATEUR
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold tracking-tight text-brand-navy">
              Architecture technique du réseau ProCom
            </h2>
            <p className="mt-4 text-[15px] text-neutral-600 leading-relaxed">
              Le cœur de réseau ProCom est structuré autour de 3 passerelles télécoms de classe opérateur pour acheminer l'ensemble des flux multimédias vers les plateformes clientes.
            </p>
          </div>

          {/* Schéma officiel d'architecture ProCom */}
          <div className="bg-neutral-50 border border-neutral-200 p-6 sm:p-8 mb-12 flex justify-center">
            <img
              src="/assets/procom-architecture-full.png"
              alt="Architecture complète du réseau ProCom"
              className="max-w-full h-auto object-contain"
            />
          </div>

          {/* Les 3 plateformes passerelles */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CORE_GATEWAYS.map((gw, idx) => (
              <div
                key={idx}
                className="border border-neutral-200 bg-neutral-50/50 p-6 flex flex-col justify-between hover:bg-white hover:border-brand-navy/30 transition-all"
              >
                <div>
                  <span className="text-[11px] font-mono font-bold text-brand-blue bg-brand-blue/5 px-2 py-0.5 uppercase tracking-wider inline-block mb-3">
                    {gw.tag}
                  </span>
                  <h3 className="text-base font-bold text-neutral-900 mb-2">
                    {gw.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    {gw.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. NUMÉROS PRO : CARACTÉRISTIQUES & AVANTAGES */}
      <section className="py-24 bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-12">
            <div className="lg:col-span-7">
              <span className="text-xs font-semibold tracking-widest uppercase text-brand-orange">
                IDENTITÉ TÉLÉPHONIQUE UNIQUE
              </span>
              <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold tracking-tight text-brand-navy">
                Fonctionnalités &amp; Avantages des Numéros PRO
              </h2>
              <p className="mt-4 text-[15px] text-neutral-600 leading-relaxed">
                Le numéro PRO permet à toute organisation de déployer sans investissement lourd des services conversationnels, promotionnels et transactionnels unifiés.
              </p>
            </div>
            <div className="lg:col-span-5 flex justify-center">
              <img
                src="/assets/procom-numeros-pro.png"
                alt="Numéros PRO multicanaux"
                className="max-h-60 w-auto object-contain"
              />
            </div>
          </div>

          {/* Liste des 8 avantages majeurs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {PRO_BENEFITS.map((item, idx) => (
              <div
                key={idx}
                className="bg-white border border-neutral-200 p-5 flex items-start gap-3.5 hover:border-neutral-300 transition-colors"
              >
                <span className="w-5 h-5 rounded-full bg-brand-orange/10 text-brand-orange flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                  ✓
                </span>
                <p className="text-xs sm:text-sm text-neutral-800 leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PLATEFORMES CLOUD INTÉGRÉES */}
      <section className="py-24 bg-white border-b border-neutral-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-semibold tracking-widest uppercase text-brand-blue">
              ÉCOSYSTÈME DE SERVICES NUMÉRIQUES
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold tracking-tight text-brand-navy">
              Plateformes cloud intégrées au réseau ProCom
            </h2>
            <p className="mt-4 text-[15px] text-neutral-600 leading-relaxed">
              Le réseau ProCom s’intègre nativement à une suite complète de solutions d’entreprise pour couvrir chaque dimension de votre relation client et de vos communications internes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CLOUD_PLATFORMS.map((plat, idx) => (
              <div
                key={idx}
                className="border border-neutral-200 bg-neutral-50/50 p-6 flex flex-col justify-between hover:border-neutral-300 transition-colors"
              >
                <div>
                  <span className="text-[10px] font-semibold text-brand-orange uppercase tracking-wider block mb-2">
                    {plat.badge}
                  </span>
                  <h3 className="text-base font-bold text-neutral-900 mb-2">
                    {plat.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    {plat.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. AVANTAGES POUR L'ÉCOSYSTÈME */}
      <section className="py-24 bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-semibold tracking-widest uppercase text-brand-orange">
              IMPACT POUVOIRS PUBLICS &amp; MARCHÉ
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold tracking-tight text-brand-navy">
              Un réseau au service de l'ensemble de l'écosystème
            </h2>
            <p className="mt-4 text-[15px] text-neutral-600 leading-relaxed">
              Projet disruptif de l’économie numérique, la mise en œuvre du réseau ProCom apporte des bénéfices tangibles à toutes les parties prenantes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ECOSYSTEM_STAKEHOLDERS.map((stk, idx) => (
              <div
                key={idx}
                className="bg-white border border-neutral-200 p-6 flex flex-col justify-between hover:shadow-sm transition-shadow"
              >
                <div>
                  <span className="text-xs font-mono font-bold text-neutral-400 block mb-1">
                    BÉNÉFICIAIRE 0{idx + 1}
                  </span>
                  <h3 className="text-base font-bold text-neutral-900 mb-2">
                    {stk.role}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    {stk.benefit}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. APPEL À L'ACTION / RACCORDEMENT */}
      <section className="py-20 bg-brand-navy text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8">
              <span className="text-xs font-semibold tracking-widest uppercase text-cyan-400 block mb-2">
                REJOIGNEZ LE RÉSEAU PROCOM
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight leading-snug">
                Connectez votre organisation au 1er réseau télécom de numéros PRO
              </h2>
              <p className="mt-4 text-sm sm:text-base text-neutral-300 leading-relaxed max-w-2xl">
                GTS-Infotel met en service vos passerelles SIP Trunk, API SMS et portail Selfcare avec l'interconnexion CAMTEL garantie.
              </p>
              <p className="mt-4 text-xs font-medium text-neutral-400">
                Opérateur agréé ART Catégorie 1 · Support d'ingénierie basé à Yaoundé et Douala.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col items-start lg:items-end gap-4">
              <button
                onClick={onContact}
                className="w-full sm:w-auto bg-brand-orange text-white text-sm font-semibold px-8 py-4 hover:bg-brand-orange/90 transition-colors shadow-lg"
              >
                Demander un raccordement
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
