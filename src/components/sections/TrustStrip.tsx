import React from 'react';
import { UserCheck, ShieldCheck, Award, HeartHandshake, Clock } from 'lucide-react';
import { trustStripPoints } from '../../data/insuranceData';

export const TrustStrip: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    UserCheck: <UserCheck className="w-5 h-5 text-[#d1b164]" />,
    ShieldCheck: <ShieldCheck className="w-5 h-5 text-[#d1b164]" />,
    Award: <Award className="w-5 h-5 text-[#d1b164]" />,
    FileHeart: <HeartHandshake className="w-5 h-5 text-[#d1b164]" />,
    Clock: <Clock className="w-5 h-5 text-[#d1b164]" />,
  };

  return (
    <section className="py-12 bg-[#060d19] border-y border-[#d1b164]/20 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <p className="text-xs uppercase tracking-[0.2em] text-[#d1b164] font-semibold mb-2">
            The Advisory Commitment
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#fafaf8] font-normal">
            Insurance guidance built around people, not just policies.
          </h2>
        </div>

        {/* 5 Trust Points Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {trustStripPoints.map((point, idx) => (
            <div
              key={point.title}
              className="group p-5 rounded-2xl bg-[#0a1426]/80 border border-slate-800 hover:border-[#d1b164]/50 transition-all duration-300 hover:-translate-y-1 shadow-md"
            >
              <div className="w-10 h-10 rounded-xl bg-[#182d4d]/60 border border-[#d1b164]/20 flex items-center justify-center mb-4 group-hover:bg-[#182d4d] group-hover:scale-110 transition-all duration-300">
                {iconMap[point.icon] || <ShieldCheck className="w-5 h-5 text-[#d1b164]" />}
              </div>
              <h3 className="font-serif text-lg font-medium text-white mb-1.5 group-hover:text-[#d1b164] transition-colors">
                {point.title}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
