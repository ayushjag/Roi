
import { Calculator, Play } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 dark:from-blue-950 dark:via-blue-900 dark:to-purple-950 text-white">
      <div className="absolute inset-0 bg-black/20 dark:bg-black/40"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 dark:from-blue-800/30 dark:to-purple-800/30"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
        <div className="text-center space-y-6 sm:space-y-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-white/10 dark:bg-white/5 backdrop-blur-sm border border-white/20 dark:border-white/10 rounded-full px-4 sm:px-6 py-2 text-xs sm:text-sm font-medium">
            <Calculator className="w-3 h-3 sm:w-4 sm:h-4" />
            ROI Calculator
          </div>
          
          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold tracking-tight px-4">
            See your ROI in{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 dark:from-blue-300 dark:to-purple-300 bg-clip-text text-transparent">
              30 seconds
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl lg:text-2xl text-blue-100 dark:text-blue-200 max-w-3xl mx-auto leading-relaxed px-4">
            Plug in your numbers, watch your savings multiply. 
            Get instant visibility into cost optimization opportunities.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4">
            <button className="w-full sm:w-auto group bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all duration-300 hover:shadow-2xl hover:scale-105">
              Start Calculating →
            </button>
            
            <button className="w-full sm:w-auto group flex items-center justify-center gap-3 text-white/90 hover:text-white transition-colors">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 backdrop-blur-sm border border-white/20 dark:border-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-all duration-300">
                <Play className="w-4 h-4 sm:w-5 sm:h-5 ml-0.5" />
              </div>
              <span className="font-medium text-sm sm:text-base">Watch 60s Demo</span>
            </button>
          </div>
        </div>
        
        <div className="mt-12 sm:mt-16 relative px-4">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 dark:from-blue-600/30 dark:to-purple-600/30 rounded-2xl blur-3xl"></div>
          <div className="relative bg-white/10 dark:bg-white/5 backdrop-blur-sm border border-white/20 dark:border-white/10 rounded-2xl p-4 sm:p-8 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-center">
              <div className="space-y-2">
                <div className="text-2xl sm:text-3xl font-bold text-blue-400">$2.3M</div>
                <div className="text-xs sm:text-sm text-blue-100">Average Savings</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl sm:text-3xl font-bold text-purple-400">68%</div>
                <div className="text-xs sm:text-sm text-blue-100">Cost Reduction</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl sm:text-3xl font-bold text-green-400">3.2x</div>
                <div className="text-xs sm:text-sm text-blue-100">ROI Multiplier</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
