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
    <section className="py-12 sm:py-16 bg-white border-b border-stone-200/90 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-stone-950 tracking-tight">
              Fitment Showcase
            </h2>
            <p className="text-xs sm:text-sm text-stone-500 font-normal mt-1">
              Photographs of tailored covers across body types and fabric close-ups.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5">
            {GALLERY_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-stone-950 text-white'
                    : 'bg-stone-100 hover:bg-stone-200 text-stone-800 border border-stone-200'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {displayedItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setLightboxIndex(index)}
              className="group relative rounded-2xl overflow-hidden bg-stone-100 border border-stone-200/90 hover:border-stone-400 cursor-pointer transition-all duration-200"
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
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-950/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              {/* Details Content */}
              <div className="absolute bottom-0 inset-x-0 p-4 space-y-0.5 text-left text-white">
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400">
                  {item.subtitle}
                </span>
                <h3 className="text-sm sm:text-base font-bold leading-snug">
                  {item.title}
                </h3>
              </div>

            </div>
          ))}
        </div>

        {/* View full gallery CTA */}
        {showViewAll && (
          <div className="mt-8 text-center">
            <Link
              to="/gallery"
              className="inline-flex items-center gap-1.5 px-6 py-3 rounded-xl bg-stone-950 hover:bg-black text-white font-semibold text-xs uppercase tracking-wider shadow-sm transition-all"
            >
              <span>View All Photos</span>
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
