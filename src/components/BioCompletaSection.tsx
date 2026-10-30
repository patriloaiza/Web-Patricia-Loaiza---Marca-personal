import React from 'react';

export const BioCompletaSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#F7F7F7] border-b border-neutral-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Kicker matching screenshot image_7c379ebc.png */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-xs font-bold uppercase tracking-widest text-neutral-500 font-mono">
            BIOGRAFÍA
          </span>
          <span className="w-2 h-2 bg-[#E30613]" />
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-neutral-900 tracking-tight leading-tight mb-10">
          De la gestión de proyectos en terreno a la estructuración de negocios en la era de la inteligencia artificial.
        </h2>

        <div className="space-y-6 text-base sm:text-lg text-neutral-700 leading-relaxed font-normal">
          <p>
            La trayectoria profesional de Patricia Loaiza comenzó en el ámbito de la administración y la gestión organizativa. Graduada como Administradora de Empresas por la Universidad Cooperativa de Colombia, desarrolló desde sus primeros años una estricta disciplina en torno a la organización de procedimientos, la viabilidad y la estructuración de procesos operativos.
          </p>

          <p>
            Posteriormente, consolidó su trayectoria en organismos multilaterales y de cooperación internacional de primer nivel. Se desempeñó como <strong className="text-neutral-900 font-semibold">Profesional Misional Especializada en Capital Social para la FAO (Organización de las Naciones Unidas para la Alimentación y la Agricultura - ONU)</strong> en convenio con la Agencia de Desarrollo Rural (ADR), participando en la formulación del Plan Integral de Desarrollo Agropecuario y Rural de Antioquia. Asimismo, ejerció como <strong className="text-neutral-900 font-semibold">Coordinadora de Emprendimiento y Plan de Abastecimiento para CISP América Latina (organismo de cooperación vinculado a programas de la Unión Europea)</strong>, coordinando actividades técnicas y financieras en 11 municipios del Bajo Magdalena, y como <strong className="text-neutral-900 font-semibold">Consultora en Desarrollo Territorial y Metodología de Marco Lógico para Red Adelco</strong>.
          </p>

          <p>
            En el sector corporativo, aportó en la gestión operativa como <strong className="text-neutral-900 font-semibold">Profesional Administrativa en Tesorería, Facturación y Cartera en Nestlé S.A.</strong>, coordinando procedimientos financieros en la Regional Antioquia para una de las multinacionales líderes del sector. Asimismo, lideró la gestión operativa como <strong className="text-neutral-900 font-semibold">Coordinadora Administrativa y de Talento Humano en Drum Colombia S.A.</strong> Esta experiencia corporativa le brindó una sólida comprensión sobre la disciplina organizativa, los flujos financieros eficientes y el rigor en el control de procesos.
          </p>

          <p>
            Con el advenimiento de los ecosistemas digitales, se especializó en la arquitectura de conversión y automatización de procesos mediante plataformas como <strong className="text-neutral-900 font-semibold">GoHighLevel</strong>, integrando embudos de captación, CRM y flujos de seguimiento automatizado. Comprobó rápidamente que la mayoría de profesionales y consultores que fracasaban en internet no lo hacían por falta de conocimiento, sino por exceso de herramientas inconexas y ausencia de una oferta productizada.
          </p>

          <p>
            De esa síntesis entre rigor administrativo, experiencia en terreno y dominio técnico nació la metodología <strong className="text-neutral-900 font-bold">Crea y Monetiza®</strong>. Hoy en día, su consultoría acompaña a psicólogos, terapeutas, coaches y profesionales senior (40 a 65 años) a empaquetar su conocimiento en servicios estructurados, diseñar una política de precios basada en valor y utilizar la inteligencia artificial como un acelerador productivo, asegurando siempre que el control operativo y el criterio estratégico permanezcan en manos del cliente.
          </p>
        </div>
      </div>
    </section>
  );
};
