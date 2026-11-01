import React from 'react';
import { INCLUDED_NOT_INCLUDED, BRAND_INFO } from '../data/content.ts';
import { Check, X, ShieldCheck, ArrowRight, UserCheck, UserX } from 'lucide-react';

export const IncludedNotIncludedSection: React.FC = () => {
  return (
    <section className="py-20 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Kicker */}
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2.5 h-2.5 bg-[#E30613]" />
          <span className="text-xs font-bold uppercase tracking-widest text-neutral-500 font-mono">
            CLARIDAD Y ALCANCE DEL SERVICIO
          </span>
        </div>

        {/* Section Headline */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-neutral-900 tracking-tight leading-tight mb-4 max-w-4xl">
          ¿Es esta consultoría para ti? Claridad de encaje y límites del servicio.
        </h2>

        <p className="text-base sm:text-lg text-neutral-600 max-w-3xl mb-12 leading-relaxed">
          Para garantizar la máxima calidad y resultados tangibles, trabajamos bajo un estricto criterio de encaje mutuo. No aceptamos clientes donde no podamos generar un impacto estratégico real.
        </p>

        {/* 2x2 Contrast Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Box 1: Para quién es / Para quién NO es */}
          <div className="p-8 bg-[#F7F7F7] border-2 border-neutral-200 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-neutral-200">
                <UserCheck className="w-4 h-4 text-emerald-600" />
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-900 font-mono">
                  ESTE SERVICIO ES IDEAL PARA TI SI:
                </span>
              </div>
              <ul className="space-y-3 mb-6">
                {INCLUDED_NOT_INCLUDED.forWhom.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-800">
                    <Check className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-neutral-200">
              <div className="flex items-center gap-2 mb-3">
                <UserX className="w-4 h-4 text-neutral-400" />
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-500 font-mono">
                  NO ES PARA TI SI:
                </span>
              </div>
              <ul className="space-y-2">
                {INCLUDED_NOT_INCLUDED.notForWhom.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-neutral-500">
                    <X className="w-3.5 h-3.5 text-neutral-400 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Box 2: Qué incluye / Qué NO incluye */}
          <div className="p-8 bg-[#F7F7F7] border-2 border-neutral-200 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-neutral-200">
                <ShieldCheck className="w-4 h-4 text-[#E30613]" />
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-900 font-mono">
                  QUÉ INCLUYE LA INTERVENCIÓN:
                </span>
              </div>
              <ul className="space-y-3 mb-6">
                {INCLUDED_NOT_INCLUDED.includes.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-800">
                    <span className="w-1.5 h-1.5 bg-[#E30613] mt-2 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-neutral-200">
              <span className="text-xs font-bold uppercase tracking-wider text-neutral-500 block mb-3 font-mono">
                QUÉ NO INCLUYE (CERO AMBIGÜEDAD):
              </span>
              <ul className="space-y-2">
                {INCLUDED_NOT_INCLUDED.notIncludes.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-neutral-500">
                    <X className="w-3.5 h-3.5 text-neutral-400 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Pre-diagnostic invitation strip */}
        <div className="p-6 bg-neutral-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4 border-l-4 border-[#E30613]">
          <div>
            <h4 className="text-sm sm:text-base font-bold text-white mb-1">
              ¿Quieres evaluar si existe encaje para trabajar juntos?
            </h4>
            <p className="text-xs text-neutral-400">
              Completa el prediagnóstico oficial y recibe la devolución estratégica de tu caso.
            </p>
          </div>
          <a
            href={BRAND_INFO.prediagnosticoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 bg-[#E30613] hover:bg-[#c90510] text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-colors shrink-0 cursor-pointer shadow-sm"
          >
            <span>EVALUAR MI CASO</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
