
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import CalculatorWidget from '@/components/CalculatorWidget';
import BenefitsSection from '@/components/BenefitsSection';
import SocialProofSection from '@/components/SocialProofSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import StickyCTA from '@/components/StickyCTA';
import Footer from '@/components/Footer';
import { useState } from 'react';

const Index = () => {
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [calculatorUsed, setCalculatorUsed] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-slate-900 dark:via-blue-950 dark:to-purple-950">
      <Header />
      
      <HeroSection />
      <CalculatorWidget 
        onCalculate={() => setCalculatorUsed(true)}
        onShowLeadForm={() => setShowLeadForm(true)}
      />
      <BenefitsSection />
      <SocialProofSection />
      <HowItWorksSection />
      <StickyCTA 
        show={calculatorUsed} 
        onShowForm={() => setShowLeadForm(true)}
      />
      <Footer />
      
      {showLeadForm && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-card rounded-2xl p-6 sm:p-8 max-w-md w-full shadow-2xl animate-scale-in">
            <h3 className="text-xl sm:text-2xl font-bold text-card-foreground mb-2">Get Your Full ROI Report</h3>
            <p className="text-muted-foreground mb-4 sm:mb-6 text-sm sm:text-base">Enter your email to receive a detailed analysis and optimization recommendations.</p>
            <form className="space-y-4">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="w-full px-4 py-3 border border-border bg-background text-foreground rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              />
              <div className="flex flex-col sm:flex-row gap-3">
                <button 
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200"
                >
                  Get Report
                </button>
                <button 
                  type="button"
                  onClick={() => setShowLeadForm(false)}
                  className="px-6 py-3 border border-border rounded-lg text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  Later
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
