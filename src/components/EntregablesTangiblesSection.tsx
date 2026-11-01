import React, { useState } from 'react';
import { 
  DELIVERABLES_BY_PILAR, 
  CLIENT_DELIVERY_INFRASTRUCTURE,
  BRAND_INFO 
} from '../data/content.ts';
import { PilarDeliverableItem } from '../types/index.ts';
import { 
  CheckCircle2, 
  FolderKanban, 
  Cpu, 
  Sparkles, 
  ArrowRight, 
  Layers, 
  FileText, 
  ShieldCheck, 
  Clock, 
  ExternalLink 
} from 'lucide-react';

interface EntregablesTangiblesSectionProps {
  onSelectPilar?: (pilarId: string) => void;
}

export const EntregablesTangiblesSection: React.FC<EntregablesTangiblesSectionProps> = ({ onSelectPilar }) => {
  const [selectedPilarId, setSelectedPilarId] = useState<string>(DELIVERABLES_BY_PILAR[0].id);
  const activePilar: PilarDeliverableItem = DELIVERABLES_BY_PILAR.find((p: PilarDeliverableItem) => p.id === selectedPilarId) || DELIVERABLES_BY_PILAR[0];

  return (
    <section id="que-te-llevas" className="py-24 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Kicker */}
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2.5 h-2.5 bg-[#E30613]" />
          <span className="text-xs font-bold uppercase tracking-widest text-neutral-500 font-mono">
            QUÉ TE LLEVAS · ACTIVOS Y TRANSFORMACIÓN
          </span>
        </div>

        {/* Section Headline */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-neutral-900 tracking-tight leading-tight mb-4">
              Entregables tangibles, espacio en Notion y sistemas por pilar
            </h2>
            <p className="text-base sm:text-lg text-neutral-600 max-w-3xl leading-relaxed">
              No compras horas de conversación abierta. Adquieres activos estructurados de tu propiedad, organizados en tu portal privado de Notion y respaldados por tu plataforma de herramientas de inteligencia artificial.
            </p>
          </div>
          <a
            href={BRAND_INFO.prediagnosticoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-6 py-3.5 bg-black hover:bg-neutral-800 text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-colors cursor-pointer shadow-md"
          >
            <span>INICIAR CON PREDIAGNÓSTICO</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#E30613]" />
          </a>
        </div>

        {/* PARTE 1: LOS DOS PILARES DE INFRAESTRUCTURA Y ENTREGA AL CLIENTE */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Card 1: Portal individual en Notion */}
          <div className="p-8 bg-[#F7F7F7] border-2 border-neutral-900 shadow-[6px_6px_0px_0px_#0A0A0A] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-neutral-300">
                <span className="text-[11px] font-mono font-black uppercase text-[#E30613] tracking-wider">
                  {CLIENT_DELIVERY_INFRASTRUCTURE.notionPortal.badge}
                </span>
                <span className="text-xs font-mono font-bold text-neutral-600 flex items-center gap-1.5">
                  <FolderKanban className="w-4 h-4 text-black" />
                  <span>NOTION PORTAL</span>
                </span>
              </div>

              <h3 className="text-2xl font-black text-neutral-900 mb-2">
                {CLIENT_DELIVERY_INFRASTRUCTURE.notionPortal.title}
              </h3>
              <p className="text-xs font-bold text-neutral-700 uppercase tracking-wider mb-3">
                {CLIENT_DELIVERY_INFRASTRUCTURE.notionPortal.subtitle}
              </p>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-6">
                {CLIENT_DELIVERY_INFRASTRUCTURE.notionPortal.description}
              </p>

              {/* Secciones incluidas en el portal */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-4 border-t border-neutral-200">
                {CLIENT_DELIVERY_INFRASTRUCTURE.notionPortal.sections.map((sec, idx) => (
                  <div key={idx} className="p-3 bg-white border border-neutral-200 text-xs">
                    <strong className="block text-neutral-900 font-bold mb-0.5 text-[11px]">
                      {sec.name}
                    </strong>
                    <span className="text-neutral-600 text-[11px] leading-tight block">
                      {sec.desc}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-neutral-300 flex items-center justify-between text-xs text-neutral-600">
              <span className="font-semibold">Acceso permanente para el cliente.</span>
              <span className="font-mono text-[#E30613] font-bold">SOBERANÍA TOTAL</span>
            </div>
          </div>

          {/* Card 2: Plataforma de Recursos y Copilotos de IA */}
          <div className="p-8 bg-neutral-900 text-white border-2 border-black shadow-[6px_6px_0px_0px_#E30613] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-neutral-800">
                <span className="text-[11px] font-mono font-black uppercase text-[#E30613] tracking-wider">
                  {CLIENT_DELIVERY_INFRASTRUCTURE.aiPlatform.badge}
                </span>
                <span className="text-xs font-mono font-bold text-neutral-400 flex items-center gap-1.5">
                  <Cpu className="w-4 h-4 text-[#E30613]" />
                  <span>AI PLATFORM</span>
                </span>
              </div>

              <h3 className="text-2xl font-black text-white mb-2">
                {CLIENT_DELIVERY_INFRASTRUCTURE.aiPlatform.title}
              </h3>
              <p className="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-3">
                {CLIENT_DELIVERY_INFRASTRUCTURE.aiPlatform.subtitle}
              </p>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-6">
                {CLIENT_DELIVERY_INFRASTRUCTURE.aiPlatform.description}
              </p>

              {/* Recursos de IA incluidos */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-4 border-t border-neutral-800">
                {CLIENT_DELIVERY_INFRASTRUCTURE.aiPlatform.resources.map((res, idx) => (
                  <div key={idx} className="p-3 bg-neutral-800/80 border border-neutral-700 text-xs">
                    <strong className="block text-white font-bold mb-0.5 text-[11px]">
                      {res.name}
                    </strong>
                    <span className="text-neutral-300 text-[11px] leading-tight block">
                      {res.desc}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-neutral-800 flex items-center justify-between text-xs text-neutral-400">
              <span>Herramientas metodológicas de IA para operar y delegar con control.</span>
              <span className="font-mono text-[#E30613] font-bold">AUTONOMÍA TOTAL</span>
            </div>
          </div>
        </div>

        {/* PARTE 2: ENTREGABLES Y TRANSFORMACIÓN DETALLADA POR PILAR */}
        <div className="border-t-2 border-black pt-12">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-neutral-500 font-mono">
              DETALLE POR PILAR DE SERVICIO
            </span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-black text-neutral-900 mb-6 tracking-tight">
            Qué te llevas en cada uno de los 5 pilares
          </h3>

          {/* Selector de Pilar */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 mb-8">
            {DELIVERABLES_BY_PILAR.map((p) => {
              const isSelected = p.id === selectedPilarId;
              return (
                <button
                  key={p.id}
                  onClick={() => setSelectedPilarId(p.id)}
                  className={`p-3 text-left border-2 transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-black text-white border-black shadow-md'
                      : 'bg-[#F7F7F7] text-neutral-800 border-neutral-300 hover:border-black'
                  }`}
                >
                  <span className={`text-[11px] font-mono font-bold block mb-1 ${isSelected ? 'text-[#E30613]' : 'text-neutral-500'}`}>
                    PILAR {p.pilarNumber}
                  </span>
                  <strong className="text-xs block leading-snug line-clamp-1">
                    {p.pilarName}
                  </strong>
                </button>
              );
            })}
          </div>

          {/* Ficha Activa de Entregables del Pilar */}
          <div className="p-6 sm:p-8 bg-white border-2 border-neutral-900 shadow-[6px_6px_0px_0px_#0A0A0A] animate-fade-in">
            {/* Header del Pilar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-6 border-b border-neutral-200">
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-xs font-mono font-black text-[#E30613]">PILAR {activePilar.pilarNumber}</span>
                  <span className="w-1.5 h-1.5 bg-[#E30613]" />
                  <span className="text-xs font-bold uppercase tracking-wider text-neutral-500 font-mono">
                    {activePilar.subname}
                  </span>
                </div>
                <h4 className="text-2xl sm:text-3xl font-black text-neutral-900 tracking-tight">
                  {activePilar.pilarName}
                </h4>
              </div>

              {/* Badge de Modalidad Oficial */}
              <div className="p-3 bg-neutral-50 border border-neutral-300 text-left max-w-sm">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#E30613] block mb-0.5">
                  MODALIDAD VIGENTE:
                </span>
                <strong className="text-xs font-bold text-neutral-900 block leading-tight mb-1">
                  {activePilar.modality}
                </strong>
                <p className="text-[11px] text-neutral-600 leading-snug">
                  {activePilar.modalityNote}
                </p>
              </div>
            </div>

            {/* Transformación: ANTES vs DESPUÉS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="p-4 bg-red-50/70 border border-red-200">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-red-700 block mb-1">
                  ANTES (SITUACIÓN ACTUAL)
                </span>
                <p className="text-xs text-neutral-800 leading-relaxed">
                  {activePilar.transformation.before}
                </p>
              </div>
              <div className="p-4 bg-emerald-50/80 border border-emerald-300">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-emerald-800 block mb-1">
                  DESPUÉS (TRANSFORMACIÓN LOGRADA)
                </span>
                <p className="text-xs text-neutral-900 leading-relaxed font-medium">
                  {activePilar.transformation.after}
                </p>
              </div>
            </div>

            {/* Grid 3 Columnas: Entregables + Notion + IA */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Columna 1: Entregables Aprobados */}
              <div className="p-5 bg-[#F7F7F7] border border-neutral-300 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-3 pb-2 border-b border-neutral-200">
                    <FileText className="w-4 h-4 text-[#E30613]" />
                    <span className="text-xs font-bold uppercase tracking-wider text-neutral-900 font-mono">
                      ENTREGABLES APROBADOS
                    </span>
                  </div>
                  <ul className="space-y-2.5">
                    {activePilar.deliverables.map((item, idx) => (
                      <li key={idx} className="text-xs text-neutral-800 flex items-start gap-2 leading-snug">
                        <CheckCircle2 className="w-4 h-4 text-[#E30613] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Columna 2: Espacio en Notion */}
              <div className="p-5 bg-white border-2 border-neutral-300 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-3 pb-2 border-b border-neutral-200">
                    <FolderKanban className="w-4 h-4 text-black" />
                    <span className="text-xs font-bold uppercase tracking-wider text-neutral-900 font-mono">
                      EN TU PORTAL DE NOTION
                    </span>
                  </div>
                  <ul className="space-y-2.5">
                    {activePilar.notionWorkspace.map((item, idx) => (
                      <li key={idx} className="text-xs text-neutral-800 flex items-start gap-2 leading-snug">
                        <span className="w-1.5 h-1.5 bg-black mt-1.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-4 pt-3 border-t border-neutral-200 text-[11px] text-neutral-500 font-mono">
                  Tablero Kanban + Grabaciones activas
                </div>
              </div>

              {/* Columna 3: En la Plataforma de IA */}
              <div className="p-5 bg-neutral-900 text-white border border-neutral-800 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-3 pb-2 border-b border-neutral-800">
                    <Cpu className="w-4 h-4 text-[#E30613]" />
                    <span className="text-xs font-bold uppercase tracking-wider text-white font-mono">
                      EN LA PLATAFORMA DE IA
                    </span>
                  </div>
                  <ul className="space-y-2.5">
                    {activePilar.aiPlatform.map((item, idx) => (
                      <li key={idx} className="text-xs text-neutral-200 flex items-start gap-2 leading-snug">
                        <Sparkles className="w-3.5 h-3.5 text-[#E30613] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-4 pt-3 border-t border-neutral-800 text-[11px] text-neutral-400 font-mono">
                  Metodología unificada para crear y delegar
                </div>
              </div>
            </div>

            {/* Direct Link to Dedicated Pilar Page */}
            {onSelectPilar && (
              <div className="mt-8 pt-6 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-neutral-600">
                  ¿Quieres ver las fases, componentes específicos y límites de <strong className="text-neutral-900">{activePilar.pilarName}</strong>?
                </span>
                <button
                  type="button"
                  onClick={() => {
                    const mappedId = `pilar-${parseInt(activePilar.pilarNumber, 10)}`;
                    onSelectPilar(mappedId);
                  }}
                  className="px-5 py-2.5 bg-black hover:bg-neutral-800 text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-colors cursor-pointer"
                >
                  <span>Ver página detallada: {activePilar.pilarName}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#E30613]" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>

  );
};
