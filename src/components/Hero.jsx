import { HERO } from '../data/telecomData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { ArrowRight, Play } from 'lucide-react';

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

        {/* ── CONTENU PRINCIPAL ALIGNÉ À GAUCHE (SANS CADRES) ── */}
        <div
          className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col justify-center items-start text-left"
          style={{ minHeight: '88vh', paddingTop: '10.5rem', paddingBottom: '4rem' }}
        >
          <div className="max-w-3xl flex flex-col items-start text-left">

            {/* Badge éditorial épuré */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-brand-orange/10 border border-brand-orange/30 backdrop-blur-sm mb-6 animate-fade-in-up">
              <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
              <span className="text-xs font-semibold tracking-wider uppercase text-brand-orange">
                Opérateur Télécom Agréé · Cameroun
              </span>
            </div>

            {/* Titre fragmenté moderne et percutant */}
            <h1 className="animate-fade-in-up space-y-1 mb-6 text-left" style={{ animationDelay: '80ms' }}>
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

            {/* Texte lead descriptif — sans cadre, directement intégré sur le fond de page */}
            <p
              className="text-base sm:text-lg text-gray-200/90 leading-relaxed font-normal max-w-2xl mb-8 animate-fade-in-up text-left"
              style={{ animationDelay: '160ms' }}
            >
              {HERO.lead}
            </p>

            {/* Boutons d'action — sans cadre */}
            <div
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto mb-10 animate-fade-in-up"
              style={{ animationDelay: '240ms' }}
            >
              <button
                onClick={onContact}
                className="btn-accent text-sm sm:text-base py-3 px-6 shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 font-medium"
              >
                {HERO.cta}
                <ArrowRight className="w-4 h-4 text-white" />
              </button>
              <a
                href="#solutions"
                className="inline-flex items-center justify-center gap-2 py-3 px-5 text-sm sm:text-base font-medium rounded-lg border border-white/20 text-white hover:bg-white/10 hover:border-white/35 transition-all duration-200"
              >
                <Play className="w-3.5 h-3.5 fill-white text-white" />
                {HERO.ctaSecondary}
              </a>
            </div>

            {/* Logos officiels (ART, ProCom, CAMTEL) — sans encadrement, directement ancrés dans la page */}
            <div
              className="flex items-center gap-8 sm:gap-10 flex-wrap animate-fade-in-up pt-2"
              style={{ animationDelay: '320ms' }}
            >
              <img
                src="/assets/art-logo-trimmed.png"
                alt="Licence ART Cameroun"
                title="Agence de Régulation des Télécommunications (Licence Cat. 1)"
                className="h-8 sm:h-9 w-auto object-contain opacity-85 hover:opacity-100 transition-opacity"
              />
              <img
                src="/assets/procom-logo-white-trimmed.png"
                alt="Réseau ProCom"
                title="Réseau ProCom - The Online Communication on PRO Numbers"
                className="h-6 sm:h-7 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
              />
              <img
                src="/assets/camtel-logo-trimmed.png"
                alt="CAMTEL Partner"
                title="CAMTEL - Opérateur National Partenaire"
                className="h-8 sm:h-9 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
              />
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
