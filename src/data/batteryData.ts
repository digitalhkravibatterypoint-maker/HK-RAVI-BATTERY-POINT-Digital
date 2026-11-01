import { BatteryProduct, ServiceItem, BrandInfo, Testimonial, ServiceInquiry } from '../types';
import indianCarBatteryImg from '../assets/images/indian_car_battery_1788858964574.jpg';
import hkRaviShopFrontImg from '../assets/images/hk_ravi_shop_front_1788859944919.jpg';
import hkRaviShopInsideImg from '../assets/images/hk_ravi_shop_inside_1788859963918.jpg';
import indianInverterHomeImg from '../assets/images/indian_inverter_home_1788859004362.jpg';
import indianBikeBatteryImg from '../assets/images/indian_bike_battery_1788859021322.jpg';
import indianTruckBatteryImg from '../assets/images/indian_truck_battery_1788859035123.jpg';

import brandExideImg from '../assets/images/brand_exide_battery_1788860823404.jpg';
import brandAmaronImg from '../assets/images/brand_amaron_battery_1788860840340.jpg';
import brandSfSonicImg from '../assets/images/brand_sfsonic_battery_1788860864138.jpg';
import brandTataGreenImg from '../assets/images/brand_tatagreen_battery_1788860879556.jpg';
import brandLivguardImg from '../assets/images/brand_livguard_battery_1788860902011.jpg';
import brandLuminousImg from '../assets/images/brand_luminous_battery_1788860920237.jpg';
import brandMicrotekImg from '../assets/images/brand_microtek_battery_1788860936761.jpg';
import brandOkayaImg from '../assets/images/brand_okaya_battery_1788860952170.jpg';
import solarTubularBatteryImg from '../assets/images/solar_tubular_battery_1788954792984.jpg';
import luminousInverterBatteryImg from '../assets/images/luminous_inverter_battery_1788954808030.jpg';
import exideSolarBatteryImg from '../assets/images/exide_solar_battery_1788954827239.jpg';

export const INDIAN_ASSETS = {
  shop: hkRaviShopFrontImg,
  shopInside: hkRaviShopInsideImg,
  carBattery: indianCarBatteryImg,
  inverterHome: indianInverterHomeImg,
  bikeBattery: indianBikeBatteryImg,
  truckBattery: indianTruckBatteryImg,
  solarBattery: solarTubularBatteryImg,
  luminousInverter: luminousInverterBatteryImg,
  exideSolar: exideSolarBatteryImg,
};

export const HERO_SLIDES = [
  {
    id: 'slide-1',
    headline: 'Powering Every Home',
    subheadline: 'Uninterrupted Life & Comfort',
    description: 'Reliable batteries to keep your household appliances running smoothly during power cuts.',
    primaryCta: 'Explore Products',
    primaryHref: '#products',
    secondaryCta: 'Call Us',
    secondaryHref: 'tel:+919742771428',
    badge: 'Home Inverter & UPS Specialist',
    bgGradient: 'from-blue-950/90 via-slate-900/80 to-slate-950/95',
    image: indianInverterHomeImg,
    alt: 'Indian modern home with tall tubular inverter battery power backup'
  },
  {
    id: 'slide-2',
    headline: 'Drive with Confidence',
    subheadline: 'Maximum Cranking Power & Durability',
    description: 'Premium car batteries for unmatched performance and longevity on city streets and highways.',
    primaryCta: 'View Batteries',
    primaryHref: '#products',
    secondaryCta: 'Call Us',
    secondaryHref: 'tel:+919742771428',
    badge: 'Express 30-Min Bangalore Delivery',
    bgGradient: 'from-slate-950/95 via-blue-950/80 to-slate-900/90',
    image: indianCarBatteryImg,
    alt: 'Indian mechanic replacing and testing car battery on road in Bangalore'
  },
  {
    id: 'slide-3',
    headline: 'Unstoppable Rides',
    subheadline: 'Zero Maintenance Two-Wheeler Power',
    description: 'Top-quality bike batteries for a seamless riding experience every single time you push the starter.',
    primaryCta: 'Explore Bike Batteries',
    primaryHref: '#products',
    secondaryCta: 'Call Us',
    secondaryHref: 'tel:+919742771428',
    badge: 'Amaron Pro & Exide Xplore Series',
    bgGradient: 'from-red-950/80 via-slate-950/90 to-blue-950/85',
    image: indianBikeBatteryImg,
    alt: 'Motorcycle mechanic servicing 12V bike battery in Bangalore'
  },
  {
    id: 'slide-4',
    headline: 'Heavy-Duty Power',
    subheadline: 'Commercial & Fleet Readiness',
    description: 'Durable truck batteries designed to handle the toughest jobs, vibration, and high cyclic loads.',
    primaryCta: 'Commercial Batteries',
    primaryHref: '#products',
    secondaryCta: 'Call Us',
    secondaryHref: 'tel:+919742771428',
    badge: 'Heavy Duty Fleet Warranty',
    bgGradient: 'from-blue-950/90 via-slate-900/85 to-indigo-950/90',
    image: indianTruckBatteryImg,
    alt: 'Indian commercial truck battery inspection and testing'
  }
];

export const COMPANY_STATS = [
  { value: 20, suffix: '+', label: 'Years Experience', desc: 'Serving Bangalore motorists & homes since 2004' },
  { value: 25000, suffix: '+', label: 'Happy Customers', desc: 'Trusted across Jeevan Bhima Nagar & beyond' },
  { value: 15, suffix: '+', label: 'Top Battery Brands', desc: 'Authorized tier-1 dealer warranty guarantee' },
  { value: 30, suffix: ' Min', label: 'Fast & Reliable Service', desc: 'Average doorstep technician response time' }
];

export const BRANDS_LIST: BrandInfo[] = [
  {
    name: 'Exide',
    logoText: 'EXIDE',
    accentColor: '#DC2626',
    specialty: 'Automotive, Inverter & Solar Batteries',
    origin: 'Pioneer Indian Battery Giant',
    popularModels: ['Exide Mileage', 'Exide Matrix', 'InvaRed 500+'],
    batteryImage: brandExideImg
  },
  {
    name: 'Amaron',
    logoText: 'AMARON',
    accentColor: '#16A34A',
    specialty: 'Long Life SilvenX Alloy Car & Bike Batteries',
    origin: 'Lasts Long, Really Long',
    popularModels: ['Amaron FLO', 'Amaron Pro Bike Rider', 'Current CR-150'],
    batteryImage: brandAmaronImg
  },
  {
    name: 'SF Sonic',
    logoText: 'SF SONIC',
    accentColor: '#EA580C',
    specialty: 'High Vibration Resistant Starting Batteries',
    origin: 'Power that Never Stops',
    popularModels: ['Flash Start', 'Sonic Super Power', 'Torque'],
    batteryImage: brandSfSonicImg
  },
  {
    name: 'Tata Green',
    logoText: 'TATA GREEN',
    accentColor: '#059669',
    specialty: 'Eco-Friendly OEM Standard Batteries',
    origin: 'Tata AutoComp & GS Yuasa JV',
    popularModels: ['Velocity', 'Tougher High Capacity', 'Silver'],
    batteryImage: brandTataGreenImg
  },
  {
    name: 'Livguard',
    logoText: 'LIVGUARD',
    accentColor: '#E11D48',
    specialty: 'Advanced Inverter, Solar & Automotive Power',
    origin: 'Smart Energy Innovations',
    popularModels: ['Invertuff Tall Tubular', 'PowerCharge Car', 'Solaris'],
    batteryImage: brandLivguardImg
  },
  {
    name: 'Luminous',
    logoText: 'LUMINOUS',
    accentColor: '#2563EB',
    specialty: 'India No.1 Home UPS & Inverter Batteries',
    origin: 'Household Energy Leader',
    popularModels: ['Red Charge RC 18000', 'Eco Volt Neo', 'Solar NXG'],
    batteryImage: brandLuminousImg
  },
  {
    name: 'Microtek',
    logoText: 'MICROTEK',
    accentColor: '#0284C7',
    specialty: 'Intelligent Sinewave Inverters & Tubular Cells',
    origin: 'Technology We Live With',
    popularModels: ['Super Power Tubemax', 'Jumbo UPS', 'Dura Strong'],
    batteryImage: brandMicrotekImg
  },
  {
    name: 'Okaya',
    logoText: 'OKAYA',
    accentColor: '#D97706',
    specialty: 'XBD Technology Tubular & Solar Storage',
    origin: 'Japanese Reliability Certified',
    popularModels: ['Power Power OPPST 15000', 'Solar Max', 'King Tubo'],
    batteryImage: brandOkayaImg
  }
];

export const PRODUCT_CATEGORIES = [
  {
    id: 'automotive',
    title: 'Automotive Batteries',
    tagline: 'Cars, SUVs, Hatchbacks & Two-Wheelers',
    description: 'High cranking amperage, zero maintenance, and instant start reliability under all weather conditions.',
    brands: ['Exide', 'Amaron', 'SF Sonic', 'Tata Green Batteries', 'Livguard', 'Base Batteries'],
    icon: 'Car',
    image: indianCarBatteryImg
  },
  {
    id: 'inverter',
    title: 'Inverter & Home UPS Batteries',
    tagline: 'Continuous Household & Work-from-Home Backup',
    description: 'Deep cycle tall tubular batteries engineered for prolonged power cuts, fast recharge, and long life.',
    brands: ['Luminous', 'Microtek', 'Okaya', 'Amaron', 'Exide'],
    icon: 'Home',
    image: indianInverterHomeImg
  },
  {
    id: 'solar',
    title: 'Solar Batteries',
    tagline: 'Clean, Renewable Energy Storage',
    description: 'Solar C10 rated tubular batteries with exceptional deep discharge recovery and low self-discharge.',
    brands: ['Luminous', 'Okaya', 'Exide Solar Tubular Batteries', 'HBL Power Systems', 'Su-Kam'],
    icon: 'Sun',
    image: solarTubularBatteryImg
  },
  {
    id: 'industrial',
    title: 'Industrial Batteries',
    tagline: 'Commercial Telecom, DG Sets & Heavy Fleets',
    description: 'Heavy duty high Ah batteries designed for commercial generators, telecom towers, forklifts and heavy trucks.',
    brands: ['HBL Power Systems', 'Rocket Batteries', 'Amara Raja Batteries', 'Exide Industrial'],
    icon: 'Factory',
    image: indianTruckBatteryImg
  }
];

export const BATTERY_PRODUCTS: BatteryProduct[] = [
  {
    id: 'prod-amaron-flo-35',
    name: 'Amaron FLO 35Ah Car Battery (AAM-FL-00042B20R)',
    category: 'automotive',
    vehicleType: 'car',
    brand: 'Amaron',
    capacity: '35 Ah',
    warranty: '72 Months (36F + 36P)',
    voltage: '12V',
    priceEstimate: 'Best Price on Request',
    image: brandAmaronImg,
    description: 'Powered by patented SilvenX alloy for extreme heat resistance and highest reserve capacity.',
    keyFeatures: ['Factory Charged & Ready', 'Patented BIC vents for high safety', 'Zero Maintenance', 'High Cranking Power'],
    recommendedVehicles: ['Maruti Alto', 'Maruti Wagon R', 'Hyundai Santro', 'Maruti Celerio', 'Datsun GO'],
    inStock: true,
    rating: 4.9
  },
  {
    id: 'prod-exide-mileage-45',
    name: 'Exide Mileage ML45L Car Battery',
    category: 'automotive',
    vehicleType: 'car',
    brand: 'Exide',
    capacity: '45 Ah',
    warranty: '66 Months (36F + 30P)',
    voltage: '12V',
    priceEstimate: 'Best Price on Request',
    image: brandExideImg,
    description: 'Robust design built specifically for rough Indian road conditions with side vent arrestors.',
    keyFeatures: ['Special alloy grid', 'Spill-resistant double lid', 'Quick engine turnover', 'Magic Eye Charge Indicator'],
    recommendedVehicles: ['Maruti Swift', 'Swift Dzire', 'Hyundai i20', 'Honda City Petrol', 'Tata Tiago'],
    inStock: true,
    rating: 4.8
  },
  {
    id: 'prod-amaron-pro-bike',
    name: 'Amaron Pro Rider 5Ah Two-Wheeler Battery (AP-BTZ5L)',
    category: 'automotive',
    vehicleType: 'bike',
    brand: 'Amaron',
    capacity: '5 Ah',
    warranty: '48 Months (24F + 24P)',
    voltage: '12V',
    priceEstimate: 'Best Price on Request',
    image: indianBikeBatteryImg,
    description: 'VRLA technology with AGM separators for vibration resistance and reliable one-push self start.',
    keyFeatures: ['VRLA AGM technology', 'No acid topping needed', 'Leak-proof multi-angle install', 'Instant ignition'],
    recommendedVehicles: ['Honda Activa 4G/5G/6G', 'Hero Splendor iSmart', 'TVS Jupiter', 'Suzuki Access 125'],
    inStock: true,
    rating: 4.9
  },
  {
    id: 'prod-exide-xplore-bullet',
    name: 'Exide Xplore 14Ah Bullet & Cruiser Battery (XLTZ14)',
    category: 'automotive',
    vehicleType: 'bike',
    brand: 'Exide',
    capacity: '14 Ah',
    warranty: '48 Months (24F + 24P)',
    voltage: '12V',
    priceEstimate: 'Best Price on Request',
    image: indianBikeBatteryImg,
    description: 'Factory filled and zero-maintenance heavy cranking bike battery for heavy cruisers.',
    keyFeatures: ['High cranking for high CC bikes', 'Vibration proof lead calcium grid', 'Sealed design', 'Long shelf life'],
    recommendedVehicles: ['Royal Enfield Classic 350', 'Bullet 500', 'Himalayan', 'Meteor 350', 'KTM 390'],
    inStock: true,
    rating: 4.8
  },
  {
    id: 'prod-luminous-redcharge-150',
    name: 'Luminous Red Charge RC 18000 150Ah Tall Tubular',
    category: 'inverter',
    vehicleType: 'inverter',
    brand: 'Luminous',
    capacity: '150 Ah',
    warranty: '36 Months (18F + 18P)',
    voltage: '12V',
    priceEstimate: 'Best Price on Request',
    image: luminousInverterBatteryImg,
    description: 'Patented alloy structure with high acid volume for deep discharge support during prolonged outages.',
    keyFeatures: ['Tall Tubular design', 'Fast charging acceptance', 'Electrolyte level indicator caps', 'Ultra low maintenance'],
    recommendedVehicles: ['2BHK / 3BHK Home Inverters', 'Small Offices', 'Clinic Backups', 'Workstations'],
    inStock: true,
    rating: 4.9
  },
  {
    id: 'prod-microtek-tubemax-200',
    name: 'Microtek Dura Strong Super Tubemax 200Ah Inverter Battery',
    category: 'inverter',
    vehicleType: 'inverter',
    brand: 'Microtek',
    capacity: '200 Ah',
    warranty: '60 Months (36F + 24P)',
    voltage: '12V',
    priceEstimate: 'Best Price on Request',
    image: brandMicrotekImg,
    description: 'Extended hours backup with heavy spines made of pressure die casting machines for zero porosity.',
    keyFeatures: ['Extra spine thickness', 'Heavy electrical load stamina', 'Heat resilient ceramic vent plugs', 'Deep cycle stability'],
    recommendedVehicles: ['3BHK & Duplex Homes', 'Diagnostic Labs', 'Commercial Shops', 'Long duration outages'],
    inStock: true,
    rating: 4.9
  },
  {
    id: 'prod-exide-solar-tubular-150',
    name: 'Exide Solar C10 Tubular Battery 150Ah (6LMS150L)',
    category: 'solar',
    vehicleType: 'solar',
    brand: 'Exide',
    capacity: '150 Ah (C10 rated)',
    warranty: '60 Months Full Replacement',
    voltage: '12V',
    priceEstimate: 'Best Price on Request',
    image: exideSolarBatteryImg,
    description: 'Certified MNRE compliant C10 rating for off-grid and hybrid solar installations with maximum solar capture.',
    keyFeatures: ['1500+ Cycles at 80% DOD', 'Specially designed polyester gauntlet', 'High efficiency solar charging', 'Heavy duty terminals'],
    recommendedVehicles: ['Rooftop Solar 1kW - 5kW', 'Solar UPS Systems', 'Off-grid Farmhouses'],
    inStock: true,
    rating: 4.8
  },
  {
    id: 'prod-hbl-industrial-truck-150',
    name: 'HBL Heavy-Duty Commercial Truck & DG Battery 150Ah',
    category: 'industrial',
    vehicleType: 'truck',
    brand: 'HBL Power Systems',
    capacity: '150 Ah',
    warranty: '36 Months',
    voltage: '12V',
    priceEstimate: 'Best Price on Request',
    image: indianTruckBatteryImg,
    description: 'Engineered for continuous highway operations, diesel generators, heavy earthmovers and long-haul trucks.',
    keyFeatures: ['Heavy thick plate design', 'Reinforced polypropylene casing', 'High CCA for cold mornings', 'Anti-sulfation formula'],
    recommendedVehicles: ['Tata 407 / 1613', 'Ashok Leyland 2518', 'Eicher Pro', 'Kirloskar 25kVA - 62kVA DG Sets'],
    inStock: true,
    rating: 4.7
  }
];

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'service-car-replacement',
    title: 'Car Battery Replacement',
    category: 'Automotive',
    shortDesc: 'Quick doorstep car battery replacement with complete alternator and charging system check.',
    fullDesc: 'Stuck with a dead car battery in Jeevan Bhima Nagar, Indiranagar, or surrounding areas? Our certified mobile technician will reach your spot in 30 minutes with a fresh, warranty-stamped battery of your choice (Amaron, Exide, SF Sonic, Tata Green). We inspect your alternator voltage, clean terminal posts, apply anti-corrosion grease, and handle old battery recycling.',
    iconName: 'Car',
    turnaroundTime: '25-35 Minutes',
    startingPrice: 'Doorstep Service Included',
    includedBenefits: [
      'Doorstep delivery & professional installation',
      'Old battery exchange rebate with scrap trade-in',
      'Alternator and starter motor load test',
      'Instant digital warranty activation'
    ]
  },
  {
    id: 'service-bike-replacement',
    title: 'Bike Battery Replacement',
    category: 'Automotive',
    shortDesc: 'Vibration-resistant two-wheeler batteries for scooters, sports bikes & heavy cruisers.',
    fullDesc: 'Get fast battery replacements for scooters (Activa, Jupiter, Access) and motorbikes (Royal Enfield, Pulsar, Apache, Duke). We stock zero-maintenance VRLA batteries with high cold-cranking power to guarantee swift self-starts.',
    iconName: 'Bike',
    turnaroundTime: '20-30 Minutes',
    startingPrice: 'Professional Installation',
    includedBenefits: [
      'Spill-proof and multi-angle mounting',
      'Immediate push-button ignition test',
      'Best trade-in value for scrap bike batteries',
      'All major bike brands supported'
    ]
  },
  {
    id: 'service-truck-solutions',
    title: 'Truck Battery Solutions',
    category: 'Commercial',
    shortDesc: 'Heavy-duty battery sales & roadside support for transport fleets, tempos & buses.',
    fullDesc: 'Specially engineered high-ampere batteries built to withstand severe road vibrations, long highway hauls, and deep cyclic demands of commercial logistics vehicles.',
    iconName: 'Truck',
    turnaroundTime: 'Same Day / Priority',
    startingPrice: 'Corporate Rates',
    includedBenefits: [
      'Bulk fleet discounts & GST invoicing',
      'Heavy-duty battery terminal lugs fitting',
      'High CCA ratings for cold morning starts',
      'Commercial warranty support across India'
    ]
  },
  {
    id: 'service-inverter-batteries',
    title: 'Home UPS & Inverter Batteries',
    category: 'Residential',
    shortDesc: 'Complete inverter combo sales, installation, tubular battery replacement & water top-up.',
    fullDesc: 'Keep your work-from-home setup, lights, fans, and medical appliances running without a hitch. We supply genuine Luminous, Microtek, and Okaya tall tubular batteries with doorstep installation and inverter wiring inspection.',
    iconName: 'Home',
    turnaroundTime: 'Within 2 Hours',
    startingPrice: 'Setup Included with Purchase',
    includedBenefits: [
      'Load audit to determine ideal inverter capacity',
      'Safe heavy battery trolley placement',
      'Distilled water top-up kit with new battery',
      'Eco-friendly recycling of old tubular cells'
    ]
  },
  {
    id: 'service-solar-solutions',
    title: 'Solar Battery Solutions',
    category: 'Renewable',
    shortDesc: 'C10 rated deep-discharge solar tubular batteries for off-grid and hybrid solar setups.',
    fullDesc: 'Maximize your rooftop solar power generation with specialized solar batteries designed for high cyclic endurance and minimal maintenance in urban Bangalore homes and commercial establishments.',
    iconName: 'Sun',
    turnaroundTime: 'Scheduled Booking',
    startingPrice: 'Customized System',
    includedBenefits: [
      'MNRE approved high efficiency tubular plates',
      'Solar charge controller compatibility checks',
      'Long-term cycle life (1500+ cycles)',
      'Expert advice on solar sizing'
    ]
  },
  {
    id: 'service-industrial-solutions',
    title: 'Industrial Battery Solutions',
    category: 'Enterprise',
    shortDesc: 'High-capacity standby power for DG sets, telecom towers, lifts, and manufacturing units.',
    fullDesc: 'Reliable industrial energy storage from HBL, Rocket, and Amara Raja to prevent costly downtime. We provide scheduled testing, replacement, and annual maintenance agreements.',
    iconName: 'Factory',
    turnaroundTime: 'Priority B2B Response',
    startingPrice: 'B2B Quotation',
    includedBenefits: [
      'DG starter battery health assessment',
      'Heavy duty copper terminal connections',
      'Annual maintenance contracts (AMC) available',
      'Compliance with environmental scrap disposal'
    ]
  },
  {
    id: 'service-battery-testing',
    title: 'Battery Testing & Diagnostics',
    category: 'Diagnostics',
    shortDesc: 'Precision digital computerized battery health, voltage, internal resistance & alternator tests.',
    fullDesc: 'Not sure if your battery is dead or if your alternator is failing? Visit our Jeevan Bhima Nagar outlet or request our mobile technician to run a digital load test, specific gravity hydrometer test, and charging health readout.',
    iconName: 'Activity',
    turnaroundTime: '10 Minutes',
    startingPrice: 'Complimentary in-store',
    includedBenefits: [
      'State-of-the-art digital conductance meter',
      'Specific gravity inspection for lead acid batteries',
      'Alternator ripple and diode test',
      'Honest recommendation: recharge vs. replace'
    ]
  },
  {
    id: 'service-emergency-assistance',
    title: 'Emergency Battery Assistance',
    category: 'Roadside SOS',
    shortDesc: '24/7 Jumpstart service, on-the-spot mobile battery delivery & breakdown help in Bangalore.',
    fullDesc: 'Car wont crank in your basement parking or on the road? Call our emergency helpline. Our mobile emergency van arrives equipped with heavy-duty booster cables, jump starter packs, and backup batteries for instant rescue.',
    iconName: 'Zap',
    turnaroundTime: '20-30 Min Emergency SOS',
    startingPrice: 'Nominal Callout / Included with New Battery',
    includedBenefits: [
      'Quick jumpstart with surge protection',
      'Covering Jeevan Bhima Nagar, Indiranagar, Domlur, HAL',
      '24/7 emergency phone assistance',
      'Credit card & UPI payment on spot'
    ]
  }
];

export const WHY_CHOOSE_US_ITEMS = [
  {
    title: '20+ Years of Expertise',
    description: 'Trusted by thousands for reliable and efficient service across Bangalore since 2004.',
    icon: 'Award'
  },
  {
    title: 'Top Brands',
    description: 'Offering only 100% genuine batteries from Exide, Amaron, Luminous, SF Sonic & Livguard.',
    icon: 'ShieldCheck'
  },
  {
    title: 'Affordable Pricing',
    description: 'High-quality battery solutions at competitive prices with transparent old battery exchange rebates.',
    icon: 'Tag'
  },
  {
    title: 'Fast Service',
    description: 'Quick and reliable 30-minute doorstep assistance when you need urgent power support.',
    icon: 'Clock'
  },
  {
    title: 'Customer Focused',
    description: 'Personalized recommendations, professional mechanics, and dedicated post-sales warranty support.',
    icon: 'HeartHandshake'
  }
];

export const CUSTOMER_REVIEWS: Testimonial[] = [
  {
    id: 'rev-1',
    name: 'Vikram Sundaram',
    location: 'Jeevan Bhima Nagar, Bangalore',
    vehicleOrAppliance: 'Hyundai Creta Battery Replacement',
    rating: 5,
    date: '2 days ago',
    comment: 'My car refused to crank on Monday morning before an urgent flight. Called HK Ravi Battery Point after finding their number on Google. Their technician arrived in 25 minutes with an Amaron FLO battery, tested my alternator, and installed it cleanly. Exceptional speed and reasonable pricing!',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 'rev-2',
    name: 'Pooja Narayanan',
    location: 'Indiranagar 100ft Rd, Bangalore',
    vehicleOrAppliance: 'Luminous Inverter & 150Ah Tubular Battery',
    rating: 5,
    date: '1 week ago',
    comment: 'Purchased a complete home inverter combo for our 3BHK. Mr. Ravi gave very genuine advice on what Ah rating we actually needed instead of overselling. Delivered and installed on the same afternoon with proper trolley and warranty card. Highly recommended battery shop!',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 'rev-3',
    name: 'Karthik Gowda',
    location: 'HAL 3rd Stage, Bangalore',
    vehicleOrAppliance: 'Royal Enfield Classic 350 Battery',
    rating: 5,
    date: '2 weeks ago',
    comment: 'Replaced my Enfield battery with Exide Xplore. Fair trade-in price for my scrap battery and polite staff. They even cleaned my battery tray and applied terminal gel. Best battery dealer in Jeevan Bhima Nagar without doubt.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 'rev-4',
    name: 'Anand Kulkarni',
    location: 'Domlur Layout, Bangalore',
    vehicleOrAppliance: 'Commercial Fleet Battery Testing',
    rating: 5,
    date: '3 weeks ago',
    comment: 'We manage 12 delivery pickup vans. HK Ravi Battery Point takes care of our battery maintenance and replacements. Super transparent billing with GST invoice and immediate replacement whenever needed.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80'
  }
];

export const INITIAL_INQUIRIES: ServiceInquiry[] = [
  {
    id: 'INQ-9821',
    name: 'Rajesh Kumar',
    phone: '+91 98451 77210',
    email: 'rajesh.k@gmail.com',
    vehicleOrService: 'Car Battery Replacement (Maruti Swift Dzire)',
    batteryBrand: 'Amaron FLO 45Ah',
    location: 'Jeevan Bhima Nagar Main Rd',
    message: 'Car battery died in my apartment parking. Need doorstep replacement today before 4 PM.',
    createdAt: '10 mins ago',
    status: 'New',
    priority: 'High'
  },
  {
    id: 'INQ-9820',
    name: 'Meera Deshmukh',
    phone: '+91 97412 88390',
    email: 'meera.d@outlook.com',
    vehicleOrService: 'Home UPS Battery (Luminous 150Ah)',
    batteryBrand: 'Luminous RedCharge',
    location: 'Indiranagar 12th Main',
    message: 'Existing inverter giving low backup time. Please provide exchange quote for old battery.',
    createdAt: '45 mins ago',
    status: 'Contacted',
    priority: 'Normal'
  },
  {
    id: 'INQ-9819',
    name: 'Suresh Babu',
    phone: '+91 99005 12844',
    email: 'suresh@babutransports.in',
    vehicleOrService: 'Emergency Roadside Jumpstart',
    batteryBrand: 'Exide Heavy Duty',
    location: 'Old Airport Road near Manipal Hospital',
    message: 'Vehicle engine stalled. Emergency technician requested.',
    createdAt: '2 hours ago',
    status: 'Technician Dispatched',
    priority: 'Emergency'
  }
];

// Pre-seeded Vehicle selector matrix
export const VEHICLE_SELECT_DATA = {
  types: ['Car', 'Bike', 'Inverter / Home UPS', 'Truck / Commercial'],
  makes: {
    Car: ['Maruti Suzuki', 'Hyundai', 'Tata Motors', 'Honda', 'Toyota', 'Mahindra', 'Kia'],
    Bike: ['Honda', 'Royal Enfield', 'Hero MotoCorp', 'Bajaj', 'TVS', 'Yamaha', 'KTM'],
    'Inverter / Home UPS': ['1 BHK (Basic lights & fans)', '2 BHK (Fridge + TV + lights)', '3 BHK (Heavy appliances + WFH)', 'Commercial Office'],
    'Truck / Commercial': ['Tata Motors', 'Ashok Leyland', 'Eicher', 'Mahindra Bolero Maxi Truck']
  },
  models: {
    'Maruti Suzuki': ['Swift (Petrol)', 'Swift (Diesel)', 'Baleno', 'Wagon R', 'Ertiga', 'Brezza', 'Alto 800 / K10'],
    Hyundai: ['Creta', 'i20', 'Venue', 'Verna', 'Grand i10 Nios', 'Santro'],
    'Tata Motors': ['Nexon', 'Punch', 'Altroz', 'Tiago', 'Harrier', 'Safari'],
    Honda: ['City', 'Amaze', 'Civic', 'Jazz'],
    Toyota: ['Innova Crysta', 'Fortuner', 'Glanza', 'Urban Cruiser Hyryder'],
    'Royal Enfield': ['Classic 350', 'Bullet 350', 'Hunter 350', 'Meteor 350', 'Himalayan 450'],
    'Hero MotoCorp': ['Splendor Plus', 'HF Deluxe', 'Glamour', 'Xpulse 200'],
    TVS: ['Jupiter 110/125', 'Apache RTR 160/200', 'Ntorq 125', 'Raider 125']
  }
};
