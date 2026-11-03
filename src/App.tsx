import React, { useState, useEffect } from 'react';
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
import { PilarDetailPage } from './components/PilarDetailPage.tsx';
import { LegalModal } from './components/LegalModal.tsx';
import { CookieConsentBanner } from './components/CookieConsentBanner.tsx';

export default function App() {
  const [activeView, setActiveView] = useState<ActiveView>('main');
  const [selectedPilarId, setSelectedPilarId] = useState<string>('pilar-1');
  const [isLegalModalOpen, setIsLegalModalOpen] = useState(false);
  const [legalDocId, setLegalDocId] = useState<'politica-datos' | 'aviso-privacidad' | 'autorizacion-datos'>('autorizacion-datos');

  useEffect(() => {
    const checkHash = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash === '#autorizacion-datos' || hash === '#autorizacion' || hash === '#tratamiento-datos') {
        setLegalDocId('autorizacion-datos');
        setIsLegalModalOpen(true);
      } else if (hash === '#politica-datos' || hash === '#privacidad' || hash === '#politica-privacidad') {
        setLegalDocId('politica-datos');
        setIsLegalModalOpen(true);
      } else if (hash === '#aviso-privacidad' || hash === '#aviso-legal') {
        setLegalDocId('aviso-privacidad');
        setIsLegalModalOpen(true);
      } else if (hash.startsWith('#pilar-')) {
        const id = hash.replace('#', '');
        if (['pilar-1', 'pilar-2', 'pilar-3', 'pilar-4', 'pilar-5'].includes(id)) {
          setSelectedPilarId(id);
          setActiveView('pilar-detail');
        }
      } else if (hash === '#estrategia-de-negocio') {
        setSelectedPilarId('pilar-1');
        setActiveView('pilar-detail');
      } else if (hash === '#marca-personal') {
        setSelectedPilarId('pilar-2');
        setActiveView('pilar-detail');
      } else if (hash === '#sistema-de-contenidos') {
        setSelectedPilarId('pilar-3');
        setActiveView('pilar-detail');
      } else if (hash === '#dia-de-negocios-digitales') {
        setSelectedPilarId('pilar-4');
        setActiveView('pilar-detail');
      } else if (hash === '#ecosistema-digital') {
        setSelectedPilarId('pilar-5');
        setActiveView('pilar-detail');
      } else if (hash === '#for-ai') {
        setActiveView('for-ai');
      }
    };
    checkHash();
    window.addEventListener('hashchange', checkHash);
    return () => window.removeEventListener('hashchange', checkHash);
  }, []);

  const handleOpenLegal = (docId: 'politica-datos' | 'aviso-privacidad' | 'autorizacion-datos') => {
    setLegalDocId(docId);
    setIsLegalModalOpen(true);
  };

  const scrollToServices = () => {
    setActiveView('main');
    window.history.pushState(null, '', window.location.pathname);
    setTimeout(() => {
      const el = document.getElementById('cuatro-servicios');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  };

  const handleOpenPilar = (pilarId: string) => {
    setSelectedPilarId(pilarId);
    setActiveView('pilar-detail');
    window.history.pushState(null, '', `#${pilarId}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Track Virtual Pageview and Service Selection in GA4
    if (typeof (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag === 'function') {
      (window as unknown as { gtag: (...args: unknown[]) => void }).gtag('event', 'select_item', {
        item_list_name: 'areas_consultoria',
        items: [{ item_id: pilarId, item_name: pilarId }]
      });
      (window as unknown as { gtag: (...args: unknown[]) => void }).gtag('event', 'page_view', {
        page_title: `Patricia Loaiza · ${pilarId}`,
        page_location: `${window.location.origin}/#${pilarId}`
      });
    }
  };

  const handleBackToMain = () => {
    setActiveView('main');
    window.history.pushState(null, '', window.location.pathname);
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Track return to home in GA4
    if (typeof (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag === 'function') {
      (window as unknown as { gtag: (...args: unknown[]) => void }).gtag('event', 'page_view', {
        page_title: 'Patricia Loaiza · Inicio',
        page_location: `${window.location.origin}/`
      });
    }
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
          <ForAIView 
            onBackToHuman={() => setActiveView('main')} 
            onSelectPilar={handleOpenPilar}
          />
        ) : activeView === 'pilar-detail' ? (
          <PilarDetailPage
            pilarId={selectedPilarId}
            onBackToHome={handleBackToMain}
            onSelectPilar={(id) => {
              setSelectedPilarId(id);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        ) : (
          <>
            {/* 2. Hero Section: Promesa + Para Quién + CTA con microcopy de reducción de riesgo + Marco de foto */}
            <Hero onExploreServices={scrollToServices} />

            {/* 3. Problemas que resuelves (Puntos de partida con Resultado Deseado y Puente a Diagnóstico) */}
            <TuExperienciaSection />

            {/* 4. Cómo trabajas en 5 pasos: Entender → Diagnosticar → Priorizar → Orientar/Transformar → Evolucionar */}
            <Process5StepsSection />

            {/* 5. Cuatro Áreas de Consultoría Productizada + Pilar 5 (Enlace directo a páginas de pilar) */}
            <ExpertiseSection onSelectPilar={handleOpenPilar} />

            {/* 6. Catálogo de Entregables Tangibles (Notion Portal + Plataforma IA + resumen con enlace a pilar) */}
            <EntregablesTangiblesSection onSelectPilar={handleOpenPilar} />

            {/* 7. Metodologías Propias y Créditos Explícitos (CREA Y MONETIZA® vs BMS Framework de Vilma Núñez) */}
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
      <Footer 
        setActiveView={setActiveView} 
        onSelectPilar={handleOpenPilar}
        onOpenLegal={handleOpenLegal}
      />

      {/* 13. Legal Modal Overlay */}
      <LegalModal
        isOpen={isLegalModalOpen}
        initialDocId={legalDocId}
        onClose={() => {
          setIsLegalModalOpen(false);
          if (window.location.hash.startsWith('#')) {
            window.history.replaceState(null, '', window.location.pathname + window.location.search);
          }
        }}
      />
      {/* 14. Cookie Consent Notice */}
      <CookieConsentBanner />
    </div>
  );
}

