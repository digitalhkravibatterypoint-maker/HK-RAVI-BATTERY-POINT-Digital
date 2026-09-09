import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageSquare,
  Send,
  CheckCircle2,
  AlertCircle,
  Zap,
  ExternalLink
} from 'lucide-react';
import { useNotification } from '../context/NotificationContext';
import { ServiceInquiry } from '../types';

interface ContactSectionProps {
  onNewInquiry?: (inquiry: ServiceInquiry) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onNewInquiry }) => {
  const { addNotification } = useNotification();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    serviceType: 'Car Battery Replacement',
    location: 'Jeevan Bhima Nagar',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert('Please provide your name and contact phone number.');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);

      const newInquiry: ServiceInquiry = {
        id: `INQ-${Math.floor(1000 + Math.random() * 9000)}`,
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        vehicleOrService: formData.serviceType,
        location: formData.location,
        message: formData.message || 'Doorstep service request submitted via web form.',
        createdAt: 'Just now',
        status: 'New',
        priority: formData.message.toLowerCase().includes('emergency') ? 'Emergency' : 'High'
      };

      if (onNewInquiry) {
        onNewInquiry(newInquiry);
      }

      addNotification(
        '✅ Request Received!',
        `Thank you ${formData.name}. Our technician will call ${formData.phone} within 5 minutes.`,
        'success'
      );
    }, 600);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-slate-50 dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-red-600 dark:text-red-400">
            Reach Out to HK Ravi Battery Point
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight mt-1">
            Get in Touch
          </h2>
          <p className="mt-2 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Visit our physical store in Jeevan Bhima Nagar or book our mobile van for instant doorstep service.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column: Contact Information Cards & Working Hours */}
          <div className="lg:col-span-5 space-y-6">
            {/* Direct Contact Points */}
            <div className="bg-white dark:bg-slate-900 rounded-lg p-6 sm:p-7 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-5">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white pb-3 border-b border-slate-100 dark:border-slate-800">
                Store Information
              </h3>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-md bg-red-600/10 text-red-600 dark:text-red-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Store Location
                  </h4>
                  <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 mt-0.5">
                    #514, 10th Main Road, Jeevan Bhima Nagar, HAL 3rd Stage, Bengaluru, Karnataka 560075
                  </p>
                  <span className="text-xs text-slate-500">
                    GSTIN: 29BEMPR4044A1ZH • Near SRD Xerox
                  </span>
                </div>
              </div>

              {/* Phone & Hotline */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Phone Numbers
                  </h4>
                  <div className="flex flex-col gap-1 mt-0.5">
                    <a
                      href="tel:+919742771428"
                      className="text-base font-bold text-slate-900 dark:text-white hover:text-red-600 block"
                    >
                      +91 97427 71428 <span className="text-xs font-normal text-slate-500">(Ravi - Primary)</span>
                    </a>
                    <a
                      href="tel:+917259733447"
                      className="text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-red-600 block"
                    >
                      +91 72597 33447 <span className="text-xs font-normal text-slate-500">(Secondary)</span>
                    </a>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Direct line for orders, fast delivery & 24/7 breakdown SOS
                  </p>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-md bg-green-500/10 text-green-600 dark:text-green-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    WhatsApp Chat
                  </h4>
                  <a
                    href="https://wa.me/919742771428"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold text-emerald-600 dark:text-emerald-400 hover:underline block mt-0.5"
                  >
                    Chat with Ravi on WhatsApp (+91 97427 71428) &rarr;
                  </a>
                  <p className="text-xs text-slate-500">Fast quote & battery photos share</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-md bg-sky-500/10 text-sky-600 dark:text-sky-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Official Email
                  </h4>
                  <a
                    href="mailto:digitalhkravibatterypoint@gmail.com"
                    className="text-sm font-semibold text-slate-800 dark:text-slate-200 hover:text-red-600 block mt-0.5 break-all"
                  >
                    digitalhkravibatterypoint@gmail.com
                  </a>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-4 pt-2 border-t border-slate-100 dark:border-slate-800">
                <div className="w-10 h-10 rounded-md bg-red-600/10 text-red-600 dark:text-red-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Working Hours
                  </h4>
                  <p className="text-sm font-bold text-slate-900 dark:text-white mt-0.5">
                    Monday – Sunday: 8:00 AM – 9:30 PM
                  </p>
                  <p className="text-xs text-red-600 dark:text-red-400 font-semibold mt-0.5">
                    24/7 Roadside Jumpstart Helpline Available
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Action Badges */}
            <div className="flex gap-3">
              <a
                href="https://wa.me/919742771428?text=Hello%20HK%20Ravi%20Battery%20Point,%20I%20need%20a%20price%20quote%20for%20a%20battery."
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 px-4 rounded-md text-center text-xs sm:text-sm shadow-md transition-colors flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>WhatsApp Us</span>
              </a>
              <a
                href="tel:+919742771428"
                className="flex-1 bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded-md text-center text-xs sm:text-sm shadow-md transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 fill-white" />
                <span>Call Store</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Form & Google Maps */}
          <div className="lg:col-span-7 space-y-6">
            {/* Form Card */}
            <div className="bg-white dark:bg-slate-900 rounded-lg p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 shadow-sm">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Send an Inquiry / Request Doorstep Delivery
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                  Fill out the form below. Our service manager will respond with an all-inclusive quote within 5 minutes.
                </p>
              </div>

              {submitted ? (
                <div className="bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 rounded-md p-6 text-center space-y-3 animate-in fade-in duration-300">
                  <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-emerald-900 dark:text-emerald-100">
                    Inquiry Submitted Successfully!
                  </h4>
                  <p className="text-xs sm:text-sm text-emerald-700 dark:text-emerald-300 max-w-md mx-auto">
                    We have logged your request. Ravi Kumar from HK Ravi Battery Point will contact you on{' '}
                    <strong>{formData.phone}</strong> shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        phone: '',
                        email: '',
                        serviceType: 'Car Battery Replacement',
                        location: 'Jeevan Bhima Nagar',
                        message: ''
                      });
                    }}
                    className="text-xs font-bold text-emerald-800 dark:text-emerald-300 underline mt-2 inline-block"
                  >
                    Submit another inquiry &rarr;
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Anand Sharma"
                        className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-md px-3.5 py-2.5 text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-red-600 focus:outline-none"
                      />
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. 97427 71428"
                        className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-md px-3.5 py-2.5 text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-red-600 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Email */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. anand@gmail.com"
                        className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-md px-3.5 py-2.5 text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-red-600 focus:outline-none"
                      />
                    </div>

                    {/* Service Type */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                        Required Service / Battery
                      </label>
                      <select
                        name="serviceType"
                        value={formData.serviceType}
                        onChange={handleChange}
                        className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-md px-3.5 py-2.5 text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-red-600 focus:outline-none"
                      >
                        <option value="Car Battery Replacement">Car Battery Replacement</option>
                        <option value="Bike Battery Replacement">Bike Battery Replacement</option>
                        <option value="Home UPS & Inverter Battery">Home UPS & Inverter Battery</option>
                        <option value="Solar Battery Solution">Solar Battery Solution</option>
                        <option value="Commercial / Truck Battery">Commercial / Truck Battery</option>
                        <option value="Battery Health Diagnostics">Battery Health Diagnostics</option>
                        <option value="Emergency Roadside Jumpstart">Emergency Roadside Jumpstart</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                      Message / Vehicle Model / Battery Details
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="e.g. My Maruti Swift battery is 4 years old and sluggish. Need replacement at Indiranagar apartment today."
                      className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-md px-3.5 py-2.5 text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-red-600 focus:outline-none resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-black py-3.5 px-6 rounded-md shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 text-sm sm:text-base active:scale-98 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span>Submitting Request...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Inquiry (Get Callback in 5 Mins)</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Google Maps Location Embed Area */}
            <div className="bg-white dark:bg-slate-900 rounded-lg p-4 sm:p-5 border border-slate-200/80 dark:border-slate-800 shadow-sm overflow-hidden">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-red-500" />
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                    Google Maps Location: Jeevan Bhima Nagar, Bangalore
                  </h4>
                </div>
                <a
                  href="https://maps.app.goo.gl/NjscCZPUAvWybaGE7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-red-600 dark:text-red-400 hover:underline flex items-center gap-1"
                >
                  <span>Open Full Map</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Embedded interactive map of Jeevan Bhima Nagar Bangalore */}
              <div className="relative h-64 sm:h-72 rounded-md overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-100">
                <iframe
                  title="HK Ravi Battery Point Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15552.482087532392!2d77.6534571790432!3d12.965416246473105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae140306353d71%3A0xe541e21b06606014!2sJeevan%20Bima%20Nagar%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="filter grayscale-20 contrast-105"
                />
                {/* Floating location card */}
                <div className="absolute top-3 left-3 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md px-3 py-2 rounded-md border border-slate-200 dark:border-slate-800 shadow-md text-xs">
                  <span className="font-bold text-slate-900 dark:text-white block">
                    📍 HK Ravi Battery Point
                  </span>
                  <span className="text-slate-500 dark:text-slate-400 text-[11px]">
                    HAL 3rd Stage, Jeevan Bhima Nagar
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
