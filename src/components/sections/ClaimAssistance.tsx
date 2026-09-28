import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FileHeart,
  PhoneCall,
  CheckSquare,
  Square,
  FileCheck2,
  Clock,
  ArrowRight,
  ShieldAlert,
  Send,
  Download,
} from 'lucide-react';
import { claimRoadmapSteps, requiredClaimDocs } from '../../data/insuranceData';
import { agentConfig } from '../../data/agentConfig';
import { Modal } from '../common/Modal';
import { saveClaim } from '../../utils/storage';

interface ClaimAssistanceProps {
  onNotify?: (title: string, message?: string) => void;
}

export const ClaimAssistance: React.FC<ClaimAssistanceProps> = ({ onNotify }) => {
  const [checkedDocs, setCheckedDocs] = useState<Record<number, boolean>>({});
  const [isClaimModalOpen, setIsClaimModalOpen] = useState(false);

  // Form State
  const [claimName, setClaimName] = useState('');
  const [claimPhone, setClaimPhone] = useState('');
  const [policyNum, setPolicyNum] = useState('');
  const [insurerName, setInsurerName] = useState('');
  const [claimType, setClaimType] = useState<'Hospitalization / Health' | 'Life / Critical Illness' | 'Motor / Accident' | 'Other'>('Hospitalization / Health');
  const [claimDesc, setClaimDesc] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const toggleCheck = (index: number) => {
    setCheckedDocs((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const handleDownloadChecklist = () => {
    const content = [
      `CLAIM DOCUMENT CHECKLIST - SRUTHY INSURANCE ADVISORY`,
      `Emergency Contact: ${agentConfig.phones.primary} / ${agentConfig.email}`,
      `Generated on: ${new Date().toLocaleDateString()}`,
      `----------------------------------------------------`,
      ...requiredClaimDocs.map(
        (doc, i) => `[ ${checkedDocs[i] ? 'X' : ' '} ] ${doc.name} (${doc.requiredFor})`
      ),
      `----------------------------------------------------`,
      `Disclaimer: For emergency hospitalization, inform Sruthy within 24 hours for seamless TPA cashless support.`,
    ].join('\r\n');

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Sruthy_Claim_Document_Checklist.txt`;
    link.click();
    URL.revokeObjectURL(url);

    if (onNotify) {
      onNotify('Checklist Downloaded', 'Claim document checklist text saved to your device.');
    }
  };

  const handleSubmitClaim = (e: React.FormEvent) => {
    e.preventDefault();
    if (!claimName || !claimPhone) {
      if (onNotify) onNotify('Required Fields Missing', 'Please provide your full name and contact number.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      const readyDocs = Object.keys(checkedDocs)
        .filter((k) => checkedDocs[Number(k)])
        .map((k) => requiredClaimDocs[Number(k)].name);

      saveClaim({
        name: claimName,
        phone: claimPhone,
        policyNumber: policyNum || 'Pending Retrieval',
        insurerName: insurerName || 'Undisclosed',
        claimType,
        description: claimDesc || 'Standard claim filing assistance requested.',
        documentsReady: readyDocs,
      });

      setIsSubmitting(false);
      setIsClaimModalOpen(false);
      setClaimName('');
      setClaimPhone('');
      setPolicyNum('');
      setClaimDesc('');

      if (onNotify) {
        onNotify(
          'Claim Assistance Request Registered',
          `Thank you, ${claimName}. Sruthy will contact you urgently at ${claimPhone} to initiate filing.`
        );
      }
    }, 600);
  };

  return (
    <section id="claim-assistance" className="py-20 sm:py-28 bg-[#fafaf8] text-[#1e293b] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0a1426]/5 border border-[#d1b164]/30 text-[#a98031] text-xs font-semibold uppercase tracking-[0.2em] mb-3">
            <FileHeart className="w-3.5 h-3.5" />
            <span>Dedicated Advocacy</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#0a1426] tracking-tight">
            Need Help With a <span className="font-normal italic text-[#a98031]">Claim?</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
            The true test of an insurance advisor happens at the moment of claim. We stand shoulder-to-shoulder with your family from intimation to final settlement.
          </p>
        </div>

        {/* 5-Step Process Roadmap Cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-16">
          {claimRoadmapSteps.map((s) => (
            <div
              key={s.step}
              className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-[#d1b164] transition-all duration-300 hover:shadow-lg flex flex-col justify-between"
            >
              <div>
                <span className="w-8 h-8 rounded-full bg-[#0a1426] text-[#d1b164] font-mono text-xs font-bold flex items-center justify-center mb-3">
                  0{s.step}
                </span>
                <h4 className="font-semibold text-sm text-[#0a1426] mb-2 leading-snug">
                  {s.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed font-light">
                  {s.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Split Grid: Interactive Document Checklist & Emergency CTA Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Document Checklist UI (7 Cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
              <div>
                <h3 className="font-serif text-2xl text-[#0a1426] font-medium">
                  Document Readiness Checklist
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Click to check off documents you currently have assembled.
                </p>
              </div>
              <button
                onClick={handleDownloadChecklist}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-[#0a1426] bg-[#d1b164] hover:bg-[#dfc88e] transition-colors uppercase tracking-wider self-start sm:self-auto"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Save Checklist</span>
              </button>
            </div>

            <div className="space-y-2.5">
              {requiredClaimDocs.map((doc, idx) => {
                const isChecked = !!checkedDocs[idx];
                return (
                  <div
                    key={doc.name}
                    onClick={() => toggleCheck(idx)}
                    className={`p-3.5 rounded-xl border text-xs cursor-pointer transition-all duration-200 flex items-center justify-between ${
                      isChecked
                        ? 'bg-amber-50/60 border-[#d1b164] text-slate-900 font-medium'
                        : 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-700'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {isChecked ? (
                        <CheckSquare className="w-4 h-4 text-[#a98031] shrink-0" />
                      ) : (
                        <Square className="w-4 h-4 text-slate-400 shrink-0" />
                      )}
                      <span className={isChecked ? 'line-through text-slate-500' : ''}>
                        {doc.name}
                      </span>
                    </div>
                    <span className="text-[10px] px-2 py-0.5 rounded-md bg-white border border-slate-200 text-slate-600 shrink-0 ml-2">
                      {doc.requiredFor}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="pt-2 text-xs text-slate-500 flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#a98031]" />
              <span>
                Missing a specific doctor slip or hospital note? Sruthy helps retrieve missing paperwork from hospital medical records departments.
              </span>
            </div>
          </div>

          {/* Emergency Contact & Request CTA Card (5 Cols) */}
          <div className="lg:col-span-5 bg-[#0a1426] text-white rounded-3xl p-6 sm:p-8 border border-[#d1b164]/40 shadow-2xl space-y-6">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-widest text-[#d1b164] font-semibold">
                Priority Claim Assistance
              </span>
              <h3 className="font-serif text-3xl font-light text-[#fafaf8]">
                Hospitalized or Faced with a Loss?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                Do not wait. Even if your policy was not originally purchased through Sruthy, we offer independent claim coordination for our registered client families.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#0f1f38] border border-slate-700 space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-400">Emergency Call Hotline:</span>
                <span className="text-[#d1b164] font-semibold">{agentConfig.phones.displayPrimary}</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-400">WhatsApp Intimation:</span>
                <span className="text-emerald-400 font-semibold">{agentConfig.phones.displayPrimary}</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-400">Average Intimation Window:</span>
                <span className="text-slate-200">Within 24 Hours</span>
              </div>
            </div>

            <div className="space-y-3">
              <button
                onClick={() => setIsClaimModalOpen(true)}
                className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-[#dfc88e] via-[#d1b164] to-[#c29b41] text-[#0a1426] font-bold text-xs uppercase tracking-wider hover:brightness-105 transition-all shadow-lg flex items-center justify-center gap-2"
              >
                <span>Request Claim Assistance</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`tel:${agentConfig.phones.primary}`}
                className="w-full py-3 px-6 rounded-2xl bg-[#182d4d] hover:bg-[#25406b] border border-slate-700 text-slate-200 text-xs font-semibold uppercase tracking-wider transition-all flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-4 h-4 text-[#d1b164]" />
                <span>Call Emergency Helpline</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Claim Assistance Request Modal */}
      <Modal
        isOpen={isClaimModalOpen}
        onClose={() => setIsClaimModalOpen(false)}
        title="Request Claim Guidance"
        subtitle="Sruthy Priority Claim Advocacy"
      >
        <form onSubmit={handleSubmitClaim} className="space-y-4 text-xs text-slate-300">
          <p className="text-sm text-slate-300 leading-relaxed">
            Fill in the key details below and Sruthy will review your case immediately to prevent claim rejection or unnecessary deductions.
          </p>

          <div>
            <label className="block uppercase tracking-wider text-slate-400 font-medium mb-1">
              Your Full Name *
            </label>
            <input
              type="text"
              required
              value={claimName}
              onChange={(e) => setClaimName(e.target.value)}
              placeholder="e.g. Rahul Narayanan"
              className="w-full px-4 py-2.5 rounded-xl bg-[#0f1f38] border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-[#d1b164]"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block uppercase tracking-wider text-slate-400 font-medium mb-1">
                Contact Phone Number *
              </label>
              <input
                type="tel"
                required
                value={claimPhone}
                onChange={(e) => setClaimPhone(e.target.value)}
                placeholder="e.g. 9847000000"
                className="w-full px-4 py-2.5 rounded-xl bg-[#0f1f38] border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-[#d1b164]"
              />
            </div>
            <div>
              <label className="block uppercase tracking-wider text-slate-400 font-medium mb-1">
                Insurance Provider / Company
              </label>
              <input
                type="text"
                value={insurerName}
                onChange={(e) => setInsurerName(e.target.value)}
                placeholder="e.g. HDFC Ergo / Star / LIC / ICICI"
                className="w-full px-4 py-2.5 rounded-xl bg-[#0f1f38] border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-[#d1b164]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block uppercase tracking-wider text-slate-400 font-medium mb-1">
                Claim Nature
              </label>
              <select
                value={claimType}
                onChange={(e) => setClaimType(e.target.value as any)}
                className="w-full px-4 py-2.5 rounded-xl bg-[#0f1f38] border border-slate-700 text-white focus:outline-none focus:border-[#d1b164]"
              >
                <option value="Hospitalization / Health">Hospitalization / Health</option>
                <option value="Life / Critical Illness">Life / Critical Illness</option>
                <option value="Motor / Accident">Motor / Accident</option>
                <option value="Other">Other / General</option>
              </select>
            </div>
            <div>
              <label className="block uppercase tracking-wider text-slate-400 font-medium mb-1">
                Policy Number (if known)
              </label>
              <input
                type="text"
                value={policyNum}
                onChange={(e) => setPolicyNum(e.target.value)}
                placeholder="e.g. POL-987654321"
                className="w-full px-4 py-2.5 rounded-xl bg-[#0f1f38] border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-[#d1b164]"
              />
            </div>
          </div>

          <div>
            <label className="block uppercase tracking-wider text-slate-400 font-medium mb-1">
              Summary of Hospital / Medical Incident
            </label>
            <textarea
              rows={3}
              value={claimDesc}
              onChange={(e) => setClaimDesc(e.target.value)}
              placeholder="e.g. Admitted yesterday for emergency laparoscopic surgery. Hospital asking for deposit despite cashless card."
              className="w-full px-4 py-2.5 rounded-xl bg-[#0f1f38] border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-[#d1b164]"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#dfc88e] to-[#c29b41] text-[#0a1426] font-bold text-xs uppercase tracking-wider shadow-lg flex items-center justify-center gap-2 hover:brightness-105 transition-all disabled:opacity-50"
          >
            <Send className="w-4 h-4" />
            <span>{isSubmitting ? 'Registering...' : 'Submit Claim Request to Sruthy'}</span>
          </button>
        </form>
      </Modal>
    </section>
  );
};
