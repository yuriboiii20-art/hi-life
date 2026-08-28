import React, { useState } from 'react';
import { 
  PhoneCall, 
  HelpCircle, 
  ChevronDown, 
  ShieldCheck, 
  MessageCircle, 
  Truck, 
  Clock, 
  RotateCcw 
} from 'lucide-react';
import ContactForm from '../components/ContactForm';
import { BUSINESS_CONFIG } from '../config/business';

export default function Contact() {
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const faqs = [
    {
      question: "How do I know if the cover will accurately fit my specific car model?",
      answer: "Every Hi-Life cover is laser-cut to the specific dimensions of your selected brand, model, and generation. We incorporate exact mirror pockets and front-rear elastic curves tailored for your vehicle bumper profile."
    },
    {
      question: "Is the Premium Waterproof Cover completely leakproof during heavy rains?",
      answer: "Yes. Our Premium Waterproof and Heavy-Duty Outdoor covers feature a 100% waterproof TPU membrane and heat-taped ultrasonic seam seals designed to withstand continuous torrential rain without capillary leakage."
    },
    {
      question: "Will the cover fabric scratch my ceramic coating or car paint?",
      answer: "No. Hi-Life covers are lined with an ultra-soft, spun cotton fleece interior that creates a gentle cushion against your vehicle clear-coat, ceramic coat, or PPF."
    },
    {
      question: "How long does shipping and delivery take across India?",
      answer: "Orders are prepared and dispatched from our central hub within 24–48 hours. Standard express door-step delivery takes 3–5 business days depending on your pincode with active tracking."
    },
    {
      question: "What if I have aftermarket roof rails, a spoiler, or a front guard?",
      answer: "You can mention your vehicle modifications in the enquiry form or message us directly on WhatsApp. We can adjust the dimensional tailoring accordingly."
    }
  ];

  return (
    <div className="bg-[#fafaf9] text-stone-900 font-sans min-h-screen">
      
      {/* Header Banner */}
      <section className="relative py-14 lg:py-20 bg-gradient-to-b from-stone-950 via-stone-900 to-stone-950 text-white border-b border-stone-800 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
            <PhoneCall className="w-3.5 h-3.5" />
            <span>Customer Assistance</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Contact Hi-Life Support
          </h1>

          <p className="text-sm sm:text-base text-stone-300 mt-2 leading-relaxed font-normal">
            Need custom fitting advice, delivery assistance, or order status? Reach out via form or instant WhatsApp.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-12 sm:py-16 bg-[#fafaf9] border-b border-stone-200/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm />
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-2 mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-700 flex items-center justify-center gap-1.5">
              <HelpCircle className="w-4 h-4 text-amber-600" />
              <span>Common Inquiries</span>
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-stone-950">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3.5">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-3xl bg-stone-50 border border-stone-200/90 overflow-hidden transition-all shadow-[0_2px_10px_-2px_rgba(28,25,23,0.03)]"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-stone-900 hover:text-stone-950 transition-colors cursor-pointer"
                  >
                    <span className="text-sm sm:text-base font-bold">{faq.question}</span>
                    <ChevronDown className={`w-5 h-5 text-stone-700 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-stone-950' : ''
                    }`} />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-stone-600 border-t border-stone-200 pt-3.5 leading-relaxed font-normal">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

    </div>
  );
}
