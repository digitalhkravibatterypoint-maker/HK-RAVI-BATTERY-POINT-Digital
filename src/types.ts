export type VehicleType = 'car' | 'bike' | 'truck' | 'inverter' | 'solar' | 'industrial';

export interface BatteryProduct {
  id: string;
  name: string;
  category: 'automotive' | 'inverter' | 'solar' | 'industrial';
  vehicleType: VehicleType;
  brand: string;
  capacity: string; // e.g., '35 Ah', '150 Ah'
  warranty: string; // e.g., '66 Months (36F + 30P)'
  voltage: string;  // e.g., '12V'
  priceEstimate: string;
  image: string;
  description: string;
  keyFeatures: string[];
  recommendedVehicles?: string[];
  inStock: boolean;
  rating: number;
}

export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  turnaroundTime: string;
  startingPrice: string;
  includedBenefits: string[];
}

export interface BrandInfo {
  name: string;
  logoText: string;
  accentColor: string;
  specialty: string;
  origin: string;
  popularModels: string[];
  batteryImage?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  vehicleOrAppliance: string;
  rating: number;
  date: string;
  comment: string;
  avatar: string;
}

export interface ServiceInquiry {
  id: string;
  name: string;
  phone: string;
  email?: string;
  vehicleOrService: string;
  batteryBrand?: string;
  location: string;
  message: string;
  createdAt: string;
  status: 'New' | 'Contacted' | 'Assigned' | 'In Transit' | 'Technician Dispatched' | 'Resolved' | 'Completed';
  priority: 'High' | 'Normal' | 'Emergency';
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: 'admin' | 'customer';
  savedVehicles?: string[];
}

export interface PushNotification {
  id: string;
  title: string;
  message: string;
  timestamp: string;
  type: 'info' | 'success' | 'alert' | 'update';
  read: boolean;
}

export interface AnalyticsData {
  todayVisits: number;
  activeLiveUsers: number;
  totalCallsToday: number;
  inquiriesCount: number;
  topKeywords: { keyword: string; count: number }[];
  popularCategories: { name: string; percentage: number }[];
}
