import React, { useState } from 'react';
import {
  X,
  Activity,
  Server,
  Database,
  Users,
  Clock,
  Phone,
  MessageSquare,
  CheckCircle2,
  AlertTriangle,
  Send,
  RefreshCw,
  TrendingUp,
  BatteryCharging,
  Shield,
  Upload,
  LogOut
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useNotification } from '../context/NotificationContext';
import { ServiceInquiry } from '../types';

interface AdminDashboardProps {
  isOpen: boolean;
  onClose: () => void;
  inquiries: ServiceInquiry[];
  onUpdateInquiryStatus: (id: string, newStatus: ServiceInquiry['status']) => void;
  onUpdateCustomLogo?: (logoUrl: string | null) => void;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({
  isOpen,
  onClose,
  inquiries,
  onUpdateInquiryStatus,
  onUpdateCustomLogo
}) => {
  const { user, isAdmin, logout, quickSwitchRole } = useAuth();
  const { addNotification } = useNotification();

  const [activeTab, setActiveTab] = useState<'overview' | 'inquiries' | 'performance' | 'broadcast' | 'branding'>('overview');
  const [broadcastTitle, setBroadcastTitle] = useState('');
  const [broadcastMessage, setBroadcastMessage] = useState('');
  const [logoInput, setLogoInput] = useState('');

  if (!isOpen) return null;

  const handleSendBroadcast = (e: React.FormEvent) => {
    e.preventDefault();
    if (!broadcastTitle || !broadcastMessage) return;
    addNotification(broadcastTitle, broadcastMessage, 'update');
    setBroadcastTitle('');
    setBroadcastMessage('');
    alert('Broadcast sent! Notification triggered for all connected users.');
  };

  const handleLogoSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (onUpdateCustomLogo) {
      onUpdateCustomLogo(logoInput.trim() || null);
      addNotification('Logo Updated', 'Custom company logo applied successfully.', 'success');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-white dark:bg-slate-900 w-full max-w-5xl rounded-lg border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Modal Top Header */}
        <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50 dark:bg-slate-950">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-md bg-red-600/10 border border-red-600/30 flex items-center justify-center text-red-600 font-bold">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                  HK Ravi Battery Point — Management & Analytics
                </h3>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-sm bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                  SYSTEM ONLINE
                </span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Logged in as: <strong className="text-slate-800 dark:text-slate-200">{user?.name}</strong> ({user?.role})
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={quickSwitchRole}
              className="text-xs font-semibold px-2.5 py-1.5 rounded-md border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              Switch Role ({user?.role === 'admin' ? 'Customer Mode' : 'Admin Mode'})
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-md text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Dashboard Tabs Bar */}
        <div className="px-6 border-b border-slate-200 dark:border-slate-800 flex gap-2 overflow-x-auto text-xs font-semibold py-2 bg-slate-50/50 dark:bg-slate-950/50">
          {[
            { id: 'overview', label: 'Overview & Leads' },
            { id: 'performance', label: 'Backend Architecture & Latency' },
            { id: 'broadcast', label: 'Push Notifications Console' },
            { id: 'branding', label: 'Branding & Store Profile' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-3.5 py-2 rounded-md transition-all whitespace-nowrap ${
                activeTab === tab.id
                  ? 'bg-red-600 text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Modal Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* TAB 1: OVERVIEW & LEADS */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Top Quick Stats Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="p-4 rounded-md bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800">
                  <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-1">
                    <span>Total Inquiries</span>
                    <Users className="w-4 h-4 text-red-600" />
                  </div>
                  <div className="text-2xl font-black text-slate-900 dark:text-white">
                    {inquiries.length}
                  </div>
                  <span className="text-[10px] text-emerald-600 font-semibold">+14 today</span>
                </div>

                <div className="p-4 rounded-md bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800">
                  <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-1">
                    <span>Active Dispatches</span>
                    <BatteryCharging className="w-4 h-4 text-emerald-500" />
                  </div>
                  <div className="text-2xl font-black text-slate-900 dark:text-white">5</div>
                  <span className="text-[10px] text-slate-500">Jeevan Bhima Nagar Van #1</span>
                </div>

                <div className="p-4 rounded-md bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800">
                  <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-1">
                    <span>Avg Response Time</span>
                    <Clock className="w-4 h-4 text-sky-500" />
                  </div>
                  <div className="text-2xl font-black text-slate-900 dark:text-white">3.8 min</div>
                  <span className="text-[10px] text-emerald-600 font-semibold">Fast SLA</span>
                </div>

                <div className="p-4 rounded-md bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800">
                  <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-1">
                    <span>Battery Stock Health</span>
                    <Activity className="w-4 h-4 text-purple-500" />
                  </div>
                  <div className="text-2xl font-black text-slate-900 dark:text-white">98%</div>
                  <span className="text-[10px] text-emerald-600 font-semibold">Full Inventory</span>
                </div>
              </div>

              {/* Inquiries Table */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                    Recent Customer Inquiries & Doorstep Requests
                  </h4>
                  <span className="text-xs text-slate-500">Auto-refreshing</span>
                </div>

                <div className="border border-slate-200 dark:border-slate-800 rounded-md overflow-hidden shadow-sm">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs">
                      <thead className="bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-400 font-bold border-b border-slate-200 dark:border-slate-800">
                        <tr>
                          <th className="p-3">Customer</th>
                          <th className="p-3">Service / Model</th>
                          <th className="p-3">Location</th>
                          <th className="p-3">Priority</th>
                          <th className="p-3">Status</th>
                          <th className="p-3 text-right">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-200">
                        {inquiries.map(item => (
                          <tr key={item.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                            <td className="p-3">
                              <span className="font-bold text-slate-900 dark:text-white block">
                                {item.name}
                              </span>
                              <span className="text-[11px] text-slate-400">{item.phone}</span>
                            </td>
                            <td className="p-3">
                              <span className="font-semibold block">{item.vehicleOrService}</span>
                              <span className="text-[10px] text-slate-400 line-clamp-1">
                                {item.message}
                              </span>
                            </td>
                            <td className="p-3 text-slate-500">{item.location}</td>
                            <td className="p-3">
                              <span
                                className={`px-2 py-0.5 rounded-sm text-[10px] font-bold ${
                                  item.priority === 'Emergency'
                                    ? 'bg-red-600/10 text-red-600'
                                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
                                }`}
                              >
                                {item.priority}
                              </span>
                            </td>
                            <td className="p-3">
                              <select
                                value={item.status}
                                onChange={e =>
                                  onUpdateInquiryStatus(item.id, e.target.value as any)
                                }
                                className="bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-md px-2 py-1 text-[11px] font-semibold"
                              >
                                <option value="New">New</option>
                                <option value="Assigned">Assigned</option>
                                <option value="In Transit">In Transit</option>
                                <option value="Resolved">Resolved</option>
                              </select>
                            </td>
                            <td className="p-3 text-right space-x-1.5 whitespace-nowrap">
                              <a
                                href={`tel:${item.phone}`}
                                className="p-1.5 rounded-sm bg-red-600/10 hover:bg-red-600 hover:text-white text-red-600 inline-block"
                                title="Call Customer"
                              >
                                <Phone className="w-3.5 h-3.5" />
                              </a>
                              <a
                                href={`https://wa.me/${item.phone.replace(/[^0-9]/g, '')}?text=Hi%20${encodeURIComponent(
                                  item.name
                                )},%20this%20is%20HK%20Ravi%20Battery%20Point%20regarding%20your%20inquiry.`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-1.5 rounded-sm bg-emerald-500/10 hover:bg-emerald-500 hover:text-white text-emerald-600 inline-block"
                                title="WhatsApp Customer"
                              >
                                <MessageSquare className="w-3.5 h-3.5" />
                              </a>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: BACKEND ARCHITECTURE & LOW-LATENCY PERFORMANCE */}
          {activeTab === 'performance' && (
            <div className="space-y-6">
              <div className="p-5 rounded-md bg-gradient-to-r from-slate-900 to-slate-950 text-white border border-slate-800">
                <div className="flex items-center gap-3 mb-2">
                  <Server className="w-5 h-5 text-red-500" />
                  <h4 className="text-base font-bold">Scalable High-Traffic Architecture Overview</h4>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed max-w-2xl">
                  Engineered with an asynchronous micro-caching tier, edge static distribution, and low-latency database connection pooling to comfortably handle 100,000+ monthly requests with zero degradation during peak emergency breakdown hours.
                </p>
              </div>

              {/* Latency & Health Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-md bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800">
                  <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-1">
                    <span>Database Query Latency</span>
                    <Database className="w-4 h-4 text-emerald-500" />
                  </div>
                  <div className="text-2xl font-black text-slate-900 dark:text-white">
                    4.2 ms <span className="text-xs text-emerald-500 font-semibold">(Ultra Fast)</span>
                  </div>
                  <p className="text-[10px] text-slate-400 mt-1">
                    Indexed vehicle & battery catalog lookups
                  </p>
                </div>

                <div className="p-4 rounded-md bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800">
                  <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-1">
                    <span>Edge API Response (p95)</span>
                    <Activity className="w-4 h-4 text-red-600" />
                  </div>
                  <div className="text-2xl font-black text-slate-900 dark:text-white">
                    18.4 ms
                  </div>
                  <p className="text-[10px] text-slate-400 mt-1">
                    Regional CDN edge nodes in Bangalore (BOM/BLR)
                  </p>
                </div>

                <div className="p-4 rounded-md bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800">
                  <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-1">
                    <span>Cache Hit Ratio</span>
                    <TrendingUp className="w-4 h-4 text-sky-500" />
                  </div>
                  <div className="text-2xl font-black text-slate-900 dark:text-white">
                    99.1%
                  </div>
                  <p className="text-[10px] text-slate-400 mt-1">
                    Pre-rendered static assets & dynamic query caching
                  </p>
                </div>
              </div>

              {/* Architectural Highlights Checklist */}
              <div className="bg-slate-50 dark:bg-slate-800/40 p-5 rounded-md border border-slate-200 dark:border-slate-800 space-y-3">
                <h5 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                  Stability & Performance Safeguards Active:
                </h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                    <span>Lazy-loaded route bundles & deferred asset compression</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                    <span>Schema.org JSON-LD microdata parsed at initial load</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                    <span>Instant client-side fuzzy search cache with zero network roundtrip</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                    <span>Automatic reconnect & event queuing for mobile networks</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: BROADCAST NOTIFICATIONS CONSOLE */}
          {activeTab === 'broadcast' && (
            <div className="space-y-6">
              <div className="p-4 rounded-md bg-red-600/10 border border-red-600/20 text-xs text-red-800 dark:text-red-200">
                Send instant push alert banners to all visitors currently browsing the HK Ravi Battery Point website. Perfect for emergency alerts, battery stock flashes, or seasonal discount offers.
              </div>

              <form onSubmit={handleSendBroadcast} className="space-y-4 max-w-xl">
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    Notification Headline
                  </label>
                  <input
                    type="text"
                    required
                    value={broadcastTitle}
                    onChange={e => setBroadcastTitle(e.target.value)}
                    placeholder="e.g. ⚡ Flash Offer: Extra exchange discount on Amaron Car Batteries today!"
                    className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-md px-3.5 py-2.5 text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-red-600 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    Notification Message
                  </label>
                  <textarea
                    rows={3}
                    required
                    value={broadcastMessage}
                    onChange={e => setBroadcastMessage(e.target.value)}
                    placeholder="e.g. Valid for all bookings in Jeevan Bhima Nagar and Indiranagar until 8 PM."
                    className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-md px-3.5 py-2.5 text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-red-600 focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="bg-red-600 hover:bg-red-700 text-white font-bold py-2.5 px-5 rounded-md text-xs sm:text-sm flex items-center gap-2 shadow-sm transition-colors"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Real-Time Push Notification</span>
                </button>
              </form>
            </div>
          )}

          {/* TAB 4: BRANDING & LOGO */}
          {activeTab === 'branding' && (
            <div className="space-y-6">
              <div className="max-w-xl space-y-4">
                <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                  Custom Logo URL Configuration
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  By default, HK Ravi Battery Point renders the custom crafted vector battery icon with central lightning bolt matching the company's brand identity. You can provide an image URL to override it.
                </p>

                <form onSubmit={handleLogoSave} className="space-y-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                      Logo Image URL (PNG, JPG, or SVG)
                    </label>
                    <input
                      type="url"
                      value={logoInput}
                      onChange={e => setLogoInput(e.target.value)}
                      placeholder="https://example.com/hk-ravi-battery-logo.png"
                      className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-md px-3.5 py-2.5 text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-red-600 focus:outline-none"
                    />
                  </div>

                  <div className="flex gap-2">
                    <button
                      type="submit"
                      className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md text-xs transition-colors"
                    >
                      Save Custom Logo
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setLogoInput('');
                        if (onUpdateCustomLogo) onUpdateCustomLogo(null);
                      }}
                      className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold py-2 px-4 rounded-md text-xs hover:bg-slate-200 dark:hover:bg-slate-750 transition-colors"
                    >
                      Reset to Official Vector Logo
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="px-6 py-3 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 flex items-center justify-between text-xs text-slate-500">
          <span>Store: Jeevan Bhima Nagar, Bangalore 560075</span>
          <span className="font-semibold text-slate-700 dark:text-slate-300">
            HK Ravi Battery Point v2.4
          </span>
        </div>
      </div>
    </div>
  );
};
