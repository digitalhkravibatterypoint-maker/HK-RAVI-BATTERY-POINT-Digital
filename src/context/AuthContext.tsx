import React, { createContext, useContext, useState, useEffect } from 'react';
import { UserProfile } from '../types';

interface AuthContextType {
  user: UserProfile | null;
  isAdmin: boolean;
  login: (email: string, role?: 'admin' | 'customer') => boolean;
  logout: () => void;
  quickSwitchRole: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserProfile | null>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('hk_battery_auth');
      if (saved) {
        try {
          return JSON.parse(saved);
        } catch {
          return null;
        }
      }
    }
    // Default to unauthenticated visitor
    return null;
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem('hk_battery_auth', JSON.stringify(user));
    } else {
      localStorage.removeItem('hk_battery_auth');
    }
  }, [user]);

  const login = (email: string, role: 'admin' | 'customer' = 'customer'): boolean => {
    const isSpecialAdmin = email.includes('admin') || email.includes('digitalhkravi');
    const assignedRole = isSpecialAdmin ? 'admin' : role;
    const namePart = email.split('@')[0];
    const formattedName = namePart.charAt(0).toUpperCase() + namePart.slice(1);

    const newUser: UserProfile = {
      id: `usr-${Date.now().toString(36)}`,
      name: assignedRole === 'admin' ? `${formattedName} (Admin)` : formattedName,
      email,
      phone: '+91 97427 71428',
      role: assignedRole,
      savedVehicles: ['Hyundai Creta']
    };
    setUser(newUser);
    return true;
  };

  const logout = () => {
    setUser(null);
  };

  const quickSwitchRole = () => {
    if (!user) {
      login('admin@hkravibattery.com', 'admin');
      return;
    }
    const newRole = user.role === 'admin' ? 'customer' : 'admin';
    setUser({
      ...user,
      role: newRole,
      name: newRole === 'admin' ? 'Ravi Kumar (Manager)' : 'Ravi Customer'
    });
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAdmin: user?.role === 'admin',
        login,
        logout,
        quickSwitchRole
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
