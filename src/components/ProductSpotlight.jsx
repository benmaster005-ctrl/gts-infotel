import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Check, ArrowRight } from 'lucide-react';

const ProductSpotlight = ({ onContact, onNavigate }) => {
  const [leftRef] = useScrollAnimation();
  const [rightRef] = useScrollAnimation();

  return (
    <section id="procom" className="py-24 md:py-32 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Colonne Gauche - Spécifications ProCom */}
          <div ref={leftRef} className="lg:col-span-6 space-y-6">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy leading-tight mb-4">
                Le hub central pour vos communications d'entreprise.
              </h2>
              
              <p className="text-base text-gray-600 leading-relaxed font-normal">
                Une infrastructure télécom unifiée pour consolider toutes vos interactions clients (Voix, SMS, WhatsApp). Sécurisée, souveraine et interconnectée aux réseaux GSM camerounais.
              </p>
            </div>

            {/* 3 Passerelles sans étiquettes parasites */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { title: 'Voice Gateway', desc: 'SIP Trunking' },
                { title: 'SMS Gateway', desc: 'API HTTP / SMPP' },
                { title: 'Extranet Client', desc: 'Portail Selfcare' }
              ].map((gateway, index) => (
                <div key={index} className="p-4 rounded-lg border border-gray-200 bg-white">
                  <h3 className="font-semibold text-brand-navy text-sm mb-1">{gateway.title}</h3>
                  <span className="text-xs text-gray-500 block">{gateway.desc}</span>
                </div>
              ))}
            </div>

            {/* Liste avec checkmarks orange autorisés */}
            <ul className="space-y-3 pt-2">
              {[
                "Routage intelligent des flux A2P conversationnels et transactionnels",
                "Interconnexion directe avec CAMTEL & opérateurs mobiles nationaux",
                "Tableaux de bord analytiques et statistiques d'appels en temps réel",
                "Raccordement transparent via IPBX existant ou applications Cloud"
              ].map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-brand-orange shrink-0 mt-1" />
                  <span className="text-gray-700 text-sm font-normal">{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
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

          {/* Colonne Droite - Schéma d'architecture technique sans faux cadre gris */}
          <div ref={rightRef} className="lg:col-span-6">
            <div className="clean-card p-6 bg-white flex items-center justify-center">
              <img 
                src="/assets/procom-architecture-full.png" 
                alt="Architecture Réseau ProCom" 
                className="w-full h-auto object-contain"
                onError={(e) => {
                  e.target.src = '/assets/procom-architecture.jpg';
                }}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProductSpotlight;
