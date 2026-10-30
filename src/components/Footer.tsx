import React from 'react';
import { ActiveView } from '../types/index.ts';
import { Bot, ExternalLink } from 'lucide-react';
import { BRAND_INFO } from '../data/content.ts';

interface FooterProps {
  setActiveView: (view: ActiveView) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveView }) => {
  return (
    <footer className="bg-[#0A0A0A] text-neutral-400 border-t border-neutral-900 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand Info (4 Cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/assets/aistudio/Logo_horizontal_fondo_negro_17c39b50.jpeg"
                alt="Patricia Loaiza®"
                className="h-10 w-auto object-contain"
              />
            </div>

            <p className="text-white font-bold text-xs italic">
              "Estrategia · Experiencia · Impacto. Tu experiencia. Tu método. Tu legado."
            </p>

            <p className="text-neutral-400 text-xs leading-relaxed max-w-sm">
              Consultoría estratégica para profesionales y expertos senior (40 a 65 años) que buscan convertir su conocimiento en un negocio estructurado con inteligencia artificial y capacidad instalada.
            </p>

            <div className="pt-2 text-neutral-500 text-[11px] space-y-1">
              <p>Medellín, Colombia · Atención en toda Iberoamérica y España</p>
              <p>Dominio oficial: <strong className="text-white">{BRAND_INFO.domain}</strong></p>
              <p>Contacto: {BRAND_INFO.contactEmail}</p>
            </div>
          </div>

          {/* Col 1: IDENTIDAD (2 Cols) matching screenshot image_e467b601.png */}
          <div className="lg:col-span-2 space-y-3">
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-[#E30613]" />
              <h4 className="text-xs font-bold uppercase tracking-wider text-white font-mono">
                Identidad
              </h4>
            </div>
            <ul className="space-y-2 text-neutral-400">
              <li>
                <button
                  onClick={() => { setActiveView('main'); setTimeout(() => { document.getElementById('sobre-patricia')?.scrollIntoView({ behavior: 'smooth' }); }, 50); }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Sobre Patricia
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setActiveView('main'); setTimeout(() => { document.getElementById('biografia-corta')?.scrollIntoView({ behavior: 'smooth' }); }, 50); }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Biografía Oficial
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setActiveView('main'); setTimeout(() => { document.getElementById('postura-identidad')?.scrollIntoView({ behavior: 'smooth' }); }, 50); }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Hitos Alcanzados
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setActiveView('main'); setTimeout(() => { document.getElementById('hitos-evolucion')?.scrollIntoView({ behavior: 'smooth' }); }, 50); }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Trayectoria (2005–Act.)
                </button>
              </li>
            </ul>
          </div>

          {/* Col 2: PENSAMIENTO (2 Cols) matching screenshot image_e467b601.png */}
          <div className="lg:col-span-2 space-y-3">
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-[#E30613]" />
              <h4 className="text-xs font-bold uppercase tracking-wider text-white font-mono">
                Pensamiento
              </h4>
            </div>
            <ul className="space-y-2 text-neutral-400">
              <li>
                <button
                  onClick={() => { setActiveView('main'); setTimeout(() => { document.getElementById('postura-identidad')?.scrollIntoView({ behavior: 'smooth' }); }, 50); }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Postura & Criterio
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setActiveView('main'); setTimeout(() => { document.getElementById('cuatro-servicios')?.scrollIntoView({ behavior: 'smooth' }); }, 50); }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Cuatro Territorios
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setActiveView('main'); setTimeout(() => { document.getElementById('preguntas-estrategicas')?.scrollIntoView({ behavior: 'smooth' }); }, 50); }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  10 Preguntas Clave
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: SERVICIOS (2 Cols) matching screenshot image_e467b601.png */}
          <div className="lg:col-span-2 space-y-3">
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-[#E30613]" />
              <h4 className="text-xs font-bold uppercase tracking-wider text-white font-mono">
                Servicios
              </h4>
            </div>
            <ul className="space-y-2 text-neutral-400">
              <li>
                <button
                  onClick={() => { setActiveView('main'); setTimeout(() => { document.getElementById('cuatro-servicios')?.scrollIntoView({ behavior: 'smooth' }); }, 50); }}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Estrategia de Negocio
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setActiveView('main'); setTimeout(() => { document.getElementById('cuatro-servicios')?.scrollIntoView({ behavior: 'smooth' }); }, 50); }}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Marca de Autoridad
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setActiveView('main'); setTimeout(() => { document.getElementById('cuatro-servicios')?.scrollIntoView({ behavior: 'smooth' }); }, 50); }}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Sistema de Contenido
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setActiveView('main'); setTimeout(() => { document.getElementById('cuatro-servicios')?.scrollIntoView({ behavior: 'smooth' }); }, 50); }}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Jornada de Negocio Digital
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: RECURSOS & IA (2 Cols) matching screenshot image_e467b601.png */}
          <div className="lg:col-span-2 space-y-3">
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-[#E30613]" />
              <h4 className="text-xs font-bold uppercase tracking-wider text-white font-mono">
                Recursos & IA
              </h4>
            </div>
            <ul className="space-y-2 text-neutral-400">
              <li>
                <a
                  href={BRAND_INFO.prediagnosticoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer text-[#E30613] font-semibold"
                >
                  <span>Prediagnóstico Oficial</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <button
                  onClick={() => setActiveView('for-ai')}
                  className="hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <Bot className="w-3.5 h-3.5 text-[#E30613]" />
                  <span>Para Agentes de IA (/for-ai)</span>
                </button>
              </li>
              <li>
                <span className="text-[11px] text-neutral-500 block pt-1">
                  Schema.org JSON-LD incrustado para SEO & GEO.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal Notice matching screenshot image_e467b601.png */}
        <div className="pt-10 mt-10 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-500">
          <p>© 2026 PATRICIA LOAIZA®. METODOLOGÍA CREA Y MONETIZA®. DOMINIO: patriloaiza.com. TODOS LOS DERECHOS RESERVADOS.</p>
          <div className="flex items-center gap-4">
            <span className="hover:text-neutral-300 cursor-pointer">Aviso Legal</span>
            <span>·</span>
            <span className="hover:text-neutral-300 cursor-pointer">Privacidad & Datos</span>
            <span>·</span>
            <span className="hover:text-neutral-300 cursor-pointer">Gobernanza Comercial</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
