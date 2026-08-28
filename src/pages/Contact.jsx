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
    <div className="bg-[#f4f6f8] text-slate-800 font-sans min-h-screen">
      
      {/* Header Banner */}
      <section className="relative py-14 lg:py-18 bg-gradient-to-r from-[#101744] via-[#19277c] to-[#16215b] text-white border-b border-[#243599] text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#47c7f1] text-xs font-extrabold uppercase tracking-wider mb-3">
            <PhoneCall className="w-3.5 h-3.5" />
            <span>Customer Assistance</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Contact Hi-Life Support
          </h1>

          <p className="text-sm sm:text-base text-slate-200 mt-2 leading-relaxed font-normal">
            Need custom fitting advice, delivery assistance, or order status? Reach out via form or instant WhatsApp.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-12 sm:py-16 bg-[#f4f6f8] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm />
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-14 sm:py-18 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-2 mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#19277c] flex items-center justify-center gap-1.5">
              <HelpCircle className="w-4 h-4" />
              <span>Common Inquiries</span>
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-xl bg-slate-50 border border-slate-200 overflow-hidden transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-slate-900 hover:text-[#19277c] transition-colors"
                  >
                    <span className="text-sm sm:text-base">{faq.question}</span>
                    <ChevronDown className={`w-5 h-5 text-slate-500 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#19277c]' : ''
                    }`} />
                  </button>

                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 border-t border-slate-200 leading-relaxed font-normal">
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
