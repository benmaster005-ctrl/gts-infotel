import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Check, ArrowRight, Wifi, MessageSquare, Globe, ShieldCheck } from 'lucide-react';

/* ─── Animation ProCom Logo ─────────────────────────────────────────────────
   Anneau pulsant + orbites rotatives autour du logo ProCom.
   Tout en CSS inline / Tailwind, zero dépendance.
───────────────────────────────────────────────────────────────────────────── */
const ProComLogoDisplay = () => (
  <div className="relative flex items-center justify-center w-full h-full min-h-[340px] sm:min-h-[400px]">

    {/* ── Fond radial subtil ── */}
    <div
      className="absolute inset-0 rounded-2xl"
      style={{
        background:
          'radial-gradient(ellipse at 50% 50%, #EBF5FF 0%, #F0F7FF 45%, #FFFFFF 100%)',
      }}
    />

    {/* ── Anneau externe pulsant (slow) ── */}
    <div
      className="absolute rounded-full border border-blue-200 opacity-60"
      style={{
        width: '88%',
        paddingBottom: '88%',
        top: '6%',
        left: '6%',
        animation: 'procom-pulse 4s ease-in-out infinite',
      }}
    />

    {/* ── Anneau intermédiaire pulsant (décalé) ── */}
    <div
      className="absolute rounded-full border border-blue-300 opacity-40"
      style={{
        width: '66%',
        paddingBottom: '66%',
        top: '17%',
        left: '17%',
        animation: 'procom-pulse 4s ease-in-out infinite 1.3s',
      }}
    />

    {/* ── Orbite tournante ── */}
    <div
      className="absolute rounded-full"
      style={{
        width: '78%',
        paddingBottom: '78%',
        top: '11%',
        left: '11%',
        animation: 'procom-orbit 12s linear infinite',
      }}
    >
      {/* Point orbitant */}
      <span
        className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-brand-orange shadow-md"
        style={{ boxShadow: '0 0 8px rgba(232,99,27,0.7)' }}
      />
    </div>

    {/* ── Orbite tournante inverse ── */}
    <div
      className="absolute rounded-full"
      style={{
        width: '60%',
        paddingBottom: '60%',
        top: '20%',
        left: '20%',
        animation: 'procom-orbit 9s linear infinite reverse',
      }}
    >
      <span
        className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-blue-400 shadow"
        style={{ boxShadow: '0 0 6px rgba(59,130,246,0.7)' }}
      />
    </div>

    {/* ── Logo ProCom centré ── */}
    <div className="relative z-10 flex flex-col items-center gap-4">
      <div
        className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-100"
        style={{ animation: 'procom-float 5s ease-in-out infinite' }}
      >
        <img
          src="/assets/procom-logo.png"
          alt="Réseau ProCom — GTS Africa"
          className="w-52 sm:w-64 h-auto object-contain"
        />
      </div>

      {/* Tagline sous le logo */}
      <span className="text-xs sm:text-sm font-semibold text-blue-600 tracking-wide uppercase opacity-80">
        1<sup>er</sup> réseau de communication professionnelle en Afrique
      </span>

      {/* Pills canaux */}
      <div className="flex flex-wrap justify-center gap-2">
        {['Voix HD', 'SMS A2P', 'WhatsApp', 'USSD'].map((c) => (
          <span
            key={c}
            className="px-3 py-1 rounded-full text-xs font-medium bg-white border border-gray-200 text-brand-navy shadow-sm"
          >
            {c}
          </span>
        ))}
      </div>
    </div>

  </div>
);

/* ─── Passerelles ─────────────────────────────────────────────────────────── */
const GATEWAYS = [
  { Icon: Wifi,          title: 'Voice Gateway',   desc: 'SIP Trunking & Voix HD' },
  { Icon: MessageSquare, title: 'SMS Gateway',      desc: 'A2P Direct (HTTP / SMPP)' },
  { Icon: Globe,         title: 'Extranet Client',  desc: 'Portail Selfcare & CDR' },
];

/* ─── Fonctionnalités ─────────────────────────────────────────────────────── */
const FEATURES = [
  "Acheminement certifié des flux A2P : fin des routes grises et des surcoûts d'OTP non délivrés",
  "Interconnexion directe avec CAMTEL & tous les réseaux mobiles nationaux sans intermédiaire",
  "Protection des données d'entreprise et séparation étanche avec les mobiles personnels",
  "Consolidation des échanges professionnels pour alimenter vos processus métiers et l'IA locale",
  "Supervision en temps réel, statistiques d'audience et raccordement transparent à votre SI",
];

/* ─── Composant principal ─────────────────────────────────────────────────── */
const ProductSpotlight = ({ onContact, onNavigate }) => {
  const [leftRef]  = useScrollAnimation();
  const [rightRef] = useScrollAnimation();

  return (
    <section id="procom" className="py-24 md:py-32 bg-white border-b border-gray-200">

      {/* CSS animations injectées une seule fois */}
      <style>{`
        @keyframes procom-pulse {
          0%, 100% { transform: scale(1);    opacity: 0.5; }
          50%       { transform: scale(1.06); opacity: 0.15; }
        }
        @keyframes procom-orbit {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes procom-float {
          0%, 100% { transform: translateY(0px); }
          50%      { transform: translateY(-8px); }
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* ── Colonne Gauche — Présentation ProCom ─────────────────── */}
          <div ref={leftRef} className="lg:col-span-6 space-y-7">

            {/* Surtitle */}
            <span className="inline-flex items-center gap-2 text-xs font-semibold text-brand-orange uppercase tracking-widest">
              <ShieldCheck className="w-4 h-4" />
              Réseau ProCom · FVNO souverain
            </span>

            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy leading-tight mb-4">
                Le 1<sup className="text-2xl">er</sup> réseau de communication professionnelle souverain en Afrique.
              </h2>
              <p className="text-base text-gray-600 leading-relaxed font-normal">
                ProCom (<em>the Online Communication on PRO Numbers</em>) est une infrastructure télécom cloud de type <strong>FVNO / Enterprise MVNO</strong> développée par GTS Africa. Adossée à l'opérateur historique <strong>CAMTEL</strong> et propulsée par le cœur de réseau <strong>CIRPACK</strong> (Softswitch, IMS), elle interconnecte Voix HD, SMS A2P, WhatsApp Business et USSD sur un identifiant fixe virtuel officiel : le <strong>Numéro PRO</strong>.
              </p>
            </div>

            {/* 3 Passerelles */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {GATEWAYS.map(({ Icon, title, desc }) => (
                <div key={title} className="p-4 rounded-xl border border-gray-200 bg-white flex flex-col gap-2 hover:border-gray-300 transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-gray-600">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="font-semibold text-brand-navy text-sm">{title}</h3>
                  <span className="text-xs text-gray-500">{desc}</span>
                </div>
              ))}
            </div>

            {/* Liste fonctionnalités */}
            <ul className="space-y-2.5">
              {FEATURES.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm font-normal">{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-1">
              <button
                onClick={onContact}
                className="btn-accent text-sm py-2.5 px-6"
              >
                Demander un raccordement
                <ArrowRight className="w-4 h-4 ml-1 text-white" />
              </button>
              <button
                onClick={() => onNavigate && onNavigate('reseau-procom')}
                className="btn-secondary text-sm py-2.5 px-6"
              >
                Explorer l'architecture ProCom
              </button>
            </div>
          </div>

          {/* ── Colonne Droite — Logo animé ProCom ──────────────────── */}
          <div ref={rightRef} className="lg:col-span-6">
            <ProComLogoDisplay />
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProductSpotlight;
