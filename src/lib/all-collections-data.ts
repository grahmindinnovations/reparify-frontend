export type CollectionItem = {
  slug: string;
  name: string;
  image: string;
  description: string;
};

export type CollectionProduct = {
  id: string;
  title: string;
  image: string;
  price: number;
  compareAtPrice?: number;
  emi: number;
  rating?: number;
  badge?: "Premium" | "Sale";
  soldOut?: boolean;
};

export type FilterOption = {
  label: string;
  count: number;
};

export type CollectionFilters = {
  productCount?: number;
  highestPrice?: number;
  availability: {
    inStock: number;
    outOfStock: number;
  };
  categories: FilterOption[];
  vehicleConfigs: FilterOption[];
};

export const allCollections: CollectionItem[] = [
  {
    slug: "fog-lamps",
    name: "Fog lamps",
    image: "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?auto=format&fit=crop&w=900&q=80",
    description: "High-visibility fog lamps designed for safer low-light and rainy rides.",
  },
  {
    slug: "performance-parts",
    name: "Performance parts",
    image: "https://images.unsplash.com/photo-1581539250439-c96689b516dd?auto=format&fit=crop&w=900&q=80",
    description: "Upgrade acceleration, handling, and reliability with race-ready performance parts.",
  },
  {
    slug: "chain-sprocket",
    name: "Chain sprocket",
    image: "https://images.unsplash.com/photo-1554223789-0f8d2d4f0f66?auto=format&fit=crop&w=900&q=80",
    description: "Durable chain and sprocket kits built for smooth power transfer.",
  },
  {
    slug: "goggles",
    name: "Goggles",
    image: "https://images.unsplash.com/photo-1462392246754-28dfa2df8e6b?auto=format&fit=crop&w=900&q=80",
    description: "Clear-vision riding goggles for trails, dirt, and city rides.",
  },
  {
    slug: "helmet",
    name: "Helmet",
    image: "https://images.unsplash.com/photo-1665948836459-95f47c57ec37?auto=format&fit=crop&w=900&q=80",
    description: "Certified helmets across full-face, modular, and off-road styles.",
  },
  {
    slug: "riding-boots",
    name: "Riding Boots",
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=900&q=80",
    description: "Protective riding boots with grip, ankle support, and weather resistance.",
  },
  {
    slug: "gloves",
    name: "Gloves",
    image: "https://images.unsplash.com/photo-1613482187632-0d8f0f6f2618?auto=format&fit=crop&w=900&q=80",
    description: "Comfort-focused and armored gloves for all weather conditions.",
  },
  {
    slug: "riding-jacket",
    name: "Riding Jacket",
    image: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&w=900&q=80",
    description: "Protective jackets with armor inserts and ventilation panels.",
  },
  {
    slug: "intercom-bluetooth",
    name: "Intercom bluetooth",
    image: "https://images.unsplash.com/photo-1613214150388-f45f1f297ec5?auto=format&fit=crop&w=900&q=80",
    description: "Helmet communication systems with stable Bluetooth pairing.",
  },
  {
    slug: "brake-pad",
    name: "Brake pad",
    image: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?auto=format&fit=crop&w=900&q=80",
    description: "Reliable brake pads for better bite and safer stopping performance.",
  },
  {
    slug: "apparel",
    name: "Apparel",
    image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80",
    description: "Rider apparel for comfort, protection, and style on every trip.",
  },
  {
    slug: "bike-protection",
    name: "Bike protection",
    image: "https://images.unsplash.com/photo-1619771914272-9ca9e5de50f8?auto=format&fit=crop&w=900&q=80",
    description: "Crash guards, sliders, and frame protectors built for tough conditions.",
  },
  {
    slug: "brake-system",
    name: "Brake system",
    image: "https://images.unsplash.com/photo-1519751138087-5bf79df62d5b?auto=format&fit=crop&w=900&q=80",
    description: "Complete brake system parts for responsive and controlled braking.",
  },
  {
    slug: "foot-control",
    name: "Foot control",
    image: "https://images.unsplash.com/photo-1558981285-6f0c94958bb6?auto=format&fit=crop&w=900&q=80",
    description: "Levers and foot pegs engineered for rider ergonomics and control.",
  },
  {
    slug: "hand-guard",
    name: "Hand Guard",
    image: "https://images.unsplash.com/photo-1611241443702-79b4e90f9f8c?auto=format&fit=crop&w=900&q=80",
    description: "Strong hand guards for off-road impact and weather protection.",
  },
  {
    slug: "luggage",
    name: "Luggage",
    image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=900&q=80",
    description: "Top boxes, side panniers, and touring luggage systems.",
  },
  {
    slug: "collectible-toys",
    name: "Collectible toys",
    image: "https://images.unsplash.com/photo-1617654112368-307921291f42?auto=format&fit=crop&w=900&q=80",
    description: "Detailed collectible miniatures and rider-themed toys.",
  },
  {
    slug: "mobile-holder",
    name: "Mobile holder",
    image: "https://images.unsplash.com/photo-1604017011826-d3b4c23f8914?auto=format&fit=crop&w=900&q=80",
    description: "Secure mobile holders for navigation and daily commuting.",
  },
  {
    slug: "mirror",
    name: "Mirror",
    image: "https://images.unsplash.com/photo-1619771914272-9ca9e5de50f8?auto=format&fit=crop&w=900&q=80",
    description: "Stylish, vibration-resistant mirrors for clear rear visibility.",
  },
  {
    slug: "screen-guard",
    name: "Screen Guard",
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=900&q=80",
    description: "High-clarity screen protectors for meters and dashboards.",
  },
  {
    slug: "service-parts",
    name: "Service parts",
    image: "https://images.unsplash.com/photo-1625047509168-a7026f36de04?auto=format&fit=crop&w=900&q=80",
    description: "Routine service essentials including oils, filters, and tune-up kits.",
  },
  {
    slug: "touring-accessories",
    name: "Touring accessories",
    image: "https://images.unsplash.com/photo-1520106212299-d99c443e4568?auto=format&fit=crop&w=900&q=80",
    description: "Long-ride accessories to improve comfort and utility on tours.",
  },
  {
    slug: "windshield",
    name: "Windshield",
    image: "https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=900&q=80",
    description: "Windshields engineered for reduced buffeting and better visibility.",
  },
  {
    slug: "hazard-flasher",
    name: "Hazard flasher",
    image: "https://images.unsplash.com/photo-1485291571150-772bcfc10da5?auto=format&fit=crop&w=900&q=80",
    description: "Smart flasher modules for safer signaling in traffic.",
  },
  {
    slug: "clutch-parts",
    name: "Clutch parts",
    image: "https://images.unsplash.com/photo-1628996375848-6f8f8fd59bf2?auto=format&fit=crop&w=900&q=80",
    description: "Clutch plates, springs, and kits for smooth engagement.",
  },
];

const productImagePool = [
  "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1519751138087-5bf79df62d5b?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1558981285-6f0c94958bb6?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1625047509168-a7026f36de04?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1554223789-0f8d2d4f0f66?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1609630875171-b1321377ee65?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1628996375848-6f8f8fd59bf2?auto=format&fit=crop&w=900&q=80",
];

export function getCollectionBySlug(slug: string) {
  return allCollections.find((collection) => collection.slug === slug);
}

export function getCategoryProducts(collection: CollectionItem): CollectionProduct[] {
  return productImagePool.map((image, index) => {
    const basePrice = 1499 + index * 650;
    const isDiscounted = index % 2 === 0;
    const soldOut = index > 5;
    const badge = index === 0 ? "Premium" : index === 1 ? "Sale" : undefined;

    return {
      id: `${collection.slug}-${index + 1}`,
      title: `${collection.name} Product ${index + 1}`,
      image,
      price: basePrice,
      compareAtPrice: isDiscounted ? basePrice + 700 : undefined,
      emi: Math.max(500, Math.round(basePrice / 3)),
      rating: soldOut ? 4.6 : 5,
      badge,
      soldOut,
    };
  });
}

const defaultCategoryFilters: FilterOption[] = [
  { label: "Motor Vehicle Parts", count: 8 },
  { label: "Vehicle Parts & Accessories", count: 6 },
  { label: "Motorcycle Accessories", count: 5 },
];

const defaultVehicleConfigs: FilterOption[] = [
  { label: "All Motorcycle", count: 12 },
  { label: "Adventure 390", count: 3 },
  { label: "Duke 390", count: 2 },
];

const collectionFilterMap: Record<string, CollectionFilters> = {
  "chain-sprocket": {
    productCount: 135,
    highestPrice: 15591,
    availability: { inStock: 89, outOfStock: 46 },
    categories: [
      { label: "Bicycle Tools", count: 1 },
      { label: "Chains", count: 4 },
      { label: "Clutches", count: 1 },
      { label: "Motor Vehicle Engine Parts", count: 1 },
      { label: "Motor Vehicle Parts", count: 43 },
      { label: "Motor Vehicle Transmission & Drivetrain Parts", count: 39 },
      { label: "Vehicle Greases", count: 1 },
      { label: "Vehicle Parts & Accessories", count: 46 },
      { label: "Vehicle Repair & Specialty Tools", count: 1 },
    ],
    vehicleConfigs: [
      { label: "Adventure 250", count: 1 },
      { label: "Adventure 390", count: 2 },
      { label: "All Motorcycle", count: 3 },
      { label: "Apache RR 310", count: 1 },
      { label: "Bajaj Dominar 250", count: 2 },
      { label: "Bajaj Dominar 400", count: 2 },
      { label: "BMW 310 GS", count: 1 },
      { label: "BMW 310 R", count: 1 },
      { label: "Duke 200", count: 6 },
      { label: "Duke 250", count: 2 },
      { label: "Duke 390", count: 3 },
      { label: "RC 200", count: 3 },
      { label: "RE Classic 350", count: 4 },
      { label: "RE INT 650", count: 2 },
      { label: "R15 v3", count: 2 },
      { label: "XPULSE 200", count: 3 },
    ],
  },
  "fog-lamps": {
    productCount: 23,
    highestPrice: 8999,
    availability: { inStock: 76, outOfStock: 23 },
    categories: [
      { label: "Fog Lights", count: 3 },
      { label: "Headlights", count: 5 },
      { label: "Camping Lights & Lanterns", count: 2 },
    ],
    vehicleConfigs: [
      { label: "All Motorcycle", count: 21 },
      { label: "Adventure 250", count: 1 },
      { label: "Adventure 390", count: 1 },
      { label: "Apache RR 310", count: 1 },
      { label: "Bajaj Dominar 250", count: 2 },
      { label: "Bajaj Dominar 400", count: 6 },
      { label: "BMW 310 GS", count: 2 },
      { label: "BMW 310 R", count: 2 },
    ],
  },
  "performance-parts": {
    productCount: 337,
    highestPrice: 20750,
    availability: { inStock: 225, outOfStock: 199 },
    categories: [
      { label: "Performance Air Filter", count: 56 },
      { label: "Performance Exhaust", count: 61 },
      { label: "Iridium Spark Plug", count: 24 },
      { label: "FuelX", count: 12 },
      { label: "PowerTRONICS", count: 9 },
      { label: "Engine Tuning Parts", count: 18 },
    ],
    vehicleConfigs: [
      { label: "All Motorcycle", count: 53 },
      { label: "Adventure 390", count: 3 },
      { label: "Apache RR 310", count: 5 },
      { label: "Bajaj Dominar 250", count: 2 },
      { label: "Bajaj Dominar 400", count: 6 },
      { label: "BMW 310 GS", count: 2 },
      { label: "BMW 310 R", count: 2 },
      { label: "Classic 350", count: 6 },
      { label: "Himalayan 450", count: 2 },
      { label: "Interceptor 650", count: 8 },
      { label: "Continental GT 650", count: 8 },
      { label: "R15 v4", count: 4 },
    ],
  },
  goggles: {
    productCount: 31,
    highestPrice: 2250,
    availability: { inStock: 15, outOfStock: 16 },
    categories: [
      { label: "Bicycle Helmet Parts & Accessories", count: 1 },
      { label: "Cycling Apparel & Accessories", count: 9 },
      { label: "Motorcycle Goggles", count: 10 },
      { label: "Sunglasses", count: 1 },
    ],
    vehicleConfigs: [],
  },
  helmet: {
    productCount: 180,
    highestPrice: 12500,
    availability: { inStock: 109, outOfStock: 139 },
    categories: [
      { label: "Field Hockey & Lacrosse Helmets", count: 1 },
      { label: "Full Face Helmets", count: 70 },
      { label: "Half Helmets", count: 17 },
      { label: "Modular Helmets", count: 5 },
      { label: "Motorcycle Helmet Parts & Accessories", count: 1 },
      { label: "Motorcycle Helmets", count: 165 },
      { label: "Off-Road & Motor Sports Vehicle Protective Gear", count: 2 },
      { label: "Off-Road Helmets", count: 13 },
      { label: "Open Face Helmets", count: 9 },
    ],
    vehicleConfigs: [{ label: "All Motorcycle", count: 1 }],
  },
  "riding-boots": {
    productCount: 10,
    highestPrice: 14990,
    availability: { inStock: 9, outOfStock: 7 },
    categories: [
      { label: "Boots", count: 2 },
      { label: "Motorcycle Protective Gear", count: 7 },
      { label: "Shoe Covers", count: 1 },
    ],
    vehicleConfigs: [],
  },
  gloves: {
    productCount: 31,
    highestPrice: 8990,
    availability: { inStock: 15, outOfStock: 27 },
    categories: [
      { label: "Bicycle Gloves", count: 8 },
      { label: "Motorcycle Gloves", count: 14 },
      { label: "Motorcycle Outerwear", count: 1 },
    ],
    vehicleConfigs: [{ label: "All Motorcycle", count: 6 }],
  },
  "riding-jacket": {
    productCount: 15,
    highestPrice: 15450,
    availability: { inStock: 8, outOfStock: 10 },
    categories: [
      { label: "Motorcycle Chest & Back Protectors", count: 3 },
      { label: "Motorcycle Outerwear", count: 3 },
      { label: "Motorcycle Protective Gear", count: 11 },
    ],
    vehicleConfigs: [{ label: "All Motorcycle", count: 1 }],
  },
};

const filterPresets: Record<string, CollectionFilters> = {
  riderGear: {
    availability: { inStock: 58, outOfStock: 19 },
    categories: [
      { label: "Riding Protection Gear", count: 22 },
      { label: "Motorcycle Safety Accessories", count: 18 },
      { label: "Apparel & Protective Wear", count: 12 },
      { label: "Off-Road Riding Gear", count: 8 },
    ],
    vehicleConfigs: [
      { label: "All Motorcycle", count: 31 },
      { label: "Adventure 390", count: 5 },
      { label: "Himalayan 450", count: 4 },
      { label: "RE Classic 350", count: 4 },
      { label: "Interceptor 650", count: 3 },
      { label: "Apache RR 310", count: 3 },
      { label: "Duke 390", count: 3 },
    ],
  },
  electronics: {
    availability: { inStock: 42, outOfStock: 14 },
    categories: [
      { label: "Motorcycle Electronics", count: 20 },
      { label: "Communication Devices", count: 11 },
      { label: "Navigation Accessories", count: 7 },
      { label: "Vehicle Accessories", count: 9 },
    ],
    vehicleConfigs: [
      { label: "All Motorcycle", count: 28 },
      { label: "Duke 390", count: 3 },
      { label: "R15 v4", count: 3 },
      { label: "BMW 310 GS", count: 2 },
      { label: "Interceptor 650", count: 3 },
      { label: "Apache RR 310", count: 2 },
    ],
  },
  braking: {
    availability: { inStock: 64, outOfStock: 23 },
    categories: [
      { label: "Brake Pads", count: 24 },
      { label: "Brake Discs", count: 8 },
      { label: "Brake Master Cylinders", count: 6 },
      { label: "Motor Vehicle Braking", count: 31 },
      { label: "Vehicle Parts & Accessories", count: 16 },
    ],
    vehicleConfigs: [
      { label: "All Motorcycle", count: 19 },
      { label: "Duke 200", count: 4 },
      { label: "Duke 390", count: 4 },
      { label: "R15 v3", count: 3 },
      { label: "R15 v4", count: 3 },
      { label: "Apache RR 310", count: 3 },
      { label: "Bajaj Dominar 400", count: 4 },
    ],
  },
  protection: {
    availability: { inStock: 73, outOfStock: 21 },
    categories: [
      { label: "Crash Guards", count: 14 },
      { label: "Frame Sliders", count: 9 },
      { label: "Radiator Grills", count: 12 },
      { label: "Hand Guards", count: 16 },
      { label: "Motor Vehicle Parts", count: 18 },
    ],
    vehicleConfigs: [
      { label: "All Motorcycle", count: 27 },
      { label: "Adventure 250", count: 3 },
      { label: "Adventure 390", count: 4 },
      { label: "Duke 390", count: 3 },
      { label: "Himalayan 450", count: 4 },
      { label: "Interceptor 650", count: 3 },
      { label: "Bajaj Dominar 400", count: 4 },
    ],
  },
  controls: {
    availability: { inStock: 45, outOfStock: 11 },
    categories: [
      { label: "Footrests", count: 9 },
      { label: "Levers", count: 13 },
      { label: "Control Switches", count: 6 },
      { label: "Vehicle Control Parts", count: 19 },
    ],
    vehicleConfigs: [
      { label: "All Motorcycle", count: 21 },
      { label: "Duke 200", count: 3 },
      { label: "Duke 250", count: 2 },
      { label: "Duke 390", count: 2 },
      { label: "RC 200", count: 2 },
      { label: "R15 v4", count: 2 },
      { label: "Apache RTR 200", count: 2 },
    ],
  },
  luggage: {
    availability: { inStock: 33, outOfStock: 8 },
    categories: [
      { label: "Hard Luggage", count: 9 },
      { label: "Soft Luggage", count: 11 },
      { label: "Top Rack & Saddle Stay", count: 7 },
      { label: "Touring Utility", count: 8 },
    ],
    vehicleConfigs: [
      { label: "All Motorcycle", count: 17 },
      { label: "Himalayan 450", count: 3 },
      { label: "Interceptor 650", count: 2 },
      { label: "Adventure 390", count: 3 },
      { label: "Dominar 400", count: 3 },
      { label: "GS 310", count: 2 },
    ],
  },
  apparel: {
    availability: { inStock: 47, outOfStock: 13 },
    categories: [
      { label: "Jersey Set", count: 13 },
      { label: "Rider T-Shirts", count: 8 },
      { label: "Caps", count: 6 },
      { label: "Motorcycle Apparel", count: 21 },
    ],
    vehicleConfigs: [
      { label: "All Motorcycle", count: 32 },
      { label: "Adventure 390", count: 3 },
      { label: "R15 v4", count: 3 },
      { label: "Apache RR 310", count: 2 },
    ],
  },
  toys: {
    availability: { inStock: 16, outOfStock: 4 },
    categories: [
      { label: "Scale Model Motorcycle", count: 9 },
      { label: "Miniature Helmet", count: 4 },
      { label: "Collectibles", count: 8 },
    ],
    vehicleConfigs: [{ label: "All Motorcycle", count: 12 }],
  },
  serviceParts: {
    availability: { inStock: 92, outOfStock: 31 },
    categories: [
      { label: "Air Filter", count: 14 },
      { label: "Oil Filter", count: 13 },
      { label: "Spark Plug", count: 19 },
      { label: "Chain Lube", count: 8 },
      { label: "Service Kits", count: 24 },
    ],
    vehicleConfigs: [
      { label: "All Motorcycle", count: 35 },
      { label: "Duke 390", count: 4 },
      { label: "R15 v4", count: 3 },
      { label: "Classic 350", count: 6 },
      { label: "Apache RR 310", count: 3 },
      { label: "Interceptor 650", count: 4 },
    ],
  },
  touring: {
    availability: { inStock: 39, outOfStock: 12 },
    categories: [
      { label: "Windshields", count: 7 },
      { label: "Mobile Holders", count: 9 },
      { label: "Traction Pads", count: 6 },
      { label: "Touring Accessories", count: 15 },
    ],
    vehicleConfigs: [
      { label: "All Motorcycle", count: 23 },
      { label: "Adventure 390", count: 3 },
      { label: "Himalayan 450", count: 4 },
      { label: "Interceptor 650", count: 3 },
      { label: "Dominar 400", count: 3 },
    ],
  },
  visibility: {
    availability: { inStock: 28, outOfStock: 7 },
    categories: [
      { label: "Mirrors", count: 8 },
      { label: "Screen Guards", count: 9 },
      { label: "Windshields", count: 6 },
      { label: "Visibility Accessories", count: 11 },
    ],
    vehicleConfigs: [
      { label: "All Motorcycle", count: 16 },
      { label: "R15 v4", count: 2 },
      { label: "Duke 390", count: 2 },
      { label: "BMW 310 GS", count: 2 },
      { label: "Classic 350", count: 2 },
    ],
  },
  drivetrain: {
    availability: { inStock: 37, outOfStock: 14 },
    categories: [
      { label: "Clutch Plates", count: 11 },
      { label: "Clutch Cables", count: 7 },
      { label: "Clutch Assembly", count: 6 },
      { label: "Transmission Parts", count: 12 },
    ],
    vehicleConfigs: [
      { label: "All Motorcycle", count: 18 },
      { label: "Duke 200", count: 2 },
      { label: "Duke 390", count: 2 },
      { label: "R15 v3", count: 2 },
      { label: "R15 v4", count: 2 },
      { label: "Classic 350", count: 3 },
      { label: "Apache RTR 200", count: 2 },
    ],
  },
};

const collectionPresetMap: Record<string, keyof typeof filterPresets> = {
  goggles: "riderGear",
  helmet: "riderGear",
  "riding-boots": "riderGear",
  gloves: "riderGear",
  "riding-jacket": "riderGear",
  "intercom-bluetooth": "electronics",
  "brake-pad": "braking",
  apparel: "apparel",
  "bike-protection": "protection",
  "brake-system": "braking",
  "foot-control": "controls",
  "hand-guard": "protection",
  luggage: "luggage",
  "collectible-toys": "toys",
  "mobile-holder": "touring",
  mirror: "visibility",
  "screen-guard": "visibility",
  "service-parts": "serviceParts",
  "touring-accessories": "touring",
  windshield: "visibility",
  "hazard-flasher": "electronics",
  "clutch-parts": "drivetrain",
};

export function getCollectionFilters(slug: string): CollectionFilters {
  const exactFilters = collectionFilterMap[slug];
  if (exactFilters) {
    return exactFilters;
  }

  const presetKey = collectionPresetMap[slug];
  if (presetKey) {
    return filterPresets[presetKey];
  }

  return {
    availability: { inStock: 11, outOfStock: 12 },
    categories: defaultCategoryFilters,
    vehicleConfigs: defaultVehicleConfigs,
  };
}
