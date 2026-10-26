/**
 * Comprehensive automotive brands data matching the exact 27 brands from Oenum
 * Every brand has its models, taglines, specs and mapping to Hi-Life project design images.
 */

export const ALL_CAR_BRANDS = [
  {
    id: "audi",
    name: "Audi",
    country: "Germany",
    tagline: "Vorsprung durch Technik meets bespoke protection",
    description: "At Hi-Life, our Audi covers are crafted with multi-layer weatherproof fabric and soft inner fleece to protect precision German paintwork from sun, rain, and micro-scratches.",
    models: [
      { id: "a4", name: "A4", bodyType: "Executive Sedan", price: 5450, originalPrice: 7790, image: "/products/camo-car-night-view.jpg" },
      { id: "a6", name: "A6", bodyType: "Luxury Sedan", price: 5650, originalPrice: 8090, image: "/products/camo-car-night-view.jpg" },
      { id: "q3", name: "Q3 / Q3 Sportback", bodyType: "Compact SUV", price: 5500, originalPrice: 7850, image: "/products/camo-car-daylight.jpg" },
      { id: "q5", name: "Q5", bodyType: "Mid SUV", price: 5780, originalPrice: 8250, image: "/products/camo-car-rain-monsoon.jpg" },
      { id: "q7", name: "Q7", bodyType: "Full-Size SUV", price: 6350, originalPrice: 9070, image: "/products/camo-car-rain-monsoon.jpg" },
      { id: "q8", name: "Q8", bodyType: "Coupe SUV", price: 6550, originalPrice: 9350, image: "/products/camo-car-shopfront.jpg" },
      { id: "e-tron", name: "e-tron", bodyType: "Electric SUV", price: 6350, originalPrice: 9070, image: "/products/camo-car-rain-monsoon.jpg" }
    ]
  },
  {
    id: "bmw",
    name: "BMW",
    country: "Germany",
    tagline: "Sheer driving pleasure armored against all elements",
    description: "Hi-Life covers for BMW are tailored to iconic kidney-grille contours and aerodynamic profiles, shielding high-gloss finishes from harsh UV rays and monsoon downpours.",
    models: [
      { id: "3-series", name: "3 Series / Gran Limousine", bodyType: "Sedan", price: 5500, originalPrice: 7850, image: "/products/camo-car-night-view.jpg" },
      { id: "5-series", name: "5 Series LWB", bodyType: "Executive Sedan", price: 5780, originalPrice: 8250, image: "/products/camo-car-night-view.jpg" },
      { id: "7-series", name: "7 Series", bodyType: "Flagship Luxury Sedan", price: 6750, originalPrice: 9640, image: "/products/camo-car-night-view.jpg" },
      { id: "x1", name: "X1", bodyType: "Compact SUV", price: 5500, originalPrice: 7850, image: "/products/camo-car-daylight.jpg" },
      { id: "x3", name: "X3", bodyType: "Mid SUV", price: 5780, originalPrice: 8250, image: "/products/camo-car-rain-monsoon.jpg" },
      { id: "x5", name: "X5", bodyType: "Full-Size Luxury SUV", price: 6450, originalPrice: 9200, image: "/products/camo-car-rain-monsoon.jpg" },
      { id: "x7", name: "X7", bodyType: "7-Seater Luxury SUV", price: 6750, originalPrice: 9640, image: "/products/camo-car-shopfront.jpg" },
      { id: "m340i", name: "M340i xDrive", bodyType: "Performance Sedan", price: 5650, originalPrice: 8070, image: "/products/camo-car-street-profile.jpg" },
      { id: "ix1", name: "iX1 Electric", bodyType: "Electric SUV", price: 5650, originalPrice: 8070, image: "/products/camo-car-daylight.jpg" }
    ]
  },
  {
    id: "byd",
    name: "BYD",
    country: "China",
    tagline: "Electric innovation safeguarded with breathable protection",
    description: "Our BYD covers feature thermal reflective barriers and breathable 3-layer fabrics that prevent battery overheating and paint fading during intense Indian summers.",
    models: [
      { id: "atto-3", name: "Atto 3", bodyType: "Electric SUV", price: 5500, originalPrice: 7850, image: "/products/camo-car-daylight.jpg" },
      { id: "seal", name: "Seal", bodyType: "Electric Performance Sedan", price: 5650, originalPrice: 8070, image: "/products/camo-car-night-view.jpg" },
      { id: "emax-7", name: "eMAX 7", bodyType: "Electric MPV", price: 5780, originalPrice: 8250, image: "/products/camo-car-full-sidefit.jpg" },
      { id: "e6", name: "e6", bodyType: "Electric MPV", price: 5650, originalPrice: 8070, image: "/products/camo-car-full-sidefit.jpg" }
    ]
  },
  {
    id: "citroen",
    name: "Citroen",
    country: "France",
    tagline: "Advanced comfort protected against every storm",
    description: "Hi-Life covers for Citroen are contoured to the bold chevron styling, offering high water resistance and breathable airflow so moisture never gets trapped underneath.",
    models: [
      { id: "c3", name: "C3", bodyType: "Hatchback", price: 4970, originalPrice: 7100, image: "/products/camo-car-daylight.jpg" },
      { id: "c3-aircross", name: "C3 Aircross", bodyType: "Compact SUV", price: 5500, originalPrice: 7850, image: "/products/camo-car-daylight.jpg" },
      { id: "basalt", name: "Basalt Vision Coupe", bodyType: "Coupe SUV", price: 5500, originalPrice: 7850, image: "/products/camo-car-shopfront.jpg" },
      { id: "c5-aircross", name: "C5 Aircross", bodyType: "Mid SUV", price: 5780, originalPrice: 8250, image: "/products/camo-car-rain-monsoon.jpg" },
      { id: "ec3", name: "eC3 Electric", bodyType: "Electric Hatchback", price: 4970, originalPrice: 7100, image: "/products/camo-car-daylight.jpg" }
    ]
  },
  {
    id: "ford",
    name: "Ford",
    country: "USA",
    tagline: "Built Ford tough, preserved with heavy-duty Hi-Life armor",
    description: "From the legendary Endeavour to the EcoSport, our heavy-duty covers maintain your Ford in immaculate condition, resisting heavy monsoon rain, high winds, and tree sap.",
    models: [
      { id: "endeavour", name: "Endeavour", bodyType: "Full-Size 4x4 SUV", price: 6350, originalPrice: 9070, image: "/products/camo-car-rain-monsoon.jpg" },
      { id: "ecosport", name: "EcoSport", bodyType: "Compact SUV", price: 5500, originalPrice: 7850, image: "/products/camo-car-daylight.jpg" },
      { id: "figo", name: "Figo", bodyType: "Hatchback", price: 4970, originalPrice: 7100, image: "/products/camo-car-daylight.jpg" },
      { id: "aspire", name: "Aspire", bodyType: "Sedan", price: 5300, originalPrice: 7565, image: "/products/camo-car-night-view.jpg" },
      { id: "freestyle", name: "Freestyle", bodyType: "Crossover", price: 5100, originalPrice: 7285, image: "/products/camo-car-daylight.jpg" }
    ]
  },
  {
    id: "honda",
    name: "Honda",
    country: "Japan",
    tagline: "The power of dreams preserved in pristine condition",
    description: "Custom-cut covers for Honda City, Elevate, and Amaze with dedicated mirror pockets and shark-fin antenna housing, keeping Japanese precision finishes showroom fresh.",
    models: [
      { id: "city", name: "City / City e:HEV", bodyType: "Executive Sedan", price: 5500, originalPrice: 7850, image: "/products/camo-car-night-view.jpg" },
      { id: "elevate", name: "Elevate", bodyType: "Mid SUV", price: 5780, originalPrice: 8250, image: "/products/camo-car-rain-monsoon.jpg" },
      { id: "amaze", name: "Amaze", bodyType: "Compact Sedan", price: 5300, originalPrice: 7565, image: "/products/camo-car-daylight.jpg" },
      { id: "jazz", name: "Jazz", bodyType: "Premium Hatchback", price: 4970, originalPrice: 7100, image: "/products/camo-car-daylight.jpg" },
      { id: "wr-v", name: "WR-V", bodyType: "Crossover", price: 5300, originalPrice: 7565, image: "/products/camo-car-daylight.jpg" },
      { id: "civic", name: "Civic", bodyType: "Executive Sedan", price: 5650, originalPrice: 8070, image: "/products/camo-car-night-view.jpg" }
    ]
  },
  {
    id: "hyundai",
    name: "Hyundai",
    country: "South Korea",
    tagline: "Sensuous sportiness shielded by robust tailored protection",
    description: "From Creta to Venue and Verna, Hi-Life provides precision-measured car covers featuring triple-stitched seams and windproof underbody straps engineered for Indian driveways.",
    models: [
      { id: "creta", name: "Creta / Creta N Line", bodyType: "Mid SUV", price: 5780, originalPrice: 8250, image: "/products/camo-car-full-sidefit.jpg" },
      { id: "venue", name: "Venue / Venue N Line", bodyType: "Compact SUV", price: 5500, originalPrice: 7850, image: "/products/camo-car-rain-monsoon.jpg" },
      { id: "i20", name: "i20 / i20 N Line", bodyType: "Premium Hatchback", price: 5100, originalPrice: 7285, image: "/products/camo-car-daylight.jpg" },
      { id: "verna", name: "Verna", bodyType: "Sedan", price: 5500, originalPrice: 7850, image: "/products/camo-car-night-view.jpg" },
      { id: "exter", name: "Exter", bodyType: "Micro SUV", price: 5100, originalPrice: 7285, image: "/products/camo-car-daylight.jpg" },
      { id: "alcazar", name: "Alcazar", bodyType: "6/7-Seater SUV", price: 5940, originalPrice: 8490, image: "/products/camo-car-rain-monsoon.jpg" },
      { id: "tucson", name: "Tucson", bodyType: "Premium SUV", price: 6150, originalPrice: 8785, image: "/products/camo-car-rain-monsoon.jpg" },
      { id: "grand-i10-nios", name: "Grand i10 Nios", bodyType: "Hatchback", price: 4970, originalPrice: 7100, image: "/products/camo-car-daylight.jpg" },
      { id: "aura", name: "Aura", bodyType: "Sedan", price: 5300, originalPrice: 7565, image: "/products/camo-car-daylight.jpg" },
      { id: "ioniq-5", name: "Ioniq 5 EV", bodyType: "Electric Crossover", price: 6350, originalPrice: 9070, image: "/products/camo-car-shopfront.jpg" }
    ]
  },
  {
    id: "jaguar",
    name: "Jaguar",
    country: "UK",
    tagline: "Grace, pace and protection for the discerning enthusiast",
    description: "Every Jaguar cover by Hi-Life is constructed with ultra-soft inner lining to cradle bespoke British coachwork, providing total defense from torrential rains and airborne dust.",
    models: [
      { id: "f-pace", name: "F-Pace", bodyType: "Luxury Performance SUV", price: 6450, originalPrice: 9200, image: "/products/camo-car-rain-monsoon.jpg" },
      { id: "xe", name: "XE", bodyType: "Executive Sports Sedan", price: 5650, originalPrice: 8070, image: "/products/camo-car-night-view.jpg" },
      { id: "xf", name: "XF", bodyType: "Luxury Sedan", price: 5850, originalPrice: 8350, image: "/products/camo-car-night-view.jpg" },
      { id: "i-pace", name: "I-Pace Electric", bodyType: "Electric Performance SUV", price: 6450, originalPrice: 9200, image: "/products/camo-car-shopfront.jpg" }
    ]
  },
  {
    id: "jeep",
    name: "Jeep",
    country: "USA",
    tagline: "Go anywhere, do anything, protected everywhere",
    description: "Rugged waterproof covers built to safeguard Compass, Meridian, and Wrangler from trail dust, mud splatter, high UV radiation, and heavy rainfall.",
    models: [
      { id: "compass", name: "Compass", bodyType: "Mid SUV", price: 5780, originalPrice: 8250, image: "/products/camo-car-rain-monsoon.jpg" },
      { id: "meridian", name: "Meridian", bodyType: "3-Row SUV", price: 6150, originalPrice: 8785, image: "/products/camo-car-rain-monsoon.jpg" },
      { id: "wrangler", name: "Wrangler / Rubicon", bodyType: "Trail-Rated 4x4", price: 6450, originalPrice: 9200, image: "/products/camo-car-shopfront.jpg" },
      { id: "grand-cherokee", name: "Grand Cherokee", bodyType: "Full-Size Luxury SUV", price: 6750, originalPrice: 9640, image: "/products/camo-car-rain-monsoon.jpg" }
    ]
  },
  {
    id: "kia",
    name: "Kia",
    country: "South Korea",
    tagline: "Movement that inspires, preserved by Hanuman Tarpaulins",
    description: "Hi-Life covers for Seltos, Sonet, and Carens are patterned with millimeter accuracy, featuring reinforced mirror seams, dual buckle straps, and non-woven breathable fabric.",
    models: [
      { id: "seltos", name: "Seltos / Seltos X-Line", bodyType: "Mid SUV", price: 5780, originalPrice: 8250, image: "/products/camo-car-rain-monsoon.jpg" },
      { id: "sonet", name: "Sonet", bodyType: "Compact SUV", price: 5500, originalPrice: 7850, image: "/products/camo-car-daylight.jpg" },
      { id: "carens", name: "Carens", bodyType: "Family MPV", price: 5780, originalPrice: 8250, image: "/products/camo-car-full-sidefit.jpg" },
      { id: "carnival", name: "Carnival Limousine", bodyType: "Luxury MPV", price: 6750, originalPrice: 9640, image: "/products/camo-car-night-view.jpg" },
      { id: "ev6", name: "EV6", bodyType: "Electric Crossover", price: 6350, originalPrice: 9070, image: "/products/camo-car-shopfront.jpg" }
    ]
  },
  {
    id: "land-rover",
    name: "Land Rover",
    country: "UK",
    tagline: "Above & beyond capability, guarded by industrial-strength fabric",
    description: "Heavy-gauge weatherproof covers engineered for Defender, Range Rover, and Discovery. Protects tall body lines, roof racks, and oversized spare wheels.",
    models: [
      { id: "defender", name: "Defender 90 / 110 / 130", bodyType: "Off-Road Icon SUV", price: 6750, originalPrice: 9640, image: "/products/camo-car-rain-monsoon.jpg" },
      { id: "range-rover-evoque", name: "Range Rover Evoque", bodyType: "Luxury Compact SUV", price: 5940, originalPrice: 8490, image: "/products/camo-car-daylight.jpg" },
      { id: "range-rover-velar", name: "Range Rover Velar", bodyType: "Luxury Mid SUV", price: 6350, originalPrice: 9070, image: "/products/camo-car-night-view.jpg" },
      { id: "range-rover-sport", name: "Range Rover Sport", bodyType: "Performance SUV", price: 6750, originalPrice: 9640, image: "/products/camo-car-rain-monsoon.jpg" },
      { id: "discovery", name: "Discovery", bodyType: "Full-Size 7-Seater SUV", price: 6750, originalPrice: 9640, image: "/products/camo-car-shopfront.jpg" }
    ]
  },
  {
    id: "lexus",
    name: "Lexus",
    country: "Japan",
    tagline: "Takumi craftsmanship protected by tailor-made covers",
    description: "Designed for Lexus ES, NX, and RX with ultra-soft inner lining that shields deep self-healing paint finishes from environmental debris and sunlight.",
    models: [
      { id: "es", name: "ES 300h", bodyType: "Executive Hybrid Sedan", price: 5780, originalPrice: 8250, image: "/products/camo-car-night-view.jpg" },
      { id: "nx", name: "NX 350h", bodyType: "Luxury Compact SUV", price: 5940, originalPrice: 8490, image: "/products/camo-car-daylight.jpg" },
      { id: "rx", name: "RX 350h / 500h", bodyType: "Luxury Mid SUV", price: 6450, originalPrice: 9200, image: "/products/camo-car-rain-monsoon.jpg" },
      { id: "lx", name: "LX 500d / 600", bodyType: "Flagship Luxury SUV", price: 6750, originalPrice: 9640, image: "/products/camo-car-shopfront.jpg" }
    ]
  },
  {
    id: "mahindra",
    name: "Mahindra",
    country: "India",
    tagline: "Explore the impossible with authentic homegrown protection",
    description: "Tailored covers for Thar Roxx, Scorpio-N, XUV700, and Bolero. Built with heavy-duty 130 GSM 3-layer fabric to withstand off-road mud, intense heat, and torrential monsoon.",
    models: [
      { id: "thar", name: "Thar / Thar Roxx (5-Door)", bodyType: "Off-Road SUV", price: 5500, originalPrice: 7850, image: "/products/camo-car-daylight.jpg" },
      { id: "scorpio-n", name: "Scorpio-N", bodyType: "Full-Size SUV", price: 5940, originalPrice: 8490, image: "/products/camo-car-rain-monsoon.jpg" },
      { id: "scorpio-classic", name: "Scorpio Classic", bodyType: "Rugged SUV", price: 5780, originalPrice: 8250, image: "/products/camo-car-rain-monsoon.jpg" },
      { id: "xuv700", name: "XUV700", bodyType: "Premium SUV", price: 5940, originalPrice: 8490, image: "/products/camo-car-shopfront.jpg" },
      { id: "xuv-3xo", name: "XUV 3XO / XUV300", bodyType: "Compact SUV", price: 5300, originalPrice: 7565, image: "/products/camo-car-daylight.jpg" },
      { id: "bolero", name: "Bolero / Bolero Neo", bodyType: "Rugged MUV", price: 5500, originalPrice: 7850, image: "/products/camo-car-rain-monsoon.jpg" },
      { id: "xuv400", name: "XUV400 EV", bodyType: "Electric SUV", price: 5500, originalPrice: 7850, image: "/products/camo-car-daylight.jpg" }
    ]
  },
  {
    id: "maruti-suzuki",
    name: "Maruti Suzuki",
    country: "India / Japan",
    tagline: "Everyday reliability needs everyday protection",
    description: "At Hi-Life, our Maruti Suzuki Car Covers models are built with UV protection, precision fit, and rugged craftsmanship for daily use. Designed for India's most driven cars, each cover reflects smart design and attention to detail, just like your Maruti.",
    models: [
      { id: "baleno", name: "Baleno", bodyType: "Premium Hatchback", price: 4970, originalPrice: 7100, image: "/products/camo-car-daylight.jpg" },
      { id: "swift", name: "Swift (2005-2026 All Generations)", bodyType: "Hatchback", price: 4970, originalPrice: 7100, image: "/products/camo-car-daylight.jpg" },
      { id: "grand-vitara", name: "Grand Vitara", bodyType: "Mid SUV", price: 5780, originalPrice: 8250, image: "/products/camo-car-rain-monsoon.jpg" },
      { id: "brezza", name: "Brezza / Vitara Brezza", bodyType: "Compact SUV", price: 5500, originalPrice: 7850, image: "/products/camo-car-rain-monsoon.jpg" },
      { id: "fronx", name: "Fronx", bodyType: "Crossover", price: 5300, originalPrice: 7565, image: "/products/camo-car-daylight.jpg" },
      { id: "dzire", name: "Dzire", bodyType: "Sedan", price: 5300, originalPrice: 7565, image: "/products/camo-car-night-view.jpg" },
      { id: "ertiga", name: "Ertiga", bodyType: "MUV", price: 5780, originalPrice: 8250, image: "/products/camo-car-night-view.jpg" },
      { id: "xl6", name: "XL6", bodyType: "Premium MPV", price: 5940, originalPrice: 8490, image: "/products/camo-car-rain-monsoon.jpg" },
      { id: "jimny", name: "Jimny (5-Door)", bodyType: "4x4 SUV", price: 5500, originalPrice: 7850, image: "/products/camo-car-rain-monsoon.jpg" },
      { id: "wagon-r", name: "Wagon R", bodyType: "Tall-Boy Hatchback", price: 4970, originalPrice: 7100, image: "/products/camo-car-daylight.jpg" },
      { id: "alto-k10", name: "Alto / Alto K10", bodyType: "Hatchback", price: 4730, originalPrice: 6750, image: "/products/camo-car-daylight.jpg" },
      { id: "ciaz", name: "Ciaz", bodyType: "Executive Sedan", price: 5500, originalPrice: 7850, image: "/products/camo-car-night-view.jpg" },
      { id: "ignis", name: "Ignis", bodyType: "Urban Compact", price: 4970, originalPrice: 7100, image: "/products/camo-car-daylight.jpg" },
      { id: "invicto", name: "Invicto", bodyType: "Premium Hybrid MPV", price: 6350, originalPrice: 9070, image: "/products/camo-car-rain-monsoon.jpg" },
      { id: "s-cross", name: "S-Cross", bodyType: "Crossover", price: 5500, originalPrice: 7850, image: "/products/camo-car-daylight.jpg" },
      { id: "celerio", name: "Celerio", bodyType: "Hatchback", price: 4970, originalPrice: 7100, image: "/products/camo-car-daylight.jpg" },
      { id: "s-presso", name: "S-Presso", bodyType: "Mini SUV", price: 4730, originalPrice: 6750, image: "/products/camo-car-daylight.jpg" }
    ]
  },
  {
    id: "maybach",
    name: "Maybach",
    country: "Germany",
    tagline: "Pinnacle luxury preserved with royal care",
    description: "Ultra-premium tailor-made vehicle covers designed for Mercedes-Maybach S-Class and GLS. Crafted with bespoke non-abrasive cotton flock lining and waterproof breathable outer barrier.",
    models: [
      { id: "maybach-s-class", name: "S-Class Maybach (S580 / S680)", bodyType: "Ultra-Luxury Limousine", price: 6750, originalPrice: 9640, image: "/products/camo-car-night-view.jpg" },
      { id: "maybach-gls", name: "GLS Maybach 600", bodyType: "Ultra-Luxury SUV", price: 6750, originalPrice: 9640, image: "/products/camo-car-shopfront.jpg" }
    ]
  },
  {
    id: "mercedes",
    name: "Mercedes-Benz",
    country: "Germany",
    tagline: "The best or nothing, covered by Bangalore's finest",
    description: "Tailored for the three-pointed star. Our custom covers fit C-Class, E-Class, S-Class, GLC, and GLE with exact contours, mirror pockets, and scratch-free inner softness.",
    models: [
      { id: "c-class", name: "C-Class", bodyType: "Executive Sedan", price: 5500, originalPrice: 7850, image: "/products/camo-car-night-view.jpg" },
      { id: "e-class", name: "E-Class LWB", bodyType: "Luxury Sedan", price: 5780, originalPrice: 8250, image: "/products/camo-car-night-view.jpg" },
      { id: "s-class", name: "S-Class", bodyType: "Flagship Sedan", price: 6750, originalPrice: 9640, image: "/products/camo-car-night-view.jpg" },
      { id: "gla", name: "GLA", bodyType: "Compact Luxury SUV", price: 5500, originalPrice: 7850, image: "/products/camo-car-daylight.jpg" },
      { id: "glc", name: "GLC", bodyType: "Mid Luxury SUV", price: 5940, originalPrice: 8490, image: "/products/camo-car-rain-monsoon.jpg" },
      { id: "gle", name: "GLE LWB", bodyType: "Full-Size Luxury SUV", price: 6450, originalPrice: 9200, image: "/products/camo-car-rain-monsoon.jpg" },
      { id: "gls", name: "GLS", bodyType: "7-Seater Luxury SUV", price: 6750, originalPrice: 9640, image: "/products/camo-car-shopfront.jpg" },
      { id: "a-class", name: "A-Class Limousine", bodyType: "Sedan", price: 5450, originalPrice: 7790, image: "/products/camo-car-night-view.jpg" }
    ]
  },
  {
    id: "mg",
    name: "MG",
    country: "UK / China",
    tagline: "Since 1924, protected by Hanuman Tarpaulins",
    description: "Custom-designed car covers for Hector, Astor, Windsor EV, and ZS EV. Dual buckle wind-straps and reinforced elastic hems keep your MG firmly protected.",
    models: [
      { id: "hector", name: "Hector / Hector Plus", bodyType: "Mid SUV", price: 5780, originalPrice: 8250, image: "/products/camo-car-rain-monsoon.jpg" },
      { id: "astor", name: "Astor", bodyType: "Compact SUV", price: 5500, originalPrice: 7850, image: "/products/camo-car-daylight.jpg" },
      { id: "windsor-ev", name: "Windsor EV", bodyType: "Crossover Utility", price: 5500, originalPrice: 7850, image: "/products/camo-car-daylight.jpg" },
      { id: "zs-ev", name: "ZS EV", bodyType: "Electric SUV", price: 5780, originalPrice: 8250, image: "/products/camo-car-rain-monsoon.jpg" },
      { id: "gloster", name: "Gloster", bodyType: "Full-Size 4x4 SUV", price: 6450, originalPrice: 9200, image: "/products/camo-car-shopfront.jpg" },
      { id: "comet-ev", name: "Comet EV", bodyType: "Urban Electric", price: 4730, originalPrice: 6750, image: "/products/camo-car-daylight.jpg" }
    ]
  },
  {
    id: "mini",
    name: "Mini",
    country: "UK",
    tagline: "Big on personality, perfectly tailored in defense",
    description: "Exact snug fit for Mini Cooper and Countryman. Engineered with contoured mirror caps and soft inner fleece that protects dual-tone racing stripes and roof wraps.",
    models: [
      { id: "cooper", name: "Cooper 3-Door / 5-Door", bodyType: "Iconic Hatchback", price: 5100, originalPrice: 7285, image: "/products/camo-car-daylight.jpg" },
      { id: "countryman", name: "Countryman", bodyType: "Compact Crossover", price: 5500, originalPrice: 7850, image: "/products/camo-car-rain-monsoon.jpg" },
      { id: "cooper-s", name: "Cooper S Convertible", bodyType: "Sports Hatchback", price: 5300, originalPrice: 7565, image: "/products/camo-car-daylight.jpg" }
    ]
  },
  {
    id: "nissan",
    name: "Nissan",
    country: "Japan",
    tagline: "Innovation that excites, preserved for longevity",
    description: "Hi-Life covers for Nissan Magnite and X-Trail feature breathable ventilation and heavy UV-reflective treatment to protect modern dashboards and exterior clear coats.",
    models: [
      { id: "magnite", name: "Magnite", bodyType: "Compact SUV", price: 5300, originalPrice: 7565, image: "/products/camo-car-daylight.jpg" },
      { id: "x-trail", name: "X-Trail", bodyType: "Premium Mid SUV", price: 6150, originalPrice: 8785, image: "/products/camo-car-rain-monsoon.jpg" },
      { id: "kicks", name: "Kicks", bodyType: "Mid SUV", price: 5500, originalPrice: 7850, image: "/products/camo-car-rain-monsoon.jpg" },
      { id: "sunny", name: "Sunny", bodyType: "Sedan", price: 5300, originalPrice: 7565, image: "/products/camo-car-night-view.jpg" }
    ]
  },
  {
    id: "porsche",
    name: "Porsche",
    country: "Germany",
    tagline: "There is no substitute, nor in protective craftsmanship",
    description: "Tailored to the iconic curves of the 911, Cayenne, Macan, and Panamera. Soft fleece inner lining and breathable waterproof fabric safeguard Stuttgart performance icons.",
    models: [
      { id: "cayenne", name: "Cayenne / Cayenne Coupe", bodyType: "Performance Luxury SUV", price: 6750, originalPrice: 9640, image: "/products/camo-car-rain-monsoon.jpg" },
      { id: "macan", name: "Macan / Macan EV", bodyType: "Compact Performance SUV", price: 6350, originalPrice: 9070, image: "/products/camo-car-daylight.jpg" },
      { id: "911", name: "911 Carrera / GT3", bodyType: "Sports Coupe", price: 6150, originalPrice: 8785, image: "/products/camo-car-street-profile.jpg" },
      { id: "panamera", name: "Panamera", bodyType: "Sports Sedan", price: 6450, originalPrice: 9200, image: "/products/camo-car-night-view.jpg" },
      { id: "taycan", name: "Taycan EV", bodyType: "Electric Sports Sedan", price: 6450, originalPrice: 9200, image: "/products/camo-car-night-view.jpg" }
    ]
  },
  {
    id: "renault",
    name: "Renault",
    country: "France",
    tagline: "Passion for life, preserved through monsoon and sun",
    description: "Lightweight, easy to fold, and 100% water resistant. Designed for Indian owners of Kiger, Triber, Kwid, and Duster.",
    models: [
      { id: "kiger", name: "Kiger", bodyType: "Compact SUV", price: 5300, originalPrice: 7565, image: "/products/camo-car-daylight.jpg" },
      { id: "triber", name: "Triber", bodyType: "Sub-4m 7-Seater MPV", price: 5500, originalPrice: 7850, image: "/products/camo-car-full-sidefit.jpg" },
      { id: "kwid", name: "Kwid", bodyType: "Hatchback", price: 4730, originalPrice: 6750, image: "/products/camo-car-daylight.jpg" },
      { id: "duster", name: "Duster", bodyType: "Rugged SUV", price: 5500, originalPrice: 7850, image: "/products/camo-car-rain-monsoon.jpg" }
    ]
  },
  {
    id: "skoda",
    name: "Skoda",
    country: "Czech Republic",
    tagline: "Simply clever engineering preserved with Hi-Life covers",
    description: "Precision-measured for Kushaq, Slavia, Kodiaq, and Octavia. Mirror pockets, heavy elastic hem, and underbody clip keep your car spotless through harsh Indian weather.",
    models: [
      { id: "slavia", name: "Slavia", bodyType: "Sedan", price: 5500, originalPrice: 7850, image: "/products/camo-car-night-view.jpg" },
      { id: "kushaq", name: "Kushaq", bodyType: "Mid SUV", price: 5780, originalPrice: 8250, image: "/products/camo-car-rain-monsoon.jpg" },
      { id: "kodiaq", name: "Kodiaq", bodyType: "7-Seater Luxury SUV", price: 6350, originalPrice: 9070, image: "/products/camo-car-shopfront.jpg" },
      { id: "kylaq", name: "Kylaq", bodyType: "Compact SUV", price: 5300, originalPrice: 7565, image: "/products/camo-car-daylight.jpg" },
      { id: "rapid", name: "Rapid", bodyType: "Sedan", price: 5300, originalPrice: 7565, image: "/products/camo-car-daylight.jpg" },
      { id: "superb", name: "Superb", bodyType: "Executive Sedan", price: 5780, originalPrice: 8250, image: "/products/camo-car-night-view.jpg" }
    ]
  },
  {
    id: "tata",
    name: "Tata",
    country: "India",
    tagline: "Connecting aspirations with 5-star safety armor",
    description: "Tailored fit for Nexon, Punch, Harrier, Safari, Curvv, and Altroz. Heavy-duty 3-layer protection shields both petrol and EV battery packs from scorching sun and waterlogging.",
    models: [
      { id: "nexon", name: "Nexon / Nexon.ev", bodyType: "Compact SUV", price: 5500, originalPrice: 7850, image: "/products/camo-car-rain-monsoon.jpg" },
      { id: "punch", name: "Punch / Punch.ev", bodyType: "Micro SUV", price: 5100, originalPrice: 7285, image: "/products/camo-car-daylight.jpg" },
      { id: "harrier", name: "Harrier / Harrier.ev", bodyType: "Mid SUV", price: 5940, originalPrice: 8490, image: "/products/camo-car-rain-monsoon.jpg" },
      { id: "safari", name: "Safari (New Generation)", bodyType: "Full-Size SUV", price: 6150, originalPrice: 8785, image: "/products/camo-car-shopfront.jpg" },
      { id: "curvv", name: "Curvv / Curvv.ev", bodyType: "Coupe SUV", price: 5650, originalPrice: 8070, image: "/products/camo-car-street-profile.jpg" },
      { id: "altroz", name: "Altroz / Altroz Racer", bodyType: "Premium Hatchback", price: 5100, originalPrice: 7285, image: "/products/camo-car-daylight.jpg" },
      { id: "tiago", name: "Tiago / Tiago.ev", bodyType: "Hatchback", price: 4970, originalPrice: 7100, image: "/products/camo-car-daylight.jpg" },
      { id: "tigor", name: "Tigor / Tigor.ev", bodyType: "Sedan", price: 5300, originalPrice: 7565, image: "/products/camo-car-night-view.jpg" }
    ]
  },
  {
    id: "toyota",
    name: "Toyota",
    country: "Japan",
    tagline: "Legendary reliability demands legendary preservation",
    description: "Precision-stitched covers for Fortuner, Innova Crysta, Innova Hycross, and Urban Cruiser Hyryder. Heavy-duty construction tested to withstand 20+ years of Indian road conditions.",
    models: [
      { id: "fortuner", name: "Fortuner / Legender / GR-S", bodyType: "Full-Size 4x4 SUV", price: 6350, originalPrice: 9070, image: "/products/camo-car-shopfront.jpg" },
      { id: "innova-crysta", name: "Innova Crysta", bodyType: "Premium MPV", price: 5940, originalPrice: 8490, image: "/products/camo-car-night-view.jpg" },
      { id: "innova-hycross", name: "Innova Hycross", bodyType: "Hybrid MPV", price: 6150, originalPrice: 8785, image: "/products/camo-car-rain-monsoon.jpg" },
      { id: "urban-cruiser-hyryder", name: "Urban Cruiser Hyryder", bodyType: "Mid SUV", price: 5780, originalPrice: 8250, image: "/products/camo-car-rain-monsoon.jpg" },
      { id: "glanza", name: "Glanza", bodyType: "Hatchback", price: 4970, originalPrice: 7100, image: "/products/camo-car-daylight.jpg" },
      { id: "rumion", name: "Rumion", bodyType: "MPV", price: 5780, originalPrice: 8250, image: "/products/camo-car-full-sidefit.jpg" },
      { id: "camry", name: "Camry Hybrid", bodyType: "Luxury Sedan", price: 5780, originalPrice: 8250, image: "/products/camo-car-night-view.jpg" },
      { id: "hilux", name: "Hilux Lifestyle Truck", bodyType: "4x4 Pickup", price: 6550, originalPrice: 9350, image: "/products/camo-car-rain-monsoon.jpg" }
    ]
  },
  {
    id: "vinfast",
    name: "Vinfast",
    country: "Vietnam",
    tagline: "Boundless together, protected in every terrain",
    description: "Contoured covers for Vinfast VF electric SUVs. Designed with UV thermal reflective fabric to keep the cabin cool and protect fast-charging ports.",
    models: [
      { id: "vf-3", name: "VF 3", bodyType: "Mini Electric SUV", price: 4730, originalPrice: 6750, image: "/products/camo-car-daylight.jpg" },
      { id: "vf-6", name: "VF 6", bodyType: "Compact Electric SUV", price: 5500, originalPrice: 7850, image: "/products/camo-car-daylight.jpg" },
      { id: "vf-7", name: "VF 7", bodyType: "Mid Electric SUV", price: 5780, originalPrice: 8250, image: "/products/camo-car-rain-monsoon.jpg" },
      { id: "vf-8", name: "VF 8", bodyType: "Full-Size Electric SUV", price: 6350, originalPrice: 9070, image: "/products/camo-car-shopfront.jpg" }
    ]
  },
  {
    id: "volkswagen",
    name: "Volkswagen",
    country: "Germany",
    tagline: "German engineering protected with meticulous care",
    description: "Precision-cut covers for Virtus, Taigun, Polo, and Tiguan. Features reinforced mirror pockets and fleece lining that protects metallic German paint.",
    models: [
      { id: "virtus", name: "Virtus / Virtus GT", bodyType: "Performance Sedan", price: 5500, originalPrice: 7850, image: "/products/camo-car-night-view.jpg" },
      { id: "taigun", name: "Taigun / Taigun GT", bodyType: "Mid SUV", price: 5780, originalPrice: 8250, image: "/products/camo-car-rain-monsoon.jpg" },
      { id: "polo", name: "Polo / Polo GT TSI", bodyType: "Hatchback", price: 4970, originalPrice: 7100, image: "/products/camo-car-daylight.jpg" },
      { id: "tiguan", name: "Tiguan", bodyType: "Premium SUV", price: 6150, originalPrice: 8785, image: "/products/camo-car-rain-monsoon.jpg" },
      { id: "vento", name: "Vento", bodyType: "Executive Sedan", price: 5300, originalPrice: 7565, image: "/products/camo-car-night-view.jpg" }
    ]
  },
  {
    id: "volvo",
    name: "Volvo",
    country: "Sweden",
    tagline: "Scandinavian safety shielded by all-weather armor",
    description: "Swedish design protected from Indian monsoons and UV degradation. Custom covers for XC40, XC60, and XC90 featuring heavy-duty non-woven multi-layer fabric.",
    models: [
      { id: "xc40", name: "XC40 / EX40 Recharge", bodyType: "Compact Luxury SUV", price: 5780, originalPrice: 8250, image: "/products/camo-car-daylight.jpg" },
      { id: "xc60", name: "XC60", bodyType: "Mid Luxury SUV", price: 6150, originalPrice: 8785, image: "/products/camo-car-rain-monsoon.jpg" },
      { id: "xc90", name: "XC90", bodyType: "Flagship 7-Seater Luxury SUV", price: 6750, originalPrice: 9640, image: "/products/camo-car-shopfront.jpg" },
      { id: "s90", name: "S90", bodyType: "Executive Sedan", price: 5940, originalPrice: 8490, image: "/products/camo-car-night-view.jpg" }
    ]
  }
];

/**
 * Returns brand by ID
 */
export function getCarBrandById(brandId) {
  if (!brandId) return null;
  const normalized = brandId.toLowerCase().trim();
  return ALL_CAR_BRANDS.find(b => b.id === normalized || b.name.toLowerCase() === normalized) || null;
}

/**
 * Helper to generate a slug for a model cover
 */
export function getModelCoverSlug(brandId, modelId) {
  return `hilife-${brandId}-${modelId}-car-cover`;
}

/**
 * Look up product by slug across CATALOG_PRODUCTS and ALL_CAR_BRANDS
 */
export function findProductBySlugOrModel(slug, catalogProducts = []) {
  if (!slug) return catalogProducts[0] || null;

  // 1. Direct match in existing catalog products
  const directMatch = catalogProducts.find(p => p.slug === slug || p.id === slug);
  if (directMatch) return directMatch;

  // 2. Search in ALL_CAR_BRANDS
  for (const brand of ALL_CAR_BRANDS) {
    for (const model of brand.models) {
      const generatedSlug = getModelCoverSlug(brand.id, model.id);
      if (
        slug === generatedSlug || 
        slug === `${brand.id}-${model.id}` || 
        slug === model.id
      ) {
        return {
          id: generatedSlug,
          slug: generatedSlug,
          name: `Hi-Life Camo Car Cover for ${brand.name} ${model.name}`,
          brand: brand.name,
          model: model.name,
          bodyType: model.bodyType,
          series: "Hi-Life Camouflage",
          price: model.price,
          originalPrice: model.originalPrice,
          sale: true,
          rating: 4.9,
          reviewsCount: Math.floor(80 + Math.random() * 70),
          image: model.image,
          gallery: [
            model.image,
            "/products/camo-car-full-sidefit.jpg",
            "/products/camo-car-daylight.jpg",
            "/products/camo-car-rain-monsoon.jpg",
            "/products/camo-packaging-bag.jpg",
            "/products/camo-packaging-full.jpg"
          ],
          features: [
            "130 GSM - 3 Layer Heavy-Duty Non-Woven Fabric",
            "Breathable Micro-Porous Heat & Vapor Dissipation",
            "Triple-Level Reinforced Heavy Duty Seam Stitching",
            "Tailored Mirror & Roof Antenna Contours",
            "High Water Resistance with Non-Abrasive Soft Cotton Fleece Lining",
            "Shields against Indian Monsoon, 45°C UV Sun, Bird Droppings & Scratches"
          ],
          specs: {
            fit: `Tailored precision cut for ${brand.name} ${model.name}, featuring dedicated mirror pockets and underbody wind-buckle clip.`,
            weather: "Engineered specifically for Indian conditions: scorching summer UV, severe monsoons, and ambient dust.",
            water: "High water repellency rating tested under rigorous IS 390:1975 fabric standards.",
            air: "Breathable airflow porous membrane allows trapped dampness and heat to escape safely.",
            lining: "Non-scratch ultra-soft cotton interior protects factory clear coats from swirl marks.",
            handling: "Lightweight and easy for a single person to install or remove in under 60 seconds. Comes with dedicated carrying bag."
          }
        };
      }
    }
  }

  // Fallback to first catalog product
  return catalogProducts[0] || null;
}
