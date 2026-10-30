import React from 'react';
import { ARCHETYPES, BRAND_INFO } from '../data/content.ts';
import { ExternalLink, CheckCircle2 } from 'lucide-react';

export const IdealClient: React.FC = () => {
  return (
    <section id="sobre-patricia" className="py-20 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#E30613] mb-3">
            <span>■</span>
            <span>PERFIL DE MADUREZ EMPRESARIAL</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight max-w-3xl">
            El cliente ideal: Tres momentos evolutivos del mismo profesional.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-600 max-w-3xl">
            No segmentamos por títulos o diplomas. Segmentamos por experiencia acumulada (+10 a 20+ años) y la necesidad urgente de transformar ese bagaje en una estructura de negocio sostenible.
          </p>
        </div>

        {/* 3 Archetypes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ARCHETYPES.map((arch) => {
            const isObjective = arch.id === 'visionario';
            return (
              <div
                key={arch.id}
                className={`relative rounded-xl p-8 flex flex-col justify-between transition-all ${
                  isObjective
                    ? 'bg-neutral-50 border-2 border-[#E30613] shadow-md'
                    : 'bg-white border border-neutral-200 hover:border-neutral-300 shadow-xs'
                }`}
              >
                {isObjective && (
                  <div className="absolute -top-3 right-6 bg-[#E30613] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-0.5 rounded-full shadow-sm">
                    Estado Objetivo
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-mono font-black text-neutral-300">
                      {arch.number}
                    </span>
                    <span className="text-xs uppercase tracking-wider font-semibold text-neutral-400">
                      Arquetipo
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-neutral-900 mb-1 tracking-tight">
                    {arch.name}
                  </h3>
                  <p className="text-xs text-[#E30613] font-semibold mb-6">
                    {arch.subtitle}
                  </p>

                  {/* Context */}
                  <div className="space-y-4 text-xs text-neutral-600 mb-6">
                    <div>
                      <strong className="text-neutral-900 block mb-1">Contexto actual:</strong>
                      <p className="leading-relaxed">{arch.context}</p>
                    </div>

                    <div>
                      <strong className="text-[#E30613] block mb-1">Bloqueo estructural:</strong>
                      <p className="leading-relaxed text-neutral-700">{arch.barrier}</p>
                    </div>

                    <div className="pt-2 border-t border-neutral-100">
                      <strong className="text-neutral-900 block mb-1">Ruta que te corresponde:</strong>
                      <p className="leading-relaxed text-neutral-800 font-medium">{arch.solution}</p>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-neutral-200">
                  <a
                    href={BRAND_INFO.prediagnosticoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-4 text-xs font-bold rounded-lg bg-neutral-900 hover:bg-[#E30613] text-white transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                  >
                    <span>Comprobar en el Prediagnóstico</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
