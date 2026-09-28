import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, Award, Users, FileCheck, ShieldCheck, Sparkles } from 'lucide-react';
import { testimonialsData } from '../../data/testimonialsData';
import { agentConfig } from '../../data/agentConfig';

export const Testimonials: React.FC = () => {
  const [filter, setFilter] = useState('All');

  return (
    <section id="testimonials" className="py-20 sm:py-28 bg-[#060d19] text-white relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/4 w-[600px] h-[400px] bg-[#182d4d]/30 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#182d4d] border border-[#d1b164]/30 text-[#d1b164] text-xs font-semibold uppercase tracking-[0.2em] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Client Perspectives</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#fafaf8] tracking-tight">
            Client <span className="font-normal italic text-[#d1b164]">Testimonials</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-3">
            Real feedback on clarity, promptness, and hands-on claim advocacy.
          </p>
          <div className="mt-2 inline-block px-3 py-1 rounded-full bg-[#0f1f38] border border-slate-700 text-[10px] uppercase tracking-wider text-slate-400">
            * Representative Demo Client Feedback for portfolio presentation
          </div>
        </div>

        {/* Testimonials 4-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {testimonialsData.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="p-8 rounded-3xl bg-[#0a1426] border border-slate-800 hover:border-[#d1b164]/50 transition-all duration-300 shadow-xl flex flex-col justify-between group relative"
            >
              <div>
                {/* Top Quote Icon & Rating */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1 text-[#d1b164]">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#d1b164]" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-[#182d4d] group-hover:text-[#d1b164]/30 transition-colors" />
                </div>

                {/* Quote Text */}
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-light mb-6 italic">
                  “{t.quote}”
                </p>
              </div>

              {/* Bottom Client Metadata */}
              <div className="pt-6 border-t border-slate-800/80 flex items-center justify-between">
                <div>
                  <h4 className="font-serif text-lg font-medium text-white group-hover:text-[#d1b164] transition-colors">
                    {t.name}
                  </h4>
                  <p className="text-xs text-slate-400">{t.role}</p>
                  <p className="text-[11px] text-[#dfc88e] mt-0.5">{t.location}</p>
                </div>
                <div className="text-right">
                  <span className="text-[10px] uppercase tracking-wider text-slate-500 font-mono block">
                    {t.date}
                  </span>
                  <span className="inline-block mt-1 px-2.5 py-0.5 rounded-full text-[9px] font-semibold bg-[#182d4d] text-slate-300 border border-slate-700">
                    {t.planType}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Feature 13: Trust & Experience Statistics Showcase with Counter Styling */}
        <div className="bg-gradient-to-r from-[#0f1f38] via-[#0a1426] to-[#0f1f38] border border-[#d1b164]/40 rounded-3xl p-8 sm:p-12 shadow-2xl">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs uppercase tracking-[0.2em] text-[#d1b164] font-semibold">
              Demonstrated Excellence
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-normal text-white mt-1">
              Trust &amp; Experience by the Numbers
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              (Editable demo values for website presentation)
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {/* Stat 1 */}
            <div className="p-6 rounded-2xl bg-[#0a1426]/70 border border-slate-800/80">
              <div className="w-10 h-10 rounded-xl bg-[#182d4d] text-[#d1b164] flex items-center justify-center mx-auto mb-3">
                <Award className="w-5 h-5" />
              </div>
              <div className="font-serif text-3xl sm:text-4xl font-bold text-[#fafaf8] tracking-tight">
                {agentConfig.metrics.experienceYears}
              </div>
              <div className="text-xs text-slate-400 uppercase tracking-wider mt-1 font-medium">
                {agentConfig.metrics.experienceLabel}
              </div>
            </div>

            {/* Stat 2 */}
            <div className="p-6 rounded-2xl bg-[#0a1426]/70 border border-slate-800/80">
              <div className="w-10 h-10 rounded-xl bg-[#182d4d] text-[#d1b164] flex items-center justify-center mx-auto mb-3">
                <Users className="w-5 h-5" />
              </div>
              <div className="font-serif text-3xl sm:text-4xl font-bold text-[#fafaf8] tracking-tight">
                {agentConfig.metrics.familiesGuided}
              </div>
              <div className="text-xs text-slate-400 uppercase tracking-wider mt-1 font-medium">
                {agentConfig.metrics.familiesLabel}
              </div>
            </div>

            {/* Stat 3 */}
            <div className="p-6 rounded-2xl bg-[#0a1426]/70 border border-slate-800/80">
              <div className="w-10 h-10 rounded-xl bg-[#182d4d] text-[#d1b164] flex items-center justify-center mx-auto mb-3">
                <FileCheck className="w-5 h-5" />
              </div>
              <div className="font-serif text-3xl sm:text-4xl font-bold text-[#fafaf8] tracking-tight">
                {agentConfig.metrics.policiesAssisted}
              </div>
              <div className="text-xs text-slate-400 uppercase tracking-wider mt-1 font-medium">
                {agentConfig.metrics.policiesLabel}
              </div>
            </div>

            {/* Stat 4 */}
            <div className="p-6 rounded-2xl bg-[#0a1426]/70 border border-slate-800/80">
              <div className="w-10 h-10 rounded-xl bg-[#182d4d] text-[#d1b164] flex items-center justify-center mx-auto mb-3">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="font-serif text-3xl sm:text-4xl font-bold text-[#fafaf8] tracking-tight">
                {agentConfig.metrics.claimAssistanceRate}
              </div>
              <div className="text-xs text-slate-400 uppercase tracking-wider mt-1 font-medium">
                {agentConfig.metrics.claimAssistanceLabel}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
