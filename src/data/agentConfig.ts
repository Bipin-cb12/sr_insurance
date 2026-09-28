import { AgentConfig } from '../types';

/**
 * CENTRAL AGENT CONFIGURATION
 * Edit this file to update Sruthy's contact details, images, office locations, and demo metrics.
 */
export const agentConfig: AgentConfig = {
  name: 'Sruthy',
  designation: 'Insurance Advisor & Financial Protection Consultant',
  agencyTitle: 'Sruthy Private Insurance Advisory',
  email: 'sruthy@gmail.com',
  phones: {
    primary: '9999999999',
    displayPrimary: '+91 99999 99999',
    secondary: '8888888888',
    displaySecondary: '+91 88888 88888',
  },
  whatsapp: {
    number: '919999999999',
    displayNumber: '+91 99999 99999',
    prefilledMessage: 'Hello Sruthy, I would like to schedule a private insurance consultation regarding my protection requirements.',
  },
  location: {
    address: 'Suite 408, Prestige Executive Towers, M.G. Road',
    city: 'Kochi',
    state: 'Kerala, India',
    officeHours: 'Monday – Saturday: 9:00 AM – 7:30 PM (IST)',
    mapPlaceholderUrl: 'https://maps.google.com/?q=MG+Road+Kochi',
  },
  profileImage: {
    // High-resolution professional dummy portrait of an executive female financial/insurance advisor.
    // Replace this URL or path with Sruthy's actual photograph when ready.
    url: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=900&q=80',
    alt: 'Sruthy - Insurance Advisor & Financial Protection Consultant',
    caption: 'Sruthy | Certified Insurance Advisor',
  },
  metrics: {
    experienceYears: '10+',
    experienceLabel: 'Years of Advisory Experience',
    familiesGuided: '500+',
    familiesLabel: 'Families Protected',
    policiesAssisted: '1,000+',
    policiesLabel: 'Policies Facilitated',
    claimAssistanceRate: '99.4%',
    claimAssistanceLabel: 'Claims Guidance Ratio',
    isDemo: true, // Clearly marks these as editable demo values as required
  },
  socials: {
    linkedin: 'https://linkedin.com/in/sruthy-advisor-demo',
    instagram: 'https://instagram.com/sruthy_insurance_demo',
    facebook: 'https://facebook.com/sruthy.insurance.demo',
    whatsapp: 'https://wa.me/919999999999',
  },
  disclaimer:
    'Disclaimer: This website is an independent informational and advisory portal maintained by Sruthy, Insurance Advisor & Financial Protection Consultant. Information provided herein is for educational and guidance purposes only and does not constitute an official underwriting decision or contractual offer. Actual premium rates, eligibility, and terms are strictly determined by respective insurance companies subject to policy terms and medical underwriting. Statistics and client reviews shown are for demonstration purposes.',
};
