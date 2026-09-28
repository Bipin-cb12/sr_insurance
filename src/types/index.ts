export interface AgentConfig {
  name: string;
  designation: string;
  agencyTitle: string;
  email: string;
  phones: {
    primary: string;
    displayPrimary: string;
    secondary: string;
    displaySecondary: string;
  };
  whatsapp: {
    number: string;
    displayNumber: string;
    prefilledMessage: string;
  };
  location: {
    address: string;
    city: string;
    state: string;
    officeHours: string;
    mapPlaceholderUrl: string;
  };
  profileImage: {
    url: string;
    alt: string;
    caption: string;
  };
  metrics: {
    experienceYears: string;
    experienceLabel: string;
    familiesGuided: string;
    familiesLabel: string;
    policiesAssisted: string;
    policiesLabel: string;
    claimAssistanceRate: string;
    claimAssistanceLabel: string;
    isDemo: boolean;
  };
  socials: {
    linkedin?: string;
    instagram?: string;
    facebook?: string;
    whatsapp?: string;
  };
  disclaimer: string;
}

export interface InsuranceSolution {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  iconName: string;
  description: string;
  highlights: string[];
  bestFor: string;
  coverageScope: string;
  sampleStartingCoverage: string;
}

export interface ComparisonPlan {
  id: string;
  name: string;
  category: string;
  coverage: string;
  demoPremium: string;
  duration: string;
  keyBenefits: string[];
  suitableFor: string;
  popular?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  planType: string;
  quote: string;
  rating: number;
  isDemo: boolean;
  date: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface Article {
  id: string;
  title: string;
  slug: string;
  category: string;
  readTime: string;
  summary: string;
  content: string;
  imageUrl: string;
  date: string;
}

export interface ConsultationBooking {
  id?: string;
  name: string;
  phone: string;
  email: string;
  requirement: string;
  preferredDate: string;
  preferredTime: string;
  message?: string;
  createdAt?: string;
  status?: 'pending' | 'confirmed' | 'completed';
}

export interface ClaimRequest {
  id?: string;
  name: string;
  phone: string;
  policyNumber: string;
  insurerName: string;
  claimType: 'Hospitalization / Health' | 'Life / Critical Illness' | 'Motor / Accident' | 'Other';
  description: string;
  documentsReady: string[];
  createdAt?: string;
  status?: 'received' | 'reviewing' | 'assisted';
}

export interface RenewalRequest {
  id?: string;
  name: string;
  phone: string;
  policyType: string;
  expiryMonth: string;
  insurerName: string;
  notes?: string;
  createdAt?: string;
}

export interface QuestionnaireAnswer {
  age?: string;
  occupation?: string;
  isMarried?: string;
  hasDependents?: string;
  protectionType?: string;
  hasExistingInsurance?: string;
  annualIncome?: string;
  primaryGoal?: string;
}
