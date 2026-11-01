import React, { useState } from 'react';
import { ShieldCheck, Award, Clock, Users, Wrench, CheckCircle, ArrowRight, Phone, Eye } from 'lucide-react';
import { COMPANY_STATS, INDIAN_ASSETS } from '../data/batteryData';

export const AboutSection: React.FC = () => {
  const [activePhoto, setActivePhoto] = useState<'facade' | 'inside'>('facade');

  return (
    <section id="about" className="py-20 sm:py-28 bg-slate-50 dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-red-600/10 text-red-600 dark:text-red-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Award className="w-4 h-4" />
            <span>Authorized Battery Distributor & Service Center</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            Welcome to HK Ravi Battery Point
          </h2>
          <div className="w-16 h-1 bg-red-600 mx-auto mt-4 rounded-sm" />
        </div>

        {/* Modern Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Automotive & Service Workshop Imagery */}
          <div className="lg:col-span-6 relative space-y-3">
            <div className="relative rounded-lg overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800 group">
              <img
                src={activePhoto === 'facade' ? INDIAN_ASSETS.shop : INDIAN_ASSETS.shopInside}
                alt="HK Ravi Battery Point store and service center in Jeevan Bhima Nagar Bangalore"
                referrerPolicy="no-referrer"
                className="w-full h-[400px] sm:h-[460px] object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

              {/* Photo Selector Switcher */}
              <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-slate-950/80 backdrop-blur-md p-1 rounded-md border border-white/20 z-10">
                <button
                  type="button"
                  onClick={() => setActivePhoto('facade')}
                  className={`px-2.5 py-1 text-xs font-bold rounded-sm transition-all ${
                    activePhoto === 'facade'
                      ? 'bg-red-600 text-white shadow-sm'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  Shop Front
                </button>
                <button
                  type="button"
                  onClick={() => setActivePhoto('inside')}
                  className={`px-2.5 py-1 text-xs font-bold rounded-sm transition-all ${
                    activePhoto === 'inside'
                      ? 'bg-red-600 text-white shadow-sm'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  Showroom Inside
                </button>
              </div>

              {/* Floating Highlight Card on Image */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md rounded-md p-4 sm:p-5 border border-slate-200/80 dark:border-slate-800 shadow-lg">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-md bg-red-600 flex items-center justify-center text-white font-black text-xl flex-shrink-0 shadow-md">
                    20+
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                      HK Ravi Battery Point
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      #514 10th Main Rd, Jeevan Bhima Nagar, HAL 3rd Stage, Bangalore - 560075
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Photo Caption Note */}
            <div className="flex items-center justify-between text-xs text-slate-500 px-1">
              <span>{activePhoto === 'facade' ? 'Official Storefront with Exide, Amaron & Luminous stocks' : 'Showroom interior & computerized battery testing facility'}</span>
              <a href="tel:+919742771428" className="text-red-600 hover:underline font-bold flex items-center gap-1">
                <Phone className="w-3.5 h-3.5" />
                <span>Call Us</span>
              </a>
            </div>

            {/* Decorative background aura */}
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
          </div>

          {/* Right Column: Company Narrative & Highlights */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-4 text-slate-700 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
              <p className="font-semibold text-slate-900 dark:text-white text-lg sm:text-xl">
                At HK Ravi Battery Point, we are committed to providing top-notch battery solutions for your vehicles and gadgets.
              </p>
              <p>
                With a focus on quality, reliability, and prompt service, we cater to all your battery requirements, ensuring you stay powered up wherever you go. Whether you need a fresh battery for your family hatchback, cruiser motorbike, commercial transport truck, or a heavy-duty inverter for your home and solar plant, our certified experts provide genuine products at wholesale-direct pricing.
              </p>
            </div>

            {/* Bullet Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                'Authorized dealer for Exide, Amaron & Luminous',
                '30-Minute doorstep delivery in Bangalore',
                'Digital computerized battery health checks',
                'Highest scrap rebate on old battery trade-in',
                '100% genuine products with manufacturer warranty',
                'Emergency 24/7 breakdown jumpstart support'
              ].map((point, index) => (
                <div key={index} className="flex items-start gap-2.5 text-sm text-slate-800 dark:text-slate-200">
                  <CheckCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                  <span>{point}</span>
                </div>
              ))}
            </div>

            {/* Quick Action Button */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="#products"
                className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-3 rounded-md transition-all shadow-md"
              >
                <span>Browse Products</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-slate-700 dark:text-slate-300 hover:text-red-600 dark:hover:text-red-400 font-bold text-sm"
              >
                <span>Visit Our Jeevan Bhima Nagar Store &rarr;</span>
              </a>
            </div>
          </div>
        </div>

        {/* Animated Statistics Strip */}
        <div className="mt-16 sm:mt-20 pt-12 border-t border-slate-200 dark:border-slate-800">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {COMPANY_STATS.map((stat, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-slate-900 rounded-lg p-6 border border-slate-200/80 dark:border-slate-800 text-center relative overflow-hidden shadow-sm hover:shadow-md transition-shadow group"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 to-red-700 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight mb-2">
                  <span className="text-red-600">{stat.value}</span>
                  <span>{stat.suffix}</span>
                </div>
                <div className="text-sm sm:text-base font-bold text-slate-800 dark:text-slate-200 mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  {stat.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
