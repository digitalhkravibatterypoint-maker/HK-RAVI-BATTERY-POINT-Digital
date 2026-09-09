import React, { useState } from 'react';
import { Shield, CheckCircle, ArrowRight } from 'lucide-react';
import { BRANDS_LIST } from '../data/batteryData';
import { BrandInfo } from '../types';

interface BrandCarouselProps {
  onSelectBrand?: (brandName: string) => void;
}

export const BrandCarousel: React.FC<BrandCarouselProps> = ({ onSelectBrand }) => {
  const [activeBrandModal, setActiveBrandModal] = useState<BrandInfo | null>(null);

  return (
    <section className="py-16 sm:py-20 bg-slate-100/70 dark:bg-slate-950 border-y border-slate-200/80 dark:border-slate-800/80 transition-colors overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-red-600 dark:text-red-400">
            Certified Authorized Partner
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mt-1">
            Top Battery Brands in Stock
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
            Direct-from-factory authorized warranty, sealed units, and fresh manufacturing dates.
          </p>
        </div>

        {/* Horizontal Brand Carousel / Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4">
          {BRANDS_LIST.map(brand => (
            <button
              key={brand.name}
              onClick={() => {
                setActiveBrandModal(brand);
                if (onSelectBrand) onSelectBrand(brand.name);
              }}
              className="group bg-white dark:bg-slate-900 rounded-md p-4 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-red-500 transition-all flex flex-col items-center justify-center text-center cursor-pointer transform hover:-translate-y-1"
            >
              {/* Battery Product Image */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 mb-2.5 rounded-md overflow-hidden bg-white dark:bg-slate-800 p-1.5 border border-slate-200/80 dark:border-slate-700/60 shadow-sm flex items-center justify-center transition-transform duration-200 group-hover:scale-105">
                {brand.batteryImage ? (
                  <img
                    src={brand.batteryImage}
                    alt={`${brand.name} Battery`}
                    className="w-full h-full object-contain rounded-sm"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div
                    className="w-full h-full rounded-sm flex items-center justify-center font-black text-xs sm:text-sm tracking-tighter"
                    style={{
                      backgroundColor: `${brand.accentColor}15`,
                      color: brand.accentColor,
                    }}
                  >
                    {brand.logoText.slice(0, 3)}
                  </div>
                )}
              </div>

              <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white group-hover:text-red-600 transition-colors">
                {brand.name}
              </span>

              <span className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5 line-clamp-1">
                {brand.specialty.split(',')[0]}
              </span>
            </button>
          ))}
        </div>

        {/* Scrolling Ticker for Mobile Dynamism */}
        <div className="mt-8 pt-4 border-t border-slate-200/60 dark:border-slate-800/80 flex items-center justify-center gap-6 text-xs text-slate-500 dark:text-slate-400 font-medium overflow-x-auto whitespace-nowrap scrollbar-none py-1">
          <span className="flex items-center gap-1.5">
            <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
            Exide Official Dealer
          </span>
          <span>•</span>
          <span className="flex items-center gap-1.5">
            <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
            Amaron Pitstop Associate
          </span>
          <span>•</span>
          <span className="flex items-center gap-1.5">
            <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
            Luminous Power Hub Partner
          </span>
          <span>•</span>
          <span className="flex items-center gap-1.5">
            <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
            SF Sonic Certified Center
          </span>
        </div>
      </div>

      {/* Brand Info Modal */}
      {activeBrandModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white dark:bg-slate-900 rounded-md max-w-md w-full border border-slate-200 dark:border-slate-800 shadow-2xl p-6 relative">
            <div className="flex items-center gap-3.5 mb-4">
              <div className="w-16 h-16 rounded-md overflow-hidden bg-white dark:bg-slate-800 p-1.5 border border-slate-200 dark:border-slate-700 flex items-center justify-center shadow-sm flex-shrink-0">
                {activeBrandModal.batteryImage ? (
                  <img
                    src={activeBrandModal.batteryImage}
                    alt={`${activeBrandModal.name} Battery`}
                    className="w-full h-full object-contain"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div
                    className="w-full h-full rounded-sm flex items-center justify-center font-black text-lg"
                    style={{
                      backgroundColor: `${activeBrandModal.accentColor}20`,
                      color: activeBrandModal.accentColor,
                    }}
                  >
                    {activeBrandModal.name.slice(0, 3)}
                  </div>
                )}
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  {activeBrandModal.name}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {activeBrandModal.origin}
                </p>
              </div>
            </div>

            <div className="space-y-3 text-sm text-slate-600 dark:text-slate-300 mb-5">
              <p>
                <strong>Focus Area:</strong> {activeBrandModal.specialty}
              </p>
              <div>
                <strong>Popular Series in Stock:</strong>
                <ul className="list-disc list-inside mt-1 text-xs space-y-1 text-slate-700 dark:text-slate-200">
                  {activeBrandModal.popularModels.map(m => (
                    <li key={m}>{m}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => setActiveBrandModal(null)}
                className="flex-1 py-2.5 px-4 rounded-md border border-slate-300 dark:border-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                Close
              </button>
              <a
                href={`https://wa.me/919742771428?text=Hello%20HK%20Ravi%20Battery%20Point,%20please%20share%20latest%20pricing%20for%20${encodeURIComponent(
                  activeBrandModal.name
                )}%20batteries.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 px-4 rounded-md bg-red-600 hover:bg-red-700 text-white text-xs font-bold text-center transition-colors"
              >
                Inquire Price
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
