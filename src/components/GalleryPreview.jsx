import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Camera, Maximize2, ArrowRight, Eye } from 'lucide-react';
import { GALLERY_CATEGORIES, GALLERY_ITEMS } from '../data/gallery';
import LightboxModal from './LightboxModal';

export default function GalleryPreview({ limit = 6, showViewAll = true }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filteredItems = activeCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  const displayedItems = limit ? filteredItems.slice(0, limit) : filteredItems;

  return (
    <section className="py-16 sm:py-24 bg-[#fafaf9] border-b border-stone-200/90 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-stone-100 border border-stone-200 text-stone-800 text-xs font-bold uppercase tracking-wider shadow-sm">
              <Camera className="w-3.5 h-3.5 text-amber-600" />
              <span>Real Fitment Gallery</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-stone-950 tracking-tight">
              Precision Fit in Action
            </h2>

            <p className="text-sm sm:text-base text-stone-600 font-normal leading-relaxed">
              Explore actual fitted covers on SUVs, executive sedans, hatchbacks, and inspect our close-up hardware and fabric craftsmanship.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {GALLERY_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-stone-950 text-white shadow-sm'
                    : 'bg-white hover:bg-stone-100 text-stone-800 border border-stone-200 shadow-sm'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setLightboxIndex(index)}
              className="group relative rounded-3xl overflow-hidden bg-stone-100 border border-stone-200/90 hover:border-stone-400 shadow-[0_4px_20px_-4px_rgba(28,25,23,0.05)] hover:shadow-xl cursor-pointer transition-all duration-300"
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              {/* Zoom Pill */}
              <div className="absolute top-3.5 right-3.5 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="p-2.5 rounded-full bg-white text-stone-950 shadow-md flex items-center justify-center">
                  <Maximize2 className="w-4 h-4 stroke-[2.5]" />
                </span>
              </div>

              {/* Details Content */}
              <div className="absolute bottom-0 inset-x-0 p-5 space-y-1 text-left text-white">
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400">
                  {item.subtitle}
                </span>
                <h3 className="text-sm sm:text-base font-black leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-stone-300 line-clamp-1 font-normal">
                  {item.caption}
                </p>
              </div>

            </div>
          ))}
        </div>

        {/* View full gallery CTA */}
        {showViewAll && (
          <div className="mt-12 text-center">
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-stone-950 hover:bg-black text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-md transition-all hover:scale-[1.01]"
            >
              <span>Explore Complete HD Gallery (12+ Angles)</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}

      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <LightboxModal
          items={displayedItems}
          activeIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={(newIndex) => setLightboxIndex(newIndex)}
        />
      )}
    </section>
  );
}
