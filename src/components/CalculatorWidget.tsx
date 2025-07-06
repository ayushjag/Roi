
import { useState } from 'react';
import { Calculator, TrendingUp, DollarSign } from 'lucide-react';

interface CalculatorWidgetProps {
  onCalculate: () => void;
  onShowLeadForm: () => void;
}

const CalculatorWidget = ({ onCalculate, onShowLeadForm }: CalculatorWidgetProps) => {
  const [users, setUsers] = useState(100);
  const [currentCost, setCurrentCost] = useState(50);
  const [timeSaved, setTimeSaved] = useState(2);
  const [results, setResults] = useState<{
    monthlySavings: number;
    yearlySavings: number;
    roi: number;
  } | null>(null);

  const calculateROI = () => {
    const hourlyRate = 75; // Average hourly rate
    const workingHoursPerMonth = 160;
    
    const monthlySavings = users * timeSaved * hourlyRate - (users * currentCost);
    const yearlySavings = monthlySavings * 12;
    const roi = (yearlySavings / (users * currentCost * 12)) * 100;
    
    setResults({
      monthlySavings: Math.max(0, monthlySavings),
      yearlySavings: Math.max(0, yearlySavings),
      roi: Math.max(0, roi)
    });
    
    onCalculate();
  };

  return (
    <div className="py-12 sm:py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-4xl font-bold text-foreground mb-4">
            Interactive ROI Calculator
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            See exactly how much you could save. Adjust the numbers and watch your ROI update in real-time.
          </p>
        </div>
        
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/50 dark:to-purple-950/50 rounded-3xl p-6 sm:p-8 lg:p-12 shadow-xl">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Input Section */}
            <div className="space-y-6 sm:space-y-8">
              <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-4 sm:mb-6">Your Current Situation</h3>
              
              <div className="space-y-4 sm:space-y-6">
                <div className="space-y-3">
                  <label className="block text-sm font-medium text-foreground">
                    Number of Users
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      value={users}
                      onChange={(e) => setUsers(Number(e.target.value))}
                      className="w-full px-4 py-3 border border-border bg-background text-foreground rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-base sm:text-lg"
                      min="1"
                    />
                  </div>
                  <div className="text-sm text-muted-foreground">Current team size using the system</div>
                </div>
                
                <div className="space-y-3">
                  <label className="block text-sm font-medium text-foreground">
                    Current Cost per User ($/month)
                  </label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
                    <input
                      type="number"
                      value={currentCost}
                      onChange={(e) => setCurrentCost(Number(e.target.value))}
                      className="w-full pl-10 pr-4 py-3 border border-border bg-background text-foreground rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-base sm:text-lg"
                      min="0"
                    />
                  </div>
                  <div className="text-sm text-muted-foreground">What you're currently paying per user</div>
                </div>
                
                <div className="space-y-3">
                  <label className="block text-sm font-medium text-foreground">
                    Time Saved per User (hours/week)
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      value={timeSaved}
                      onChange={(e) => setTimeSaved(Number(e.target.value))}
                      className="w-full px-4 py-3 border border-border bg-background text-foreground rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-base sm:text-lg"
                      min="0"
                      step="0.5"
                    />
                  </div>
                  <div className="text-sm text-muted-foreground">Hours saved per user per week with optimization</div>
                </div>
              </div>
              
              <button 
                onClick={calculateROI}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 sm:py-4 rounded-xl hover:shadow-lg transition-all duration-200 hover:scale-105"
              >
                <Calculator className="inline w-5 h-5 mr-2" />
                Calculate My ROI
              </button>
            </div>
            
            {/* Results Section */}
            <div className="space-y-4 sm:space-y-6">
              <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-4 sm:mb-6">Your Potential Savings</h3>
              
              {results ? (
                <div className="space-y-4 sm:space-y-6 animate-fade-in">
                  <div className="bg-card rounded-2xl p-4 sm:p-6 shadow-md border border-border">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-card-foreground font-medium text-sm sm:text-base">Monthly Savings</span>
                      <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />
                    </div>
                    <div className="text-2xl sm:text-3xl font-bold text-green-600">
                      ${results.monthlySavings.toLocaleString()}
                    </div>
                  </div>
                  
                  <div className="bg-card rounded-2xl p-4 sm:p-6 shadow-md border border-border">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-card-foreground font-medium text-sm sm:text-base">Yearly Savings</span>
                      <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" />
                    </div>
                    <div className="text-2xl sm:text-3xl font-bold text-blue-600">
                      ${results.yearlySavings.toLocaleString()}
                    </div>
                  </div>
                  
                  <div className="bg-card rounded-2xl p-4 sm:p-6 shadow-md border border-border">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-card-foreground font-medium text-sm sm:text-base">ROI Percentage</span>
                      <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-purple-500" />
                    </div>
                    <div className="text-2xl sm:text-3xl font-bold text-purple-600">
                      {results.roi.toFixed(1)}%
                    </div>
                  </div>
                  
                  <button 
                    onClick={onShowLeadForm}
                    className="w-full bg-gradient-to-r from-green-500 to-blue-600 text-white font-semibold py-3 sm:py-4 rounded-xl hover:shadow-lg transition-all duration-200 hover:scale-105"
                  >
                    Get Full ROI Report →
                  </button>
                </div>
              ) : (
                <div className="bg-card rounded-2xl p-6 sm:p-8 shadow-md border border-border text-center">
                  <Calculator className="w-12 h-12 sm:w-16 sm:h-16 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground text-sm sm:text-base">
                    Enter your numbers and click "Calculate My ROI" to see your potential savings
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalculatorWidget;
