import { InsuranceSolution, ComparisonPlan } from '../types';

export const trustStripPoints = [
  {
    title: 'Personalized Advice',
    description: 'Bespoke coverage structures tailored to your family milestones and cashflow.',
    icon: 'UserCheck',
  },
  {
    title: 'Transparent Guidance',
    description: 'Zero hidden exclusions; crystal-clear clarity on policy clauses and limitations.',
    icon: 'ShieldCheck',
  },
  {
    title: 'Long-Term Support',
    description: 'Dedicated annual portfolio reviews as your career and life stage evolve.',
    icon: 'Award',
  },
  {
    title: 'Claim Assistance',
    description: 'Hands-on advocacy during emergency hospitalizations and claim paperwork.',
    icon: 'FileHeart',
  },
  {
    title: 'Renewal Support',
    description: 'Proactive grace period reminders ensuring uncompromised continuous coverage.',
    icon: 'Clock',
  },
];

export const insuranceSolutions: InsuranceSolution[] = [
  {
    id: 'term-insurance',
    title: 'Term Insurance',
    subtitle: 'Affordable high-value life protection',
    category: 'Pure Risk Cover',
    iconName: 'Shield',
    description:
      'Provides high financial security for your dependents at nominal premiums. Ensures complete peace of mind that your family maintains their standard of living and clears all liabilities even in your absence.',
    highlights: [
      'Coverage up to ₹5 Crore+ at affordable premiums',
      'Optional Critical Illness & Accidental Disability riders',
      'Special discounted rates for non-smokers & healthy lifestyles',
      'Tax efficiency under applicable statutory provisions',
    ],
    bestFor: 'Breadwinners, young parents, and individuals with home loans or liabilities.',
    coverageScope: '10 to 40 Years / Till age 85',
    sampleStartingCoverage: '₹1 Cr - ₹5 Cr+',
  },
  {
    id: 'life-insurance',
    title: 'Life Insurance',
    subtitle: 'Protect your family\'s financial future',
    category: 'Family Heritage',
    iconName: 'HeartHandshake',
    description:
      'Comprehensive endowment and whole-life protection structures that combine lifelong peace of mind with disciplined long-term capital preservation for generations to come.',
    highlights: [
      'Guaranteed financial payout or legacy benefit',
      'Flexible premium payment terms (5, 7, 10, or regular pay)',
      'Loan facility against policy value during emergencies',
      'Safeguards long-term wealth transfer to children',
    ],
    bestFor: 'Those looking for guaranteed financial legacy alongside family protection.',
    coverageScope: 'Whole Life / Milestone based',
    sampleStartingCoverage: '₹25 Lakh - ₹2 Cr+',
  },
  {
    id: 'health-insurance',
    title: 'Health Insurance',
    subtitle: 'Protection against unexpected medical expenses',
    category: 'Medical Safeguard',
    iconName: 'Activity',
    description:
      'Fortify your wealth against spiraling healthcare inflation. Comprehensive inpatient, ICU, daycare, and modern treatment coverage with cashless hospital networks nationwide.',
    highlights: [
      'Zero room-rent capping options with unlimited restoration',
      'Pre & post hospitalization expenses covered up to 180 days',
      'Annual preventative health checkups included',
      'Cashless settlement in over 10,000+ accredited hospitals',
    ],
    bestFor: 'Individuals and families seeking shielding against escalating medical bills.',
    coverageScope: 'Individual & Family Floater',
    sampleStartingCoverage: '₹10 Lakh - ₹1 Crore Super Top-up',
  },
  {
    id: 'family-protection',
    title: 'Family Protection',
    subtitle: 'Coverage designed around your family\'s needs',
    category: 'Holistic Shield',
    iconName: 'Users',
    description:
      'An integrated 360-degree umbrella combining parents’ critical medical cover, child contingencies, and spouse financial continuity under one unified review.',
    highlights: [
      'Single policy managing both spouse and dependent children',
      'Maternity and newborn child booster riders available',
      'Global emergency medical assistance coverage options',
      'Organized in one consolidated portfolio reviewed annually',
    ],
    bestFor: 'Growing nuclear and joint families needing complete consolidated coverage.',
    coverageScope: 'Custom Family Package',
    sampleStartingCoverage: 'Customized umbrella',
  },
  {
    id: 'child-plans',
    title: 'Child Plans',
    subtitle: 'Plan for education and future milestones',
    category: 'Future Security',
    iconName: 'GraduationCap',
    description:
      'Ensure your child\'s higher education, Ivy League ambitions, or marriage aspirations remain fully funded without disruption, even if unexpected life events occur.',
    highlights: [
      'Waiver of Premium benefit ensuring policy continues on parent\'s demise',
      'Staggered milestone payouts matching university fee schedules',
      'Disciplined compound growth beating education inflation',
      'Flexible tenure aligned with your child’s graduation age',
    ],
    bestFor: 'Parents planning securely for higher education milestones (ages 18-24).',
    coverageScope: '10 to 20 Year horizon',
    sampleStartingCoverage: '₹15 Lakh - ₹1 Cr Target Fund',
  },
  {
    id: 'retirement-planning',
    title: 'Retirement Planning',
    subtitle: 'Build financial security for your later years',
    category: 'Golden Years',
    iconName: 'Sunset',
    description:
      'Design guaranteed lifelong post-retirement annuities and pension inflows so you never have to depend on anyone, enjoying travel, leisure, and dignified independence.',
    highlights: [
      'Guaranteed lifelong regular pension income options',
      'Return of purchase price to nominees after lifetime',
      'Joint-life annuity option for spouse pension continuity',
      'Hedges against longevity risk and inflation erosion',
    ],
    bestFor: 'Professionals aged 30-55 planning a self-reliant post-career lifestyle.',
    coverageScope: 'Immediate Annuity / Deferred Pension',
    sampleStartingCoverage: 'Tailored monthly pension',
  },
  {
    id: 'motor-insurance',
    title: 'Motor Insurance',
    subtitle: 'Protection for your vehicle and journeys',
    category: 'Asset Safeguard',
    iconName: 'Car',
    description:
      'Premium bumper-to-bumper zero-depreciation coverage for luxury sedans, SUVs, and personal vehicles, backed by prompt cashless roadside breakdown assistance.',
    highlights: [
      'Zero depreciation cover with engine protector rider',
      '24x7 pan-India towing & roadside breakdown concierge',
      'Personal accident cover of ₹15 Lakh for owner-driver',
      'Fast-track paperless cashless garage settlement',
    ],
    bestFor: 'Private vehicle owners seeking seamless roadside & accidental peace of mind.',
    coverageScope: 'Annual / Multi-year Own Damage + 3rd Party',
    sampleStartingCoverage: 'Comprehensive IDV valuation',
  },
  {
    id: 'wealth-investment',
    title: 'Wealth & Investment Plans',
    subtitle: 'Long-term financial planning options',
    category: 'Wealth Growth',
    iconName: 'TrendingUp',
    description:
      'Tax-optimized unit-linked and capital-guaranteed instruments combining market-linked equity wealth generation with institutional safety and life cover.',
    highlights: [
      'Zero policy allocation and administrative charge options',
      'Unlimited free switches between equity, debt, and balanced funds',
      'Systematic partial withdrawals for major life milestones',
      'Triple tax advantages under prevailing financial regulations',
    ],
    bestFor: 'Individuals aiming for disciplined long-term capital compounding.',
    coverageScope: '5 to 25 Years',
    sampleStartingCoverage: 'Flexible systematic contributions',
  },
];

export const whyChoosePoints = [
  {
    title: 'Personalized Guidance',
    tagline: 'Built around your life, not sales targets',
    description:
      'Every individual\'s liabilities, medical history, and dependents are unique. Sruthy conducts deep risk profiling before suggesting any policy structure.',
    icon: 'UserCheck',
  },
  {
    title: 'Simple Explanations',
    tagline: 'Zero convoluted fine-print jargon',
    description:
      'Insurance wording can be intentionally opaque. Sruthy breaks down co-pays, deductibles, waiting periods, and exclusions into plain, empowering English.',
    icon: 'BookOpen',
  },
  {
    title: 'Transparent Approach',
    tagline: 'Objective comparison with zero bias',
    description:
      'Honest guidance on policy limitations and what is NOT covered. We prioritize claim-settlement transparency over superficial brochures.',
    icon: 'ShieldCheck',
  },
  {
    title: 'Long-Term Support',
    tagline: 'A lifelong relationship, not a transaction',
    description:
      'Support does not conclude once the policy is issued. As your income grows, your family expands, or tax laws shift, Sruthy optimizes your coverage.',
    icon: 'Compass',
  },
  {
    title: 'Renewal Assistance',
    tagline: 'Never experience coverage lapses',
    description:
      'Timely reminder tracking, grace period alerts, and guidance on policy upgrades or no-claim bonus preservation during renewals.',
    icon: 'BellRing',
  },
  {
    title: 'Claim Assistance',
    tagline: 'Direct, hands-on advocacy when it matters most',
    description:
      'During health crises or bereavement, you need human compassion and documentation expertise. Sruthy guides hospital coordination and paperwork end-to-end.',
    icon: 'PhoneCall',
  },
];

export const insuranceJourneySteps = [
  {
    step: '01',
    title: 'Understand',
    subtitle: 'In-Depth Discovery',
    description: 'We listen to your life stage, financial dependents, liabilities, lifestyle habits, and existing safety cushions.',
    icon: 'Ear',
  },
  {
    step: '02',
    title: 'Assess',
    subtitle: 'Protection Gap Analysis',
    description: 'We calculate your Human Life Value (HLV) and medical inflation exposure to identify underinsurance vulnerabilities.',
    icon: 'Search',
  },
  {
    step: '03',
    title: 'Compare',
    subtitle: 'Objective Evaluation',
    description: 'We review suitable plan structures side-by-side, analyzing settlement ratios, claim history, and rider benefits.',
    icon: 'GitCompare',
  },
  {
    step: '04',
    title: 'Choose',
    subtitle: 'Informed Selection',
    description: 'You select the exact plan tailored to your budget with full confidence, knowing every term and exclusion upfront.',
    icon: 'CheckCircle2',
  },
  {
    step: '05',
    title: 'Apply',
    subtitle: 'Seamless Proposal Filing',
    description: 'Complete assistance with medical underwriting disclosure, proposal forms, and KYC formalities to prevent future claim repudiation.',
    icon: 'FileText',
  },
  {
    step: '06',
    title: 'Policy Issued',
    subtitle: 'Verification & Delivery',
    description: 'Review policy docket for accurate nominee details and terms, ensuring your digital policy vault is set up safely.',
    icon: 'BadgeCheck',
  },
  {
    step: '07',
    title: 'Annual Review',
    subtitle: 'Ongoing Portfolio Tune-up',
    description: 'Periodic check-ins when you welcome a child, purchase a home, or advance in your career to align coverage.',
    icon: 'RefreshCw',
  },
  {
    step: '08',
    title: 'Claim / Support',
    subtitle: 'Lifelong Dedicated Advocacy',
    description: 'Whenever a hospital admission or claim arrives, Sruthy steps in to guide hospital cashless or reimbursement processing smoothly.',
    icon: 'HeartHandshake',
  },
];

export const comparisonPlansData: ComparisonPlan[] = [
  {
    id: 'term-pure',
    name: 'Pure Term Protection Plan',
    category: 'Term Life',
    coverage: '₹1.00 Crore Sum Assured',
    demoPremium: '₹850 – ₹1,200 / month (Demo)',
    duration: '35 - 40 Years (Till Age 75)',
    keyBenefits: [
      'Comprehensive high-value pure risk cover',
      'Terminal illness accelerated payout',
      'Accidental Death benefit rider option',
      'Zero return of premium cost drag',
    ],
    suitableFor: 'Young earners, parents with debt or dependents wanting highest cover for lowest cost.',
    popular: true,
  },
  {
    id: 'health-comprehensive',
    name: 'Comprehensive Family Floater',
    category: 'Health Insurance',
    coverage: '₹15 – ₹25 Lakhs + Super Top-up',
    demoPremium: '₹1,400 – ₹2,200 / month (Demo)',
    duration: 'Lifelong Renewable',
    keyBenefits: [
      'Zero room rent capping',
      'Unlimited recharge of sum insured',
      '10,000+ cashless hospital tie-ups',
      'Annual health checkups for family',
    ],
    suitableFor: 'Families wanting zero out-of-pocket stress during private hospital admissions.',
  },
  {
    id: 'child-future',
    name: 'Child Education Milestone Shield',
    category: 'Child Security',
    coverage: 'Target ₹35 – ₹50 Lakhs Fund',
    demoPremium: '₹4,000 – ₹8,000 / month (Demo)',
    duration: '15 - 18 Years (Aligned to college)',
    keyBenefits: [
      'Waiver of Premium on parent\'s demise',
      'Staggered milestone payouts at college entry',
      'Compound equity & debt market stability',
      'Guaranteed loyalty additions',
    ],
    suitableFor: 'Parents committed to guaranteeing university funding irrespective of life uncertainties.',
  },
  {
    id: 'retirement-freedom',
    name: 'Guaranteed Pension & Annuity',
    category: 'Retirement Planning',
    coverage: 'Lifelong Guaranteed Annuity',
    demoPremium: 'Lump-sum or Regular Accumulation',
    duration: 'Lifelong Post-Retirement',
    keyBenefits: [
      'Fixed annuity rate locked for life',
      'Return of 100% principal to heirs',
      'Joint life option covering spouse',
      'Inflation-resilient pension strategy',
    ],
    suitableFor: 'Professionals seeking financial dignity and independent monthly cashflow post-retirement.',
  },
];

export const claimRoadmapSteps = [
  {
    step: 1,
    title: 'Immediate Intimation',
    description: 'Call or WhatsApp Sruthy immediately upon hospital admission or incident. We register the initial claim intimation with the insurer.',
  },
  {
    step: 2,
    title: 'Document Checklist Verification',
    description: 'We review discharge summaries, bills, diagnostic reports, and pharmacy bills against policy criteria before submission.',
  },
  {
    step: 3,
    title: 'TPA & Hospital Coordination',
    description: 'For cashless requests, we follow up with the hospital insurance desk and Third-Party Administrator (TPA) for prompt pre-authorization.',
  },
  {
    step: 4,
    title: 'Claim Docket Filing',
    description: 'We ensure all claim forms, cancelled cheques, and original documents are compiled cleanly with zero omission errors.',
  },
  {
    step: 5,
    title: 'Settlement Tracking & Review',
    description: 'Sruthy tracks the claim status continuously until the approved settlement amount is transferred directly to your bank account.',
  },
];

export const requiredClaimDocs = [
  { name: 'Duly filled & signed Claim Intimation Form', requiredFor: 'All Claims' },
  { name: 'Original Hospital Discharge Summary', requiredFor: 'Health Hospitalization' },
  { name: 'Itemized Hospital Bill with Break-up & Payment Receipts', requiredFor: 'Health / Cashless' },
  { name: 'Diagnostic Test Reports & Doctor\'s Prescription Slips', requiredFor: 'Health' },
  { name: 'Valid KYC (Aadhaar / PAN) & Cancelled Cheque with IFSC', requiredFor: 'Direct NEFT Settlement' },
  { name: 'Doctor\'s First Consultation & Medical Certificate', requiredFor: 'Critical Illness' },
  { name: 'Death Certificate & Nominee ID Proofs', requiredFor: 'Life Claims' },
  { name: 'FIR / Police Panchanama Copy (if applicable)', requiredFor: 'Accidental Claims' },
];

export const advisoryApproachSteps = [
  {
    num: '01',
    title: 'Understand Your Needs',
    desc: 'Deep discovery into your family composition, current debt, lifestyle aspirations, and financial dependencies.',
  },
  {
    num: '02',
    title: 'Evaluate Protection Gaps',
    desc: 'Unbiased gap analysis to determine if you are underinsured against inflation or medical contingencies.',
  },
  {
    num: '03',
    title: 'Compare Suitable Options',
    desc: 'Cross-market review of policy wording, exclusion lists, claim turnaround times, and solvency metrics.',
  },
  {
    num: '04',
    title: 'Help You Make an Informed Decision',
    desc: 'Empowering you with complete transparency, without sales pushiness or confusing insurance jargon.',
  },
  {
    num: '05',
    title: 'Continue Supporting You After Purchase',
    desc: 'Lifelong service touchpoints: annual policy reviews, renewal reminders, and round-the-clock claim assistance.',
  },
];
