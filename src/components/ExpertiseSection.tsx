import React, { useState } from 'react';
import { SERVICES, BRAND_INFO } from '../data/content.ts';
import { ServiceItem } from '../types/index.ts';
import { ArrowRight, CheckCircle2, ExternalLink, X, Package, Target, Layers } from 'lucide-react';

export const ExpertiseSection: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

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
          Cuatro áreas de consultoría para estructurar, diferenciar y escalar tu práctica.
        </h2>

        <p className="text-base text-neutral-400 max-w-3xl mb-14 leading-relaxed">
          Cada área aborda una dimensión crítica de tu negocio. Puedes contratarlas por separado según la prioridad identificada en tu diagnóstico o como parte de una ruta integral con la metodología Crea y Monetiza®.
        </p>

        {/* 4 Cards with Consistent Audit Pattern */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 border-t border-neutral-800 pt-12">
          {SERVICES.map((srv) => (
            <div 
              key={srv.id} 
              className="group flex flex-col justify-between p-6 bg-neutral-900/70 hover:bg-neutral-900 border border-neutral-800 hover:border-neutral-600 transition-all cursor-pointer rounded-xs"
              onClick={() => setSelectedService(srv)}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl sm:text-3xl font-black text-[#E30613] font-mono block group-hover:translate-x-1 transition-transform">
                    {srv.number}
                  </span>
                  <span className="text-[10px] font-mono font-bold uppercase text-neutral-500 bg-neutral-800/80 px-2 py-0.5 border border-neutral-700">
                    PRODUCTIZADO
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
                {/* Modalidades pills */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {srv.modalities.map((mod, idx) => (
                    <span key={idx} className="text-[10px] font-semibold text-neutral-400 bg-neutral-800/60 px-2 py-0.5 border border-neutral-700/60">
                      {mod}
                    </span>
                  ))}
                </div>

                <div className="pt-3 border-t border-neutral-800/80 flex items-center justify-between text-xs font-bold text-neutral-300 group-hover:text-white">
                  <span>Ver alcance y entregables</span>
                  <ArrowRight className="w-4 h-4 text-[#E30613] group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal / Detailed Drawer for Service Transformation */}
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
            <div className="bg-white text-neutral-900 max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 border-2 border-black shadow-2xl relative">
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-5 right-5 p-2 text-neutral-400 hover:text-black transition-colors cursor-pointer"
                aria-label="Cerrar modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-mono font-bold text-[#E30613]">{selectedService.number}</span>
                <span className="w-1.5 h-1.5 bg-[#E30613]" />
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-500">ÁREA DE CONSULTORÍA PRODUCTIZADA</span>
              </div>

              <h3 className="text-2xl font-black text-neutral-900 mb-1">{selectedService.name}</h3>
              <p className="text-sm font-bold text-[#E30613] mb-4">{selectedService.subname}</p>

              <p className="text-xs sm:text-sm text-neutral-600 mb-6 leading-relaxed">
                {selectedService.focus}
              </p>

              {/* Ideal para ti si: */}
              <div className="p-4 bg-neutral-50 border border-neutral-200 mb-6 text-xs text-neutral-800">
                <strong className="text-neutral-900 block mb-2 font-mono uppercase tracking-wider text-[11px]">
                  Para quién está diseñado:
                </strong>
                <ul className="space-y-1.5">
                  {selectedService.idealFor.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-[#E30613] mt-1 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Qué trabajamos y entregables tangibles */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 text-xs">
                <div className="p-4 bg-neutral-50 border border-neutral-200">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-900 block mb-2 font-mono">
                    QUÉ TRABAJAMOS:
                  </span>
                  <ul className="space-y-1.5">
                    {selectedService.whatWeWork.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-1.5 text-neutral-700">
                        <span className="w-1 h-1 bg-black mt-1.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 bg-neutral-900 text-white border border-neutral-800">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#E30613] block mb-2 font-mono">
                    QUÉ TE LLEVAS (ENTREGABLES):
                  </span>
                  <ul className="space-y-1.5">
                    {selectedService.deliverablesTangibles.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-1.5 text-neutral-200 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#E30613] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Transformation Contrast */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 text-xs">
                <div className="p-4 bg-red-50/60 border border-red-200 rounded">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-red-700 block mb-1 font-mono">
                    ANTES (Situación Actual)
                  </span>
                  <p className="text-neutral-800 leading-relaxed">{selectedService.transformation.before}</p>
                </div>
                <div className="p-4 bg-emerald-50/70 border border-emerald-200 rounded">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 block mb-1 font-mono">
                    DESPUÉS (Con Capacidad Instalada)
                  </span>
                  <p className="text-neutral-900 leading-relaxed font-medium">{selectedService.transformation.after}</p>
                </div>
              </div>

              {/* Modalities available */}
              <div className="p-4 bg-[#F7F7F7] border border-neutral-200 mb-6 text-xs">
                <strong className="text-neutral-900 block mb-2 font-mono uppercase tracking-wider text-[11px]">
                  Modalidades de contratación disponibles:
                </strong>
                <div className="flex flex-wrap gap-2">
                  {selectedService.modalities.map((mod, idx) => (
                    <span key={idx} className="px-3 py-1 bg-white border border-neutral-300 text-neutral-800 font-bold text-[11px]">
                      {mod}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA Inside Modal */}
              <div className="pt-4 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs font-semibold text-neutral-500">
                  Diagnóstico personalizado previo sin compromiso.
                </span>
                <a
                  href={BRAND_INFO.prediagnosticoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3 bg-[#E30613] hover:bg-[#c90510] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <span>INICIAR CON PREDIAGNÓSTICO</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
