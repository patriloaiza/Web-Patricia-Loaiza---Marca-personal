import React, { useState, useEffect } from 'react';
import { PILARES_FULL_DETAIL } from '../data/pilaresDetail.ts';
import { BRAND_INFO } from '../data/content.ts';
import { PilarFullDetail, PilarPhaseDetail } from '../types/index.ts';
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  XCircle, 
  FolderKanban, 
  Cpu, 
  Clock, 
  Target, 
  ShieldCheck, 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  ExternalLink,
  Sparkles,
  Info,
  Layers,
  FileCheck
} from 'lucide-react';

interface PilarDetailPageProps {
  pilarId: string;
  onBackToHome: () => void;
  onSelectPilar: (id: string) => void;
}

export const PilarDetailPage: React.FC<PilarDetailPageProps> = ({
  pilarId,
  onBackToHome,
  onSelectPilar
}) => {
  const currentPilar: PilarFullDetail = 
    PILARES_FULL_DETAIL.find((p) => p.id === pilarId) || PILARES_FULL_DETAIL[0];

  const [expandedPhaseIndex, setExpandedPhaseIndex] = useState<number | null>(0);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  // Dynamic document title based on active service
  useEffect(() => {
    const originalTitle = document.title;
    document.title = `${currentPilar.commercialName} | Patricia García - Consultora Estratégica`;
    return () => {
      document.title = originalTitle;
    };
  }, [currentPilar]);

  // Scroll to top whenever service changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setExpandedPhaseIndex(0);
    setOpenFaqIndex(null);
  }, [pilarId]);

  const togglePhase = (idx: number) => {
    setExpandedPhaseIndex(expandedPhaseIndex === idx ? null : idx);
  };

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  const currentIndex = PILARES_FULL_DETAIL.findIndex((p) => p.id === currentPilar.id);
  const prevPilar = currentIndex > 0 ? PILARES_FULL_DETAIL[currentIndex - 1] : null;
  const nextPilar = currentIndex < PILARES_FULL_DETAIL.length - 1 ? PILARES_FULL_DETAIL[currentIndex + 1] : null;

  return (
    <div className="min-h-screen bg-[#F7F7F7] text-neutral-900 font-sans antialiased">
      {/* 1. TOP STICKY BAR: Breadcrumb + Service Switcher by Name */}
      <nav aria-label="Navegación de servicios" className="sticky top-0 z-40 bg-[#0A0A0A] text-white border-b border-neutral-800 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            <button
              onClick={onBackToHome}
              className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-neutral-300 hover:text-white transition-colors cursor-pointer py-2 group shrink-0"
            >
              <ArrowLeft className="w-4 h-4 text-[#E30613] group-hover:-translate-x-1 transition-transform" />
              <span>Volver a Inicio</span>
            </button>

            {/* Quick Switcher using authentic service names (NOT numbers) */}
            <div className="flex items-center gap-1 sm:gap-2 overflow-x-auto no-scrollbar py-2 mx-2">
              {PILARES_FULL_DETAIL.map((p) => {
                const isActive = p.id === currentPilar.id;
                return (
                  <button
                    key={p.id}
                    onClick={() => onSelectPilar(p.id)}
                    className={`px-2.5 sm:px-3 py-1.5 text-[11px] font-mono font-bold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                      isActive
                        ? 'bg-[#E30613] text-white shadow-xs'
                        : 'text-neutral-400 hover:text-white hover:bg-neutral-900 border border-transparent hover:border-neutral-700'
                    }`}
                    title={p.commercialName}
                  >
                    {p.shortNavName || p.commercialName}
                  </button>
                );
              })}
            </div>

            <a
              href={BRAND_INFO.prediagnosticoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex items-center gap-1.5 text-[11px] font-mono font-bold uppercase text-white bg-neutral-900 hover:bg-neutral-800 px-3 py-1.5 border border-neutral-700 hover:border-neutral-500 transition-colors shrink-0"
            >
              <span>Prediagnóstico</span>
              <ExternalLink className="w-3 h-3 text-[#E30613]" />
            </a>
          </div>
        </div>
      </nav>

      {/* 2. SERVICE HERO HEADER (NAMED BY SERVICE, ZERO PRICES) */}
      <header className="bg-[#0A0A0A] text-white py-16 sm:py-20 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Kicker */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4">
            <span className="w-2.5 h-2.5 bg-[#E30613]" />
            <span className="text-xs font-mono font-black text-[#E30613] uppercase tracking-widest">
              SERVICIO DE CONSULTORÍA
            </span>
            <span className="text-neutral-600">/</span>
            <span className="text-xs font-mono text-neutral-300 font-bold uppercase tracking-wider">
              {currentPilar.referenceService}
            </span>
            <span className="text-neutral-600">/</span>
            <span className={`text-[10px] font-mono font-bold uppercase px-2 py-0.5 tracking-wider ${
              currentPilar.modalityBadge === 'LO HAGO POR TI'
                ? 'bg-[#E30613] text-white'
                : 'bg-neutral-800 text-neutral-300 border border-neutral-700'
            }`}>
              {currentPilar.modalityBadge}
            </span>
          </div>

          {/* Title & Tagline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1] mb-4 max-w-5xl">
            {currentPilar.commercialName}
          </h1>

          <p className="text-lg sm:text-xl text-[#E30613] font-bold max-w-4xl mb-4 leading-snug">
            {currentPilar.subname}
          </p>

          <p className="text-sm sm:text-base text-neutral-300 max-w-3xl mb-10 leading-relaxed">
            {currentPilar.tagline}
          </p>

          {/* Key Metric Specs (NO PRICES DISPLAYED) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 pt-6 border-t border-neutral-800 max-w-4xl">
            <div className="p-3.5 bg-neutral-900 border border-neutral-800">
              <span className="text-[10px] font-mono font-bold uppercase text-neutral-400 block mb-1">
                DURACIÓN ESTIMADA:
              </span>
              <strong className="text-xs sm:text-sm font-bold text-white block leading-snug">
                {currentPilar.duration}
              </strong>
            </div>

            <div className="p-3.5 bg-neutral-900 border border-neutral-800">
              <span className="text-[10px] font-mono font-bold uppercase text-neutral-400 block mb-1">
                MODALIDAD OPERATIVA:
              </span>
              <strong className="text-xs sm:text-sm font-bold text-[#E30613] block leading-snug">
                {currentPilar.modalityBadge === 'LO HAGO POR TI' ? '«Lo hago por ti» (Implementación técnica)' : '«Lo hacemos juntos» (Consultoría y estrategia)'}
              </strong>
            </div>

            <div className="p-3.5 bg-neutral-900 border border-neutral-800">
              <span className="text-[10px] font-mono font-bold uppercase text-neutral-400 block mb-1">
                TECNOLOGÍA / ENTORNO:
              </span>
              <strong className="text-xs sm:text-sm font-bold text-neutral-200 block leading-snug">
                {currentPilar.techStack || 'Notion + IA + Metodología'}
              </strong>
            </div>
          </div>
        </div>
      </header>

      {/* 3. TARGET PROFILE & MODALITY NOTICE */}
      <section className="py-12 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Target Profile Card */}
            <div className="lg:col-span-7 p-6 sm:p-8 bg-[#F7F7F7] border-2 border-neutral-900 shadow-[4px_4px_0px_0px_#0A0A0A]">
              <div className="flex items-center gap-2 mb-3">
                <Target className="w-4 h-4 text-[#E30613]" />
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-500">
                  PERFIL PRIORITARIO Y CASO DE USO
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-neutral-900 mb-3">
                ¿Para quién está diseñado este servicio?
              </h3>
              <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed mb-4">
                {currentPilar.targetProfile}
              </p>
              <div className="p-3.5 bg-white border border-neutral-300 text-xs text-neutral-800">
                <strong className="font-bold text-neutral-900 block mb-1 font-mono uppercase text-[11px]">
                  Problema específico que resuelve:
                </strong>
                <p className="text-neutral-700 leading-relaxed">
                  {currentPilar.needSolved}
                </p>
              </div>
            </div>

            {/* Modality & Rules Card */}
            <div className="lg:col-span-5 p-6 sm:p-8 bg-neutral-900 text-white border-2 border-black shadow-[4px_4px_0px_0px_#E30613]">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-neutral-800">
                <span className="text-[11px] font-mono font-black uppercase text-[#E30613] tracking-wider">
                  MODALIDAD OFICIAL DE TRABAJO
                </span>
                <span className="text-xs font-mono text-neutral-400">REGLA OPERATIVA</span>
              </div>
              <h4 className="text-lg font-bold text-white mb-2">
                {currentPilar.modality}
              </h4>
              <p className="text-xs text-neutral-300 leading-relaxed mb-4">
                {currentPilar.modalityNote}
              </p>
              {currentPilar.methodologyNote && (
                <div className="pt-3 border-t border-neutral-800 text-[11px] text-neutral-400 leading-relaxed">
                  <strong className="text-neutral-200 block mb-0.5 font-mono uppercase text-[10px]">
                    Marco metodológico y créditos:
                  </strong>
                  {currentPilar.methodologyNote}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 4. BEFORE VS AFTER TRANSFORMATION */}
      <section className="py-16 bg-[#F7F7F7] border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2.5 h-2.5 bg-[#E30613]" />
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-neutral-500">
              TRANSFORMACIÓN REAL ESPERADA
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-neutral-900 mb-8 tracking-tight">
            De la situación actual a la capacidad instalada
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Antes */}
            <div className="p-6 sm:p-8 bg-white border-2 border-red-200 shadow-[4px_4px_0px_0px_#fca5a5]">
              <div className="flex items-center gap-2 mb-3 pb-3 border-b border-red-100">
                <XCircle className="w-5 h-5 text-red-600" />
                <span className="text-xs font-mono font-black uppercase tracking-wider text-red-700">
                  ANTES DE ESTE SERVICIO (SITUACIÓN ACTUAL)
                </span>
              </div>
              <p className="text-xs sm:text-sm text-neutral-800 leading-relaxed font-medium">
                {currentPilar.transformation.before}
              </p>
            </div>

            {/* Después */}
            <div className="p-6 sm:p-8 bg-white border-2 border-emerald-400 shadow-[4px_4px_0px_0px_#6ee7b7]">
              <div className="flex items-center gap-2 mb-3 pb-3 border-b border-emerald-100">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                <span className="text-xs font-mono font-black uppercase tracking-wider text-emerald-800">
                  DESPUÉS DE ESTE SERVICIO (CAPACIDAD INSTALADA)
                </span>
              </div>
              <p className="text-xs sm:text-sm text-neutral-900 leading-relaxed font-semibold">
                {currentPilar.transformation.after}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PHASES & REAL DELIVERABLES BREAKDOWN (THE CORE SPEC) */}
      <section className="py-20 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2.5 h-2.5 bg-[#E30613]" />
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-neutral-500">
              DESGLOSE POR FASES Y ENTREGABLES REALES
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-neutral-900 tracking-tight leading-tight mb-4">
            Ruta paso a paso y qué te llevas exactamente
          </h2>

          {/* Phases Vertical Interactive Flow */}
          <div className="space-y-4">
            {currentPilar.phases.map((phase: PilarPhaseDetail, idx: number) => {
              const isExpanded = expandedPhaseIndex === idx;
              return (
                <div
                  key={phase.number}
                  className={`border-2 transition-all ${
                    isExpanded
                      ? 'border-neutral-900 bg-white shadow-[4px_4px_0px_0px_#0A0A0A]'
                      : 'border-neutral-200 bg-[#F7F7F7] hover:border-neutral-400'
                  }`}
                >
                  {/* Phase Header / Accordion Trigger */}
                  <button
                    onClick={() => togglePhase(idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-start sm:items-center justify-between gap-4 cursor-pointer"
                  >
                    <div className="flex items-start sm:items-center gap-4">
                      {/* Red Number Box */}
                      <span className="w-10 h-10 bg-[#E30613] text-white font-mono font-black text-sm flex items-center justify-center shrink-0 shadow-xs">
                        {phase.number}
                      </span>
                      <div>
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <span className="text-[11px] font-mono font-bold uppercase text-neutral-500">
                            FASE {phase.number}
                          </span>
                          <span className="text-[10px] font-mono font-bold text-neutral-600 bg-neutral-200 px-2 py-0.5 border border-neutral-300">
                            {phase.exercisesCount}
                          </span>
                        </div>
                        <h4 className="text-lg sm:text-xl font-black text-neutral-900 leading-snug">
                          {phase.name}
                        </h4>
                        <p className="text-xs text-neutral-600 font-medium">
                          {phase.subtitle}
                        </p>
                      </div>
                    </div>

                    <div className="shrink-0 pt-1 sm:pt-0">
                      {isExpanded ? (
                        <ChevronUp className="w-5 h-5 text-neutral-900" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-neutral-500" />
                      )}
                    </div>
                  </button>

                  {/* Expanded Content */}
                  {isExpanded && (
                    <div className="px-5 pb-6 sm:px-6 sm:pb-8 pt-2 border-t border-neutral-200 animate-fade-in">
                      <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed mb-5">
                        {phase.summary}
                      </p>

                      {/* Explicit Deliverable Box */}
                      <div className="p-4 bg-neutral-900 text-white border-l-4 border-[#E30613] mb-5">
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#E30613] block mb-1">
                          ENTREGABLE TANGIBLE QUE RECIBE EL CLIENTE:
                        </span>
                        <div className="flex items-start gap-2">
                          <FileCheck className="w-4 h-4 text-[#E30613] shrink-0 mt-0.5" />
                          <strong className="text-xs sm:text-sm font-bold text-white leading-snug">
                            {phase.realDeliverable}
                          </strong>
                        </div>
                      </div>

                      {/* Sub-Bullets */}
                      {phase.bullets && phase.bullets.length > 0 && (
                        <div>
                          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-neutral-500 block mb-2">
                            COMPONENTES Y ACCIONES DESARROLLADAS EN ESTA FASE:
                          </span>
                          <ul className="space-y-2">
                            {phase.bullets.map((b, bIdx) => (
                              <li key={bIdx} className="text-xs text-neutral-800 flex items-start gap-2 leading-snug">
                                <span className="w-1.5 h-1.5 bg-[#E30613] mt-1.5 shrink-0" />
                                <span>{b}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. COMPLETE TANGIBLE DELIVERABLES SUMMARY + NOTION + AI PLATFORM */}
      <section className="py-20 bg-[#F7F7F7] border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2.5 h-2.5 bg-[#E30613]" />
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-neutral-500">
              RESUMEN EJECUTIVO DE ACTIVOS
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-neutral-900 mb-8 tracking-tight">
            Todo lo que te llevas formalmente con este servicio
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
            {/* Column 1: Tangible Deliverables Documented */}
            <div className="p-6 bg-white border-2 border-neutral-900 shadow-[4px_4px_0px_0px_#0A0A0A] flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 pb-3 mb-4 border-b border-neutral-200">
                  <CheckCircle2 className="w-4 h-4 text-[#E30613]" />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-900">
                    DOCUMENTOS Y ACTIVOS APROBADOS
                  </span>
                </div>
                <ul className="space-y-2.5">
                  {currentPilar.deliverablesTangibles.map((item, idx) => (
                    <li key={idx} className="text-xs text-neutral-800 flex items-start gap-2 leading-snug">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#E30613] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-6 pt-3 border-t border-neutral-200 text-[10px] font-mono text-neutral-500 uppercase">
                Documentos estratégicos de tu propiedad
              </div>
            </div>

            {/* Column 2: Notion Workspace */}
            <div className="p-6 bg-white border-2 border-neutral-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 pb-3 mb-4 border-b border-neutral-200">
                  <FolderKanban className="w-4 h-4 text-black" />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-900">
                    EN TU PORTAL PRIVADO DE NOTION
                  </span>
                </div>
                <ul className="space-y-2.5">
                  {currentPilar.notionWorkspace.map((item, idx) => (
                    <li key={idx} className="text-xs text-neutral-800 flex items-start gap-2 leading-snug">
                      <span className="w-1.5 h-1.5 bg-black mt-1.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-6 pt-3 border-t border-neutral-200 text-[10px] font-mono text-neutral-500 uppercase">
                Acceso permanente y vitalicio
              </div>
            </div>

            {/* Column 3: AI Copilot Platform */}
            <div className="p-6 bg-neutral-900 text-white border-2 border-black flex flex-col justify-between shadow-[4px_4px_0px_0px_#E30613]">
              <div>
                <div className="flex items-center gap-2 pb-3 mb-4 border-b border-neutral-800">
                  <Cpu className="w-4 h-4 text-[#E30613]" />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-white">
                    PLATAFORMA METODOLÓGICA DE IA
                  </span>
                </div>
                <ul className="space-y-2.5">
                  {currentPilar.aiPlatform.map((item, idx) => (
                    <li key={idx} className="text-xs text-neutral-200 flex items-start gap-2 leading-snug">
                      <Sparkles className="w-3.5 h-3.5 text-[#E30613] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-6 pt-3 border-t border-neutral-800 text-[10px] font-mono text-neutral-400 uppercase">
                Autonomía estratégica y delegación con criterio
              </div>
            </div>
          </div>

          {/* Sinergia Estratégica: Notion 100% Personalizado + Plataforma Metodológica de IA */}
          <div className="p-6 sm:p-8 bg-white border-2 border-neutral-900 shadow-[6px_6px_0px_0px_#0A0A0A]">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-4 mb-5 border-b border-neutral-200">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-[#E30613]" />
                <span className="text-xs font-mono font-black uppercase tracking-wider text-neutral-900">
                  ARQUITECTURA DE ENTREGA: PERSONALIZACIÓN + METODOLOGÍA
                </span>
              </div>
              <span className="text-[11px] font-mono font-bold text-[#E30613] bg-red-50 border border-red-200 px-2.5 py-1">
                CONTROL GERENCIAL Y SOBERANÍA
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 bg-[#F7F7F7] border border-neutral-300">
                <div className="flex items-center gap-2 mb-2">
                  <FolderKanban className="w-4 h-4 text-black" />
                  <h4 className="text-sm font-black text-neutral-900 uppercase">
                    Tu Portal de Notion: 100% Personalizado
                  </h4>
                </div>
                <p className="text-xs text-neutral-700 leading-relaxed">
                  Es tu activo estratégico privado y exclusivo. Aquí residen tus cimientos de negocio, diagnósticos clínicos, ofertas productizadas, One Page Strategy y planes tácticos de 100 días. Nadie más tiene tu portal; es la verdad oficial de tu empresa.
                </p>
              </div>

              <div className="p-4 bg-neutral-900 text-white border border-neutral-800">
                <div className="flex items-center gap-2 mb-2">
                  <Cpu className="w-4 h-4 text-[#E30613]" />
                  <h4 className="text-sm font-black text-white uppercase">
                    Plataforma de Clientes con IA: Metodología Probada
                  </h4>
                </div>
                <p className="text-xs text-neutral-300 leading-relaxed">
                  Una plataforma unificada con prompts, skills, gemas, asistentes y artefactos estratégicos creada bajo una rigurosa metodología probada. Está diseñada para que sigas creando estrategias y tácticas con autonomía, y para que delegues tareas a tu equipo sabiendo con exactitud qué estás delegando y qué resultado exigir.
                </p>
              </div>
            </div>

            <div className="mt-5 p-3.5 bg-neutral-50 border-l-4 border-black text-xs text-neutral-800 leading-relaxed">
              <strong className="text-neutral-900 font-bold block mb-0.5">Cómo se conectan en tu día a día:</strong>
              Con los datos estructurados de tu Portal de Notion personalizado alimentas las herramientas metodológicas de la Plataforma de IA. Obtienes resultados con criterio senior, mantienes el control total de tus decisiones y delegas con la certeza de quien domina su propio negocio.
            </div>
          </div>
        </div>
      </section>

      {/* 7. SCOPE AND BOUNDARIES: INCLUDED VS NOT INCLUDED */}
      <section className="py-16 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-2">
            <ShieldCheck className="w-4 h-4 text-[#E30613]" />
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-neutral-500">
              CLARIDAD DE ENCAJE Y LÍMITES CONTRACTUALES
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-neutral-900 mb-8 tracking-tight">
            Alcance explícito: Qué incluye y qué NO incluye
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Qué incluye */}
            <div className="p-6 sm:p-8 bg-neutral-50 border border-neutral-300">
              <span className="text-xs font-mono font-black text-emerald-800 uppercase tracking-wider block mb-4">
                ✓ LO QUE SÍ INCLUYE ESTE SERVICIO:
              </span>
              <ul className="space-y-2.5">
                {currentPilar.scopeLimits.included.map((inc, idx) => (
                  <li key={idx} className="text-xs text-neutral-800 flex items-start gap-2 leading-snug">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{inc}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Qué NO incluye */}
            <div className="p-6 sm:p-8 bg-neutral-900 text-white border border-neutral-800">
              <span className="text-xs font-mono font-black text-[#E30613] uppercase tracking-wider block mb-4">
                ✕ LO QUE NO INCLUYE ESTE SERVICIO:
              </span>
              <ul className="space-y-2.5">
                {currentPilar.scopeLimits.notIncluded.map((notInc, idx) => (
                  <li key={idx} className="text-xs text-neutral-300 flex items-start gap-2 leading-snug">
                    <XCircle className="w-4 h-4 text-[#E30613] shrink-0 mt-0.5" />
                    <span>{notInc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 8. SERVICE-SPECIFIC FAQS */}
      {currentPilar.faqs && currentPilar.faqs.length > 0 && (
        <section className="py-16 bg-[#F7F7F7] border-b border-neutral-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 mb-2">
              <HelpCircle className="w-4 h-4 text-[#E30613]" />
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-neutral-500">
                PREGUNTAS FRECUENTES SOBRE {currentPilar.commercialName.toUpperCase()}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-neutral-900 mb-8 tracking-tight">
              Dudas comunes sobre este servicio
            </h2>

            <div className="space-y-3">
              {currentPilar.faqs.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={idx}
                    className="border border-neutral-300 bg-white"
                  >
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 cursor-pointer"
                    >
                      <strong className="text-xs sm:text-sm font-bold text-neutral-900">
                        {faq.question}
                      </strong>
                      {isOpen ? (
                        <ChevronUp className="w-4 h-4 text-neutral-900 shrink-0" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-neutral-500 shrink-0" />
                      )}
                    </button>
                    {isOpen && (
                      <div className="px-4 pb-5 sm:px-5 sm:pb-6 pt-1 text-xs text-neutral-700 leading-relaxed border-t border-neutral-100 animate-fade-in">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* 8.5 INTER-SERVICE NAVIGATION (BY SERVICE NAME) */}
      <section className="py-6 bg-neutral-100 border-b border-neutral-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          {prevPilar ? (
            <button
              onClick={() => onSelectPilar(prevPilar.id)}
              className="w-full sm:w-auto px-4 py-2.5 bg-white hover:bg-neutral-50 text-neutral-900 border border-neutral-300 hover:border-neutral-500 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer shadow-xs"
            >
              <ArrowLeft className="w-3.5 h-3.5 text-[#E30613]" />
              <span>Anterior: {prevPilar.commercialName}</span>
            </button>
          ) : <div />}

          {nextPilar ? (
            <button
              onClick={() => onSelectPilar(nextPilar.id)}
              className="w-full sm:w-auto px-4 py-2.5 bg-neutral-900 hover:bg-black text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer shadow-xs ml-auto"
            >
              <span>Siguiente: {nextPilar.commercialName}</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#E30613]" />
            </button>
          ) : <div />}
        </div>
      </section>

      {/* 9. BOTTOM CONVERSION SECTION */}
      <section className="py-20 bg-[#0A0A0A] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-mono font-black text-[#E30613] uppercase tracking-widest block mb-3">
            SIGUIENTE PASO RECOMENDADO
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight mb-4">
            ¿Es {currentPilar.commercialName} lo que tu negocio necesita resolver primero?
          </h2>
          <p className="text-sm sm:text-base text-neutral-300 max-w-2xl mx-auto mb-8 leading-relaxed">
            No prescribimos a ciegas. Completa el prediagnóstico oficial para evaluar la situación real de tu modelo, detectar el cuello de botella comercial y confirmar la ruta adecuada.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <a
              href={BRAND_INFO.prediagnosticoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-[#E30613] hover:bg-[#c90510] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-lg"
            >
              <span>HACER EL PREDIAGNÓSTICO OFICIAL</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            <button
              onClick={onBackToHome}
              className="w-full sm:w-auto px-6 py-4 bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-bold uppercase tracking-wider border border-neutral-700 hover:border-neutral-500 transition-colors cursor-pointer"
            >
              <span>Ver todos los servicios</span>
            </button>
          </div>

          <p className="text-[11px] text-neutral-500 font-mono">
            Toma de 7 a 10 minutos · Recibes ruta recomendada sin compromiso comercial
          </p>
        </div>
      </section>
    </div>
  );
};
