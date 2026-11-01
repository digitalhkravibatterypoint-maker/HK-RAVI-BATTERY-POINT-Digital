import React, { useState, useEffect } from 'react';
import {
  Phone,
  Search,
  Sun,
  Moon,
  Menu,
  X,
  Shield,
  Bell,
  Wrench,
  Layers,
  Info,
  MapPin,
  ChevronRight
} from 'lucide-react';
import { Logo } from './Logo';
import { useTheme } from '../context/ThemeContext';
import { useAuth } from '../context/AuthContext';
import { useNotification } from '../context/NotificationContext';

interface NavbarProps {
  onOpenSearch: () => void;
  onOpenAuth: () => void;
  onOpenAdmin: () => void;
  customLogoUrl?: string | null;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenSearch,
  onOpenAuth,
  onOpenAdmin,
  customLogoUrl
}) => {
  const { theme, toggleTheme } = useTheme();
  const { user, isAdmin } = useAuth();
  const { unreadCount, markAllAsRead } = useNotification();

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showNotifDropdown, setShowNotifDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Products', href: '#products' },
    { label: 'Finder', href: '#battery-finder' },
    { label: 'About Us', href: '#about' },
    { label: 'Contact Us', href: '#contact' }
  ];

  return (
    <header
      id="main-header"
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 dark:bg-slate-950/95 backdrop-blur-md shadow-md border-b border-slate-200/80 dark:border-slate-800/80 py-2.5'
          : 'bg-white dark:bg-slate-950 border-b border-slate-100 dark:border-slate-900 py-3.5'
      }`}
    >
      {/* Top micro-bar for location & emergency contact on desktop */}
      <div className="hidden lg:block border-b border-slate-100 dark:border-slate-900/60 pb-2 mb-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-xs text-slate-600 dark:text-slate-400">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-red-600 dark:text-red-400 font-medium">
              <MapPin className="w-3.5 h-3.5" />
              10th Main Rd, Jeevan Bhima Nagar, HAL 3rd Stage, Bengaluru
            </span>
            <span className="hidden xl:inline text-slate-400 dark:text-slate-600">|</span>
            <span className="hidden xl:inline">
              Open Today: <strong>8:00 AM - 9:30 PM</strong> (24/7 Breakdown SOS)
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              30-Min Doorstep Delivery Active
            </span>
            <span className="text-xs text-slate-500 flex items-center gap-1 font-medium">
              <Shield className="w-3.5 h-3.5 text-red-600" />
              100% Genuine & Expert Installation
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3">
          {/* Logo & Brand Identity */}
          <a href="#home" className="flex-shrink-0 group">
            <Logo size="md" customLogoUrl={customLogoUrl} />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map(link => (
              <a
                key={link.label}
                href={link.href}
                className="px-3 py-2 text-sm font-semibold text-slate-700 hover:text-red-600 dark:text-slate-200 dark:hover:text-red-400 rounded-md hover:bg-slate-100 dark:hover:bg-slate-900/60 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Icons & Call Button */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Search Trigger Button */}
            <button
              id="search-btn"
              onClick={onOpenSearch}
              aria-label="Search batteries and services"
              className="p-2 sm:px-3 sm:py-2 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md transition-colors flex items-center gap-2 text-sm font-medium border border-slate-200 dark:border-slate-800"
            >
              <Search className="w-4 h-4 text-slate-500 dark:text-slate-400" />
              <span className="hidden md:inline text-xs text-slate-500">Search Battery...</span>
              <kbd className="hidden md:inline-block px-1.5 py-0.5 text-[10px] bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-sm text-slate-500">
                ⌘K
              </kbd>
            </button>

            {/* Dark Mode Toggle */}
            <button
              id="theme-toggle-btn"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-2 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md transition-colors border border-slate-200 dark:border-slate-800"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400 hover:rotate-45 transition-transform" />
              ) : (
                <Moon className="w-4 h-4 text-slate-700 hover:-rotate-12 transition-transform" />
              )}
            </button>

            {/* Notifications Alert Bell */}
            <button
              id="notif-btn"
              onClick={() => {
                setShowNotifDropdown(!showNotifDropdown);
                markAllAsRead();
              }}
              aria-label="View notifications"
              className="relative p-2 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md transition-colors border border-slate-200 dark:border-slate-800"
            >
              <Bell className="w-4 h-4 text-slate-600 dark:text-slate-300" />
              {unreadCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-600 text-white font-bold text-[10px] rounded-full flex items-center justify-center animate-pulse">
                  {unreadCount}
                </span>
              )}
            </button>

            {/* Prominent Call Now Button */}
            <a
              id="call-now-nav-btn"
              href="tel:+919742771428"
              className="hidden sm:inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold text-sm px-4 py-2.5 rounded-md shadow-sm hover:shadow transition-all active:scale-95"
              title="Call HK Ravi Battery Point"
            >
              <Phone className="w-4 h-4 fill-white" />
              <span>Call Us</span>
            </a>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              id="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Open mobile menu"
              className="lg:hidden p-2 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md border border-slate-200 dark:border-slate-800 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 dark:border-slate-800 bg-white/98 dark:bg-slate-950/98 backdrop-blur-xl px-4 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-1">
            {navLinks.map(link => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-3 py-2.5 rounded-md text-base font-semibold text-slate-800 dark:text-slate-100 hover:bg-red-50 dark:hover:bg-red-950/30 hover:text-red-600 transition-colors"
              >
                <span>{link.label}</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-slate-100 dark:border-slate-800 space-y-2">
            <a
              href="tel:+919742771428"
              className="w-full flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded-md shadow-md text-base"
            >
              <Phone className="w-5 h-5 fill-white" />
              <span>Call Us</span>
            </a>

            <div className="flex gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenSearch();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-3 rounded-md border border-slate-200 dark:border-slate-800 text-sm font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-900"
              >
                <Search className="w-4 h-4 text-red-600" />
                <span>Search Batteries & Services</span>
              </button>
            </div>

            <div className="text-xs text-slate-500 dark:text-slate-400 px-1 pt-1 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-red-600 flex-shrink-0" />
              <span>Jeevan Bhima Nagar, Bangalore (HAL 3rd Stage)</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
