import React, { useState } from 'react';
import { ActiveView } from './types/index.ts';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { TuExperienciaSection } from './components/TuExperienciaSection.tsx';
import { Process5StepsSection } from './components/Process5StepsSection.tsx';
import { ExpertiseSection } from './components/ExpertiseSection.tsx';
import { EntregablesTangiblesSection } from './components/EntregablesTangiblesSection.tsx';
import { MetodologiaFrameworksSection } from './components/MetodologiaFrameworksSection.tsx';
import { IncludedNotIncludedSection } from './components/IncludedNotIncludedSection.tsx';
import { SobrePatriciaSection } from './components/SobrePatriciaSection.tsx';
import { StrategicFAQ } from './components/StrategicFAQ.tsx';
import { ContinuarExplorandoSection } from './components/ContinuarExplorandoSection.tsx';
import { Footer } from './components/Footer.tsx';
import { ForAIView } from './components/ForAIView.tsx';

export default function App() {
  const [activeView, setActiveView] = useState<ActiveView>('main');

  const scrollToServices = () => {
    setActiveView('main');
    setTimeout(() => {
      const el = document.getElementById('cuatro-servicios');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  };

  return (
    <div className="min-h-screen bg-[#F7F7F7] text-neutral-900 font-sans antialiased selection:bg-[#E30613] selection:text-white">
      {/* 1. Header with AI Bar on top */}
      <Navbar
        activeView={activeView}
        setActiveView={setActiveView}
      />

      {/* Main View Router */}
      <main>
        {activeView === 'for-ai' ? (
          <ForAIView onBackToHuman={() => setActiveView('main')} />
        ) : (
          <>
            {/* 2. Hero Section: Promesa + Para Quién + CTA con microcopy de reducción de riesgo + Marco de foto */}
            <Hero onExploreServices={scrollToServices} />

            {/* 3. Problemas que resuelves (Puntos de partida con Resultado Deseado y Puente a Diagnóstico) */}
            <TuExperienciaSection />

            {/* 4. Cómo trabajas en 5 pasos: Entender → Diagnosticar → Priorizar → Orientar/Transformar → Evolucionar */}
            <Process5StepsSection />

            {/* 5. Cuatro Áreas de Consultoría Productizada (Estructura consistente: Para quién, Qué trabajamos, Qué te llevas) */}
            <ExpertiseSection />

            {/* 6. Catálogo de Entregables Tangibles (One Page Strategy, Plan 100 Días, Portafolio Hexagonal, PERE, IA, Dossier) */}
            <EntregablesTangiblesSection />

            {/* 7. Metodologías Propias y Créditos Explícitos (CREA Y MONETIZA® vs BMS Framework de Vilma Núñez + 6 Frameworks) */}
            <MetodologiaFrameworksSection />

            {/* 8. Claridad de Encaje: ¿Es para ti? Qué incluye / Qué NO incluye */}
            <IncludedNotIncludedSection />

            {/* 9. Sobre Patricia: Autoridad, Postura, 4 Principios de Consultoría y Trayectoria Institucional unificada */}
            <SobrePatriciaSection />

            {/* 10. Consultorio Estratégico (10 Preguntas y Respuestas) + FAQs de Contratación (People Also Ask) */}
            <StrategicFAQ />

            {/* 11. Recursos y Continuar Explorando */}
            <ContinuarExplorandoSection setActiveView={setActiveView} />
          </>
        )}
      </main>

      {/* 12. Deep Black Footer */}
      <Footer setActiveView={setActiveView} />
    </div>
  );
}
