import React from 'react';
import { HITOS_EVOLUCION } from '../data/content.ts';

export const SintesisEvolucionSection: React.FC = () => {
  return (
    <section id="hitos-evolucion" className="py-20 bg-[#F7F7F7] border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header matching Vilma editorial style */}
        <div className="max-w-4xl mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-bold uppercase tracking-widest text-neutral-500 font-mono">
              TRAYECTORIA Y CARGOS DE AUTORIDAD
            </span>
            <span className="w-2 h-2 bg-[#E30613]" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-neutral-900 tracking-tight leading-tight">
            Hitos institucionales y experiencia aplicada.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-600 leading-relaxed font-normal">
            Cargos de dirección, asistencia técnica y gestión de proyectos acreditados en organismos multilaterales de Naciones Unidas, programas de cooperación internacional de la Unión Europea, corporaciones multinacionales y consultoría estratégica de negocios.
          </p>
        </div>

        {/* List of Authority Positions with NO dates, organized by Organization & Role */}
        <div className="divide-y divide-neutral-200 border-t border-b border-neutral-200 bg-transparent">
          {HITOS_EVOLUCION.map((item, idx) => (
            <div
              key={item.id || idx}
              className="py-8 sm:py-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start hover:bg-white/60 transition-colors px-3 sm:px-6 rounded-xs"
            >
              {/* Organization & Institutional Authority (4 cols) */}
              <div className="lg:col-span-4 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#E30613] shrink-0" />
                  <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-500 font-mono">
                    {item.tag}
                  </span>
                </div>

                <h4 className="text-base sm:text-lg font-black text-neutral-900 leading-snug">
                  {item.organization}
                </h4>

                {item.highlight && (
                  <span className="inline-block text-[11px] font-semibold text-neutral-700 bg-neutral-200/60 px-2.5 py-1 rounded-xs">
                    {item.highlight}
                  </span>
                )}
              </div>

              {/* Authority Role & Scope of Impact (8 cols) */}
              <div className="lg:col-span-8 space-y-2.5">
                <h3 className="text-lg sm:text-xl font-extrabold text-neutral-900 tracking-tight leading-snug">
                  {item.role}
                </h3>

                <p className="text-sm sm:text-base text-neutral-700 leading-relaxed font-normal">
                  {item.scope}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
