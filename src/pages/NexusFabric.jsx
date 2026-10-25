import React, { useState } from 'react';
import { ArrowRight, Check, ShieldCheck, Droplets, Sun, Sparkles } from 'lucide-react';
import VehicleFinder from '../components/VehicleFinder';
import ProductResult from '../components/ProductResult';
import QuickOrderModal from '../components/QuickOrderModal';

export default function NexusFabric() {
  const [matchingResult, setMatchingResult] = useState(null);
  const [orderModalResult, setOrderModalResult] = useState(null);
  const [activeTab, setActiveTab] = useState('water');

  const scrollToFinder = () => {
    const el = document.getElementById('vehicle-finder');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="bg-white text-stone-900 font-sans select-none overflow-x-hidden">
      
      {/* 1. Cinematic Hero Section */}
      <section className="relative w-full min-h-[500px] sm:min-h-[580px] lg:min-h-[640px] flex items-end overflow-hidden bg-stone-950 text-white">
        <img
          src="/hi-life-assets/nexus-lifestyle.jpg"
          alt="Hi-Life Nexus Dual-Tone Car Cover"
          className="absolute inset-0 w-full h-full object-cover object-center filter brightness-[0.88]"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/40 pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8 lg:px-14 pb-12 sm:pb-16 w-full">
          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] text-stone-300 block mb-2">
            HI-LIFE NEXUS
          </span>
          <h1 className="font-editorial text-3xl sm:text-5xl lg:text-6xl font-normal text-white tracking-tight leading-tight max-w-3xl">
            Rugged and tough conditions needs tougher protection.
          </h1>
          <p className="text-xs sm:text-sm text-stone-300 mt-3 max-w-xl font-normal">
            Highly resistant and rugged dual-tone cover for your car and two-wheelers.
          </p>
        </div>
      </section>

      {/* 2. What is Nexus? */}
      <section className="py-16 sm:py-24 max-w-5xl mx-auto px-5 sm:px-8 lg:px-14">
        <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] text-stone-400 block mb-2">
          WHAT IS NEXUS?
        </span>
        <h2 className="font-editorial text-3xl sm:text-5xl font-normal text-stone-950 tracking-tight leading-tight">
          Not every cover is a Nexus.
        </h2>
        <p className="text-xs sm:text-sm text-stone-600 mt-4 leading-relaxed max-w-3xl font-normal">
          Nexus is Hi-Life's daily dependable standard. Built for vehicles that are cared for. Not a layer of fabric thrown over your car or bike, but a precisely engineered system that takes your vehicle as seriously as you do. Every decision in Nexus: the material, the architecture, the fit was made with one purpose: nothing gets through, nothing goes wrong, nothing is left to chance.
        </p>
      </section>

      {/* 3. The Build: Three Layers. Feels like one. (White & Orange Exploded Section) */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-white via-orange-50/40 to-white text-stone-900 border-y border-orange-100">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-14">
          
          <div className="max-w-2xl mb-12 sm:mb-16">
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] text-orange-600 block mb-2">
              THE BUILD
            </span>
            <h2 className="font-editorial text-3xl sm:text-5xl lg:text-6xl font-normal text-stone-950 tracking-tight">
              Three layers. Feels like one.
            </h2>
          </div>

          {/* 3 Floating Exploded Layers Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 text-center">
            
            {/* Layer 1: Top */}
            <div className="space-y-4 flex flex-col items-center p-6 rounded-3xl bg-white border border-orange-100 shadow-md hover:shadow-xl hover:border-orange-300 transition-all">
              <div className="w-56 h-44 sm:w-64 sm:h-52 flex items-center justify-center">
                <img
                  src="/hi-life-assets/nexus_layer_top.png"
                  alt="Outer Non-Woven Layer"
                  className="max-h-full object-contain filter drop-shadow-[0_12px_24px_rgba(234,88,12,0.15)]"
                />
              </div>
              <h3 className="text-sm sm:text-base font-bold text-stone-950 tracking-tight">
                Outer - Non Woven Fabric
              </h3>
              <p className="text-xs text-stone-600 max-w-xs leading-relaxed font-normal">
                Rugged and highly durable non woven textured layer that resists environmental UV, bird droppings, and ambient dust.
              </p>
            </div>

            {/* Layer 2: Mid */}
            <div className="space-y-4 flex flex-col items-center p-6 rounded-3xl bg-white border border-orange-100 shadow-md hover:shadow-xl hover:border-orange-300 transition-all">
              <div className="w-56 h-44 sm:w-64 sm:h-52 flex items-center justify-center">
                <img
                  src="/hi-life-assets/nexus_layer_mid.png"
                  alt="Mid TPE Film Layer"
                  className="max-h-full object-contain filter drop-shadow-[0_12px_24px_rgba(234,88,12,0.15)]"
                />
              </div>
              <h3 className="text-sm sm:text-base font-bold text-stone-950 tracking-tight">
                Mid - TPE Film
              </h3>
              <p className="text-xs text-stone-600 max-w-xs leading-relaxed font-normal">
                Highly dependable and resistant thermoplastic film layer that halts water seepage and solar heat conduction.
              </p>
            </div>

            {/* Layer 3: Inner */}
            <div className="space-y-4 flex flex-col items-center p-6 rounded-3xl bg-white border border-orange-100 shadow-md hover:shadow-xl hover:border-orange-300 transition-all">
              <div className="w-56 h-44 sm:w-64 sm:h-52 flex items-center justify-center">
                <img
                  src="/hi-life-assets/nexus_layer_bottom.png"
                  alt="Inner Cotton Lining Layer"
                  className="max-h-full object-contain filter drop-shadow-[0_12px_24px_rgba(234,88,12,0.15)]"
                />
              </div>
              <h3 className="text-sm sm:text-base font-bold text-stone-950 tracking-tight">
                Inner - Cotton Inner Lining
              </h3>
              <p className="text-xs text-stone-600 max-w-xs leading-relaxed font-normal">
                Direct contact with paint. Ultra-soft spun cotton fleece with zero abrasion, zero scratching, and zero colour transfer.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 4. Independent Verification / Certified Performance */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-5 sm:px-8 lg:px-14 border-b border-orange-100">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          <div className="md:col-span-5 space-y-3">
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] text-orange-600 block">
              INDEPENDENT VERIFICATION
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-normal text-stone-950 tracking-tight leading-tight">
              Certified Performance
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
              Our fabrics are rigorously evaluated for water repellency and tear resistance in accordance with Indian automotive textile standards, backing our 20+ years of JC Road Bangalore manufacturing reputation.
            </p>
          </div>

          <div className="md:col-span-3 flex justify-center">
            <img
              src="/hi-life-assets/nitra_logo.jpg"
              alt="Quality Tested Fabric Emblem"
              className="w-36 h-36 object-contain"
            />
          </div>

          <div className="md:col-span-4 space-y-2.5 text-xs sm:text-sm text-stone-700">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-orange-600 shrink-0" />
              <span>Water repellency independently verified</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-orange-600 shrink-0" />
              <span>IS 390:1975 (RA 2022) testing compliance</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-orange-600 shrink-0" />
              <span>Government-recognised textile laboratory benchmarks</span>
            </div>
          </div>

        </div>
      </section>

      {/* 5. Beyond Water Resistant Tabs */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-5 sm:px-8 lg:px-14 border-b border-orange-100">
        <div className="flex items-center gap-2 mb-6">
          <button
            type="button"
            onClick={() => setActiveTab('water')}
            className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === 'water'
                ? 'bg-orange-600 text-white shadow-md shadow-orange-600/30'
                : 'bg-orange-50 hover:bg-orange-100 text-orange-900 border border-orange-200'
            }`}
          >
            Water Resistant
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('fabric')}
            className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === 'fabric'
                ? 'bg-orange-600 text-white shadow-md shadow-orange-600/30'
                : 'bg-orange-50 hover:bg-orange-100 text-orange-900 border border-orange-200'
            }`}
          >
            3 Layer Non Woven Fabric
          </button>
        </div>

        <div className="max-w-2xl space-y-3">
          <h2 className="font-editorial text-3xl sm:text-5xl font-normal text-stone-950 tracking-tight">
            Beyond Water Resistant.
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
            Waterproof covers react to water. Nexus resists it. The outer layer is rugged non woven at a material level so water is resisted on the surface, let alone seep through. This isn't a temporary chemical coating. It's built into every fibre. The difference: a water resistant cover gets wet and holds moisture. Nexus resists wetness completely.
          </p>
        </div>
      </section>

      {/* 6. What Nexus Protects Against (White & Orange Cards) */}
      <section className="py-16 sm:py-24 bg-white text-stone-900 border-b border-orange-100">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-14">
          
          <div className="max-w-2xl mb-12">
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] text-orange-600 block mb-2">
              THE PROTECTION ADVANTAGE
            </span>
            <h2 className="font-editorial text-3xl sm:text-5xl font-normal text-stone-950 tracking-tight">
              What Nexus protects against.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-orange-100 shadow-sm hover:shadow-lg hover:border-orange-300 transition-all space-y-2">
              <h3 className="text-base font-bold text-stone-950">Heat and Humidity</h3>
              <p className="text-xs text-stone-600 leading-relaxed font-normal">
                TPE mid-layer reflects heat out. Breathable micro-pores prevent condensation from accumulating over hot engines.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-orange-100 shadow-sm hover:shadow-lg hover:border-orange-300 transition-all space-y-2">
              <h3 className="text-base font-bold text-stone-950">Dust and Scratch</h3>
              <p className="text-xs text-stone-600 leading-relaxed font-normal">
                3-layer density stops airborne dust and particulate matter before they can settle or contact your clear coat.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-orange-100 shadow-sm hover:shadow-lg hover:border-orange-300 transition-all space-y-2">
              <h3 className="text-base font-bold text-stone-950">Paint safe inner lining</h3>
              <p className="text-xs text-stone-600 leading-relaxed font-normal">
                Ultra-soft spun cotton lining. Zero paint friction, zero swirl marks, and zero colour leaching under direct sun.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-orange-100 shadow-sm hover:shadow-lg hover:border-orange-300 transition-all space-y-2">
              <h3 className="text-base font-bold text-stone-950">Rugged and Dependable</h3>
              <p className="text-xs text-stone-600 leading-relaxed font-normal">
                Three layers that carry the weight of harsh elements with ease. Effortless single-person installation, every time.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 7. Measured for your vehicle */}
      <section className="py-16 sm:py-20 max-w-5xl mx-auto px-5 sm:px-8 lg:px-14 text-center space-y-3">
        <h2 className="font-editorial text-3xl sm:text-5xl font-normal text-stone-950 tracking-tight">
          Measured for your vehicle. Not vehicles in general.
        </h2>
        <p className="text-xs sm:text-sm text-stone-600 max-w-2xl mx-auto leading-relaxed font-normal">
          Every car model. Every 2-wheeler. Measured individually so the fit is exact, not approximate. A cover that doesn't fit isn't protection — it's just loose fabric. Nexus fits the way it was designed to: like it was made for yours specifically. Because it was.
        </p>
      </section>

      {/* 8. Integrated Vehicle Finder */}
      <VehicleFinder
        onSelectResult={(res) => setMatchingResult(res)}
        initialCoverTypeId="premium-waterproof"
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
