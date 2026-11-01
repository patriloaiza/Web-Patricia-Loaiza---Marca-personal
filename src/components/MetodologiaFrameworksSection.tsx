import React, { useState } from 'react';
import { 
  METHODOLOGY_CREA_Y_MONETIZA, 
  METHODOLOGY_CREDITS,
  CONSULTING_MODALITIES,
  BRAND_INFO 
} from '../data/content.ts';
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles, Layers, Compass, HelpCircle } from 'lucide-react';

export const MetodologiaFrameworksSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'creditos' | 'metodologia'>('creditos');

  return (
    <section id="metodologia-frameworks" className="py-24 bg-[#F7F7F7] border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Kicker */}
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2.5 h-2.5 bg-[#E30613]" />
          <span className="text-xs font-bold uppercase tracking-widest text-neutral-500 font-mono">
            RIGOR METODOLÓGICO Y ATRIBUCIÓN
          </span>
        </div>

        {/* Headline */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-neutral-900 tracking-tight leading-tight mb-4">
              Metodología propia y marcos de referencia adaptados
            </h2>
            <p className="text-base sm:text-lg text-neutral-600 max-w-2xl leading-relaxed">
              Transparencia metodológica absoluta: autoría propia registrada de nuestra metodología de acompañamiento y crédito explícito a los modelos analíticos de BMS que adaptamos en la consultoría.
            </p>
          </div>

          {/* Navigation Tabs (Solo 2 Pestañas Oficiales) */}
          <div className="flex items-center gap-1.5 bg-neutral-200/80 p-1.5 rounded-none border border-neutral-300 shrink-0">
            <button
              onClick={() => setActiveTab('creditos')}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === 'creditos'
                  ? 'bg-black text-white shadow-xs'
                  : 'text-neutral-700 hover:text-black'
              }`}
            >
              Metodologías & Créditos (BMS)
            </button>
            <button
              onClick={() => setActiveTab('metodologia')}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === 'metodologia'
                  ? 'bg-black text-white shadow-xs'
                  : 'text-neutral-700 hover:text-black'
              }`}
            >
              Fases Crea y Monetiza®
            </button>
          </div>
        </div>

        {/* TAB 1: METODOLOGÍAS Y CRÉDITOS (CREA Y MONETIZA® vs BMS) */}
        {activeTab === 'creditos' && (
          <div className="space-y-8 animate-fade-in">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Card 1: CREA Y MONETIZA® */}
              <div className="p-8 bg-white border-2 border-black shadow-[6px_6px_0px_0px_#0A0A0A] flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-neutral-200">
                    <span className="px-2.5 py-1 bg-[#E30613] text-white text-[11px] font-black uppercase tracking-wider font-mono">
                      AUTORÍA PROPIA REGISTRADA
                    </span>
                    <span className="text-xs font-mono font-bold text-neutral-500">
                      POR PATRICIA LOAIZA
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-neutral-900 mb-2">
                    {METHODOLOGY_CREDITS.creaYMonetiza.name}
                  </h3>
                  <p className="text-xs font-bold text-[#E30613] uppercase tracking-wider mb-4 font-mono">
                    {METHODOLOGY_CREDITS.creaYMonetiza.badge}
                  </p>

                  <p className="text-sm text-neutral-700 leading-relaxed mb-6">
                    {METHODOLOGY_CREDITS.creaYMonetiza.description}
                  </p>
                </div>

                <div className="p-4 bg-neutral-50 border border-neutral-200 text-xs text-neutral-700 space-y-2">
                  <strong className="block text-neutral-900 font-bold mb-1 font-mono uppercase text-[11px]">
                    Enfoque y alcance:
                  </strong>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[#E30613] mt-1 shrink-0" />
                    <span>Diseñada específicamente para profesionales, consultores, terapeutas, psicólogos y coaches (+40).</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[#E30613] mt-1 shrink-0" />
                    <span>Estructurada en 5 fases continuas: desde el onboarding y diagnóstico inicial hasta la autonomía operativa con IA.</span>
                  </div>
                </div>
              </div>

              {/* Card 2: BMS FRAMEWORK & CRÉDITO EXPLÍCITO */}
              <div className="p-8 bg-white border-2 border-neutral-300 hover:border-black transition-all flex flex-col justify-between shadow-xs">
                <div>
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-neutral-200">
                    <span className="px-2.5 py-1 bg-black text-white text-[11px] font-black uppercase tracking-wider font-mono">
                      MARCO EXTERNO ADAPTADO
                    </span>
                    <span className="text-xs font-mono font-bold text-neutral-500">
                      CRÉDITO Y ATRIBUCIÓN
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-neutral-900 mb-2">
                    {METHODOLOGY_CREDITS.bmsFramework.name}
                  </h3>
                  <p className="text-xs font-bold text-neutral-600 uppercase tracking-wider mb-4 font-mono">
                    {METHODOLOGY_CREDITS.bmsFramework.attribution}
                  </p>

                  <p className="text-sm text-neutral-700 leading-relaxed mb-6">
                    {METHODOLOGY_CREDITS.bmsFramework.description}
                  </p>
                </div>

                <div className="p-4 bg-[#F7F7F7] border border-neutral-200 text-xs text-neutral-700 space-y-2">
                  <strong className="block text-neutral-900 font-bold mb-1 font-mono uppercase text-[11px]">
                    Transparencia y autoría de frameworks:
                  </strong>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-black mt-1 shrink-0" />
                    <span>Los frameworks como <strong>Portafolio Hexagonal</strong>, <strong>Portafolio Órbita</strong>, <strong>PEPE Framework</strong> (Problema · Enfoque · Plan · Evidencia) y <strong>One Page Strategy</strong> son creaciones de Vilma Núñez y Journi, adaptados por Patricia con crédito formal.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-black mt-1 shrink-0" />
                    <span>Patricia Loaiza no se atribuye su creación original; los aplica con rigor técnico para dar solidez analítica al negocio del cliente.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Aporte diferencial de Patricia Loaiza */}
            <div className="p-8 bg-neutral-900 text-white border-l-4 border-[#E30613]">
              <div className="flex items-center gap-2 mb-3">
                <ShieldCheck className="w-5 h-5 text-[#E30613]" />
                <h4 className="text-base sm:text-lg font-bold text-white">
                  {METHODOLOGY_CREDITS.patriciaContribution.title}
                </h4>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
                {METHODOLOGY_CREDITS.patriciaContribution.points.map((point, idx) => {
                  const [title, desc] = point.split(':');
                  return (
                    <div key={idx} className="p-4 bg-neutral-800/80 border border-neutral-700/80 rounded-xs">
                      <span className="text-xs font-bold text-[#E30613] block mb-1 font-mono">
                        0{idx + 1}. {title}
                      </span>
                      <p className="text-xs text-neutral-300 leading-relaxed">
                        {desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: METODOLOGÍA CREA Y MONETIZA® (5 FASES) */}
        {activeTab === 'metodologia' && (
          <div className="space-y-6 animate-fade-in">
            <div className="p-6 bg-white border border-neutral-300 mb-8">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2.5 py-1 bg-[#E30613] text-white text-[11px] font-black uppercase tracking-wider">
                  METODOLOGÍA REGISTRADA
                </span>
                <span className="text-xs font-bold text-neutral-500 font-mono">
                  5 FASES ESTRUCTURADAS
                </span>
              </div>
              <p className="text-sm sm:text-base text-neutral-700 leading-relaxed max-w-4xl">
                <strong>Crea y Monetiza®</strong> es el proceso estructurado de consultoría que guía al profesional desde la organización de su base documental hasta la transferencia total de capacidad instalada con inteligencia artificial, garantizando orden, rentabilidad y autonomía operativa.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {METHODOLOGY_CREA_Y_MONETIZA.map((stage) => (
                <div
                  key={stage.phase}
                  className="p-5 bg-white border-2 border-neutral-200 hover:border-black transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3 pb-3 border-b border-neutral-100">
                      <span className="text-xs font-mono font-black text-[#E30613]">
                        {stage.phase}
                      </span>
                      <span className="text-xs font-mono font-bold text-neutral-400">
                        {stage.number}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-neutral-900 mb-1 leading-snug">
                      {stage.title}
                    </h3>
                    <p className="text-[11px] font-semibold text-neutral-500 uppercase tracking-wider mb-3">
                      {stage.subtitle}
                    </p>
                    <p className="text-xs text-neutral-600 leading-relaxed mb-4">
                      {stage.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-neutral-100">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 block mb-1.5 font-mono">
                      ENTREGABLES:
                    </span>
                    <ul className="space-y-1">
                      {stage.deliverables.map((item, i) => (
                        <li key={i} className="text-[11px] text-neutral-700 flex items-start gap-1.5">
                          <span className="w-1.5 h-1.5 bg-[#E30613] mt-1 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* BLOQUE FUNDACIONAL: MODALIDADES Y REGLA OPERATIVA */}
        <div className="mt-14 pt-12 border-t border-neutral-300">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 bg-black" />
            <span className="text-xs font-bold uppercase tracking-wider text-neutral-500 font-mono">
              DINÁMICA OPERATIVA DE SERVICIO
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-black text-neutral-900 mb-3 tracking-tight">
            Cómo trabajamos: delimitación clara de responsabilidades y modalidades
          </h3>
          <p className="text-sm text-neutral-600 max-w-3xl mb-8 leading-relaxed">
            No utilizamos esquemas abiertos de horas ni paquetes ambiguos. La consultoría estratégica (Pilares 1 al 4) opera bajo modalidad colaborativa, mientras que la infraestructura tecnológica (Pilar 5) es el único servicio de implementación llave en mano.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CONSULTING_MODALITIES.map((mod) => (
              <div 
                key={mod.id} 
                className="p-6 bg-white border-2 border-neutral-300 hover:border-black transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-neutral-200">
                    <span className="text-xs font-mono font-black text-[#E30613]">
                      {mod.tagline}
                    </span>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider bg-neutral-100 px-2 py-0.5 border border-neutral-200">
                      REGLA OFICIAL
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-neutral-900 mb-3">
                    {mod.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-6">
                    {mod.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-neutral-100 space-y-2 text-xs">
                  <div className="p-3 bg-neutral-50 border border-neutral-200">
                    <strong className="block text-neutral-900 font-bold mb-0.5">Perfil de aplicación:</strong>
                    <span className="text-neutral-700">{mod.idealFor}</span>
                  </div>
                  <div className="text-[11px] text-neutral-500">
                    <strong className="text-neutral-700">Compromiso:</strong> {mod.commitment}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
