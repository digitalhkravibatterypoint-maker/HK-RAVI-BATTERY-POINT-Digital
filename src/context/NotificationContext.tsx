import React, { createContext, useContext, useState, useEffect } from 'react';
import { PushNotification } from '../types';

interface NotificationContextType {
  notifications: PushNotification[];
  unreadCount: number;
  toast: PushNotification | null;
  addNotification: (title: string, message: string, type?: 'info' | 'success' | 'alert' | 'update') => void;
  dismissToast: () => void;
  markAllAsRead: () => void;
  clearNotifications: () => void;
}

const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

const INITIAL_NOTIFICATIONS: PushNotification[] = [
  {
    id: 'notif-1',
    title: '⚡ Express Delivery Available',
    message: 'Mobile battery replacement vans active now in Jeevan Bhima Nagar & Indiranagar (Avg ETA: 25 mins).',
    timestamp: 'Just now',
    type: 'success',
    read: false
  },
  {
    id: 'notif-2',
    title: 'Exchange Offer Alert',
    message: 'Special trade-in rebate on exchange of old inverter and car scrap batteries this week.',
    timestamp: '1 hour ago',
    type: 'info',
    read: false
  }
];

export const NotificationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [notifications, setNotifications] = useState<PushNotification[]>(INITIAL_NOTIFICATIONS);
  const [toast, setToast] = useState<PushNotification | null>(null);

  const addNotification = (
    title: string,
    message: string,
    type: 'info' | 'success' | 'alert' | 'update' = 'info'
  ) => {
    const newNotif: PushNotification = {
      id: `notif-${Date.now()}`,
      title,
      message,
      timestamp: 'Just now',
      type,
      read: false
    };
    setNotifications(prev => [newNotif, ...prev]);
    setToast(newNotif);

    // Auto dismiss toast after 5 seconds
    setTimeout(() => {
      setToast(current => (current?.id === newNotif.id ? null : current));
    }, 5000);
  };

  const dismissToast = () => {
    setToast(null);
  };

  const markAllAsRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })));
  };

  const clearNotifications = () => {
    setNotifications([]);
    setToast(null);
  };

  // Simulate occasional live notification after 15s to demonstrate real-time notifications
  useEffect(() => {
    const timer = setTimeout(() => {
      addNotification(
        '🔋 Technician Dispatched',
        'Mobile van on route to HAL 3rd Stage with fresh Amaron FLO battery.',
        'update'
      );
    }, 15000);
    return () => clearTimeout(timer);
  }, []);

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <NotificationContext.Provider
      value={{
        notifications,
        unreadCount,
        toast,
        addNotification,
        dismissToast,
        markAllAsRead,
        clearNotifications
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotification = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error('useNotification must be used within a NotificationProvider');
  }
  return context;
};
