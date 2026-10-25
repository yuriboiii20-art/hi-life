import React, { useState } from 'react';
import { ChevronDown, MessageCircle, Phone, MapPin } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';

const FAQ_ITEMS = [
  {
    category: "Fitment & Compatibility",
    question: "Will the cover fit my specific car model and year?",
    answer: "Yes, absolutely. We do not manufacture generic 'universal' covers. Each cover pattern is cut specifically according to your vehicle's make, model, year, body type, side-mirror placement, and roof antenna contour. With over 20 years on JC Road Bangalore, our database spans over 250+ Indian vehicle silhouettes."
  },
  {
    category: "Fitment & Compatibility",
    question: "How does the antenna pocket work for Sharkfin vs Standard mast antennas?",
    answer: "During ordering, you can select whether your vehicle has a Sharkfin antenna or a traditional whip/mast antenna. For Sharkfin antennas, the cover is shaped to glide smoothly over the roof without excess bulging. For standard tall antennas, a dedicated reinforced antenna pocket is tailored right into the roof seam."
  },
  {
    category: "Materials & Protection",
    question: "Will the cover scratch my car's paint, ceramic coating, or PPF?",
    answer: "Never. Both our Nexus and Plasma covers feature a plush, non-abrasive cotton fleece inner lining. This soft white layer acts as a gentle cushion between the cover and your car's clear-coat, eliminating the micro-swirl friction common with cheap synthetic covers."
  },
  {
    category: "Materials & Protection",
    question: "Is the cover 100% waterproof in heavy monsoon rains?",
    answer: "Our Premium Waterproof, Nexus, and Plasma models feature high-density hydrophobic multi-layer membranes with heat-sealed taped seams. Water beads up on the surface and rolls off immediately without soaking into the fibers or penetrating seam stitches."
  },
  {
    category: "Orders & Shipping",
    question: "When will I receive my order?",
    answer: "Orders are tailored and dispatched within 24–48 hours from our Bangalore facility. Customers in Bangalore and major South Indian cities typically receive delivery within 24–48 hours. Standard express shipping across the rest of India takes 3–5 working days. Express shipping is 100% FREE on all orders."
  },
  {
    category: "Orders & Shipping",
    question: "What is your return and replacement policy?",
    answer: "We offer a 7-day hassle-free replacement guarantee. If you experience any fitment issue or manufacturing defect, simply contact our support team on WhatsApp with a quick photo of the fitment on your car, and we will dispatch a replacement pattern free of charge."
  },
  {
    category: "Store & Pickups",
    question: "Can I inspect the fabrics or pick up my cover in Bangalore?",
    answer: "Yes! You are welcome to visit our physical flagship store at Hanuman Tarpaulins, No.84/5 Manish Tower, JC Road, Bangalore. Our team can guide you through the fabric swatches and assist with live on-vehicle trial fitment."
  }
];

export default function FAQ() {
  const [openIndices, setOpenIndices] = useState([0, 4]);

  const toggleAccordion = (idx) => {
    setOpenIndices((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  return (
    <div className="bg-white text-stone-900 font-sans select-none overflow-x-hidden">
      
      {/* Header */}
      <section className="py-16 sm:py-24 max-w-4xl mx-auto px-5 sm:px-8 text-center space-y-4">
        <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] text-orange-600 block">
          HELP & COMMON INQUIRIES
        </span>

        <h1 className="font-editorial text-4xl sm:text-6xl font-normal text-stone-950 tracking-tight">
          Frequently Asked Questions
        </h1>

        <p className="text-xs sm:text-sm text-stone-600 max-w-xl mx-auto leading-relaxed font-normal">
          Everything you need to know about our custom vehicle patterns, fabric layers, Bangalore JC Road store, and shipping policies.
        </p>
      </section>

      {/* Accordion List */}
      <section className="max-w-3xl mx-auto px-5 sm:px-8 pb-20 space-y-3">
        {FAQ_ITEMS.map((item, idx) => {
          const isOpen = openIndices.includes(idx);

          return (
            <div
              key={idx}
              className={`bg-white rounded-2xl border transition-all ${
                isOpen ? 'border-orange-300 shadow-md' : 'border-stone-200 hover:border-orange-200'
              }`}
            >
              <button
                type="button"
                onClick={() => toggleAccordion(idx)}
                className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
              >
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-orange-600 block mb-1">
                    {item.category}
                  </span>
                  <h3 className="text-sm sm:text-base font-bold text-stone-950">
                    {item.question}
                  </h3>
                </div>

                <div className={`p-1.5 rounded-full transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180 bg-orange-600 text-white shadow-xs' : 'bg-stone-100 text-stone-600'}`}>
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>

              {isOpen && (
                <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-stone-600 leading-relaxed font-normal border-t border-orange-50 animate-in fade-in duration-150">
                  {item.answer}
                </div>
              )}
            </div>
          );
        })}

        {/* Contact Help Box in White & Orange */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-orange-50 via-white to-amber-50 border-2 border-orange-200 text-stone-900 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
          <div className="space-y-1 text-center sm:text-left">
            <span className="text-[10px] font-bold tracking-widest uppercase text-orange-700 block">
              NEED DIRECT ASSISTANCE?
            </span>
            <h4 className="text-base sm:text-xl font-bold text-stone-950 font-editorial">
              Still have questions about your vehicle fit?
            </h4>
            <p className="text-xs text-stone-600">
              Speak directly with our JC Road master craftsmen on WhatsApp or over phone.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`https://wa.me/${BUSINESS_CONFIG.whatsapp.number}?text=${encodeURIComponent('Hello Hanuman Tarpaulins, I have a question regarding vehicle cover fitment.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-500 text-white text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all shadow-md shadow-orange-600/25"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Us</span>
            </a>
            <a
              href={`tel:${BUSINESS_CONFIG.phone}`}
              className="px-4 py-2.5 rounded-xl bg-white hover:bg-orange-50 text-stone-900 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 border border-stone-300 hover:border-orange-300 transition-all shadow-xs"
            >
              <Phone className="w-4 h-4 text-orange-600" />
              <span>Call Store</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
