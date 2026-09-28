import React, { useState } from 'react';
import { CheckCircle2, ArrowRight, Table, Sparkles, Filter } from 'lucide-react';
import { comparisonPlansData } from '../../data/insuranceData';

interface PlanComparisonProps {
  onRequestGuidance: (planName: string) => void;
}

export const PlanComparison: React.FC<PlanComparisonProps> = ({ onRequestGuidance }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Term Life', 'Health Insurance', 'Child Security', 'Retirement Planning'];

  const filteredPlans =
    selectedCategory === 'All'
      ? comparisonPlansData
      : comparisonPlansData.filter((p) => p.category === selectedCategory);

  return (
    <section id="comparison" className="py-20 sm:py-28 bg-[#fafaf8] text-[#1e293b] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0a1426]/5 border border-[#d1b164]/30 text-[#a98031] text-xs font-semibold uppercase tracking-[0.2em] mb-3">
            <Table className="w-3.5 h-3.5" />
            <span>Side-by-Side Analysis</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#0a1426] tracking-tight">
            Plan <span className="font-normal italic text-[#a98031]">Comparison</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3">
            Objective evaluation of core protection models. Review structures side-by-side to understand trade-offs before committing.
          </p>
          <p className="text-xs text-slate-400 mt-1 italic">
            * Clearly labelled representative demo plan data for comparative visualization.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                selectedCategory === cat
                  ? 'bg-[#0a1426] text-white shadow-md'
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-[#d1b164]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Comparison Table for Desktop / Tablet */}
        <div className="hidden lg:block overflow-x-auto shadow-xl rounded-3xl border border-slate-200 bg-white">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#0a1426] text-white border-b border-slate-800 text-xs uppercase tracking-wider">
                <th className="py-5 px-6 font-semibold">Plan Category</th>
                <th className="py-5 px-6 font-semibold">Coverage Scope</th>
                <th className="py-5 px-6 font-semibold">Indicative Premium (Demo)</th>
                <th className="py-5 px-6 font-semibold">Policy Horizon</th>
                <th className="py-5 px-6 font-semibold">Key Benefits</th>
                <th className="py-5 px-6 font-semibold">Suitable For</th>
                <th className="py-5 px-6 text-right font-semibold">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs text-slate-700">
              {filteredPlans.map((plan) => (
                <tr key={plan.id} className="hover:bg-amber-50/40 transition-colors">
                  <td className="py-5 px-6">
                    <span className="font-serif text-base font-semibold text-[#0a1426] block">
                      {plan.name}
                    </span>
                    <span className="inline-block mt-1 px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-slate-100 text-slate-700">
                      {plan.category}
                    </span>
                    {plan.popular && (
                      <span className="ml-2 inline-block px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#d1b164] text-[#0a1426]">
                        Most Popular
                      </span>
                    )}
                  </td>
                  <td className="py-5 px-6 font-medium text-slate-900">{plan.coverage}</td>
                  <td className="py-5 px-6 text-emerald-800 font-semibold">{plan.demoPremium}</td>
                  <td className="py-5 px-6 text-slate-600">{plan.duration}</td>
                  <td className="py-5 px-6">
                    <ul className="space-y-1">
                      {plan.keyBenefits.map((b, i) => (
                        <li key={i} className="flex items-start gap-1.5 text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#a98031] shrink-0 mt-0.5" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </td>
                  <td className="py-5 px-6 text-slate-600 max-w-[200px] leading-relaxed">
                    {plan.suitableFor}
                  </td>
                  <td className="py-5 px-6 text-right whitespace-nowrap">
                    <button
                      onClick={() => onRequestGuidance(plan.name)}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#0a1426] text-white hover:bg-[#182d4d] text-[11px] font-semibold uppercase tracking-wider transition-all"
                    >
                      <span>Request Guidance</span>
                      <ArrowRight className="w-3 h-3 text-[#d1b164]" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile & Small Tablet Card View */}
        <div className="lg:hidden space-y-6">
          {filteredPlans.map((plan) => (
            <div
              key={plan.id}
              className="p-6 rounded-2xl bg-white border border-slate-200 shadow-lg space-y-4"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#0a1426]">{plan.name}</h3>
                  <span className="inline-block mt-1 px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-slate-100 text-slate-700">
                    {plan.category}
                  </span>
                </div>
                {plan.popular && (
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-[#d1b164] text-[#0a1426]">
                    Popular
                  </span>
                )}
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs border-y border-slate-100 py-3">
                <div>
                  <span className="text-slate-500 block">Coverage:</span>
                  <span className="font-semibold text-slate-800">{plan.coverage}</span>
                </div>
                <div>
                  <span className="text-slate-500 block">Demo Premium:</span>
                  <span className="font-semibold text-emerald-800">{plan.demoPremium}</span>
                </div>
                <div>
                  <span className="text-slate-500 block">Duration:</span>
                  <span className="text-slate-700">{plan.duration}</span>
                </div>
                <div>
                  <span className="text-slate-500 block">Ideal Profile:</span>
                  <span className="text-slate-700">{plan.suitableFor}</span>
                </div>
              </div>

              <div>
                <span className="text-xs uppercase tracking-wider text-slate-400 block mb-2 font-medium">
                  Key Benefits:
                </span>
                <ul className="space-y-1.5 text-xs text-slate-700">
                  {plan.keyBenefits.map((b, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#a98031] shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => onRequestGuidance(plan.name)}
                className="w-full py-3 px-4 rounded-xl bg-[#0a1426] text-white text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2"
              >
                <span>Request Detailed Guidance</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#d1b164]" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
