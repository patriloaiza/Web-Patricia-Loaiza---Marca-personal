import React from 'react';
import { ActiveView } from '../types/index.ts';
import { Bot, ExternalLink } from 'lucide-react';
import { BRAND_INFO } from '../data/content.ts';

interface FooterProps {
  setActiveView: (view: ActiveView) => void;
  onSelectPilar?: (pilarId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveView, onSelectPilar }) => {
  const handlePilarClick = (id: string) => {
    if (onSelectPilar) {
      onSelectPilar(id);
    } else {
      setActiveView('main');
      setTimeout(() => {
        document.getElementById('cuatro-servicios')?.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    }
  };
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
                  onClick={() => { setActiveView('main'); setTimeout(() => { document.getElementById('sobre-patricia-trayectoria')?.scrollIntoView({ behavior: 'smooth' }); }, 50); }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Sobre Patricia
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setActiveView('main'); setTimeout(() => { document.getElementById('como-trabajo')?.scrollIntoView({ behavior: 'smooth' }); }, 50); }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Ruta en 5 Pasos
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setActiveView('main'); setTimeout(() => { document.getElementById('sobre-patricia-trayectoria')?.scrollIntoView({ behavior: 'smooth' }); }, 50); }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Principios y Postura
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setActiveView('main'); setTimeout(() => { document.getElementById('sobre-patricia-trayectoria')?.scrollIntoView({ behavior: 'smooth' }); }, 50); }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Trayectoria Institucional
                </button>
              </li>
            </ul>
          </div>

          {/* Col 2: METODOLOGÍA (2 Cols) */}
          <div className="lg:col-span-2 space-y-3">
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-[#E30613]" />
              <h4 className="text-xs font-bold uppercase tracking-wider text-white font-mono">
                Metodología
              </h4>
            </div>
            <ul className="space-y-2 text-neutral-400">
              <li>
                <button
                  onClick={() => { setActiveView('main'); setTimeout(() => { document.getElementById('metodologia-frameworks')?.scrollIntoView({ behavior: 'smooth' }); }, 50); }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Crea y Monetiza®
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setActiveView('main'); setTimeout(() => { document.getElementById('metodologia-frameworks')?.scrollIntoView({ behavior: 'smooth' }); }, 50); }}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Metodología Crea y Monetiza®
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setActiveView('main'); setTimeout(() => { document.getElementById('metodologia-frameworks')?.scrollIntoView({ behavior: 'smooth' }); }, 50); }}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Crédito a BMS (Vilma Núñez)
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setActiveView('main'); setTimeout(() => { document.getElementById('que-te-llevas')?.scrollIntoView({ behavior: 'smooth' }); }, 50); }}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Portal de Notion & Copilotos IA
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setActiveView('main'); setTimeout(() => { document.getElementById('consultorio-faqs')?.scrollIntoView({ behavior: 'smooth' }); }, 50); }}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Consultorio & FAQs
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: 5 PILARES DE SERVICIO */}
          <div className="lg:col-span-2 space-y-3">
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-[#E30613]" />
              <h4 className="text-xs font-bold uppercase tracking-wider text-white font-mono">
                Cinco Pilares
              </h4>
            </div>
            <ul className="space-y-2 text-neutral-400">
              <li>
                <button
                  onClick={() => handlePilarClick('pilar-1')}
                  className="hover:text-white transition-colors text-left cursor-pointer block"
                >
                  Pilar 1: Estrategia de Negocio
                </button>
              </li>
              <li>
                <button
                  onClick={() => handlePilarClick('pilar-2')}
                  className="hover:text-white transition-colors text-left cursor-pointer block"
                >
                  Pilar 2: Marca Personal
                </button>
              </li>
              <li>
                <button
                  onClick={() => handlePilarClick('pilar-3')}
                  className="hover:text-white transition-colors text-left cursor-pointer block"
                >
                  Pilar 3: Sistema de Contenidos
                </button>
              </li>
              <li>
                <button
                  onClick={() => handlePilarClick('pilar-4')}
                  className="hover:text-white transition-colors text-left cursor-pointer block"
                >
                  Pilar 4: Día de Negocios Digitales
                </button>
              </li>
              <li>
                <button
                  onClick={() => handlePilarClick('pilar-5')}
                  className="hover:text-white transition-colors text-left cursor-pointer block text-[#E30613]"
                >
                  Pilar 5: Ecosistema Llave en Mano
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
