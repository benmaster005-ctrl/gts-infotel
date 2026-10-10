import React, { useState } from 'react';
import { CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';
import { PRO_NUMBER } from '../data/telecomData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const ProNumber = () => {
  const [leftRef] = useScrollAnimation();
  const [rightRef] = useScrollAnimation();
  const [isCapabilitiesOpen, setIsCapabilitiesOpen] = useState(false);

  return (
    <section id="pro-number" className="py-24 md:py-32 bg-white border-b border-gray-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Colonne Gauche - Image d'illustration sur fond blanc */}
          <div ref={leftRef} className="lg:col-span-6">
            <div className="clean-card p-4 sm:p-8 flex flex-col items-center justify-center">
              <img 
                src="/assets/numero-pro/image-numero.png" 
                alt="Numéro PRO GTS-Infotel" 
                className="max-h-64 max-w-full object-contain mb-6"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
              
              {/* Canaux unifiés épurés sans débordement sur mobile */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 w-full pt-4 border-t border-gray-100">
                <div className="p-2.5 sm:p-3 rounded-lg border border-gray-200 bg-white flex sm:flex-col items-center justify-between sm:justify-center text-left sm:text-center">
                  <span className="text-sm font-semibold text-brand-navy block">Voix</span>
                  <span className="text-xs text-gray-500">Appels simultanés</span>
                </div>
                <div className="p-2.5 sm:p-3 rounded-lg border border-gray-200 bg-white flex sm:flex-col items-center justify-between sm:justify-center text-left sm:text-center">
                  <span className="text-sm font-semibold text-brand-navy block">SMS</span>
                  <span className="text-xs text-gray-500">API & Messagerie</span>
                </div>
                <div className="p-2.5 sm:p-3 rounded-lg border border-gray-200 bg-white flex sm:flex-col items-center justify-between sm:justify-center text-left sm:text-center">
                  <span className="text-sm font-semibold text-brand-navy block">WhatsApp</span>
                  <span className="text-xs text-gray-500">Business API</span>
                </div>
              </div>
            </div>
          </div>

          {/* Colonne Droite - Contenu */}
          <div ref={rightRef} className="lg:col-span-6 space-y-6">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy leading-tight mb-4">
                {PRO_NUMBER.subheading}
              </h2>
              
              <p className="text-base text-gray-600 font-normal leading-relaxed">
                {PRO_NUMBER.text}
              </p>
            </div>

            {/* Liste avec icônes de liste orange autorisées */}
            <div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {PRO_NUMBER.idealFor?.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Accordéon des capacités */}
            {PRO_NUMBER.capabilities && PRO_NUMBER.capabilities.length > 0 && (
              <div className="border border-gray-200 rounded-lg overflow-hidden bg-white">
                <button 
                  onClick={() => setIsCapabilitiesOpen(!isCapabilitiesOpen)}
                  className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="text-sm font-semibold text-brand-navy">
                    Fonctionnalités incluses avec le numéro
                  </span>
                  {isCapabilitiesOpen ? (
                    <ChevronUp className="w-4 h-4 text-gray-700" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-gray-700" />
                  )}
                </button>
                
                {isCapabilitiesOpen && (
                  <div className="p-4 border-t border-gray-200 bg-white">
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {PRO_NUMBER.capabilities.map((cap, idx) => (
                        <li key={idx} className="text-xs text-gray-600 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-orange shrink-0" />
                          {cap.label}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}

          </div>

        </div>
      </div>
    </section>
  );
};

export default ProNumber;
