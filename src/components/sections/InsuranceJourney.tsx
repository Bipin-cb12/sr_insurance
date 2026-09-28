import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Ear,
  Search,
  GitCompare,
  CheckCircle2,
  FileText,
  BadgeCheck,
  RefreshCw,
  HeartHandshake,
  Compass,
} from 'lucide-react';
import { insuranceJourneySteps } from '../../data/insuranceData';

export const InsuranceJourney: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'Ear':
        return <Ear className="w-5 h-5 text-[#d1b164]" />;
      case 'Search':
        return <Search className="w-5 h-5 text-[#d1b164]" />;
      case 'GitCompare':
        return <GitCompare className="w-5 h-5 text-[#d1b164]" />;
      case 'CheckCircle2':
        return <CheckCircle2 className="w-5 h-5 text-[#d1b164]" />;
      case 'FileText':
        return <FileText className="w-5 h-5 text-[#d1b164]" />;
      case 'BadgeCheck':
        return <BadgeCheck className="w-5 h-5 text-[#d1b164]" />;
      case 'RefreshCw':
        return <RefreshCw className="w-5 h-5 text-[#d1b164]" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-5 h-5 text-[#d1b164]" />;
      default:
        return <CheckCircle2 className="w-5 h-5 text-[#d1b164]" />;
    }
  };

  return (
    <section className="py-20 sm:py-28 bg-[#fafaf8] text-[#1e293b] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0a1426]/5 border border-[#d1b164]/30 text-[#a98031] text-xs font-semibold uppercase tracking-[0.2em] mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>End-to-End Client Roadmap</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#0a1426] tracking-tight">
            The Insurance <span className="font-normal italic text-[#a98031]">Journey</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
            From our initial exploratory conversation through proposal processing and lifelong claim advocacy.
          </p>
        </div>

        {/* Desktop / Tablet Horizontal Interactive Timeline */}
        <div className="hidden lg:block">
          {/* Step Pill Selectors */}
          <div className="grid grid-cols-8 gap-2 mb-10 pb-4 border-b border-slate-200">
            {insuranceJourneySteps.map((s, index) => {
              const isActive = activeStep === index;
              return (
                <button
                  key={s.step}
                  onClick={() => setActiveStep(index)}
                  className={`p-3 rounded-2xl text-left transition-all duration-300 relative border flex flex-col justify-between ${
                    isActive
                      ? 'bg-[#0a1426] text-white border-[#0a1426] shadow-lg scale-105'
                      : 'bg-white hover:bg-slate-50 text-slate-700 border-slate-200 hover:border-[#d1b164]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`text-xs font-mono font-bold ${
                        isActive ? 'text-[#d1b164]' : 'text-slate-400'
                      }`}
                    >
                      {s.step}
                    </span>
                    <div className="scale-75">{getStepIcon(s.icon)}</div>
                  </div>
                  <div className="font-serif text-sm font-semibold truncate leading-tight">
                    {s.title}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Step Highlight Showcase */}
          <div className="bg-[#0a1426] text-white rounded-3xl p-8 sm:p-12 border border-[#d1b164]/40 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#d1b164]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-12 gap-8 items-center relative z-10">
              <div className="col-span-8 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-3xl font-bold text-[#d1b164]">
                    {insuranceJourneySteps[activeStep].step}
                  </span>
                  <div className="h-4 w-px bg-slate-700" />
                  <span className="text-xs uppercase tracking-widest text-slate-400 font-semibold">
                    {insuranceJourneySteps[activeStep].subtitle}
                  </span>
                </div>

                <h3 className="font-serif text-3xl sm:text-4xl text-white font-normal">
                  Phase {activeStep + 1}: {insuranceJourneySteps[activeStep].title}
                </h3>

                <p className="text-base text-slate-300 leading-relaxed font-light max-w-2xl">
                  {insuranceJourneySteps[activeStep].description}
                </p>

                <div className="pt-4 flex items-center gap-4">
                  <button
                    disabled={activeStep === 0}
                    onClick={() => setActiveStep(activeStep - 1)}
                    className="px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider text-slate-300 hover:text-white border border-slate-700 disabled:opacity-30 disabled:pointer-events-none transition-colors"
                  >
                    &larr; Previous Stage
                  </button>

                  <button
                    disabled={activeStep === insuranceJourneySteps.length - 1}
                    onClick={() => setActiveStep(activeStep + 1)}
                    className="px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider text-[#0a1426] bg-[#d1b164] hover:bg-[#dfc88e] disabled:opacity-30 disabled:pointer-events-none transition-colors"
                  >
                    Next Stage &rarr;
                  </button>
                </div>
              </div>

              <div className="col-span-4 flex justify-center">
                <div className="w-32 h-32 rounded-3xl bg-[#0f1f38] border-2 border-[#d1b164]/40 flex items-center justify-center shadow-2xl scale-125">
                  {getStepIcon(insuranceJourneySteps[activeStep].icon)}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile & Small Tablet Vertical Timeline */}
        <div className="lg:hidden space-y-4">
          {insuranceJourneySteps.map((s, idx) => (
            <div
              key={s.step}
              className="p-5 rounded-2xl bg-white border border-slate-200 shadow-md relative overflow-hidden"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-lg bg-[#0a1426] text-[#d1b164] flex items-center justify-center font-mono text-xs font-bold shrink-0">
                  {s.step}
                </div>
                <div>
                  <h4 className="font-serif text-lg font-bold text-[#0a1426] leading-tight">
                    {s.title}
                  </h4>
                  <span className="text-[11px] uppercase tracking-wider text-[#a98031] font-medium">
                    {s.subtitle}
                  </span>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed pl-11">
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
