import React from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowUp,
  ShieldCheck,
  Zap,
  Facebook,
  Instagram,
  Twitter,
  MessageCircle
} from 'lucide-react';
import { Logo } from './Logo';

interface FooterProps {
  customLogoUrl?: string | null;
}

export const Footer: React.FC<FooterProps> = ({ customLogoUrl }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 transition-colors pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          {/* Column 1: Brand & Tagline */}
          <div className="lg:col-span-2 space-y-4">
            <Logo size="md" customLogoUrl={customLogoUrl} className="brightness-110" />
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm pt-2">
              Jeevan Bhima Nagar's leading authorized battery dealer and emergency mobile service center, proudly serving <strong className="text-slate-300 font-semibold">Indiranagar</strong>, <strong className="text-slate-300 font-semibold">Koramangala</strong>, and East Bangalore. Supplying certified Exide, Amaron, Luminous, and SF Sonic batteries with 30-minute rapid doorstep dispatch.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://wa.me/919742771428"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-md bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-emerald-400 hover:border-emerald-500/50 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-md bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-blue-400 hover:border-blue-500/50 transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-md bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-pink-400 hover:border-pink-500/50 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter / X"
                className="w-9 h-9 rounded-md bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-sky-400 hover:border-sky-500/50 transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#home" className="hover:text-red-500 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-red-500 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-red-500 transition-colors">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-red-500 transition-colors">
                  Battery Products
                </a>
              </li>
              <li>
                <a href="#battery-finder" className="hover:text-red-500 transition-colors">
                  Battery Finder Tool
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-red-500 transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Service Categories */}
          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-4">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#services" className="hover:text-red-500 transition-colors">
                  Car Battery Replacement
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-red-500 transition-colors">
                  Bike Battery Replacement
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-red-500 transition-colors">
                  Home Inverter & UPS Setup
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-red-500 transition-colors">
                  Solar Battery Solutions
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-red-500 transition-colors">
                  24/7 Emergency Jumpstart
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-red-500 transition-colors">
                  Old Battery Buyback Scrap
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Location */}
          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-4">
              Store Info
            </h4>
            <div className="space-y-3 text-xs leading-relaxed">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                <span>#514, 10th Main Rd, Jeevan Bhima Nagar, HAL 3rd Stage, Bengaluru 560075</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div className="flex flex-col gap-0.5">
                  <a href="tel:+919742771428" className="hover:text-white font-semibold">
                    +91 97427 71428 (Ravi)
                  </a>
                  <a href="tel:+917259733447" className="hover:text-white text-slate-400">
                    +91 72597 33447
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" />
                <a
                  href="mailto:digitalhkravibatterypoint@gmail.com"
                  className="hover:text-white break-all"
                >
                  digitalhkravibatterypoint@gmail.com
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                <span>Open: 8:00 AM - 9:30 PM (Daily)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-slate-400 text-center sm:text-left">
            © 2026 HK Ravi Battery Point. All Rights Reserved. Authorized Battery Dealer & Service Center, Jeevan Bhima Nagar, Bangalore.
          </p>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
