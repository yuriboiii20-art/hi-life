/**
 * Hi-Life Cover Types and Product Catalogue
 * Note: Sample prices are placeholder data and can be updated easily.
 */

export const COVER_TYPES = [
  {
    id: "standard-all-weather",
    name: "Standard All-Weather Cover",
    tagline: "Everyday Dust, Light Rain & Scuff Protection",
    badge: "Value Choice",
    badgeColor: "bg-blue-600/90 text-white",
    basePrice: 1699,
    originalPrice: 2499,
    discountPercent: 32,
    rating: 4.6,
    reviewsCount: 340,
    inStock: true,
    leadTime: "Dispatches in 24 Hrs",
    description: "Designed for daily covered parking and mild outdoor conditions. Lightweight yet tough high-density Oxford weave that prevents dust accumulation, minor scratches, bird droppings, and light drizzle.",
    heroImage: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=1200&q=80",
    detailImages: [
      "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=800&q=80"
    ],
    fabricSpecs: {
      material: "190T High-Density Polyester Taffeta",
      fabricWeight: "130 GSM",
      waterproofing: "Water Repellent (Light Rain)",
      lining: "Soft Non-Abrasive Scratch Shield",
      uvProtection: "UPF 40+ UV Guard",
      stitchType: "Double Interlock Precision Stitching"
    },
    keyBenefits: [
      "Breathable fabric prevents moisture and heat condensation under the hood",
      "Custom-molded mirror pockets and front-rear elastic grip",
      "Lightweight and compact — effortless single-person folding in under 90 seconds",
      "Wind-resistant bottom buckle strap holds firmly during breezy weather"
    ],
    includedFeatures: [
      "Side-Mirror Pockets",
      "Front & Rear Elastic Hem",
      "Underbody Centre Buckle Belt",
      "Antenna Accommodation Slot",
      "Water-Resistant Storage Duffle Bag"
    ]
  },
  {
    id: "premium-waterproof",
    name: "Premium Waterproof Cover",
    tagline: "100% Monsoonal Barrier with Soft Cotton Fleece",
    badge: "Most Popular",
    badgeColor: "bg-brand-600 text-white",
    basePrice: 2499,
    originalPrice: 3899,
    discountPercent: 36,
    rating: 4.9,
    reviewsCount: 780,
    inStock: true,
    leadTime: "Dispatches in 24 Hrs",
    description: "Our signature all-season shield. Built with a dual-layer waterproof membrane and ultrasonic seam seals that withstand heavy torrential rain, dust storms, and blistering sun while pampering the car paint with ultra-soft cotton fleece.",
    heroImage: "https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&w=1200&q=80",
    detailImages: [
      "https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=800&q=80"
    ],
    fabricSpecs: {
      material: "300D Heavy Ripstop Oxford + TPU Hydro-Shield Film",
      fabricWeight: "220 GSM",
      waterproofing: "100% Leakproof (5000mm Hydrostatic Head)",
      lining: "Ultra-Soft White Cotton Fleece Inner Layer",
      uvProtection: "UPF 50+ Sun & Heat Blocker",
      stitchType: "Heat-Taped & Ultrasonic Welded Seams"
    },
    keyBenefits: [
      "Zero leak design: Tape-sealed seams ensure water never seeps through stitching holes",
      "Soft cotton fleece lining shields delicate ceramic coat and clear coat from swirl marks",
      "Heavyweight fabric stays grounded during severe thunderstorms and gusts",
      "Reflective safety strips for high nighttime parking visibility"
    ],
    includedFeatures: [
      "Dedicated Mirror Pockets",
      "Heavy-Duty Centre Locking Clip Belt",
      "Reinforced Front & Rear Elastic Cording",
      "Antenna Protection Pocket",
      "Night Reflective Safety Strips (Front & Rear)",
      "Premium Zippered Heavy Tote Bag"
    ]
  },
  {
    id: "uv-shield",
    name: "UV Shield Cover",
    tagline: "Thermal Heat Reflective & Paint Preservation Guard",
    badge: "Summer Essential",
    badgeColor: "bg-amber-600 text-white",
    basePrice: 2199,
    originalPrice: 3299,
    discountPercent: 33,
    rating: 4.8,
    reviewsCount: 520,
    inStock: true,
    leadTime: "Dispatches in 24 Hrs",
    description: "Engineered specifically for hot, sunny climates. Featuring a specialized silver aluminum-infused outer shield that bounces off 98% of solar radiation, reducing cabin temperature by up to 25°C and halting dashboard fade and paint oxidation.",
    heroImage: "https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&w=1200&q=80",
    detailImages: [
      "https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=800&q=80"
    ],
    fabricSpecs: {
      material: "Aluminized UV-Reflect Weave + Microfiber Composite",
      fabricWeight: "190 GSM",
      waterproofing: "Water Resistant & Fast Drying",
      lining: "Scratch-Free Anti-Static Microfiber Lining",
      uvProtection: "UPF 50+ Maximum Solar Reflection (98% UV Block)",
      stitchType: "Heat-Resistant Triple Lock Stitching"
    },
    keyBenefits: [
      "Reflects extreme solar radiation to maintain cooler interior cabin temps",
      "Prevents leather cracking, dashboard fading, and plastic oxidation",
      "Resistant to corrosive tree sap, acid rain mist, and industrial dust",
      "Reinforced heavy-duty belt prevents wind-ballooning"
    ],
    includedFeatures: [
      "Custom Mirror Pockets",
      "Dual Quick-Release Underbody Straps",
      "Heavy All-Round Elasticized Hem",
      "Antenna Protection Grommet",
      "Ventilation Air Ports for Zero Internal Humidity",
      "Durable Storage Bag"
    ]
  },
  {
    id: "heavy-duty-outdoor",
    name: "Heavy-Duty Outdoor Cover",
    tagline: "Commercial-Grade 5-Layer Armor for Extreme Exposure",
    badge: "Maximum Armor",
    badgeColor: "bg-zinc-800 text-white border border-zinc-700",
    basePrice: 3199,
    originalPrice: 4999,
    discountPercent: 36,
    rating: 4.9,
    reviewsCount: 410,
    inStock: true,
    leadTime: "Dispatches in 24 Hrs",
    description: "The ultimate fortress for cars parked long-term outdoors. Multi-layer matrix featuring ballistic Oxford exterior, puncture-resistant composite core, and thick fleece cushion to protect against falling twigs, hail, stray animals, and severe weather.",
    heroImage: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1200&q=80",
    detailImages: [
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=800&q=80"
    ],
    fabricSpecs: {
      material: "600D Military-Grade Ballistic Oxford + 5-Ply Membrane",
      fabricWeight: "310 GSM",
      waterproofing: "100% Submersible-Grade Waterproof (10,000mm)",
      lining: "Thick Brushed Cotton Cushion Shield (Paint Armor)",
      uvProtection: "UPF 50+ Extreme Weather Proofing",
      stitchType: "Quadruple Reinforced Bound Edge Stitching"
    },
    keyBenefits: [
      "5-Layer high density construction cushions against minor physical impacts",
      "Guaranteed animal-claw, tree-sap, and hail resistance",
      "Heavyweight anchor system with 3 belly buckle belts",
      "Engineered for extended outdoor roadside and open plot parking"
    ],
    includedFeatures: [
      "Tailored Mirror Enclosures",
      "Triple Heavy Underbody Lock Buckles",
      "Full Perimeter High-Tension Elastic",
      "Reinforced Antenna Pocket",
      "Four-Corner Night Hazard Reflective Strips",
      "Heavy Oxford Carry & Storage Sack"
    ]
  }
];

/**
 * Calculates vehicle-specific price adjustment based on car body type
 */
export function calculateDynamicPrice(basePrice, originalPrice, bodyType) {
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
