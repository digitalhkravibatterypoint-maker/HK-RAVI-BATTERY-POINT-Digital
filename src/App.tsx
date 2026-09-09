import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider, useAuth } from './context/AuthContext';
import { NotificationProvider } from './context/NotificationContext';
import { Navbar } from './components/Navbar';
import { HeroSlider } from './components/HeroSlider';
import { VehicleBatteryFinder } from './components/VehicleBatteryFinder';
import { AboutSection } from './components/AboutSection';
import { ProductsSection } from './components/ProductsSection';
import { ServicesSection } from './components/ServicesSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { BrandCarousel } from './components/BrandCarousel';
import { TestimonialCarousel } from './components/TestimonialCarousel';
import { CallToAction } from './components/CallToAction';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsAppButton } from './components/FloatingWhatsAppButton';
import { SearchModal } from './components/SearchModal';
import { AuthModal } from './components/AuthModal';
import { AdminDashboard } from './components/AdminDashboard';
import { NotificationToast } from './components/NotificationToast';
import { ServiceInquiry } from './types';

const INITIAL_INQUIRIES: ServiceInquiry[] = [
  {
    id: 'INQ-1082',
    name: 'Karthik Narayanan',
    phone: '+91 99801 23456',
    email: 'karthik.n@gmail.com',
    vehicleOrService: 'Car Battery Replacement',
    location: 'HAL 3rd Stage, Jeevan Bhima Nagar',
    message: 'Swift Dzire diesel battery dead. Need doorstep replacement in 30 mins.',
    createdAt: '12 mins ago',
    status: 'In Transit',
    priority: 'Emergency'
  },
  {
    id: 'INQ-1081',
    name: 'Pooja Hegde',
    phone: '+91 98440 98765',
    email: 'pooja.blr@yahoo.com',
    vehicleOrService: 'Home UPS & Inverter Battery',
    location: 'Indiranagar 100ft Road',
    message: 'Looking for Luminous 150Ah tubular battery with exchange of old Exide battery.',
    createdAt: '1 hour ago',
    status: 'Assigned',
    priority: 'High'
  },
  {
    id: 'INQ-1080',
    name: 'Suresh Babu',
    phone: '+91 97312 34567',
    vehicleOrService: 'Bike Battery Replacement',
    location: 'Kodihalli, Jeevan Bhima Nagar',
    message: 'Royal Enfield Classic 350 battery weak self-start. Need Exide Bikerz.',
    createdAt: '3 hours ago',
    status: 'Resolved',
    priority: 'Normal'
  }
];

function AppContent() {
  const { isAdmin, user } = useAuth();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [customLogoUrl, setCustomLogoUrl] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [inquiries, setInquiries] = useState<ServiceInquiry[]>(INITIAL_INQUIRIES);

  const handleNewInquiry = (newInq: ServiceInquiry) => {
    setInquiries(prev => [newInq, ...prev]);
  };

  const handleUpdateInquiryStatus = (id: string, newStatus: ServiceInquiry['status']) => {
    setInquiries(prev =>
      prev.map(inq => (inq.id === id ? { ...inq, status: newStatus } : inq))
    );
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 selection:bg-red-600 selection:text-white flex flex-col font-sans transition-colors duration-200">
      {/* Real-time Push Notification Toast */}
      <NotificationToast />

      {/* Primary Sticky Header & Navigation */}
      <Navbar
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenAuth={() => setIsAuthOpen(true)}
        onOpenAdmin={() => {
          if (isAdmin) {
            setIsAdminOpen(true);
          } else {
            setIsAuthOpen(true);
          }
        }}
        customLogoUrl={customLogoUrl}
      />

      {/* Main Page Flow */}
      <main className="flex-1">
        {/* Hero Slider with 4 Automotive & Battery Slides */}
        <HeroSlider
          onSelectCategory={cat => {
            setSelectedCategory(cat);
            const el = document.getElementById('products');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* Vehicle Battery Finder Tool (Floating Overlap Bar) */}
        <VehicleBatteryFinder />

        {/* Section 3: About Us ("Welcome to HK Ravi Battery Point") */}
        <AboutSection />

        {/* Section 4: Products Section (4 Category Cards & Inventory Grid) */}
        <ProductsSection
          selectedCategoryTab={selectedCategory}
          onSelectCategoryTab={setSelectedCategory}
        />

        {/* Section 5: Comprehensive Services Section (8 Service Cards) */}
        <ServicesSection />

        {/* Section 6: Why Choose Us ("Why HK Ravi Battery Point?" + 100% Genuine Badge) */}
        <WhyChooseUs />

        {/* Section 7: Certified Brands Carousel (Exide, Amaron, Luminous, etc.) */}
        <BrandCarousel />

        {/* Section 8: Customer Reviews Carousel (Google 5.0 Rating) */}
        <TestimonialCarousel />

        {/* Section 9: Call to Action Banner ("Need a Battery? We've Got the Power!") */}
        <CallToAction />

        {/* Section 10: Contact Section (Interactive Form, Maps, Store Details) */}
        <ContactSection onNewInquiry={handleNewInquiry} />
      </main>

      {/* Section 11: Comprehensive Footer */}
      <Footer customLogoUrl={customLogoUrl} />

      {/* Section 12: Floating WhatsApp Button & Mobile Action Bar */}
      <FloatingWhatsAppButton />

      {/* Modals */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />

      <AuthModal
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
      />

      {/* Admin Dashboard: Strictly restricted to authenticated admin staff only */}
      {isAdmin && (
        <AdminDashboard
          isOpen={isAdminOpen}
          onClose={() => setIsAdminOpen(false)}
          inquiries={inquiries}
          onUpdateInquiryStatus={handleUpdateInquiryStatus}
          onUpdateCustomLogo={setCustomLogoUrl}
        />
      )}

      {/* Admin Floating Control Pill - only visible when store manager is logged in as Admin */}
      {isAdmin && (
        <button
          onClick={() => setIsAdminOpen(true)}
          className="fixed bottom-24 right-5 z-40 bg-slate-900 text-white border border-slate-700 px-3 py-1.5 rounded-md text-xs font-bold shadow-xl flex items-center gap-1.5 hover:bg-slate-800"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Staff Admin Panel</span>
        </button>
      )}
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <NotificationProvider>
          <AppContent />
        </NotificationProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}
