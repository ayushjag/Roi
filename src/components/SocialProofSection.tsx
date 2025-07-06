
const SocialProofSection = () => {
  return (
    <div className="py-12 sm:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl font-bold text-foreground mb-4">
            Real Results from Real Companies
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground">
            See how leading organizations are transforming their cost management
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Case Study */}
          <div className="space-y-6 sm:space-y-8">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 rounded-2xl p-6 sm:p-8">
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-lg sm:text-xl">
                  TC
                </div>
                <div className="ml-3 sm:ml-4">
                  <div className="font-semibold text-foreground text-sm sm:text-base">TechCorp Solutions</div>
                  <div className="text-muted-foreground text-xs sm:text-sm">Fortune 500 Technology Company</div>
                </div>
              </div>
              
              <blockquote className="text-base sm:text-lg text-foreground mb-4 sm:mb-6 italic">
                "In just 6 months, we identified and eliminated $2.3M in unnecessary spending. 
                The ROI calculator helped us present a compelling case to our board, 
                and the results speak for themselves."
              </blockquote>
              
              <div className="flex items-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-muted rounded-full flex items-center justify-center text-muted-foreground font-semibold text-sm">
                  SM
                </div>
                <div className="ml-3">
                  <div className="font-medium text-foreground text-sm sm:text-base">Sarah Mitchell</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Chief Financial Officer</div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-4 sm:gap-6 text-center">
              <div className="bg-muted/50 rounded-xl p-4 sm:p-6">
                <div className="text-2xl sm:text-3xl font-bold text-green-600 mb-2">$2.3M</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Total Savings</div>
              </div>
              <div className="bg-muted/50 rounded-xl p-4 sm:p-6">
                <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-2">6</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Months to ROI</div>
              </div>
              <div className="bg-muted/50 rounded-xl p-4 sm:p-6">
                <div className="text-2xl sm:text-3xl font-bold text-purple-600 mb-2">340%</div>
                <div className="text-xs sm:text-sm text-muted-foreground">ROI Achieved</div>
              </div>
            </div>
          </div>
          
          {/* Screenshot/Visual */}
          <div className="relative mt-8 lg:mt-0">
            <div className="bg-gradient-to-br from-gray-900 to-gray-700 rounded-2xl p-6 sm:p-8 shadow-2xl">
              <div className="bg-card rounded-lg p-4 sm:p-6 mb-4 sm:mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold text-card-foreground text-sm sm:text-base">Monthly Cost Analysis</h4>
                  <div className="text-xs sm:text-sm text-green-600 font-medium">↓ 68% reduction</div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground text-sm">Previous Spend</span>
                    <span className="font-semibold text-foreground text-sm">$47,200</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground text-sm">Optimized Spend</span>
                    <span className="font-semibold text-green-600 text-sm">$15,100</span>
                  </div>
                  <div className="border-t border-border pt-3 flex justify-between items-center">
                    <span className="font-medium text-foreground text-sm">Monthly Savings</span>
                    <span className="font-bold text-green-600 text-base sm:text-lg">$32,100</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-4 text-white text-center">
                <div className="text-xl sm:text-2xl font-bold mb-1">$385,200</div>
                <div className="text-blue-100 text-sm">Projected Annual Savings</div>
              </div>
            </div>
            
            <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 bg-green-500 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-full font-semibold text-xs sm:text-sm shadow-lg">
              Live Dashboard
            </div>
          </div>
        </div>
        
        {/* Company Logos */}
        <div className="mt-16 sm:mt-20">
          <p className="text-center text-muted-foreground mb-6 sm:mb-8 text-sm sm:text-base">Trusted by leading companies worldwide</p>
          <div className="flex justify-center items-center space-x-8 sm:space-x-12 opacity-50">
            <div className="w-16 h-8 sm:w-24 sm:h-12 bg-muted rounded flex items-center justify-center font-bold text-muted-foreground text-xs sm:text-sm">
              ACME
            </div>
            <div className="w-16 h-8 sm:w-24 sm:h-12 bg-muted rounded flex items-center justify-center font-bold text-muted-foreground text-xs sm:text-sm">
              TECH+
            </div>
            <div className="w-16 h-8 sm:w-24 sm:h-12 bg-muted rounded flex items-center justify-center font-bold text-muted-foreground text-xs sm:text-sm">
              GLOBAL
            </div>
            <div className="w-16 h-8 sm:w-24 sm:h-12 bg-muted rounded flex items-center justify-center font-bold text-muted-foreground text-xs sm:text-sm">
              VERTEX
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialProofSection;
