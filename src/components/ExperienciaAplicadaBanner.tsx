import React from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { BRAND_INFO } from '../data/content.ts';

export const ExperienciaAplicadaBanner: React.FC = () => {
  return (
    <section className="py-20 bg-[#E30613] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          {/* Kicker matching screenshot image_e9a9aeac.png */}
          <span className="text-xs font-bold uppercase tracking-widest text-red-100 font-mono block mb-4">
            EXPERIENCIA APLICADA
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-6">
            De la teoría a la implementación.
          </h2>

          <div className="space-y-4 text-base sm:text-lg text-red-50 leading-relaxed mb-10 font-medium">
            <p>
              Durante más de 15 a 20 años, Patricia ha gestionado proyectos en terreno, liderado equipos comerciales y ayudado a profesionales del conocimiento a construir negocios predecibles.
            </p>
            <p>
              Su experiencia une la consultoría en programas de desarrollo con organismos internacionales (<strong className="text-white">Unión Europea, FAO</strong>), la gestión administrativa corporativa (<strong className="text-white">Nestlé</strong>) y la arquitectura de conversión digital con inteligencia artificial en <strong className="text-white">GoHighLevel</strong>.
            </p>
            <p>
              Ha trabajado con consultores, psicólogos, terapeutas y coaches en Colombia, México, España, Estados Unidos y diversos países de Iberoamérica, asegurando que cada intervención deje capacidad instalada y soberanía operativa.
            </p>
          </div>

          <a
            href={BRAND_INFO.prediagnosticoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-black hover:bg-neutral-900 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-xl hover:translate-x-1 cursor-pointer"
          >
            <span>REALIZAR PREDIAGNÓSTICO ESTRATÉGICO</span>
            <ExternalLink className="w-4 h-4 text-[#E30613]" />
          </a>
        </div>
      </div>
    </section>
  );
};
