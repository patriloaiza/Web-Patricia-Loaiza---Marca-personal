export type ActiveView = 'main' | 'for-ai' | 'pilar-detail';

export interface PilarPhaseDetail {
  number: string;
  name: string;
  subtitle: string;
  exercisesCount: string;
  isInternalTool?: boolean;
  internalToolNote?: string;
  realDeliverable: string;
  summary: string;
  bullets?: string[];
}

export interface PilarFullDetail {
  id: string;
  number: string;
  commercialName: string;
  subname: string;
  referenceService: string;
  shortNavName?: string;
  tagline: string;
  targetProfile: string;
  priceTestimonials: string;
  priceRange?: string;
  duration: string;
  modality: string;
  modalityBadge: 'LO HACEMOS JUNTOS' | 'LO HAGO POR TI';
  modalityNote: string;
  techStack?: string;
  methodologyNote?: string;
  objective: string;
  needSolved: string;
  transformation: {
    before: string;
    after: string;
  };
  keyComponents?: string[];
  phases: PilarPhaseDetail[];
  deliverablesTangibles: string[];
  notionWorkspace: string[];
  aiPlatform: string[];
  scopeLimits: {
    included: string[];
    notIncluded: string[];
  };
  faqs: {
    question: string;
    answer: string;
  }[];
}

export interface ServiceItem {
  id: string;
  number: string;
  name: string;
  subname: string;
  focus: string;
  idealFor: string[];
  whatWeWork: string[];
  deliverablesTangibles: string[];
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
  desiredResult?: string;
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
  credentialUrl?: string;
  status?: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  subtitle: string;
  action: string;
  output: string;
}

export interface TangibleDeliverable {
  id: string;
  number: string;
  title: string;
  format: string;
  purpose: string;
  benefit: string;
}

export interface PilarDeliverableItem {
  id: string;
  pilarNumber: string;
  pilarName: string;
  subname: string;
  modality: string;
  modalityNote: string;
  transformation: {
    before: string;
    after: string;
  };
  deliverables: string[];
  notionWorkspace: string[];
  aiPlatform: string[];
}
