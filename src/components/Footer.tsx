import React from 'react';
import { ActiveView } from '../types/index.ts';
import { Bot, ExternalLink, FileText, ShieldCheck } from 'lucide-react';
import { BRAND_INFO } from '../data/content.ts';

interface FooterProps {
  setActiveView: (view: ActiveView) => void;
  onSelectPilar?: (pilarId: string) => void;
  onOpenLegal?: (docId: 'politica-datos' | 'aviso-privacidad' | 'autorizacion-datos') => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveView, onSelectPilar, onOpenLegal }) => {
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
                src="./assets/aistudio/Logo_horizontal_fondo_negro_17c39b50.jpeg"
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

          {/* Col 4: RECURSOS & LEGAL */}
          <div className="lg:col-span-2 space-y-3">
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-[#E30613]" />
              <h4 className="text-xs font-bold uppercase tracking-wider text-white font-mono">
                Legal & IA
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
                  className="hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer text-left"
                >
                  <Bot className="w-3.5 h-3.5 text-[#E30613] shrink-0" />
                  <span>Para Agentes de IA (/for-ai)</span>
                </button>
              </li>
              <li className="pt-2 border-t border-neutral-900">
                <a
                  href="./docs/autorizacion-tratamiento-datos.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1.5 text-left text-neutral-300 group"
                  title="Abrir PDF oficial de Autorización Tratamiento de Datos Personales"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-[#E30613] shrink-0" />
                  <span className="group-hover:underline">Autorización Tratamiento de Datos Personales</span>
                </a>
              </li>
              <li>
                <a
                  href="./docs/politica-tratamiento-datos.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1.5 text-left text-neutral-400 group"
                  title="Abrir PDF oficial de Política de Tratamiento de Datos"
                >
                  <FileText className="w-3.5 h-3.5 text-neutral-500 shrink-0" />
                  <span className="group-hover:underline">Política de Tratamiento de Datos (PL-01)</span>
                </a>
              </li>
              <li>
                <a
                  href="./docs/aviso-privacidad.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1.5 text-left text-neutral-400 group"
                  title="Abrir PDF oficial de Aviso de Privacidad"
                >
                  <FileText className="w-3.5 h-3.5 text-neutral-500 shrink-0" />
                  <span className="group-hover:underline">Aviso de Privacidad (AV-01)</span>
                </a>
              </li>
              <li>
                <a
                  href="./docs/politica-cookies.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1.5 text-left text-neutral-400 group"
                  title="Abrir PDF oficial de Política de Cookies"
                >
                  <FileText className="w-3.5 h-3.5 text-neutral-500 shrink-0" />
                  <span className="group-hover:underline">Política de Cookies (CK-01)</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal Notice */}
        <div className="pt-10 mt-10 border-t border-neutral-900 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-neutral-500">
          <p>© 2026 PATRICIA LOAIZA®. METODOLOGÍA CREA Y MONETIZA®. DOMINIO: soypatricialoaiza.com. TODOS LOS DERECHOS RESERVADOS.</p>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 font-mono text-[11px]">
            <a 
              href="./docs/aviso-privacidad.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-neutral-200 transition-colors underline-offset-2 hover:underline"
            >
              Aviso Legal & Privacidad (AV-01)
            </a>
            <span className="text-neutral-700">·</span>
            <a 
              href="./docs/politica-tratamiento-datos.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-neutral-200 transition-colors underline-offset-2 hover:underline"
            >
              Política de Tratamiento de Datos (PL-01)
            </a>
            <span className="text-neutral-700">·</span>
            <a 
              href="./docs/autorizacion-tratamiento-datos.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-[#E30613] text-neutral-400 font-semibold transition-colors underline-offset-2 hover:underline"
              title="Autorización para el Tratamiento de Datos Personales"
            >
              Autorización Tratamiento de Datos Personales (AT-01)
            </a>
            <span className="text-neutral-700">·</span>
            <a 
              href="./docs/politica-cookies.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-neutral-200 transition-colors underline-offset-2 hover:underline"
              title="Política de Cookies"
            >
              Política de Cookies (CK-01)
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
