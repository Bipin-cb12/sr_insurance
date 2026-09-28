import React, { useState } from 'react';
import { Calendar, Clock, CheckCircle2, Send, ShieldCheck, User, Mail, Phone, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { saveBooking } from '../../utils/storage';
import { agentConfig } from '../../data/agentConfig';

interface ConsultationBookingProps {
  initialRequirement?: string;
  onNotify?: (title: string, message?: string) => void;
}

export const ConsultationBooking: React.FC<ConsultationBookingProps> = ({
  initialRequirement = 'Life Insurance',
  onNotify,
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [requirement, setRequirement] = useState(initialRequirement);
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('11:00 AM');
  const [message, setMessage] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !email) {
      if (onNotify) onNotify('Missing Fields', 'Please complete your name, phone number, and email address.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      saveBooking({
        name,
        phone,
        email,
        requirement,
        preferredDate: preferredDate || new Date(Date.now() + 86400000).toISOString().split('T')[0],
        preferredTime,
        message,
      });

      setIsSubmitting(false);
      setIsSuccess(true);

      // Trigger celebratory gold confetti
      try {
        confetti({
          particleCount: 70,
          spread: 60,
          origin: { y: 0.7 },
          colors: ['#dfc88e', '#d1b164', '#c29b41', '#182d4d'],
        });
      } catch {
        // Confetti fallback
      }

      if (onNotify) {
        onNotify('Consultation Scheduled', `Appointment confirmed for ${name}. Sruthy will contact you shortly.`);
      }
    }, 700);
  };

  const handleResetForm = () => {
    setName('');
    setPhone('');
    setEmail('');
    setPreferredDate('');
    setMessage('');
    setIsSuccess(false);
  };

  return (
    <section id="consultation" className="py-20 sm:py-28 bg-[#fafaf8] text-[#1e293b] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0a1426]/5 border border-[#d1b164]/30 text-[#a98031] text-xs font-semibold uppercase tracking-[0.2em] mb-3">
            <Calendar className="w-3.5 h-3.5" />
            <span>Private Appointment</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#0a1426] tracking-tight">
            Book a Free <span className="font-normal italic text-[#a98031]">Consultation</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
            Schedule a confidential 30-minute one-on-one session with Sruthy. In-person or virtual Zoom/Google Meet available.
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl p-6 sm:p-12 relative overflow-hidden">
          {!isSuccess ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Full Name */}
                <div>
                  <label className="block text-xs uppercase tracking-wider text-slate-500 font-semibold mb-2">
                    Your Full Name *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <User className="w-4 h-4" />
                    </div>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Dr. Rajesh Pillai"
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#a98031] focus:ring-1 focus:ring-[#a98031] text-sm bg-slate-50/50"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-xs uppercase tracking-wider text-slate-500 font-semibold mb-2">
                    Phone Number (WhatsApp Preferred) *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <Phone className="w-4 h-4" />
                    </div>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. 98470 12345"
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#a98031] focus:ring-1 focus:ring-[#a98031] text-sm bg-slate-50/50"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Email */}
                <div>
                  <label className="block text-xs uppercase tracking-wider text-slate-500 font-semibold mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <Mail className="w-4 h-4" />
                    </div>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. rajesh@example.com"
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#a98031] focus:ring-1 focus:ring-[#a98031] text-sm bg-slate-50/50"
                    />
                  </div>
                </div>

                {/* Insurance Requirement Dropdown */}
                <div>
                  <label className="block text-xs uppercase tracking-wider text-slate-500 font-semibold mb-2">
                    Insurance Requirement *
                  </label>
                  <select
                    value={requirement}
                    onChange={(e) => setRequirement(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-800 focus:outline-none focus:border-[#a98031] focus:ring-1 focus:ring-[#a98031] text-sm bg-slate-50/50"
                  >
                    <option value="Life Insurance">Life Insurance</option>
                    <option value="Health Insurance">Health Insurance</option>
                    <option value="Term Insurance">Term Insurance</option>
                    <option value="Family Protection">Family Protection</option>
                    <option value="Child Plan">Child Plan</option>
                    <option value="Retirement">Retirement</option>
                    <option value="Motor Insurance">Motor Insurance</option>
                    <option value="Other">Other / Portfolio Audit</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Preferred Date */}
                <div>
                  <label className="block text-xs uppercase tracking-wider text-slate-500 font-semibold mb-2">
                    Preferred Date
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <Calendar className="w-4 h-4" />
                    </div>
                    <input
                      type="date"
                      value={preferredDate}
                      onChange={(e) => setPreferredDate(e.target.value)}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 text-slate-800 focus:outline-none focus:border-[#a98031] focus:ring-1 focus:ring-[#a98031] text-sm bg-slate-50/50"
                    />
                  </div>
                </div>

                {/* Preferred Time */}
                <div>
                  <label className="block text-xs uppercase tracking-wider text-slate-500 font-semibold mb-2">
                    Preferred Time Slot
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <Clock className="w-4 h-4" />
                    </div>
                    <select
                      value={preferredTime}
                      onChange={(e) => setPreferredTime(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 text-slate-800 focus:outline-none focus:border-[#a98031] focus:ring-1 focus:ring-[#a98031] text-sm bg-slate-50/50"
                    >
                      <option value="10:00 AM – 11:00 AM">10:00 AM – 11:00 AM</option>
                      <option value="11:30 AM – 12:30 PM">11:30 AM – 12:30 PM</option>
                      <option value="02:30 PM – 03:30 PM">02:30 PM – 03:30 PM</option>
                      <option value="04:30 PM – 05:30 PM">04:30 PM – 05:30 PM</option>
                      <option value="06:30 PM – 07:30 PM">06:30 PM – 07:30 PM (Evening)</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-slate-500 font-semibold mb-2">
                  Additional Notes or Specific Questions (Optional)
                </label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Share details like family size, existing coverage, or specific milestones you want to cover."
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#a98031] focus:ring-1 focus:ring-[#a98031] text-sm bg-slate-50/50"
                />
              </div>

              {/* Reassurance text */}
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <ShieldCheck className="w-4 h-4 text-[#a98031]" />
                <span>
                  100% Confidential. Zero spam. We never share your contact details.
                </span>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 rounded-2xl bg-[#0a1426] hover:bg-[#182d4d] text-white font-semibold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 shadow-xl flex items-center justify-center gap-2 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50"
                >
                  <Send className="w-4 h-4 text-[#d1b164]" />
                  <span>{isSubmitting ? 'Securing Slot...' : 'Book Free Consultation'}</span>
                </button>
              </div>
            </form>
          ) : (
            /* Professional Success State */
            <div className="text-center py-10 space-y-6">
              <div className="w-16 h-16 rounded-full bg-emerald-50 border-2 border-emerald-500 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <span className="text-xs uppercase tracking-widest text-[#a98031] font-semibold">
                  Appointment Confirmed
                </span>
                <h3 className="font-serif text-3xl font-medium text-[#0a1426] mt-1">
                  Thank You, {name}
                </h3>
                <p className="text-slate-600 text-sm max-w-md mx-auto mt-2 leading-relaxed">
                  Your private consultation regarding <strong className="text-[#0a1426]">{requirement}</strong> has been registered. Sruthy will review your profile and reach out via phone/WhatsApp at <strong className="text-[#0a1426]">{phone}</strong>.
                </p>
              </div>

              <div className="max-w-sm mx-auto bg-slate-50 p-4 rounded-2xl border border-slate-200 text-xs text-left text-slate-700 space-y-2">
                <div className="flex justify-between">
                  <span className="text-slate-400">Scheduled Time:</span>
                  <span className="font-semibold">{preferredTime}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Direct Email:</span>
                  <span className="font-semibold">{agentConfig.email}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Advisor Helpline:</span>
                  <span className="font-semibold">{agentConfig.phones.displayPrimary}</span>
                </div>
              </div>

              <div>
                <button
                  onClick={handleResetForm}
                  className="px-6 py-2.5 rounded-xl border border-slate-300 text-slate-700 hover:text-[#0a1426] hover:bg-slate-100 text-xs font-semibold uppercase tracking-wider transition-all"
                >
                  Schedule Another Session
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
