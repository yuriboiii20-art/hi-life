/**
 * Authoritative Backend Product Catalog & Pricing Engine
 * Server-side source of truth: frontend prices are never trusted directly.
 */

export const BACKEND_COVER_CATALOG = {
  "standard-all-weather": {
    id: "standard-all-weather",
    name: "Standard All-Weather Cover",
    tagline: "Everyday Dust, Light Rain & Scuff Protection",
    basePrice: 1699,
    originalPrice: 2499,
    inStock: true,
    leadTime: "Dispatches in 24 Hrs",
    weightKg: 1.8,
    gstPercent: 18
  },
  "premium-waterproof": {
    id: "premium-waterproof",
    name: "Premium Waterproof Cover",
    tagline: "100% Monsoonal Barrier with Soft Cotton Fleece",
    basePrice: 2499,
    originalPrice: 3899,
    inStock: true,
    leadTime: "Dispatches in 24 Hrs",
    weightKg: 2.8,
    gstPercent: 18
  },
  "uv-shield": {
    id: "uv-shield",
    name: "UV Shield Cover",
    tagline: "Thermal Heat Reflective & Paint Preservation Guard",
    basePrice: 2199,
    originalPrice: 3299,
    inStock: true,
    leadTime: "Dispatches in 24 Hrs",
    weightKg: 2.2,
    gstPercent: 18
  },
  "heavy-duty-outdoor": {
    id: "heavy-duty-outdoor",
    name: "Heavy-Duty Outdoor Armor Cover",
    tagline: "Commercial-Grade Military Camo Armor for Extreme Exposure",
    basePrice: 3199,
    originalPrice: 4999,
    inStock: true,
    leadTime: "Dispatches in 24 Hrs",
    weightKg: 3.5,
    gstPercent: 18
  },
  "two-wheeler-camo": {
    id: "two-wheeler-camo",
    name: "Two-Wheeler / Bike Camouflage Cover",
    tagline: "Custom-Fit Defense for Motorcycles & Scooters",
    basePrice: 899,
    originalPrice: 1499,
    inStock: true,
    leadTime: "Dispatches in 24 Hrs",
    weightKg: 1.2,
    gstPercent: 18
  }
};

/**
 * Calculates authoritative vehicle-specific price adjustment on the server
 */
export function calculateServerDynamicPrice(basePrice, originalPrice, bodyType) {
  let multiplier = 1.0;
  if (!bodyType) return { price: basePrice, originalPrice };

  const type = bodyType.toLowerCase();
  if (type.includes("suv") || type.includes("mpv") || type.includes("muv") || type.includes("7-seater")) {
    if (type.includes("full") || type.includes("premium") || type.includes("luxury")) {
      multiplier = 1.30;
    } else {
      multiplier = 1.20;
    }
  } else if (type.includes("sedan") || type.includes("crossover")) {
    multiplier = 1.10;
  }

  const adjustedPrice = Math.round((basePrice * multiplier) / 50) * 50 - 1; // e.g. 2699
  const adjustedOriginal = Math.round((originalPrice * multiplier) / 50) * 50 - 1;

  return {
    price: adjustedPrice,
    originalPrice: adjustedOriginal,
    discountPercent: Math.round(((adjustedOriginal - adjustedPrice) / adjustedOriginal) * 100)
  };
}
