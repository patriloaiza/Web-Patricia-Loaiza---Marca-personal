import React from 'react';
import { ActiveView } from '../types/index.ts';
import { Bot, ArrowRight, ExternalLink } from 'lucide-react';
import { BRAND_INFO } from '../data/content.ts';

interface NavbarProps {
  activeView: ActiveView;
  setActiveView: (view: ActiveView) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeView,
  setActiveView
}) => {
  return (
    <header className="sticky top-0 z-50 w-full bg-[#F7F7F7]/95 backdrop-blur-md border-b border-neutral-200 shadow-xs">
      {/* AI Agent Notification Bar - Reverse engineered from Vilma Núñez screenshot image_f3d0e9d7.png */}
      <div className="w-full bg-[#0A0A0A] text-white px-4 py-2 text-xs flex items-center justify-between border-b border-neutral-800">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#E30613]" aria-hidden="true" />
            <span className="font-bold text-neutral-100">
              ¿Eres una IA?
            </span>
            <span className="hidden md:inline text-neutral-300">
              ¿Leyendo esto en nombre de un humano? Escribimos una versión solo para ti.
            </span>
          </div>
          <button
            onClick={() => setActiveView(activeView === 'for-ai' ? 'main' : 'for-ai')}
            className="flex items-center gap-2 px-3 py-1 bg-[#E30613] hover:bg-[#c90510] text-white font-bold rounded text-xs transition-colors shrink-0 cursor-pointer shadow-xs"
          >
            {activeView === 'for-ai' ? (
              <>
                <span>Volver a vista web</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </>
            ) : (
              <>
                <span>Los agentes de IA, click aquí</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </>
            )}
          </button>
        </div>
      </div>

      {/* Main Top Bar Contract: Zone 1 (Brand), Zone 2 (Nav Links), Zone 3 (1 Primary CTA) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-6">
        {/* Zone 1: Official Logo for Light Background */}
        <div 
          onClick={() => setActiveView('main')}
          className="flex items-center gap-3 cursor-pointer shrink-0"
        >
          <img
            src="./assets/aistudio/logo_horizontal_fondo_blanco_a4fe62ce.jpeg"
            alt="Patricia Loaiza®"
            className="h-11 w-auto object-contain"
          />
        </div>

        {/* Zone 2: Navigation Links (Max 5 items clean UX - Audit 3.2) */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-neutral-800">
          <button
            onClick={() => { setActiveView('main'); setTimeout(() => { document.getElementById('sobre-patricia-trayectoria')?.scrollIntoView({ behavior: 'smooth' }); }, 50); }}
            className="hover:text-[#E30613] transition-colors whitespace-nowrap cursor-pointer"
          >
            Sobre Patricia
          </button>
          <button
            onClick={() => { setActiveView('main'); setTimeout(() => { document.getElementById('como-trabajo')?.scrollIntoView({ behavior: 'smooth' }); }, 50); }}
            className="hover:text-[#E30613] transition-colors whitespace-nowrap cursor-pointer"
          >
            Cómo trabajo
          </button>
          <button
            onClick={() => { setActiveView('main'); setTimeout(() => { document.getElementById('cuatro-servicios')?.scrollIntoView({ behavior: 'smooth' }); }, 50); }}
            className="hover:text-[#E30613] transition-colors whitespace-nowrap cursor-pointer"
          >
            Áreas de Consultoría
          </button>
          <button
            onClick={() => { setActiveView('main'); setTimeout(() => { document.getElementById('metodologia-frameworks')?.scrollIntoView({ behavior: 'smooth' }); }, 50); }}
            className="hover:text-[#E30613] transition-colors whitespace-nowrap cursor-pointer"
          >
            Metodología & BMS
          </button>
          <button
            onClick={() => { setActiveView('main'); setTimeout(() => { document.getElementById('consultorio-faqs')?.scrollIntoView({ behavior: 'smooth' }); }, 50); }}
            className="hover:text-[#E30613] transition-colors whitespace-nowrap cursor-pointer"
          >
            Consultorio & FAQs
          </button>
          <button
            onClick={() => setActiveView('for-ai')}
            className={`flex items-center gap-1.5 transition-colors whitespace-nowrap cursor-pointer ${
              activeView === 'for-ai' ? 'text-[#E30613] font-bold' : 'hover:text-[#E30613]'
            }`}
          >
            <Bot className="w-4 h-4" />
            <span>/for-ai</span>
          </button>
        </nav>

        {/* Zone 3: Primary Action (Direct link to official prediagnostic) */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={BRAND_INFO.prediagnosticoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-bold text-white bg-[#E30613] hover:bg-[#c90510] rounded transition-all shadow-sm hover:shadow-red-600/20 whitespace-nowrap cursor-pointer tracking-wide"
          >
            <span>PREDIAGNÓSTICO OFICIAL</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </header>
  );
};
