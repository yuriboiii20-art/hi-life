import React, { useState } from 'react';
import { 
  PhoneCall, 
  HelpCircle, 
  ChevronDown 
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
      
      {/* Compact Header Banner */}
      <section className="relative py-8 sm:py-12 bg-stone-950 text-white border-b border-stone-800 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-stone-200 text-[10px] sm:text-xs font-semibold uppercase tracking-wider mb-2">
            <PhoneCall className="w-3.5 h-3.5 text-amber-400" />
            <span>Customer Assistance</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            Contact Hi-Life Support
          </h1>

          <p className="text-xs sm:text-sm text-stone-300 mt-2 max-w-xl mx-auto leading-relaxed font-normal">
            Need custom fitting advice, delivery assistance, or order status? Reach out via form or instant WhatsApp.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-6 sm:py-10 bg-[#fafaf9] border-b border-stone-200/90">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <ContactForm />
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-8 sm:py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          
          <div className="text-center space-y-1 mb-6">
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-amber-700 flex items-center justify-center gap-1">
              <HelpCircle className="w-3.5 h-3.5 text-amber-600" />
              <span>Common Inquiries</span>
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-stone-950">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-2">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-xl bg-stone-50 border border-stone-200/90 overflow-hidden transition-all"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full p-3.5 text-left flex items-center justify-between gap-3 font-bold text-stone-900 hover:text-stone-950 transition-colors cursor-pointer text-xs sm:text-sm"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown className={`w-4 h-4 text-stone-600 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-stone-950' : ''
                    }`} />
                  </button>

                  {isOpen && (
                    <div className="px-3.5 pb-3.5 text-xs text-stone-600 font-normal leading-relaxed border-t border-stone-100 pt-2.5">
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
