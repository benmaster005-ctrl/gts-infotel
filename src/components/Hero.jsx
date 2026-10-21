import { HERO } from '../data/telecomData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { ArrowRight, Play, Shield, Globe, Zap } from 'lucide-react';

export default function Hero({ onContact }) {
  const [trustRef] = useScrollAnimation();

  return (
    <section className="bg-white border-b border-gray-200">

      {/* ── Bloc hero : image plein-cadre avec overlay épuré et moderne ── */}
      <div className="relative w-full overflow-hidden bg-[#06101E]" style={{ minHeight: '88vh' }}>

        {/* Image de fond professionnelle intégrée avec finesse */}
        <img
          src="/assets/hero-businesswoman.jpg"
          alt="Environnement professionnel télécom GTS-Infotel"
          className="absolute inset-0 w-full h-full object-cover object-right md:object-center opacity-30 mix-blend-luminosity filter contrast-110"
          loading="eager"
        />

        {/* Overlay progressif : lisibilité maximale à gauche, révélation subtile de l'image à droite */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(110deg, rgba(6,16,30,0.96) 0%, rgba(6,16,30,0.85) 45%, rgba(6,16,30,0.30) 75%, rgba(6,16,30,0.70) 100%)',
          }}
        />
        {/* Vignette douce au bas pour ancrer les éléments */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to top, rgba(6,16,30,0.92) 0%, transparent 40%)',
          }}
        />

        {/* ── CONTENU PRINCIPAL ── */}
        <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex flex-col justify-between" style={{ minHeight: '88vh', paddingTop: '11rem', paddingBottom: '3.5rem' }}>

          {/* ── ZONE HAUTE : badge + grand titre ── */}
          <div className="max-w-3xl">

            {/* Badge éditorial épuré */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-brand-orange/10 border border-brand-orange/30 backdrop-blur-sm mb-7 animate-fade-in-up">
              <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
              <span className="text-xs font-semibold tracking-wider uppercase text-brand-orange">
                Opérateur Télécom Agréé · Cameroun
              </span>
            </div>

            {/* Titre fragmenté moderne et lisible (sans stroke creux) */}
            <h1 className="animate-fade-in-up space-y-1" style={{ animationDelay: '80ms' }}>
              <span className="block text-4xl sm:text-5xl lg:text-[3.5rem] font-light text-white/85 leading-tight tracking-tight">
                L'identité téléphonique
              </span>
              <span className="block text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold text-white leading-tight tracking-tight">
                et numérique universelle
              </span>
              <span className="block text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold text-brand-orange leading-tight tracking-tight">
                des entreprises en Afrique.
              </span>
            </h1>

          </div>

          {/* ── ZONE BAS : stats + lead + CTA ── */}
          <div className="flex flex-col lg:flex-row items-end justify-between gap-8 mt-auto pt-10">

            {/* Stat-pills ancrées en bas à gauche */}
            <div className="flex flex-wrap gap-3 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              {[
                { icon: Shield, label: 'Licence ART Cat. 1', sub: 'Opérateur agréé' },
                { icon: Globe,  label: 'Réseau ProCom',      sub: 'Voix · SMS · USSD' },
                { icon: Zap,    label: 'CAMTEL Partner',     sub: 'Interconnexion directe' },
              ].map(({ icon: Icon, label, sub }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 px-4 py-2.5 rounded-xl border border-white/10 bg-white/[0.05] hover:bg-white/[0.08] backdrop-blur-md transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-brand-orange/15 flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4 text-brand-orange" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white leading-tight">{label}</p>
                    <p className="text-[11px] text-gray-300/80 mt-0.5 leading-tight">{sub}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Carte lead + CTA — glassmorphism épuré en bas à droite */}
            <div
              className="w-full lg:max-w-sm rounded-2xl p-6 animate-fade-in-up"
              style={{
                animationDelay: '300ms',
                background: 'rgba(255, 255, 255, 0.06)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
              }}
            >
              <p className="text-sm text-gray-200 leading-relaxed mb-5 font-normal">
                {HERO.lead}
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={onContact}
                  className="btn-accent text-sm py-2.5 px-5 flex-1 shadow-md hover:shadow-lg transition-all"
                >
                  {HERO.cta}
                  <ArrowRight className="w-3.5 h-3.5 ml-1 text-white" />
                </button>
                <a
                  href="#solutions"
                  className="inline-flex items-center justify-center gap-1.5 py-2.5 px-4 text-sm font-medium rounded-lg border border-white/20 text-white hover:bg-white/10 hover:border-white/35 transition-all duration-200 flex-1"
                >
                  <Play className="w-3.5 h-3.5 fill-white text-white" />
                  {HERO.ctaSecondary}
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ── Barre de réassurance sur fond blanc ── */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div ref={trustRef} className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="clean-card p-5 hover:border-gray-300 transition-colors">
            <span className="text-sm font-semibold text-brand-navy block mb-0.5">Opérateur Agréé</span>
            <span className="text-xs text-gray-600">Licence ART & Décret 2022</span>
          </div>
          <div className="clean-card p-5 hover:border-gray-300 transition-colors">
            <span className="text-sm font-semibold text-brand-navy block mb-0.5">Partenaire CAMTEL</span>
            <span className="text-xs text-gray-600">Interconnexion souveraine</span>
          </div>
          <div className="clean-card p-5 hover:border-gray-300 transition-colors">
            <span className="text-sm font-semibold text-brand-navy block mb-0.5">Réseau ProCom</span>
            <span className="text-xs text-gray-600">Voix, SMS, WhatsApp & USSD</span>
          </div>
          <div className="clean-card p-5 hover:border-gray-300 transition-colors">
            <span className="text-sm font-semibold text-brand-navy block mb-0.5">Support & Proximité</span>
            <span className="text-xs text-gray-600">Équipes à Douala & Yaoundé</span>
          </div>
        </div>
      </div>

    </section>
  );
}
