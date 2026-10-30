import React, { useState } from 'react';
import { STRATEGIC_QUESTIONS, BRAND_INFO } from '../data/content.ts';
import { StrategicQuestion } from '../types/index.ts';
import { ChevronDown, ChevronUp, ExternalLink, HelpCircle, Search, Sparkles } from 'lucide-react';

export const StrategicFAQ: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('todas');
  const [openQuestionIds, setOpenQuestionIds] = useState<number[]>([1, 2]);
  const [searchTerm, setSearchTerm] = useState<string>('');

  const toggleQuestion = (id: number) => {
    setOpenQuestionIds(prev => 
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  const categories = [
    { id: 'todas', label: 'Todas las Preguntas (10)' },
    { id: 'fundamentos', label: 'Fundamentos y Diagnóstico' },
    { id: 'oferta', label: 'Oferta y Precios' },
    { id: 'operacion', label: 'Operación y Sistemas' },
    { id: 'escala', label: 'Escala e IA' }
  ];

  const filteredQuestions = STRATEGIC_QUESTIONS.filter(q => {
    const matchesCategory = activeCategory === 'todas' || q.category === activeCategory;
    const matchesSearch = 
      q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.howICanHelp.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="preguntas-estrategicas" className="py-24 bg-[#F7F7F7] border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-4xl mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-bold uppercase tracking-widest text-neutral-500 font-mono">
              PREGUNTAS Y RESPUESTAS ESTRATÉGICAS
            </span>
            <span className="w-2 h-2 bg-[#E30613]" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-neutral-900 tracking-tight leading-tight">
            10 preguntas clave para acompañar la evolución de tu negocio de consultoría.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-neutral-600 leading-relaxed">
            Estas son las diez preguntas que responden al camino de un profesional del conocimiento: desde el momento en que reconoce la necesidad de ordenar su negocio hasta que busca mejorar sus sistemas y prepararse para crecer con criterio.
          </p>
        </div>

        {/* Filter Controls & Search */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-10 pb-6 border-b border-neutral-200">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded transition-colors cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-neutral-900 text-white'
                    : 'bg-neutral-100 hover:bg-neutral-200 text-neutral-700'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Buscar tema, oferta, precio, IA..."
              className="w-full pl-9 pr-4 py-2 bg-neutral-50 border border-neutral-300 text-xs text-neutral-900 focus:outline-none focus:border-[#E30613] rounded"
            />
          </div>
        </div>

        {/* Questions Accordion List */}
        <div className="space-y-4">
          {filteredQuestions.map((item) => {
            const isOpen = openQuestionIds.includes(item.id);

            return (
              <div
                key={item.id}
                className="border border-neutral-200 bg-white hover:border-neutral-300 transition-colors"
              >
                {/* Clickable Question Header */}
                <button
                  onClick={() => toggleQuestion(item.id)}
                  className="w-full p-6 sm:p-7 text-left flex items-start justify-between gap-6 cursor-pointer"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-sm font-mono font-black text-[#E30613] mt-0.5 shrink-0">
                      {String(item.id).padStart(2, '0')}
                    </span>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 bg-neutral-100 text-neutral-600 rounded-xs font-mono">
                          {item.categoryLabel}
                        </span>
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-neutral-900 leading-snug">
                        {item.question}
                      </h3>
                      {!isOpen && (
                        <p className="mt-2 text-xs sm:text-sm text-neutral-500 line-clamp-2">
                          {item.excerpt}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="p-1 rounded bg-neutral-100 text-neutral-600 shrink-0 mt-1">
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </div>
                </button>

                {/* Expanded Answer Content */}
                {isOpen && (
                  <div className="px-6 pb-8 pt-2 sm:px-8 border-t border-neutral-100">
                    <div className="pl-0 sm:pl-9 space-y-4 text-sm text-neutral-700 leading-relaxed">
                      {item.fullAnswer.map((para: string, pIdx: number) => (
                        <p key={pIdx} className={para.startsWith('1.') || para.startsWith('•') ? 'font-medium text-neutral-800' : ''}>
                          {para}
                        </p>
                      ))}

                      {/* "¿Cómo puedo ayudarte?" Highlight Block */}
                      <div className="mt-6 p-5 sm:p-6 bg-neutral-50 border-l-4 border-[#E30613] rounded-r">
                        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-neutral-900 mb-2 font-mono">
                          <Sparkles className="w-3.5 h-3.5 text-[#E30613]" />
                          <span>¿CÓMO PUEDO AYUDARTE?</span>
                        </div>
                        <p className="text-xs sm:text-sm text-neutral-800 leading-relaxed font-normal mb-4">
                          {item.howICanHelp}
                        </p>
                        <a
                          href={BRAND_INFO.prediagnosticoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#E30613] hover:text-black transition-colors uppercase tracking-wider"
                        >
                          <span>Diagnosticar mi caso en el prediagnóstico</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
