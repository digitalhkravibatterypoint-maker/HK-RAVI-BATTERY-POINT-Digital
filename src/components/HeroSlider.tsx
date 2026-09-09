import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Phone, ArrowRight, ShieldCheck, Zap, Clock, BatteryCharging } from 'lucide-react';
import { HERO_SLIDES } from '../data/batteryData';

interface HeroSliderProps {
  onSelectCategory?: (category: string) => void;
}

export const HeroSlider: React.FC<HeroSliderProps> = ({ onSelectCategory }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const totalSlides = HERO_SLIDES.length;

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % totalSlides);
    }, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, totalSlides]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + totalSlides) % totalSlides);
    setIsAutoPlaying(false);
  };

  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % totalSlides);
    setIsAutoPlaying(false);
  };

  const activeSlideData = HERO_SLIDES[currentSlide];

  return (
    <section
      id="home"
      className="relative w-full overflow-hidden bg-slate-950 text-white min-h-[580px] sm:min-h-[640px] lg:min-h-[720px] flex items-center"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Background Slides with smooth fade/zoom */}
      {HERO_SLIDES.map((slide, index) => {
        const isActive = index === currentSlide;
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.alt}
              referrerPolicy="no-referrer"
              style={{ opacity: 0.95 }}
              className={`w-full h-full object-cover object-center opacity-95 transform transition-transform duration-7000 ease-out ${
                isActive ? 'scale-105' : 'scale-100'
              }`}
            />
            {/* Cinematic Gradient Overlays allowing vivid 95% background image to shine */}
            <div className={`absolute inset-0 bg-gradient-to-r ${slide.bgGradient} opacity-50`} />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_40%,rgba(220,38,38,0.15),transparent_60%)]" />
          </div>
        );
      })}

      {/* Decorative Grid Texture */}
      <div className="absolute inset-0 z-15 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />

      {/* Hero Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 w-full">
        <div className="max-w-3xl">
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-red-600/15 border border-red-500/40 text-red-400 text-xs sm:text-sm font-semibold tracking-wide backdrop-blur-md mb-4 sm:mb-6 animate-in fade-in duration-500">
            <Zap className="w-4 h-4 text-red-400 animate-bounce" />
            <span>{activeSlideData.badge}</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight mb-4 drop-shadow-md">
            {activeSlideData.headline}
          </h1>

          {/* Subheadline / Tagline */}
          <p className="text-lg sm:text-xl font-medium text-red-400 mb-3">
            {activeSlideData.subheadline}
          </p>

          {/* Description */}
          <p className="text-base sm:text-lg text-slate-200 mb-8 leading-relaxed max-w-2xl">
            {activeSlideData.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-3.5 sm:gap-4">
            <a
              id="hero-primary-cta"
              href={activeSlideData.primaryHref}
              onClick={() => {
                if (onSelectCategory) {
                  if (currentSlide === 0) onSelectCategory('inverter');
                  else if (currentSlide === 1) onSelectCategory('automotive');
                  else if (currentSlide === 2) onSelectCategory('automotive');
                  else if (currentSlide === 3) onSelectCategory('industrial');
                }
              }}
              className="inline-flex items-center gap-2.5 bg-red-600 hover:bg-red-700 text-white font-bold px-6 sm:px-7 py-3.5 sm:py-4 rounded-md shadow-lg hover:shadow-red-600/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0 text-base"
            >
              <span>{activeSlideData.primaryCta}</span>
              <ArrowRight className="w-5 h-5" />
            </a>

            <a
              id="hero-call-cta"
              href="tel:+919742771428"
              className="inline-flex items-center gap-2.5 bg-slate-900/85 hover:bg-slate-800 text-white font-semibold px-6 sm:px-7 py-3.5 sm:py-4 rounded-md border border-slate-700/80 backdrop-blur-md transition-all transform hover:-translate-y-0.5 text-base"
            >
              <Phone className="w-5 h-5 text-red-400" />
              <span>Call Us</span>
            </a>
          </div>

          {/* Quick Value Pillars */}
          <div className="mt-10 sm:mt-12 pt-6 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 text-xs sm:text-sm text-slate-300">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-red-400 flex-shrink-0" />
              <span>30-Min Fast Delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span>100% Genuine with Warranty</span>
            </div>
            <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
              <BatteryCharging className="w-4 h-4 text-sky-400 flex-shrink-0" />
              <span>Best Scrap Exchange Rebate</span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        aria-label="Previous Slide"
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-25 p-2 sm:p-2.5 rounded-md bg-slate-950/70 hover:bg-red-600 hover:text-white text-white border border-slate-700/60 backdrop-blur-md transition-all opacity-80 hover:opacity-100"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      <button
        onClick={nextSlide}
        aria-label="Next Slide"
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-25 p-2 sm:p-2.5 rounded-md bg-slate-950/70 hover:bg-red-600 hover:text-white text-white border border-slate-700/60 backdrop-blur-md transition-all opacity-80 hover:opacity-100"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-25 flex items-center gap-2.5">
        {HERO_SLIDES.map((slide, idx) => (
          <button
            key={slide.id}
            onClick={() => goToSlide(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`transition-all duration-300 rounded-sm ${
              idx === currentSlide
                ? 'w-8 h-2.5 bg-red-600 shadow-md'
                : 'w-2.5 h-2.5 bg-white/40 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
    </section>
  );
};
