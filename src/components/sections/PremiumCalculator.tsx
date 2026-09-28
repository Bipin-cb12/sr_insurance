import React, { useState } from 'react';
import { Calculator, Info, ShieldCheck, ArrowRight, Sparkles } from 'lucide-react';

interface PremiumCalculatorProps {
  onGetPersonalizedQuote: (quoteDetails: string) => void;
}

export const PremiumCalculator: React.FC<PremiumCalculatorProps> = ({ onGetPersonalizedQuote }) => {
  const [age, setAge] = useState(30);
  const [gender, setGender] = useState<'Male' | 'Female'>('Male');
  const [coverageLakhs, setCoverageLakhs] = useState(100); // 100 Lakhs = 1 Crore
  const [durationYears, setDurationYears] = useState(30);
  const [frequency, setFrequency] = useState<'Annual' | 'Monthly' | 'Quarterly'>('Monthly');
  const [isSmoker, setIsSmoker] = useState(false);

  // Dynamic estimate calculation based on age, coverage, and tobacco status
  const calculateEstimate = () => {
    // Base unit per 10 Lakhs coverage at age 30
    let basePer10L = 75; // ₹75/month per 10L base
    if (gender === 'Female') basePer10L *= 0.9; // statistical actuarial discount
    if (isSmoker) basePer10L *= 1.5;

    // Age multiplier: exponentially climbs past 40
    const ageDiff = age - 30;
    const ageFactor = 1 + (ageDiff * 0.04);

    const monthlyEstimated = Math.round((coverageLakhs / 10) * basePer10L * Math.max(0.6, ageFactor));
    const rangeLow = Math.round(monthlyEstimated * 0.9);
    const rangeHigh = Math.round(monthlyEstimated * 1.15);

    if (frequency === 'Annual') {
      return {
        low: (rangeLow * 12).toLocaleString('en-IN'),
        high: (rangeHigh * 12).toLocaleString('en-IN'),
        label: '/ year',
      };
    } else if (frequency === 'Quarterly') {
      return {
        low: (rangeLow * 3).toLocaleString('en-IN'),
        high: (rangeHigh * 3).toLocaleString('en-IN'),
        label: '/ quarter',
      };
    }

    return {
      low: rangeLow.toLocaleString('en-IN'),
      high: rangeHigh.toLocaleString('en-IN'),
      label: '/ month',
    };
  };

  const estimate = calculateEstimate();

  const formatCoverage = (lakhs: number) => {
    if (lakhs >= 100) {
      const cr = lakhs / 100;
      return `₹${cr.toFixed(cr % 1 === 0 ? 0 : 1)} Crore`;
    }
    return `₹${lakhs} Lakhs`;
  };

  const handleQuoteClick = () => {
    const details = `Estimated ${formatCoverage(coverageLakhs)} cover for age ${age} (${gender}) at ~₹${estimate.low} - ₹${estimate.high} ${estimate.label}`;
    onGetPersonalizedQuote(details);
  };

  return (
    <section id="calculator" className="py-20 sm:py-28 bg-[#060d19] text-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#182d4d] border border-[#d1b164]/30 text-[#d1b164] text-xs font-semibold uppercase tracking-[0.2em] mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Estimator</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#fafaf8] tracking-tight">
            Premium <span className="font-normal italic text-[#d1b164]">Calculator</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-3">
            Configure your parameters to visualize representative premium benchmarks.
          </p>
        </div>

        {/* Calculator Body Grid */}
        <div className="bg-[#0a1426] border border-[#d1b164]/30 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Inputs (7 Cols) */}
            <div className="lg:col-span-7 space-y-6">
              {/* Gender and Tobacco Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs uppercase tracking-wider text-slate-400 block mb-2 font-medium">
                    Gender
                  </label>
                  <div className="grid grid-cols-2 gap-2 bg-[#0f1f38] p-1 rounded-xl border border-slate-700">
                    <button
                      type="button"
                      onClick={() => setGender('Male')}
                      className={`py-2 text-xs font-semibold rounded-lg transition-all ${
                        gender === 'Male'
                          ? 'bg-[#d1b164] text-[#0a1426] shadow'
                          : 'text-slate-300 hover:text-white'
                      }`}
                    >
                      Male
                    </button>
                    <button
                      type="button"
                      onClick={() => setGender('Female')}
                      className={`py-2 text-xs font-semibold rounded-lg transition-all ${
                        gender === 'Female'
                          ? 'bg-[#d1b164] text-[#0a1426] shadow'
                          : 'text-slate-300 hover:text-white'
                      }`}
                    >
                      Female
                    </button>
                  </div>
                </div>

                <div>
                  <label className="text-xs uppercase tracking-wider text-slate-400 block mb-2 font-medium">
                    Tobacco / Smoking Habit
                  </label>
                  <div className="grid grid-cols-2 gap-2 bg-[#0f1f38] p-1 rounded-xl border border-slate-700">
                    <button
                      type="button"
                      onClick={() => setIsSmoker(false)}
                      className={`py-2 text-xs font-semibold rounded-lg transition-all ${
                        !isSmoker
                          ? 'bg-[#182d4d] text-[#d1b164] border border-[#d1b164]/40 shadow'
                          : 'text-slate-300 hover:text-white'
                      }`}
                    >
                      Non-Smoker
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsSmoker(true)}
                      className={`py-2 text-xs font-semibold rounded-lg transition-all ${
                        isSmoker
                          ? 'bg-[#182d4d] text-rose-300 border border-rose-500/40 shadow'
                          : 'text-slate-300 hover:text-white'
                      }`}
                    >
                      Smoker
                    </button>
                  </div>
                </div>
              </div>

              {/* Age Slider */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="uppercase tracking-wider text-slate-400 font-medium">Current Age</span>
                  <span className="font-serif text-lg text-[#d1b164] font-semibold">{age} Years</span>
                </div>
                <input
                  type="range"
                  min={18}
                  max={65}
                  value={age}
                  onChange={(e) => setAge(Number(e.target.value))}
                  className="w-full h-2 bg-[#0f1f38] rounded-lg appearance-none cursor-pointer accent-[#d1b164]"
                />
                <div className="flex justify-between text-[11px] text-slate-500">
                  <span>18 Yrs</span>
                  <span>40 Yrs</span>
                  <span>65 Yrs</span>
                </div>
              </div>

              {/* Coverage Slider */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="uppercase tracking-wider text-slate-400 font-medium">Coverage Amount (Sum Assured)</span>
                  <span className="font-serif text-lg text-[#d1b164] font-semibold">{formatCoverage(coverageLakhs)}</span>
                </div>
                <input
                  type="range"
                  min={25}
                  max={500}
                  step={25}
                  value={coverageLakhs}
                  onChange={(e) => setCoverageLakhs(Number(e.target.value))}
                  className="w-full h-2 bg-[#0f1f38] rounded-lg appearance-none cursor-pointer accent-[#d1b164]"
                />
                <div className="flex justify-between text-[11px] text-slate-500">
                  <span>₹25 Lakhs</span>
                  <span>₹2.5 Crore</span>
                  <span>₹5 Crore</span>
                </div>
              </div>

              {/* Duration & Frequency Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div>
                  <div className="flex justify-between items-center text-xs mb-2">
                    <span className="uppercase tracking-wider text-slate-400 font-medium">Policy Term</span>
                    <span className="text-white font-medium">{durationYears} Years</span>
                  </div>
                  <input
                    type="range"
                    min={10}
                    max={40}
                    value={durationYears}
                    onChange={(e) => setDurationYears(Number(e.target.value))}
                    className="w-full h-2 bg-[#0f1f38] rounded-lg appearance-none cursor-pointer accent-[#d1b164]"
                  />
                </div>

                <div>
                  <label className="text-xs uppercase tracking-wider text-slate-400 block mb-2 font-medium">
                    Payment Cadence
                  </label>
                  <div className="grid grid-cols-3 gap-1 bg-[#0f1f38] p-1 rounded-xl border border-slate-700 text-xs">
                    {(['Monthly', 'Quarterly', 'Annual'] as const).map((freq) => (
                      <button
                        key={freq}
                        type="button"
                        onClick={() => setFrequency(freq)}
                        className={`py-1.5 rounded-lg font-medium transition-all ${
                          frequency === freq
                            ? 'bg-[#182d4d] text-[#d1b164] border border-[#d1b164]/30'
                            : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        {freq}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Output Box (5 Cols) */}
            <div className="lg:col-span-5 bg-gradient-to-br from-[#0f1f38] to-[#182d4d] border border-[#d1b164]/40 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xl relative overflow-hidden">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] uppercase tracking-widest text-[#d1b164] font-semibold">
                    Estimated Premium Range
                  </span>
                  <ShieldCheck className="w-5 h-5 text-[#d1b164]" />
                </div>

                <div>
                  <div className="font-serif text-3xl sm:text-4xl text-white font-light tracking-tight">
                    ₹{estimate.low} – ₹{estimate.high}
                  </div>
                  <span className="text-xs text-slate-300">{estimate.label}</span>
                </div>

                <div className="space-y-2 border-t border-slate-700/80 pt-4 text-xs text-slate-300">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Selected Cover:</span>
                    <span className="text-white font-medium">{formatCoverage(coverageLakhs)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Insured Profile:</span>
                    <span className="text-white font-medium">
                      Age {age}, {gender} ({isSmoker ? 'Smoker' : 'Healthy non-smoker'})
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Coverage Horizon:</span>
                    <span className="text-white font-medium">{durationYears} Years</span>
                  </div>
                </div>
              </div>

              {/* Clear Demo Mention */}
              <div className="mt-6 pt-4 border-t border-slate-700/80 space-y-4">
                <div className="flex items-start gap-2 text-[11px] text-slate-400 leading-snug">
                  <Info className="w-4 h-4 text-[#d1b164] shrink-0 mt-0.5" />
                  <span>
                    Demo estimate only. Actual premiums depend on insurer-specific underwriting and policy terms.
                  </span>
                </div>

                <button
                  onClick={handleQuoteClick}
                  className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#dfc88e] to-[#c29b41] text-[#0a1426] font-bold text-xs uppercase tracking-wider hover:brightness-105 transition-all shadow-lg flex items-center justify-center gap-2"
                >
                  <span>Get a Personalized Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
