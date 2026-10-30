export type ActiveView = 'main' | 'for-ai';

export interface ServiceItem {
  id: string;
  number: string;
  name: string;
  subname: string;
  focus: string;
  idealFor: string[];
  modalities: string[];
  targetProfile: string;
  transformation: {
    before: string;
    after: string;
  };
  benefits: string[];
  strategicImpact: string;
}

export interface FrameworkItem {
  id: string;
  number: string;
  name: string;
  tagline: string;
  description: string;
  application: string;
  benefits: string[];
}

export interface MethodologyStage {
  phase: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
}

export interface ConsultingModality {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  idealFor: string;
  commitment: string;
}

export interface PainPoint {
  id: string;
  number: string;
  title: string;
  challenge: string;
  solutionRef: string;
}

export interface ConsultingPrinciple {
  number: string;
  title: string;
  tagline: string;
  description: string;
  quote?: string;
}

export interface CanonicalField {
  campo: string;
  valor: string;
}

export interface StrategicQuestion {
  id: number;
  question: string;
  category: 'fundamentos' | 'oferta' | 'operacion' | 'escala';
  categoryLabel: string;
  excerpt: string;
  fullAnswer: string[];
  howICanHelp: string;
}

export interface MilestoneItem {
  id: string;
  num: string;
  title: string;
  subtitle: string;
  tag?: string;
  institution?: string;
}

export interface EvolutionItem {
  id?: string;
  role: string;
  organization: string;
  scope: string;
  tag: string;
  highlight?: string;
  period?: string;
}

export interface AcademicItem {
  title: string;
  institution: string;
  year?: string;
}
