import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Check, ArrowRight, Wifi, MessageSquare, Globe, ShieldCheck } from 'lucide-react';

/* ─── Passerelles ─────────────────────────────────────────────────────────── */
const GATEWAYS = [
  { Icon: Wifi,          title: 'Voice Gateway',   desc: 'SIP Trunking & Voix HD' },
  { Icon: MessageSquare, title: 'SMS Gateway',      desc: 'A2P Direct (HTTP / SMPP)' },
  { Icon: Globe,         title: 'Extranet Client',  desc: 'Portail Selfcare & CDR' },
];

/* ─── Fonctionnalités ─────────────────────────────────────────────────────── */
const FEATURES = [
  "Numéro PRO officiel, fixe virtuel multicanal : Voix, SMS, WhatsApp Business, USSD",
  "Réseau panafricain FVNO développé pays par pays, en partenariat avec les opérateurs historiques",
  "Séparation étanche des communications professionnelles et personnelles — protection des données",
  "Hébergement souverain des données de communication pour l'IA africaine",
  "Référentiel national d'identité téléphonique : attribut KYC interopérable avec les registres sectoriels",
];

/* ─── Composant principal ─────────────────────────────────────────────────── */
const ProductSpotlight = ({ onContact, onNavigate }) => {
  const [leftRef, leftVisible] = useScrollAnimation();
  const [rightRef, rightVisible] = useScrollAnimation();

  return (
    <section id="procom" className="py-24 md:py-32 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* ── Colonne Gauche — Présentation ProCom ─────────────────── */}
          <div
            ref={leftRef}
            className={`lg:col-span-6 space-y-7 reveal-left ${leftVisible ? 'is-visible' : ''}`}
          >

            {/* Surtitle */}
            <span className="inline-flex items-center gap-2 text-xs font-semibold text-brand-orange uppercase tracking-widest">
              <ShieldCheck className="w-4 h-4" />
              Réseau ProCom · FVNO souverain
            </span>

            <div>
              <span className={`orange-bar mb-4 ${leftVisible ? 'is-visible' : ''}`} />
              <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy leading-tight mb-4 mt-4">
                L'infrastructure numérique souveraine d'identité téléphonique et de communication des entreprises africaines.
              </h2>
              <p className="text-base text-gray-600 leading-relaxed font-normal">
                ProCom est un réseau panafricain de plateformes de communication professionnelle, conçu par GTS Africa pour accompagner la transformation numérique des entreprises, des administrations et de l'ensemble des organisations africaines. Au cœur du réseau se trouve le Numéro PRO : un numéro fixe virtuel multicanal qui identifie une personne morale dans ses communications professionnelles et facilite l'accès à ses services numériques.
              </p>
            </div>

            {/* Conviction quote */}
            <blockquote className="border-l-2 border-brand-orange pl-4 py-2 bg-orange-50/50 rounded-r-lg">
              <p className="text-sm text-gray-700 italic leading-relaxed font-normal">
                Notre conviction : pas d'économie numérique souveraine sans identité téléphonique unique des entreprises dans toutes leurs interactions multicanales avec les consommateurs mobiles.
              </p>
            </blockquote>

            {/* 3 Passerelles */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {GATEWAYS.map(({ Icon, title, desc }, idx) => (
                <div
                  key={title}
                  className={`p-4 rounded-xl border border-gray-200 bg-white flex flex-col gap-2 hover:border-gray-300 hover:shadow-sm transition-all duration-300 reveal stagger-${idx + 1} ${leftVisible ? 'is-visible' : ''}`}
                >
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
                <li
                  key={index}
                  className={`flex items-start gap-3 reveal stagger-${Math.min(index + 1, 6)} ${leftVisible ? 'is-visible' : ''}`}
                >
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

          {/* ── Colonne Droite — Logo ProCom intégré ─────────────────── */}
          <div
            ref={rightRef}
            className={`lg:col-span-6 flex items-center justify-center reveal-right ${rightVisible ? 'is-visible' : ''}`}
          >
            <img
              src="/assets/procom-logo.png"
              alt="Réseau ProCom — GTS Africa"
              className="w-full max-w-md sm:max-w-lg h-auto object-contain transition-transform duration-500 hover:scale-[1.02]"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProductSpotlight;
