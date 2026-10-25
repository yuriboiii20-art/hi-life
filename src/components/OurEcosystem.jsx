import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Car, Bike, Layers, ShieldCheck } from 'lucide-react';

export default function OurEcosystem({ onSelectCategory }) {
  const categories = [
    {
      id: "cars",
      title: "Car Covers",
      subtitle: "Cars & SUVs",
      description: "Precision-tailored covers engineered to preserve your car from harsh Indian sun, monsoons, and micro-scratches.",
      image: "/products/camo-car-daylight.jpg",
      badge: "250+ Models Covered",
      link: "/products"
    },
    {
      id: "bikes",
      title: "Bike Covers",
      subtitle: "Scooters & Motorcycles",
      description: "Lightweight, heavy-duty covers designed for dependable everyday defense against rain, dust, and UV fading.",
      image: "/products/camo-bike-covered.jpg",
      badge: "Custom Handlebar Fit",
      link: "/products"
    },
    {
      id: "tarpaulins",
      title: "Tarpaulins & Custom Solutions",
      subtitle: "JC Road Bangalore Manufacturing",
      description: "Commercial and heavy-duty industrial tarpaulin solutions manufactured to your exact dimensional specifications.",
      image: "/products/camo-packaging-full.jpg",
      badge: "20 Years Craftsmanship",
      link: "/about"
    }
  ];

  return (
    <section className="py-14 sm:py-20 bg-white border-b border-stone-200/90 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-10">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-widest text-orange-600 block mb-1">
              THE PRODUCT SPECTRUM
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-stone-950 tracking-tight">
              Our Ecosystem
            </h2>
            <p className="text-xs sm:text-sm text-stone-500 font-normal mt-1">
              Premium covers engineered to preserve your vehicle every day.
            </p>
          </div>

          <Link
            to="/products"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-stone-900 hover:text-orange-600 uppercase tracking-wider underline cursor-pointer"
          >
            <span>View Full Catalogue</span>
            <ArrowRight className="w-3.5 h-3.5 text-orange-600" />
          </Link>
        </div>

        {/* 3 Large Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={cat.link}
              className="group rounded-3xl overflow-hidden bg-white border border-stone-200/90 hover:border-orange-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent" />
                <span className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-stone-900/90 text-white text-[10px] font-bold uppercase tracking-wider backdrop-blur-md">
                  {cat.badge}
                </span>
                <span className="absolute bottom-3.5 left-3.5 text-xs font-bold uppercase tracking-wider text-orange-400">
                  {cat.subtitle}
                </span>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-xl font-black text-stone-950 tracking-tight group-hover:text-orange-600 transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 font-normal leading-relaxed mt-2">
                    {cat.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-200/60 flex items-center justify-between text-xs font-bold text-stone-900">
                  <span className="uppercase tracking-wider">Explore Category</span>
                  <span className="w-8 h-8 rounded-full bg-orange-600 group-hover:bg-orange-700 text-white flex items-center justify-center transition-all group-hover:translate-x-1 shadow-sm">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
