import React, { useState } from 'react';
import { Camera, Maximize2, Sparkles, Filter } from 'lucide-react';
import { GALLERY_CATEGORIES, GALLERY_ITEMS } from '../data/gallery';
import LightboxModal from '../components/LightboxModal';
import FinalCTA from '../components/FinalCTA';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filteredItems = activeCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <div className="bg-[#fafaf9] text-stone-900 font-sans min-h-screen">
      
      {/* Header Banner */}
      <section className="relative py-14 lg:py-20 bg-gradient-to-b from-stone-950 via-stone-900 to-stone-950 text-white border-b border-stone-800 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Camera className="w-3.5 h-3.5" />
            <span>Fitment Gallery</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Hi-Life Vehicle Showcase
          </h1>

          <p className="text-sm sm:text-base text-stone-300 mt-2 leading-relaxed font-normal">
            Browse real photographs of custom-tailored covers across Indian car body types, fabric close-ups, mirror pockets, and storm lock belts.
          </p>
        </div>
      </section>

      {/* Main Gallery */}
      <section className="py-12 sm:py-16 bg-white border-b border-stone-200/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Category Filter Bar */}
          <div className="flex flex-wrap items-center justify-center gap-2 pb-8 border-b border-stone-200">
            {GALLERY_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-stone-950 text-white shadow-sm scale-105'
                    : 'bg-stone-100 hover:bg-stone-200 text-stone-800 border border-stone-200'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-10">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                onClick={() => setLightboxIndex(index)}
                className="group relative rounded-3xl overflow-hidden bg-stone-100 border border-stone-200/90 hover:border-stone-400 shadow-[0_4px_20px_-4px_rgba(28,25,23,0.05)] hover:shadow-xl cursor-pointer transition-all duration-300"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                <div className="absolute top-3.5 right-3.5 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="p-2.5 rounded-full bg-white text-stone-950 shadow-md flex items-center justify-center">
                    <Maximize2 className="w-4 h-4 stroke-[2.5]" />
                  </span>
                </div>

                <div className="absolute bottom-0 inset-x-0 p-5 space-y-1.5 text-left text-white">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400">
                    {item.subtitle}
                  </span>
                  <h3 className="text-base font-black leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-stone-300 font-normal">
                    {item.caption}
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-1.5">
                    {item.tags.map((tag, idx) => (
                      <span key={idx} className="text-[9px] font-bold text-stone-200 bg-white/20 px-2 py-0.5 rounded">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Lightbox Modal */}
      <LightboxModal
        items={filteredItems}
        activeIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={(newIdx) => setLightboxIndex(newIdx)}
      />

      {/* Final CTA */}
      <FinalCTA />

    </div>
  );
}
