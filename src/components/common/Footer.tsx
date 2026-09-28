import React, { useState } from 'react';
import { Shield, Phone, Mail, MapPin, ExternalLink, ArrowUp } from 'lucide-react';
import { agentConfig } from '../../data/agentConfig';
import { Modal } from './Modal';

export const Footer: React.FC = () => {
  const [legalModal, setLegalModal] = useState<'privacy' | 'terms' | 'disclaimer' | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Sruthy', href: '#about' },
    { label: 'Insurance Solutions', href: '#solutions' },
    { label: 'Find Your Plan', href: '#find-your-plan' },
    { label: 'Premium Calculator', href: '#calculator' },
    { label: 'Claim Assistance', href: '#claim-assistance' },
    { label: 'Renewal Support', href: '#renewal-support' },
    { label: 'Knowledge Hub', href: '#knowledge-hub' },
    { label: 'Client Reviews', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ];

  const serviceLinks = [
    { label: 'Term Life Insurance', href: '#solutions' },
    { label: 'Family Health Floater', href: '#solutions' },
    { label: 'Child Education Funds', href: '#solutions' },
    { label: 'Retirement & Annuities', href: '#solutions' },
    { label: 'Motor & Asset Cover', href: '#solutions' },
    { label: 'Wealth & Investment Plans', href: '#solutions' },
  ];

  return (
    <>
      <footer className="bg-[#060d19] text-slate-300 border-t border-[#d1b164]/20 pt-16 pb-12 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
            {/* Brand Column */}
            <div className="lg:col-span-4 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#0f1f38] border border-[#d1b164]/40 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-[#d1b164]" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold tracking-widest text-[#fafaf8]">
                    {agentConfig.name}
                  </h3>
                  <p className="text-[11px] uppercase tracking-wider text-[#d1b164]">
                    {agentConfig.designation}
                  </p>
                </div>
              </div>

              <p className="text-sm text-slate-400 leading-relaxed pr-4">
                Personalized, human-centered insurance guidance tailored to your lifestyle, family milestones, and financial security. Trusted independent advisory built on clarity and transparency.
              </p>

              {/* Social Placeholders */}
              <div className="pt-2 flex items-center gap-3">
                <a
                  href={agentConfig.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-[#0f1f38] border border-slate-700/60 hover:border-[#d1b164] hover:text-[#d1b164] flex items-center justify-center text-xs text-slate-300 transition-colors"
                  aria-label="LinkedIn"
                >
                  IN
                </a>
                <a
                  href={agentConfig.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-[#0f1f38] border border-slate-700/60 hover:border-[#d1b164] hover:text-[#d1b164] flex items-center justify-center text-xs text-slate-300 transition-colors"
                  aria-label="Instagram"
                >
                  IG
                </a>
                <a
                  href={agentConfig.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-[#0f1f38] border border-slate-700/60 hover:border-[#d1b164] hover:text-[#d1b164] flex items-center justify-center text-xs text-slate-300 transition-colors"
                  aria-label="Facebook"
                >
                  FB
                </a>
                <a
                  href={`https://wa.me/${agentConfig.whatsapp.number}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-[#0f1f38] border border-slate-700/60 hover:border-emerald-400 hover:text-emerald-400 flex items-center justify-center text-xs text-slate-300 transition-colors"
                  aria-label="WhatsApp"
                >
                  WA
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-2 space-y-3">
              <h4 className="text-xs uppercase tracking-widest text-[#d1b164] font-bold">
                Quick Navigation
              </h4>
              <ul className="space-y-2 text-sm">
                {navLinks.slice(0, 6).map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-slate-400 hover:text-white hover:underline underline-offset-4 transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solutions Links */}
            <div className="lg:col-span-3 space-y-3">
              <h4 className="text-xs uppercase tracking-widest text-[#d1b164] font-bold">
                Advisory Solutions
              </h4>
              <ul className="space-y-2 text-sm">
                {serviceLinks.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-slate-400 hover:text-white hover:underline underline-offset-4 transition-colors flex items-center gap-1.5"
                    >
                      <span>{item.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Details */}
            <div className="lg:col-span-3 space-y-3">
              <h4 className="text-xs uppercase tracking-widest text-[#d1b164] font-bold">
                Advisor Contact
              </h4>
              <div className="space-y-2.5 text-sm text-slate-400">
                <a
                  href={`mailto:${agentConfig.email}`}
                  className="flex items-center gap-2.5 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#d1b164] shrink-0" />
                  <span>{agentConfig.email}</span>
                </a>
                <a
                  href={`tel:${agentConfig.phones.primary}`}
                  className="flex items-center gap-2.5 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#d1b164] shrink-0" />
                  <span>{agentConfig.phones.displayPrimary}</span>
                </a>
                <a
                  href={`tel:${agentConfig.phones.secondary}`}
                  className="flex items-center gap-2.5 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#d1b164] shrink-0" />
                  <span>{agentConfig.phones.displaySecondary}</span>
                </a>
                <div className="flex items-start gap-2.5 pt-1 text-xs text-slate-400">
                  <MapPin className="w-4 h-4 text-[#d1b164] shrink-0 mt-0.5" />
                  <span>
                    {agentConfig.location.address}, {agentConfig.location.city}, {agentConfig.location.state}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Legal Disclaimer Box as explicitly mandated */}
          <div className="py-6 border-b border-slate-800 text-xs text-slate-400 leading-relaxed">
            <p className="font-semibold text-slate-300 mb-1 flex items-center gap-1.5">
              <span>Important Regulatory &amp; Informational Disclaimer:</span>
            </p>
            <p>{agentConfig.disclaimer}</p>
          </div>

          {/* Bottom Bar */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
            <p>
              &copy; {new Date().getFullYear()} {agentConfig.name} — {agentConfig.designation}. All rights reserved.
            </p>

            <div className="flex items-center gap-6">
              <button
                onClick={() => setLegalModal('privacy')}
                className="hover:text-slate-200 transition-colors"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => setLegalModal('terms')}
                className="hover:text-slate-200 transition-colors"
              >
                Terms &amp; Conditions
              </button>
              <button
                onClick={() => setLegalModal('disclaimer')}
                className="hover:text-slate-200 transition-colors"
              >
                Advisory Scope
              </button>
              <button
                onClick={scrollToTop}
                className="p-2 rounded-lg bg-[#0f1f38] hover:bg-[#182d4d] text-slate-300 hover:text-white transition-colors flex items-center gap-1"
                aria-label="Back to top"
              >
                <ArrowUp className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Top</span>
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Legal Information Modals */}
      <Modal
        isOpen={legalModal !== null}
        onClose={() => setLegalModal(null)}
        title={
          legalModal === 'privacy'
            ? 'Privacy Policy'
            : legalModal === 'terms'
            ? 'Terms & Conditions'
            : 'Advisory Scope & Disclaimer'
        }
        subtitle="Sruthy Private Insurance Advisory"
      >
        <div className="space-y-4 text-sm text-slate-300 leading-relaxed">
          {legalModal === 'privacy' && (
            <>
              <p>
                Your privacy is paramount. When you submit information through our consultation request forms, calculators, or chatbot, your data is handled strictly for assessing protection requirements and scheduling advisory sessions with Sruthy.
              </p>
              <p>
                We do not sell, lease, or monetize personal phone numbers or email addresses to third-party telemarketers. Any health information shared during underwriting discussions is held in the strictest professional confidence.
              </p>
            </>
          )}

          {legalModal === 'terms' && (
            <>
              <p>
                By utilizing this advisory portal, you acknowledge that insurance decisions should be made following careful review of official policy documents, terms, exclusions, and waiting periods published by respective underwriting insurers.
              </p>
              <p>
                Premium figures generated on calculator widgets are illustrative estimates. Final premiums and policy acceptance remain subject to underwriting approval by authorized insurance carriers.
              </p>
            </>
          )}

          {legalModal === 'disclaimer' && (
            <>
              <p>{agentConfig.disclaimer}</p>
              <p className="mt-2">
                Sruthy acts in an advisory capacity assisting clients with risk identification, comparative product evaluation, proposal submission, and claim coordination.
              </p>
            </>
          )}
        </div>
      </Modal>
    </>
  );
};
