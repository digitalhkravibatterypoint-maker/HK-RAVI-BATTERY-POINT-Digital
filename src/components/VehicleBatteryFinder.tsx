import React, { useState } from 'react';
import { Search, CheckCircle2, Phone, Zap, ArrowRight, ShieldCheck } from 'lucide-react';
import { VEHICLE_SELECT_DATA } from '../data/batteryData';

interface VehicleBatteryFinderProps {
  onFindBattery?: (query: string) => void;
  onRequestQuote?: (details: string) => void;
}

export const VehicleBatteryFinder: React.FC<VehicleBatteryFinderProps> = ({
  onFindBattery,
  onRequestQuote
}) => {
  const [selectedType, setSelectedType] = useState<string>('Car');
  const [selectedMake, setSelectedMake] = useState<string>('Maruti Suzuki');
  const [selectedModel, setSelectedModel] = useState<string>('Swift (Petrol)');
  const [showResult, setShowResult] = useState(false);

  const availableMakes = VEHICLE_SELECT_DATA.makes[selectedType as keyof typeof VEHICLE_SELECT_DATA.makes] || [];
  const availableModels = VEHICLE_SELECT_DATA.models[selectedMake as keyof typeof VEHICLE_SELECT_DATA.models] || [
    'Standard Model',
    'High Spec Edition'
  ];

  const handleTypeChange = (type: string) => {
    setSelectedType(type);
    const makes = VEHICLE_SELECT_DATA.makes[type as keyof typeof VEHICLE_SELECT_DATA.makes] || [];
    const firstMake = makes[0] || '';
    setSelectedMake(firstMake);
    const models = VEHICLE_SELECT_DATA.models[firstMake as keyof typeof VEHICLE_SELECT_DATA.models] || ['Standard'];
    setSelectedModel(models[0] || '');
    setShowResult(false);
  };

  const handleMakeChange = (make: string) => {
    setSelectedMake(make);
    const models = VEHICLE_SELECT_DATA.models[make as keyof typeof VEHICLE_SELECT_DATA.models] || ['Standard'];
    setSelectedModel(models[0] || '');
    setShowResult(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowResult(true);
    if (onFindBattery) {
      onFindBattery(`${selectedMake} ${selectedModel}`);
    }
  };

  return (
    <div id="battery-finder" className="relative z-30 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 sm:-mt-12">
      <div className="bg-white dark:bg-slate-900 rounded-lg shadow-xl border border-slate-200/80 dark:border-slate-800 p-5 sm:p-7 backdrop-blur-md">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 border-b border-slate-100 dark:border-slate-800 pb-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-red-600 dark:text-red-400 uppercase tracking-wider mb-1">
              <Zap className="w-3.5 h-3.5" />
              Instant Battery Recommendation Engine
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
              Find the Right Battery for Your Vehicle / Inverter
            </h2>
          </div>

          {/* Vehicle Type Tabs */}
          <div className="flex flex-wrap gap-1.5 p-1 bg-slate-100 dark:bg-slate-800/80 rounded-md">
            {VEHICLE_SELECT_DATA.types.map(type => (
              <button
                key={type}
                onClick={() => handleTypeChange(type)}
                className={`px-3.5 py-1.5 text-xs sm:text-sm font-semibold rounded-md transition-all ${
                  selectedType === type
                    ? 'bg-red-600 text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Dropdown Filters Form */}
        <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {/* Brand / Make */}
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
              1. Select Brand / Capacity
            </label>
            <select
              value={selectedMake}
              onChange={e => handleMakeChange(e.target.value)}
              className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-md px-3.5 py-2.5 text-sm font-medium text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-red-600 focus:outline-none"
            >
              {availableMakes.map(make => (
                <option key={make} value={make}>
                  {make}
                </option>
              ))}
            </select>
          </div>

          {/* Model */}
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
              2. Select Model / Load
            </label>
            <select
              value={selectedModel}
              onChange={e => {
                setSelectedModel(e.target.value);
                setShowResult(false);
              }}
              className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-md px-3.5 py-2.5 text-sm font-medium text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-red-600 focus:outline-none"
            >
              {availableModels.map(model => (
                <option key={model} value={model}>
                  {model}
                </option>
              ))}
            </select>
          </div>

          {/* Location Guarantee */}
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
              3. Service Location
            </label>
            <div className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-md px-3.5 py-2.5 text-sm font-medium text-slate-800 dark:text-slate-200 flex items-center justify-between">
              <span>Jeevan Bhima Nagar & nearby</span>
              <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-1.5 py-0.5 rounded-sm">
                30m ETA
              </span>
            </div>
          </div>

          {/* Submit Action */}
          <div className="flex items-end">
            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white font-bold px-4 py-2.5 rounded-md shadow-md transition-all flex items-center justify-center gap-2 text-sm active:scale-95"
            >
              <Search className="w-4 h-4" />
              <span>Find Best Battery</span>
            </button>
          </div>
        </form>

        {/* Instant Result Box */}
        {showResult && (
          <div className="mt-6 pt-5 border-t border-slate-100 dark:border-slate-800 bg-red-600/5 dark:bg-red-600/10 rounded-md p-4 sm:p-5 animate-in fade-in slide-in-from-top-2 duration-300">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-sm text-xs font-bold bg-red-600 text-white">
                    Recommended Match
                  </span>
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                    for {selectedMake} {selectedModel}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  Amaron FLO / Exide Mileage Series (35Ah - 45Ah)
                </h3>
                <div className="flex flex-wrap items-center gap-3 text-xs text-slate-600 dark:text-slate-300">
                  <span className="flex items-center gap-1 font-semibold text-emerald-600 dark:text-emerald-400">
                    <CheckCircle2 className="w-3.5 h-3.5" /> In Stock at Jeevan Bhima Nagar Store
                  </span>
                  <span>•</span>
                  <span>Warranty: <strong>66 - 72 Months</strong></span>
                  <span>•</span>
                  <span>Old Battery Exchange: <strong>Rebate Available</strong></span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2.5">
                <a
                  href={`https://wa.me/919742771428?text=Hi%20HK%20Ravi%20Battery%20Point,%20I%20need%20a%20battery%20for%20my%20${encodeURIComponent(
                    selectedMake + ' ' + selectedModel
                  )}.%20Please%20share%20price%20and%20doorstep%20delivery%20details.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-bold px-4 py-2 rounded-md shadow transition-colors"
                >
                  <Zap className="w-3.5 h-3.5" />
                  <span>WhatsApp Quote</span>
                </a>

                <a
                  href="tel:+919742771428"
                  className="inline-flex items-center gap-1.5 bg-slate-900 hover:bg-slate-800 text-white dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-white text-xs sm:text-sm font-bold px-4 py-2 rounded-md shadow transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call to Order (30m ETA)</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
