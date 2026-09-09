import React from 'react';
import { Award, ShieldCheck, Tag, Clock, HeartHandshake, CheckCircle2, Shield } from 'lucide-react';
import { WHY_CHOOSE_US_ITEMS } from '../data/batteryData';

export const WhyChooseUs: React.FC = () => {
  const getFeatureIcon = (iconName: string) => {
    switch (iconName) {
      case 'Award':
        return <Award className="w-6 h-6 text-red-600" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-red-600" />;
      case 'Tag':
        return <Tag className="w-6 h-6 text-red-600" />;
      case 'Clock':
        return <Clock className="w-6 h-6 text-red-600" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-6 h-6 text-red-600" />;
      default:
        return <Shield className="w-6 h-6 text-red-600" />;
    }
  };

  return (
    <section className="py-20 sm:py-28 bg-white dark:bg-slate-900 transition-colors relative overflow-hidden">
      {/* Subtle background ambient light */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 bg-red-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-72 h-72 bg-slate-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with 100% Genuine Service Badge */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14">
          {/* Visual Badge: 100% Genuine Service */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-md bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs sm:text-sm font-extrabold tracking-wide uppercase shadow-sm mb-4">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span>100% Genuine Service & Warranty</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            Why HK Ravi Battery Point?
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            With two decades of frontline automotive and energy experience, we combine dealer-direct pricing with dependable speed.
          </p>
        </div>

        {/* 5 Premium Feature Cards Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {WHY_CHOOSE_US_ITEMS.map((item, idx) => (
            <div
              key={idx}
              className={`bg-slate-50 dark:bg-slate-950 rounded-lg border border-slate-200/80 dark:border-slate-800 p-7 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 relative group overflow-hidden ${
                idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              {/* Corner accent glow */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-red-600/5 rounded-bl-full group-hover:bg-red-600/10 transition-colors" />

              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-md bg-red-600/10 dark:bg-red-600/20 border border-red-600/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  {getFeatureIcon(item.icon)}
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-red-600 dark:text-red-400">
                    Advantage 0{idx + 1}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-0.5">
                    {item.title}
                  </h3>
                </div>
              </div>

              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {item.description}
              </p>

              <div className="mt-4 pt-3 border-t border-slate-200/60 dark:border-slate-800/80 flex items-center gap-1.5 text-xs font-semibold text-red-600 dark:text-red-400">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Standard on every order</span>
              </div>
            </div>
          ))}

          {/* Special Assurance Card in 6th Slot */}
          <div className="bg-gradient-to-br from-red-600 to-red-700 text-white rounded-lg p-7 shadow-lg flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-md bg-white text-red-600 flex items-center justify-center mb-4 shadow">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-black mb-2">Original Manufacturer Guarantee</h3>
              <p className="text-xs sm:text-sm text-red-100 font-medium leading-relaxed">
                Every battery sold includes a registered manufacturer warranty card, tamper-proof serial code, and zero-hassle pro-rata replacement claims.
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-white/20 flex items-center justify-between text-xs font-bold">
              <span>Authorized Store #KA-BLR-842</span>
              <span>100% Genuine</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
