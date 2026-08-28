/**
 * Indian Car Brands, Models, Body Types, and Supported Manufacturing Years (2005–2026)
 * Easily extensible catalogue structure.
 */

// Generate years from 2005 to 2026 in descending order
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
      { id: "swift", name: "Swift", bodyType: "Hatchback" },
      { id: "baleno", name: "Baleno", bodyType: "Premium Hatchback" },
      { id: "brezza", name: "Brezza / Vitara Brezza", bodyType: "Compact SUV" },
      { id: "grand-vitara", name: "Grand Vitara", bodyType: "Mid SUV" },
      { id: "fronx", name: "Fronx", bodyType: "Crossover" },
      { id: "dzire", name: "Dzire", bodyType: "Sedan" },
      { id: "ertiga", name: "Ertiga", bodyType: "MUV" },
      { id: "xl6", name: "XL6", bodyType: "Premium MPV" },
      { id: "jimny", name: "Jimny", bodyType: "4x4 SUV" },
      { id: "wagon-r", name: "Wagon R", bodyType: "Hatchback" },
      { id: "alto-k10", name: "Alto / Alto K10", bodyType: "Hatchback" },
      { id: "ciaz", name: "Ciaz", bodyType: "Executive Sedan" },
      { id: "ignis", name: "Ignis", bodyType: "Hatchback" },
      { id: "invicto", name: "Invicto", bodyType: "Premium MPV" }
    ]
  },
  {
    id: "hyundai",
    name: "Hyundai",
    country: "South Korea",
    models: [
      { id: "creta", name: "Creta / Creta N Line", bodyType: "Mid SUV" },
      { id: "venue", name: "Venue / Venue N Line", bodyType: "Compact SUV" },
      { id: "i20", name: "i20 / i20 N Line", bodyType: "Premium Hatchback" },
      { id: "verna", name: "Verna", bodyType: "Sedan" },
      { id: "exter", name: "Exter", bodyType: "Micro SUV" },
      { id: "alcazar", name: "Alcazar", bodyType: "6/7-Seater SUV" },
      { id: "tucson", name: "Tucson", bodyType: "Premium SUV" },
      { id: "grand-i10-nios", name: "Grand i10 Nios", bodyType: "Hatchback" },
      { id: "aura", name: "Aura", bodyType: "Sedan" },
      { id: "ioniq-5", name: "Ioniq 5 EV", bodyType: "EV Crossover" },
      { id: "santro", name: "Santro (2005-2022)", bodyType: "Hatchback" }
    ]
  },
  {
    id: "tata",
    name: "Tata Motors",
    country: "India",
    models: [
      { id: "nexon", name: "Nexon / Nexon.ev", bodyType: "Compact SUV" },
      { id: "punch", name: "Punch / Punch.ev", bodyType: "Micro SUV" },
      { id: "harrier", name: "Harrier / Harrier.ev", bodyType: "Mid SUV" },
      { id: "safari", name: "Safari", bodyType: "Full-Size SUV" },
      { id: "curvv", name: "Curvv / Curvv.ev", bodyType: "Coupe SUV" },
      { id: "altroz", name: "Altroz", bodyType: "Premium Hatchback" },
      { id: "tiago", name: "Tiago / Tiago.ev", bodyType: "Hatchback" },
      { id: "tigor", name: "Tigor / Tigor.ev", bodyType: "Sedan" },
      { id: "indica-vista", name: "Indica / Vista (2005-2018)", bodyType: "Hatchback" },
      { id: "indigo-manza", name: "Indigo / Manza (2005-2018)", bodyType: "Sedan" }
    ]
  },
  {
    id: "mahindra",
    name: "Mahindra",
    country: "India",
    models: [
      { id: "thar", name: "Thar / Thar Roxx (5-Door)", bodyType: "Off-Road SUV" },
      { id: "scorpio-n", name: "Scorpio-N", bodyType: "Full-Size SUV" },
      { id: "scorpio-classic", name: "Scorpio Classic", bodyType: "Rugged SUV" },
      { id: "xuv700", name: "XUV700", bodyType: "Premium SUV" },
      { id: "xuv-3xo", name: "XUV 3XO / XUV300", bodyType: "Compact SUV" },
      { id: "bolero", name: "Bolero / Bolero Neo", bodyType: "Rugged MUV" },
      { id: "xuv400", name: "XUV400 EV", bodyType: "Electric SUV" },
      { id: "marazzo", name: "Marazzo", bodyType: "MPV" },
      { id: "xuv500", name: "XUV500 (2011-2021)", bodyType: "Mid SUV" }
    ]
  },
  {
    id: "toyota",
    name: "Toyota",
    country: "Japan",
    models: [
      { id: "fortuner", name: "Fortuner / Legender", bodyType: "Full-Size SUV" },
      { id: "innova-crysta", name: "Innova Crysta", bodyType: "Premium MPV" },
      { id: "innova-hycross", name: "Innova Hycross", bodyType: "Hybrid MPV" },
      { id: "urban-cruiser-hyryder", name: "Urban Cruiser Hyryder", bodyType: "Mid SUV" },
      { id: "glanza", name: "Glanza", bodyType: "Hatchback" },
      { id: "rumion", name: "Rumion", bodyType: "MPV" },
      { id: "taisor", name: "Urban Cruiser Taisor", bodyType: "Crossover" },
      { id: "camry", name: "Camry Hybrid", bodyType: "Luxury Sedan" },
      { id: "corolla-altis", name: "Corolla Altis (2005-2020)", bodyType: "Sedan" },
      { id: "etios", name: "Etios / Liva (2010-2020)", bodyType: "Sedan/Hatchback" }
    ]
  },
  {
    id: "kia",
    name: "Kia",
    country: "South Korea",
    models: [
      { id: "seltos", name: "Seltos", bodyType: "Mid SUV" },
      { id: "sonet", name: "Sonet", bodyType: "Compact SUV" },
      { id: "carens", name: "Carens", bodyType: "Family MPV" },
      { id: "carnival", name: "Carnival (Limousine)", bodyType: "Luxury MPV" },
      { id: "ev6", name: "EV6", bodyType: "Electric Crossover" }
    ]
  },
  {
    id: "honda",
    name: "Honda",
    country: "Japan",
    models: [
      { id: "city", name: "City (All Generations)", bodyType: "Sedan" },
      { id: "elevate", name: "Elevate", bodyType: "Mid SUV" },
      { id: "amaze", name: "Amaze", bodyType: "Compact Sedan" },
      { id: "wr-v", name: "WR-V (2017-2023)", bodyType: "Crossover" },
      { id: "jazz", name: "Jazz (2009-2023)", bodyType: "Premium Hatchback" },
      { id: "civic", name: "Civic (2006-2021)", bodyType: "Sedan" },
      { id: "cr-v", name: "CR-V (2005-2021)", bodyType: "Premium SUV" }
    ]
  },
  {
    id: "volkswagen",
    name: "Volkswagen",
    country: "Germany",
    models: [
      { id: "taigun", name: "Taigun", bodyType: "Mid SUV" },
      { id: "virtus", name: "Virtus", bodyType: "Performance Sedan" },
      { id: "polo", name: "Polo (2010-2022)", bodyType: "Hatchback" },
      { id: "vento", name: "Vento (2010-2022)", bodyType: "Sedan" },
      { id: "tiguan", name: "Tiguan", bodyType: "Premium SUV" },
      { id: "t-roc", name: "T-Roc", bodyType: "Compact SUV" }
    ]
  },
  {
    id: "skoda",
    name: "Skoda",
    country: "Czech Republic",
    models: [
      { id: "slavia", name: "Slavia", bodyType: "Sedan" },
      { id: "kushaq", name: "Kushaq", bodyType: "Mid SUV" },
      { id: "kylaq", name: "Kylaq", bodyType: "Compact SUV" },
      { id: "kodiaq", name: "Kodiaq", bodyType: "7-Seater Luxury SUV" },
      { id: "rapid", name: "Rapid (2011-2021)", bodyType: "Sedan" },
      { id: "octavia", name: "Octavia (2005-2023)", bodyType: "Executive Sedan" },
      { id: "superb", name: "Superb (2005-2024)", bodyType: "Luxury Sedan" }
    ]
  },
  {
    id: "mg",
    name: "MG (Morris Garages)",
    country: "UK / China",
    models: [
      { id: "hector", name: "Hector / Hector Plus", bodyType: "Mid SUV" },
      { id: "astor", name: "Astor", bodyType: "Compact SUV" },
      { id: "windsor-ev", name: "Windsor EV", bodyType: "EV Crossover" },
      { id: "zs-ev", name: "ZS EV", bodyType: "Electric SUV" },
      { id: "gloster", name: "Gloster", bodyType: "Full-Size 4x4 SUV" },
      { id: "comet-ev", name: "Comet EV", bodyType: "Urban Micro EV" }
    ]
  },
  {
    id: "renault",
    name: "Renault",
    country: "France",
    models: [
      { id: "kiger", name: "Kiger", bodyType: "Compact SUV" },
      { id: "triber", name: "Triber", bodyType: "Sub-4m 7-Seater MPV" },
      { id: "kwid", name: "Kwid", bodyType: "Hatchback" },
      { id: "duster", name: "Duster (2012-2022)", bodyType: "Rugged SUV" },
      { id: "lodgy", name: "Lodgy (2015-2020)", bodyType: "MPV" }
    ]
  },
  {
    id: "nissan",
    name: "Nissan",
    country: "Japan",
    models: [
      { id: "magnite", name: "Magnite", bodyType: "Compact SUV" },
      { id: "x-trail", name: "X-Trail", bodyType: "Premium Hybrid SUV" },
      { id: "kicks", name: "Kicks (2019-2023)", bodyType: "Mid SUV" },
      { id: "micra", name: "Micra / Active (2010-2020)", bodyType: "Hatchback" },
      { id: "sunny", name: "Sunny (2011-2020)", bodyType: "Executive Sedan" },
      { id: "terrano", name: "Terrano (2013-2020)", bodyType: "SUV" }
    ]
  }
];
