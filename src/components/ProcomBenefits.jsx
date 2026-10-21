import { useScrollAnimation, useStaggerAnimation } from '../hooks/useScrollAnimation';
import { Zap, Shield, Globe, TrendingUp, Users, Smartphone, Lock } from 'lucide-react';

/**
 * Données des avantages ProCom — extraites du document officiel.
 */
const PROCOM_BENEFITS_DATA = {
  heading: 'Avantages clés du Réseau ProCom',
  lead: "Le réseau ProCom apporte une valeur différenciante à chaque dimension de votre transformation numérique.",
  items: [
    {
      num: '01',
      title: 'Identité téléphonique unique',
      text: "Chaque organisation dispose d'un numéro PRO unique d'identification, reconnu par l'ensemble des opérateurs et accessible à tous les abonnés.",
      icon: Shield,
    },
    {
      num: '02',
      title: 'Multi-canal intégré',
      text: "Voix, SMS, WhatsApp et Web réunis sur un seul numéro d'entreprise, simplifiant la gestion et unifiant l'expérience client.",
      icon: Globe,
    },
    {
      num: '03',
      title: 'Coûts maîtrisés',
      text: "Réduction de plus de 50% des coûts de communication avec une facturation transparente et sans investissement matériel.",
      icon: TrendingUp,
    },
    {
      num: '04',
      title: 'Accessibilité universelle',
      text: "Numéros accessibles depuis tous les réseaux fixes et mobiles locaux, garantissant une joignabilité maximale.",
      icon: Smartphone,
    },
    {
      num: '05',
      title: 'Collaboration renforcée',
      text: "Mobilité et télétravail unifiés : vos collaborateurs restent connectés sur leurs terminaux personnels sans exposer leurs numéros privés.",
      icon: Users,
    },
    {
      num: '06',
      title: 'Conformité réglementaire',
      text: "Numérotation conforme au décret de 2022, garantissant la traçabilité et la légalité de toutes vos communications d'entreprise.",
      icon: Lock,
    },
  ],
};

/**
 * Section Avantages Clés du Réseau ProCom.
 * Design moderne avec glassmorphism sur fond sombre et animations staggered.
 */
export default function ProcomBenefits() {
  const [headerRef, headerVisible] = useScrollAnimation();
  const [gridRef, visibleItems] = useStaggerAnimation(PROCOM_BENEFITS_DATA.items.length, 120);

  return (
    <section id="avantages" className="relative py-28 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-navy via-[#0C1F3D] to-[#091428]" />

      {/* Grille de points subtile */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      {/* ── Logo ProCom en watermark central animé ── */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <div className="relative flex items-center justify-center" style={{ width: 480, height: 480 }}>
          {/* Anneaux de signal concentriques */}
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className="absolute rounded-full border border-brand-orange/15 procom-signal"
              style={{
                inset: `${i * -40}px`,
                animationDelay: `${i * 0.75}s`,
              }}
            />
          ))}
          {/* Halo orange doux */}
          <div className="absolute w-64 h-64 rounded-full bg-brand-orange/8 blur-3xl procom-pulse-ring" />
          {/* Logo ProCom tournant */}
          <img
            src="/assets/procom-logo.png"
            alt=""
            aria-hidden="true"
            className="w-72 h-72 object-contain opacity-[0.08] procom-spin"
            style={{ filter: 'brightness(0) invert(1)' }}
          />
        </div>
      </div>

      {/* Orbe bleu top-right */}
      <div className="absolute top-20 right-16 w-80 h-80 bg-brand-blue/12 rounded-full blur-3xl procom-float-slow pointer-events-none" />
      {/* Orbe orange bottom-left */}
      <div className="absolute bottom-20 left-16 w-64 h-64 bg-brand-orange/8 rounded-full blur-3xl procom-float-slow pointer-events-none" style={{ animationDelay: '5s' }} />

      {/* Micro-particules */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-brand-orange/40 procom-drift pointer-events-none"
          style={{
            left: `${8 + i * 15}%`,
            bottom: `${20 + (i % 3) * 22}%`,
            animationDelay: `${i * 1.1}s`,
            animationDuration: `${6 + i * 0.6}s`,
          }}
        />
      ))}

      <div className="relative max-w-6xl mx-auto px-6">
        
        {/* En-tête */}
        <div
          ref={headerRef}
          className={`max-w-2xl mb-16 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-cyan-400 bg-cyan-400/10 px-4 py-2 rounded-full">
            <Zap className="w-3.5 h-3.5" />
            Innovation & Performance
          </span>
          <h2 className="mt-5 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
            {PROCOM_BENEFITS_DATA.heading}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-neutral-300">
            {PROCOM_BENEFITS_DATA.lead}
          </p>
        </div>

        {/* Grille des avantages */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROCOM_BENEFITS_DATA.items.map((b, idx) => {
            const Icon = b.icon;
            return (
              <div
                key={b.num}
                className={`glass rounded-2xl p-7 transition-all duration-500 hover:bg-white/10 group ${
                  visibleItems.has(idx) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-brand-orange/10 flex items-center justify-center mb-5 group-hover:bg-brand-orange/20 transition-colors">
                  <Icon className="w-6 h-6 text-brand-orange" />
                </div>

                {/* Number */}
                <span className="text-xs font-mono font-bold text-neutral-500 block mb-2">
                  {b.num}
                </span>

                {/* Content */}
                <h3 className="text-base font-bold text-white mb-3 group-hover:text-brand-orange transition-colors">
                  {b.title}
                </h3>
                <p className="text-sm text-neutral-300 leading-relaxed">
                  {b.text}
                </p>
              </div>
            );
          })}
        </div>

        {/* Conclusion */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="italic text-sm text-neutral-300 max-w-2xl">
            « Rejoignez le réseau ProCom et faites partie des entreprises qui façonnent l'avenir des communications professionnelles au Cameroun. »
          </p>
          <span className="font-mono text-xs text-cyan-400 shrink-0 bg-cyan-400/10 px-3 py-1.5 rounded-lg">
            GTS-Infotel Cameroon SA
          </span>
        </div>

      </div>
    </section>
  );
}
