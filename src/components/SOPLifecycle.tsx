import React, { useState } from 'react';
import { SOP_STEPS, TEN_DIMENSIONS } from '../data/content.ts';
import { Eye, Activity } from 'lucide-react';

export const SOPLifecycle: React.FC = () => {
  const [showFullInfographic, setShowFullInfographic] = useState(false);

  return (
    <section id="sop-proceso" className="py-20 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#E30613] mb-3">
            <span>■</span>
            <span>PROCEDIMIENTO OPERATIVO ESTÁNDAR (SOP MAESTRO)</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight max-w-3xl">
            Flujo integral y repetible: del diagnóstico a la capacidad instalada.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-600 max-w-3xl">
            La prestación de servicios en CREA Y MONETIZA® sigue un ciclo clínico riguroso en cinco fases. La evidencia precede a la propuesta y la propuesta precede al cierre.
          </p>
        </div>

        {/* 5-Step Horizontal Timeline Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-16">
          {SOP_STEPS.map((step, idx) => (
            <div
              key={step.step}
              className="p-5 rounded-xl bg-neutral-50 border border-neutral-200 hover:border-neutral-300 transition-colors flex flex-col justify-between shadow-xs"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold text-[#E30613] bg-white px-2 py-0.5 rounded border border-neutral-200">
                    Fase {step.step}
                  </span>
                  <span className="text-neutral-400 text-xs font-mono">0{idx + 1}/05</span>
                </div>
                <h3 className="text-base font-bold text-neutral-900 mb-1">
                  {step.phase}
                </h3>
                <span className="text-xs text-[#E30613] font-semibold block mb-3">
                  {step.sub}
                </span>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Deep Dive: 10 Dimensions & 3 Arguments of Contrast in Light Theme */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* 10 Dimensions Column (7 Cols) */}
          <div className="lg:col-span-7 bg-neutral-50 border border-neutral-200 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded bg-[#E30613]/10 flex items-center justify-center text-[#E30613]">
                <Activity className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-neutral-900 tracking-tight">
                  Las 10 Dimensiones Evaluadas en el Diagnóstico
                </h3>
                <p className="text-xs text-neutral-500">
                  Auditoría clínica para separar el síntoma declarado del cuello de botella real.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {TEN_DIMENSIONS.map((dim, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-lg bg-white border border-neutral-200 text-neutral-800 flex items-center gap-2.5 shadow-xs"
                >
                  <span className="w-2 h-2 rounded-full bg-[#E30613] shrink-0" />
                  <span className="font-semibold">{dim}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 3 Criteria Arguments Column (5 Cols) */}
          <div className="lg:col-span-5 bg-neutral-50 border border-neutral-200 rounded-2xl p-8">
            <h3 className="text-lg font-bold text-neutral-900 tracking-tight mb-2">
              Los 3 Argumentos de Criterio
            </h3>
            <p className="text-xs text-neutral-500 mb-6">
              Toda propuesta de consultoría debe poder reconstruirse con lógica trazable.
            </p>

            <div className="space-y-4 text-xs">
              <div className="p-4 rounded-xl bg-white border border-neutral-200 shadow-xs">
                <span className="text-[#E30613] font-bold block mb-1">1. Argumento de Evidencia</span>
                <p className="text-neutral-600 leading-relaxed">
                  ¿Qué encontramos en las respuestas y en la auditoría? Datos objetivos de lo que ocurre hoy en tu negocio.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-neutral-200 shadow-xs">
                <span className="text-[#E30613] font-bold block mb-1">2. Argumento de Prioridad</span>
                <p className="text-neutral-600 leading-relaxed">
                  ¿Por qué esto debe resolverse antes de lo que creías necesitar? Evita desperdiciar tiempo y dinero atacando síntomas.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-neutral-200 shadow-xs">
                <span className="text-[#E30613] font-bold block mb-1">3. Argumento de Ruta</span>
                <p className="text-neutral-600 leading-relaxed">
                  ¿Cuál es el servicio exacto que corresponde? Explicación clara de las fases, entregables y la transformación que se busca.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Infographic Preview Banner in Light Theme */}
        <div className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <img
              src="./assets/aistudio/logo_horizontal_fondo_blanco_a4fe62ce.jpeg"
              alt="Logo Patricia Loaiza"
              className="h-10 w-auto object-contain shrink-0"
            />
            <div>
              <h4 className="text-base font-bold text-neutral-900">
                Infografía Oficial: SOP Maestro CREA Y MONETIZA®
              </h4>
              <p className="text-xs text-neutral-600">
                Mapeo visual del sistema de adquisición, diagnóstico, conversión, entrega y ascensión de clientes.
              </p>
            </div>
          </div>

          <button
            onClick={() => setShowFullInfographic(true)}
            className="px-4 py-2 text-xs font-semibold text-neutral-800 bg-white hover:bg-neutral-100 border border-neutral-300 rounded-lg transition-colors flex items-center gap-2 shrink-0 cursor-pointer shadow-xs"
          >
            <Eye className="w-4 h-4 text-[#E30613]" />
            <span>Ver Infografía Completa</span>
          </button>
        </div>

        {/* Infographic Modal */}
        {showFullInfographic && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <div className="relative max-w-5xl w-full bg-white border border-neutral-300 rounded-2xl p-6 overflow-hidden max-h-[90vh] flex flex-col shadow-2xl">
              <div className="flex items-center justify-between pb-4 border-b border-neutral-200 mb-4">
                <h3 className="text-base font-bold text-neutral-900">
                  SOP Maestro · CREA Y MONETIZA® Proceso de Prestación del Servicio
                </h3>
                <button
                  onClick={() => setShowFullInfographic(false)}
                  className="px-3 py-1 text-xs text-neutral-600 hover:text-black bg-neutral-100 rounded border border-neutral-300 cursor-pointer"
                >
                  Cerrar ✕
                </button>
              </div>

              <div className="overflow-auto flex-1 rounded-xl bg-neutral-50 p-2">
                <img
                  src="./assets/aistudio/SOP_Crea_y_Monetiza_Proceso_prestacion_servicio_2ee86446.png"
                  alt="SOP Maestro de Prestación del Servicio"
                  className="w-full h-auto object-contain rounded-lg"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
