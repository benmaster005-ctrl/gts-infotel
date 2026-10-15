/**
 * Contenu éditorial centralisé pour le site GTS-Infotel (GTS Africa Cameroun).
 * Version combinée : structure et sections éditoriales précédentes avec
 * catalogue des solutions et partenaires actuels.
 */

export const NAV_LINKS = [
  { label: 'Accueil', href: '#' },
  { label: 'Solutions', href: '#solutions', hasDropdown: true },
  { label: 'Numéro PRO', href: '#pro-number' },
  { label: 'Pourquoi GTS', href: '#pourquoi' },
  { label: 'À propos', href: '#a-propos' },
  { label: 'Contact', href: '#contact' },
];

export const HERO = {
  heading: "L'identité téléphonique et numérique universelle des entreprises en Afrique.",
  lead: "De l'attribution de Numéros PRO (fixes virtuels multicanaux) au déploiement du réseau souverain ProCom, GTS-Infotel bâtit l'infrastructure télécom de confiance pour l'identification des personnes morales, la communication unifiée et l'interopérabilité des services numériques.",
  cta: 'Demander une démo',
  ctaSecondary: 'Découvrir nos solutions',
};

export const BENEFITS = {
  heading: "Le Numéro PRO : bien plus qu'un numéro, le socle de votre confiance numérique.",
  items: [
    {
      title: "Identité officielle des personnes morales",
      text: "Tout comme le mobile identifie la personne physique, le Numéro PRO consacre l'identité officielle de l'entreprise. Attribut KYC de référence, il dialogue avec le RCCM, le fisc, les banques et les fintechs.",
    },
    {
      title: 'Souveraineté & protection des données',
      text: "Reprenez la maîtrise de vos communications professionnelles. Séparez hermétiquement vie pro et vie perso, et protégez vos données stratégiques face à la dépendance aux plateformes OTT étrangères.",
    },
    {
      title: "Sécurité A2P & rempart anti-fraude",
      text: "Éliminez l'usurpation d'identité et les fraudes Mobile Money liées aux SIM anonymes et boîtiers SIMBox. Bénéficiez de routes directes certifiées pour vos flux Voix, SMS OTP et transactions.",
    },
  ],
};

export const PRO_NUMBER = {
  heading: 'Numéros PRO Fixes Virtuels',
  subheading: 'L’identifiant numérique universel et souverain pour votre entreprise.',
  text: "Conforme au décret n°2022/10902 sur les ressources en numérotation, le Numéro PRO attribue à votre organisation un identifiant fixe virtuel multicanal officiel (Voix, SMS, WhatsApp Business, USSD). Il garantit l'authenticité de vos échanges, centralise les données de vos équipes et renforce la crédibilité de votre marque.",
  idealFor: [
    'Authentifier officiellement la personne morale (attribut KYC)',
    'Séparer hermétiquement identité professionnelle et mobile personnel',
    'Sécuriser l’envoi de codes OTP SMS et notifications transactionnelles',
    'Prévenir l’usurpation d’identité de marque et les fraudes Mobile Money',
  ],
  capabilities: [
    { label: "Identifiant officiel et attribut KYC de référence des personnes morales" },
    { label: "Conforme au décret n°2022/10902 sur les ressources en numérotation" },
    { label: "Accessible sans restriction à tous les abonnés fixes & mobiles" },
    { label: "Multi-canaux unifiés : Voix HD, SMS A2P, WhatsApp Business & USSD" },
    { label: "Appels simultanés illimités entrants et sortants sans saturation" },
    { label: "Intégration aisée sur plateformes SIP, IPBX Cloud, CRM & APIs IT" },
    { label: "Centralisation souveraine des données pour préparer vos modèles d’IA" },
    { label: "Rapports détaillés d’audience, CDR en temps réel et traçabilité 24/7" },
    { label: "Interopérabilité nationale et transfrontalière (CEMAC & ZLECAf)" },
  ],
  channels: ['Voix HD', 'SMS A2P', 'WhatsApp Business', 'USSD'],
};

export const PROCOM = {
  label: 'Réseau ProCom',
  tagline: 'The Sovereign Business Communication Network on PRO Numbers',
  heading: 'Un réseau panafricain de communication professionnelle unifiée.',
  text: "Développé par GTS Africa en partenariat avec l'opérateur historique CAMTEL et propulsé par la technologie Softswitch & IMS de CIRPACK, ProCom est un réseau de type FVNO / Enterprise MVNO conçu pour connecter les organisations à coût local par-delà les frontières nationales et structurer la confiance numérique à l'échelle de la CEMAC et de la ZLECAf.",
  features: [
    'Numéro PRO officiel, vérifiable et multicanal (Voix, SMS, USSD, WhatsApp)',
    'Standard téléphonique virtuel (CloudPBX) & communications unifiées (UCaaS)',
    'Alternative souveraine aux plateformes OTT pour la maîtrise des données métiers',
    'Passerelles directes de terminaison Voix et SMS A2P sans routes grises',
    'Socle de données souveraines préparant l’intégration de modèles d’IA locaux',
    'Routage intelligent, statistiques en temps réel et supervision 24/7',
  ],
};

export const SOLUTIONS = {
  surtitle: 'CATALOGUE OFFICIEL DES SOLUTIONS PROCOM',
  heading: 'Solutions de communication professionnelle',
  lead: "Des solutions de classe opérateur pour chaque besoin d’organisation, de relation client et de souveraineté numérique.",
  items: [
    {
      id: 'numero-pro',
      title: 'Numéro PRO',
      badge: 'Identité Téléphonique Multicanale',
      image: '/assets/numero-pro-badge.png',
      tagline: 'Identifiant téléphonique et numérique officiel des personnes morales.',
      text: "Attribué aux entreprises et institutions pour unifier leurs communications et transactions (Voix, SMS, WhatsApp, USSD). Reconnu comme l’attribut KYC commun interconnectable avec les registres de commerce, impôts, banques et fintechs selon le décret n°2022/10902.",
      features: [
        'Standard téléphonique virtuel & SIP Trunking haute capacité',
        'Attribut KYC de référence certifié contre l’usurpation d’identité',
        'Intégration native CRM, ERP & systèmes d’information métiers',
        'Support multicanal Voix HD, SMS A2P et WhatsApp Business API',
      ],
      cta: 'Commander un Numéro PRO',
    },
    {
      id: 'mobinawa',
      title: 'Mobinawa Suite',
      badge: 'Téléphonie Mobile & IPBX Cloud UCaaS',
      image: '/assets/mobinawa-logo.png',
      tagline: 'Communication unifiée, standard virtuel CloudPBX et application mobile panafricaine.',
      text: "Opérée en partenariat avec CIRPACK et lancée lors de PROMOTE 2026, Mobinawa réunit l'ensemble des usages professionnels en une seule suite : standard d'entreprise IPBX Cloud (UCaaS), application mobile collaborative et attribution de Numéros PRO pour les équipes, indépendants et la diaspora. Elle garantit la souveraineté et la rétention locale de vos données de communication.",
      features: [
        'Standard téléphonique virtuel CloudPBX sans investissement matériel (100% OPEX)',
        'Application mobile & PC : communiquer sous son nom d’entreprise sans numéro personnel',
        'Profils adaptés : Entreprises (UCaaS), Indépendants & Diaspora (appels au tarif local)',
        'Messagerie d’équipe, visioconférence et annuaire certifié du réseau ProCom',
      ],
      cta: 'Découvrir l’offre Mobinawa',
      ctaHref: 'https://www.mobinawa.com/',
    },
    {
      id: '3cx-callcenter',
      title: '3CX-CallCenter & CRM',
      badge: 'Centre de Contact Omnicanal & CRM Intégré',
      image: '/assets/3cx-logo.svg',
      tagline: 'Standard vocal interactif, centre de contacts omnicanal et CRM intégré.',
      text: "Solution complète de relation client interconnectée au réseau ProCom de GTS-Infotel. Elle combine la puissance du standard 3CX certifié, la gestion omnicanale (Voix HD, WhatsApp Business, Live Chat, SMS A2P) et un module CRM intégré avec remontée de fiches clients et suivi du cycle de vie sans passer par des routes grises non sécurisées.",
      features: [
        'Standard Vocal Interactif (SVI) dynamique et routage intelligent par compétences',
        'Omnicanalité unifiée : Téléphonie Voix HD, WhatsApp Business vérifié & Live Chat',
        'Module CRM intégré : fiches clients 360°, historique et automatisation des processus',
        'Supervision temps réel, wallboards, enregistrement des appels et rapports de SLA',
      ],
      cta: 'Découvrir 3CX-CallCenter & CRM',
    },
    {
      id: 'digicontacts',
      title: 'DigiContacts',
      badge: 'Centre de Contact Omnicanal Grands Comptes',
      image: '/assets/digicontacts-logo.png',
      tagline: 'Plateforme omnicanale CRM & relation client pour grandes organisations et administrations.',
      text: "Déployable dans le cloud souverain (notamment au Data Center de Zamengoé) ou sur site, couplant Voix, SMS, WhatsApp et Email avec CRM intégré et interconnexion profonde aux systèmes d'information critiques.",
      features: [
        'Omnicanalité totale : Voix, SMS A2P, WhatsApp Business, Webchat, Email',
        'Chatbot interactif, gestion de tickets et campagnes automatisées',
        'Fiches clients 360° et interconnexion aux bases de données métiers',
        'Hébergement souverain garantissant l’intégrité et la confidentialité des données',
      ],
      cta: 'Découvrir DigiContacts',
      ctaHref: 'https://www.digicontacts.net/',
    },
  ],
};

export const WHY_GTS = {
  heading: 'Pourquoi choisir GTS-Infotel',
  text: "1er opérateur télécom alternatif de numéros fixes virtuels et acteur ComTech pionnier en Afrique. Plus de 20 ans d'expertise au Cameroun portée par une vision d'indépendance technologique, d'infrastructures souveraines et de coopération panafricaine.",
  guarantees: [
    {
      title: "Partenariat Stratégique CAMTEL & Souveraineté",
      desc: "Interconnexion directe avec l'opérateur public national CAMTEL. Accès direct au réseau commuté public et synergie avec le Data Center national de Zamengoé (Tier III) pour l'hébergement souverain des données de communication."
    },
    {
      title: "Partenariats Technologiques Cœur de Réseau (CIRPACK & 3CX)",
      desc: "Cœur de réseau de classe opérateur développé avec CIRPACK (Softswitch, IMSaaS, VoLTE/VoNR) et communications unifiées certifiées 3CX, alliant robustesse industrielle et modèle économique 100% OPEX prévisible."
    },
    {
      title: "Agrément ART Catégorie 1 & Décret 2022",
      desc: "Opérateur titulaire de la Licence Catégorie 1 délivrée par l'Agence de Régulation des Télécommunications (ART) du Cameroun et pionnier de l'opérationnalisation du décret n°2022/10902 sur les ressources en numérotation A2P."
    },
    {
      title: "Engagements Panafricains & Écosystème Local",
      desc: "Gouvernance active au sein du REPTIC.CM et membre fondateur de la FADB (Federation of African Digital Businesses), militante pour la compétitivité des PME Tech locales, la protection des données et l'intégration ZLECAf."
    }
  ],
  stats: [
    { value: '40+', label: "Ans d'expertise pionnière" },
    { value: 'N°1', label: 'Opérateur Fixe Virtuel (FVNO)' },
    { value: 'CAMTEL', label: 'Interconnexion Nationale' },
    { value: 'Cat. 1', label: 'Licence ART & Décret 2022' },
  ],
};

export const PARTNERS = [
  {
    name: 'CAMTEL',
    category: 'Partenaire Réseau Stratégique',
    desc: "Opérateur historique public national · Hub d'interconnexion multicanale (Voix, SMS, USSD) & Data Center souverain de Zamengoé (Tier III)",
    logo: '/assets/camtel-logo.png',
  },
  {
    name: 'CIRPACK',
    category: 'Partenaire Technologique Cœur de Réseau',
    desc: "Éditeur télécom européen de référence · Softswitch, IMSaaS, VoLTE/VoNR & plateforme de communications unifiées souveraines",
    logo: '/assets/cirpack-logo.jpg',
  },
  {
    name: '3CX',
    category: 'Partenaire Technologique Mondial',
    desc: "Plateforme leader de communications unifiées & CloudPBX 3CX-CallCenter certifiée pour le support et les centres d'appels",
    logo: '/assets/3cx-logo.svg',
  },
  {
    name: 'DigiContacts',
    category: 'Partenaire Centre de Contact Omnicanal',
    desc: "Plateforme omnicanale CRM & service client pour grandes organisations et administrations publiques",
    logo: '/assets/digicontacts-logo.png',
  },
  {
    name: 'ART Cameroun',
    category: 'Autorité de Régulation',
    desc: "Agence de Régulation des Télécommunications · Licence Officielle Catégorie 1 & Opérationnalisation du décret n°2022/10902",
    logo: '/assets/art-logo.jpg',
  },
];

export const PROCESS = {
  heading: 'Commencez simplement',
  steps: [
    {
      num: '01',
      title: 'Consultation & Audit',
      text: "Analyse de vos flux de communication, identification de vos besoins KYC et recommandation de l'architecture idéale.",
    },
    {
      num: '02',
      title: 'Attribution & Configuration',
      text: 'Attribution de votre Numéro PRO officiel, paramétrage du SVI, raccordement SIP/API et tests de qualité de service.',
    },
    {
      num: '03',
      title: 'Lancement & Support Dédié',
      text: 'Mise en service sans rupture d’activité et accompagnement technique continu par nos ingénieurs à Douala et Yaoundé.',
    },
  ],
};

export const FAQ_ITEMS = [
  {
    q: "Qu'est-ce qu'un Numéro PRO fixe virtuel et en quoi diffère-t-il d'un numéro mobile ?",
    a: "Tout comme le numéro mobile avec code OTP SMS authentifie une personne physique, le Numéro PRO fixe virtuel constitue l'identifiant officiel et vérifiable de la personne morale. Contrairement aux numéros mobiles personnels des employés qui créent la confusion, compromettent la sécurité et exposent l'entreprise à la fraude, le Numéro PRO rattache institutionnellement l'ensemble des canaux (Voix HD, SMS A2P, WhatsApp Business, USSD) à l'organisation, conformément au décret n°2022/10902 sur les ressources en numérotation.",
  },
  {
    q: "Pourquoi la souveraineté des communications professionnelles est-elle un enjeu stratégique ?",
    a: "Aujourd'hui, une grande partie des échanges d'entreprise et d'administration en Afrique transite par des mobiles personnels ou des applications OTT tierces (WhatsApp, Gmail, etc.) hébergées hors du continent. Cela externalise des données stratégiques sensibles et prive les entreprises du contrôle de leurs échanges. GTS-Infotel et son réseau ProCom permettent de rapatrier, centraliser et sécuriser ces données de communication au sein d'infrastructures locales souveraines, condition essentielle pour la confidentialité et pour entraîner une IA locale adaptée.",
  },
  {
    q: "Comment le Numéro PRO protège-t-il contre l'usurpation d'identité et la fraude Mobile Money ?",
    a: "L'usage frauduleux de cartes SIM anonymes et de boîtiers SIMBox alimente l'usurpation d'identité de marques pour pirater des comptes Mobile Money. Le Numéro PRO éradique ce risque en servant d'identifiant d'émetteur vérifié et certifié auprès des opérateurs et des régulateurs. Il peut également servir de code marchand unique USSD (ProMoney), assurant une traçabilité totale des paiements et restaurant la confiance numérique.",
  },
  {
    q: "Quel est le rôle du partenariat stratégique entre GTS-Infotel et CAMTEL ?",
    a: "CAMTEL, opérateur public national et gestionnaire du backbone fibre optique ainsi que du Data Center de Zamengoé (Tier III), assure le rôle de hub national d'interconnexion multicanale (Voix, SMS, USSD, Internet). Ce partenariat permet à GTS-Infotel d'acheminer les flux d'entreprise avec une qualité opérateur, une conformité réglementaire totale et un hébergement local souverain des données de communication.",
  },
  {
    q: "En quoi consiste l'application Mobinawa lancée lors de PROMOTE 2026 ?",
    a: "Mobinawa est la première application mobile panafricaine de communication professionnelle du réseau ProCom. Conçue comme une alternative souveraine aux applications grand public, elle permet aux collaborateurs, indépendants et membres de la diaspora d'émettre et recevoir des appels et messages sous le nom officiel de leur organisation avec leur Numéro PRO, séparant hermétiquement vie professionnelle et vie personnelle.",
  },
  {
    q: "Quelle est la vision de GTS Africa pour l'intégration de la CEMAC et la ZLECAf ?",
    a: "À l'image de ce qui existe au sein de l'Union Européenne, GTS Africa milite à travers la FADB et les instances régionales pour un réseau unifié de téléphonie professionnelle panafricain. À l'heure de la ZLECAf, le réseau ProCom permet aux organisations africaines d'échanger et de commercer à tarif local par-delà les frontières nationales, stimulant l'inclusion économique et l'émergence d'acteurs ComTech et FinTech locaux.",
  },
  {
    q: "GTS-Infotel est-il un opérateur agréé par l'État ?",
    a: "Oui. GTS-Infotel est titulaire de la Licence de Catégorie 1 délivrée par l'Agence de Régulation des Télécommunications (ART) du Cameroun, garantissant la légalité, la conformité réglementaire et la sécurité de toutes vos communications d'entreprise.",
  },
];

export const FOOTER = {
  tagline: "1er opérateur télécom alternatif de numéros fixes virtuels multi-services des entreprises au Cameroun · Acteur ComTech pionnier en Afrique.",
  address: "Rue de l'indépendance, Immeuble Face Calafatas, Yaoundé",
  phone: "+237 242 232 000",
  phoneRaw: "+237242232000",
  email: 'contact.cm@gts-africa.com',
  website: 'cm.gts-africa.com',
  whatsapp: 'https://wa.me/237242232000',
  twitter: 'https://twitter.com/gtsinfotelcm',
  linkedin: 'https://fr.linkedin.com/company/gts-infotel-nigeria-ltd',
  legalName: 'GTS-Infotel Cameroon SA',
};

