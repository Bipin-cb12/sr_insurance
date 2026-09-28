import React, { useState } from 'react';
import { BellRing, Calendar, ShieldCheck, RefreshCw, CheckCircle2, ArrowRight } from 'lucide-react';
import { Modal } from '../common/Modal';
import { saveRenewal } from '../../utils/storage';

interface RenewalSupportProps {
  onNotify?: (title: string, message?: string) => void;
}

export const RenewalSupport: React.FC<RenewalSupportProps> = ({ onNotify }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [policyType, setPolicyType] = useState('Health Insurance Floater');
  const [expiryMonth, setExpiryMonth] = useState('October 2026');
  const [insurerName, setInsurerName] = useState('');
  const [notes, setNotes] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) {
      if (onNotify) onNotify('Missing Fields', 'Please provide your name and phone number.');
      return;
    }

    setSubmitting(true);
    setTimeout(() => {
      saveRenewal({
        name,
        phone,
        policyType,
        expiryMonth,
        insurerName: insurerName || 'Existing Insurer',
        notes,
      });

      setSubmitting(false);
      setIsModalOpen(false);
      setName('');
      setPhone('');
      setNotes('');

      if (onNotify) {
        onNotify(
          'Renewal Tracking Activated',
          `We have registered your ${policyType} renewal schedule for ${expiryMonth}. Sruthy will contact you 30 days prior.`
        );
      }
    }, 600);
  };

  const features = [
    {
      title: 'Renewal Date Tracking',
      desc: 'Automated 30-day and 15-day alerts so you never lose policy continuity or accidental coverage gaps.',
      icon: <BellRing className="w-6 h-6 text-[#d1b164]" />,
    },
    {
      title: 'Grace Period Defense',
      desc: 'Guidance during standard 30-day grace windows to reinstate coverage without penalty or medical tests.',
      icon: <Calendar className="w-6 h-6 text-[#d1b164]" />,
    },
    {
      title: 'No-Claim Bonus (NCB) Audit',
      desc: 'Verify that your cumulative no-claim bonus booster has been accurately credited by the insurer.',
      icon: <ShieldCheck className="w-6 h-6 text-[#d1b164]" />,
    },
    {
      title: 'Annual Coverage Calibration',
      desc: 'As inflation rises or dependents grow, we evaluate whether increasing sum insured is advisable.',
      icon: <RefreshCw className="w-6 h-6 text-[#d1b164]" />,
    },
  ];

  return (
    <section id="renewal-support" className="py-20 sm:py-28 bg-[#0a1426] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text & CTA (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#182d4d] border border-[#d1b164]/30 text-[#d1b164] text-xs font-semibold uppercase tracking-[0.2em]">
              <BellRing className="w-3.5 h-3.5" />
              <span>Policy Continuity Safeguard</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#fafaf8] leading-tight">
              Never Miss an{' '}
              <span className="font-normal italic text-[#d1b164]">
                Important Renewal
              </span>
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
              Allowing an active policy to lapse is one of the costliest financial oversights. You forfeit accrued pre-existing disease waiting credits, surrender bonuses, and leave your family exposed.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-[#d1b164] shrink-0" />
                <span>Zero charge for independent renewal health checkups</span>
              </div>
              <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-[#d1b164] shrink-0" />
                <span>Portability review to superior policies without losing waiting benefits</span>
              </div>
              <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-[#d1b164] shrink-0" />
                <span>Tax saving certificate compilation for FY filing</span>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#dfc88e] via-[#d1b164] to-[#c29b41] text-[#0a1426] text-xs sm:text-sm font-semibold uppercase tracking-wider shadow-lg hover:brightness-105 transition-all"
              >
                <span>Request Renewal Assistance</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Feature Grid (6 cols) */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((feat) => (
              <div
                key={feat.title}
                className="p-6 rounded-2xl bg-[#0f1f38] border border-slate-800 hover:border-[#d1b164]/40 transition-all duration-300 shadow-md group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#182d4d] border border-[#d1b164]/20 flex items-center justify-center mb-4 group-hover:bg-[#25406b] transition-colors">
                  {feat.icon}
                </div>
                <h3 className="font-serif text-lg font-medium text-white mb-2 group-hover:text-[#d1b164] transition-colors">
                  {feat.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed font-light">
                  {feat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Renewal Request Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Schedule Renewal Tracking"
        subtitle="Policy Continuity Desk"
      >
        <form onSubmit={handleSubmit} className="space-y-4 text-xs text-slate-300">
          <p className="text-sm text-slate-300 leading-relaxed">
            Provide your upcoming renewal timeline. Sruthy will audit your current terms and ensure seamless continuity with zero lapse risk.
          </p>

          <div>
            <label className="block uppercase tracking-wider text-slate-400 font-medium mb-1">
              Your Name *
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Meera Pillai"
              className="w-full px-4 py-2.5 rounded-xl bg-[#0f1f38] border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-[#d1b164]"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block uppercase tracking-wider text-slate-400 font-medium mb-1">
                Phone Number *
              </label>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="e.g. 9847111222"
                className="w-full px-4 py-2.5 rounded-xl bg-[#0f1f38] border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-[#d1b164]"
              />
            </div>
            <div>
              <label className="block uppercase tracking-wider text-slate-400 font-medium mb-1">
                Current Insurer
              </label>
              <input
                type="text"
                value={insurerName}
                onChange={(e) => setInsurerName(e.target.value)}
                placeholder="e.g. Star Health / Max Life"
                className="w-full px-4 py-2.5 rounded-xl bg-[#0f1f38] border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-[#d1b164]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block uppercase tracking-wider text-slate-400 font-medium mb-1">
                Policy Type
              </label>
              <select
                value={policyType}
                onChange={(e) => setPolicyType(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-[#0f1f38] border border-slate-700 text-white focus:outline-none focus:border-[#d1b164]"
              >
                <option value="Health Insurance Floater">Health Insurance Floater</option>
                <option value="Term Life Insurance">Term Life Insurance</option>
                <option value="Motor / Vehicle Insurance">Motor / Vehicle Insurance</option>
                <option value="Child / Endowment Policy">Child / Endowment Policy</option>
                <option value="Critical Illness Policy">Critical Illness Policy</option>
              </select>
            </div>
            <div>
              <label className="block uppercase tracking-wider text-slate-400 font-medium mb-1">
                Upcoming Renewal Month
              </label>
              <input
                type="text"
                value={expiryMonth}
                onChange={(e) => setExpiryMonth(e.target.value)}
                placeholder="e.g. November 2026"
                className="w-full px-4 py-2.5 rounded-xl bg-[#0f1f38] border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-[#d1b164]"
              />
            </div>
          </div>

          <div>
            <label className="block uppercase tracking-wider text-slate-400 font-medium mb-1">
              Any specific questions or concerns regarding this policy?
            </label>
            <textarea
              rows={3}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="e.g. Want to know if porting to another company with zero room rent cap is possible."
              className="w-full px-4 py-2.5 rounded-xl bg-[#0f1f38] border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-[#d1b164]"
            />
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#dfc88e] to-[#c29b41] text-[#0a1426] font-bold text-xs uppercase tracking-wider shadow-lg flex items-center justify-center gap-2 hover:brightness-105 transition-all disabled:opacity-50"
          >
            <span>{submitting ? 'Scheduling...' : 'Set Up Renewal Tracking'}</span>
          </button>
        </form>
      </Modal>
    </section>
  );
};
