import React from 'react';
import { PAIN_POINTS, BRAND_INFO } from '../data/content.ts';
import { ArrowRight, AlertCircle, CheckCircle2 } from 'lucide-react';

export const TuExperienciaSection: React.FC = () => {
  return (
    <section className="py-20 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Kicker */}
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2.5 h-2.5 bg-[#E30613]" />
          <span className="text-xs font-bold uppercase tracking-widest text-neutral-500 font-mono">
            PUNTO DE PARTIDA
          </span>
        </div>

        {/* Section Headline matching PDF Page 2 */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-neutral-900 tracking-tight leading-tight mb-4 max-w-4xl">
          Tu experiencia tiene valor. El reto es convertirla en un negocio estructurado.
        </h2>

        <p className="text-base sm:text-lg text-neutral-600 max-w-3xl mb-14 leading-relaxed">
          Muchos profesionales con años de trayectoria clínica, académica o empresarial se encuentran en un momento donde necesitan organizar lo que saben, diferenciar su propuesta y dejar de depender de la venta de horas. ¿Te reconoces en alguna de estas situaciones?
        </p>

        {/* 6 Pain Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PAIN_POINTS.map((item) => (
            <div
              key={item.id}
              className="p-6 bg-[#F7F7F7] border border-neutral-200 hover:border-black transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-neutral-400 group-hover:text-[#E30613] transition-colors">
                    {item.number}
                  </span>
                  <AlertCircle className="w-4 h-4 text-neutral-400 group-hover:text-[#E30613] transition-colors" />
                </div>

                <h3 className="text-base font-bold text-neutral-900 mb-2 leading-snug">
                  {item.title}
                </h3>

                <p className="text-sm text-neutral-600 leading-relaxed mb-6">
                  {item.challenge}
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-200/80 flex items-center justify-between text-xs font-bold text-neutral-800">
                <span className="text-[11px] text-[#E30613] uppercase tracking-wider font-mono">
                  {item.solutionRef}
                </span>
                <span className="w-1.5 h-1.5 bg-[#E30613]" />
              </div>
            </div>
          ))}
        </div>

        {/* Empathy Bottom Note */}
        <div className="mt-12 p-6 bg-neutral-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6 border-l-4 border-[#E30613]">
          <div>
            <h4 className="text-base font-bold text-white mb-1">
              Un negocio bien estructurado no necesita vender todo lo que sabes.
            </h4>
            <p className="text-xs sm:text-sm text-neutral-300">
              Necesita convertir tus conocimientos más valiosos en soluciones comprensibles, rentables y fáciles de contratar.
            </p>
          </div>
          <a
            href={BRAND_INFO.prediagnosticoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-5 py-3 bg-[#E30613] hover:bg-[#c90510] text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-colors cursor-pointer"
          >
            <span>REALIZAR PREDIAGNÓSTICO</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
