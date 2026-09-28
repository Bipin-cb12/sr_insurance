import React from 'react';
import { motion } from 'framer-motion';
import {
  UserCheck,
  BookOpen,
  ShieldCheck,
  Compass,
  BellRing,
  PhoneCall,
  Sparkles,
} from 'lucide-react';
import { whyChoosePoints } from '../../data/insuranceData';

export const WhyChoose: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'UserCheck':
        return <UserCheck className="w-6 h-6 text-[#d1b164]" />;
      case 'BookOpen':
        return <BookOpen className="w-6 h-6 text-[#d1b164]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-[#d1b164]" />;
      case 'Compass':
        return <Compass className="w-6 h-6 text-[#d1b164]" />;
      case 'BellRing':
        return <BellRing className="w-6 h-6 text-[#d1b164]" />;
      case 'PhoneCall':
        return <PhoneCall className="w-6 h-6 text-[#d1b164]" />;
      default:
        return <ShieldCheck className="w-6 h-6 text-[#d1b164]" />;
    }
  };

  return (
    <section className="py-20 sm:py-28 bg-[#060d19] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#182d4d] border border-[#d1b164]/30 text-[#d1b164] text-xs font-semibold uppercase tracking-[0.2em] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Advisory Distinction</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#fafaf8] tracking-tight">
            Why Choose <span className="font-normal italic text-[#d1b164]">Sruthy</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed">
            The difference between buying a transactional policy online and partnering with a dedicated, client-aligned insurance advisor.
          </p>
        </div>

        {/* 6 Value Proposition Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyChoosePoints.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{ y: -6 }}
              className="p-8 rounded-3xl bg-[#0a1426] border border-slate-800 hover:border-[#d1b164]/50 transition-all duration-300 shadow-xl flex flex-col justify-between group"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-[#0f1f38] border border-[#d1b164]/30 flex items-center justify-center mb-6 group-hover:scale-105 group-hover:bg-[#182d4d] transition-all duration-300 shadow-inner">
                  {getIcon(item.icon)}
                </div>
                <h3 className="font-serif text-2xl font-normal text-[#fafaf8] mb-1 group-hover:text-[#d1b164] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs uppercase tracking-wider text-[#d1b164]/90 font-medium mb-3">
                  {item.tagline}
                </p>
                <p className="text-sm text-slate-300 leading-relaxed font-light">
                  {item.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                <span className="text-[#d1b164] font-medium">Sruthy Standard</span>
                <span className="font-mono text-[11px] text-slate-400">0{idx + 1}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
