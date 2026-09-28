import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  CheckCircle2,
  ArrowRight,
  RotateCcw,
  Sparkles,
  ShieldAlert,
  Calendar,
  Layers,
  Heart,
  TrendingUp,
} from 'lucide-react';

interface FindYourPlanProps {
  onDiscussWithSruthy: (recommendedPlan: string) => void;
}

export const FindYourPlan: React.FC<FindYourPlanProps> = ({ onDiscussWithSruthy }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({
    age: '',
    occupation: '',
    married: '',
    dependents: '',
    protectionType: '',
    existingInsurance: '',
    annualIncome: '',
    primaryGoal: '',
  });

  const [isCompleted, setIsCompleted] = useState(false);

  const questions = [
    {
      key: 'age',
      title: 'What is your current age bracket?',
      subtitle: 'Insurance premiums increase with age; identifying your bracket sets the baseline cost.',
      options: ['Under 25 Years', '25 – 35 Years', '36 – 45 Years', '46 – 55 Years', 'Above 55 Years'],
    },
    {
      key: 'occupation',
      title: 'What is your professional occupation?',
      subtitle: 'Helps determine income stability, risk class, and disability rider eligibility.',
      options: [
        'Salaried Corporate / Tech Professional',
        'Business Owner / Entrepreneur',
        'Doctor / Healthcare Practitioner',
        'Independent Consultant / Freelancer',
        'Homemaker / Retired',
      ],
    },
    {
      key: 'married',
      title: 'Are you currently married?',
      subtitle: 'Spouse continuity and dual-earner dynamics shape health and term structures.',
      options: ['Yes, Married', 'No, Single', 'Planning to Marry Soon'],
    },
    {
      key: 'dependents',
      title: 'Do you have financial dependents who rely on your income?',
      subtitle: 'Defines your Human Life Value (HLV) multiple.',
      options: [
        'Yes, Spouse and Growing Children',
        'Yes, Dependent Aging Parents & Spouse',
        'Yes, Parents only',
        'No Financial Dependents Currently',
      ],
    },
    {
      key: 'protectionType',
      title: 'What type of protection are you actively seeking?',
      subtitle: 'Select the main area of vulnerability you wish to address first.',
      options: [
        'Pure Term Life Protection',
        'Comprehensive Health & Hospitalization Cover',
        'Child Education & Milestone Security',
        'Retirement Pension & Lifelong Annuity',
        'Complete 360° Family Shield',
      ],
    },
    {
      key: 'existingInsurance',
      title: 'Do you already hold active insurance policies?',
      subtitle: 'Helps avoid paying duplicate premiums for overlapping benefits.',
      options: [
        'No existing insurance at all',
        'Only corporate group health insurance provided by employer',
        'Yes, personal term and health policies that need audit/upgrading',
        'Traditional endowment / LIC policies only',
      ],
    },
    {
      key: 'annualIncome',
      title: 'What is your approximate annual household income?',
      subtitle: 'Used purely to benchmark your minimum recommended sum assured.',
      options: [
        'Under ₹10 Lakhs per annum',
        '₹10 Lakhs – ₹25 Lakhs per annum',
        '₹25 Lakhs – ₹50 Lakhs per annum',
        'Above ₹50 Lakhs per annum',
      ],
    },
    {
      key: 'primaryGoal',
      title: 'What is your primary milestone goal?',
      subtitle: 'The ultimate outcome you want this protection strategy to achieve.',
      options: [
        'Family Protection & Debt Immunity',
        'Shielding Wealth from Medical Catastrophe',
        'Guaranteed Higher Education for Child',
        'Stress-Free Golden Years Retirement',
        'Wealth Growth with Built-In Life Shield',
      ],
    },
  ];

  const handleSelectOption = (key: string, value: string) => {
    const updated = { ...answers, [key]: value };
    setAnswers(updated);

    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handleReset = () => {
    setAnswers({
      age: '',
      occupation: '',
      married: '',
      dependents: '',
      protectionType: '',
      existingInsurance: '',
      annualIncome: '',
      primaryGoal: '',
    });
    setCurrentStep(0);
    setIsCompleted(false);
  };

  // Recommendation Logic
  const getRecommendation = () => {
    const hasKids = answers.dependents?.includes('Children');
    const isTermFocus = answers.protectionType?.includes('Term') || answers.primaryGoal?.includes('Family');
    const isRetire = answers.primaryGoal?.includes('Retirement') || answers.protectionType?.includes('Retirement');
    const isHealthOnly = answers.protectionType?.includes('Health') || answers.existingInsurance?.includes('employer');

    let primaryFocus = 'Comprehensive Family Protection Umbrella';
    let categories = ['Pure Term Life', 'Family Health Floater', 'Critical Illness Rider'];
    let suggestedCover = '₹1.50 Crore Term + ₹25 Lakhs Health Floater';
    let rationale =
      'Based on your household profile and dependent responsibilities, your highest priority is locking in a high-value pure term shield alongside an independent cashless health floater.';

    if (hasKids || answers.primaryGoal?.includes('Child')) {
      primaryFocus = 'Child Future & Family Legacy Shield';
      categories = ['Term Life with Waiver of Premium', 'Child Education Fund', 'Family Health Floater'];
      suggestedCover = '₹2.00 Crore Term + ₹35 Lakhs Education Milestone Fund';
      rationale =
        'Ensuring your children’s education milestones are completely bulletproofed against unexpected life contingencies takes prime focus.';
    } else if (isRetire || answers.age?.includes('46') || answers.age?.includes('55')) {
      primaryFocus = 'Guaranteed Retirement & Healthcare Shield';
      categories = ['Lifelong Guaranteed Annuity', 'Senior Citizen / Comprehensive Health', 'Critical Illness Cover'];
      suggestedCover = 'Guaranteed Monthly Pension + ₹25 Lakhs Health Super Top-up';
      rationale =
        'Preserving medical continuity without room rent restrictions and structuring non-market dependent monthly cashflow for your retirement years.';
    } else if (isHealthOnly) {
      primaryFocus = 'Comprehensive Health & Super Top-up Fortification';
      categories = ['Individual/Family Health Floater', '₹50L - ₹1Cr Super Top-up', 'Accidental Disability Rider'];
      suggestedCover = '₹15 Lakhs Base + ₹85 Lakhs Super Top-up';
      rationale =
        'Corporate employer cover can lapse upon job transitions. Creating a standalone personal health shield protects your family permanently against hospital bills.';
    }

    return { primaryFocus, categories, suggestedCover, rationale };
  };

  const recommendation = getRecommendation();

  return (
    <section id="find-your-plan" className="py-20 sm:py-28 bg-[#fafaf8] text-[#1e293b] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0a1426]/5 border border-[#d1b164]/30 text-[#a98031] text-xs font-semibold uppercase tracking-[0.2em] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Assessment</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#0a1426] tracking-tight">
            Find the Right <span className="font-normal italic text-[#a98031]">Protection for You</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3">
            Answer a few quick questions to receive a tailored, objective protection focus based on your exact life stage.
          </p>
        </div>

        {/* Questionnaire Box */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl p-6 sm:p-10 relative overflow-hidden">
          {!isCompleted ? (
            <div>
              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                  <span className="font-semibold uppercase tracking-wider text-[#a98031]">
                    Question {currentStep + 1} of {questions.length}
                  </span>
                  <span>{Math.round(((currentStep + 1) / questions.length) * 100)}% Complete</span>
                </div>
                <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#dfc88e] to-[#a98031] transition-all duration-300 rounded-full"
                    style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
                  />
                </div>
              </div>

              {/* Question Content */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div>
                    <h3 className="font-serif text-2xl sm:text-3xl text-[#0a1426] font-normal leading-snug">
                      {questions[currentStep].title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1.5">
                      {questions[currentStep].subtitle}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 gap-3 pt-2">
                    {questions[currentStep].options.map((option) => {
                      const isSelected = answers[questions[currentStep].key] === option;
                      return (
                        <button
                          key={option}
                          onClick={() => handleSelectOption(questions[currentStep].key, option)}
                          className={`p-4 rounded-xl text-left text-sm font-medium transition-all duration-200 border flex items-center justify-between group ${
                            isSelected
                              ? 'bg-[#0a1426] text-white border-[#0a1426] shadow-md'
                              : 'bg-slate-50/70 hover:bg-slate-100 text-slate-800 border-slate-200 hover:border-[#d1b164]'
                          }`}
                        >
                          <span>{option}</span>
                          <div
                            className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${
                              isSelected
                                ? 'border-[#d1b164] bg-[#d1b164] text-[#0a1426]'
                                : 'border-slate-300 group-hover:border-[#d1b164]'
                            }`}
                          >
                            {isSelected && <CheckCircle2 className="w-3.5 h-3.5" />}
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  {/* Back button if not on first step */}
                  {currentStep > 0 && (
                    <div className="pt-4 flex justify-start">
                      <button
                        onClick={() => setCurrentStep(currentStep - 1)}
                        className="text-xs text-slate-500 hover:text-slate-800 transition-colors underline underline-offset-4"
                      >
                        &larr; Back to previous question
                      </button>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          ) : (
            /* Completed Screen: Your Recommended Insurance Focus */
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="space-y-6"
            >
              <div className="text-center pb-4 border-b border-slate-200">
                <div className="w-12 h-12 rounded-2xl bg-[#0a1426] text-[#d1b164] flex items-center justify-center mx-auto mb-3 shadow-lg">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <span className="text-xs uppercase tracking-widest text-[#a98031] font-semibold">
                  Personalized Diagnostic Output
                </span>
                <h3 className="font-serif text-3xl font-medium text-[#0a1426] mt-1">
                  Your Recommended Insurance Focus
                </h3>
              </div>

              {/* Main Focus Card */}
              <div className="p-6 rounded-2xl bg-[#0a1426] text-white border border-[#d1b164]/40 shadow-xl space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-widest text-[#d1b164] font-semibold">
                    Core Protective Strategy
                  </span>
                  <span className="text-[11px] bg-[#182d4d] px-3 py-1 rounded-full text-slate-300">
                    High Priority
                  </span>
                </div>

                <h4 className="font-serif text-2xl text-white font-normal">
                  {recommendation.primaryFocus}
                </h4>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                  {recommendation.rationale}
                </p>

                <div className="p-3.5 rounded-xl bg-[#0f1f38] border border-slate-700/80 flex items-center justify-between text-xs">
                  <span className="text-slate-400">Benchmark Coverage Scope:</span>
                  <span className="text-[#d1b164] font-semibold">{recommendation.suggestedCover}</span>
                </div>

                <div>
                  <span className="text-[11px] uppercase tracking-wider text-slate-400 block mb-2 font-medium">
                    Recommended Policy Components:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {recommendation.categories.map((cat) => (
                      <span
                        key={cat}
                        className="px-3 py-1 rounded-full text-xs bg-[#182d4d] text-slate-200 border border-slate-700 flex items-center gap-1.5"
                      >
                        <CheckCircle2 className="w-3 h-3 text-[#d1b164]" />
                        {cat}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Mandatory Informational Disclaimer */}
              <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 flex items-start gap-3 text-xs text-amber-900 leading-relaxed">
                <ShieldAlert className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                <div>
                  <strong className="block font-semibold">IMPORTANT REGULATORY NOTICE:</strong>
                  This assessment is strictly an educational and informational tool to help you identify coverage priorities. It does NOT constitute binding legal, tax, or financial underwriting advice.
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                <button
                  onClick={() => onDiscussWithSruthy(recommendation.primaryFocus)}
                  className="w-full sm:flex-1 py-3.5 px-6 rounded-xl bg-[#0a1426] hover:bg-[#182d4d] text-white text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4 text-[#d1b164]" />
                  <span>Discuss With Sruthy</span>
                </button>

                <button
                  onClick={handleReset}
                  className="w-full sm:w-auto py-3 px-5 rounded-xl border border-slate-300 text-slate-600 hover:text-slate-900 hover:bg-slate-100 text-xs font-semibold uppercase tracking-wider transition-all flex items-center justify-center gap-2"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Retake Assessment</span>
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};
