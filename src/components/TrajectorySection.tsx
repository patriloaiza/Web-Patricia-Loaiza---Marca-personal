import React from 'react';
import { Award, Briefcase, GraduationCap, Building2, Globe2 } from 'lucide-react';

export const TrajectorySection: React.FC = () => {
  const milestones = [
    {
      period: "Formación de Base",
      title: "Administración de Empresas",
      desc: "Administradora de Empresas por la Universidad Cooperativa de Colombia (UCC). Especialización posterior en gestión de proyectos y desarrollo organizacional."
    },
    {
      period: "Consultoría Internacional",
      title: "Organizaciones Internacionales: Unión Europea & FAO",
      desc: "Consultora en programas de desarrollo institucional y social con la Unión Europea en el Bajo Magdalena, y proyectos con la FAO en Antioquia, estructurando metodologías aplicables en terreno."
    },
    {
      period: "Sector Corporativo",
      title: "Gestión Administrativa Multinacional",
      desc: "Gestión y coordinación de procedimientos administrativos y operativos en compañía multinacional de alimentos (Nestlé)."
    },
    {
      period: "Ecosistemas Digitales",
      title: "Automatización, Arquitectura de Negocios & GoHighLevel",
      desc: "Especialización en sistemas de conversión, embudos, infraestructura GoHighLevel, CRM y productización consultiva para mentores y terapeutas."
    },
    {
      period: "Consolidación Metodológica",
      title: "Creación de CREA Y MONETIZA®",
      desc: "Sistematización de la metodología de consultoría para transformar conocimiento en un negocio estructurado con IA y capacidad instalada para profesionales de 40 a 65 años."
    }
  ];

  return (
    <section className="py-20 bg-neutral-50 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#E30613] mb-3">
            <span>■</span>
            <span>AUTORIDAD Y TRAYECTORIA VERIFICABLE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight max-w-3xl">
            De la gestión en terreno a la estructuración de negocios con Inteligencia Artificial.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-600 max-w-3xl">
            La autoridad no proviene de autoproclamarse gurú, sino de una trayectoria rigurosa en administración, proyectos internacionales, gestión comercial y sistematización de procesos reales.
          </p>
        </div>

        {/* Milestone Timeline */}
        <div className="space-y-4">
          {milestones.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl bg-white border border-neutral-200 hover:border-neutral-300 transition-colors flex flex-col md:flex-row md:items-baseline justify-between gap-4 shadow-xs"
            >
              <div className="md:w-1/4 shrink-0">
                <span className="text-xs font-mono font-bold text-[#E30613] bg-red-50 px-2.5 py-1 rounded border border-red-200 inline-block">
                  {item.period}
                </span>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-base sm:text-lg font-bold text-neutral-900 mb-1.5">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Four Core Competency Tiles */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-12 pt-10 border-t border-neutral-200 text-xs">
          <div className="p-4 rounded-xl bg-white border border-neutral-200 shadow-xs">
            <span className="text-neutral-400 font-mono font-bold block mb-1">01 / ESTRATEGIA</span>
            <strong className="text-neutral-900 block text-sm mb-1">Diagnóstico Clínico</strong>
            <p className="text-neutral-600">Separación rigurosa de síntomas vs causas raíz.</p>
          </div>
          <div className="p-4 rounded-xl bg-white border border-neutral-200 shadow-xs">
            <span className="text-neutral-400 font-mono font-bold block mb-1">02 / PRODUCTIZACIÓN</span>
            <strong className="text-neutral-900 block text-sm mb-1">De la Hora a la Oferta</strong>
            <p className="text-neutral-600">Portafolio productizado y modelos no dependientes de tiempo.</p>
          </div>
          <div className="p-4 rounded-xl bg-white border border-neutral-200 shadow-xs">
            <span className="text-neutral-400 font-mono font-bold block mb-1">03 / IA APLICADA</span>
            <strong className="text-neutral-900 block text-sm mb-1">Clon de Voz & Criterio</strong>
            <p className="text-neutral-600">Entrenamiento de modelos con la cadencia y experiencia del autor.</p>
          </div>
          <div className="p-4 rounded-xl bg-white border border-neutral-200 shadow-xs">
            <span className="text-neutral-400 font-mono font-bold block mb-1">04 / TECNOLOGÍA</span>
            <strong className="text-neutral-900 block text-sm mb-1">Ecosistema GoHighLevel</strong>
            <p className="text-neutral-600">Automatizaciones, CRM y embudos operando sin fricción técnica.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
