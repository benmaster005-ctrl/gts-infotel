/**
 * Contenu éditorial centralisé pour le site GTS-Infotel (GTS Africa Cameroun).
 * Version combinée : structure et sections éditoriales précédentes avec
 * catalogue des solutions et partenaires actuels.
 */

export const NAV_LINKS = [
  { label: 'Solutions', href: '#solutions' },
  { label: 'PRO Number', href: '#pro-number' },
  { label: 'ProCom', href: '#procom' },
  { label: 'Pourquoi GTS', href: '#pourquoi' },
  { label: 'Partenaires', href: '#partenaires' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export const HERO = {
  heading: 'Votre entreprise mérite une identité téléphonique professionnelle.',
  lead: "De l'identité téléphonique à la gestion des communications et de la relation client, GTS Africa propose un ensemble de solutions adaptées aux besoins des organisations.",
  cta: 'Demander une démo',
  ctaSecondary: 'Découvrir nos solutions',
};

export const BENEFITS = {
  heading: "Un numéro professionnel, ce n'est pas qu'un numéro.",
  items: [
    {
      title: 'Identifiez votre entreprise',
      text: "Disposez d'une identité téléphonique professionnelle dédiée, reconnue par vos clients et partenaires.",
    },
    {
      title: 'Professionnalisez vos communications',
      text: "Intégrez votre numéro à vos usages professionnels et renforcez la crédibilité de chaque échange.",
    },
    {
      title: 'Centralisez vos interactions',
      text: "Structurez et centralisez la gestion de vos communications et interactions avec vos clients sur une plateforme unifiée.",
    },
  ],
};

export const PRO_NUMBER = {
  heading: 'Numéros fixes virtuels',
  subheading: 'Une identité téléphonique professionnelle pour votre entreprise.',
  text: "Obtenez un numéro fixe virtuel permettant à votre organisation de disposer d'une identité téléphonique professionnelle pour ses communications. Un numéro, trois canaux : Voix, SMS, WhatsApp.",
  idealFor: [
    'Identifier votre entreprise',
    'Professionnaliser vos communications',
    "Disposer d'une identité téléphonique dédiée",
    'Intégrer votre numéro à vos usages professionnels',
  ],
  capabilities: [
    { label: 'Disponible sur tous les réseaux Internet & mobiles' },
    { label: 'Accessible aux abonnés fixes & mobiles' },
    { label: 'Appels simultanés entrants & sortants' },
    { label: "Amélioration de l'expérience utilisateur" },
    { label: 'Intégration aisée sur toute plateforme VoIP, SMS & IT' },
    { label: 'Rapports & statistiques de trafic Voix, SMS' },
    { label: "Renforce l'identité numérique de l'entreprise" },
  ],
  channels: ['Voix', 'SMS', 'WhatsApp'],
};

export const PROCOM = {
  label: 'Réseau ProCom',
  tagline: 'the Online Communication on PRO Numbers',
  heading: 'Un numéro PRO.\nPlusieurs possibilités.',
  text: "Recevez et émettez des appels professionnels depuis votre smartphone ou PC grâce au réseau ProCom, sans investissement matériel. Un standard de classe opérateur accessible partout.",
  features: [
    'Numéro PRO personnalisé & universel',
    'Standard vocal interactif (SVI)',
    'Enregistrement des appels & supervision',
    'Multi-postes et télétravail unifié',
    'Transfert et routage intelligent',
    'Statistiques et rapports en temps réel',
  ],
};

export const SOLUTIONS = {
  surtitle: 'CATALOGUE OFFICIEL DES SOLUTIONS PROCOM',
  heading: 'Solutions de communication professionnelle',
  lead: "Des solutions conçues pour chaque besoin d'organisation et de transformation numérique.",
  items: [
    {
      id: 'numero-pro',
      title: 'Numéro PRO',
      badge: 'Identité Téléphonique Multicanale',
      image: '/assets/numero-pro-badge.png',
      tagline: 'Un numéro fixe virtuel multicanal (Voix, SMS, WhatsApp, Mobinawa).',
      text: "Attribué aux organisations et professionnels pour centraliser toutes leurs communications conversationnelles, transactionnelles et promotionnelles, via diverses plateformes numériques.",
      features: [
        'Standard téléphonique virtuel',
        'Centre de contact client',
        'Intégration CRM & Systèmes IT',
        'Connexion réseaux sociaux & WhatsApp',
      ],
      cta: 'Commander un Numéro PRO',
    },
    {
      id: 'mobinawa',
      title: 'Mobinawa',
      badge: 'Application Mobile Panafricaine',
      image: '/assets/mobinawa-banner.jpg',
      tagline: 'Téléphonie et communication unifiée dédiée aux professionnels.',
      text: "Application disponible gratuitement sur Android et iOS permettant des échanges B2B et B2C où les professionnels sont identifiés par leurs nom/fonction/organisation plutôt que par leurs numéros personnels.",
      features: [
        'Profil Consommateur : activation via OTP SMS/WhatsApp',
        'Profil Indépendant : souscription Mobinawa-PRO',
        'Profil Collaborateur : intégré à Mobinawa-Business',
        'Annuaire ProCom : recherche d’entreprises et accès direct aux services numériques',
      ],
      cta: 'Découvrir Mobinawa',
    },
    {
      id: 'mobinawa-pro',
      title: 'Mobinawa-PRO',
      badge: 'Pour Professionnels & Diaspora',
      image: '/assets/mobinawa-mw.png',
      tagline: 'Votre Numéro PRO directement sur smartphone pour tous vos appels professionnels.',
      text: "Service permettant à tout professionnel, en local ou dans la diaspora, de disposer d'un Numéro PRO sur son application Mobinawa pour ses appels professionnels.",
      features: [
        'Idéal pour Professions libérales',
        'Commerçants & Distributeurs',
        'Entrepreneurs & Startups',
        'Consultants indépendants & Diaspora',
      ],
      cta: 'Souscrire à Mobinawa-PRO',
    },
    {
      id: 'mobinawa-business',
      title: 'Mobinawa-Business',
      badge: 'Plateforme UCaaS & IPBX Cloud',
      image: '/assets/mobinawa-business.png',
      tagline: 'Standard téléphonique virtuel (IPBX) et communications unifiées pour entreprises.',
      text: "Centralise l'ensemble des communications professionnelles des collaborateurs via l'application Mobinawa sur smartphone et/ou PC. Adaptée aux organisations de toutes tailles.",
      features: [
        'Contacts internes/externes, groupes de discussion et visioconférence',
        'Communications audio/vidéo et messagerie multimédia',
        'Annuaire d’entreprise et appels téléphoniques professionnels',
        'Émission et réception d’appels locaux avec Numéro PRO',
      ],
      cta: 'Déployer Mobinawa-Business',
    },
    {
      id: '3cx-callcenter',
      title: '3CX-CallCenter',
      badge: 'Centre d’Appels & WhatsApp TPE/PME',
      image: '/assets/3cx-logo.svg',
      tagline: 'Centre d’appels et de messagerie WhatsApp pour équipes de support.',
      text: "Plateforme intégrée en option à Mobinawa-Business, adaptée aux TPE/PMEs souhaitant améliorer les performances de leur personnel interne de gestion du centre de service clients.",
      features: [
        'Standard Vocal Interactif (SVI)',
        'Gestion des files d’attente intelligentes',
        'Supervision en temps réel des agents',
        'Enregistrement d’appels et campagnes d’appels sortants',
      ],
      cta: 'Découvrir 3CX-CallCenter',
    },
    {
      id: 'digicontacts',
      title: 'DigiContacts',
      badge: 'Centre de Contact Omnicanal Grandes Entreprises',
      image: '/assets/digicontacts-logo.png',
      tagline: 'Plateforme omnicanale Voix, SMS, WhatsApp, Email avec CRM intégré.',
      text: "Déployable dans le cloud ou sur site, et intégrable à Mobinawa-Business, particulièrement adaptée aux grandes organisations ayant des besoins avancés de relation client et d'intégration à leur SI.",
      features: [
        'Omnicanalité complète : Voix, SMS, WhatsApp, Email',
        'Gestion de tickets et chatbot WhatsApp automatisé',
        'Campagnes d’appels et de SMS en masse',
        'Fiches clients personnalisables et interconnexion aux processus métiers',
      ],
      cta: 'Découvrir DigiContacts',
    },
    {
      id: 'procom-crm',
      title: 'ProComCRM',
      badge: 'CRM Omnicanal & Campagnes',
      image: '/assets/procom-logo.png',
      tagline: 'Gestion complète du parcours client, de la prospection à la fidélisation.',
      text: "Intégré en option à 3CX-CallCenter, ProComCRM offre une gestion centralisée de fiches clients personnalisables et s'intègre au système d'information de l'entreprise pour automatiser les processus métiers.",
      features: [
        'Module complet de campagnes marketing omnicanales',
        'Suivi du cycle de vie client de bout en bout',
        'Fiches clients enrichies et automatisées',
        'Synchronisation avec le système d’information',
      ],
      cta: 'Découvrir ProComCRM',
    },
  ],
};

export const WHY_GTS = {
  heading: 'Pourquoi choisir GTS-Infotel',
  text: "1er opérateur télécom alternatif de numéros fixes virtuels multi-services des entreprises au Cameroun. Infrastructure robuste, conformité réglementaire et support local depuis plus de 20 ans.",
  guarantees: [
    {
      title: "Partenariat Stratégique CAMTEL",
      desc: "Interconnexion directe avec l'opérateur public national CAMTEL garantissant la souveraineté, la stabilité des routes et une couverture totale au Cameroun."
    },
    {
      title: "Partenariat Technologique 3CX Certifié",
      desc: "Déploiement d'architectures CloudPBX et centres de contacts unifiés certifiés 3CX avec QoS et haute disponibilité."
    },
    {
      title: "Conformité & Licence Réglementaire ART Catégorie 1",
      desc: "Opérateur agréé par l'Agence de Régulation des Télécommunications (ART) du Cameroun sous le régime officiel de Catégorie 1."
    },
    {
      title: "Support Technique & Proximité Locale 24/7",
      desc: "Équipes d'ingénieurs et techniciens basées à Yaoundé et Douala pour une assistance réactive 24h/24 sans intermédiaire."
    }
  ],
  stats: [
    { value: '20+', label: "Années d'expérience" },
    { value: 'Pionnier', label: 'Télécom VAS en Afrique' },
    { value: 'CAMTEL', label: 'Interconnexion Stratégique' },
    { value: 'Cat. 1', label: 'Licence ART Cameroun' },
  ],
};

export const PARTNERS = [
  {
    name: 'CAMTEL',
    category: 'Partenaire Réseau Stratégique',
    desc: "Opérateur historique de téléphonie fixe au Cameroun · Décret présidentiel 2022",
    logo: '/assets/camtel-logo.png',
  },
  {
    name: 'CIRPACK',
    category: 'Partenaire Technologique Cœur de Réseau',
    desc: "Infrastructure Softswitch & Core Network télécom de classe opérateur",
    logo: '/assets/cirpack-logo.jpg',
  },
  {
    name: '3CX',
    category: 'Partenaire Technologique Mondial',
    desc: "Plateforme de communications unifiées & CloudPBX 3CX-CallCenter",
    logo: '/assets/3cx-logo.svg',
  },
  {
    name: 'DigiContacts',
    category: 'Partenaire Centre de Contact Omnicanal',
    desc: "Plateforme omnicanale CRM & Service Client pour grandes organisations",
    logo: '/assets/digicontacts-logo.png',
  },
  {
    name: 'ART Cameroun',
    category: 'Autorité de Régulation',
    desc: "Agence de Régulation des Télécommunications · Licence Officielle Catégorie 1",
    logo: '/assets/art-logo.jpg',
  },
];

export const PROCESS = {
  heading: 'Commencez simplement',
  steps: [
    {
      num: '01',
      title: 'Consultation & Audit',
      text: "Analyse de vos flux d'appels et recommandation de l'architecture idéale.",
    },
    {
      num: '02',
      title: 'Configuration & Test',
      text: 'Attribution de votre numéro, paramétrage du SVI et tests de qualité audio.',
    },
    {
      num: '03',
      title: 'Lancement & Support',
      text: 'Mise en service immédiate et accompagnement technique continu.',
    },
  ],
};

export const FAQ_ITEMS = [
  {
    q: "Qu'est-ce qu'un numéro fixe virtuel ?",
    a: "Un numéro fixe virtuel est un numéro téléphonique professionnel hébergé dans le cloud. Il vous permet de disposer d'une identité téléphonique dédiée sans infrastructure physique, avec des fonctionnalités avancées : SVI, musique d'attente, renvoi d'appels et multi-canaux (Voix, SMS, WhatsApp).",
  },
  {
    q: "Quel est le rôle du partenariat avec CAMTEL ?",
    a: "CAMTEL est le partenaire stratégique national de GTS-Infotel. Ce partenariat permet l'acheminement fiable et réglementé des communications d'entreprise sur le réseau public camerounais, assurant ainsi une qualité audio optimale, des interconnexions directes et une haute disponibilité.",
  },
  {
    q: "Qu'est-ce que le réseau ProCom ?",
    a: "ProCom (the Online Communication on PRO Numbers) est le 1er réseau de communication professionnelle de nouvelle génération développé par GTS. Il permet aux entreprises d'acheminer et gérer leurs flux d'appels et messages professionnels sur leurs numéros PRO, sur mobile comme sur ordinateur.",
  },
  {
    q: "Qu'est-ce que Mobinawa ?",
    a: "Mobinawa est une plateforme mobile-first de communication unifiée B2B et B2C connectée au réseau ProCom. Elle intègre un standard téléphonique virtuel adapté aux entreprises de différentes tailles et rapproche les usages de téléphonie professionnelle des besoins de communication modernes.",
  },
  {
    q: "En quoi consiste l'intégration avec 3CX ?",
    a: "GTS-Infotel intègre les technologies 3CX pour fournir aux entreprises un standard CloudPBX complet, un centre de contacts multi-agents et des outils de communications unifiées (UCC) interconnectés à ses numéros professionnels.",
  },
  {
    q: "GTS-Infotel est-il un opérateur agréé par l'État ?",
    a: "Oui. GTS-Infotel est titulaire de la Licence de Catégorie 1 délivrée par l'Agence de Régulation des Télécommunications (ART) du Cameroun, garantissant la légalité, la conformité réglementaire et la sécurité de toutes vos communications d'entreprise.",
  },
];

export const FOOTER = {
  tagline: "1er opérateur télécom alternatif de numéros fixes virtuels multi-services des entreprises au Cameroun.",
  address: "Rue de l'indépendance, Immeuble Face Calafatas, Yaoundé",
  phone: "+237 242 232 000",
  email: 'contact@gts-infotel.com',
  website: 'cm.gts-africa.com',
};
