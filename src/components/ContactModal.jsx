import { useState, useEffect } from 'react';

/**
 * Contact modal — formulaire conforme aux 7 solutions officielles ProCom (Juin 2026).
 */
export default function ContactModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    interest: 'Numéro PRO',
    message: '',
  });

  // Réinitialiser à l'ouverture
  useEffect(() => {
    if (isOpen) setSubmitted(false);
  }, [isOpen]);

  if (!isOpen) return null;

  const update = (field) => (e) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="bg-white w-full max-w-lg max-h-[90vh] overflow-y-auto relative">
        {/* Bouton de fermeture */}
        <button
          onClick={onClose}
          className="absolute top-4 right-5 text-neutral-400 hover:text-neutral-700 text-2xl leading-none"
          aria-label="Fermer"
        >
          ×
        </button>

        <div className="p-8">
          {submitted ? (
            <div className="py-12 text-center">
              <p className="text-xl font-bold text-neutral-900 mb-3">
                Demande enregistrée.
              </p>
              <p className="text-sm text-neutral-600 mb-8 max-w-xs mx-auto">
                Un conseiller GTS-Infotel vous contactera sous 24 heures ouvrées.
              </p>
              <button
                onClick={onClose}
                className="text-sm font-semibold text-brand-navy border-b border-brand-navy pb-0.5 hover:text-brand-blue hover:border-brand-blue transition-colors"
              >
                Fermer
              </button>
            </div>
          ) : (
            <>
              <h3 className="text-xl font-bold text-neutral-900">
                Demande de raccordement & Information
              </h3>
              <p className="mt-1 text-sm text-neutral-500">
                Recevez un audit chiffré et une proposition d'architecture ProCom sur mesure.
              </p>

              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Field label="Nom" value={form.name} onChange={update('name')} required />
                  <Field label="Entreprise / Organisation" value={form.company} onChange={update('company')} required />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Field label="Email" type="email" value={form.email} onChange={update('email')} required />
                  <Field label="Téléphone" type="tel" value={form.phone} onChange={update('phone')} required />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-neutral-600 uppercase tracking-wider mb-1.5">
                    Solution d'intérêt ProCom
                  </label>
                  <select
                    value={form.interest}
                    onChange={update('interest')}
                    className="w-full border border-neutral-300 px-3 py-2.5 text-sm bg-white focus:outline-none focus:border-brand-navy transition-colors"
                  >
                    <option>Numéro PRO (Numéro fixe virtuel multicanal)</option>
                    <option>Mobinawa (Application mobile de communication pro)</option>
                    <option>Mobinawa-PRO (Pour indépendants & diaspora)</option>
                    <option>Mobinawa-Business (UCaaS & IPBX Cloud)</option>
                    <option>3CX-CallCenter (Centre d'appels & WhatsApp TPE/PME)</option>
                    <option>DigiContacts (Centre de contact omnicanal & CRM)</option>
                    <option>ProComCRM (CRM omnicanal & campagnes)</option>
                    <option>Autre besoin télécom / Partenariat</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-neutral-600 uppercase tracking-wider mb-1.5">
                    Message <span className="text-neutral-400 font-normal normal-case">(facultatif)</span>
                  </label>
                  <textarea
                    rows="3"
                    value={form.message}
                    onChange={update('message')}
                    className="w-full border border-neutral-300 px-3 py-2.5 text-sm resize-none focus:outline-none focus:border-brand-navy transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-brand-navy text-white text-sm font-semibold py-3.5 hover:bg-brand-navy/90 transition-colors"
                >
                  Envoyer ma demande
                </button>

                <p className="text-[11px] text-neutral-400 text-center">
                  GTS-Infotel Cameroon SA · Vos données sont protégées et strictement confidentielles.
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function Field({ label, type = 'text', value, onChange, required }) {
  return (
    <div>
      <label className="block text-xs font-semibold text-neutral-600 uppercase tracking-wider mb-1.5">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full border border-neutral-300 px-3 py-2.5 text-sm focus:outline-none focus:border-brand-navy transition-colors"
      />
    </div>
  );
}
