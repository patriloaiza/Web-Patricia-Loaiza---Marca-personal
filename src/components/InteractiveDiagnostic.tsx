import React from 'react';
import { ExternalLink, CheckCircle2, ShieldCheck, ArrowRight, MessageSquare, Clock } from 'lucide-react';
import { BRAND_INFO, TEN_DIMENSIONS } from '../data/content.ts';

interface InteractiveDiagnosticProps {
  onClose?: () => void;
}

export const InteractiveDiagnostic: React.FC<InteractiveDiagnosticProps> = ({ onClose }) => {
  return (
    <div id="prediagnostico" className="bg-white border border-neutral-200 rounded-2xl p-6 sm:p-10 shadow-lg relative">
      {onClose && (
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-neutral-500 hover:text-neutral-900 text-xs bg-neutral-100 border border-neutral-200 px-3 py-1 rounded cursor-pointer"
        >
          Cerrar ✕
        </button>
      )}

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#E30613] mb-2">
          <span>■</span>
          <span>SOP-CYM-001 · FILTRADO E INTELIGENCIA PREVIA</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
          Prediagnóstico Estratégico Oficial
        </h3>
        <p className="text-sm text-neutral-600 mt-2 max-w-2xl leading-relaxed">
          Antes de cualquier propuesta o sesión 1 a 1, realizamos una evaluación clínica estructurada para entender tu situación actual, separar el síntoma del cuello de botella real y determinar con exactitud qué ruta te corresponde.
        </p>
      </div>

      {/* 2-Column Feature Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-neutral-50 border border-neutral-200 rounded-xl p-6 sm:p-8 mb-8">
        <div className="lg:col-span-7 space-y-4">
          <span className="text-xs font-mono font-bold text-[#E30613] uppercase tracking-wider bg-red-50 border border-red-200 px-2.5 py-1 rounded inline-block">
            ¿Qué evalúa el formulario oficial?
          </span>
          <h4 className="text-xl font-bold text-neutral-900 tracking-tight">
            Análisis multidimensional de 10 dimensiones críticas
          </h4>
          <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
            El prediagnóstico no es un cuestionario mecánico de captura de leads. Es un instrumento de extracción de inteligencia de negocios que nos permite construir una hipótesis estratégica antes de conversar contigo.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 text-xs text-neutral-700">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#E30613] shrink-0" />
              <span>Oferta actual y estructura de precios</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#E30613] shrink-0" />
              <span>Posicionamiento y percepción de estatus</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#E30613] shrink-0" />
              <span>Capacidad operativa y techo de horas</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#E30613] shrink-0" />
              <span>Ecosistema digital e integración de IA</span>
            </div>
          </div>
        </div>

        {/* Action Panel */}
        <div className="lg:col-span-5 bg-white border border-neutral-200 rounded-xl p-6 shadow-xs flex flex-col justify-between space-y-6">
          <div>
            <div className="flex items-center gap-2 text-xs text-neutral-500 mb-2">
              <Clock className="w-4 h-4 text-[#E30613]" />
              <span>Tiempo estimado: 4 a 6 minutos</span>
            </div>
            <h5 className="font-bold text-neutral-900 text-sm mb-1">
              Plataforma de Prediagnóstico CREA Y MONETIZA®
            </h5>
            <p className="text-xs text-neutral-500 leading-relaxed">
              Completa el formulario en nuestra plataforma oficial para mapear tus brechas y recibir tu hipótesis estratégica.
            </p>
          </div>

          <a
            href={BRAND_INFO.prediagnosticoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3.5 px-6 text-sm font-bold text-white bg-[#E30613] hover:bg-[#c90510] rounded-lg transition-all shadow-md hover:shadow-red-600/30 flex items-center justify-center gap-2.5 cursor-pointer text-center"
          >
            <span>Ir al Prediagnóstico Oficial</span>
            <ExternalLink className="w-4 h-4" />
          </a>

          <div className="flex items-center justify-center gap-2 text-[11px] text-neutral-500 pt-2 border-t border-neutral-100">
            <ShieldCheck className="w-3.5 h-3.5 text-[#E30613]" />
            <span>Confidencialidad absoluta garantizada</span>
          </div>
        </div>
      </div>

      {/* Alternative direct contact */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-xl border border-neutral-200 bg-white text-xs text-neutral-600">
        <span>¿Tienes una duda puntual sobre si tu perfil califica antes de llenar el formulario?</span>
        <a
          href={`https://wa.me/573000000000?text=${encodeURIComponent('Hola Patricia, estuve revisando tu sitio patriloaiza.com y me gustaría consultar una duda sobre el prediagnóstico.')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#E30613] font-bold hover:underline flex items-center gap-1.5 shrink-0"
        >
          <MessageSquare className="w-4 h-4" />
          <span>Escribir por WhatsApp a Patricia</span>
        </a>
      </div>
    </div>
  );
};
