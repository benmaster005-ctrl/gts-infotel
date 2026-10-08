import { PROCOM_INTRO } from '../data/telecomData';

/**
 * Section Architecture Réseau ProCom — Présente le schéma officiel d'interconnexion
 * (Abonnés Mobiles, Réseaux Mobiles, CAMTEL Réseau Fixe, Réseau ProCom, Organisations)
 * et le schéma des terminaux d'accès (Smartphone, PC, Téléphone IP).
 */
export default function NetworkArchitecture() {
  return (
    <section id="architecture" className="py-24 bg-neutral-50 border-b border-neutral-200">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* En-tête */}
        <div className="max-w-3xl">
          <span className="text-xs font-semibold tracking-widest uppercase text-brand-orange">
            {PROCOM_INTRO.badge}
          </span>
          <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold tracking-tight text-brand-navy">
            {PROCOM_INTRO.title}
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-neutral-600">
            {PROCOM_INTRO.description}
          </p>
        </div>

        {/* Schéma d'Architecture Global du Réseau ProCom */}
        <div className="mt-12 bg-white border border-neutral-200 p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-neutral-100 gap-2">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-brand-blue block">
                Schéma d'interconnexion télécom
              </span>
              <h3 className="text-lg font-bold text-neutral-900 mt-0.5">
                Architecture Panafricaine du Réseau ProCom
              </h3>
            </div>
            <span className="text-xs text-neutral-400 font-mono">
              Interconnexion Directe CAMTEL & Opérateurs
            </span>
          </div>

          <div className="overflow-hidden flex justify-center bg-white">
            <img
              src={PROCOM_INTRO.architectureImage}
              alt="Architecture globale du réseau ProCom : Abonnés mobiles, Réseaux mobiles, Réseau fixe CAMTEL, Réseau ProCom et Organisations clientes"
              className="w-full max-w-4xl h-auto object-contain"
            />
          </div>
        </div>

        {/* Bloc Équipements & Zéro contrainte matérielle */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white border border-neutral-200 p-6 sm:p-8">
          {/* Visuel terminaux */}
          <div className="lg:col-span-5 flex justify-center">
            <img
              src={PROCOM_INTRO.devicesImage}
              alt="Terminaux compatibles ProCom : Smartphone, PC et Téléphone IP"
              className="max-h-60 w-auto object-contain"
            />
          </div>

          {/* Argumentaire terminaux */}
          <div className="lg:col-span-7 lg:pl-6 lg:border-l lg:border-neutral-100">
            <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
              Simplicité de déploiement
            </span>
            <h3 className="text-xl font-bold text-brand-navy mt-1">
              Tout ce dont vos collaborateurs ont besoin
            </h3>
            <p className="mt-3 text-sm text-neutral-600 leading-relaxed">
              GTS-Infotel et ses partenaires technologiques (CIRPACK, DigiContacts, 3CX) se chargent entièrement de l'hébergement et de l'exploitation des solutions dans le cloud.
            </p>

            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {PROCOM_INTRO.prerequisites.map((req, idx) => (
                <li key={idx} className="flex items-center gap-2.5 text-sm text-neutral-700 font-medium">
                  <span className="text-brand-orange text-xs select-none">—</span>
                  {req}
                </li>
              ))}
            </ul>

            <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center gap-2 text-xs text-neutral-500">
              <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0"></span>
              <span>Zéro câblage · Zéro liaison E1 · Zéro équipement PABX sur site</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
