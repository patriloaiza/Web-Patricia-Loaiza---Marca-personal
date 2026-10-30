import React, { useState } from 'react';
import { SERVICES, BRAND_INFO } from '../data/content.ts';
import { ArrowRight, CheckCircle2, Target, Sparkles, ExternalLink, ShieldCheck } from 'lucide-react';

export const PillarsSection: React.FC = () => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(SERVICES[0].id);

  const activeService = SERVICES.find((s) => s.id === selectedServiceId) || SERVICES[0];

  return (
    <section id="cuatro-servicios" className="py-20 bg-neutral-50 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#E30613] mb-3">
            <span>■</span>
            <span>SERVICIOS ESTRATÉGICOS DE CONSULTORÍA</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight max-w-4xl">
            Cuatro servicios enfocados en la transformación real y la rentabilidad de tu consultoría.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-600 max-w-3xl">
            No son cursos masivos ni tareas técnicas dispersas. Son cuatro intervenciones estratégicas de consultoría diseñadas para terapeutas, psicólogos, coaches y profesionales con experiencia que necesitan estructurar su oferta, consolidar su autoridad y escalar sin colapsar su tiempo.
          </p>
        </div>

        {/* 4 Services Selector Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
          {SERVICES.map((service) => {
            const isSelected = service.id === selectedServiceId;
            return (
              <button
                key={service.id}
                onClick={() => setSelectedServiceId(service.id)}
                className={`p-5 rounded-xl text-left transition-all border cursor-pointer ${
                  isSelected
                    ? 'bg-white border-[#E30613] shadow-md ring-2 ring-[#E30613]/20'
                    : 'bg-white/80 border-neutral-200 hover:border-neutral-300 text-neutral-600'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xs font-mono font-bold ${isSelected ? 'text-[#E30613]' : 'text-neutral-400'}`}>
                    Servicio {service.number}
                  </span>
                  {isSelected && <span className="w-2.5 h-2.5 rounded-full bg-[#E30613]" />}
                </div>
                <h3 className={`text-base font-bold tracking-tight ${isSelected ? 'text-neutral-900' : 'text-neutral-700'}`}>
                  {service.name}
                </h3>
                <p className="text-xs text-neutral-500 line-clamp-2 mt-1 leading-snug">
                  {service.subname}
                </p>
              </button>
            );
          })}
        </div>

        {/* Active Service Showcase Card */}
        <div className="bg-white border border-neutral-200 rounded-2xl p-6 sm:p-10 shadow-sm">
          {/* Top Banner */}
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-8 border-b border-neutral-200">
            <div className="space-y-2 max-w-3xl">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono font-bold text-[#E30613] bg-red-50 px-3 py-1 rounded border border-red-200">
                  Servicio Oficial {activeService.number}
                </span>
                <span className="text-xs font-bold text-neutral-500 uppercase tracking-wide">
                  Metodología Crea y Monetiza®
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
                {activeService.name}
              </h3>
              <p className="text-sm sm:text-base font-bold text-[#E30613]">
                {activeService.subname}
              </p>
              <p className="text-sm text-neutral-600 leading-relaxed pt-1">
                {activeService.focus}
              </p>
              <div className="p-3 bg-neutral-50 rounded-lg border border-neutral-200 text-xs text-neutral-700">
                <strong className="text-neutral-900">Para quién es: </strong>
                <span>{activeService.targetProfile}</span>
              </div>
            </div>

            <a
              href={BRAND_INFO.prediagnosticoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 text-xs sm:text-sm font-bold text-white bg-[#E30613] hover:bg-[#c90510] rounded-lg transition-all flex items-center justify-center gap-2 shrink-0 cursor-pointer shadow-md hover:shadow-red-600/20"
            >
              <span>Evaluar este servicio en el Prediagnóstico</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Core Content: Transformation & Strategic Benefits */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8 items-start">
            {/* Left: Transformation Matrix (Antes vs Después) (5 Cols) */}
            <div className="lg:col-span-5 space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-900 flex items-center gap-2">
                <Target className="w-4 h-4 text-[#E30613]" />
                <span>La Transformación que Logra tu Negocio</span>
              </h4>

              <div className="p-5 rounded-xl bg-neutral-50 border border-neutral-200 space-y-4">
                <div>
                  <span className="text-neutral-400 font-bold block text-[11px] uppercase tracking-wider">
                    Punto de Partida Actual (El Dolor)
                  </span>
                  <p className="text-xs sm:text-sm text-neutral-700 mt-1 leading-relaxed">
                    {activeService.transformation.before}
                  </p>
                </div>

                <div className="pt-4 border-t border-neutral-200">
                  <span className="text-[#E30613] font-bold block text-[11px] uppercase tracking-wider">
                    Transformación Lograda (Tu Nueva Realidad)
                  </span>
                  <p className="text-xs sm:text-sm text-neutral-900 font-semibold mt-1 leading-relaxed">
                    {activeService.transformation.after}
                  </p>
                </div>
              </div>

              {/* Strategic Impact Quote */}
              <div className="p-4 rounded-xl bg-red-50/60 border border-red-200 text-xs">
                <strong className="text-[#E30613] block mb-1">Impacto Estratégico en tu Vida:</strong>
                <p className="text-neutral-800 font-medium leading-relaxed">
                  {activeService.strategicImpact}
                </p>
              </div>
            </div>

            {/* Right: Beneficios Estratégicos Concretos (7 Cols) */}
            <div className="lg:col-span-7 space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-900 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#E30613]" />
                <span>Beneficios y Resultados Clave del Acompañamiento</span>
              </h4>

              <div className="space-y-3">
                {activeService.benefits.map((benefit, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-white border border-neutral-200 hover:border-neutral-300 transition-all flex items-start gap-3.5 shadow-xs"
                  >
                    <div className="w-6 h-6 rounded-full bg-red-50 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-[#E30613] font-bold text-xs">0{idx + 1}</span>
                    </div>
                    <p className="text-xs sm:text-sm text-neutral-800 leading-relaxed font-medium">
                      {benefit}
                    </p>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200 flex items-center justify-between text-xs text-neutral-600">
                <span className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#E30613]" />
                  <span>Se entrega bajo estricto cierre consultivo y transferencia de capacidad instalada.</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
