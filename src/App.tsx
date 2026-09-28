import { useState } from 'react';
import { LoadingScreen } from './components/common/LoadingScreen';
import { Navbar } from './components/common/Navbar';
import { Hero } from './components/sections/Hero';
import { TrustStrip } from './components/sections/TrustStrip';
import { About } from './components/sections/About';
import { Solutions } from './components/sections/Solutions';
import { FindYourPlan } from './components/sections/FindYourPlan';
import { PremiumCalculator } from './components/sections/PremiumCalculator';
import { PlanComparison } from './components/sections/PlanComparison';
import { WhyChoose } from './components/sections/WhyChoose';
import { InsuranceJourney } from './components/sections/InsuranceJourney';
import { Testimonials } from './components/sections/Testimonials';
import { ClaimAssistance } from './components/sections/ClaimAssistance';
import { RenewalSupport } from './components/sections/RenewalSupport';
import { ConsultationBooking } from './components/sections/ConsultationBooking';
import { ContactSection } from './components/sections/ContactSection';
import { FAQSection } from './components/sections/FAQSection';
import { KnowledgeHub } from './components/sections/KnowledgeHub';
import { DigitalBusinessCard } from './components/common/DigitalBusinessCard';
import { Footer } from './components/common/Footer';
import { SruthyAssist } from './components/chatbot/SruthyAssist';
import { BackToTop } from './components/common/BackToTop';
import { ToastContainer } from './components/common/Toast';
import type { ToastMessage } from './components/common/Toast';
import { AdminDemoDrawer } from './components/admin/AdminDemoDrawer';
import { Database } from 'lucide-react';

export function App() {
  const [selectedRequirement, setSelectedRequirement] = useState<string>('Life Insurance');
  const [isAdminDrawerOpen, setIsAdminDrawerOpen] = useState(false);
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const addToast = (title: string, message?: string, type: 'success' | 'info' | 'error' = 'success') => {
    const newToast: ToastMessage = {
      id: 'toast-' + Date.now(),
      title,
      message,
      type,
    };
    setToasts((prev) => [...prev, newToast]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== newToast.id));
    }, 4500);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const scrollToSection = (sectionId: string) => {
    const el = document.querySelector(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectSolution = (title: string) => {
    setSelectedRequirement(title);
    scrollToSection('#consultation');
    addToast('Requirement Selected', `Pre-filled consultation for: ${title}`);
  };

  const handleDiscussRecommendedPlan = (planName: string) => {
    setSelectedRequirement(planName);
    scrollToSection('#consultation');
    addToast('Recommendation Loaded', `Discussing: ${planName}`);
  };

  const handlePersonalizedQuote = (details: string) => {
    setSelectedRequirement('Term Insurance');
    scrollToSection('#consultation');
    addToast('Quote Benchmark Attached', details, 'info');
  };

  return (
    <div className="min-h-screen bg-[#fafaf8] text-[#1e293b] flex flex-col selection:bg-[#d1b164]/30 selection:text-[#0a1426]">
      {/* 1. Premium Loading Screen Experience */}
      <LoadingScreen />

      {/* Toast Notification Stream */}
      <ToastContainer toasts={toasts} onDismiss={removeToast} />

      {/* 2. Sticky Navbar */}
      <Navbar onOpenConsultation={() => scrollToSection('#consultation')} />

      <main className="flex-grow">
        {/* 3. Hero Section */}
        <Hero
          onOpenConsultation={() => scrollToSection('#consultation')}
          onExploreSolutions={() => scrollToSection('#solutions')}
        />

        {/* 4. Trust Strip */}
        <TrustStrip />

        {/* 5. About Sruthy */}
        <About onTalkToSruthy={() => scrollToSection('#contact')} />

        {/* 6. Insurance Solutions */}
        <Solutions onSelectSolutionForConsultation={handleSelectSolution} />

        {/* 7. Find Your Plan (Interactive Assessment) */}
        <FindYourPlan onDiscussWithSruthy={handleDiscussRecommendedPlan} />

        {/* 8. Premium Calculator */}
        <PremiumCalculator onGetPersonalizedQuote={handlePersonalizedQuote} />

        {/* 9. Plan Comparison */}
        <PlanComparison onRequestGuidance={handleSelectSolution} />

        {/* 10. Why Choose Sruthy */}
        <WhyChoose />

        {/* 11. Insurance Journey Timeline */}
        <InsuranceJourney />

        {/* 12 & 13. Client Testimonials + Trust & Experience Stats */}
        <Testimonials />

        {/* 14. Claim Assistance */}
        <ClaimAssistance onNotify={addToast} />

        {/* 15. Renewal Support */}
        <RenewalSupport onNotify={addToast} />

        {/* 16. Consultation Booking Form */}
        <ConsultationBooking
          initialRequirement={selectedRequirement}
          onNotify={addToast}
        />

        {/* 20. Insurance Knowledge Hub */}
        <KnowledgeHub />

        {/* 19. FAQ Section */}
        <FAQSection />

        {/* 21. Digital Business Card */}
        <DigitalBusinessCard onNotify={addToast} />

        {/* 17. Contact Section */}
        <ContactSection onBookConsultation={() => scrollToSection('#consultation')} />
      </main>

      {/* 22. Premium Footer */}
      <Footer />

      {/* 18. AI Insurance Chatbot: Sruthy Assist */}
      <SruthyAssist />

      {/* Back to top scroll button */}
      <BackToTop />

      {/* 23. Admin Back-Office Lead Architecture Drawer Button */}
      <div className="fixed bottom-6 left-20 z-30 hidden sm:block">
        <button
          onClick={() => setIsAdminDrawerOpen(true)}
          className="flex items-center gap-2 px-3 py-2 rounded-full bg-[#0a1426]/90 border border-[#d1b164]/30 text-slate-300 hover:text-[#d1b164] hover:border-[#d1b164] text-[11px] font-semibold tracking-wider uppercase backdrop-blur-md shadow-lg transition-all"
          title="Inspect stored consultation requests, claims & renewals in demo CRM"
        >
          <Database className="w-3.5 h-3.5 text-[#d1b164]" />
          <span>Advisor CRM (Demo)</span>
        </button>
      </div>

      {/* Admin Demo Drawer */}
      <AdminDemoDrawer
        isOpen={isAdminDrawerOpen}
        onClose={() => setIsAdminDrawerOpen(false)}
        onNotify={addToast}
      />
    </div>
  );
}

export default App;
