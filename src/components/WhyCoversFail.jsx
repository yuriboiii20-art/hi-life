import React from 'react';

const FAIL_CARDS = [
  {
    id: 1,
    title: "They Trap Heat",
    description: "Heat trapped beneath poor covers accelerates clear-coat oxidation, rubber drying, and interior cabin aging.",
    image: "/hi-life-assets/why-fail-heat.jpg"
  },
  {
    id: 2,
    title: "They Scratch Paint",
    description: "Rough unlined inner fabric grinds ambient dust particles into the clear coat, leaving permanent micro-swirls.",
    image: "/hi-life-assets/why-fail-scratch.jpg"
  },
  {
    id: 3,
    title: "They Seep Water",
    description: "Inferior single stitching and non-breathable plastic trap humidity and allow rainwater capillary seepage.",
    image: "/hi-life-assets/why-fail-water.jpg"
  },
  {
    id: 4,
    title: "They Blow Away in Winds",
    description: "Loose universal fits without heavy-duty underbody anchors balloon and rip off during stormy monsoon weather.",
    image: "/hi-life-assets/why-fail-wind.jpg"
  }
];

export default function WhyCoversFail() {
  return (
    <section className="py-16 sm:py-24 bg-white text-stone-900 font-sans select-none overflow-hidden border-b border-orange-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-2 mb-10 sm:mb-14">
          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] text-orange-600 block">
            THE PROBLEM WITH GENERIC COVERS
          </span>

          <h2 className="font-editorial text-3xl sm:text-5xl lg:text-6xl font-normal text-stone-950 tracking-tight">
            Why most covers fail
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 pt-1">
            Universal covers sold online often cause more paint damage than open weather exposure.
          </p>
        </div>

        {/* Horizontal Scrollable / Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {FAIL_CARDS.map((card) => (
            <div
              key={card.id}
              className="group bg-white rounded-2xl overflow-hidden border border-orange-100 shadow-sm hover:shadow-xl hover:shadow-orange-500/10 hover:border-orange-300 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Card Photo */}
              <div className="relative aspect-4/3 overflow-hidden bg-stone-100">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 px-2 py-0.5 rounded-full bg-orange-600 text-white text-[10px] font-bold tracking-wider">
                  FAILURE 0{card.id}
                </div>
              </div>

              {/* Card Text Content */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between bg-white">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-stone-950 group-hover:text-orange-600 transition-colors tracking-tight">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-stone-600 mt-2 leading-relaxed font-normal">
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Hi-Life Solution Banner in White & Orange */}
        <div className="mt-10 sm:mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-orange-500/10 via-orange-50 to-amber-500/10 border-2 border-orange-200 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <span className="text-[10px] font-bold tracking-widest uppercase text-orange-700 block">
              THE HI-LIFE REMEDY
            </span>
            <h4 className="font-editorial text-2xl sm:text-3xl text-stone-950 font-normal">
              Engineered to protect without compromise.
            </h4>
            <p className="text-xs sm:text-sm text-stone-600">
              Soft cotton fleece lining, breathable membrane, and windstorm center buckle.
            </p>
          </div>
          <a
            href="#vehicle-finder"
            className="px-6 py-3 rounded-xl bg-orange-600 hover:bg-orange-500 text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md shadow-orange-600/30 whitespace-nowrap cursor-pointer"
          >
            Find Custom Fit &rarr;
          </a>
        </div>

      </div>
    </section>
  );
}
