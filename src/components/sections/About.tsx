import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Check, MessageSquare, ArrowRight, Compass } from 'lucide-react';
import { agentConfig } from '../../data/agentConfig';
import { advisoryApproachSteps } from '../../data/insuranceData';

interface AboutProps {
  onTalkToSruthy: () => void;
}

export const About: React.FC<AboutProps> = ({ onTalkToSruthy }) => {
  return (
    <section id="about" className="py-20 sm:py-28 bg-[#fafaf8] text-[#1e293b] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0a1426]/5 border border-[#d1b164]/30 text-[#a98031] text-xs font-semibold uppercase tracking-[0.2em] mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>Advisory Philosophy</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#0a1426] tracking-tight">
            Meet <span className="font-normal italic text-[#a98031]">Sruthy</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
            Independent Insurance Advisor &amp; Financial Protection Consultant dedicated to safeguarding modern families and professionals.
          </p>
        </div>

        {/* Bio & Portrait Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20">
          {/* Portrait Column */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              {/* Background Luxury Shadow Frame */}
              <div className="absolute -inset-3 rounded-3xl bg-[#d1b164]/20 -rotate-1 pointer-events-none" />

              <div className="relative rounded-2xl overflow-hidden border border-[#d1b164]/40 bg-[#0a1426] shadow-xl">
                <img
                  src={agentConfig.profileImage.url}
                  alt={agentConfig.profileImage.alt}
                  className="w-full h-[450px] object-cover object-top"
                  loading="lazy"
                />
                <div className="p-4 bg-[#0a1426] text-white border-t border-slate-800">
                  <p className="font-serif text-lg font-medium text-white">{agentConfig.name}</p>
                  <p className="text-xs text-[#d1b164]">{agentConfig.designation}</p>
                  <p className="text-[11px] text-slate-400 mt-1">
                    Independent consulting across Life, Health, and Retirement.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Biography Text Column */}
          <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
            <div className="space-y-4 text-slate-700 leading-relaxed text-sm sm:text-base">
              <h3 className="font-serif text-2xl sm:text-3xl text-[#0a1426] font-normal leading-snug">
                Helping individuals and families navigate protection with clarity, empathy, and complete independence.
              </h3>

              <p>
                Insurance is one of the most critical financial decisions an individual makes, yet it is often obscured by hundreds of pages of complex policy jargon, ambiguous exclusion clauses, and aggressive target-driven sales tactics.
              </p>

              <p>
                As an independent financial protection consultant, my mission is simple: to sit on your side of the table. I take the time to deeply understand your family's exact cashflows, financial dependencies, and life priorities before evaluating any product.
              </p>

              <p className="bg-amber-50/60 p-4 rounded-xl border-l-4 border-[#d1b164] text-slate-800 italic text-sm">
                “My fiduciary responsibility is to you and your loved ones. We do not sell insurance; we design protective safeguards that genuinely pay out when life throws unexpected challenges your way.”
              </p>
            </div>

            {/* Core Values Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-[#0a1426] text-[#d1b164] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3 h-3" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-slate-800">
                  Unbiased Market Comparison
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-[#0a1426] text-[#d1b164] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3 h-3" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-slate-800">
                  Zero Jargon Explanations
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-[#0a1426] text-[#d1b164] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3 h-3" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-slate-800">
                  Direct Claim Settlement Advocacy
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-[#0a1426] text-[#d1b164] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3 h-3" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-slate-800">
                  Lifelong Annual Reviews
                </span>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4 flex items-center gap-4">
              <button
                onClick={onTalkToSruthy}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#0a1426] text-white text-xs sm:text-sm font-semibold uppercase tracking-wider hover:bg-[#182d4d] transition-all shadow-md group"
              >
                <MessageSquare className="w-4 h-4 text-[#d1b164]" />
                <span>Talk to Sruthy</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* "My Approach" 5-Step Process Section */}
        <div className="mt-16 pt-16 border-t border-slate-200">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-[0.2em] text-[#a98031] font-semibold">
              Structured Methodology
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#0a1426] mt-1">
              My 5-Step Advisory Approach
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Every recommendation is arrived at systematically to ensure maximum safety and cost efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {advisoryApproachSteps.map((step) => (
              <div
                key={step.num}
                className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-[#d1b164] transition-all duration-300 hover:shadow-lg flex flex-col justify-between group"
              >
                <div>
                  <span className="text-2xl font-serif font-bold text-[#d1b164] group-hover:text-[#a98031] transition-colors block mb-2">
                    {step.num}
                  </span>
                  <h4 className="font-semibold text-sm text-[#0a1426] mb-2 leading-snug">
                    {step.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
