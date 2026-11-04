import React, { useState, useEffect } from 'react';
import { LEGAL_DOCS, LegalDocItem } from '../data/legalDocs.ts';
import { X, FileText, Download, Copy, Check, ExternalLink, ShieldCheck } from 'lucide-react';

interface LegalModalProps {
  isOpen: boolean;
  initialDocId?: 'politica-datos' | 'aviso-privacidad' | 'autorizacion-datos' | 'politica-cookies';
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ isOpen, initialDocId = 'autorizacion-datos', onClose }) => {
  const [activeTab, setActiveTab] = useState<'politica-datos' | 'aviso-privacidad' | 'autorizacion-datos' | 'politica-cookies'>(initialDocId);
  const [copiedLink, setCopiedLink] = useState(false);
  const [copiedCheckbox, setCopiedCheckbox] = useState(false);

  useEffect(() => {
    if (initialDocId) {
      setActiveTab(initialDocId);
    }
  }, [initialDocId]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const currentDoc: LegalDocItem = LEGAL_DOCS.find((d) => d.id === activeTab) || LEGAL_DOCS[0];

  const handleCopyLink = () => {
    const fullUrl = `${window.location.origin}${currentDoc.pdfUrl.replace(/^\./, '')}`;
    navigator.clipboard.writeText(fullUrl);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const handleCopyCheckboxText = () => {
    const checkboxText = `He leído y autorizo el tratamiento de mis datos personales por Patricia Loaiza, conforme a la Autorización para el Tratamiento de Datos Personales AT-01 y a la Política de Tratamiento de Datos Personales PL-01. Entiendo las finalidades, mis derechos y los canales para ejercerlos.`;
    navigator.clipboard.writeText(checkboxText);
    setCopiedCheckbox(true);
    setTimeout(() => setCopiedCheckbox(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div 
        className="bg-[#0D0D0D] border border-neutral-800 text-white w-full max-w-4xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden rounded-xs"
        role="dialog"
        aria-modal="true"
        aria-labelledby="legal-modal-title"
      >
        {/* Modal Top Bar */}
        <div className="p-4 sm:p-6 border-b border-neutral-800 bg-[#121212] flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-neutral-900 border border-neutral-700 flex items-center justify-center text-[#E30613]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#E30613] bg-neutral-900 px-2 py-0.5 border border-neutral-800">
                  MARCO LEGAL OFICIAL
                </span>
                <span className="text-[10px] font-mono text-neutral-400">
                  {currentDoc.code} · v{currentDoc.version}
                </span>
              </div>
              <h2 id="legal-modal-title" className="text-base sm:text-lg font-bold text-white tracking-tight">
                Patricia Loaiza™ | CREA Y MONETIZA™
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors cursor-pointer"
            aria-label="Cerrar ventana"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-neutral-800 bg-black overflow-x-auto scrollbar-none shrink-0">
          {LEGAL_DOCS.map((doc) => {
            const isActive = doc.id === activeTab;
            return (
              <button
                key={doc.id}
                onClick={() => setActiveTab(doc.id)}
                className={`px-4 sm:px-6 py-3 text-xs font-mono font-bold uppercase tracking-wider whitespace-nowrap transition-all border-b-2 cursor-pointer flex items-center gap-2 ${
                  isActive
                    ? 'border-[#E30613] text-white bg-neutral-900/60'
                    : 'border-transparent text-neutral-400 hover:text-neutral-200 hover:bg-neutral-900/30'
                }`}
              >
                <FileText className={`w-3.5 h-3.5 ${isActive ? 'text-[#E30613]' : 'text-neutral-500'}`} />
                <span>{doc.code}: {doc.id === 'autorizacion-datos' ? 'Autorización Tratamiento de Datos' : doc.id === 'politica-datos' ? 'Política de Tratamiento' : 'Aviso de Privacidad'}</span>
              </button>
            );
          })}
        </div>

        {/* Action Header Banner for the active document */}
        <div className="bg-[#151515] p-4 sm:p-5 border-b border-neutral-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shrink-0">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-mono font-bold text-[#E30613]">
                {currentDoc.code} v{currentDoc.version}
              </span>
              <span className="text-neutral-500">·</span>
              <span className="text-xs text-neutral-400">Emisión: {currentDoc.date}</span>
              <span className="text-neutral-500">·</span>
              <span className="text-[11px] bg-neutral-800 text-neutral-300 px-2 py-0.5 font-mono">
                {currentDoc.badge}
              </span>
            </div>
            <h3 className="text-sm sm:text-base font-bold text-white">
              {currentDoc.title}
            </h3>
            <p className="text-xs text-neutral-400 mt-0.5 line-clamp-1">
              {currentDoc.description}
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <a
              href={currentDoc.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#E30613] hover:bg-[#b8050f] text-white text-xs font-bold font-mono uppercase tracking-wider transition-colors shadow-xs"
              title="Abrir o descargar el PDF original firmado"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Ver PDF</span>
            </a>

            <button
              onClick={handleCopyLink}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-xs font-mono font-bold transition-colors border border-neutral-700 cursor-pointer"
              title="Copiar el enlace del PDF para pegar en formularios"
            >
              {copiedLink ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedLink ? '¡Copiado!' : 'Copiar URL'}</span>
            </button>
          </div>
        </div>

        {/* Content Body (Scrollable) */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-6 text-xs sm:text-sm text-neutral-300 leading-relaxed font-sans">
          {/* Official Acceptance Text (Section 8) */}
          {currentDoc.id === 'autorizacion-datos' && (
            <div className="p-4 bg-neutral-900 border-l-4 border-[#E30613] rounded-xs space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                  Texto Oficial de Aceptación Digital (Sección 8 · AT-01)
                </span>
                <button
                  onClick={handleCopyCheckboxText}
                  className="inline-flex items-center gap-1 px-2.5 py-1 text-[11px] font-mono font-bold bg-[#E30613] text-white hover:bg-[#b8050f] transition-colors cursor-pointer"
                >
                  {copiedCheckbox ? <Check className="w-3 h-3 text-white" /> : <Copy className="w-3 h-3" />}
                  <span>{copiedCheckbox ? '¡Copiado!' : 'Copiar texto oficial'}</span>
                </button>
              </div>
              <p className="text-xs text-neutral-300 italic bg-black/40 p-3 border border-neutral-800 font-sans">
                "He leído y autorizo el tratamiento de mis datos personales por Patricia Loaiza, conforme a la Autorización para el Tratamiento de Datos Personales AT-01 y a la Política de Tratamiento de Datos Personales PL-01. Entiendo las finalidades, mis derechos y los canales para ejercerlos."
              </p>
              <p className="text-[11px] text-neutral-400 font-mono">
                Enlace para incrustar en el texto del formulario de GHL:{' '}
                <code className="text-[#E30613] select-all bg-black px-1.5 py-0.5 border border-neutral-800">
                  https://soypatricialoaiza.com/docs/autorizacion-tratamiento-datos.pdf
                </code>
              </p>
            </div>
          )}

          {/* Render Document Sections */}
          <div className="space-y-6">
            {currentDoc.sections.map((section, idx) => (
              <div 
                key={idx} 
                className={`space-y-2 pb-4 ${
                  section.isHighlighted 
                    ? 'p-4 bg-neutral-900 border border-neutral-700' 
                    : 'border-b border-neutral-900'
                }`}
              >
                <h4 className="text-sm font-bold text-white font-mono flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#E30613]" />
                  <span>{section.title}</span>
                </h4>
                {Array.isArray(section.content) ? (
                  <div className="space-y-1.5 pl-3 border-l border-neutral-800 text-neutral-300">
                    {section.content.map((p, pIdx) => (
                      <p key={pIdx} className="leading-relaxed">
                        {p}
                      </p>
                    ))}
                  </div>
                ) : (
                  <p className="pl-3 border-l border-neutral-800 text-neutral-300 leading-relaxed">
                    {section.content}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Legal Footer Stamp */}
          <div className="pt-4 text-[11px] font-mono text-neutral-500 border-t border-neutral-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <p>Documento oficial emitido el 2 de noviembre de 2026 · Medellín, Colombia.</p>
            <a 
              href={currentDoc.pdfUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#E30613] hover:underline flex items-center gap-1"
            >
              <span>Abrir archivo PDF original</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Modal Bottom Close */}
        <div className="p-3 sm:p-4 border-t border-neutral-800 bg-[#121212] flex items-center justify-end shrink-0">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-mono font-bold tracking-wider uppercase transition-colors cursor-pointer"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};
