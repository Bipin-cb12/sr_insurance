import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Shield,
  HeartHandshake,
  Activity,
  Users,
  GraduationCap,
  Sunset,
  Car,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
  Calendar,
  Sparkles,
} from 'lucide-react';
import { insuranceSolutions } from '../../data/insuranceData';
import { InsuranceSolution } from '../../types';
import { Modal } from '../common/Modal';

interface SolutionsProps {
  onSelectSolutionForConsultation: (solutionTitle: string) => void;
}

export const Solutions: React.FC<SolutionsProps> = ({ onSelectSolutionForConsultation }) => {
  const [selectedSolution, setSelectedSolution] = useState<InsuranceSolution | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Shield':
        return <Shield className="w-6 h-6 text-[#d1b164]" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-6 h-6 text-[#d1b164]" />;
      case 'Activity':
        return <Activity className="w-6 h-6 text-[#d1b164]" />;
      case 'Users':
        return <Users className="w-6 h-6 text-[#d1b164]" />;
      case 'GraduationCap':
        return <GraduationCap className="w-6 h-6 text-[#d1b164]" />;
      case 'Sunset':
        return <Sunset className="w-6 h-6 text-[#d1b164]" />;
      case 'Car':
        return <Car className="w-6 h-6 text-[#d1b164]" />;
      case 'TrendingUp':
        return <TrendingUp className="w-6 h-6 text-[#d1b164]" />;
      default:
        return <Shield className="w-6 h-6 text-[#d1b164]" />;
    }
  };

  return (
    <section id="solutions" className="py-20 sm:py-28 bg-[#0a1426] text-white relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#182d4d]/30 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#182d4d] border border-[#d1b164]/30 text-[#d1b164] text-xs font-semibold uppercase tracking-[0.2em] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Tailored Protection Portfolios</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#fafaf8] tracking-tight">
            Insurance <span className="font-normal italic text-[#d1b164]">Solutions</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed">
            Custom financial protection structures engineered around your specific family stage, risk tolerance, and asset preservation goals.
          </p>
        </div>

        {/* 8 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {insuranceSolutions.map((solution, idx) => (
            <motion.div
              key={solution.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              whileHover={{ y: -6 }}
              className="group p-6 rounded-2xl bg-[#0f1f38]/90 border border-slate-800 hover:border-[#d1b164]/60 transition-all duration-300 flex flex-col justify-between shadow-xl relative overflow-hidden"
            >
              {/* Top Accent Gradient Bar on Hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#d1b164] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div>
                {/* Header Icon + Category */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#182d4d] border border-[#d1b164]/30 flex items-center justify-center group-hover:bg-[#25406b] group-hover:scale-105 transition-all duration-300">
                    {getIcon(solution.iconName)}
                  </div>
                  <span className="text-[10px] uppercase tracking-widest text-[#d1b164] font-medium bg-[#0a1426] px-2.5 py-1 rounded-full border border-slate-800">
                    {solution.category}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <h3 className="font-serif text-xl font-medium text-white mb-1 group-hover:text-[#d1b164] transition-colors">
                  {solution.title}
                </h3>
                <p className="text-xs text-[#dfc88e] font-light mb-3 italic">
                  {solution.subtitle}
                </p>

                {/* Description */}
                <p className="text-xs text-slate-300 leading-relaxed line-clamp-3 mb-4">
                  {solution.description}
                </p>

                {/* Mini Features List */}
                <div className="space-y-1.5 mb-6 border-t border-slate-800/80 pt-3">
                  {solution.highlights.slice(0, 2).map((feat, i) => (
                    <div key={i} className="flex items-start gap-2 text-[11px] text-slate-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#d1b164] shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2 pt-2 border-t border-slate-800/80">
                <button
                  onClick={() => setSelectedSolution(solution)}
                  className="w-full py-2 px-3 rounded-lg text-xs font-medium text-slate-300 hover:text-white bg-[#182d4d]/40 hover:bg-[#182d4d] transition-all flex items-center justify-center gap-1.5"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#d1b164]" />
                </button>

                <button
                  onClick={() => onSelectSolutionForConsultation(solution.title)}
                  className="w-full py-2 px-3 rounded-lg text-xs font-semibold text-[#0a1426] bg-[#d1b164] hover:bg-[#dfc88e] transition-all flex items-center justify-center gap-1.5 uppercase tracking-wider"
                >
                  <Calendar className="w-3 h-3" />
                  <span>Request Consultation</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Detailed Solution Modal */}
      {selectedSolution && (
        <Modal
          isOpen={selectedSolution !== null}
          onClose={() => setSelectedSolution(null)}
          title={selectedSolution.title}
          subtitle={selectedSolution.category}
          maxWidth="lg"
        >
          <div className="space-y-5 text-sm text-slate-300">
            <p className="text-base text-slate-200 leading-relaxed font-light">
              {selectedSolution.description}
            </p>

            <div className="bg-[#182d4d]/40 border border-slate-700/60 rounded-xl p-4 space-y-2">
              <h4 className="text-xs uppercase tracking-widest text-[#d1b164] font-semibold">
                Coverage Overview
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div>
                  <span className="text-slate-400 block">Policy Horizon:</span>
                  <span className="font-semibold text-white">{selectedSolution.coverageScope}</span>
                </div>
                <div>
                  <span className="text-slate-400 block">Recommended Scope:</span>
                  <span className="font-semibold text-white">{selectedSolution.sampleStartingCoverage}</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-xs uppercase tracking-widest text-[#d1b164] font-semibold mb-3">
                Key Protection Highlights
              </h4>
              <ul className="space-y-2">
                {selectedSolution.highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-[#d1b164] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-2 border-t border-slate-800">
              <p className="text-xs text-slate-400 mb-4">
                <span className="text-slate-200 font-semibold">Ideal Profile: </span>
                {selectedSolution.bestFor}
              </p>

              <button
                onClick={() => {
                  const title = selectedSolution.title;
                  setSelectedSolution(null);
                  onSelectSolutionForConsultation(title);
                }}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-[#dfc88e] to-[#c29b41] text-[#0a1426] font-bold text-xs uppercase tracking-wider shadow-lg flex items-center justify-center gap-2 hover:brightness-105 transition-all"
              >
                <Calendar className="w-4 h-4" />
                <span>Schedule Consultation on {selectedSolution.title}</span>
              </button>
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
};
