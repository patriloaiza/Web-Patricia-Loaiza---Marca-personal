import React, { useState, useEffect } from 'react';
import { ShieldCheck, ExternalLink, X } from 'lucide-react';

export const CookieConsentBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('pl_cookie_consent');
    if (!consent) {
      // Small timeout so it slides in smoothly
      const timer = setTimeout(() => setIsVisible(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('pl_cookie_consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('pl_cookie_consent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <aside 
      aria-label="Aviso de cookies"
      className="fixed bottom-0 inset-x-0 z-40 p-3 sm:p-4 bg-[#0A0A0A]/95 backdrop-blur-md border-t border-neutral-800 text-neutral-300 shadow-2xl animate-slideUp"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-xs bg-neutral-900 border border-neutral-700 flex items-center justify-center text-[#E30613] shrink-0 mt-0.5">
            <ShieldCheck className="w-4 h-4" />
          </div>
          <div className="text-xs leading-relaxed max-w-3xl">
            <strong className="text-white block font-mono uppercase tracking-wider mb-0.5">
              Privacidad & Uso de Cookies en soypatricialoaiza.com
            </strong>
            <p className="text-neutral-400">
              Utilizamos cookies propias y de analítica (Google Analytics 4) para medir el tráfico agregado y asegurar el funcionamiento óptimo de la web. Puedes consultar los detalles en nuestra{' '}
              <a
                href="./docs/politica-cookies.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#E30613] hover:underline font-semibold inline-flex items-center gap-0.5"
              >
                <span>Política de Cookies (CK-01)</span>
                <ExternalLink className="w-2.5 h-2.5" />
              </a>.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0 w-full md:w-auto justify-end">
          <button
            onClick={handleDecline}
            className="px-3 py-1.5 text-xs font-mono text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors border border-transparent hover:border-neutral-700 cursor-pointer"
          >
            Solo necesarias
          </button>
          <button
            onClick={handleAccept}
            className="px-4 py-1.5 text-xs font-mono font-bold bg-[#E30613] hover:bg-[#b8050f] text-white transition-colors cursor-pointer shadow-xs"
          >
            Aceptar todas
          </button>
          <button
            onClick={handleDecline}
            aria-label="Cerrar aviso de cookies"
            className="p-1 text-neutral-500 hover:text-white transition-colors cursor-pointer md:hidden"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </aside>
  );
};
