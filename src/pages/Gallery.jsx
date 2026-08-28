import React, { useState } from 'react';
import { Camera, Maximize2 } from 'lucide-react';
import { GALLERY_CATEGORIES, GALLERY_ITEMS } from '../data/gallery';
import LightboxModal from '../components/LightboxModal';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filteredItems = activeCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <div className="bg-[#fafaf9] text-stone-900 font-sans min-h-screen">
      
      {/* Compact Header Banner */}
      <section className="relative py-8 sm:py-12 bg-stone-950 text-white border-b border-stone-800 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-stone-200 text-[10px] sm:text-xs font-semibold uppercase tracking-wider mb-2">
            <Camera className="w-3.5 h-3.5 text-amber-400" />
            <span>Fitment Showcase</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            Hi-Life Vehicle Gallery
          </h1>

          <p className="text-xs sm:text-sm text-stone-300 mt-2 max-w-xl mx-auto leading-relaxed font-normal">
            Real fitment photographs across hatchbacks, sedans, compact SUVs, mirror pockets, and storm lock clips.
          </p>
        </div>
      </section>

      {/* Main Gallery */}
      <section className="py-6 sm:py-10 bg-white border-b border-stone-200/90">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          
          {/* Category Filter Bar */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 pb-5 border-b border-stone-200">
            {GALLERY_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-stone-950 text-white shadow-xs'
                    : 'bg-stone-100 hover:bg-stone-200 text-stone-800 border border-stone-200'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Compact Photo Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4 pt-6">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                onClick={() => setLightboxIndex(index)}
                className="group relative rounded-2xl overflow-hidden bg-stone-100 border border-stone-200 hover:border-stone-400 shadow-xs cursor-pointer transition-all"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/20 to-transparent opacity-75 group-hover:opacity-90 transition-opacity" />

                <div className="absolute top-2.5 right-2.5 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="p-1.5 rounded-full bg-white/90 text-stone-950 shadow-xs flex items-center justify-center">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </span>
                </div>

                <div className="absolute bottom-0 inset-x-0 p-3 text-white space-y-0.5">
                  <span className="text-[9px] font-bold uppercase tracking-wider text-amber-300">
                    {item.subtitle}
                  </span>
                  <h3 className="text-xs sm:text-sm font-bold text-white leading-tight">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <LightboxModal
          items={filteredItems}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={(newIndex) => setLightboxIndex(newIndex)}
        />
      )}

    </div>
  );
}
