
import { TrendingUp, Users, BarChart3 } from 'lucide-react';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Optimize Spend",
      description: "Identify cost reduction opportunities and eliminate wasteful spending across your organization.",
      stat: "Up to 40% reduction",
      color: "text-blue-600 dark:text-blue-400"
    },
    {
      icon: Users,
      title: "Scale Smarter",
      description: "Make data-driven decisions about team growth and resource allocation with confidence.",
      stat: "3x faster scaling",
      color: "text-purple-600 dark:text-purple-400"
    },
    {
      icon: BarChart3,
      title: "Prove Value to Stakeholders",
      description: "Present clear ROI metrics and business impact to secure budget and demonstrate success.",
      stat: "100% transparency",
      color: "text-green-600 dark:text-green-400"
    }
  ];

  return (
    <div className="py-12 sm:py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl font-bold text-foreground mb-4">
            Why Smart Companies Choose Our Platform
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Transform your cost management from reactive to strategic with data-driven insights and automated optimization.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-card rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className={`w-12 h-12 sm:w-16 sm:h-16 ${benefit.color} bg-opacity-10 dark:bg-opacity-20 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <benefit.icon className={`w-6 h-6 sm:w-8 sm:h-8 ${benefit.color}`} />
              </div>
              
              <h3 className="text-lg sm:text-xl font-semibold text-card-foreground mb-3">
                {benefit.title}
              </h3>
              
              <p className="text-muted-foreground mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                {benefit.description}
              </p>
              
              <div className={`text-xl sm:text-2xl font-bold ${benefit.color}`}>
                {benefit.stat}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 sm:mt-16 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-700 dark:to-purple-700 rounded-3xl p-8 sm:p-12 text-white text-center">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">
            Ready to optimize your spending?
          </h3>
          <p className="text-blue-100 dark:text-blue-200 text-base sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto">
            Join thousands of companies already saving millions through intelligent cost management and ROI optimization.
          </p>
          <button className="bg-white text-blue-600 font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl hover:shadow-lg transition-all duration-200 hover:scale-105">
            Start Free Trial →
          </button>
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection;
