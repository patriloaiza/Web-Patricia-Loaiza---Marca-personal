import React, { useState } from 'react';
import { 
  METHODOLOGY_CREA_Y_MONETIZA, 
  FRAMEWORKS, 
  CONSULTING_MODALITIES,
  METHODOLOGY_CREDITS,
  BRAND_INFO 
} from '../data/content.ts';
import { ArrowRight, CheckCircle2, Layers, Cpu, Compass, BookOpen, Sparkles, Award, ShieldCheck } from 'lucide-react';

export const MetodologiaFrameworksSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'metodologia' | 'creditos' | 'frameworks' | 'modalidades'>('creditos');
  const [selectedFrameworkId, setSelectedFrameworkId] = useState<string>(FRAMEWORKS[0].id);

  const selectedFramework = FRAMEWORKS.find(f => f.id === selectedFrameworkId) || FRAMEWORKS[0];

  return (
    <section id="metodologia-frameworks" className="py-24 bg-[#F7F7F7] border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Kicker */}
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2.5 h-2.5 bg-[#E30613]" />
          <span className="text-xs font-bold uppercase tracking-widest text-neutral-500 font-mono">
            METODOLOGÍA, CRÉDITOS Y FRAMEWORKS
          </span>
        </div>

        {/* Headline */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-neutral-900 tracking-tight leading-tight mb-4">
              Metodología propia y marcos de referencia adaptados
            </h2>
            <p className="text-base sm:text-lg text-neutral-600 max-w-2xl leading-relaxed">
              Trabajamos con transparencia metodológica absoluta: autoría registrada de nuestros marcos propietarios y crédito explícito a los modelos de vanguardia que adaptamos para profesionales del conocimiento.
            </p>
          </div>

          {/* Navigation Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 bg-neutral-200/80 p-1.5 rounded-none border border-neutral-300 shrink-0">
            <button
              onClick={() => setActiveTab('creditos')}
              className={`px-3.5 py-2 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === 'creditos'
                  ? 'bg-black text-white shadow-xs'
                  : 'text-neutral-700 hover:text-black'
              }`}
            >
              Metodologías & Créditos (BMS)
            </button>
            <button
              onClick={() => setActiveTab('metodologia')}
              className={`px-3.5 py-2 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === 'metodologia'
                  ? 'bg-black text-white shadow-xs'
                  : 'text-neutral-700 hover:text-black'
              }`}
            >
              Fases Crea y Monetiza®
            </button>
            <button
              onClick={() => setActiveTab('frameworks')}
              className={`px-3.5 py-2 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === 'frameworks'
                  ? 'bg-black text-white shadow-xs'
                  : 'text-neutral-700 hover:text-black'
              }`}
            >
              6 Frameworks Propios
            </button>
            <button
              onClick={() => setActiveTab('modalidades')}
              className={`px-3.5 py-2 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === 'modalidades'
                  ? 'bg-black text-white shadow-xs'
                  : 'text-neutral-700 hover:text-black'
              }`}
            >
              3 Modalidades
            </button>
          </div>
        </div>

        {/* TAB: METODOLOGÍAS Y CRÉDITOS (CREA Y MONETIZA® vs BMS) - Auditoría Punto 2.1 */}
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

                <div className="p-4 bg-neutral-50 border border-neutral-200 text-xs text-neutral-700 space-y-1.5">
                  <strong className="block text-neutral-900 font-bold mb-1 font-mono uppercase text-[11px]">
                    Enfoque y alcance:
                  </strong>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[#E30613] mt-1 shrink-0" />
                    <span>Diseñada específicamente para terapeutas, psicólogos, consultores y profesionales senior (+40).</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[#E30613] mt-1 shrink-0" />
                    <span>Estructurada en 5 fases continuas: de la auditoría inicial a la soberanía operativa total.</span>
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
                  <p className="text-xs font-bold text-neutral-500 uppercase tracking-wider mb-4 font-mono">
                    {METHODOLOGY_CREDITS.bmsFramework.attribution}
                  </p>

                  <p className="text-sm text-neutral-700 leading-relaxed mb-6">
                    {METHODOLOGY_CREDITS.bmsFramework.description}
                  </p>
                </div>

                <div className="p-4 bg-[#F7F7F7] border border-neutral-200 text-xs text-neutral-700 space-y-1.5">
                  <strong className="block text-neutral-900 font-bold mb-1 font-mono uppercase text-[11px]">
                    Claridad metodológica para clientes y buscadores:
                  </strong>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-black mt-1 shrink-0" />
                    <span>Patricia Loaiza no se atribuye la autoría del BMS; reconoce y referencia la autoría de Vilma Núñez y Journi.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-black mt-1 shrink-0" />
                    <span>Aplica sus principios adaptándolos a servicios de alto valor y prácticas de conocimiento individuales.</span>
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

        {/* TAB 1: METODOLOGÍA CREA Y MONETIZA® (5 FASES) */}
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

        {/* TAB 2: LOS 6 FRAMEWORKS PROPIOS */}
        {activeTab === 'frameworks' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start animate-fade-in">
            {/* Frameworks List (5 cols) */}
            <div className="lg:col-span-5 space-y-3">
              {FRAMEWORKS.map((fw) => {
                const isSelected = fw.id === selectedFrameworkId;
                return (
                  <button
                    key={fw.id}
                    onClick={() => setSelectedFrameworkId(fw.id)}
                    className={`w-full text-left p-4.5 transition-all border cursor-pointer flex items-center justify-between ${
                      isSelected
                        ? 'bg-black text-white border-black shadow-md'
                        : 'bg-white text-neutral-900 border-neutral-200 hover:border-neutral-400'
                    }`}
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`text-xs font-mono font-bold ${isSelected ? 'text-[#E30613]' : 'text-neutral-400'}`}>
                          {fw.number}
                        </span>
                        <span className="text-sm font-bold">{fw.name}</span>
                      </div>
                      <p className={`text-xs ${isSelected ? 'text-neutral-300' : 'text-neutral-500'} line-clamp-1`}>
                        {fw.tagline}
                      </p>
                    </div>
                    <ArrowRight className={`w-4 h-4 shrink-0 transition-transform ${isSelected ? 'text-[#E30613] translate-x-1' : 'text-neutral-400'}`} />
                  </button>
                );
              })}
            </div>

            {/* Framework Detail Display (7 cols) */}
            <div className="lg:col-span-7 p-8 bg-white border-2 border-neutral-900 shadow-[6px_6px_0px_0px_#0A0A0A]">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-neutral-200">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-black text-[#E30613]">{selectedFramework.number}</span>
                  <span className="w-1.5 h-1.5 bg-[#E30613]" />
                  <span className="text-xs font-bold uppercase tracking-widest text-neutral-400 font-mono">
                    FRAMEWORK METODOLÓGICO
                  </span>
                </div>
                <span className="text-[11px] font-mono text-neutral-500">PROPIEDAD DE PATRICIA LOAIZA</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-neutral-900 mb-2">
                {selectedFramework.name}
              </h3>
              <p className="text-sm font-bold text-[#E30613] mb-6">
                {selectedFramework.tagline}
              </p>

              <div className="space-y-4 text-sm text-neutral-700 leading-relaxed mb-6">
                <p>{selectedFramework.description}</p>
                <div className="p-4 bg-[#F7F7F7] border-l-3 border-black text-xs text-neutral-800">
                  <strong className="block text-neutral-900 font-bold mb-1">Aplicación práctica en consultoría:</strong>
                  {selectedFramework.application}
                </div>
              </div>

              <div className="pt-4 border-t border-neutral-200">
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-900 block mb-2 font-mono">
                  BENEFICIOS CLAVE DE ESTE MODELO:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {selectedFramework.benefits.map((benefit, i) => (
                    <div key={i} className="p-3 bg-neutral-50 border border-neutral-200 text-xs text-neutral-800 flex items-start gap-2">
                      <span className="w-2 h-2 bg-[#E30613] mt-1 shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: LAS 3 MODALIDADES DE TRABAJO */}
        {activeTab === 'modalidades' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in">
            {CONSULTING_MODALITIES.map((mod) => (
              <div
                key={mod.id}
                className="p-6 bg-white border-2 border-neutral-200 hover:border-black transition-all flex flex-col justify-between relative group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-neutral-200">
                    <span className="text-xs font-mono font-black text-[#E30613]">
                      MODALIDAD {mod.number}
                    </span>
                    <span className="w-2 h-2 bg-[#E30613]" />
                  </div>

                  <h3 className="text-xl font-black text-neutral-900 mb-1 leading-snug">
                    {mod.title}
                  </h3>
                  <p className="text-xs font-bold text-neutral-500 mb-4">
                    {mod.tagline}
                  </p>

                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-6">
                    {mod.description}
                  </p>
                </div>

                <div className="space-y-3 pt-4 border-t border-neutral-100">
                  <div className="p-3 bg-neutral-50 border border-neutral-200 text-xs">
                    <strong className="block text-neutral-900 font-bold mb-1">Ideal para:</strong>
                    <span className="text-neutral-700">{mod.idealFor}</span>
                  </div>
                  <div className="text-[11px] text-neutral-500 font-mono">
                    <strong className="text-neutral-700">Alcance:</strong> {mod.commitment}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
