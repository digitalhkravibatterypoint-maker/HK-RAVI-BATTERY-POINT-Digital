import React, { useState, useEffect, useRef } from 'react';
import { Search, X, Battery, Wrench, Shield, ArrowRight, Sparkles, Phone } from 'lucide-react';
import { BATTERY_PRODUCTS, SERVICES_LIST, BRANDS_LIST, INDIAN_ASSETS } from '../data/batteryData';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProduct?: (productName: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectProduct
}) => {
  const [query, setQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState<'all' | 'batteries' | 'services' | 'brands'>('all');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const normalizedQuery = query.toLowerCase().trim();

  // Search in battery products
  const matchedProducts = BATTERY_PRODUCTS.filter(p => {
    if (activeFilter !== 'all' && activeFilter !== 'batteries') return false;
    if (!normalizedQuery) return true;
    return (
      p.name.toLowerCase().includes(normalizedQuery) ||
      p.brand.toLowerCase().includes(normalizedQuery) ||
      p.capacity.toLowerCase().includes(normalizedQuery) ||
      p.description.toLowerCase().includes(normalizedQuery) ||
      p.recommendedVehicles?.some(v => v.toLowerCase().includes(normalizedQuery))
    );
  });

  // Search in services
  const matchedServices = SERVICES_LIST.filter(s => {
    if (activeFilter !== 'all' && activeFilter !== 'services') return false;
    if (!normalizedQuery) return true;
    return (
      s.title.toLowerCase().includes(normalizedQuery) ||
      s.shortDesc.toLowerCase().includes(normalizedQuery) ||
      s.category.toLowerCase().includes(normalizedQuery)
    );
  });

  // Search in brands
  const matchedBrands = BRANDS_LIST.filter(b => {
    if (activeFilter !== 'all' && activeFilter !== 'brands') return false;
    if (!normalizedQuery) return true;
    return (
      b.name.toLowerCase().includes(normalizedQuery) ||
      b.specialty.toLowerCase().includes(normalizedQuery) ||
      b.popularModels.some(m => m.toLowerCase().includes(normalizedQuery))
    );
  });

  const totalResults = matchedProducts.length + matchedServices.length + matchedBrands.length;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-4 sm:p-6 sm:pt-20 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="bg-white dark:bg-slate-900 w-full max-w-2xl rounded-lg border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden flex flex-col max-h-[85vh] animate-in zoom-in-95 duration-200"
        onClick={e => e.stopPropagation()}
      >
        {/* Search Header Input */}
        <div className="p-4 border-b border-slate-200 dark:border-slate-800 flex items-center gap-3">
          <Search className="w-5 h-5 text-red-600 flex-shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search batteries (e.g., Swift, Amaron, Inverter, Jumpstart, Exide)..."
            className="w-full bg-transparent text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none text-base font-medium"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-xs font-semibold px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded-sm text-slate-500 hover:text-slate-900 dark:hover:text-white"
            >
              Clear
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1 rounded-sm text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filter Pills */}
        <div className="px-4 py-2 bg-slate-50 dark:bg-slate-950/60 border-b border-slate-200 dark:border-slate-800 flex items-center gap-2 overflow-x-auto text-xs">
          <span className="text-slate-400 font-bold uppercase tracking-wider text-[10px] mr-1">
            Filter:
          </span>
          {[
            { id: 'all', label: `All (${totalResults})` },
            { id: 'batteries', label: `Batteries (${matchedProducts.length})` },
            { id: 'services', label: `Services (${matchedServices.length})` },
            { id: 'brands', label: `Brands (${matchedBrands.length})` }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id as any)}
              className={`px-3 py-1 rounded-md font-semibold transition-all whitespace-nowrap ${
                activeFilter === tab.id
                  ? 'bg-red-600 text-white'
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Results Container */}
        <div className="flex-1 overflow-y-auto p-4 space-y-6">
          {totalResults === 0 ? (
            <div className="py-12 text-center text-slate-500">
              <Battery className="w-10 h-10 mx-auto text-slate-400 mb-2 stroke-1" />
              <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                No matching battery or service found for "{query}"
              </p>
              <p className="text-xs text-slate-400 mt-1">
                Try searching for "Swift", "Amaron", "Exide", "Inverter", or call us directly.
              </p>
              <a
                href="tel:+919742771428"
                className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-red-600 text-white text-xs font-bold rounded-md"
              >
                <Phone className="w-3.5 h-3.5 fill-white" />
                <span>Call Us</span>
              </a>
            </div>
          ) : (
            <>
              {/* Matched Batteries */}
              {matchedProducts.length > 0 && (
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Battery className="w-3.5 h-3.5 text-red-600" />
                    <span>Batteries & Products ({matchedProducts.length})</span>
                  </h4>
                  <div className="space-y-2">
                    {matchedProducts.slice(0, 5).map(prod => (
                      <div
                        key={prod.id}
                        className="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-md hover:bg-red-600/10 border border-slate-200/80 dark:border-slate-800 flex items-center justify-between gap-3 transition-colors group"
                      >
                        <div className="flex items-center gap-3">
                          <img
                            src={prod.image}
                            alt={prod.name}
                            loading="lazy"
                            referrerPolicy="no-referrer"
                            onError={(e) => {
                              const target = e.currentTarget;
                              if (!target.dataset.fallback) {
                                target.dataset.fallback = 'true';
                                target.src = INDIAN_ASSETS.carBattery;
                              }
                            }}
                            className="w-10 h-10 rounded-sm object-cover bg-slate-100 dark:bg-slate-800"
                          />
                          <div>
                            <h5 className="text-sm font-bold text-slate-900 dark:text-white">
                              {prod.name}
                            </h5>
                            <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                              <span>{prod.brand}</span>
                              <span>•</span>
                              <span>{prod.capacity}</span>
                              <span>•</span>
                              <span className="text-emerald-600 dark:text-emerald-400 font-semibold">
                                {prod.warranty}
                              </span>
                            </div>
                          </div>
                        </div>

                        <a
                          href={`https://wa.me/919742771428?text=Hi%20HK%20Ravi%20Battery%20Point,%20checking%20price%20for%20${encodeURIComponent(
                            prod.name
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-1.5 rounded-md bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold whitespace-nowrap"
                        >
                          Quote
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Matched Services */}
              {matchedServices.length > 0 && (
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Wrench className="w-3.5 h-3.5 text-red-600" />
                    <span>Services ({matchedServices.length})</span>
                  </h4>
                  <div className="space-y-2">
                    {matchedServices.map(srv => (
                      <div
                        key={srv.id}
                        className="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-md border border-slate-200/80 dark:border-slate-800 flex items-center justify-between gap-3"
                      >
                        <div>
                          <h5 className="text-sm font-bold text-slate-900 dark:text-white">
                            {srv.title}
                          </h5>
                          <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1">
                            {srv.shortDesc}
                          </p>
                        </div>
                        <a
                          href="tel:+919742771428"
                          className="px-3 py-1.5 rounded-md bg-red-600 hover:bg-red-700 text-white text-xs font-bold whitespace-nowrap"
                        >
                          Book SOS
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Matched Brands */}
              {matchedBrands.length > 0 && (
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Shield className="w-3.5 h-3.5 text-red-600" />
                    <span>Authorized Brands ({matchedBrands.length})</span>
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {matchedBrands.map(b => (
                      <div
                        key={b.name}
                        className="p-2.5 rounded-md bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800"
                      >
                        <span className="text-xs font-bold text-slate-900 dark:text-white block">
                          {b.name}
                        </span>
                        <span className="text-[11px] text-slate-500 dark:text-slate-400">
                          {b.specialty}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="px-4 py-2.5 bg-slate-100 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-[11px] text-slate-500">
          <span>Press ESC to close</span>
          <span>Store Helpline: +91 97427 71428</span>
        </div>
      </div>
    </div>
  );
};
