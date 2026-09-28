import React from 'react';
import { Phone, Mail, MessageCircle, Calendar, MapPin, ExternalLink, Clock } from 'lucide-react';
import { agentConfig } from '../../data/agentConfig';

interface ContactSectionProps {
  onBookConsultation: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onBookConsultation }) => {
  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#060d19] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#182d4d] border border-[#d1b164]/30 text-[#d1b164] text-xs font-semibold uppercase tracking-[0.2em] mb-3">
            <Phone className="w-3.5 h-3.5" />
            <span>Direct Advisory Line</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#fafaf8] tracking-tight">
            Connect with <span className="font-normal italic text-[#d1b164]">Sruthy</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed">
            Reach out via phone, WhatsApp, email, or schedule a formal review at your convenience.
          </p>
        </div>

        {/* 2-Column Grid: Contact Information & Interactive Map Placeholder */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Left Column: Contact Cards & Quick CTAs (6 cols) */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            <div className="bg-[#0a1426] border border-[#d1b164]/30 rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
              <div>
                <span className="text-[11px] uppercase tracking-widest text-[#d1b164] font-semibold">
                  Personal Advisor Profile
                </span>
                <h3 className="font-serif text-3xl text-white font-medium mt-1">
                  {agentConfig.name}
                </h3>
                <p className="text-xs text-slate-300 uppercase tracking-wider mt-0.5 font-medium">
                  {agentConfig.designation}
                </p>
              </div>

              {/* Direct Info List */}
              <div className="space-y-4 pt-2 border-t border-slate-800 text-xs sm:text-sm">
                {/* Primary Phone */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-[#0f1f38] border border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#182d4d] text-[#d1b164] flex items-center justify-center">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[11px] text-slate-400 block">Primary Direct Line</span>
                      <span className="font-semibold text-white">{agentConfig.phones.displayPrimary}</span>
                    </div>
                  </div>
                  <a
                    href={`tel:${agentConfig.phones.primary}`}
                    className="px-3 py-1.5 rounded-lg bg-[#d1b164] text-[#0a1426] font-semibold text-xs hover:bg-[#dfc88e] transition-colors"
                  >
                    Call
                  </a>
                </div>

                {/* Secondary Phone */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-[#0f1f38] border border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#182d4d] text-[#d1b164] flex items-center justify-center">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[11px] text-slate-400 block">Alternate Advisory Desk</span>
                      <span className="font-semibold text-white">{agentConfig.phones.displaySecondary}</span>
                    </div>
                  </div>
                  <a
                    href={`tel:${agentConfig.phones.secondary}`}
                    className="px-3 py-1.5 rounded-lg bg-[#182d4d] text-slate-200 border border-slate-700 font-semibold text-xs hover:bg-[#25406b] transition-colors"
                  >
                    Call
                  </a>
                </div>

                {/* Email */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-[#0f1f38] border border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#182d4d] text-sky-400 flex items-center justify-center">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[11px] text-slate-400 block">Official Advisory Email</span>
                      <span className="font-semibold text-white">{agentConfig.email}</span>
                    </div>
                  </div>
                  <a
                    href={`mailto:${agentConfig.email}`}
                    className="px-3 py-1.5 rounded-lg bg-[#182d4d] text-slate-200 border border-slate-700 font-semibold text-xs hover:bg-[#25406b] transition-colors"
                  >
                    Email
                  </a>
                </div>

                {/* Working Hours */}
                <div className="flex items-center gap-3 p-3 rounded-xl bg-[#0f1f38] border border-slate-800 text-xs text-slate-300">
                  <Clock className="w-4 h-4 text-[#d1b164] shrink-0" />
                  <span>{agentConfig.location.officeHours}</span>
                </div>
              </div>

              {/* 4 Action Buttons Grid */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <a
                  href={`tel:${agentConfig.phones.primary}`}
                  className="py-3 px-4 rounded-xl bg-gradient-to-r from-[#dfc88e] to-[#c29b41] text-[#0a1426] text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:brightness-105 transition-all shadow-md"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Now</span>
                </a>

                <a
                  href={`https://wa.me/${agentConfig.whatsapp.number}?text=${encodeURIComponent(agentConfig.whatsapp.prefilledMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>

                <a
                  href={`mailto:${agentConfig.email}?subject=Insurance Consultation Request`}
                  className="py-3 px-4 rounded-xl bg-[#182d4d] hover:bg-[#25406b] border border-slate-700 text-slate-200 text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-all"
                >
                  <Mail className="w-3.5 h-3.5 text-sky-400" />
                  <span>Email</span>
                </a>

                <button
                  onClick={onBookConsultation}
                  className="py-3 px-4 rounded-xl bg-[#182d4d] hover:bg-[#25406b] border border-[#d1b164]/40 text-[#d1b164] text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-all"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book Consult</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Office Location & Map Placeholder (6 cols) */}
          <div className="lg:col-span-6 bg-[#0a1426] border border-[#d1b164]/30 rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col justify-between space-y-6">
            <div>
              <span className="text-[11px] uppercase tracking-widest text-[#d1b164] font-semibold">
                Office &amp; Meeting Concierge
              </span>
              <h3 className="font-serif text-2xl text-white font-medium mt-1">
                Advisory Chamber
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Clients are welcomed by prior appointment for private portfolio discussions.
              </p>

              <div className="mt-4 p-4 rounded-2xl bg-[#0f1f38] border border-slate-800 text-xs text-slate-300 space-y-1">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#d1b164] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium text-white block">{agentConfig.location.address}</span>
                    <span>{agentConfig.location.city}, {agentConfig.location.state}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder Element (Ready to swap with actual embed or coordinates) */}
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-[#0f1f38] h-64 flex flex-col items-center justify-center text-center p-6 group">
              {/* Subtle map grid vector background */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#182d4d_1px,transparent_1px),linear-gradient(to_bottom,#182d4d_1px,transparent_1px)] bg-[size:24px_24px] opacity-40" />

              <div className="relative z-10 space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-[#0a1426] border border-[#d1b164]/40 text-[#d1b164] flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-serif text-lg font-medium text-white">
                    {agentConfig.location.city} Advisory Office
                  </h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    M.G. Road Commercial Corridor, Kochi
                  </p>
                  <p className="text-[10px] text-[#d1b164] mt-1 font-mono">
                    * Interactive Map Placeholder (Configurable in agentConfig.ts)
                  </p>
                </div>
                <a
                  href={agentConfig.location.mapPlaceholderUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#182d4d] hover:bg-[#25406b] border border-slate-700 text-xs text-slate-200 transition-colors"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3 text-[#d1b164]" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
