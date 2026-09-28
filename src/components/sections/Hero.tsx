import React from 'react';
import { motion } from 'framer-motion';
import { Shield, ArrowRight, MessageCircle, CheckCircle, Award, Users, FileCheck } from 'lucide-react';
import { agentConfig } from '../../data/agentConfig';

interface HeroProps {
  onOpenConsultation: () => void;
  onExploreSolutions: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation, onExploreSolutions }) => {
  return (
    <section id="home" className="relative pt-28 sm:pt-36 pb-16 lg:pb-24 bg-[#0a1426] text-white overflow-hidden">
      {/* Background Subtle Gradient Accents */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 right-10 w-[550px] h-[550px] bg-[#d1b164]/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 -left-24 w-[400px] h-[400px] bg-[#182d4d]/40 rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-[radial-gradient(#d1b164_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.03]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Copy & Actions */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-6 sm:space-y-8"
          >
            {/* Small Label */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#0f1f38] border border-[#d1b164]/30 shadow-inner">
              <span className="w-2 h-2 rounded-full bg-[#d1b164] animate-pulse" />
              <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#d1b164]">
                PERSONAL INSURANCE ADVISORY
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-light tracking-tight text-[#fafaf8] leading-[1.12]">
              Protect Your Future.{' '}
              <span className="block font-normal italic text-[#d1b164]">
                Secure What Matters Most.
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed max-w-2xl">
              Personalized insurance guidance designed around your family, health, lifestyle, and financial goals. Unbiased, independent protection consulting without high-pressure sales jargon.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#0a1426] bg-gradient-to-r from-[#dfc88e] via-[#d1b164] to-[#c29b41] hover:brightness-105 transition-all duration-300 shadow-[0_8px_30px_rgba(209,177,100,0.35)] hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Get a Free Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onExploreSolutions}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-full text-xs sm:text-sm font-medium tracking-wide text-slate-200 bg-[#0f1f38]/90 hover:bg-[#182d4d] border border-slate-700/80 hover:border-[#d1b164]/50 transition-all duration-300"
              >
                <span>Explore Insurance Solutions</span>
              </button>

              {/* WhatsApp CTA */}
              <a
                href={`https://wa.me/${agentConfig.whatsapp.number}?text=${encodeURIComponent(agentConfig.whatsapp.prefilledMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full text-xs font-semibold text-emerald-300 bg-emerald-950/40 border border-emerald-500/30 hover:bg-emerald-900/40 transition-colors"
                title="Direct WhatsApp Chat"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp Advisor</span>
              </a>
            </div>

            {/* Micro reassurance badges */}
            <div className="flex flex-wrap items-center gap-6 pt-4 text-xs text-slate-400 border-t border-slate-800/80">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#d1b164]" />
                <span>100% Independent Guidance</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#d1b164]" />
                <span>Zero Obligation Review</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#d1b164]" />
                <span>Dedicated Claim Support</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Dummy Profile Image with Luxury Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer Decorative Gold Rim */}
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-[#d1b164]/30 via-transparent to-[#dfc88e]/20 blur-sm pointer-events-none" />

              {/* Image Frame */}
              <div className="relative rounded-3xl overflow-hidden border-2 border-[#d1b164]/40 bg-[#0f1f38] shadow-[0_25px_60px_rgba(0,0,0,0.6)]">
                {/* Agent Photo (Dummy placeholder easily swappable in src/data/agentConfig.ts) */}
                <img
                  src={agentConfig.profileImage.url}
                  alt={agentConfig.profileImage.alt}
                  className="w-full h-[460px] sm:h-[520px] object-cover object-top hover:scale-[1.02] transition-transform duration-700"
                  loading="eager"
                />

                {/* Subtle Image Bottom Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1426] via-transparent to-transparent opacity-70" />

                {/* Identity Overlay on Image Bottom */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-[#0a1426]/85 backdrop-blur-md border border-[#d1b164]/30 shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-serif text-xl font-bold text-[#fafaf8] tracking-wide">
                        {agentConfig.name}
                      </h4>
                      <p className="text-[11px] text-[#d1b164] uppercase tracking-wider font-medium">
                        {agentConfig.designation}
                      </p>
                    </div>
                    <span className="text-[10px] px-2.5 py-1 rounded-full bg-[#182d4d] text-slate-300 border border-slate-700">
                      Private Advisory
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Trust Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute -top-6 -right-4 sm:-right-6 bg-[#0a1426]/95 border border-[#d1b164]/40 rounded-2xl p-4 shadow-2xl backdrop-blur-md max-w-[220px]"
              >
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#182d4d] border border-[#d1b164]/40 flex items-center justify-center shrink-0 text-[#d1b164]">
                    <Shield className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="text-xs font-semibold text-white tracking-wide">
                      Personalized Guidance
                    </h5>
                    <p className="text-[11px] text-slate-300 mt-0.5 leading-snug">
                      From choosing the right plan to ongoing support.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Below Hero: Subtle Editable Statistics / Demo Metrics Strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-16 sm:mt-20 pt-8 border-t border-slate-800"
        >
          <div className="flex items-center justify-between mb-4">
            <span className="text-[11px] uppercase tracking-widest text-[#d1b164] font-semibold">
              Advisory Track Record
            </span>
            <span className="text-[10px] text-slate-500 italic">
              * Editable demo metrics for demonstration
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {/* Metric 1 */}
            <div className="p-4 rounded-2xl bg-[#0f1f38]/50 border border-slate-800 hover:border-[#d1b164]/30 transition-colors">
              <div className="flex items-center gap-3">
                <Award className="w-6 h-6 text-[#d1b164]" />
                <div>
                  <div className="font-serif text-2xl sm:text-3xl font-semibold text-white">
                    {agentConfig.metrics.experienceYears}
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5">
                    {agentConfig.metrics.experienceLabel}
                  </div>
                </div>
              </div>
            </div>

            {/* Metric 2 */}
            <div className="p-4 rounded-2xl bg-[#0f1f38]/50 border border-slate-800 hover:border-[#d1b164]/30 transition-colors">
              <div className="flex items-center gap-3">
                <Users className="w-6 h-6 text-[#d1b164]" />
                <div>
                  <div className="font-serif text-2xl sm:text-3xl font-semibold text-white">
                    {agentConfig.metrics.familiesGuided}
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5">
                    {agentConfig.metrics.familiesLabel}
                  </div>
                </div>
              </div>
            </div>

            {/* Metric 3 */}
            <div className="p-4 rounded-2xl bg-[#0f1f38]/50 border border-slate-800 hover:border-[#d1b164]/30 transition-colors">
              <div className="flex items-center gap-3">
                <FileCheck className="w-6 h-6 text-[#d1b164]" />
                <div>
                  <div className="font-serif text-2xl sm:text-3xl font-semibold text-white">
                    {agentConfig.metrics.policiesAssisted}
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5">
                    {agentConfig.metrics.policiesLabel}
                  </div>
                </div>
              </div>
            </div>

            {/* Metric 4 */}
            <div className="p-4 rounded-2xl bg-[#0f1f38]/50 border border-slate-800 hover:border-[#d1b164]/30 transition-colors">
              <div className="flex items-center gap-3">
                <Shield className="w-6 h-6 text-[#d1b164]" />
                <div>
                  <div className="font-serif text-2xl sm:text-3xl font-semibold text-white">
                    {agentConfig.metrics.claimAssistanceRate}
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5">
                    {agentConfig.metrics.claimAssistanceLabel}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
