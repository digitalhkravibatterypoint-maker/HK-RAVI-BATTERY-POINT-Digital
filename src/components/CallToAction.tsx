import React from 'react';
import { Phone, Navigation, MessageCircle, Zap, ShieldCheck } from 'lucide-react';
import { INDIAN_ASSETS } from '../data/batteryData';

export const CallToAction: React.FC = () => {
  return (
    <section className="relative py-20 sm:py-24 overflow-hidden bg-slate-950 text-white">
      {/* High-power automotive & battery background imagery with 95% opacity */}
      <img
        src={INDIAN_ASSETS.carBattery}
        alt="Automotive battery power background"
        referrerPolicy="no-referrer"
        loading="lazy"
        style={{ opacity: 0.95 }}
        className="absolute inset-0 w-full h-full object-cover object-center opacity-95 filter brightness-75"
      />

      {/* Modern Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/75 via-slate-950/65 to-blue-950/60" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(245,158,11,0.15),transparent_50%)]" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Glowing Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-md bg-red-600/10 border border-red-600/40 text-red-400 text-xs sm:text-sm font-bold uppercase tracking-wider mb-6 backdrop-blur-md">
          <Zap className="w-4 h-4 text-red-400 animate-pulse" />
          <span>Express 30-Minute Doorstep Battery Dispatch</span>
        </div>

        {/* Main Headline */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight mb-4 drop-shadow-md">
          Need a Battery? <span className="text-red-500">We've Got the Power!</span>
        </h2>

        {/* Description */}
        <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          Get reliable battery solutions and fast professional service today. Zero hassle, genuine warranty, and instant old battery trade-in discounts.
        </p>

        {/* 3 Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="tel:+919742771428"
            className="inline-flex items-center gap-2.5 bg-red-600 hover:bg-red-700 text-white font-extrabold px-7 py-4 rounded-md shadow-xl hover:shadow-red-600/25 transition-all text-base transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <Phone className="w-5 h-5 fill-white" />
            <span>Call Us</span>
          </a>

          <a
            href="https://maps.app.goo.gl/NjscCZPUAvWybaGE7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-slate-900/90 hover:bg-slate-800 text-white font-bold px-7 py-4 rounded-md border border-slate-700/80 backdrop-blur-md transition-all text-base transform hover:-translate-y-0.5"
          >
            <Navigation className="w-5 h-5 text-red-400" />
            <span>Get Directions</span>
          </a>

          <a
            href="https://wa.me/919742771428?text=Hello%20HK%20Ravi%20Battery%20Point,%20I%20need%20urgent%20battery%20assistance/replacement%20in%20Bangalore."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-7 py-4 rounded-md shadow-lg transition-all text-base transform hover:-translate-y-0.5"
          >
            <MessageCircle className="w-5 h-5 fill-white" />
            <span>WhatsApp Us</span>
          </a>
        </div>

        {/* Guarantee footer */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-slate-400 font-medium">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400" /> Authorized Dealer
          </span>
          <span>•</span>
          <span>Free Battery Health Check</span>
          <span>•</span>
          <span>Open 7 Days a Week (8:00 AM - 9:30 PM)</span>
        </div>
      </div>
    </section>
  );
};
