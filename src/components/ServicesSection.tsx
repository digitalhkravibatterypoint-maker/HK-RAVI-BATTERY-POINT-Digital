import React, { useState } from 'react';
import {
  Car,
  Bike,
  Truck,
  Home,
  Sun,
  Factory,
  Activity,
  Zap,
  Clock,
  CheckCircle,
  ArrowRight,
  Phone,
  ShieldAlert,
  X
} from 'lucide-react';
import { SERVICES_LIST } from '../data/batteryData';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onBookService?: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onBookService }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const getServiceIcon = (name: string) => {
    switch (name) {
      case 'Car':
        return <Car className="w-6 h-6 text-red-600" />;
      case 'Bike':
        return <Bike className="w-6 h-6 text-red-600" />;
      case 'Truck':
        return <Truck className="w-6 h-6 text-red-600" />;
      case 'Home':
        return <Home className="w-6 h-6 text-red-600" />;
      case 'Sun':
        return <Sun className="w-6 h-6 text-red-600" />;
      case 'Factory':
        return <Factory className="w-6 h-6 text-red-600" />;
      case 'Activity':
        return <Activity className="w-6 h-6 text-red-600" />;
      case 'Zap':
        return <Zap className="w-6 h-6 text-red-600" />;
      default:
        return <Zap className="w-6 h-6 text-red-600" />;
    }
  };

  return (
    <section id="services" className="py-20 sm:py-28 bg-slate-50 dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-red-600/10 text-red-600 dark:text-red-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Clock className="w-4 h-4" />
            <span>Fast & Professional Bangalore Service</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            Comprehensive Battery Services
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            From emergency 24/7 breakdown assistance to doorstep installation and home inverter maintenance across Jeevan Bhima Nagar and all of Bangalore.
          </p>
        </div>

        {/* 8 Requested Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES_LIST.map(service => (
            <div
              key={service.id}
              className="bg-white dark:bg-slate-900 rounded-lg border border-slate-200/80 dark:border-slate-800 p-6 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-md bg-red-600/10 dark:bg-red-600/20 border border-red-600/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {getServiceIcon(service.iconName)}
                  </div>
                  <span className="text-[11px] font-bold text-red-600 dark:text-red-400 bg-red-600/10 px-2 py-0.5 rounded-sm">
                    {service.turnaroundTime}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-red-600 transition-colors">
                  {service.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3 mb-4">
                  {service.shortDesc}
                </p>

                {/* Key Benefits List */}
                <div className="space-y-1.5 border-t border-slate-100 dark:border-slate-800 pt-3">
                  {service.includedBenefits.slice(0, 2).map((b, i) => (
                    <div key={i} className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                      <span className="line-clamp-1">{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-5 mt-4 border-t border-slate-100 dark:border-slate-800 flex items-center gap-2">
                <button
                  onClick={() => setSelectedService(service)}
                  className="flex-1 text-xs font-semibold py-2 px-2.5 rounded-md border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                >
                  Details
                </button>

                <a
                  href={`tel:+919742771428`}
                  className="flex-1 text-xs font-bold py-2 px-2.5 rounded-md bg-red-600 hover:bg-red-700 text-white text-center transition-colors flex items-center justify-center gap-1"
                >
                  <Phone className="w-3 h-3 fill-white" />
                  <span>Book</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Emergency Roadside Banner */}
        <div className="mt-12 bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 text-white rounded-lg p-6 sm:p-8 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-md bg-red-500/20 border border-red-500/40 flex items-center justify-center flex-shrink-0 animate-pulse">
              <ShieldAlert className="w-6 h-6 text-red-400" />
            </div>
            <div>
              <h4 className="text-lg sm:text-xl font-bold">Battery Stalled on the Road?</h4>
              <p className="text-xs sm:text-sm text-slate-300">
                Our emergency jumpstart van reaches anywhere in Bangalore East within 25–35 minutes.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
            <a
              href="tel:+919742771428"
              className="w-full md:w-auto bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-3 rounded-md shadow-lg transition-all text-sm flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 fill-white" />
              <span>Call Us</span>
            </a>
          </div>
        </div>
      </div>

      {/* Service Details Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white dark:bg-slate-900 rounded-lg max-w-lg w-full border border-slate-200 dark:border-slate-800 shadow-2xl p-6 relative">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 p-1.5 rounded-md text-slate-400 hover:text-slate-600 dark:hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-md bg-red-600/10 flex items-center justify-center">
                {getServiceIcon(selectedService.iconName)}
              </div>
              <div>
                <span className="text-xs font-bold text-red-600 dark:text-red-400 uppercase">{selectedService.category}</span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  {selectedService.title}
                </h3>
              </div>
            </div>

            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-5">
              {selectedService.fullDesc}
            </p>

            <div className="space-y-2 mb-6 bg-slate-50 dark:bg-slate-800/60 p-4 rounded-md">
              <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                What's Included:
              </h4>
              {selectedService.includedBenefits.map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="flex gap-3">
              <a
                href="tel:+919742771428"
                className="flex-1 bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded-md text-center text-sm shadow flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 fill-white" />
                <span>Call Technician Now</span>
              </a>
              <a
                href={`https://wa.me/919742771428?text=Hi%20HK%20Ravi%20Battery%20Point,%20I%20want%20to%20book%20the%20${encodeURIComponent(
                  selectedService.title
                )}%20service.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 px-4 rounded-md text-center text-sm shadow flex items-center justify-center gap-2"
              >
                <Zap className="w-4 h-4" />
                <span>WhatsApp Booking</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
