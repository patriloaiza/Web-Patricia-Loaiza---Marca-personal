import React, { useState } from 'react';
import { STRATEGIC_QUESTIONS, PEOPLE_ALSO_ASK_FAQS, BRAND_INFO } from '../data/content.ts';
import { StrategicQuestion } from '../types/index.ts';
import { ChevronDown, ChevronUp, ExternalLink, HelpCircle, Search, Sparkles, ShieldQuestion } from 'lucide-react';

export const StrategicFAQ: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'consultorio' | 'preguntas-servicio'>('preguntas-servicio');
  const [activeCategory, setActiveCategory] = useState<string>('todas');
  const [openQuestionIds, setOpenQuestionIds] = useState<number[]>([1, 2]);
  const [openServiceFaqIdx, setOpenServiceFaqIdx] = useState<number[]>([0, 1]);
  const [searchTerm, setSearchTerm] = useState<string>('');

  const toggleQuestion = (id: number) => {
    setOpenQuestionIds(prev => 
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  const toggleServiceFaq = (idx: number) => {
    setOpenServiceFaqIdx(prev => 
      prev.includes(idx) ? prev.filter(x => x !== idx) : [...prev, idx]
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
    <section id="consultorio-faqs" className="py-24 bg-[#F7F7F7] border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 bg-[#E30613]" />
              <span className="text-xs font-bold uppercase tracking-widest text-neutral-500 font-mono">
                CONSULTORIO DE NEGOCIO Y FAQS
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-neutral-900 tracking-tight leading-tight">
              Criterio, respuestas estratégicas y resolución de dudas.
            </h2>

            <p className="mt-4 text-base sm:text-lg text-neutral-600 leading-relaxed">
              Respuestas directas a las preguntas que determinan el orden, la oferta y los sistemas comerciales de los profesionales del conocimiento.
            </p>
          </div>

          {/* Subview switcher */}
          <div className="flex items-center gap-1.5 bg-neutral-200/80 p-1.5 border border-neutral-300 shrink-0">
            <button
              onClick={() => setActiveTab('preguntas-servicio')}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === 'preguntas-servicio'
                  ? 'bg-black text-white shadow-xs'
                  : 'text-neutral-700 hover:text-black'
              }`}
            >
              Preguntas de Contratación (5)
            </button>
            <button
              onClick={() => setActiveTab('consultorio')}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === 'consultorio'
                  ? 'bg-black text-white shadow-xs'
                  : 'text-neutral-700 hover:text-black'
              }`}
            >
              Consultorio Estratégico (10)
            </button>
          </div>
        </div>

        {/* TAB 1: PREGUNTAS FRECUENTES DE CONTRATACIÓN Y SERVICIO (PEOPLE ALSO ASK - AUDITORÍA 5.3) */}
        {activeTab === 'preguntas-servicio' && (
          <div className="space-y-4 max-w-4xl animate-fade-in">
            <div className="p-4 bg-white border border-neutral-300 mb-6 text-xs text-neutral-600">
              <strong className="text-neutral-900 block font-mono uppercase text-[11px] mb-1">
                Dudas frecuentes sobre alcance, tiempos y metodología:
              </strong>
              Resuelve tus dudas sobre cómo funciona la consultoría antes de realizar tu prediagnóstico.
            </div>

            {PEOPLE_ALSO_ASK_FAQS.map((faq, idx) => {
              const isOpen = openServiceFaqIdx.includes(idx);
              return (
                <div
                  key={idx}
                  className="bg-white border-2 border-neutral-200 hover:border-black transition-all shadow-xs"
                >
                  <button
                    onClick={() => toggleServiceFaq(idx)}
                    className="w-full text-left p-6 sm:p-7 flex items-start justify-between gap-4 cursor-pointer"
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-xs font-mono font-black text-[#E30613] mt-0.5">
                        0{idx + 1}
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-neutral-900 leading-snug">
                        {faq.question}
                      </h3>
                    </div>
                    <div className="p-1 rounded bg-neutral-100 text-neutral-600 shrink-0 mt-0.5">
                      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-2 sm:px-7 border-t border-neutral-100 text-xs sm:text-sm text-neutral-700 leading-relaxed">
                      <p className="pl-6">{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}

            <div className="pt-6">
              <a
                href={BRAND_INFO.prediagnosticoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#E30613] hover:bg-[#c90510] text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
              >
                <span>HACER PREDIAGNÓSTICO OFICIAL</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        )}

        {/* TAB 2: CONSULTORIO ESTRATÉGICO (10 PREGUNTAS Y RESPUESTAS DEL DOCUMENTO) */}
        {activeTab === 'consultorio' && (
          <div className="animate-fade-in">
            {/* Filter Controls & Search */}
            <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-10 pb-6 border-b border-neutral-200">
              {/* Category Tabs */}
              <div className="flex flex-wrap items-center gap-2">
                {categories.map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`px-3.5 py-1.5 text-xs font-bold tracking-wider uppercase transition-colors cursor-pointer border ${
                      activeCategory === cat.id
                        ? 'bg-black text-white border-black'
                        : 'bg-white text-neutral-700 border-neutral-300 hover:border-black'
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
                  placeholder="Buscar en respuestas..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 text-xs bg-white border border-neutral-300 focus:border-black focus:outline-hidden"
                />
              </div>
            </div>

            {/* Questions List */}
            <div className="space-y-4">
              {filteredQuestions.map((item: StrategicQuestion) => {
                const isOpen = openQuestionIds.includes(item.id);
                return (
                  <div
                    key={item.id}
                    className={`border transition-all bg-white shadow-xs ${
                      isOpen ? 'border-neutral-900 ring-1 ring-neutral-900/10' : 'border-neutral-200 hover:border-neutral-400'
                    }`}
                  >
                    {/* Question Header Button */}
                    <button
                      onClick={() => toggleQuestion(item.id)}
                      className="w-full text-left p-6 sm:p-8 flex items-start justify-between gap-4 cursor-pointer"
                    >
                      <div className="flex items-start gap-4">
                        <span className="text-base sm:text-lg font-mono font-black text-[#E30613] shrink-0 pt-0.5">
                          {item.id < 10 ? `0${item.id}` : item.id}
                        </span>
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-500 font-mono bg-neutral-100 px-2 py-0.5">
                              {item.categoryLabel}
                            </span>
                          </div>
                          <h3 className="text-lg sm:text-xl font-bold text-neutral-900 leading-snug">
                            {item.question}
                          </h3>
                          {!isOpen && (
                            <p className="mt-2 text-xs sm:text-sm text-neutral-600 line-clamp-2">
                              {item.excerpt}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="p-1 rounded bg-neutral-100 text-neutral-600 shrink-0 mt-1">
                        {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
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
        )}
      </div>
    </section>
  );
};
