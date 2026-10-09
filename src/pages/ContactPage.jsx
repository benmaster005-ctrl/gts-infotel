import { useState } from 'react';
import { FOOTER, SOLUTIONS } from '../data/telecomData';

/**
 * Page Dédiée : Contact GTS-Infotel Cameroon SA
 * Intègre les coordonnées officielles Elementor, liens WhatsApp/Twitter/LinkedIn,
 * formulaire de demande en ligne et support 24/7.
 */
export default function ContactPage({ onNavigateHome }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    solution: 'numero-pro',
    message: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-white">
      {/* 1. HERO SECTION */}
      <section className="relative bg-brand-navy text-white pt-36 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'radial-gradient(circle, #fff 0.5px, transparent 0.5px)',
            backgroundSize: '20px 20px',
          }}
        />

        <div className="relative max-w-6xl mx-auto px-6">
          {/* Fil d'Ariane */}
          <nav className="flex items-center gap-2 text-xs text-neutral-400 mb-6">
            <button
              onClick={onNavigateHome}
              className="hover:text-white transition-colors"
            >
              Accueil
            </button>
            <span>/</span>
            <span className="text-brand-orange font-medium">Contact</span>
          </nav>

          <div className="max-w-3xl">
            <span className="text-xs font-semibold tracking-widest uppercase text-cyan-400 block mb-3">
              ASSISTANCE COMMERCIALE & TECHNIQUE
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-[2.65rem] font-extrabold leading-[1.15] tracking-tight">
              Contactez GTS-Infotel Cameroon SA
            </h1>

            <div className="w-16 h-1 bg-brand-orange my-6" />

            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
              Nos conseillers télécoms et ingénieurs réseau vous accompagnent dans le choix de vos numéros PRO, le déploiement de vos centres de contacts et l’interconnexion de vos plateformes.
            </p>
          </div>
        </div>
      </section>

      {/* 2. CANAUX DE CONTACT DIRECTS & FORMULAIRE */}
      <section className="py-24 bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Colonne Gauche : Coordonnées et réseaux */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-semibold tracking-widest uppercase text-brand-orange block mb-2">
                  CANAUX OFFICIELS
                </span>
                <h2 className="text-2xl font-extrabold text-brand-navy tracking-tight">
                  Nos coordonnées directes
                </h2>
                <p className="text-sm text-neutral-600 mt-2 leading-relaxed">
                  Joignez-nous directement par téléphone, WhatsApp ou courriel du lundi au vendredi de 8h à 18h.
                </p>
              </div>

              {/* Téléphone direct */}
              <div className="bg-white border border-neutral-200 p-6 shadow-sm hover:border-neutral-300 transition-colors flex items-start gap-4">
                <div className="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <span className="text-xs font-mono font-bold text-neutral-400 block mb-0.5">TÉLÉPHONE FIXE VIRTUEL</span>
                  <a
                    href={`tel:${FOOTER.phoneRaw}`}
                    className="text-lg font-bold text-brand-navy hover:text-brand-orange transition-colors"
                  >
                    {FOOTER.phone}
                  </a>
                  <p className="text-xs text-neutral-500 mt-1">Appel local standard vers le réseau ProCom</p>
                </div>
              </div>

              {/* WhatsApp officiel */}
              <div className="bg-white border border-neutral-200 p-6 shadow-sm hover:border-neutral-300 transition-colors flex items-start gap-4">
                <div className="w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-emerald-600 fill-current" viewBox="0 0 24 24">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.187-2.59-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.079-2.115-.514-1.815-.758-2.985-2.607-3.076-2.727-.089-.12-.733-.974-.733-1.859 0-.886.463-1.32.628-1.498.165-.179.36-.224.48-.224.12 0 .241.002.346.007.11.006.257-.042.402.308.15.36.51 1.246.554 1.337.045.09.075.195.015.315-.06.12-.09.195-.18.3-.09.105-.19.234-.271.315-.09.09-.184.188-.079.368.105.18.468.772 1.004 1.25.69.614 1.272.805 1.452.895.18.09.285.076.39-.045.105-.12.45-.525.57-.705.12-.18.24-.15.405-.09.165.06 1.05.495 1.23.585.18.09.3.135.345.21.045.075.045.435-.099.84z"/>
                  </svg>
                </div>
                <div>
                  <span className="text-xs font-mono font-bold text-neutral-400 block mb-0.5">WHATSAPP PROFESSIONNEL</span>
                  <a
                    href={FOOTER.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-bold text-emerald-700 hover:text-emerald-800 transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>{FOOTER.phone}</span>
                    <span className="text-xs">↗</span>
                  </a>
                  <p className="text-xs text-neutral-500 mt-1">Échangez en direct avec un conseiller</p>
                </div>
              </div>

              {/* Email officiel */}
              <div className="bg-white border border-neutral-200 p-6 shadow-sm hover:border-neutral-300 transition-colors flex items-start gap-4">
                <div className="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <span className="text-xs font-mono font-bold text-neutral-400 block mb-0.5">COURRIEL OFFICIEL</span>
                  <a
                    href={`mailto:${FOOTER.email}`}
                    className="text-base font-bold text-brand-navy hover:text-brand-blue transition-colors"
                  >
                    {FOOTER.email}
                  </a>
                  <p className="text-xs text-neutral-500 mt-1">Réponse garantie sous 24 heures ouvrées</p>
                </div>
              </div>

              {/* Siège social */}
              <div className="bg-white border border-neutral-200 p-6 shadow-sm hover:border-neutral-300 transition-colors flex items-start gap-4">
                <div className="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-neutral-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <span className="text-xs font-mono font-bold text-neutral-400 block mb-0.5">SIÈGE SOCIAL</span>
                  <p className="text-sm font-semibold text-neutral-900 leading-snug">
                    {FOOTER.address}
                  </p>
                  <p className="text-xs text-neutral-500 mt-1">Yaoundé, Cameroun</p>
                </div>
              </div>

              {/* Réseaux sociaux */}
              <div className="bg-white border border-neutral-200 p-6 shadow-sm">
                <span className="text-xs font-mono font-bold text-neutral-400 block mb-3">RÉSEAUX SOCIAUX & PROFIL PRO</span>
                <div className="flex items-center gap-3">
                  <a
                    href={FOOTER.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-2 bg-neutral-100 hover:bg-sky-50 text-neutral-700 hover:text-sky-600 rounded text-xs font-semibold transition-colors flex items-center gap-1.5"
                  >
                    <span>Twitter (@gtsinfotelcm)</span>
                    <span>↗</span>
                  </a>
                  <a
                    href={FOOTER.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-2 bg-neutral-100 hover:bg-blue-50 text-neutral-700 hover:text-blue-600 rounded text-xs font-semibold transition-colors flex items-center gap-1.5"
                  >
                    <span>LinkedIn</span>
                    <span>↗</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Colonne Droite : Formulaire interactif en ligne */}
            <div className="lg:col-span-7">
              <div className="bg-white border border-neutral-200 p-8 sm:p-10 shadow-sm">
                <span className="text-xs font-semibold tracking-widest uppercase text-brand-blue block mb-2">
                  FORMULAIRE EN LIGNE
                </span>
                <h3 className="text-2xl font-extrabold text-brand-navy tracking-tight mb-2">
                  Exprimez vos besoins ici
                </h3>
                <p className="text-sm text-neutral-500 mb-8">
                  Remplissez le formulaire ci-dessous et nos ingénieurs vous recontacteront immédiatement pour finaliser votre commande.
                </p>

                {submitted ? (
                  <div className="bg-emerald-50 border border-emerald-200 p-8 text-center rounded-sm">
                    <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                      ✓
                    </div>
                    <h4 className="text-lg font-bold text-emerald-900 mb-2">
                      Demande transmise avec succès !
                    </h4>
                    <p className="text-sm text-emerald-800 leading-relaxed max-w-md mx-auto">
                      Merci pour votre message. Un conseiller technique de GTS-Infotel Cameroon SA étudie votre demande et vous recontactera sous 24h ouvrées au numéro indiqué.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-6 text-xs font-semibold text-emerald-700 underline underline-offset-4"
                    >
                      Envoyer une autre demande
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-2">
                          Nom complet *
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Ex: Jean Dupont"
                          className="w-full px-4 py-3 border border-neutral-300 focus:border-brand-navy focus:outline-none text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-2">
                          Entreprise / Organisation *
                        </label>
                        <input
                          type="text"
                          name="company"
                          required
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Ex: Entreprise SA"
                          className="w-full px-4 py-3 border border-neutral-300 focus:border-brand-navy focus:outline-none text-sm"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-2">
                          Numéro de téléphone *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+237 6XX XX XX XX"
                          className="w-full px-4 py-3 border border-neutral-300 focus:border-brand-navy focus:outline-none text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-2">
                          Adresse Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="contact@entreprise.cm"
                          className="w-full px-4 py-3 border border-neutral-300 focus:border-brand-navy focus:outline-none text-sm"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-2">
                        Solution recherchée
                      </label>
                      <select
                        name="solution"
                        value={formData.solution}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-neutral-300 focus:border-brand-navy focus:outline-none text-sm bg-white"
                      >
                        {SOLUTIONS.items.map((sol) => (
                          <option key={sol.id} value={sol.id}>
                            {sol.title} — {sol.badge}
                          </option>
                        ))}
                        <option value="autre">Autre besoin télécom / Partenariat</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-2">
                        Précisions sur votre besoin *
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Décrivez brièvement le nombre de postes, vos usages (Voix, SMS, WhatsApp), ou votre infrastructure actuelle..."
                        className="w-full px-4 py-3 border border-neutral-300 focus:border-brand-navy focus:outline-none text-sm"
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full bg-brand-orange text-white text-sm font-semibold py-4 hover:bg-brand-orange/90 transition-colors shadow-md"
                      >
                        Envoyer ma demande de contact
                      </button>
                    </div>

                    <p className="text-[11px] text-neutral-400 text-center">
                      Données traitées conformément à la législation sur la protection des données personnelles.
                    </p>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. ASSISTANCE ET ENGAGEMENT DE SERVICE */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center sm:text-left">
            <div className="p-6 border-l-2 border-brand-orange bg-neutral-50/50">
              <span className="text-xs font-mono font-bold text-brand-orange block mb-1">01 / DISPONIBILITÉ</span>
              <h4 className="text-base font-bold text-neutral-900 mb-1">Supervision Réseau 24/7</h4>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Le cœur de réseau ProCom et les passerelles CAMTEL sont supervisés en continu par notre NOC.
              </p>
            </div>
            <div className="p-6 border-l-2 border-brand-blue bg-neutral-50/50">
              <span className="text-xs font-mono font-bold text-brand-blue block mb-1">02 / CADRE LÉGAL</span>
              <h4 className="text-base font-bold text-neutral-900 mb-1">Opérateur Titulaire de Licence</h4>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Licence Catégorie 1 ART Cameroun garantissant la traçabilité et conformité réglementaire.
              </p>
            </div>
            <div className="p-6 border-l-2 border-emerald-600 bg-neutral-50/50">
              <span className="text-xs font-mono font-bold text-emerald-600 block mb-1">03 / INGÉNIERIE</span>
              <h4 className="text-base font-bold text-neutral-900 mb-1">Support Local Dédié</h4>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Équipe d'ingénieurs basée à Yaoundé et Douala pour l'intégration et le déploiement sur site.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
