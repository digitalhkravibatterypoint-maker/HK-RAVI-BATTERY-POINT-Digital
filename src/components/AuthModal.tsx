import React, { useState } from 'react';
import { X, Lock, Mail, User, Shield, CheckCircle2, LogOut, Car } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useNotification } from '../context/NotificationContext';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose }) => {
  const { user, login, logout, isAdmin } = useAuth();
  const { addNotification } = useNotification();

  const [mode, setMode] = useState<'customer' | 'admin'>('customer');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    login(email, mode);
    addNotification(
      'Welcome back!',
      `Logged in as ${mode === 'admin' ? 'Store Manager' : 'Customer'}.`,
      'success'
    );
    onClose();
  };

  const handleQuickLogin = (role: 'customer' | 'admin') => {
    const demoEmail = role === 'admin' ? 'admin@hkravibattery.com' : 'customer@example.com';
    login(demoEmail, role);
    addNotification(
      'Quick Login Successful',
      `Active session: ${role === 'admin' ? 'Admin / Staff' : 'Customer'}.`,
      'success'
    );
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white dark:bg-slate-900 w-full max-w-md rounded-lg border border-slate-200 dark:border-slate-800 shadow-2xl p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-sm text-slate-400 hover:text-slate-700 dark:hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>

        {user ? (
          /* User Profile View */
          <div className="space-y-4">
            <div className="flex items-center gap-3 pb-4 border-b border-slate-100 dark:border-slate-800">
              <div className="w-12 h-12 rounded-full bg-red-600/10 text-red-600 flex items-center justify-center font-bold text-lg">
                {user.name.charAt(0)}
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">{user.name}</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">{user.email}</p>
                <span className="inline-block mt-0.5 px-2 py-0.5 rounded text-[10px] font-bold bg-red-600/10 text-red-600 dark:text-red-400">
                  {user.role.toUpperCase()} ACCOUNT
                </span>
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Saved Vehicles & Preferences
              </h4>
              <div className="space-y-1.5">
                {user.savedVehicles?.map((v, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 p-2 bg-slate-50 dark:bg-slate-800 rounded-md text-xs font-semibold text-slate-800 dark:text-slate-200"
                  >
                    <Car className="w-4 h-4 text-red-600" />
                    <span>{v}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 flex gap-2">
              <button
                onClick={() => {
                  logout();
                  addNotification('Logged Out', 'You have been signed out.', 'info');
                }}
                className="flex-1 py-2.5 px-4 rounded-md border border-red-200 dark:border-red-900/50 text-red-600 dark:text-red-400 text-xs font-bold hover:bg-red-50 dark:hover:bg-red-950/30 flex items-center justify-center gap-1.5"
              >
                <LogOut className="w-4 h-4" />
                <span>Sign Out</span>
              </button>
              <button
                onClick={onClose}
                className="flex-1 py-2.5 px-4 rounded-md bg-red-600 hover:bg-red-700 text-white text-xs font-bold"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          /* Login Form */
          <div className="space-y-5">
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Account Sign In
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Access warranty certificates, doorstep orders, or administrative console.
              </p>
            </div>

            {/* Mode Selector */}
            <div className="grid grid-cols-2 gap-2 p-1 bg-slate-100 dark:bg-slate-800 rounded-md text-xs font-semibold">
              <button
                onClick={() => setMode('customer')}
                className={`py-1.5 rounded-sm transition-all ${
                  mode === 'customer'
                    ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm'
                    : 'text-slate-500'
                }`}
              >
                Customer Login
              </button>
              <button
                onClick={() => setMode('admin')}
                className={`py-1.5 rounded-sm transition-all ${
                  mode === 'admin'
                    ? 'bg-red-600 text-white font-bold shadow-sm'
                    : 'text-slate-500'
                }`}
              >
                Staff / Admin
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder={mode === 'admin' ? 'admin@hkravibattery.com' : 'you@example.com'}
                    className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-md pl-9 pr-3 py-2 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-red-600"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Password
                </label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-md pl-9 pr-3 py-2 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-red-600"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-2.5 px-4 rounded-md bg-red-600 hover:bg-red-700 text-white font-bold text-sm shadow-md transition-all active:scale-98"
              >
                Sign In
              </button>
            </form>

            {/* Fast Demo One-Click Access */}
            <div className="pt-3 border-t border-slate-100 dark:border-slate-800 text-center">
              <span className="text-[11px] text-slate-400 block mb-2 font-medium">
                Quick Demo Access:
              </span>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => handleQuickLogin('customer')}
                  className="flex-1 py-2 px-3 rounded-md bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-750 text-slate-700 dark:text-slate-300 text-xs font-semibold"
                >
                  Customer Demo
                </button>
                <button
                  type="button"
                  onClick={() => handleQuickLogin('admin')}
                  className="flex-1 py-2 px-3 rounded-md bg-red-600/10 hover:bg-red-600/20 text-red-700 dark:text-red-400 text-xs font-semibold"
                >
                  Store Admin Demo
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
