import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Network, Smartphone, Monitor, Wifi } from 'lucide-react';

export default function NetworkArchitecture() {
  const [headerRef] = useScrollAnimation();
  const [archRef] = useScrollAnimation();
  const [devicesRef] = useScrollAnimation();

  return (
    <section id="architecture" className="py-28 md:py-36 bg-zinc-50/50 border-b border-zinc-200/60">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* En-tête style Supabase */}
        <div ref={headerRef} className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-xs font-mono text-zinc-600 uppercase tracking-wider mb-4">
            <Network className="w-3.5 h-3.5 text-brand-orange" />
            Architecture Réseau
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-zinc-950 tracking-tight leading-tight mb-5">
            Architecture Panafricaine du Réseau ProCom
          </h2>
          <p className="text-base sm:text-lg text-zinc-500 font-normal leading-relaxed">
            Le réseau ProCom interconnecte les organisations aux abonnés mobiles et fixes via une infrastructure cloud de classe opérateur.
          </p>
        </div>

        {/* Schéma d'Architecture Bento */}
        <div ref={archRef} className="bento-card p-6 sm:p-10 bg-white">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-zinc-100 gap-3">
            <div>
              <span className="text-xs font-mono font-bold text-zinc-900 block">
                INTERCONNEXION DIRECTE CAMTEL & OPÉRATEURS GSM
              </span>
              <p className="text-xs text-zinc-500 font-mono mt-0.5">
                Routage A2P Voix & SMS de classe opérateur
              </p>
            </div>
            <span className="text-xs text-zinc-500 font-mono bg-zinc-50 border border-zinc-200 px-3 py-1 rounded-md">
              Cloud Infrastructure
            </span>
          </div>

          <div className="flex justify-center bg-white rounded-xl overflow-hidden">
            <img
              src="/assets/procom-architecture-full.png"
              alt="Architecture globale du réseau ProCom"
              className="w-full max-h-[500px] object-contain rounded-lg"
              onError={(e) => {
                e.target.src = '/assets/procom-architecture.jpg';
              }}
            />
          </div>
        </div>

        {/* Terminaux supportés */}
        <div ref={devicesRef} className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bento-card p-6 bg-white flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-zinc-100 border border-zinc-200 flex items-center justify-center text-zinc-700 shrink-0">
              <Smartphone className="w-5 h-5 text-brand-orange" />
            </div>
            <div>
              <span className="text-sm font-bold text-zinc-900 block">Smartphones & Mobiles</span>
              <span className="text-xs text-zinc-500 font-mono">Appels GSM & Mobinawa</span>
            </div>
          </div>

          <div className="bento-card p-6 bg-white flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-zinc-100 border border-zinc-200 flex items-center justify-center text-zinc-700 shrink-0">
              <Monitor className="w-5 h-5 text-brand-blue" />
            </div>
            <div>
              <span className="text-sm font-bold text-zinc-900 block">Postes PC & Softphones</span>
              <span className="text-xs text-zinc-500 font-mono">WebRTC & 3CX Desktop</span>
            </div>
          </div>

          <div className="bento-card p-6 bg-white flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-zinc-100 border border-zinc-200 flex items-center justify-center text-zinc-700 shrink-0">
              <Wifi className="w-5 h-5 text-emerald-600" />
            </div>
            <div>
              <span className="text-sm font-bold text-zinc-900 block">Téléphones IP Fixes</span>
              <span className="text-xs text-zinc-500 font-mono">SIP Trunking certifié</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
