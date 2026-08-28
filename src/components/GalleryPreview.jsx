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
    <section className="py-16 sm:py-20 bg-white border-b border-slate-200 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#eef2ff] border border-[#c7d2fe] text-[#19277c] text-xs font-bold uppercase tracking-wider">
              <Camera className="w-3.5 h-3.5 text-[#f97316]" />
              <span>Real Fitment Gallery</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#19277c] tracking-tight">
              Precision Fit in Action
            </h2>

            <p className="text-sm sm:text-base text-slate-600 font-normal">
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
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  activeCategory === cat.id
                    ? 'bg-[#19277c] text-white shadow-sm'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200'
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
              className="group relative rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 hover:border-[#19277c]/40 shadow-sm hover:shadow-md cursor-pointer transition-all duration-200"
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Zoom Pill */}
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="p-2 rounded-full bg-white/90 text-[#19277c] shadow flex items-center justify-center">
                  <Maximize2 className="w-4 h-4 stroke-[2.5]" />
                </span>
              </div>

              {/* Details Content */}
              <div className="absolute bottom-0 inset-x-0 p-4 space-y-1 text-left text-white">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#47c7f1]">
                  {item.subtitle}
                </span>
                <h3 className="text-sm sm:text-base font-bold leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-300 line-clamp-1 font-normal">
                  {item.caption}
                </p>
              </div>

            </div>
          ))}
        </div>

        {/* View Full Gallery Link */}
        {showViewAll && (
          <div className="mt-10 text-center">
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-extrabold text-xs uppercase tracking-wider border border-slate-300 transition-all hover:scale-[1.01]"
            >
              <span>Explore Complete Gallery ({GALLERY_ITEMS.length} Photos)</span>
              <ArrowRight className="w-4 h-4 text-[#19277c]" />
            </Link>
          </div>
        )}

      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        items={displayedItems}
        activeIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={(newIndex) => setLightboxIndex(newIndex)}
      />
    </section>
  );
}
