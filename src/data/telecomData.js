/**
 * Contenu éditorial centralisé pour le site GTS-Infotel (GTS Africa Cameroun).
 * Source : cm.gts-africa.com et brief client.
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
    'Numéro PRO personnalisé',
    'Standard vocal interactif (SVI)',
    'Enregistrement des appels',
    'Multi-postes et télétravail',
    'Transfert et routage intelligent',
    'Statistiques en temps réel',
  ],
};

export const SOLUTIONS = {
  surtitle: 'NOS SOLUTIONS',
  heading: 'Solutions de communication professionnelle',
  lead: "Des solutions conçues pour vos communications d'entreprise.",
  intro: "De l'identité téléphonique à la gestion des communications et de la relation client, GTS Africa propose un ensemble de solutions adaptées aux besoins des organisations.",
  items: [
    {
      id: 'numeros-pro',
      title: 'Numéros fixes virtuels',
      tagline: 'Une identité téléphonique professionnelle pour votre entreprise.',
      text: "Obtenez un numéro fixe virtuel permettant à votre organisation de disposer d'une identité téléphonique professionnelle pour ses communications.",
      idealFor: [
        'Identifier votre entreprise',
        'Professionnaliser vos communications',
        "Disposer d'une identité téléphonique dédiée",
        'Intégrer votre numéro à vos usages professionnels',
      ],
      cta: 'Découvrir les Numéros PRO',
      ctaHref: '#pro-number',
    },
    {
      id: 'mobinawa',
      title: 'Mobinawa',
      tagline: 'Votre communication professionnelle, pensée pour le mobile.',
      text: "Mobinawa est une plateforme mobile-first de communication unifiée B2B et B2C, intégrant un standard téléphonique virtuel adapté aux entreprises de différentes tailles. Elle permet de rapprocher les usages de téléphonie professionnelle et les besoins de communication modernes.",
      cta: 'Découvrir Mobinawa',
      ctaHref: '#procom',
    },
    {
      id: '3cx-centre-contacts',
      title: '3CX Centre de Contacts',
      tagline: 'Centralisez vos interactions avec vos clients.',
      text: "Une solution destinée aux entreprises qui souhaitent structurer et centraliser la gestion de leurs communications et interactions avec leurs clients.",
      cta: 'Découvrir la solution',
    },
    {
      id: '3cx-cloudpbx',
      title: '3CX CloudPBX & UCC',
      tagline: 'Une communication professionnelle unifiée.',
      text: "Déployez une infrastructure de communication permettant à vos équipes de travailler avec des outils de communication professionnels et unifiés.",
      cta: 'Découvrir la solution',
    },
    {
      id: 'sms-service-centre',
      title: 'SMS Service Centre',
      tagline: 'Communiquez directement avec vos clients par SMS.',
      text: "Une solution dédiée aux communications professionnelles par SMS pour les entreprises ayant besoin d'un canal direct pour leurs messages.",
      cta: 'Découvrir la solution',
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
    name: "CAMTEL",
    category: "Partenaire Réseau Stratégique",
    desc: "Opérateur public national historique de télécommunications au Cameroun",
    logo: "/assets/camtel-logo.png",
  },
  {
    name: "3CX",
    category: "Partenaire Technologique Mondial",
    desc: "Plateforme mondiale de communications unifiées & CloudPBX",
    logo: "/assets/3cx-logo.svg",
  },
  {
    name: "ART Cameroun",
    category: "Autorité de Régulation",
    desc: "Agence de Régulation des Télécommunications · Licence Catégorie 1",
    logo: "/assets/art-logo.jpg",
  },
  {
    name: "ProCom",
    category: "Réseau Opérateur",
    desc: "the Online Communication on PRO Numbers",
    logo: "/assets/procom-logo.png",
  },
  {
    name: "Mobinawa",
    category: "Plateforme Mobile Pro",
    desc: "Communications unifiées mobile-first B2B & B2C",
    logo: "/assets/mobinawa-logo.png",
  }
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
    a: "ProCom (the Online Communication on PRO Numbers) est le réseau de communication en ligne développé par GTS. Il permet aux entreprises d'acheminer et gérer leurs flux d'appels et messages professionnels sur leurs numéros PRO, sur mobile comme sur ordinateur.",
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
