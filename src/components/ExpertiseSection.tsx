import React from 'react';
import { SERVICES } from '../data/content.ts';
import { ServiceItem } from '../types/index.ts';
import { ArrowRight, Package, Target, Layers } from 'lucide-react';

interface ExpertiseSectionProps {
  onSelectPilar?: (pilarId: string) => void;
}

export const ExpertiseSection: React.FC<ExpertiseSectionProps> = ({ onSelectPilar }) => {

  return (
    <section id="cuatro-servicios" className="py-24 bg-[#0A0A0A] text-white border-b border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Kicker */}
        <div className="flex items-center gap-2 mb-4">
          <span className="w-2.5 h-2.5 bg-[#E30613]" />
          <span className="text-xs font-bold uppercase tracking-widest text-[#E30613] font-mono">
            ÁREAS DE CONSULTORÍA
          </span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.1] mb-4 max-w-4xl">
          Cinco pilares de servicio para estructurar, posicionar y desarrollar tu negocio.
        </h2>

        <p className="text-base text-neutral-400 max-w-3xl mb-14 leading-relaxed">
          Los pilares 1 al 4 son consultoría estratégica en modalidad colaborativa <span className="text-white font-semibold">«Lo hacemos juntos»</span> (la ejecución de las acciones acordadas es del cliente). El pilar 5 es implementación tecnológica <span className="text-white font-semibold">«Lo hago por ti»</span> (ecosistema digital llave en mano prediseñado y adaptado sobre GoHighLevel).
        </p>

        {/* 4 Strategic Consulting Cards (Pilares 1 al 4: Lo hacemos juntos) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 border-t border-neutral-800 pt-12">
          {SERVICES.slice(0, 4).map((srv) => (
            <div 
              key={srv.id} 
              className="group flex flex-col justify-between p-6 bg-neutral-900/70 hover:bg-neutral-900 border border-neutral-800 hover:border-neutral-600 transition-all cursor-pointer rounded-xs"
              onClick={() => onSelectPilar && onSelectPilar(srv.id)}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl sm:text-3xl font-black text-[#E30613] font-mono block group-hover:translate-x-1 transition-transform">
                    {srv.number}
                  </span>
                  <span className="text-[10px] font-mono font-bold uppercase text-neutral-400 bg-neutral-800/90 px-2 py-0.5 border border-neutral-700">
                    LO HACEMOS JUNTOS
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white mb-1.5 leading-snug">
                  {srv.name}
                </h3>

                <p className="text-xs font-semibold text-[#E30613] mb-4 leading-tight">
                  {srv.subname}
                </p>

                {/* 1. Para quién es */}
                <div className="pt-3 border-t border-neutral-800/80 mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 block mb-1.5 font-mono flex items-center gap-1">
                    <Target className="w-3 h-3 text-[#E30613]" />
                    <span>PARA QUIÉN ES:</span>
                  </span>
                  <ul className="space-y-1">
                    {srv.idealFor.slice(0, 2).map((item, idx) => (
                      <li key={idx} className="text-xs text-neutral-300 leading-snug flex items-start gap-1.5">
                        <span className="w-1 h-1 bg-[#E30613] mt-1.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 2. Qué trabajamos */}
                <div className="pt-3 border-t border-neutral-800/80 mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 block mb-1.5 font-mono flex items-center gap-1">
                    <Layers className="w-3 h-3 text-[#E30613]" />
                    <span>QUÉ TRABAJAMOS:</span>
                  </span>
                  <ul className="space-y-1">
                    {srv.whatWeWork.slice(0, 2).map((item, idx) => (
                      <li key={idx} className="text-xs text-neutral-300 leading-snug flex items-start gap-1.5">
                        <span className="w-1 h-1 bg-white mt-1.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 3. Qué te llevas (Entregables) */}
                <div className="pt-3 border-t border-neutral-800/80 mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 block mb-1.5 font-mono flex items-center gap-1">
                    <Package className="w-3 h-3 text-[#E30613]" />
                    <span>QUÉ TE LLEVAS (ENTREGABLES):</span>
                  </span>
                  <ul className="space-y-1">
                    {srv.deliverablesTangibles.slice(0, 2).map((item, idx) => (
                      <li key={idx} className="text-xs text-neutral-200 font-medium leading-snug flex items-start gap-1.5">
                        <span className="w-1.5 h-1.5 bg-[#E30613] mt-1 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                {/* Modalidad Badge */}
                <div className="mb-4">
                  <span className="text-[10px] font-semibold text-neutral-300 bg-neutral-800 px-2 py-1 border border-neutral-700 block text-center">
                    Modalidad: Lo hacemos juntos (ejecución del cliente)
                  </span>
                </div>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    if (onSelectPilar) onSelectPilar(srv.id);
                  }}
                  className="w-full pt-3 border-t border-neutral-800/80 flex items-center justify-between text-xs font-bold text-neutral-300 group-hover:text-white cursor-pointer bg-transparent text-left"
                >
                  <span>Ver alcance y entregables</span>
                  <ArrowRight className="w-4 h-4 text-[#E30613] group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Card: Pilar 5 · Ecosistema Digital Llave en Mano (Lo hago por ti) */}
        {SERVICES[4] && (
          <div 
            onClick={() => onSelectPilar && onSelectPilar(SERVICES[4].id)}
            className="mt-8 p-6 sm:p-8 bg-neutral-900/90 hover:bg-neutral-900 border-2 border-neutral-800 hover:border-neutral-600 transition-all rounded-xs cursor-pointer group flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6"
          >
            <div className="max-w-3xl">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="text-xl font-mono font-black text-[#E30613]">PILAR 05</span>
                <span className="w-1.5 h-1.5 bg-[#E30613]" />
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-white bg-[#E30613] px-2 py-0.5">
                  MODALIDAD: LO HAGO POR TI
                </span>
                <span className="text-xs text-neutral-400 font-mono">Tecnología base: GoHighLevel (GHL)</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white mb-2">
                {SERVICES[4].name}: {SERVICES[4].subname}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed mb-4">
                {SERVICES[4].focus}
              </p>
              <div className="p-3 bg-neutral-950 border border-neutral-800 text-xs text-neutral-300">
                <strong className="text-white font-bold block mb-0.5 font-mono uppercase text-[10px]">
                  Salvedad de alcance:
                </strong>
                Es una implementación técnica prediseñada que se adapta a tu marca y oferta. No es un desarrollo de software desde cero ni incluye diseño a medida ilimitado.
              </div>
            </div>

            <div className="shrink-0 flex flex-col items-end gap-3 w-full lg:w-auto">
              <div className="text-right hidden lg:block text-xs text-neutral-400">
                <span className="text-white font-bold block">Página web · Embudo · CRM · Automatizaciones</span>
                <span>Configurado y listo para operar</span>
              </div>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  if (onSelectPilar) onSelectPilar(SERVICES[4].id);
                }}
                className="w-full lg:w-auto px-5 py-3 bg-[#E30613] hover:bg-[#c90510] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <span>Ver alcance y entregables: Ecosistema Digital</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

