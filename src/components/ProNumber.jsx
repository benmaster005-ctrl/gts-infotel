import React, { useState } from 'react';
import { CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';
import { PRO_NUMBER } from '../data/telecomData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const ProNumber = () => {
  const [leftRef, leftVisible] = useScrollAnimation();
  const [rightRef, rightVisible] = useScrollAnimation();
  const [isCapabilitiesOpen, setIsCapabilitiesOpen] = useState(false);

  return (
    <section id="pro-number" className="py-24 md:py-32 bg-white border-b border-gray-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Colonne Gauche — slide depuis la gauche */}
          <div
            ref={leftRef}
            className={`lg:col-span-6 reveal-left ${leftVisible ? 'is-visible' : ''}`}
          >
            <div className="clean-card p-4 sm:p-8 flex flex-col items-center justify-center">
              <img
                src="/assets/numero-pro/image-numero.png"
                alt="Numero PRO GTS-Infotel"
                className="max-h-64 max-w-full object-contain mb-6 transition-transform duration-500 hover:scale-[1.03]"
                onError={(e) => { e.target.style.display = 'none'; }}
              />

              {/* Canaux unifies */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 w-full pt-4 border-t border-gray-100">
                {['Voix', 'SMS', 'WhatsApp'].map((label, i) => {
                  const sub = ['Appels simultanes', 'API & Messagerie', 'Business API'][i];
                  return (
                    <div
                      key={i}
                      className={`p-2.5 sm:p-3 rounded-lg border border-gray-200 bg-white flex sm:flex-col items-center justify-between sm:justify-center text-left sm:text-center hover:border-brand-orange/40 hover:shadow-sm transition-all duration-200 reveal stagger-${i + 1} ${leftVisible ? 'is-visible' : ''}`}
                    >
                      <span className="text-sm font-semibold text-brand-navy block">{label}</span>
                      <span className="text-xs text-gray-500">{sub}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Colonne Droite — slide depuis la droite */}
          <div
            ref={rightRef}
            className={`lg:col-span-6 space-y-6 reveal-right ${rightVisible ? 'is-visible' : ''}`}
          >
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy leading-tight mb-4">
                {PRO_NUMBER.subheading}
              </h2>
              <p className="text-base text-gray-600 font-normal leading-relaxed">
                {PRO_NUMBER.text}
              </p>
            </div>

            {/* Liste avec icones */}
            <div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {PRO_NUMBER.idealFor?.map((item, idx) => (
                  <li
                    key={idx}
                    className={`flex items-start gap-2.5 reveal stagger-${Math.min(idx + 1, 6)} ${rightVisible ? 'is-visible' : ''}`}
                  >
                    <CheckCircle2 className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Accordeon des capacites */}
            {PRO_NUMBER.capabilities && PRO_NUMBER.capabilities.length > 0 && (
              <div className="border border-gray-200 rounded-lg overflow-hidden bg-white transition-all duration-200 hover:border-gray-300">
                <button
                  onClick={() => setIsCapabilitiesOpen(!isCapabilitiesOpen)}
                  className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="text-sm font-semibold text-brand-navy">
                    Fonctionnalites incluses avec le numero
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-gray-700 transition-transform duration-300 ${isCapabilitiesOpen ? 'rotate-180' : ''}`}
                  />
                </button>

                <div className={`grid transition-all duration-300 ease-in-out ${isCapabilitiesOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                  <div className="overflow-hidden">
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
                  </div>
                </div>
              </div>
            )}

          </div>

        </div>
      </div>
    </section>
  );
};

export default ProNumber;
