import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Clock, ArrowRight, Sparkles, Filter } from 'lucide-react';
import { knowledgeArticles } from '../../data/knowledgeData';
import { Article } from '../../types';
import { Modal } from '../common/Modal';

export const KnowledgeHub: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeArticle, setActiveArticle] = useState<Article | null>(null);

  const categories = [
    'All',
    'Term Insurance',
    'Health Insurance',
    'Life Insurance',
    'Family Protection',
    'Retirement',
    'Claims',
  ];

  const filteredArticles =
    selectedCategory === 'All'
      ? knowledgeArticles
      : knowledgeArticles.filter((a) => a.category === selectedCategory);

  return (
    <section id="knowledge-hub" className="py-20 sm:py-28 bg-[#fafaf8] text-[#1e293b] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0a1426]/5 border border-[#d1b164]/30 text-[#a98031] text-xs font-semibold uppercase tracking-[0.2em] mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Financial Literacy &amp; Insights</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#0a1426] tracking-tight">
            Insurance <span className="font-normal italic text-[#a98031]">Knowledge Hub</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
            Unbiased educational guides designed to empower you with clarity on policy mechanics, fine print, and financial protection.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
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

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article, idx) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="bg-white rounded-3xl border border-slate-200 hover:border-[#d1b164] transition-all duration-300 shadow-md hover:shadow-xl flex flex-col justify-between overflow-hidden group"
            >
              <div>
                {/* Article Image Container */}
                <div className="relative h-48 overflow-hidden bg-slate-100">
                  <img
                    src={article.imageUrl}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-[#0a1426]/90 backdrop-blur-sm text-[#d1b164] px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider border border-[#d1b164]/30">
                    {article.category}
                  </div>
                  <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-sm text-white px-2.5 py-0.5 rounded-full text-[10px] flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#d1b164]" />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <span className="text-[11px] text-slate-400 font-mono block mb-1.5">
                    {article.date}
                  </span>
                  <h3 className="font-serif text-xl font-medium text-[#0a1426] mb-3 leading-snug group-hover:text-[#a98031] transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {article.summary}
                  </p>
                </div>
              </div>

              {/* Read More Button */}
              <div className="p-6 pt-0 border-t border-slate-100 mt-2">
                <button
                  onClick={() => setActiveArticle(article)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#0a1426] group-hover:text-[#a98031] transition-colors"
                >
                  <span>Read Full Guide</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Article Detail Modal */}
      {activeArticle && (
        <Modal
          isOpen={activeArticle !== null}
          onClose={() => setActiveArticle(null)}
          title={activeArticle.title}
          subtitle={`${activeArticle.category} • ${activeArticle.readTime}`}
          maxWidth="2xl"
        >
          <div className="space-y-4 text-slate-200 text-sm leading-relaxed">
            <div className="rounded-xl overflow-hidden mb-4 max-h-60">
              <img
                src={activeArticle.imageUrl}
                alt={activeArticle.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="whitespace-pre-line font-light leading-relaxed">
              {activeArticle.content.trim()}
            </div>

            <div className="pt-4 border-t border-slate-800 text-xs text-slate-400">
              <p>
                Authored by Sruthy, Insurance Advisor &amp; Financial Protection Consultant.
                For advice tailored to your personal family portfolio, schedule a consultation session.
              </p>
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
};
