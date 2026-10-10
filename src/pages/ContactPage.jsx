import React, { useState } from 'react';
import { Phone, MessageSquare, Mail, MapPin, CheckCircle, ArrowRight, ChevronRight, Clock, ShieldCheck, Wrench } from 'lucide-react';
import { FOOTER } from '../data/telecomData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

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

  const [heroRef] = useScrollAnimation();
  const [formRef] = useScrollAnimation();

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
      <section className="pt-36 pb-20 md:pt-44 md:pb-28 bg-white border-b border-gray-200" ref={heroRef}>
        <div className="max-w-7xl mx-auto px-6">
          
          <nav className="inline-flex items-center gap-2 text-xs font-medium text-gray-500 mb-8">
            <button onClick={onNavigateHome} className="hover:text-brand-navy">Accueil</button>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <span className="text-brand-navy font-semibold">Contact & Support</span>
          </nav>

          <div className="max-w-3xl space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-brand-navy leading-tight">
              Contactez nos experts télécoms.
            </h1>
            
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-normal">
              Nos ingénieurs et conseillers vous répondent rapidement pour toute demande de devis, d'attribution de Numéros PRO ou de raccordement réseau.
            </p>
          </div>

        </div>
      </section>

      {/* 2. CONTACT BENTO & FORM SECTION */}
      <section className="py-24 md:py-32 bg-white border-b border-gray-200" ref={formRef}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Colonne Gauche - Coordonnées */}
            <div className="lg:col-span-5 space-y-4">
              <h3 className="text-xl font-bold text-brand-navy mb-6">
                Canaux d'accès direct
              </h3>

              <div className="clean-card p-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-gray-700 shrink-0">
                    <Phone className="w-5 h-5 text-current" />
                  </div>
                  <div>
                    <span className="text-xs text-gray-500 block">Téléphone</span>
                    <a href={`tel:${FOOTER.phoneRaw}`} className="text-base font-bold text-brand-navy hover:text-brand-orange transition-colors">
                      {FOOTER.phone}
                    </a>
                  </div>
                </div>
              </div>

              <div className="clean-card p-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-gray-700 shrink-0">
                    <MessageSquare className="w-5 h-5 text-current" />
                  </div>
                  <div>
                    <span className="text-xs text-gray-500 block">WhatsApp</span>
                    <a href={FOOTER.whatsapp} target="_blank" rel="noopener noreferrer" className="text-base font-bold text-brand-navy hover:text-brand-orange transition-colors">
                      Chat WhatsApp direct
                    </a>
                  </div>
                </div>
              </div>

              <div className="clean-card p-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-gray-700 shrink-0">
                    <Mail className="w-5 h-5 text-current" />
                  </div>
                  <div>
                    <span className="text-xs text-gray-500 block">Email</span>
                    <a href={`mailto:${FOOTER.email}`} className="text-base font-bold text-brand-navy hover:text-brand-orange transition-colors">
                      {FOOTER.email}
                    </a>
                  </div>
                </div>
              </div>

              <div className="clean-card p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-gray-700 shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5 text-current" />
                  </div>
                  <div>
                    <span className="text-xs text-gray-500 block mb-1">Bureaux</span>
                    <p className="text-sm text-gray-700 leading-relaxed font-normal">
                      {FOOTER.address}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Colonne Droite - Formulaire */}
            <div className="lg:col-span-7">
              <div className="clean-card p-8 sm:p-12">
                <div className="mb-8 pb-6 border-b border-gray-100">
                  <h3 className="text-2xl font-bold text-brand-navy mb-2">
                    Envoyer une demande
                  </h3>
                  <p className="text-sm text-gray-600 font-normal">
                    Remplissez ce formulaire et un conseiller vous recontactera sous 24h.
                  </p>
                </div>

                {submitted ? (
                  <div className="py-12 text-center space-y-4">
                    <div className="w-12 h-12 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center mx-auto text-emerald-600">
                      <CheckCircle className="w-6 h-6" />
                    </div>
                    <h4 className="text-xl font-bold text-brand-navy">Message bien reçu</h4>
                    <p className="text-sm text-gray-600 max-w-sm mx-auto leading-relaxed">
                      Merci pour votre intérêt. Notre équipe technique va étudier votre demande avec attention.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                          Votre Nom *
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Nom & Prénom"
                          className="w-full px-3.5 py-2.5 rounded-lg border border-gray-200 text-sm text-gray-900 focus:outline-none focus:border-brand-navy transition-colors placeholder:text-gray-400"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                          Nom de l'entreprise *
                        </label>
                        <input
                          type="text"
                          name="company"
                          required
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Organisation S.A."
                          className="w-full px-3.5 py-2.5 rounded-lg border border-gray-200 text-sm text-gray-900 focus:outline-none focus:border-brand-navy transition-colors placeholder:text-gray-400"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                          Téléphone *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+237 6xx xx xx xx"
                          className="w-full px-3.5 py-2.5 rounded-lg border border-gray-200 text-sm text-gray-900 focus:outline-none focus:border-brand-navy transition-colors placeholder:text-gray-400"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                          Email professionnel *
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="contact@entreprise.cm"
                          className="w-full px-3.5 py-2.5 rounded-lg border border-gray-200 text-sm text-gray-900 focus:outline-none focus:border-brand-navy transition-colors placeholder:text-gray-400"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                        Sujet / Offre concernée
                      </label>
                      <select
                        name="solution"
                        value={formData.solution}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-gray-200 text-sm text-gray-900 focus:outline-none focus:border-brand-navy transition-colors bg-white"
                      >
                        <option value="numero-pro">Numéro PRO Virtuel (Fixe)</option>
                        <option value="3cx-callcenter">3CX-CallCenter (Centre de contact)</option>
                        <option value="reseau-procom">Raccordement Réseau ProCom</option>
                        <option value="mobinawa-business">Mobinawa-Business (IPBX Cloud)</option>
                        <option value="digicontacts">DigiContacts (Omnicanal SI)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                        Détails de votre besoin
                      </label>
                      <textarea
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Précisez votre demande..."
                        className="w-full px-3.5 py-2.5 rounded-lg border border-gray-200 text-sm text-gray-900 focus:outline-none focus:border-brand-navy transition-colors placeholder:text-gray-400 resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full btn-accent py-3.5 text-sm justify-center rounded-lg"
                    >
                      Transmettre ma demande
                      <ArrowRight className="w-4 h-4 ml-1 text-white" />
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. ENGAGEMENTS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="clean-card p-6 flex items-start gap-4">
              <Clock className="w-5 h-5 text-gray-700 shrink-0 mt-1" />
              <div>
                <h4 className="text-base font-bold text-brand-navy mb-1">Réponse sous 24h</h4>
                <p className="text-xs text-gray-600 leading-relaxed font-normal">
                  Chaque demande fait l'objet d'un retour qualifié par un conseiller dédié.
                </p>
              </div>
            </div>

            <div className="clean-card p-6 flex items-start gap-4">
              <ShieldCheck className="w-5 h-5 text-gray-700 shrink-0 mt-1" />
              <div>
                <h4 className="text-base font-bold text-brand-navy mb-1">Confidentialité</h4>
                <p className="text-xs text-gray-600 leading-relaxed font-normal">
                  Protection absolue de vos données et engagements de disponibilité.
                </p>
              </div>
            </div>

            <div className="clean-card p-6 flex items-start gap-4">
              <Wrench className="w-5 h-5 text-gray-700 shrink-0 mt-1" />
              <div>
                <h4 className="text-base font-bold text-brand-navy mb-1">Support Local</h4>
                <p className="text-xs text-gray-600 leading-relaxed font-normal">
                  Assistance technique assurée par nos équipes à Douala et Yaoundé.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
