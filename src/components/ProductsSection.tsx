import React, { useState } from 'react';
import {
  Car,
  Home,
  Sun,
  Factory,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  ExternalLink,
  Zap,
  Tag,
  Phone,
  X
} from 'lucide-react';
import { PRODUCT_CATEGORIES, BATTERY_PRODUCTS, INDIAN_ASSETS } from '../data/batteryData';
import { BatteryProduct } from '../types';

interface ProductsSectionProps {
  selectedCategoryTab?: string;
  onSelectCategoryTab?: (cat: string) => void;
  onOpenQuoteModal?: (productName: string) => void;
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({
  selectedCategoryTab = 'all',
  onSelectCategoryTab,
  onOpenQuoteModal
}) => {
  const [activeCategory, setActiveCategory] = useState<string>(selectedCategoryTab || 'all');
  const [selectedProductModal, setSelectedProductModal] = useState<BatteryProduct | null>(null);

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Car':
        return <Car className="w-5 h-5 text-red-600" />;
      case 'Home':
        return <Home className="w-5 h-5 text-red-600" />;
      case 'Sun':
        return <Sun className="w-5 h-5 text-red-600" />;
      case 'Factory':
        return <Factory className="w-5 h-5 text-red-600" />;
      default:
        return <Zap className="w-5 h-5 text-red-600" />;
    }
  };

  const filteredProducts =
    activeCategory === 'all'
      ? BATTERY_PRODUCTS
      : BATTERY_PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <section id="products" className="py-20 sm:py-28 bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-red-600/10 text-red-600 dark:text-red-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Zap className="w-4 h-4" />
            <span>Authorized Sales & Distribution</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            Our Battery Products & Solutions
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Engineered for high performance, zero maintenance, and long service life. 100% genuine guaranteed with official manufacturer warranty.
          </p>
        </div>

        {/* 4 Core Category Overview Cards (As Specified in Website Structure) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {PRODUCT_CATEGORIES.map(cat => (
            <div
              key={cat.id}
              className="group bg-slate-50 dark:bg-slate-950 rounded-lg border border-slate-200/80 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col hover:-translate-y-1.5"
            >
              {/* Product Category Image */}
              <div className="relative h-48 overflow-hidden bg-slate-800">
                <img
                  src={cat.image}
                  alt={cat.title}
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (!target.dataset.fallback) {
                      target.dataset.fallback = 'true';
                      target.src = INDIAN_ASSETS.inverterHome;
                    }
                  }}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                <div className="absolute top-3 left-3 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md p-2 rounded-md border border-white/20 shadow-sm">
                  {getCategoryIcon(cat.icon)}
                </div>
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <h3 className="text-lg font-bold leading-tight drop-shadow-sm">{cat.title}</h3>
                  <p className="text-xs text-red-400 font-medium">{cat.tagline}</p>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-2">
                    {cat.description}
                  </p>

                  {/* Brand Badges */}
                  <div>
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">
                      Leading Brands:
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {cat.brands.map(brand => (
                        <span
                          key={brand}
                          className="px-2 py-0.5 rounded-sm text-[10px] font-semibold bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800"
                        >
                          {brand}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-5 mt-4 border-t border-slate-200/60 dark:border-slate-800/80">
                  <button
                    onClick={() => {
                      setActiveCategory(cat.id);
                      if (onSelectCategoryTab) onSelectCategoryTab(cat.id);
                    }}
                    className="w-full inline-flex items-center justify-center gap-2 bg-white dark:bg-slate-850 hover:bg-red-600 hover:text-white text-slate-900 dark:text-white font-bold py-2.5 px-4 rounded-md border border-slate-200 dark:border-slate-700 transition-all text-xs group/btn"
                  >
                    <span>View {cat.title}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Battery Models & Interactive Grid */}
        <div className="mt-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                Featured Battery Inventory
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                Ready for immediate 30-minute installation across Bangalore.
              </p>
            </div>

            {/* Category Filter Tabs */}
            <div className="flex flex-wrap gap-1.5 p-1 bg-slate-100 dark:bg-slate-800 rounded-md">
              {[
                { id: 'all', label: 'All Batteries' },
                { id: 'automotive', label: 'Automotive' },
                { id: 'inverter', label: 'Inverter & UPS' },
                { id: 'solar', label: 'Solar' },
                { id: 'industrial', label: 'Industrial' }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveCategory(tab.id)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all ${
                    activeCategory === tab.id
                      ? 'bg-red-600 text-white shadow-sm'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Product Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map(product => (
              <div
                key={product.id}
                className="bg-slate-50 dark:bg-slate-950 rounded-lg border border-slate-200/80 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-44 bg-slate-800 overflow-hidden flex items-center justify-center">
                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                      decoding="async"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        const target = e.currentTarget;
                        if (!target.dataset.fallback) {
                          target.dataset.fallback = 'true';
                          target.src = INDIAN_ASSETS.carBattery;
                        }
                      }}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <span className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-sm text-[10px] font-bold bg-red-600 text-white shadow-sm">
                      {product.brand}
                    </span>
                    <span className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-sm text-[10px] font-bold bg-slate-900/80 text-white backdrop-blur-sm">
                      {product.capacity}
                    </span>
                  </div>

                  <div className="p-4 space-y-2">
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white line-clamp-2 leading-snug">
                      {product.name}
                    </h4>

                    <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                      <span>Warranty: <strong>{product.warranty}</strong></span>
                    </div>

                    <div className="flex items-center gap-1.5 pt-1">
                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-200 dark:border-emerald-800">
                        In Stock • Exchange Rebate Available
                      </span>
                    </div>

                    <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-2 pt-1">
                      {product.description}
                    </p>
                  </div>
                </div>

                <div className="p-4 pt-0 space-y-2">
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => setSelectedProductModal(product)}
                      className="w-full text-xs font-semibold py-2 px-3 rounded-md border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                    >
                      Learn More
                    </button>
                    <a
                      href={`https://wa.me/919742771428?text=Hello%20HK%20Ravi%20Battery%20Point,%20I%20am%20interested%20in%20${encodeURIComponent(
                        product.name
                      )}.%20Please%20let%20me%20know%20the%20best%20price%20and%20availability.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full text-xs font-bold py-2 px-3 rounded-md bg-emerald-600 hover:bg-emerald-500 text-white text-center transition-colors flex items-center justify-center gap-1"
                    >
                      <Zap className="w-3 h-3" />
                      <span>Order</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Learn More Modal Dialog */}
      {selectedProductModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white dark:bg-slate-900 rounded-lg max-w-xl w-full border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
            <div className="relative h-48 sm:h-56 bg-slate-800">
              <img
                src={selectedProductModal.image}
                alt={selectedProductModal.name}
                referrerPolicy="no-referrer"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (!target.dataset.fallback) {
                    target.dataset.fallback = 'true';
                    target.src = INDIAN_ASSETS.carBattery;
                  }
                }}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedProductModal(null)}
                className="absolute top-3 right-3 p-1.5 rounded-md bg-slate-950/70 text-white hover:bg-slate-950 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-3 left-4 right-4 text-white">
                <span className="px-2.5 py-0.5 rounded-sm text-xs font-bold bg-red-600 text-white">
                  {selectedProductModal.brand}
                </span>
                <h3 className="text-lg sm:text-xl font-bold mt-1 text-white drop-shadow">
                  {selectedProductModal.name}
                </h3>
              </div>
            </div>

            <div className="p-5 sm:p-6 space-y-4">
              <div className="grid grid-cols-3 gap-3 bg-slate-50 dark:bg-slate-800/80 p-3.5 rounded-md text-center">
                <div>
                  <span className="text-[10px] uppercase text-slate-400 font-bold block">Capacity</span>
                  <span className="text-sm font-bold text-slate-900 dark:text-white">
                    {selectedProductModal.capacity}
                  </span>
                </div>
                <div>
                  <span className="text-[10px] uppercase text-slate-400 font-bold block">Warranty</span>
                  <span className="text-sm font-bold text-red-600 dark:text-red-400">
                    {selectedProductModal.warranty}
                  </span>
                </div>
                <div>
                  <span className="text-[10px] uppercase text-slate-400 font-bold block">Availability</span>
                  <span className="text-sm font-bold text-emerald-600 dark:text-emerald-400">
                    Ready in Stock
                  </span>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-2">
                  Key Specifications & Features
                </h4>
                <ul className="space-y-1.5">
                  {selectedProductModal.keyFeatures.map((feat, i) => (
                    <li key={i} className="text-xs text-slate-600 dark:text-slate-300 flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {selectedProductModal.recommendedVehicles && (
                <div>
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-1.5">
                    Recommended Fits:
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedProductModal.recommendedVehicles.map(veh => (
                      <span
                        key={veh}
                        className="px-2 py-0.5 rounded-sm text-[11px] bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                      >
                        {veh}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex gap-3">
                <a
                  href={`tel:+919742771428`}
                  className="flex-1 bg-slate-900 hover:bg-slate-800 text-white font-bold py-2.5 px-4 rounded-md text-center text-xs sm:text-sm flex items-center justify-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Us</span>
                </a>
                <a
                  href={`https://wa.me/919742771428?text=Hi%20HK%20Ravi%20Battery%20Point,%20I%20am%20inquiring%20about%20${encodeURIComponent(
                    selectedProductModal.name
                  )}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-2.5 px-4 rounded-md text-center text-xs sm:text-sm"
                >
                  Book on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
