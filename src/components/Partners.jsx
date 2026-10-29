import React from 'react';
import { PARTNERS } from '../data/telecomData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

/**
 * Carrousel de partenaires en défilement infini (marquee CSS).
 * - Les cartes sont dupliquées pour créer une boucle sans saut.
 * - L'animation se met en pause au survol (desktop).
 * - Masques de fondu gauche/droite via CSS mask-image.
 * - Responsive : la largeur de chaque carte s'adapte au viewport.
 */
const PartnerCard = ({ partner }) => (
  <div className="flex-shrink-0 mx-3 sm:mx-4 w-52 sm:w-60">
    <div className="clean-card p-5 sm:p-6 h-full flex flex-col items-center text-center gap-4">
      {/* Logo */}
      <div className="h-16 flex items-center justify-center w-full">
        {partner.logo ? (
          <img
            src={partner.logo}
            alt={partner.name}
            className="max-h-12 max-w-[85%] object-contain transition-transform duration-300 hover:scale-105"
            onError={(e) => { e.target.style.display = 'none'; }}
          />
        ) : (
          <span className="text-base font-bold text-brand-navy">{partner.name}</span>
        )}
      </div>

      {/* Séparateur */}
      <div className="w-8 h-px bg-gray-200" />

      {/* Nom + catégorie */}
      <div>
        <p className="text-sm font-bold text-brand-navy leading-snug mb-1">
          {partner.name}
        </p>
        <p className="text-xs text-brand-orange font-medium leading-snug">
          {partner.category}
        </p>
      </div>

      {/* Description */}
      <p className="text-xs text-gray-500 leading-relaxed font-normal">
        {partner.desc}
      </p>
    </div>
  </div>
);

const Partners = () => {
  const [sectionRef, sectionVisible] = useScrollAnimation();

  // Duplique le tableau pour l'effet de boucle sans saut visible
  const doubledPartners = [...PARTNERS, ...PARTNERS];

  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-32 bg-white border-b border-gray-200 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* En-tête */}
        <div className={`max-w-3xl mb-14 reveal ${sectionVisible ? 'is-visible' : ''}`}>
          <span className={`orange-bar mb-4 ${sectionVisible ? 'is-visible' : ''}`} />
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy leading-tight mb-4 mt-4">
            Nos Partenaires Stratégiques
          </h2>
          <p className="text-base text-gray-600 font-normal leading-relaxed">
            Une synergie d'opérateurs nationaux et d'éditeurs télécoms certifiés pour garantir la qualité de service.
          </p>
        </div>
      </div>

      {/* Piste de défilement infini */}
      <div className={`partners-viewport w-full reveal-scale ${sectionVisible ? 'is-visible' : ''}`}>
        <div className="partners-track py-4">
          {doubledPartners.map((partner, index) => (
            <PartnerCard key={index} partner={partner} />
          ))}
        </div>
      </div>

      {/* Indicateur discret */}
      <div className="max-w-7xl mx-auto px-6 mt-8">
        <p className="text-xs text-gray-400 font-normal text-center sm:text-left">
          Survolez pour mettre en pause · {PARTNERS.length} partenaires officiels
        </p>
      </div>
    </section>
  );
};

export default Partners;
