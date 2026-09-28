import React, { useState } from 'react';
import { Download, MessageCircle, Phone, Mail, Share2, Check, QrCode } from 'lucide-react';
import { agentConfig } from '../../data/agentConfig';
import { downloadVCard } from '../../utils/vcard';

interface DigitalBusinessCardProps {
  onNotify?: (title: string, message?: string) => void;
}

export const DigitalBusinessCard: React.FC<DigitalBusinessCardProps> = ({ onNotify }) => {
  const [copied, setCopied] = useState(false);
  const [showQR, setShowQR] = useState(false);

  const handleShare = async () => {
    const shareData = {
      title: `${agentConfig.name} - ${agentConfig.designation}`,
      text: 'Connect with Sruthy for personalized insurance guidance and financial protection planning.',
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch {
        // User cancelled or not supported
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      if (onNotify) onNotify('Link Copied', 'Advisor profile link copied to clipboard.');
      setTimeout(() => setCopied(false), 3000);
    }
  };

  const handleSaveContact = () => {
    downloadVCard();
    if (onNotify) {
      onNotify('Contact Downloaded', 'Sruthy_Insurance_Advisor.vcf has been saved to your device.');
    }
  };

  return (
    <section className="py-14 bg-gradient-to-b from-[#060d19] to-[#0a1426] text-white border-y border-[#d1b164]/20 relative overflow-hidden">
      {/* Decorative accent lines */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#d1b164]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-[#0f1f38]/80 border border-[#d1b164]/30 rounded-3xl p-6 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Card Info */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#182d4d] border border-[#d1b164]/30 text-[#d1b164] text-xs font-semibold uppercase tracking-wider">
                <QrCode className="w-3.5 h-3.5" />
                <span>Digital Business Card</span>
              </div>

              <h3 className="font-serif text-3xl sm:text-4xl text-[#fafaf8] font-normal tracking-wide">
                Save Sruthy's Direct Contact
              </h3>

              <p className="text-slate-300 text-sm leading-relaxed max-w-xl">
                Store Sruthy's verified advisor details directly into your smartphone address book. Access instant support for emergency claims, renewal inquiries, and policy reviews anytime.
              </p>

              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300">
                <div className="flex items-center gap-2.5">
                  <div className="w-2 h-2 rounded-full bg-[#d1b164]" />
                  <span>Immediate VCard Phonebook Sync</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-2 h-2 rounded-full bg-[#d1b164]" />
                  <span>Direct WhatsApp Priority Desk</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-2 h-2 rounded-full bg-[#d1b164]" />
                  <span>Prompt Claim Intimation Line</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-2 h-2 rounded-full bg-[#d1b164]" />
                  <span>Confidential Advisory Services</span>
                </div>
              </div>
            </div>

            {/* Right Buttons / Actions */}
            <div className="lg:col-span-5 flex flex-col gap-3">
              {/* Primary Download Button */}
              <button
                onClick={handleSaveContact}
                className="w-full flex items-center justify-center gap-3 py-3.5 px-6 rounded-2xl bg-gradient-to-r from-[#dfc88e] via-[#d1b164] to-[#c29b41] text-[#0a1426] font-semibold text-sm uppercase tracking-wider hover:brightness-105 transition-all shadow-[0_8px_25px_rgba(209,177,100,0.35)] hover:-translate-y-0.5 active:translate-y-0"
              >
                <Download className="w-5 h-5" />
                <span>Save Contact to Phone (.vcf)</span>
              </button>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1">
                {/* WhatsApp */}
                <a
                  href={`https://wa.me/${agentConfig.whatsapp.number}?text=${encodeURIComponent(agentConfig.whatsapp.prefilledMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center gap-1.5 p-3 rounded-xl bg-[#182d4d]/70 hover:bg-[#25406b] border border-slate-700/60 text-slate-200 hover:text-white transition-all text-xs"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span className="font-medium">WhatsApp</span>
                </a>

                {/* Call */}
                <a
                  href={`tel:${agentConfig.phones.primary}`}
                  className="flex flex-col items-center justify-center gap-1.5 p-3 rounded-xl bg-[#182d4d]/70 hover:bg-[#25406b] border border-slate-700/60 text-slate-200 hover:text-white transition-all text-xs"
                >
                  <Phone className="w-4 h-4 text-[#d1b164]" />
                  <span className="font-medium">Call</span>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${agentConfig.email}?subject=Insurance Advisory Inquiry`}
                  className="flex flex-col items-center justify-center gap-1.5 p-3 rounded-xl bg-[#182d4d]/70 hover:bg-[#25406b] border border-slate-700/60 text-slate-200 hover:text-white transition-all text-xs"
                >
                  <Mail className="w-4 h-4 text-sky-400" />
                  <span className="font-medium">Email</span>
                </a>

                {/* Share Profile */}
                <button
                  onClick={handleShare}
                  className="flex flex-col items-center justify-center gap-1.5 p-3 rounded-xl bg-[#182d4d]/70 hover:bg-[#25406b] border border-slate-700/60 text-slate-200 hover:text-white transition-all text-xs"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4 text-[#dfc88e]" />}
                  <span className="font-medium">{copied ? 'Copied!' : 'Share'}</span>
                </button>
              </div>

              {/* QR Toggle button */}
              <div className="pt-2 text-center">
                <button
                  onClick={() => setShowQR(!showQR)}
                  className="text-xs text-slate-400 hover:text-[#d1b164] transition-colors underline underline-offset-4 inline-flex items-center gap-1.5"
                >
                  <QrCode className="w-3.5 h-3.5" />
                  <span>{showQR ? 'Hide Digital QR Card' : 'Show Instant Scan QR'}</span>
                </button>

                {showQR && (
                  <div className="mt-3 p-4 bg-white rounded-2xl inline-block shadow-lg mx-auto">
                    {/* Clean SVG QR mockup representation */}
                    <div className="w-36 h-36 border-2 border-dashed border-slate-300 rounded-lg flex flex-col items-center justify-center p-2 text-center bg-slate-50">
                      <QrCode className="w-16 h-16 text-[#0a1426] mb-1" />
                      <p className="text-[10px] text-slate-700 font-semibold uppercase tracking-wider">Sruthy Advisor</p>
                      <p className="text-[9px] text-slate-500">Scan to save</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
