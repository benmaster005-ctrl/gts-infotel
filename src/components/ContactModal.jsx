import { useState, useEffect } from 'react';

/**
 * Contact modal — formulaire épuré conforme aux solutions GTS Africa.
 */
export default function ContactModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    interest: 'Numéros fixes virtuels',
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
                Nous contacter
              </h3>
              <p className="mt-1 text-sm text-neutral-500">
                Recevez un audit chiffré et sans engagement pour votre entreprise.
              </p>

              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Field label="Nom" value={form.name} onChange={update('name')} required />
                  <Field label="Entreprise" value={form.company} onChange={update('company')} required />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Field label="Email" type="email" value={form.email} onChange={update('email')} required />
                  <Field label="Téléphone" type="tel" value={form.phone} onChange={update('phone')} required />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-neutral-600 uppercase tracking-wider mb-1.5">
                    Solution d'intérêt
                  </label>
                  <select
                    value={form.interest}
                    onChange={update('interest')}
                    className="w-full border border-neutral-300 px-3 py-2.5 text-sm bg-white focus:outline-none focus:border-brand-navy transition-colors"
                  >
                    <option>Numéros fixes virtuels</option>
                    <option>ProCom & Mobinawa</option>
                    <option>3CX Centre de Contacts</option>
                    <option>3CX CloudPBX & UCC</option>
                    <option>SMS Service Centre</option>
                    <option>Autre besoin télécom</option>
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
                  Vos données restent strictement confidentielles.
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
