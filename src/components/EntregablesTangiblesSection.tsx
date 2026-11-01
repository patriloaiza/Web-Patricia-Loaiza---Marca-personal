import React from 'react';
import { TANGIBLE_DELIVERABLES } from '../data/content.ts';
import { FileText, Compass, CheckCircle2, ShieldCheck, Sparkles, Layers } from 'lucide-react';

export const EntregablesTangiblesSection: React.FC = () => {
  return (
    <section className="py-20 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Kicker */}
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2.5 h-2.5 bg-[#E30613]" />
          <span className="text-xs font-bold uppercase tracking-widest text-neutral-500 font-mono">
            ACTIVOS Y ENTREGABLES TANGIBLES
          </span>
        </div>

        {/* Section Headline */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-neutral-900 tracking-tight leading-tight mb-4 max-w-4xl">
          Qué te llevas: documentos, sistemas y activos de tu propiedad.
        </h2>

        <p className="text-base sm:text-lg text-neutral-600 max-w-3xl mb-12 leading-relaxed">
          Nuestra consultoría es productizada. No compras horas de conversación abierta: adquieres metodologías estructuradas, marcos de decisión y activos que quedan instalados para siempre en tu negocio.
        </p>

        {/* Deliverables Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TANGIBLE_DELIVERABLES.map((del) => (
            <div
              key={del.id}
              className="p-6 bg-[#F7F7F7] border-2 border-neutral-200 hover:border-black transition-all flex flex-col justify-between group shadow-xs"
            >
              <div>
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-neutral-200">
                  <span className="text-xs font-mono font-black text-[#E30613]">
                    ACTIVO {del.number}
                  </span>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-neutral-500 bg-white px-2 py-0.5 border border-neutral-200">
                    {del.format}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-neutral-900 mb-2 leading-snug">
                  {del.title}
                </h3>

                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-4">
                  {del.purpose}
                </p>
              </div>

              <div className="pt-3 border-t border-neutral-200">
                <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 block mb-1 font-mono">
                  IMPACTO OPERATIVO:
                </span>
                <p className="text-xs font-semibold text-neutral-800 leading-tight">
                  {del.benefit}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
