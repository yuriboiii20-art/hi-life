/**
 * Indian Car Brands, Models, Body Types, and Dedicated Vehicle Images (2005–2026)
 */

export const MANUFACTURING_YEARS = Array.from(
  { length: 2026 - 2005 + 1 },
  (_, i) => (2026 - i).toString()
);

export const CAR_BRANDS = [
  {
    id: "maruti-suzuki",
    name: "Maruti Suzuki",
    country: "India / Japan",
    models: [
      { 
        id: "swift", 
        name: "Swift", 
        bodyType: "Hatchback", 
        image: "/products/camo-car-daylight.jpg" 
      },
      { 
        id: "baleno", 
        name: "Baleno", 
        bodyType: "Premium Hatchback", 
        image: "/products/camo-car-daylight.jpg" 
      },
      { 
        id: "brezza", 
        name: "Brezza / Vitara Brezza", 
        bodyType: "Compact SUV", 
        image: "/products/camo-car-rain-monsoon.jpg" 
      },
      { 
        id: "grand-vitara", 
        name: "Grand Vitara", 
        bodyType: "Mid SUV", 
        image: "/products/camo-car-rain-monsoon.jpg" 
      },
      { 
        id: "fronx", 
        name: "Fronx", 
        bodyType: "Crossover", 
        image: "/products/camo-car-daylight.jpg" 
      },
      { 
        id: "dzire", 
        name: "Dzire", 
        bodyType: "Sedan", 
        image: "/products/camo-car-night-view.jpg" 
      },
      { 
        id: "ertiga", 
        name: "Ertiga", 
        bodyType: "MUV", 
        image: "/products/camo-car-night-view.jpg" 
      },
      { 
        id: "xl6", 
        name: "XL6", 
        bodyType: "Premium MPV", 
        image: "/products/camo-car-rain-monsoon.jpg" 
      },
      { 
        id: "jimny", 
        name: "Jimny", 
        bodyType: "4x4 SUV", 
        image: "/products/camo-car-rain-monsoon.jpg" 
      },
      { 
        id: "wagon-r", 
        name: "Wagon R", 
        bodyType: "Hatchback", 
        image: "/products/camo-car-daylight.jpg" 
      },
      { 
        id: "alto-k10", 
        name: "Alto / Alto K10", 
        bodyType: "Hatchback", 
        image: "/products/camo-car-daylight.jpg" 
      },
      { 
        id: "ciaz", 
        name: "Ciaz", 
        bodyType: "Executive Sedan", 
        image: "/products/camo-car-night-view.jpg" 
      },
      { 
        id: "ignis", 
        name: "Ignis", 
        bodyType: "Hatchback", 
        image: "/products/camo-car-daylight.jpg" 
      },
      { 
        id: "invicto", 
        name: "Invicto", 
        bodyType: "Premium MPV", 
        image: "/products/camo-car-rain-monsoon.jpg" 
      }
    ]
  },
  {
    id: "hyundai",
    name: "Hyundai",
    country: "South Korea",
    models: [
      { 
        id: "creta", 
        name: "Creta / Creta N Line", 
        bodyType: "Mid SUV", 
        image: "/products/camo-car-rain-monsoon.jpg" 
      },
      { 
        id: "venue", 
        name: "Venue / Venue N Line", 
        bodyType: "Compact SUV", 
        image: "/products/camo-car-rain-monsoon.jpg" 
      },
      { 
        id: "i20", 
        name: "i20 / i20 N Line", 
        bodyType: "Premium Hatchback", 
        image: "/products/camo-car-daylight.jpg" 
      },
      { 
        id: "verna", 
        name: "Verna", 
        bodyType: "Sedan", 
        image: "/products/camo-car-night-view.jpg" 
      },
      { 
        id: "exter", 
        name: "Exter", 
        bodyType: "Micro SUV", 
        image: "/products/camo-car-daylight.jpg" 
      },
      { 
        id: "alcazar", 
        name: "Alcazar", 
        bodyType: "6/7-Seater SUV", 
        image: "/products/camo-car-rain-monsoon.jpg" 
      },
      { 
        id: "tucson", 
        name: "Tucson", 
        bodyType: "Premium SUV", 
        image: "/products/camo-car-rain-monsoon.jpg" 
      },
      { 
        id: "grand-i10-nios", 
        name: "Grand i10 Nios", 
        bodyType: "Hatchback", 
        image: "/products/camo-car-daylight.jpg" 
      },
      { 
        id: "aura", 
        name: "Aura", 
        bodyType: "Sedan", 
        image: "/products/camo-car-daylight.jpg" 
      },
      { 
        id: "santro", 
        name: "Santro (2005-2022)", 
        bodyType: "Hatchback", 
        image: "/products/camo-car-daylight.jpg" 
      }
    ]
  },
  {
    id: "tata",
    name: "Tata Motors",
    country: "India",
    models: [
      { 
        id: "nexon", 
        name: "Nexon / Nexon.ev", 
        bodyType: "Compact SUV", 
        image: "/products/camo-car-rain-monsoon.jpg" 
      },
      { 
        id: "punch", 
        name: "Punch / Punch.ev", 
        bodyType: "Micro SUV", 
        image: "/products/camo-car-daylight.jpg" 
      },
      { 
        id: "harrier", 
        name: "Harrier / Harrier.ev", 
        bodyType: "Mid SUV", 
        image: "/products/camo-car-rain-monsoon.jpg" 
      },
      { 
        id: "safari", 
        name: "Safari", 
        bodyType: "Full-Size SUV", 
        image: "/products/camo-car-rain-monsoon.jpg" 
      },
      { 
        id: "curvv", 
        name: "Curvv / Curvv.ev", 
        bodyType: "Coupe SUV", 
        image: "/products/camo-car-daylight.jpg" 
      },
      { 
        id: "altroz", 
        name: "Altroz", 
        bodyType: "Premium Hatchback", 
        image: "/products/camo-car-daylight.jpg" 
      },
      { 
        id: "tiago", 
        name: "Tiago / Tiago.ev", 
        bodyType: "Hatchback", 
        image: "/products/camo-car-daylight.jpg" 
      },
      { 
        id: "tigor", 
        name: "Tigor / Tigor.ev", 
        bodyType: "Sedan", 
        image: "/products/camo-car-night-view.jpg" 
      }
    ]
  },
  {
    id: "mahindra",
    name: "Mahindra",
    country: "India",
    models: [
      { 
        id: "thar", 
        name: "Thar / Thar Roxx (5-Door)", 
        bodyType: "Off-Road SUV", 
        image: "/products/camo-car-rain-monsoon.jpg" 
      },
      { 
        id: "scorpio-n", 
        name: "Scorpio-N", 
        bodyType: "Full-Size SUV", 
        image: "/products/camo-car-rain-monsoon.jpg" 
      },
      { 
        id: "scorpio-classic", 
        name: "Scorpio Classic", 
        bodyType: "Rugged SUV", 
        image: "/products/camo-car-rain-monsoon.jpg" 
      },
      { 
        id: "xuv700", 
        name: "XUV700", 
        bodyType: "Premium SUV", 
        image: "/products/camo-car-rain-monsoon.jpg" 
      },
      { 
        id: "xuv-3xo", 
        name: "XUV 3XO / XUV300", 
        bodyType: "Compact SUV", 
        image: "/products/camo-car-daylight.jpg" 
      },
      { 
        id: "bolero", 
        name: "Bolero / Bolero Neo", 
        bodyType: "Rugged MUV", 
        image: "/products/camo-car-rain-monsoon.jpg" 
      }
    ]
  },
  {
    id: "toyota",
    name: "Toyota",
    country: "Japan",
    models: [
      { 
        id: "fortuner", 
        name: "Fortuner / Legender", 
        bodyType: "Full-Size SUV", 
        image: "/products/camo-car-rain-monsoon.jpg" 
      },
      { 
        id: "innova-crysta", 
        name: "Innova Crysta", 
        bodyType: "Premium MPV", 
        image: "/products/camo-car-night-view.jpg" 
      },
      { 
        id: "innova-hycross", 
        name: "Innova Hycross", 
        bodyType: "Hybrid MPV", 
        image: "/products/camo-car-rain-monsoon.jpg" 
      },
      { 
        id: "urban-cruiser-hyryder", 
        name: "Urban Cruiser Hyryder", 
        bodyType: "Mid SUV", 
        image: "/products/camo-car-rain-monsoon.jpg" 
      },
      { 
        id: "glanza", 
        name: "Glanza", 
        bodyType: "Hatchback", 
        image: "/products/camo-car-daylight.jpg" 
      },
      { 
        id: "rumion", 
        name: "Rumion", 
        bodyType: "MPV", 
        image: "/products/camo-car-night-view.jpg" 
      },
      { 
        id: "camry", 
        name: "Camry Hybrid", 
        bodyType: "Luxury Sedan", 
        image: "/products/camo-car-night-view.jpg" 
      }
    ]
  },
  {
    id: "kia",
    name: "Kia",
    country: "South Korea",
    models: [
      { 
        id: "seltos", 
        name: "Seltos", 
        bodyType: "Mid SUV", 
        image: "/products/camo-car-rain-monsoon.jpg" 
      },
      { 
        id: "sonet", 
        name: "Sonet", 
        bodyType: "Compact SUV", 
        image: "/products/camo-car-daylight.jpg" 
      },
      { 
        id: "carens", 
        name: "Carens", 
        bodyType: "Family MPV", 
        image: "/products/camo-car-rain-monsoon.jpg" 
      },
      { 
        id: "carnival", 
        name: "Carnival", 
        bodyType: "Luxury MPV", 
        image: "/products/camo-car-night-view.jpg" 
      }
    ]
  },
  {
    id: "honda",
    name: "Honda",
    country: "Japan",
    models: [
      { 
        id: "city", 
        name: "City", 
        bodyType: "Sedan", 
        image: "/products/camo-car-night-view.jpg" 
      },
      { 
        id: "elevate", 
        name: "Elevate", 
        bodyType: "Mid SUV", 
        image: "/products/camo-car-rain-monsoon.jpg" 
      },
      { 
        id: "amaze", 
        name: "Amaze", 
        bodyType: "Compact Sedan", 
        image: "/products/camo-car-daylight.jpg" 
      },
      { 
        id: "jazz", 
        name: "Jazz", 
        bodyType: "Premium Hatchback", 
        image: "/products/camo-car-daylight.jpg" 
      }
    ]
  },
  {
    id: "volkswagen",
    name: "Volkswagen",
    country: "Germany",
    models: [
      { 
        id: "virtus", 
        name: "Virtus", 
        bodyType: "Performance Sedan", 
        image: "/products/camo-car-night-view.jpg" 
      },
      { 
        id: "taigun", 
        name: "Taigun", 
        bodyType: "Mid SUV", 
        image: "/products/camo-car-rain-monsoon.jpg" 
      },
      { 
        id: "polo", 
        name: "Polo", 
        bodyType: "Hatchback", 
        image: "/products/camo-car-daylight.jpg" 
      },
      { 
        id: "tiguan", 
        name: "Tiguan", 
        bodyType: "Premium SUV", 
        image: "/products/camo-car-rain-monsoon.jpg" 
      }
    ]
  },
  {
    id: "skoda",
    name: "Skoda",
    country: "Czech Republic",
    models: [
      { 
        id: "slavia", 
        name: "Slavia", 
        bodyType: "Sedan", 
        image: "/products/camo-car-night-view.jpg" 
      },
      { 
        id: "kushaq", 
        name: "Kushaq", 
        bodyType: "Mid SUV", 
        image: "/products/camo-car-rain-monsoon.jpg" 
      },
      { 
        id: "kodiaq", 
        name: "Kodiaq", 
        bodyType: "7-Seater Luxury SUV", 
        image: "/products/camo-car-rain-monsoon.jpg" 
      },
      { 
        id: "rapid", 
        name: "Rapid", 
        bodyType: "Sedan", 
        image: "/products/camo-car-daylight.jpg" 
      }
    ]
  },
  {
    id: "mg",
    name: "MG (Morris Garages)",
    country: "UK / China",
    models: [
      { 
        id: "hector", 
        name: "Hector / Hector Plus", 
        bodyType: "Mid SUV", 
        image: "/products/camo-car-rain-monsoon.jpg" 
      },
      { 
        id: "astor", 
        name: "Astor", 
        bodyType: "Compact SUV", 
        image: "/products/camo-car-daylight.jpg" 
      },
      { 
        id: "windsor-ev", 
        name: "Windsor EV", 
        bodyType: "EV Crossover", 
        image: "/products/camo-car-daylight.jpg" 
      },
      { 
        id: "zs-ev", 
        name: "ZS EV", 
        bodyType: "Electric SUV", 
        image: "/products/camo-car-rain-monsoon.jpg" 
      }
    ]
  },
  {
    id: "renault",
    name: "Renault",
    country: "France",
    models: [
      { 
        id: "kiger", 
        name: "Kiger", 
        bodyType: "Compact SUV", 
        image: "/products/camo-car-daylight.jpg" 
      },
      { 
        id: "triber", 
        name: "Triber", 
        bodyType: "Sub-4m 7-Seater MPV", 
        image: "/products/camo-car-night-view.jpg" 
      },
      { 
        id: "kwid", 
        name: "Kwid", 
        bodyType: "Hatchback", 
        image: "/products/camo-car-daylight.jpg" 
      }
    ]
  },
  {
    id: "nissan",
    name: "Nissan",
    country: "Japan",
    models: [
      { 
        id: "magnite", 
        name: "Magnite", 
        bodyType: "Compact SUV", 
        image: "/products/camo-car-daylight.jpg" 
      },
      { 
        id: "kicks", 
        name: "Kicks", 
        bodyType: "Mid SUV", 
        image: "/products/camo-car-rain-monsoon.jpg" 
      }
    ]
  }
];

/**
 * Returns specific model image with intelligent fallback based on bodyType
 */
export function getVehicleModelImage(brandId, modelId, bodyType = "") {
  const brand = CAR_BRANDS.find(b => b.id === brandId);
  if (brand) {
    const model = brand.models.find(m => m.id === modelId);
    if (model && model.image) {
      return model.image;
    }
  }

  // Fallback by bodyType
  const type = (bodyType || "").toLowerCase();
  if (type.includes("suv") || type.includes("4x4") || type.includes("off-road")) {
    return "/products/camo-car-rain-monsoon.jpg";
  }
  if (type.includes("sedan")) {
    return "/products/camo-car-night-view.jpg";
  }
  if (type.includes("mpv") || type.includes("muv")) {
    return "/products/camo-car-night-view.jpg";
  }
  
  // Default Hatchback / Crossover
  return "/products/camo-car-daylight.jpg";
}
