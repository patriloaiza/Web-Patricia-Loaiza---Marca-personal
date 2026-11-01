import React from 'react';
import { PROCESS_5_STEPS, BRAND_INFO } from '../data/content.ts';
import { ArrowRight, CheckCircle2, ShieldCheck, Cpu } from 'lucide-react';

export const Process5StepsSection: React.FC = () => {
  return (
    <section id="como-trabajo" className="py-20 bg-[#F7F7F7] border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Kicker */}
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2.5 h-2.5 bg-[#E30613]" />
          <span className="text-xs font-bold uppercase tracking-widest text-neutral-500 font-mono">
            RUTA DE INTERVENCIÓN EN 5 PASOS
          </span>
        </div>

        {/* Section Headline */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-neutral-900 tracking-tight leading-tight mb-3">
              Cómo trabajamos: del diagnóstico a la capacidad instalada.
            </h2>
            <p className="text-base sm:text-lg text-neutral-600 max-w-2xl leading-relaxed">
              Una secuencia clara, predecible y orientada a resultados tangibles. Sin consultorías abiertas interminables ni improvisación sobre la marcha.
            </p>
          </div>

          {/* Microcopy destacado de la auditoría */}
          <div className="p-4 bg-white border-2 border-black shrink-0 max-w-xs shadow-xs">
            <div className="flex items-center gap-2 text-xs font-black uppercase text-[#E30613] font-mono mb-1">
              <ShieldCheck className="w-4 h-4 text-[#E30613]" />
              <span>GARANTÍA DE MÉTODO</span>
            </div>
            <p className="text-xs font-bold text-neutral-900 leading-tight">
              Diagnóstico personalizado. Entregables y fases definidos. Cero venta de horas sueltas.
            </p>
          </div>
        </div>

        {/* 5 Steps Linear Cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {PROCESS_5_STEPS.map((step, idx) => (
            <div
              key={step.step}
              className="p-5 bg-white border-2 border-neutral-200 hover:border-black transition-all flex flex-col justify-between group relative shadow-xs"
            >
              <div>
                {/* Step indicator */}
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-neutral-100">
                  <span className="text-sm font-mono font-black text-[#E30613]">
                    PASO {step.step}
                  </span>
                  <span className="text-[11px] font-mono font-bold text-neutral-400 group-hover:text-black transition-colors">
                    0{idx + 1}/05
                  </span>
                </div>

                <h3 className="text-lg font-black text-neutral-900 mb-1 leading-snug">
                  {step.title}
                </h3>

                <p className="text-[11px] font-bold uppercase tracking-wider text-neutral-500 mb-3 font-mono">
                  {step.subtitle}
                </p>

                <p className="text-xs text-neutral-600 leading-relaxed mb-4">
                  {step.action}
                </p>
              </div>

              <div className="pt-3 border-t border-neutral-100">
                <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 block mb-1 font-mono">
                  ENTREGABLE / SALIDA:
                </span>
                <div className="text-xs font-semibold text-neutral-800 leading-tight flex items-start gap-1.5">
                  <span className="w-1.5 h-1.5 bg-[#E30613] mt-1 shrink-0" />
                  <span>{step.output}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
