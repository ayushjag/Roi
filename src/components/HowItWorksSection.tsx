
import { Calculator, BarChart3, TrendingUp } from 'lucide-react';

const HowItWorksSection = () => {
  const steps = [
    {
      number: "01",
      icon: Calculator,
      title: "Enter Your Data",
      description: "Input your current costs, team size, and operational metrics in our intuitive calculator.",
      color: "from-blue-500 to-blue-600"
    },
    {
      number: "02", 
      icon: BarChart3,
      title: "Calculate Impact",
      description: "Our algorithm instantly analyzes your data and identifies optimization opportunities.",
      color: "from-purple-500 to-purple-600"
    },
    {
      number: "03",
      icon: TrendingUp,
      title: "Save & Scale",
      description: "Implement recommendations and track your savings as they compound over time.",
      color: "from-green-500 to-green-600"
    }
  ];

  return (
    <div className="py-12 sm:py-20 bg-gradient-to-br from-muted/50 to-blue-50 dark:from-muted/30 dark:to-blue-950/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Three simple steps to unlock massive cost savings and prove ROI to your stakeholders
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connection Lines - Hidden on mobile */}
          <div className="hidden md:block absolute top-24 left-1/3 right-1/3 h-0.5 bg-gradient-to-r from-blue-200 to-purple-200 dark:from-blue-700 dark:to-purple-700"></div>
          
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="text-center group">
                {/* Step Number */}
                <div className={`inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${step.color} text-white rounded-2xl font-bold text-lg sm:text-xl mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {step.number}
                </div>
                
                {/* Icon */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 bg-card rounded-2xl shadow-lg flex items-center justify-center group-hover:shadow-xl transition-all duration-300">
                  <step.icon className={`w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r ${step.color} bg-clip-text text-transparent`} />
                </div>
                
                {/* Content */}
                <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3 sm:mb-4">
                  {step.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA Section */}
        <div className="mt-12 sm:mt-16 text-center">
          <div className="bg-card rounded-3xl p-8 sm:p-12 shadow-xl max-w-4xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-bold text-card-foreground mb-4">
              Ready to start saving?
            </h3>
            <p className="text-muted-foreground text-base sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto">
              Join thousands of companies who have already optimized their spending and proven ROI to stakeholders.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl hover:shadow-lg transition-all duration-200 hover:scale-105">
                Calculate Your ROI Now
              </button>
              <button className="w-full sm:w-auto text-muted-foreground font-medium px-6 sm:px-8 py-3 sm:py-4 hover:text-foreground transition-colors">
                Schedule a Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksSection;
