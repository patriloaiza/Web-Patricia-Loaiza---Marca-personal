import React, { useState, useRef } from 'react';
import { ArrowDown, ExternalLink, Camera, Upload, User, X } from 'lucide-react';
import { BRAND_INFO } from '../data/content.ts';

interface HeroProps {
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreServices }) => {
  // Allow user to upload, preview or change their own official photo directly in the browser
  const [photoUrl, setPhotoUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setPhotoUrl(url);
    }
  };

  const removePhoto = () => {
    setPhotoUrl(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const scrollToBio = () => {
    document.getElementById('biografia-corta')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="sobre-patricia" className="relative pt-6 pb-16 bg-[#F7F7F7] border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb strip matching screenshot image_d2fe5d66.png */}
        <div className="flex items-center justify-between text-xs tracking-wider uppercase text-neutral-400 font-semibold pb-4 mb-8 border-b border-neutral-200">
          <div className="flex items-center gap-2">
            <span>INICIO</span>
            <span>/</span>
            <span className="text-neutral-900 font-bold">SOBRE PATRICIA</span>
          </div>
          <span className="text-neutral-500 font-mono text-[11px]">
            BIOGRAFÍA OFICIAL
          </span>
        </div>

        {/* 2-Column Hero Structure matching screenshot image_d2fe5d66.png */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column (7 cols): Editorial text + Credentials Strip below button */}
          <div className="lg:col-span-7 flex flex-col justify-start">
            {/* Kicker: — BIOGRAFÍA OFICIAL */}
            <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-widest text-neutral-700 mb-4 font-mono">
              <span className="h-[2px] w-6 bg-neutral-900 inline-block" />
              <span>BIOGRAFÍA OFICIAL</span>
            </div>

            {/* Main Name matching Vilma's bold editorial typography */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-neutral-900 leading-[0.92] mb-3">
              PATRICIA LOAIZA
            </h1>

            {/* Accent badge directly below name, matching Ph.D. yellow badge placement */}
            <div className="mb-6">
              <span className="inline-block px-3.5 py-1.5 bg-[#E30613] text-white font-extrabold text-xs sm:text-sm tracking-wider uppercase">
                CREA Y MONETIZA®
              </span>
            </div>

            {/* Subtitle */}
            <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-3 tracking-tight leading-snug">
              Consultora de marketing y negocios
            </h2>

            {/* Core Value Proposition headline */}
            <p className="text-2xl sm:text-3xl font-black text-neutral-900 leading-tight mb-4 tracking-tight">
              Convierto tu experiencia profesional en una estrategia de negocio, una oferta clara y un sistema comercial estructurado.
            </p>

            {/* Target Audience & Methodology Context */}
            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed mb-8 max-w-2xl font-normal">
              Acompaño a <strong className="text-neutral-900 font-semibold">consultores, terapeutas, psicólogos y profesionales del conocimiento (senior +40 a 65 años)</strong> a transformar su trayectoria y saber hacer acumulado en ofertas estructuradas, diferenciación visible y sistemas comerciales que puedan gestionar con total autonomía.
            </p>

            {/* Action Buttons: Solid Black LEER BIOGRAFÍA + Prediagnóstico */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <button
                onClick={scrollToBio}
                className="px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white bg-black hover:bg-neutral-800 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
              >
                <span>LEER BIOGRAFÍA</span>
                <ArrowDown className="w-3.5 h-3.5 text-neutral-300" />
              </button>

              <a
                href={BRAND_INFO.prediagnosticoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white bg-[#E30613] hover:bg-[#c90510] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
              >
                <span>PREDIAGNÓSTICO OFICIAL</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Credentials Strip directly inside left column matching screenshot image_d2fe5d66.png */}
            <div className="p-6 bg-white border border-neutral-300 shadow-xs">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
                {/* Col 1: BASE PROFESIONAL */}
                <div className="space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 block font-mono">
                    BASE PROFESIONAL
                  </span>
                  <div className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-[#E30613] mt-1 shrink-0" />
                    <span className="text-xs font-semibold text-neutral-900 leading-tight">
                      Medellín, Colombia
                    </span>
                  </div>
                </div>

                {/* Col 2: CREDENCIALES */}
                <div className="space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 block font-mono">
                    CREDENCIALES
                  </span>
                  <div className="space-y-1.5">
                    <div className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-[#E30613] mt-1 shrink-0" />
                      <span className="text-xs font-semibold text-neutral-900 leading-tight">
                        Administradora de Empresas (UCC)
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-[#E30613] mt-1 shrink-0" />
                      <span className="text-xs font-semibold text-neutral-900 leading-tight">
                        Consultora Estratégica & Creadora de CREA Y MONETIZA®
                      </span>
                    </div>
                  </div>
                </div>

                {/* Col 3: TRAYECTORIA */}
                <div className="space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 block font-mono">
                    TRAYECTORIA
                  </span>
                  <div className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-[#E30613] mt-1 shrink-0" />
                    <span className="text-xs font-medium text-neutral-800 leading-relaxed">
                      Cargos misionales y de coordinación en FAO (ONU), programas de la Unión Europea (CISP), Nestlé S.A. y Red Adelco.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (5 cols): Dedicated Space for Patricia's Photo matching screenshot image_d2fe5d66.png */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <div className="w-full max-w-md relative">
              {/* Architectural Offset Black Frame Outline behind the photo (Vilma signature framing) */}
              <div className="absolute inset-0 translate-x-3 translate-y-3 sm:translate-x-5 sm:translate-y-5 border-2 sm:border-[3px] border-black pointer-events-none">
                {/* Badge attached to top-right of the black frame matching Vilma's LINKEDIN TOP VOICE badge */}
                <div className="absolute -top-3.5 right-3 sm:right-4 bg-black text-white px-2.5 py-1 text-[10px] font-bold tracking-wider uppercase flex items-center gap-1.5 shadow-sm">
                  <span className="w-1.5 h-1.5 bg-[#E30613]" />
                  <span>CONSULTORÍA OFICIAL</span>
                </div>
              </div>

              {/* Main White Passe-partout Frame in front */}
              <div className="relative z-10 bg-white border border-neutral-300 p-6 sm:p-8 min-h-[520px] sm:min-h-[580px] flex flex-col items-center justify-center shadow-xs">
                {photoUrl ? (
                  /* Display Uploaded Official Portrait */
                  <div className="relative w-full h-full flex flex-col items-center justify-center">
                    <img
                      src={photoUrl}
                      alt="Patricia Loaiza"
                      className="max-h-[520px] w-auto object-contain object-bottom mx-auto"
                    />
                    
                    {/* Floating Controls to Change or Remove */}
                    <div className="absolute bottom-2 right-2 flex items-center gap-2">
                      <button
                        onClick={() => fileInputRef.current?.click()}
                        className="px-3 py-1.5 bg-black/80 hover:bg-black text-white text-[11px] font-bold rounded flex items-center gap-1.5 shadow-md transition-colors cursor-pointer"
                        title="Cambiar fotografía"
                      >
                        <Camera className="w-3.5 h-3.5 text-[#E30613]" />
                        <span>Cambiar foto</span>
                      </button>
                      <button
                        onClick={removePhoto}
                        className="p-1.5 bg-black/80 hover:bg-red-600 text-white rounded shadow-md transition-colors cursor-pointer"
                        title="Quitar foto"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ) : (
                  /* Editorial Placeholder specifically sized and styled for Patricia's official portrait */
                  <div className="w-full h-full min-h-[460px] flex flex-col items-center justify-center p-6 text-center border-2 border-dashed border-neutral-200 bg-neutral-50/50">
                    <div className="w-24 h-24 rounded-full bg-white border-2 border-neutral-300 shadow-xs flex items-center justify-center mb-5 text-neutral-400 relative">
                      <User className="w-12 h-12 text-neutral-300" />
                      <div className="absolute bottom-0 right-0 w-7 h-7 rounded-full bg-[#E30613] text-white flex items-center justify-center shadow-sm">
                        <Camera className="w-3.5 h-3.5" />
                      </div>
                    </div>

                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#E30613] mb-1 block">
                      ESPACIO RESERVADO
                    </span>
                    <h3 className="text-base font-bold text-neutral-900 mb-2">
                      Retrato Oficial de Patricia Loaiza
                    </h3>
                    <p className="text-xs text-neutral-500 max-w-xs mb-6 leading-relaxed">
                      Encuadre editorial vertical con fondo neutro o transparente según el diseño de referencia.
                    </p>

                    <button
                      onClick={() => fileInputRef.current?.click()}
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-black hover:bg-neutral-800 text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer shadow-xs"
                    >
                      <Upload className="w-3.5 h-3.5 text-[#E30613]" />
                      <span>Cargar fotografía oficial</span>
                    </button>
                  </div>
                )}

                {/* Hidden File Input for instant local image preview */}
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handlePhotoUpload}
                  accept="image/*"
                  className="hidden"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
