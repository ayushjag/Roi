
import { X } from 'lucide-react';
import { useState } from 'react';

interface StickyCTAProps {
  show: boolean;
  onShowForm: () => void;
}

const StickyCTA = ({ show, onShowForm }: StickyCTAProps) => {
  const [dismissed, setDismissed] = useState(false);

  if (!show || dismissed) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-40 animate-slide-in-right">
      <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-3 sm:p-4 shadow-2xl">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="hidden sm:block w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-xl flex items-center justify-center">
                💰
              </div>
              <div>
                <h4 className="font-semibold text-base sm:text-lg">Great! You've calculated your ROI</h4>
                <p className="text-blue-100 text-xs sm:text-sm">Get your detailed savings report and implementation guide</p>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-2 sm:gap-3">
            <button 
              onClick={onShowForm}
              className="bg-white text-blue-600 font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-xl hover:bg-blue-50 transition-colors text-sm sm:text-base"
            >
              Get Full Report
            </button>
            <button 
              onClick={() => setDismissed(true)}
              className="p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyCTA;
