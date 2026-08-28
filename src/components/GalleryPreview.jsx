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
    <section className="py-16 sm:py-20 bg-white border-b border-neutral-200 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black text-white text-xs font-bold uppercase tracking-wider shadow-sm">
              <Camera className="w-3.5 h-3.5 text-white" />
              <span>Real Fitment Gallery</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-black tracking-tight">
              Precision Fit in Action
            </h2>

            <p className="text-sm sm:text-base text-neutral-600 font-normal">
              Explore actual fitted covers on SUVs, executive sedans, hatchbacks, and inspect our close-up hardware and fabric craftsmanship.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5">
            {GALLERY_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  activeCategory === cat.id
                    ? 'bg-black text-white shadow-md'
                    : 'bg-neutral-100 hover:bg-neutral-200 text-black border border-neutral-300'
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
              className="group relative rounded-2xl overflow-hidden bg-neutral-100 border border-neutral-200 hover:border-black shadow-sm hover:shadow-xl cursor-pointer transition-all duration-200"
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              {/* Zoom Pill */}
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="p-2 rounded-full bg-white text-black shadow-lg flex items-center justify-center">
                  <Maximize2 className="w-4 h-4 stroke-[2.5]" />
                </span>
              </div>

              {/* Details Content */}
              <div className="absolute bottom-0 inset-x-0 p-4 space-y-1 text-left text-white">
                <span className="text-[10px] font-black uppercase tracking-wider text-neutral-300">
                  {item.subtitle}
                </span>
                <h3 className="text-sm sm:text-base font-black leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-neutral-300 line-clamp-1 font-normal">
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
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-black hover:bg-neutral-800 text-white font-black text-xs sm:text-sm uppercase tracking-wider shadow-lg transition-all hover:scale-[1.01]"
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
