import React from 'react';
import { 
  CONSULTING_PRINCIPLES, 
  HITOS_EVOLUCION, 
  FORMACION_ACADEMICA,
  BRAND_INFO 
} from '../data/content.ts';
import { Award, Briefcase, GraduationCap, CheckCircle2, ShieldCheck, Quote } from 'lucide-react';

export const SobrePatriciaSection: React.FC = () => {
  return (
    <section id="sobre-patricia-trayectoria" className="py-24 bg-[#F7F7F7] border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Kicker */}
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2.5 h-2.5 bg-[#E30613]" />
          <span className="text-xs font-bold uppercase tracking-widest text-neutral-500 font-mono">
            AUTORIDAD, POSTURA Y TRAYECTORIA
          </span>
        </div>

        {/* Section Headline */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-neutral-900 tracking-tight leading-tight mb-4 max-w-4xl">
          Estrategia, experiencia institucional y criterio tecnológico.
        </h2>

        <p className="text-base sm:text-lg text-neutral-600 max-w-3xl mb-14 leading-relaxed">
          Más de quince años de experiencia conectando el rigor administrativo corporativo, la coordinación de proyectos territoriales en organismos multilaterales y la consultoría estratégica para profesionales del conocimiento.
        </p>

        {/* PARTE 1: Postura Editorial y los 4 Principios de Consultoría */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Postura Quote Card (5 cols) */}
          <div className="lg:col-span-5 p-8 bg-white border-2 border-black shadow-[6px_6px_0px_0px_#0A0A0A] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-neutral-200">
                <span className="text-xs font-bold uppercase tracking-widest text-neutral-400 font-mono">
                  POSTURA OFICIAL
                </span>
                <Quote className="w-5 h-5 text-[#E30613]" />
              </div>

              <blockquote className="text-lg sm:text-xl font-extrabold text-neutral-900 italic leading-snug mb-6">
                “No vendo lo que la persona cree que necesita. Le muestro, a partir de lo que encontramos en su diagnóstico, qué necesita resolver primero y cómo puedo ayudarla a hacerlo.”
              </blockquote>
            </div>

            <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src="/assets/aistudio/Patricia_Foto_Frente_1__e1725015.png"
                  alt="Patricia Loaiza"
                  className="w-11 h-11 rounded-full object-cover object-top border-2 border-[#E30613] shadow-xs"
                />
                <div>
                  <span className="text-xs font-black uppercase tracking-wider text-neutral-900 font-mono block">
                    PATRICIA LOAIZA
                  </span>
                  <span className="text-[11px] font-mono text-neutral-500">CONSULTORA DE NEGOCIOS</span>
                </div>
              </div>
            </div>
          </div>

          {/* Los 4 Principios de Consultoría (7 cols) */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 border border-neutral-200 shadow-xs">
            <span className="text-xs font-bold uppercase tracking-wider text-neutral-900 block mb-4 font-mono">
              CUATRO PRINCIPIOS INQUEBRANTABLES DE CONSULTORÍA:
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {CONSULTING_PRINCIPLES.map((principle) => (
                <div key={principle.number} className="p-4 bg-neutral-50 border border-neutral-200 rounded-xs">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-xs font-mono font-black text-[#E30613]">{principle.number}</span>
                    <span className="w-1.5 h-1.5 bg-[#E30613]" />
                    <span className="text-xs font-bold text-neutral-900 leading-snug">{principle.title}</span>
                  </div>
                  <p className="text-xs text-neutral-600 leading-relaxed mb-2">
                    {principle.description}
                  </p>
                  <span className="text-[10px] font-mono text-neutral-500 italic block">
                    "{principle.quote}"
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* PARTE 2: Trayectoria de Liderazgo (Timeline Escaneable sin fechas para elevar autoridad) */}
        <div className="mb-16">
          <div className="flex items-center justify-between pb-4 mb-8 border-b border-neutral-200">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-neutral-500 font-mono block">
                TRAYECTORIA INSTITUCIONAL Y DE DIRECCIÓN
              </span>
              <h3 className="text-2xl font-black text-neutral-900 tracking-tight mt-1">
                Envergadura y roles de liderazgo comprobados
              </h3>
            </div>
            <span className="text-xs font-mono font-semibold text-neutral-400 hidden sm:inline">
              EXPERIENCIA VERIFICADA
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {HITOS_EVOLUCION.slice(0, 6).map((item, idx) => (
              <div
                key={item.id || idx}
                className="p-6 bg-white border-2 border-neutral-200 hover:border-black transition-all flex flex-col justify-between shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between mb-3 pb-3 border-b border-neutral-100">
                    <span className="text-[10px] font-mono font-bold uppercase text-[#E30613] bg-red-50 border border-red-200 px-2 py-0.5">
                      {item.tag}
                    </span>
                    <Briefcase className="w-4 h-4 text-neutral-400" />
                  </div>

                  <h4 className="text-base font-bold text-neutral-900 mb-1 leading-snug">
                    {item.role}
                  </h4>

                  <span className="text-xs font-extrabold text-neutral-800 block mb-3 font-mono">
                    {item.organization}
                  </span>

                  <p className="text-xs text-neutral-600 leading-relaxed mb-4">
                    {item.scope}
                  </p>
                </div>

                {item.highlight && (
                  <div className="pt-3 border-t border-neutral-100 flex items-center gap-1.5 text-xs text-neutral-800 font-bold">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#E30613] shrink-0" />
                    <span>{item.highlight}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* PARTE 3: Formación Académica Rigurosa */}
        <div className="p-8 bg-white border border-neutral-200 shadow-xs">
          <div className="flex items-center gap-2 mb-4">
            <GraduationCap className="w-5 h-5 text-[#E30613]" />
            <h4 className="text-sm font-bold uppercase tracking-wider text-neutral-900 font-mono">
              FORMACIÓN ACADÉMICA Y RIGOR DE BASE
            </h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {FORMACION_ACADEMICA.map((item, idx) => (
              <div key={idx} className="p-4 bg-neutral-50 border border-neutral-200">
                <span className="text-[10px] font-mono font-bold text-[#E30613] uppercase block mb-1">
                  {item.year || "TITULACIÓN OFICIAL"}
                </span>
                <strong className="text-sm font-bold text-neutral-900 block mb-1">
                  {item.title}
                </strong>
                <span className="text-xs text-neutral-600">
                  {item.institution}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
