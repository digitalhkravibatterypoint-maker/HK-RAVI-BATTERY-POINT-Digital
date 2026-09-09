import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, CheckCircle2 } from 'lucide-react';
import { CUSTOMER_REVIEWS } from '../data/batteryData';

export const TestimonialCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevReview = () => {
    setCurrentIndex(prev => (prev === 0 ? CUSTOMER_REVIEWS.length - 1 : prev - 1));
  };

  const nextReview = () => {
    setCurrentIndex(prev => (prev === CUSTOMER_REVIEWS.length - 1 ? 0 : prev + 1));
  };

  const activeReview = CUSTOMER_REVIEWS[currentIndex];

  return (
    <section className="py-20 sm:py-28 bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-red-600 dark:text-red-400">
              Verified Google Reviews (4.9 / 5.0)
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight mt-1">
              What Our Customers Say
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-300">
              Real feedback from car owners, bikers, and households across Jeevan Bhima Nagar & Bangalore.
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-2 self-start md:self-auto">
            <button
              onClick={prevReview}
              aria-label="Previous review"
              className="p-3 rounded-md border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 hover:bg-red-600 hover:text-white transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextReview}
              aria-label="Next review"
              className="p-3 rounded-md border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 hover:bg-red-600 hover:text-white transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Featured Testimonial Hero Card */}
        <div className="bg-slate-50 dark:bg-slate-950 rounded-lg border border-slate-200/80 dark:border-slate-800 p-8 sm:p-12 shadow-sm relative overflow-hidden">
          <Quote className="absolute top-6 right-8 w-20 h-20 text-slate-200 dark:text-slate-850 pointer-events-none opacity-60" />

          <div className="relative z-10 max-w-3xl">
            {/* Star Rating */}
            <div className="flex items-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i < activeReview.rating
                      ? 'text-amber-400 fill-amber-400'
                      : 'text-slate-300 dark:text-slate-700'
                  }`}
                />
              ))}
              <span className="ml-2 text-xs font-bold text-slate-700 dark:text-slate-300">
                5.0 Verified Experience
              </span>
            </div>

            {/* Review Comment */}
            <p className="text-lg sm:text-2xl text-slate-800 dark:text-slate-100 font-medium leading-relaxed italic mb-8">
              "{activeReview.comment}"
            </p>

            {/* Customer Author Info */}
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-md overflow-hidden border-2 border-red-600 shadow-md bg-red-100 dark:bg-red-950 flex items-center justify-center text-red-600 font-bold text-lg">
                <img
                  src={activeReview.avatar}
                  alt={activeReview.name}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                  className="w-full h-full object-cover"
                />
                <span className="select-none">
                  {activeReview.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                  {activeReview.name}
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                </h4>
                <p className="text-xs font-semibold text-red-600 dark:text-red-400">
                  {activeReview.vehicleOrAppliance}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {activeReview.location} • {activeReview.date}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mini Review Thumbnails Grid for instant browsing */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          {CUSTOMER_REVIEWS.filter((_, idx) => idx !== currentIndex).map(rev => (
            <div
              key={rev.id}
              onClick={() => setCurrentIndex(CUSTOMER_REVIEWS.findIndex(r => r.id === rev.id))}
              className="bg-slate-50/70 dark:bg-slate-950/60 rounded-md p-4 border border-slate-200/60 dark:border-slate-800/80 cursor-pointer hover:border-red-500 transition-colors"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-slate-900 dark:text-white">{rev.name}</span>
                <div className="flex text-amber-400">
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                  <span className="text-[11px] font-bold ml-1 text-slate-700 dark:text-slate-300">5.0</span>
                </div>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-2 italic">
                "{rev.comment}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
