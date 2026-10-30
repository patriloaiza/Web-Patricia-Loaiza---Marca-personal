import React from 'react';
import { PRINCIPLES, BRAND_INFO } from '../data/content.ts';
import { CheckCircle2, XCircle } from 'lucide-react';

export const Philosophy: React.FC = () => {
  return (
    <section id="principios" className="py-20 bg-neutral-50 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#E30613] mb-3">
            <span>■</span>
            <span>FILOSOFÍA DE INTERVENCIÓN Y CRITERIO</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight max-w-3xl">
            Tres principios inquebrantables. Cero humo, cero promesas vacías.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-600 max-w-3xl">
            En un mercado saturado de recetas mágicas, tácticas efímeras y cursos masivos, sostenemos que el verdadero valor de un experto senior solo se consolida con rigor, diagnóstico y estrategia.
          </p>
        </div>

        {/* 3 Principles Cards in Light Theme */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {PRINCIPLES.map((principle) => (
            <div
              key={principle.number}
              className="bg-white border border-neutral-200 rounded-xl p-8 hover:border-neutral-300 transition-all shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl font-extrabold text-[#E30613] font-mono">
                    {principle.number}
                  </span>
                  <span className="text-xs font-semibold text-neutral-600 bg-neutral-100 px-3 py-1 rounded border border-neutral-200">
                    {principle.tagline}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-neutral-900 mb-4 tracking-tight">
                  {principle.title}
                </h3>

                <p className="text-sm text-neutral-600 leading-relaxed mb-6">
                  {principle.description}
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-100 space-y-2">
                {principle.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-neutral-700">
                    <span className="text-[#E30613] font-bold mt-0.5">›</span>
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Core Posture Callout: Contrast Table in Light Theme */}
        <div className="bg-white border border-neutral-200 rounded-2xl p-8 sm:p-10 shadow-sm">
          <div className="max-w-3xl mb-8">
            <h3 className="text-2xl font-bold text-neutral-900 tracking-tight mb-3">
              Nuestra postura: Cierre Consultivo vs. Venta Presencial Tradicional
            </h3>
            <p className="text-sm text-neutral-600 italic">
              {BRAND_INFO.coreQuote}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-neutral-200">
            {/* What we do NOT do */}
            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-500 flex items-center gap-2">
                <XCircle className="w-4 h-4 text-neutral-400" />
                <span>Lo que no hacemos (Prácticas del mercado)</span>
              </h4>
              <ul className="space-y-3 text-sm text-neutral-600">
                <li className="flex items-start gap-2.5">
                  <span className="text-neutral-400 font-bold mt-0.5">✕</span>
                  <span>No vendemos lo que el prospecto cree necesitar solo por facturar rápido.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-neutral-400 font-bold mt-0.5">✕</span>
                  <span>No usamos falsa urgencia, descuentos inventados ni presión emocional.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-neutral-400 font-bold mt-0.5">✕</span>
                  <span>No prometemos cifras de facturación, millones mágicos ni viralidad sin sustento.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-neutral-400 font-bold mt-0.5">✕</span>
                  <span>No creamos dependencia técnica para que tengas que pagar una agencia indefinidamente.</span>
                </li>
              </ul>
            </div>

            {/* What CREA Y MONETIZA does */}
            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#E30613] flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#E30613]" />
                <span>El estándar CREA Y MONETIZA® (Patricia Loaiza)</span>
              </h4>
              <ul className="space-y-3 text-sm text-neutral-800">
                <li className="flex items-start gap-2.5">
                  <span className="text-[#E30613] font-bold mt-0.5">✓</span>
                  <span>Diagnóstico clínico inicial de 10 dimensiones para identificar el cuello de botella real.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#E30613] font-bold mt-0.5">✓</span>
                  <span>Propuestas trazables con tres argumentos: Evidencia, Prioridad y Ruta metodológica.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#E30613] font-bold mt-0.5">✓</span>
                  <span>Construcción de activos estructurados (Estrategia, Oferta, Clon de Voz con IA y CRM).</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#E30613] font-bold mt-0.5">✓</span>
                  <span>Transferencia total de conocimiento para dejar capacidad instalada y autonomía.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
