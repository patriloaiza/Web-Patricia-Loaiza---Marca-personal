import React from 'react';
import { FORMACION_ACADEMICA } from '../data/content.ts';

export const FormacionAcademicaSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#F7F7F7] border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* Left Column matching screenshot image_c1e61421.png */}
          <div className="lg:col-span-4">
            <span className="text-xs font-bold uppercase tracking-widest text-neutral-500 font-mono block mb-3">
              FORMACIÓN ACADÉMICA
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-neutral-900 tracking-tight leading-tight">
              Aprender también forma parte del trabajo.
            </h2>
            <p className="mt-4 text-sm text-neutral-600 leading-relaxed">
              La solidez metodológica se nutre de la formación reglada de base, la actualización continua en inteligencia artificial y la experiencia práctica directa.
            </p>
          </div>

          {/* Right Column matching screenshot image_c1e61421.png */}
          <div className="lg:col-span-8 divide-y divide-neutral-200 border-t border-b border-neutral-200 bg-white">
            {FORMACION_ACADEMICA.map((item, idx) => (
              <div
                key={idx}
                className="py-6 px-6 sm:px-8 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-neutral-50/60 transition-colors"
              >
                <div>
                  <h3 className="text-base font-bold text-neutral-900 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-neutral-600 mt-1">
                    {item.institution}
                  </p>
                </div>

                {item.year && (
                  <span className="text-xs font-mono font-medium text-neutral-400 shrink-0">
                    {item.year}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
