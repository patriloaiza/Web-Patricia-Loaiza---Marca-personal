import React from 'react';

export const BioCortaSection: React.FC = () => {
  return (
    <section id="biografia-corta" className="py-14 bg-[#F7F7F7] border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 border-2 border-neutral-200 bg-[#F7F7F7] relative shadow-xs">
          {/* Top header indicator matching screenshot image_c139d158.png */}
          <div className="flex items-center justify-between pb-6 mb-6 border-b border-neutral-200">
            <span className="text-xs font-bold uppercase tracking-widest text-neutral-500 font-mono">
              BIOGRAFÍA CORTA
            </span>
            <span className="w-2.5 h-2.5 bg-[#E30613]" aria-hidden="true" />
          </div>

          <p className="text-lg sm:text-xl md:text-2xl font-medium text-neutral-800 leading-relaxed max-w-5xl">
            Patricia Loaiza es consultora de marketing y negocios, creadora de la metodología <strong className="text-neutral-900 font-bold">Crea y Monetiza®</strong>. Administradora de Empresas por la Universidad Cooperativa de Colombia, cuenta con una trayectoria que combina la gestión administrativa en el sector corporativo (<strong className="text-neutral-900 font-semibold">Nestlé S.A.</strong>), el trabajo de desarrollo socioeconómico con organismos internacionales (<strong className="text-neutral-900 font-semibold">FAO-ONU</strong>, programas de la <strong className="text-neutral-900 font-semibold">Unión Europea a través de CISP</strong> y <strong className="text-neutral-900 font-semibold">Red Adelco</strong>) y la consultoría estratégica para profesionales del conocimiento. A través de su metodología, ayuda a consultores, terapeutas, psicólogos y profesionales senior a transformar su experiencia acumulada en ofertas estructuradas, posicionamiento diferencial y sistemas comerciales que puedan gestionar con autonomía.
          </p>
        </div>
      </div>
    </section>
  );
};
