import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ShieldAlert,
  Users,
  Calendar,
  FileHeart,
  BellRing,
  Database,
  X,
  RefreshCw,
  Download,
  Trash2,
  CheckCircle2,
} from 'lucide-react';
import { getBookings, getClaims, getRenewals } from '../../utils/storage';
import { ConsultationBooking, ClaimRequest, RenewalRequest } from '../../types';

interface AdminDemoDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onNotify?: (title: string, message?: string) => void;
}

export const AdminDemoDrawer: React.FC<AdminDemoDrawerProps> = ({ isOpen, onClose, onNotify }) => {
  const [activeTab, setActiveTab] = useState<'bookings' | 'claims' | 'renewals' | 'architecture'>('bookings');
  const [bookings, setBookings] = useState<ConsultationBooking[]>([]);
  const [claims, setClaims] = useState<ClaimRequest[]>([]);
  const [renewals, setRenewals] = useState<RenewalRequest[]>([]);

  const loadData = () => {
    setBookings(getBookings());
    setClaims(getClaims());
    setRenewals(getRenewals());
  };

  useEffect(() => {
    if (isOpen) {
      loadData();
    }
  }, [isOpen]);

  const handleExportJSON = () => {
    const backup = {
      exportDate: new Date().toISOString(),
      advisor: 'Sruthy',
      bookings,
      claims,
      renewals,
    };

    const blob = new Blob([JSON.stringify(backup, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Sruthy_Advisor_CRM_Leads_${Date.now()}.json`;
    link.click();
    URL.revokeObjectURL(url);

    if (onNotify) onNotify('CRM Export Completed', 'All active leads exported to JSON.');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm"
          />

          {/* Drawer Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="relative z-10 w-full max-w-2xl bg-[#0a1426] border-l border-[#d1b164]/30 shadow-2xl text-white flex flex-col h-full overflow-hidden"
          >
            {/* Drawer Header */}
            <div className="p-6 bg-[#0f1f38] border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#182d4d] border border-[#d1b164]/40 flex items-center justify-center text-[#d1b164]">
                  <Database className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-white tracking-wide">
                    Advisor Back-Office Portal
                  </h3>
                  <p className="text-[11px] uppercase tracking-wider text-[#d1b164]">
                    Architecture &amp; Lead Management (Demo Mode)
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={loadData}
                  title="Reload stored leads"
                  className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                >
                  <RefreshCw className="w-4 h-4" />
                </button>
                <button
                  onClick={onClose}
                  className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Navigation Tabs */}
            <div className="flex border-b border-slate-800 bg-[#060d19] text-xs">
              <button
                onClick={() => setActiveTab('bookings')}
                className={`flex-1 py-3 px-3 text-center font-medium border-b-2 transition-colors flex items-center justify-center gap-1.5 ${
                  activeTab === 'bookings'
                    ? 'border-[#d1b164] text-[#d1b164] bg-[#0f1f38]/60'
                    : 'border-transparent text-slate-400 hover:text-slate-200'
                }`}
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Bookings ({bookings.length})</span>
              </button>

              <button
                onClick={() => setActiveTab('claims')}
                className={`flex-1 py-3 px-3 text-center font-medium border-b-2 transition-colors flex items-center justify-center gap-1.5 ${
                  activeTab === 'claims'
                    ? 'border-[#d1b164] text-[#d1b164] bg-[#0f1f38]/60'
                    : 'border-transparent text-slate-400 hover:text-slate-200'
                }`}
              >
                <FileHeart className="w-3.5 h-3.5" />
                <span>Claims ({claims.length})</span>
              </button>

              <button
                onClick={() => setActiveTab('renewals')}
                className={`flex-1 py-3 px-3 text-center font-medium border-b-2 transition-colors flex items-center justify-center gap-1.5 ${
                  activeTab === 'renewals'
                    ? 'border-[#d1b164] text-[#d1b164] bg-[#0f1f38]/60'
                    : 'border-transparent text-slate-400 hover:text-slate-200'
                }`}
              >
                <BellRing className="w-3.5 h-3.5" />
                <span>Renewals ({renewals.length})</span>
              </button>

              <button
                onClick={() => setActiveTab('architecture')}
                className={`flex-1 py-3 px-3 text-center font-medium border-b-2 transition-colors flex items-center justify-center gap-1.5 ${
                  activeTab === 'architecture'
                    ? 'border-[#d1b164] text-[#d1b164] bg-[#0f1f38]/60'
                    : 'border-transparent text-slate-400 hover:text-slate-200'
                }`}
              >
                <Users className="w-3.5 h-3.5" />
                <span>Architecture</span>
              </button>
            </div>

            {/* Tab Contents */}
            <div className="flex-1 p-6 overflow-y-auto space-y-4 text-xs">
              {/* TAB 1: BOOKINGS */}
              {activeTab === 'bookings' && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-slate-400">
                    <span>Recent Consultation Requests</span>
                    <button
                      onClick={handleExportJSON}
                      className="inline-flex items-center gap-1 text-[11px] text-[#d1b164] hover:underline"
                    >
                      <Download className="w-3 h-3" />
                      <span>Export Leads JSON</span>
                    </button>
                  </div>

                  {bookings.length === 0 ? (
                    <div className="p-8 text-center text-slate-500 border border-dashed border-slate-800 rounded-2xl">
                      No appointment bookings received yet. Test by submitting the consultation form.
                    </div>
                  ) : (
                    bookings.map((b) => (
                      <div
                        key={b.id}
                        className="p-4 rounded-xl bg-[#0f1f38] border border-slate-800 space-y-2 hover:border-[#d1b164]/30 transition-colors"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-semibold text-white text-sm">{b.name}</span>
                          <span className="px-2 py-0.5 rounded text-[10px] uppercase font-bold bg-[#182d4d] text-[#d1b164]">
                            {b.status || 'pending'}
                          </span>
                        </div>
                        <div className="grid grid-cols-2 gap-2 text-slate-300">
                          <div>Phone: {b.phone}</div>
                          <div>Email: {b.email}</div>
                          <div>Requirement: {b.requirement}</div>
                          <div>
                            Slot: {b.preferredDate} ({b.preferredTime})
                          </div>
                        </div>
                        {b.message && (
                          <p className="text-slate-400 italic bg-[#0a1426] p-2 rounded border border-slate-800">
                            "{b.message}"
                          </p>
                        )}
                      </div>
                    ))
                  )}
                </div>
              )}

              {/* TAB 2: CLAIMS */}
              {activeTab === 'claims' && (
                <div className="space-y-3">
                  <div className="text-slate-400">Incoming Claim Guidance Files</div>
                  {claims.length === 0 ? (
                    <div className="p-8 text-center text-slate-500 border border-dashed border-slate-800 rounded-2xl">
                      No active claim assistance requests filed yet.
                    </div>
                  ) : (
                    claims.map((c) => (
                      <div
                        key={c.id}
                        className="p-4 rounded-xl bg-[#0f1f38] border border-slate-800 space-y-2"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-semibold text-white text-sm">{c.name}</span>
                          <span className="px-2 py-0.5 rounded text-[10px] uppercase font-bold bg-rose-950 text-rose-300">
                            {c.claimType}
                          </span>
                        </div>
                        <div className="grid grid-cols-2 gap-2 text-slate-300">
                          <div>Phone: {c.phone}</div>
                          <div>Insurer: {c.insurerName}</div>
                          <div>Policy #: {c.policyNumber}</div>
                        </div>
                        <p className="text-slate-400 italic bg-[#0a1426] p-2 rounded">
                          "{c.description}"
                        </p>
                      </div>
                    ))
                  )}
                </div>
              )}

              {/* TAB 3: RENEWALS */}
              {activeTab === 'renewals' && (
                <div className="space-y-3">
                  <div className="text-slate-400">Tracked Renewal Schedules</div>
                  {renewals.length === 0 ? (
                    <div className="p-8 text-center text-slate-500 border border-dashed border-slate-800 rounded-2xl">
                      No renewal schedules tracked yet.
                    </div>
                  ) : (
                    renewals.map((r) => (
                      <div
                        key={r.id}
                        className="p-4 rounded-xl bg-[#0f1f38] border border-slate-800 space-y-2"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-semibold text-white text-sm">{r.name}</span>
                          <span className="text-[#d1b164] font-medium">{r.expiryMonth}</span>
                        </div>
                        <div className="grid grid-cols-2 gap-2 text-slate-300">
                          <div>Phone: {r.phone}</div>
                          <div>Policy: {r.policyType}</div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              )}

              {/* TAB 4: ARCHITECTURE ROADMAP */}
              {activeTab === 'architecture' && (
                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-[#182d4d]/40 border border-[#d1b164]/30 space-y-2">
                    <h4 className="font-semibold text-white flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#d1b164]" />
                      <span>Modular Admin Architecture Ready</span>
                    </h4>
                    <p className="text-slate-300 leading-relaxed">
                      The frontend is built with distinct models in <code className="text-[#d1b164]">src/types/index.ts</code> and persistence adapters in <code className="text-[#d1b164]">src/utils/storage.ts</code>. A backend API (Node.js, Supabase, Firebase, or PostgreSQL) can be plugged in directly with zero UI refactoring.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold block">
                      Future Scalable Admin Modules:
                    </span>
                    <ul className="space-y-1.5 text-slate-300">
                      <li className="p-2.5 rounded-lg bg-[#0f1f38] border border-slate-800 flex justify-between">
                        <span>1. Manage Enquiries &amp; Consultations</span>
                        <span className="text-emerald-400 font-medium">Local Live</span>
                      </li>
                      <li className="p-2.5 rounded-lg bg-[#0f1f38] border border-slate-800 flex justify-between">
                        <span>2. Claim Assistance Docket Tracker</span>
                        <span className="text-emerald-400 font-medium">Local Live</span>
                      </li>
                      <li className="p-2.5 rounded-lg bg-[#0f1f38] border border-slate-800 flex justify-between">
                        <span>3. Policy Renewal Calendars &amp; NCB Alerts</span>
                        <span className="text-emerald-400 font-medium">Local Live</span>
                      </li>
                      <li className="p-2.5 rounded-lg bg-[#0f1f38] border border-slate-800 flex justify-between">
                        <span>4. Dynamic CMS for Articles &amp; Testimonials</span>
                        <span className="text-[#d1b164] font-medium">Schema Ready</span>
                      </li>
                      <li className="p-2.5 rounded-lg bg-[#0f1f38] border border-slate-800 flex justify-between">
                        <span>5. AI Chatbot Fine-Tuning &amp; Vector Embeddings</span>
                        <span className="text-[#d1b164] font-medium">Service Ready</span>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Actions */}
            <div className="p-4 bg-[#0f1f38] border-t border-slate-800 flex items-center justify-between text-xs">
              <span className="text-slate-400 font-mono">Sruthy Advisory Core v1.0</span>
              <button
                onClick={onClose}
                className="px-4 py-2 rounded-xl bg-slate-800 text-slate-200 hover:text-white hover:bg-slate-700 transition-colors"
              >
                Close Back-Office View
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
