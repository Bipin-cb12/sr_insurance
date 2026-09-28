import { agentConfig } from '../data/agentConfig';

export interface ChatMessage {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  timestamp: string;
  quickReplies?: string[];
  actionLink?: {
    label: string;
    targetId: string;
  };
}

export const INITIAL_QUICK_REPLIES = [
  'Which insurance is right for me?',
  'I need health insurance',
  'I need life insurance',
  'Explain term insurance',
  'Help with a claim',
  'Check renewal options',
  'Talk to Sruthy',
];

export class ChatbotService {
  /**
   * Processes user messages and returns appropriate contextual guidance.
   * This service is modularized so a backend LLM/AI endpoint can be plugged in
   * seamlessly in the future without changing frontend component code.
   */
  public async getResponse(userInput: string): Promise<{ text: string; quickReplies?: string[]; actionLink?: { label: string; targetId: string } }> {
    const input = userInput.toLowerCase().trim();

    // Simulate realistic AI advisory thinking delay
    await new Promise((resolve) => setTimeout(resolve, 800));

    // 1. WHICH INSURANCE IS RIGHT FOR ME / RECOMMENDATION
    if (input.includes('which insurance') || input.includes('right for me') || input.includes('suggest') || input.includes('recommend')) {
      return {
        text: `To recommend the optimal plan, we assess three key pillars:\n\n1. **Pure Protection (Term Life)**: Crucial if you have financial dependents or loans.\n2. **Health Safeguard (Family Floater)**: Shields your savings against private hospital bills.\n3. **Milestones / Wealth**: Child education or guaranteed retirement pensions.\n\nYou can use our interactive **Find Your Plan** questionnaire right here to get a customized recommendation!`,
        quickReplies: ['Take Assessment', 'Talk to Sruthy', 'Calculate Premium'],
        actionLink: { label: 'Open Find Your Plan Tool', targetId: '#find-your-plan' },
      };
    }

    // 2. HEALTH INSURANCE
    if (input.includes('health') || input.includes('hospital') || input.includes('medical') || input.includes('mediclaim')) {
      return {
        text: `Health insurance protects your household against spiraling medical costs. When advising clients, Sruthy prioritizes three essential features:\n\n• **Zero Room Rent Capping** (avoids proportionate deduction penalties)\n• **Unlimited Restoration** (restores cover if exhausted)\n• **Super Top-up Strategy** (e.g. ₹10L base + ₹90L top-up for ₹1 Crore total cover at very low cost).\n\nWould you like to explore health solutions or discuss your family's needs?`,
        quickReplies: ['Calculate Health Premium', 'Explore Health Solutions', 'Book Consultation'],
        actionLink: { label: 'View Health Insurance Details', targetId: '#solutions' },
      };
    }

    // 3. TERM INSURANCE
    if (input.includes('term') || input.includes('pure risk') || input.includes('pure life')) {
      return {
        text: `Term insurance is the purest and most affordable form of life insurance. For example, a healthy 30-year-old non-smoker can secure ₹1 Crore of pure life cover for as little as ~₹800 to ₹1,200 per month (demo estimate).\n\n**Key Rule**: Your sum assured should ideally be 10–15x your annual earnings plus any active mortgage.`,
        quickReplies: ['Calculate Term Premium', 'Compare Term Plans', 'Discuss With Sruthy'],
        actionLink: { label: 'Open Premium Calculator', targetId: '#calculator' },
      };
    }

    // 4. LIFE INSURANCE / ENDOWMENT / WEALTH
    if (input.includes('life insurance') || input.includes('endowment') || input.includes('investment') || input.includes('wealth')) {
      return {
        text: `Life insurance provides financial heritage and guaranteed continuity. Depending on your horizon, you can choose pure term risk cover, whole-life legacy plans, or tax-advantaged wealth creation.\n\nSruthy helps compare options with zero bias so you get maximum capital safety and guaranteed returns.`,
        quickReplies: ['Compare Plans', 'Book a Free Consultation', 'Talk to Sruthy'],
        actionLink: { label: 'Compare Plan Structures', targetId: '#comparison' },
      };
    }

    // 5. CLAIM ASSISTANCE
    if (input.includes('claim') || input.includes('hospitalized') || input.includes('settlement') || input.includes('reimbursement')) {
      return {
        text: `Emergency Claim Guidance:\n\n1. **Emergency Contact**: Call Sruthy directly at ${agentConfig.phones.displayPrimary} or send a WhatsApp message immediately.\n2. **Cashless Admission**: Submit your Health TPA card and Govt ID at the hospital's insurance desk.\n3. **Reimbursement**: Retain all original discharge summaries, itemized bills, pharmacy receipts, and diagnostic reports.\n\nWe provide dedicated hands-on claim assistance to ensure zero deduction disputes.`,
        quickReplies: ['View Claim Document Checklist', 'Call Sruthy Now', 'Request Claim Assistance'],
        actionLink: { label: 'Go to Claim Assistance Section', targetId: '#claim-assistance' },
      };
    }

    // 6. RENEWALS
    if (input.includes('renewal') || input.includes('expire') || input.includes('grace period') || input.includes('lapse')) {
      return {
        text: `Never let a policy lapse! Most health and life policies provide a 30-day grace period, but losing continuity means losing your accrued No-Claim Bonus (NCB) and resetting pre-existing waiting periods.\n\nSruthy provides automated renewal tracking and policy check-ups.`,
        quickReplies: ['Set Renewal Alert', 'Review My Current Policy', 'Book a Consultation'],
        actionLink: { label: 'Open Renewal Support', targetId: '#renewal-support' },
      };
    }

    // 7. TALK TO SRUTHY / BOOK APPOINTMENT / CONTACT
    if (input.includes('talk') || input.includes('sruthy') || input.includes('call') || input.includes('phone') || input.includes('contact') || input.includes('appointment') || input.includes('book')) {
      return {
        text: `Sruthy is available for one-on-one virtual or in-person advisory sessions.\n\n• **Direct Phone**: ${agentConfig.phones.displayPrimary}\n• **Alternate**: ${agentConfig.phones.displaySecondary}\n• **Email**: ${agentConfig.email}\n• **Office**: ${agentConfig.location.address}, ${agentConfig.location.city}\n\nYou can also book a free 30-minute consultation directly through our calendar scheduler below!`,
        quickReplies: ['Book Free Consultation', 'WhatsApp Sruthy', 'Save Digital Contact'],
        actionLink: { label: 'Book Your Consultation Now', targetId: '#consultation' },
      };
    }

    // 8. PRICING / COST / QUOTE
    if (input.includes('cost') || input.includes('price') || input.includes('rate') || input.includes('premium')) {
      return {
        text: `Insurance premiums depend strictly on your age, tobacco usage, medical history, policy duration, and sum assured. To get an indicative ballpark estimate instantly, test our interactive Premium Calculator.`,
        quickReplies: ['Open Premium Calculator', 'Talk to Sruthy', 'Compare Plans'],
        actionLink: { label: 'Test Premium Calculator', targetId: '#calculator' },
      };
    }

    // DEFAULT FALLBACK
    return {
      text: `Thank you for reaching out! As your dedicated insurance advisor, Sruthy can guide you on Term Life, Health Protection, Child Plans, Retirement, Renewals, and Claim filing.\n\nWould you like to explore our solutions, test the premium calculator, or schedule a personalized conversation?`,
      quickReplies: ['Which insurance is right for me?', 'I need health insurance', 'Help with a claim', 'Book a Consultation'],
      actionLink: { label: 'Book a Private Consultation', targetId: '#consultation' },
    };
  }
}

export const chatbotService = new ChatbotService();
