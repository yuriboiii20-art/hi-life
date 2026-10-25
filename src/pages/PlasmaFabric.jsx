import React, { useState } from 'react';
import { ArrowRight, Check, ShieldCheck, Droplets, Sun, Sparkles } from 'lucide-react';
import VehicleFinder from '../components/VehicleFinder';
import ProductResult from '../components/ProductResult';
import QuickOrderModal from '../components/QuickOrderModal';

const PLASMA_COLORS = [
  { id: 'black', name: 'Charcoal Black', image: '/hi-life-assets/plasma-black_01.jpg', hex: '#1c1917' },
  { id: 'blue', name: 'Deep Royal Blue', image: '/hi-life-assets/plasma-blue_01.jpg', hex: '#1e3a8a' },
  { id: 'red', name: 'Monza Maroon', image: '/hi-life-assets/plasma-red_01.jpg', hex: '#881337' },
  { id: 'grey', name: 'Silver Platinum', image: '/hi-life-assets/plasma-grey_01.jpg', hex: '#6b7280' },
  { id: 'green', name: 'British Racing Green', image: '/hi-life-assets/plasma-green_01.jpg', hex: '#14532d' }
];

export default function PlasmaFabric() {
  const [selectedColor, setSelectedColor] = useState(PLASMA_COLORS[0]);
  const [matchingResult, setMatchingResult] = useState(null);
  const [orderModalResult, setOrderModalResult] = useState(null);

  return (
    <div className="bg-white text-stone-900 font-sans select-none overflow-x-hidden">
      
      {/* 1. Cinematic Hero Section */}
      <section className="relative w-full min-h-[500px] sm:min-h-[580px] lg:min-h-[640px] flex items-end overflow-hidden bg-stone-950 text-white">
        <img
          src={selectedColor.image}
          alt={`Hi-Life Plasma Car Cover in ${selectedColor.name}`}
          className="absolute inset-0 w-full h-full object-cover object-center filter brightness-[0.85] transition-all duration-700"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/40 pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8 lg:px-14 pb-12 sm:pb-16 w-full">
          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] text-orange-400 block mb-2">
            HI-LIFE PLASMA SERIES
          </span>
          <h1 className="font-editorial text-3xl sm:text-5xl lg:text-6xl font-normal text-white tracking-tight leading-tight max-w-3xl">
            Maximum weatherproof defense. Unyielding protection.
          </h1>
          <p className="text-xs sm:text-sm text-stone-300 mt-3 max-w-xl font-normal">
            100% submersible-grade water barrier with heavy-gauge ripstop composite exterior.
          </p>

          {/* Color Switcher Pills */}
          <div className="mt-6 flex flex-wrap items-center gap-2">
            <span className="text-xs text-stone-300 mr-2 font-medium">Available in:</span>
            {PLASMA_COLORS.map((col) => (
              <button
                key={col.id}
                type="button"
                onClick={() => setSelectedColor(col)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs transition-all cursor-pointer ${
                  selectedColor.id === col.id
                    ? 'bg-orange-600 text-white font-bold shadow-md shadow-orange-600/30'
                    : 'bg-black/50 hover:bg-black/80 text-white border border-white/20'
                }`}
              >
                <span className="w-2.5 h-2.5 rounded-full border border-white/40" style={{ backgroundColor: col.hex }} />
                <span>{col.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Plasma Overview */}
      <section className="py-16 sm:py-24 max-w-5xl mx-auto px-5 sm:px-8 lg:px-14">
        <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] text-orange-600 block mb-2">
          THE PLASMA STANDARD
        </span>
        <h2 className="font-editorial text-3xl sm:text-5xl font-normal text-stone-950 tracking-tight leading-tight">
          Engineered for extreme Indian weather.
        </h2>
        <p className="text-xs sm:text-sm text-stone-600 mt-4 leading-relaxed max-w-3xl font-normal">
          When rainfall turns into torrential monsoon storms or blazing summer heat reaches 48°C, Plasma stands as the impenetrable outer armor for vehicles parked outdoors for days or weeks. Built with a 5-layer composite matrix, ultrasonic sealed seams, and reinforced belly anchors, it is engineered to outlast every harsh environmental condition.
        </p>
      </section>

      {/* 3. Plasma 4-Layer Exploded Build (White & Orange) */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-white via-orange-50/40 to-white text-stone-900 border-y border-orange-100">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-14">
          
          <div className="max-w-2xl mb-12 sm:mb-16">
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] text-orange-600 block mb-2">
              THE ARCHITECTURE
            </span>
            <h2 className="font-editorial text-3xl sm:text-5xl lg:text-6xl font-normal text-stone-950 tracking-tight">
              Four layers of heavy protection.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            
            <div className="p-6 rounded-2xl bg-white border border-orange-100 shadow-sm hover:shadow-lg hover:border-orange-300 transition-all space-y-3 flex flex-col items-center">
              <div className="h-28 flex items-center justify-center">
                <img src="/hi-life-assets/layer_top.png" alt="Top ballistic layer" className="max-h-full object-contain filter drop-shadow-lg" />
              </div>
              <h3 className="text-sm font-bold text-stone-950">1. Ballistic Ripstop Surface</h3>
              <p className="text-xs text-stone-600 leading-relaxed font-normal">
                High-denier heavy weave resists dog claws, tree sap, falling twigs, and flying road debris.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-orange-100 shadow-sm hover:shadow-lg hover:border-orange-300 transition-all space-y-3 flex flex-col items-center">
              <div className="h-28 flex items-center justify-center">
                <img src="/hi-life-assets/layer_mid_1.png" alt="Hydro-shield layer" className="max-h-full object-contain filter drop-shadow-lg" />
              </div>
              <h3 className="text-sm font-bold text-stone-950">2. 10,000mm Hydro-Barrier</h3>
              <p className="text-xs text-stone-600 leading-relaxed font-normal">
                Submersible-grade membrane stops torrential monsoon water and prevents capillary leakages.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-orange-100 shadow-sm hover:shadow-lg hover:border-orange-300 transition-all space-y-3 flex flex-col items-center">
              <div className="h-28 flex items-center justify-center">
                <img src="/hi-life-assets/layer_mid_2.png" alt="UV-Reflect core" className="max-h-full object-contain filter drop-shadow-lg" />
              </div>
              <h3 className="text-sm font-bold text-stone-950">3. Thermal Deflection Core</h3>
              <p className="text-xs text-stone-600 leading-relaxed font-normal">
                Blocks 99% of UV radiation, preventing dashboard fading, leather drying, and clear-coat peeling.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-orange-100 shadow-sm hover:shadow-lg hover:border-orange-300 transition-all space-y-3 flex flex-col items-center">
              <div className="h-28 flex items-center justify-center">
                <img src="/hi-life-assets/layer_base.png" alt="Fleece lining" className="max-h-full object-contain filter drop-shadow-lg" />
              </div>
              <h3 className="text-sm font-bold text-stone-950">4. Soft Cotton Paint Armor</h3>
              <p className="text-xs text-stone-600 leading-relaxed font-normal">
                Plush cotton interior cushions ceramic coatings and delicate paints from swirl marks and abrasion.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 4. Integrated Vehicle Finder */}
      <VehicleFinder
        onSelectResult={(res) => setMatchingResult(res)}
        initialCoverTypeId="heavy-duty-outdoor"
      />

      {matchingResult && (
        <div className="max-w-7xl mx-auto px-5 sm:px-8 pb-16">
          <ProductResult
            result={matchingResult}
            onReset={() => setMatchingResult(null)}
            onBuyNow={(res) => setOrderModalResult(res)}
          />
        </div>
      )}

      {orderModalResult && (
        <QuickOrderModal
          result={orderModalResult}
          onClose={() => setOrderModalResult(null)}
        />
      )}

    </div>
  );
}
