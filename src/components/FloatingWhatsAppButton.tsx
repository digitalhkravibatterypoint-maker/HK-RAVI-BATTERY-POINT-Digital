import React, { useState } from 'react';
import { MessageCircle, Phone, Zap, X } from 'lucide-react';

export const FloatingWhatsAppButton: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <>
      {/* Floating Desktop / Tablet WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-40 hidden sm:flex flex-col items-end gap-2">
        {showTooltip && (
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-3 py-2 shadow-xl text-xs font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-2 animate-in fade-in slide-in-from-bottom-2 duration-300">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span>Chat with Battery Specialist</span>
            <button
              onClick={() => setShowTooltip(false)}
              className="text-slate-400 hover:text-slate-600 dark:hover:text-white ml-1"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

        <a
          id="floating-whatsapp-btn"
          href="https://wa.me/919742771428?text=Hello%20HK%20Ravi%20Battery%20Point,%20I%20need%20battery%20advice%20or%20doorstep%20service%20in%20Bangalore."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with HK Ravi Battery Point on WhatsApp"
          className="group relative w-14 h-14 bg-emerald-500 hover:bg-emerald-400 text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all active:scale-95"
        >
          {/* Animated pulse ring */}
          <span className="absolute -inset-1 rounded-full bg-emerald-500/40 animate-ping -z-10" />
          <MessageCircle className="w-7 h-7 fill-white" />
        </a>
      </div>

      {/* Mobile Sticky Bottom Action Bar for instant conversion */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 dark:bg-slate-950/95 backdrop-blur-md border-t border-slate-200/80 dark:border-slate-800/80 p-2.5 px-4 flex items-center gap-2 shadow-2xl">
        <a
          href="tel:+919742771428"
          className="flex-1 flex items-center justify-center gap-1.5 bg-red-600 hover:bg-red-700 text-white font-bold py-2.5 px-3 rounded-md text-xs shadow-sm active:scale-95"
        >
          <Phone className="w-4 h-4 fill-white" />
          <span>Call Now</span>
        </a>

        <a
          href="https://wa.me/919742771428?text=Hello%20HK%20Ravi%20Battery%20Point,%20I%20need%20battery%20advice%20in%20Bangalore."
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-1.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-2.5 px-3 rounded-md text-xs shadow-sm active:scale-95"
        >
          <MessageCircle className="w-4 h-4 fill-white" />
          <span>WhatsApp</span>
        </a>

        <a
          href="#battery-finder"
          className="flex items-center justify-center p-2.5 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-semibold rounded-md text-xs border border-slate-200 dark:border-slate-700 active:scale-95"
          aria-label="Find Battery"
        >
          <Zap className="w-4 h-4 text-red-600" />
        </a>
      </div>
    </>
  );
};
