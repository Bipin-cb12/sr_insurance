import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Shield, Phone, Calendar, ArrowRight } from 'lucide-react';
import { agentConfig } from '../../data/agentConfig';

interface NavbarProps {
  onOpenConsultation?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Insurance Solutions', href: '#solutions' },
    { label: 'Find Your Plan', href: '#find-your-plan' },
    { label: 'Calculator', href: '#calculator' },
    { label: 'Claims', href: '#claim-assistance' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0a1426]/95 backdrop-blur-md border-b border-[#d1b164]/20 py-3 shadow-[0_10px_30px_rgba(6,13,25,0.4)]'
            : 'bg-[#0a1426]/75 backdrop-blur-sm border-b border-white/5 py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand / Logo */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#home');
              }}
              className="group flex items-center gap-3.5 focus:outline-none"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#182d4d] to-[#0a1426] border border-[#d1b164]/40 flex items-center justify-center group-hover:border-[#d1b164] transition-all duration-300 shadow-inner">
                <Shield className="w-5 h-5 text-[#d1b164]" />
              </div>
              <div className="flex flex-col text-left">
                <span className="font-serif text-xl sm:text-2xl font-semibold tracking-[0.15em] text-[#fafaf8] group-hover:text-[#d1b164] transition-colors leading-tight">
                  SRUTHY
                </span>
                <span className="text-[10px] sm:text-[11px] uppercase tracking-widest text-[#d1b164]/90 font-medium">
                  Insurance Advisor
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center space-x-1 lg:space-x-2">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.href)}
                  className="px-3 py-1.5 text-xs lg:text-[13px] font-medium tracking-wide text-slate-300 hover:text-[#d1b164] transition-colors duration-200 relative group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#d1b164] scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-center" />
                </button>
              ))}
            </nav>

            {/* Right CTAs */}
            <div className="hidden sm:flex items-center gap-4">
              <a
                href={`tel:${agentConfig.phones.primary}`}
                className="hidden md:flex items-center gap-2 text-xs text-slate-300 hover:text-white transition-colors"
                title="Call Advisor"
              >
                <div className="w-7 h-7 rounded-full bg-[#182d4d] flex items-center justify-center text-[#d1b164]">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <span className="font-medium tracking-wider">{agentConfig.phones.displayPrimary}</span>
              </a>

              <button
                onClick={() => {
                  if (onOpenConsultation) {
                    onOpenConsultation();
                  } else {
                    handleNavClick('#consultation');
                  }
                }}
                className="relative inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider text-[#0a1426] bg-gradient-to-r from-[#dfc88e] via-[#d1b164] to-[#c29b41] hover:brightness-105 transition-all duration-300 shadow-[0_4px_20px_rgba(209,177,100,0.3)] hover:shadow-[0_6px_25px_rgba(209,177,100,0.45)] hover:-translate-y-0.5 active:translate-y-0"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book a Consultation</span>
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex xl:hidden items-center gap-2">
              <button
                onClick={() => {
                  if (onOpenConsultation) {
                    onOpenConsultation();
                  } else {
                    handleNavClick('#consultation');
                  }
                }}
                className="sm:hidden px-3 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-wider text-[#0a1426] bg-[#d1b164]"
              >
                Book
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/80 transition-colors focus:outline-none"
                aria-label="Toggle mobile menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6 text-[#d1b164]" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 top-[60px] z-30 bg-[#0a1426]/98 backdrop-blur-xl border-b border-[#d1b164]/20 shadow-2xl xl:hidden max-h-[calc(100vh-60px)] overflow-y-auto"
          >
            <div className="px-6 py-6 space-y-3">
              <div className="border-b border-slate-800 pb-3 mb-3">
                <p className="text-[11px] uppercase tracking-widest text-[#d1b164] font-semibold">
                  Personal Insurance Advisory
                </p>
                <p className="text-slate-400 text-xs mt-1">Sruthy | Financial Protection Consultant</p>
              </div>

              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.href)}
                  className="w-full text-left py-2.5 px-3 rounded-lg text-sm font-medium text-slate-200 hover:bg-[#182d4d]/60 hover:text-[#d1b164] transition-all flex items-center justify-between"
                >
                  <span>{item.label}</span>
                  <ArrowRight className="w-4 h-4 text-slate-600" />
                </button>
              ))}

              <div className="pt-4 mt-4 border-t border-slate-800 space-y-3">
                <a
                  href={`tel:${agentConfig.phones.primary}`}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-slate-700 text-slate-200 text-xs font-semibold"
                >
                  <Phone className="w-4 h-4 text-[#d1b164]" />
                  <span>Call Advisor: {agentConfig.phones.displayPrimary}</span>
                </a>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    if (onOpenConsultation) {
                      onOpenConsultation();
                    } else {
                      handleNavClick('#consultation');
                    }
                  }}
                  className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#dfc88e] to-[#c29b41] text-[#0a1426] text-xs font-bold uppercase tracking-wider shadow-lg flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book a Consultation</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
