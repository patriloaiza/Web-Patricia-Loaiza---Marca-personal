import React from 'react';
import { HITOS_ALCANZADOS } from '../data/content.ts';

export const PosturaIdentidadSection: React.FC = () => {
  return (
    <section id="postura-identidad" className="py-20 bg-[#F7F7F7] border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* Left Column: Postura Quote Card & Hitos Alcanzados Grid (6 Cols) */}
          <div className="lg:col-span-6 space-y-10">
            {/* Postura Box matching screenshot image_97680c70.png */}
            <div className="p-8 border-2 border-neutral-900 bg-white shadow-[6px_6px_0px_0px_#0A0A0A]">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-neutral-100">
                <span className="text-xs font-bold uppercase tracking-widest text-neutral-400 font-mono">
                  POSTURA
                </span>
                <span className="w-2 h-2 bg-[#E30613]" />
              </div>
              <blockquote className="text-lg sm:text-xl font-bold text-neutral-900 italic leading-snug mb-6">
                “No vendo lo que la persona cree que necesita. Le muestro, a partir de lo que encontramos en su diagnóstico, qué necesita resolver primero y cómo puedo ayudarla a hacerlo.”
              </blockquote>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-neutral-800">
                <span className="w-2.5 h-2.5 bg-[#E30613]" />
                <span>PATRICIA LOAIZA</span>
              </div>
            </div>

            {/* Hitos Alcanzados matching screenshot image_97680c70.png & image_0eae929c.png */}
            <div className="border border-neutral-200 bg-neutral-50/50">
              {/* Header */}
              <div className="p-6 bg-white border-b border-neutral-200 flex items-center justify-between">
                <h3 className="text-xl font-extrabold text-neutral-900 tracking-tight">
                  Hitos alcanzados
                </h3>
                <span className="w-3 h-3 bg-[#E30613]" />
              </div>

              {/* 2x4 Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-neutral-200">
                <div className="divide-y divide-neutral-200">
                  {HITOS_ALCANZADOS.slice(0, 4).map((item) => (
                    <div key={item.id} className="p-5 bg-white hover:bg-neutral-50/80 transition-colors">
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="text-xs font-mono font-bold text-neutral-500">{item.num}</span>
                        <span className="w-1.5 h-1.5 bg-[#E30613]" />
                        {item.tag && (
                          <span className="text-[10px] uppercase font-bold text-neutral-400 tracking-wider">
                            {item.tag}
                          </span>
                        )}
                      </div>
                      <h4 className="text-sm font-bold text-neutral-900 leading-snug">
                        {item.title}
                      </h4>
                      {item.institution && (
                        <span className="text-[11px] font-bold text-[#E30613] block mt-1">
                          {item.institution}
                        </span>
                      )}
                      <p className="text-xs text-neutral-600 mt-1 leading-relaxed">
                        {item.subtitle}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="divide-y divide-neutral-200">
                  {HITOS_ALCANZADOS.slice(4, 8).map((item) => (
                    <div key={item.id} className="p-5 bg-white hover:bg-neutral-50/80 transition-colors">
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="text-xs font-mono font-bold text-neutral-500">{item.num}</span>
                        <span className="w-1.5 h-1.5 bg-[#E30613]" />
                        {item.tag && (
                          <span className="text-[10px] uppercase font-bold text-neutral-400 tracking-wider">
                            {item.tag}
                          </span>
                        )}
                      </div>
                      <h4 className="text-sm font-bold text-neutral-900 leading-snug">
                        {item.title}
                      </h4>
                      {item.institution && (
                        <span className="text-[11px] font-bold text-[#E30613] block mt-1">
                          {item.institution}
                        </span>
                      )}
                      <p className="text-xs text-neutral-600 mt-1 leading-relaxed">
                        {item.subtitle}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Identidad Narrative (6 Cols) matching screenshot image_97680c70.png */}
          <div className="lg:col-span-6 flex flex-col justify-start">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-neutral-500 mb-4 font-mono">
              <span>IDENTIDAD</span>
              <span className="h-0.5 w-12 bg-neutral-200" />
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-neutral-900 tracking-tight leading-tight mb-8">
              Estrategia, experiencia y tecnología convertidas en capacidad de ejecución.
            </h2>

            <div className="space-y-6 text-base text-neutral-700 leading-relaxed">
              <p>
                Patricia Loaiza es consultora de marketing y negocios y creadora de la metodología <strong className="text-neutral-900 font-bold">Crea y Monetiza®</strong>. Durante más de quince años ha coordinado programas de desarrollo institucional, estructurado redes comerciales corporativas y, en los últimos años, acompañado a profesionales consolidados a trasladar su conocimiento a entornos digitales rentables.
              </p>

              <p>
                Su trabajo parte de una convicción aprendida tanto en la gestión pública internacional como en el sector corporativo: <strong className="text-neutral-900">la tecnología nunca debe sustituir al criterio estratégico</strong>. Publicar en redes sociales, contratar plataformas de automatización o incorporar herramientas de inteligencia artificial no garantiza resultados si antes no se ha resuelto el problema de fondo: qué problema resuelves, para qué cliente y con qué oferta comercial.
              </p>

              <p>
                Acompaña prioritariamente a <strong className="text-neutral-900 font-bold">profesionales senior de 40 a 65 años (terapeutas, psicólogos, coaches y consultores)</strong> que cuentan con una sólida reputación en el mundo presencial pero carecen de una estructura digital clara. Su enfoque no consiste en vender fórmulas prediseñadas ni tácticas agresivas de venta, sino en auditar la situación real del negocio mediante un diagnóstico riguroso y construir una oferta y un sistema comercial que el profesional pueda operar con autonomía.
              </p>

              <p className="pt-2 text-neutral-800 font-medium border-l-2 border-[#E30613] pl-4 italic bg-neutral-50 py-2">
                Su propuesta comercial conecta cuatro pilares estratégicos: Estrategia de Negocio (con productización de servicios), Marca Personal de Autoridad, Sistema de Contenidos asistido por IA y One Day: Creación de Sistemas Digitales con IA.
              </p>

              {/* 4 Consulting Principles from PDF Page 4 */}
              <div className="pt-6 border-t border-neutral-200 mt-6">
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-900 block mb-3 font-mono">
                  PRINCIPIOS DE CONSULTORÍA
                </span>
                <div className="space-y-3">
                  <div className="p-3.5 bg-white border border-neutral-200">
                    <span className="text-[10px] font-mono font-bold text-[#E30613] block mb-0.5">PRINCIPIO 01</span>
                    <strong className="text-xs font-bold text-neutral-900 block">Primero comprender, después recomendar</strong>
                    <p className="text-xs text-neutral-600 mt-1">Diagnóstico antes de cualquier propuesta. No se aplican soluciones estándar sin entender el contexto, las capacidades y el modelo del cliente.</p>
                  </div>

                  <div className="p-3.5 bg-white border border-neutral-200">
                    <span className="text-[10px] font-mono font-bold text-[#E30613] block mb-0.5">PRINCIPIO 02</span>
                    <strong className="text-xs font-bold text-neutral-900 block">Conectar estrategia y ejecución</strong>
                    <p className="text-xs text-neutral-600 mt-1">La estrategia sin ejecución es solo teoría; la ejecución y tecnología sin estrategia son dispersión y gasto de recursos.</p>
                  </div>

                  <div className="p-3.5 bg-white border border-neutral-200">
                    <span className="text-[10px] font-mono font-bold text-[#E30613] block mb-0.5">PRINCIPIO 03</span>
                    <strong className="text-xs font-bold text-neutral-900 block">Definir el alcance con claridad</strong>
                    <p className="text-xs text-neutral-600 mt-1">Cada intervención tiene objetivos, entregables, cronograma y límites explícitos para proteger el tiempo y la inversión del cliente.</p>
                  </div>

                  <div className="p-3.5 bg-white border border-neutral-200">
                    <span className="text-[10px] font-mono font-bold text-[#E30613] block mb-0.5">PRINCIPIO 04</span>
                    <strong className="text-xs font-bold text-neutral-900 block">Trabajar con evidencia</strong>
                    <p className="text-xs text-neutral-600 mt-1">Las decisiones de negocio se basan en datos reales, validación en el mercado y resultados verificables, no en modas ni suposiciones.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
