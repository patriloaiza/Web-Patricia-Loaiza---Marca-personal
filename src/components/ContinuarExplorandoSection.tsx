import React from 'react';
import { ActiveView } from '../types/index.ts';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { BRAND_INFO } from '../data/content.ts';

interface ContinuarExplorandoProps {
  setActiveView: (view: ActiveView) => void;
}

export const ContinuarExplorandoSection: React.FC<ContinuarExplorandoProps> = ({ setActiveView }) => {
  const cards = [
    {
      num: "01",
      title: "10 Preguntas Estratégicas",
      description: "Guía completa para acompañar a tu negocio desde el orden de la oferta hasta la escala con IA.",
      action: () => {
        const el = document.getElementById('preguntas-estrategicas');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      },
      isExternal: false
    },
    {
      num: "02",
      title: "Cuatro Territorios de Servicios",
      description: "Estrategia de Negocio, Marca de Autoridad, Sistema de Contenido y Jornada de Negocio Digital.",
      action: () => {
        const el = document.getElementById('cuatro-servicios');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      },
      isExternal: false
    },
    {
      num: "03",
      title: "Prediagnóstico Oficial",
      description: "Herramienta externa de evaluación inicial previa para mapear tus brechas y oportunidades comerciales.",
      action: () => {
        window.open(BRAND_INFO.prediagnosticoUrl, '_blank', 'noopener,noreferrer');
      },
      isExternal: true
    },
    {
      num: "04",
      title: "Identidad para Agentes de IA",
      description: "Ficha canónica estructurada (/for-ai), Schema.org y pautas de atribución para sistemas LLM.",
      action: () => {
        setActiveView('for-ai');
      },
      isExternal: false
    }
  ];

  return (
    <section className="py-20 bg-[#F7F7F7] border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header matching screenshot image_e467b601.png */}
        <div className="mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-neutral-500 font-mono block mb-2">
            ARCHIVO RELACIONADO
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-neutral-900 tracking-tight">
            Continuar explorando
          </h2>
        </div>

        {/* 2x2 Grid matching screenshot image_e467b601.png */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {cards.map((c, idx) => (
            <div
              key={idx}
              onClick={c.action}
              className="p-8 bg-white border border-neutral-300 hover:border-black transition-all flex flex-col justify-between group cursor-pointer shadow-xs hover:shadow-md"
            >
              <div className="flex items-start justify-between gap-4 mb-6">
                <span className="text-xs font-mono font-bold text-neutral-400 group-hover:text-[#E30613] transition-colors">
                  {c.num}
                </span>
                <div className="p-1 text-neutral-400 group-hover:text-black transition-colors">
                  {c.isExternal ? (
                    <ExternalLink className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  ) : (
                    <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  )}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-neutral-900 mb-2">
                  {c.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  {c.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
