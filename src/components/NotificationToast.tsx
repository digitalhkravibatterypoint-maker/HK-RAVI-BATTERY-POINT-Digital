import React from 'react';
import { Bell, CheckCircle2, Info, AlertTriangle, X, Zap } from 'lucide-react';
import { useNotification } from '../context/NotificationContext';

export const NotificationToast: React.FC = () => {
  const { toast, dismissToast } = useNotification();

  if (!toast) return null;

  const getIcon = () => {
    switch (toast.type) {
      case 'success':
        return <CheckCircle2 className="w-5 h-5 text-emerald-500" />;
      case 'alert':
        return <AlertTriangle className="w-5 h-5 text-red-500" />;
      case 'update':
        return <Zap className="w-5 h-5 text-red-500" />;
      default:
        return <Info className="w-5 h-5 text-sky-500" />;
    }
  };

  return (
    <div className="fixed top-20 right-4 sm:right-6 z-50 max-w-sm w-full animate-in fade-in slide-in-from-top-4 duration-300">
      <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-md rounded-md border border-slate-200 dark:border-slate-800 shadow-2xl p-4 flex items-start gap-3">
        <div className="p-2 rounded-md bg-slate-100 dark:bg-slate-800 flex-shrink-0 mt-0.5">
          {getIcon()}
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-1">
            <h5 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white truncate">
              {toast.title}
            </h5>
            <span className="text-[10px] text-slate-400 font-medium">{toast.timestamp}</span>
          </div>
          <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 leading-snug">
            {toast.message}
          </p>
        </div>

        <button
          onClick={dismissToast}
          className="p-1 rounded-md text-slate-400 hover:text-slate-600 dark:hover:text-white"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
