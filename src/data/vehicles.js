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
        image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=1000&q=80" 
      },
      { 
        id: "baleno", 
        name: "Baleno", 
        bodyType: "Premium Hatchback", 
        image: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1000&q=80" 
      },
      { 
        id: "brezza", 
        name: "Brezza / Vitara Brezza", 
        bodyType: "Compact SUV", 
        image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1000&q=80" 
      },
      { 
        id: "grand-vitara", 
        name: "Grand Vitara", 
        bodyType: "Mid SUV", 
        image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1000&q=80" 
      },
      { 
        id: "fronx", 
        name: "Fronx", 
        bodyType: "Crossover", 
        image: "https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&w=1000&q=80" 
      },
      { 
        id: "dzire", 
        name: "Dzire", 
        bodyType: "Sedan", 
        image: "https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&w=1000&q=80" 
      },
      { 
        id: "ertiga", 
        name: "Ertiga", 
        bodyType: "MUV", 
        image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1000&q=80" 
      },
      { 
        id: "xl6", 
        name: "XL6", 
        bodyType: "Premium MPV", 
        image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1000&q=80" 
      },
      { 
        id: "jimny", 
        name: "Jimny", 
        bodyType: "4x4 SUV", 
        image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1000&q=80" 
      },
      { 
        id: "wagon-r", 
        name: "Wagon R", 
        bodyType: "Hatchback", 
        image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=1000&q=80" 
      },
      { 
        id: "alto-k10", 
        name: "Alto / Alto K10", 
        bodyType: "Hatchback", 
        image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=1000&q=80" 
      },
      { 
        id: "ciaz", 
        name: "Ciaz", 
        bodyType: "Executive Sedan", 
        image: "https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&w=1000&q=80" 
      },
      { 
        id: "ignis", 
        name: "Ignis", 
        bodyType: "Hatchback", 
        image: "https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&w=1000&q=80" 
      },
      { 
        id: "invicto", 
        name: "Invicto", 
        bodyType: "Premium MPV", 
        image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1000&q=80" 
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
        image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1000&q=80" 
      },
      { 
        id: "venue", 
        name: "Venue / Venue N Line", 
        bodyType: "Compact SUV", 
        image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1000&q=80" 
      },
      { 
        id: "i20", 
        name: "i20 / i20 N Line", 
        bodyType: "Premium Hatchback", 
        image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=1000&q=80" 
      },
      { 
        id: "verna", 
        name: "Verna", 
        bodyType: "Sedan", 
        image: "https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&w=1000&q=80" 
      },
      { 
        id: "exter", 
        name: "Exter", 
        bodyType: "Micro SUV", 
        image: "https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&w=1000&q=80" 
      },
      { 
        id: "alcazar", 
        name: "Alcazar", 
        bodyType: "6/7-Seater SUV", 
        image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1000&q=80" 
      },
      { 
        id: "tucson", 
        name: "Tucson", 
        bodyType: "Premium SUV", 
        image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1000&q=80" 
      },
      { 
        id: "grand-i10-nios", 
        name: "Grand i10 Nios", 
        bodyType: "Hatchback", 
        image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=1000&q=80" 
      },
      { 
        id: "aura", 
        name: "Aura", 
        bodyType: "Sedan", 
        image: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1000&q=80" 
      },
      { 
        id: "santro", 
        name: "Santro (2005-2022)", 
        bodyType: "Hatchback", 
        image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=1000&q=80" 
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
        image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1000&q=80" 
      },
      { 
        id: "punch", 
        name: "Punch / Punch.ev", 
        bodyType: "Micro SUV", 
        image: "https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&w=1000&q=80" 
      },
      { 
        id: "harrier", 
        name: "Harrier / Harrier.ev", 
        bodyType: "Mid SUV", 
        image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1000&q=80" 
      },
      { 
        id: "safari", 
        name: "Safari", 
        bodyType: "Full-Size SUV", 
        image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1000&q=80" 
      },
      { 
        id: "curvv", 
        name: "Curvv / Curvv.ev", 
        bodyType: "Coupe SUV", 
        image: "https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&w=1000&q=80" 
      },
      { 
        id: "altroz", 
        name: "Altroz", 
        bodyType: "Premium Hatchback", 
        image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=1000&q=80" 
      },
      { 
        id: "tiago", 
        name: "Tiago / Tiago.ev", 
        bodyType: "Hatchback", 
        image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=1000&q=80" 
      },
      { 
        id: "tigor", 
        name: "Tigor / Tigor.ev", 
        bodyType: "Sedan", 
        image: "https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&w=1000&q=80" 
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
        image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1000&q=80" 
      },
      { 
        id: "scorpio-n", 
        name: "Scorpio-N", 
        bodyType: "Full-Size SUV", 
        image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1000&q=80" 
      },
      { 
        id: "scorpio-classic", 
        name: "Scorpio Classic", 
        bodyType: "Rugged SUV", 
        image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1000&q=80" 
      },
      { 
        id: "xuv700", 
        name: "XUV700", 
        bodyType: "Premium SUV", 
        image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1000&q=80" 
      },
      { 
        id: "xuv-3xo", 
        name: "XUV 3XO / XUV300", 
        bodyType: "Compact SUV", 
        image: "https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&w=1000&q=80" 
      },
      { 
        id: "bolero", 
        name: "Bolero / Bolero Neo", 
        bodyType: "Rugged MUV", 
        image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1000&q=80" 
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
        image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1000&q=80" 
      },
      { 
        id: "innova-crysta", 
        name: "Innova Crysta", 
        bodyType: "Premium MPV", 
        image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1000&q=80" 
      },
      { 
        id: "innova-hycross", 
        name: "Innova Hycross", 
        bodyType: "Hybrid MPV", 
        image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1000&q=80" 
      },
      { 
        id: "urban-cruiser-hyryder", 
        name: "Urban Cruiser Hyryder", 
        bodyType: "Mid SUV", 
        image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1000&q=80" 
      },
      { 
        id: "glanza", 
        name: "Glanza", 
        bodyType: "Hatchback", 
        image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=1000&q=80" 
      },
      { 
        id: "rumion", 
        name: "Rumion", 
        bodyType: "MPV", 
        image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1000&q=80" 
      },
      { 
        id: "camry", 
        name: "Camry Hybrid", 
        bodyType: "Luxury Sedan", 
        image: "https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&w=1000&q=80" 
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
        image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1000&q=80" 
      },
      { 
        id: "sonet", 
        name: "Sonet", 
        bodyType: "Compact SUV", 
        image: "https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&w=1000&q=80" 
      },
      { 
        id: "carens", 
        name: "Carens", 
        bodyType: "Family MPV", 
        image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1000&q=80" 
      },
      { 
        id: "carnival", 
        name: "Carnival", 
        bodyType: "Luxury MPV", 
        image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1000&q=80" 
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
        image: "https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&w=1000&q=80" 
      },
      { 
        id: "elevate", 
        name: "Elevate", 
        bodyType: "Mid SUV", 
        image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1000&q=80" 
      },
      { 
        id: "amaze", 
        name: "Amaze", 
        bodyType: "Compact Sedan", 
        image: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1000&q=80" 
      },
      { 
        id: "jazz", 
        name: "Jazz", 
        bodyType: "Premium Hatchback", 
        image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=1000&q=80" 
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
        image: "https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&w=1000&q=80" 
      },
      { 
        id: "taigun", 
        name: "Taigun", 
        bodyType: "Mid SUV", 
        image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1000&q=80" 
      },
      { 
        id: "polo", 
        name: "Polo", 
        bodyType: "Hatchback", 
        image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=1000&q=80" 
      },
      { 
        id: "tiguan", 
        name: "Tiguan", 
        bodyType: "Premium SUV", 
        image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1000&q=80" 
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
        image: "https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&w=1000&q=80" 
      },
      { 
        id: "kushaq", 
        name: "Kushaq", 
        bodyType: "Mid SUV", 
        image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1000&q=80" 
      },
      { 
        id: "kodiaq", 
        name: "Kodiaq", 
        bodyType: "7-Seater Luxury SUV", 
        image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1000&q=80" 
      },
      { 
        id: "rapid", 
        name: "Rapid", 
        bodyType: "Sedan", 
        image: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1000&q=80" 
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
        image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1000&q=80" 
      },
      { 
        id: "astor", 
        name: "Astor", 
        bodyType: "Compact SUV", 
        image: "https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&w=1000&q=80" 
      },
      { 
        id: "windsor-ev", 
        name: "Windsor EV", 
        bodyType: "EV Crossover", 
        image: "https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&w=1000&q=80" 
      },
      { 
        id: "zs-ev", 
        name: "ZS EV", 
        bodyType: "Electric SUV", 
        image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1000&q=80" 
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
        image: "https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&w=1000&q=80" 
      },
      { 
        id: "triber", 
        name: "Triber", 
        bodyType: "Sub-4m 7-Seater MPV", 
        image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1000&q=80" 
      },
      { 
        id: "kwid", 
        name: "Kwid", 
        bodyType: "Hatchback", 
        image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=1000&q=80" 
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
        image: "https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&w=1000&q=80" 
      },
      { 
        id: "kicks", 
        name: "Kicks", 
        bodyType: "Mid SUV", 
        image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1000&q=80" 
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
    return "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1000&q=80";
  }
  if (type.includes("sedan")) {
    return "https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&w=1000&q=80";
  }
  if (type.includes("mpv") || type.includes("muv")) {
    return "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1000&q=80";
  }
  
  // Default Hatchback / Crossover
  return "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=1000&q=80";
}
