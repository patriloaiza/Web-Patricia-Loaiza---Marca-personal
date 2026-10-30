import React, { useState } from 'react';
import { ActiveView } from './types/index.ts';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { TuExperienciaSection } from './components/TuExperienciaSection.tsx';
import { BioCortaSection } from './components/BioCortaSection.tsx';
import { PosturaIdentidadSection } from './components/PosturaIdentidadSection.tsx';
import { BioCompletaSection } from './components/BioCompletaSection.tsx';
import { MetodologiaFrameworksSection } from './components/MetodologiaFrameworksSection.tsx';
import { ExpertiseSection } from './components/ExpertiseSection.tsx';
import { ExperienciaAplicadaBanner } from './components/ExperienciaAplicadaBanner.tsx';
import { SintesisEvolucionSection } from './components/SintesisEvolucionSection.tsx';
import { FormacionAcademicaSection } from './components/FormacionAcademicaSection.tsx';
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
      {/* 1. Header with AI Bar on top (Screenshot image_f3d0e9d7.png) */}
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
            {/* 2. Hero Section with Framed Photo Slot & Credentials Strip below */}
            <Hero onExploreServices={scrollToServices} />

            {/* 3. Tu Experiencia Tiene Valor: 6 Puntos de Empatía (PDF Página 2) */}
            <TuExperienciaSection />

            {/* 4. Biografía Corta Box (Screenshot image_c139d158.png & PDF Página 3) */}
            <BioCortaSection />

            {/* 5. Postura Quote + Hitos Alcanzados (2x4 Grid sin fechas) + Identidad + 4 Principios de Consultoría */}
            <PosturaIdentidadSection />

            {/* 6. Biografía Completa / Recorrido Profesional */}
            <BioCompletaSection />

            {/* 7. Metodologías Propias y Frameworks: Crea y Monetiza® 5 Fases + 6 Frameworks + 3 Modalidades (PDF Páginas 5-7) */}
            <MetodologiaFrameworksSection />

            {/* 8. Expertise: Cuatro Áreas de Consultoría en Fondo Negro (PDF Páginas 4-5) */}
            <ExpertiseSection />

            {/* 9. Experiencia Aplicada Banner: De la teoría a la implementación */}
            <ExperienciaAplicadaBanner />

            {/* 10. Síntesis de Evolución: Cargos de Liderazgo y Relevancia sin Fechas */}
            <SintesisEvolucionSection />

            {/* 11. Formación Académica: Aprender también forma parte del trabajo */}
            <FormacionAcademicaSection />

            {/* 12. Las 10 Preguntas y Respuestas Estratégicas para la Web de Patricia Loaiza */}
            <StrategicFAQ />

            {/* 13. Archivo Relacionado: Continuar Explorando */}
            <ContinuarExplorandoSection setActiveView={setActiveView} />
          </>
        )}
      </main>

      {/* 14. Deep Black Footer */}
      <Footer setActiveView={setActiveView} />
    </div>
  );
}
