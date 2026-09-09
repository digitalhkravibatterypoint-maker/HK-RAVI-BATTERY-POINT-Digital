import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
  customLogoUrl?: string | null;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  showTagline = true,
  customLogoUrl = null
}) => {
  const iconSizes = {
    sm: 'w-8 h-8',
    md: 'w-11 h-11',
    lg: 'w-14 h-14'
  };

  const titleSizes = {
    sm: 'text-base',
    md: 'text-lg lg:text-xl',
    lg: 'text-2xl lg:text-3xl'
  };

  const taglineSizes = {
    sm: 'text-[10px]',
    md: 'text-xs',
    lg: 'text-sm'
  };

  return (
    <div className={`flex items-center gap-2.5 sm:gap-3 select-none ${className}`}>
      {customLogoUrl ? (
        <img
          src={customLogoUrl}
          alt="HK Ravi Battery Point Logo"
          className={`${iconSizes[size]} object-contain rounded-lg shadow-sm`}
        />
      ) : (
        <div className={`relative ${iconSizes[size]} flex-shrink-0`}>
          {/* Custom Crafted Vector Battery Icon matching original brand */}
          <svg
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full drop-shadow-sm filter"
          >
            {/* Battery Terminal Posts */}
            <rect x="22" y="10" width="14" height="8" rx="2" fill="#E2E8F0" />
            <rect x="64" y="10" width="14" height="8" rx="2" fill="#E2E8F0" />
            <rect x="26" y="6" width="6" height="4" fill="#94A3B8" />
            <rect x="68" y="6" width="6" height="4" fill="#DC2626" />
            
            {/* Top Carrying Handle */}
            <path
              d="M 38 14 L 38 7 C 38 4 62 4 62 7 L 62 14"
              stroke="#64748B"
              strokeWidth="4"
              strokeLinecap="round"
              fill="none"
            />

            {/* Battery Main Body Casing with clean sharp low-curve corners */}
            <rect x="10" y="18" width="80" height="74" rx="3" fill="#1E293B" />
            <rect x="12" y="20" width="76" height="70" rx="2" fill="#0F172A" />

            {/* Top Casing Accent Strip */}
            <path d="M 12 20 H 88 V 28 H 12 Z" fill="#334155" />

            {/* Negative & Positive Terminal Markings */}
            <rect x="23" y="23" width="8" height="2" fill="#CBD5E1" rx="1" />
            <g>
              <rect x="69" y="23" width="8" height="2" fill="#EF4444" rx="1" />
              <rect x="72" y="20" width="2" height="8" fill="#EF4444" rx="1" />
            </g>

            {/* Center Dynamic Energy Circle */}
            <circle cx="50" cy="58" r="23" fill="#1E293B" stroke="#334155" strokeWidth="2.5" />
            <circle cx="50" cy="58" r="19" fill="#0B132B" stroke="#EF4444" strokeWidth="1.5" />

            {/* Sharp Electric Lightning Bolt */}
            <path
              d="M 52 44 L 40 58 H 49 L 46 72 L 61 56 H 51 L 55 44 Z"
              fill="url(#boltGrad)"
              filter="drop-shadow(0 0 4px rgba(239, 68, 68, 0.6))"
            />

            {/* Gradients */}
            <defs>
              <linearGradient id="boltGrad" x1="40" y1="44" x2="61" y2="72" gradientUnits="userSpaceOnUse">
                <stop stopColor="#F87171" />
                <stop offset="1" stopColor="#DC2626" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      )}

      <div className="flex flex-col">
        <span
          className={`font-black tracking-tight leading-none text-slate-900 dark:text-white ${titleSizes[size]}`}
          style={{ letterSpacing: '-0.02em' }}
        >
          HK RAVI <span className="text-red-600 font-extrabold">BATTERY POINT</span>
        </span>
        {showTagline && (
          <span
            className={`font-medium text-slate-500 dark:text-slate-400 italic tracking-wide mt-0.5 ${taglineSizes[size]}`}
          >
            Stay Powered, Anytime, Anywhere
          </span>
        )}
      </div>
    </div>
  );
};
