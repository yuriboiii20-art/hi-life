import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  MapPin, 
  Clock, 
  Car, 
  Bike, 
  Layers, 
  Wrench, 
  CheckCircle2, 
  Award, 
  Phone, 
  MessageCircle, 
  ArrowRight,
  Sparkles,
  Building2
} from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';

export default function About() {
  const productsAndServices = [
    {
      id: "car-covers",
      title: "Car Covers",
      badge: "Precision Fit",
      description: "Protect your car from dust, sunlight, dirt, and everyday environmental exposure with our range of car covers. Designed for convenience and protection, our covers are suitable for different car models and requirements.",
      icon: Car,
      image: "/products/camo-car-daylight.jpg"
    },
    {
      id: "scooter-covers",
      title: "Scooter & Two-Wheeler Covers",
      badge: "Everyday Defense",
      description: "Keep your scooter or two-wheeler protected when parked indoors or outdoors. Our scooter covers offer a practical solution to help keep your vehicle clean and shielded from dust and sunlight.",
      icon: Bike,
      image: "/products/camo-bike-covered.jpg"
    },
    {
      id: "tarpaulins",
      title: "Tarpaulin Products",
      badge: "Heavy-Duty Utility",
      description: "We offer tarpaulin products for a variety of covering and protection requirements, with solutions suitable for different industrial, commercial, transport, and domestic applications.",
      icon: Layers,
      image: "/products/camo-packaging-full.jpg"
    },
    {
      id: "manufacturing",
      title: "Manufacturing & Customised Solutions",
      badge: "Direct Factory",
      description: "At Hanuman Tarpaulins, we are directly involved in manufacturing, enabling us to cater to varied customer requirements. We focus on practical, durable products and aim to provide suitable solutions based on individual needs.",
      icon: Wrench,
      image: "/products/camo-car-shopfront.jpg"
    }
  ];

  const whyChooseUs = [
    {
      number: "01",
      title: "Over 20 Years of Industry Experience",
      desc: "Two decades of hands-on expertise in vehicle protection, tailoring, and fabric durability."
    },
    {
      number: "02",
      title: "Convenient Location at JC Road, Bangalore",
      desc: "Situated right in Bangalore's premier automotive hub for easy access, fitting, and consultations."
    },
    {
      number: "03",
      title: "Specialisation in Car and Scooter Covers",
      desc: "Laser-focused craftsmanship ensuring precise mirror contours, elastic grips, and wind locks."
    },
    {
      number: "04",
      title: "Manufacturing Expertise",
      desc: "In-house production capabilities that allow custom sizing, reinforced seams, and quality control."
    },
    {
      number: "05",
      title: "Products for Different Covering Requirements",
      desc: "From lightweight indoor dust sheets to 100% waterproof monsoon barriers and commercial tarpaulins."
    },
    {
      number: "06",
      title: "Focus on Quality, Durability & Satisfaction",
      desc: "Carefully selected raw materials that resist tearing, sun fading, and harsh Indian weather."
    },
    {
      number: "07",
      title: "Friendly Service and Value for Money",
      desc: "Direct, honest guidance to help you choose the right cover without paying inflated retail markups."
    }
  ];

  return (
    <div className="bg-white text-stone-900 font-sans min-h-screen">
      
      {/* 1. Hero Banner - White and Orange Editorial Heritage */}
      <section className="relative py-16 sm:py-24 bg-stone-950 text-white overflow-hidden border-b border-orange-500/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          
          {/* Official Hi-Life Logo */}
          <div className="flex flex-col items-center justify-center pb-2">
            <img 
              src="/logo.png" 
              alt="Hanuman Tarpaulins (Hi-Life) Logo" 
              className="h-16 sm:h-20 w-auto object-contain bg-white/95 rounded-2xl p-2 shadow-xl ring-2 ring-orange-500/40" 
            />
            <span className="font-editorial text-2xl sm:text-3xl font-bold tracking-tight text-white mt-2">
              Hi-Life
            </span>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-orange-200 text-xs font-semibold uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
            <span>ESTABLISHED IN BANGALORE • 20 YEARS OF EXCELLENCE</span>
          </div>

          <h1 className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-normal text-white tracking-tight leading-tight">
            Hanuman Tarpaulins
          </h1>

          <p className="font-editorial text-xl sm:text-2xl font-normal text-orange-400 max-w-2xl mx-auto tracking-normal italic">
            Quality Covers. Trusted Protection. 20 Years of Experience.
          </p>

          <p className="text-xs sm:text-sm text-stone-300 max-w-3xl mx-auto leading-relaxed font-normal pt-2">
            Your Trusted Destination for Car Covers, Scooter Covers & Tarpaulin Products in Bangalore. Located at JC Road.
          </p>

          {/* Quick Metrics Strip */}
          <div className="pt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xs text-center hover:border-orange-500/50 transition-colors">
              <span className="text-2xl sm:text-3xl font-black text-orange-400 block">20+</span>
              <span className="text-[11px] font-medium text-stone-300 uppercase tracking-wider">Years Experience</span>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xs text-center hover:border-orange-500/50 transition-colors">
              <span className="text-2xl sm:text-3xl font-black text-orange-400 block">JC Road</span>
              <span className="text-[11px] font-medium text-stone-300 uppercase tracking-wider">Bangalore Hub</span>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xs text-center hover:border-orange-500/50 transition-colors">
              <span className="text-2xl sm:text-3xl font-black text-orange-400 block">Custom</span>
              <span className="text-[11px] font-medium text-stone-300 uppercase tracking-wider">Manufacturing</span>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xs text-center hover:border-orange-500/50 transition-colors">
              <span className="text-2xl sm:text-3xl font-black text-orange-400 block">100%</span>
              <span className="text-[11px] font-medium text-stone-300 uppercase tracking-wider">Quality Focus</span>
            </div>
          </div>

        </div>
      </section>

      {/* 2. Welcome Story & Heritage */}
      <section className="py-14 sm:py-20 bg-white border-b border-orange-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-orange-800 text-[11px] font-bold uppercase tracking-wider">
                <Building2 className="w-3.5 h-3.5 text-orange-600" />
                <span>Our Heritage</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-black text-stone-950 tracking-tight leading-tight">
                Welcome to Hanuman Tarpaulins
              </h2>

              <p className="text-sm sm:text-base text-stone-700 leading-relaxed font-normal">
                Welcome to <strong className="text-stone-950">Hanuman Tarpaulins</strong>, located at <strong className="text-stone-950">JC Road, Bangalore</strong>. With over 20 years of experience in the industry, we specialize in supplying and manufacturing quality car covers, scooter covers, and a wide range of protective covering solutions.
              </p>

              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
                Our commitment to quality, durability, and customer satisfaction has helped us build lasting relationships with our customers. Whether you are looking for reliable protection for your vehicle or require customized covering solutions, we strive to deliver products that meet your needs.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <Link
                  to="/products"
                  className="px-6 py-3 rounded-xl bg-orange-600 hover:bg-orange-500 text-white text-xs font-bold uppercase tracking-wider transition-all inline-flex items-center gap-2 shadow-md shadow-orange-600/30"
                >
                  <span>Explore Our Covers</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <a
                  href={`https://wa.me/${BUSINESS_CONFIG.whatsapp.number}?text=${encodeURIComponent('Hello Hanuman Tarpaulins, I would like to enquire about your covers and tarpaulin products.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-900 text-xs font-bold transition-all inline-flex items-center gap-1.5"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  <span>Chat with JC Road Store</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden bg-stone-100 border border-stone-200 shadow-md aspect-[4/3]">
                <img
                  src="/products/camo-car-full-sidefit.jpg"
                  alt="Hanuman Tarpaulins Custom Car Cover Fitment"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-xs uppercase tracking-wider text-orange-400 font-bold">Bangalore Workshop</p>
                  <p className="text-sm font-bold text-white">Precision Tailored for Every Vehicle Curve</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Products & Services Section */}
      <section className="py-14 sm:py-20 bg-white border-b border-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-2 mb-12">
            <span className="text-[11px] font-bold uppercase tracking-widest text-orange-600">
              Complete Protection Solutions
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-stone-950 tracking-tight">
              Our Products & Services
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 font-normal">
              Specialized covering solutions manufactured and tailored for diverse automotive and industrial requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {productsAndServices.map((item) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={item.id}
                  className="rounded-3xl bg-white border border-stone-200/90 p-6 sm:p-7 shadow-xs hover:border-orange-400 hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-orange-50 border border-orange-100 text-orange-600 flex items-center justify-center shadow-xs">
                        <IconComponent className="w-6 h-6 text-orange-600" />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-orange-50 text-orange-800 border border-orange-200">
                        {item.badge}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-stone-950 tracking-tight">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-5 mt-5 border-t border-stone-100 flex items-center justify-between">
                    <Link
                      to="/products"
                      className="text-xs font-bold text-stone-900 hover:text-orange-600 inline-flex items-center gap-1 transition-colors"
                    >
                      <span>Explore Options</span>
                      <ArrowRight className="w-3.5 h-3.5 text-orange-600" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 4. Why Choose Hanuman Tarpaulins? (7 Key Points) */}
      <section className="py-14 sm:py-20 bg-white border-b border-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-2 mb-12">
            <span className="text-[11px] font-bold uppercase tracking-widest text-orange-600">
              The Benchmark of Reliability
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-stone-950 tracking-tight">
              Why Choose Hanuman Tarpaulins?
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 font-normal">
              Built on 20 years of craftsmanship, honest advice, and proven durability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyChooseUs.map((pillar) => (
              <div
                key={pillar.number}
                className="p-6 rounded-3xl bg-stone-50 border border-stone-200/90 hover:border-stone-400 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-black text-stone-400">
                      {pillar.number}
                    </span>
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  </div>

                  <h3 className="text-sm sm:text-base font-bold text-stone-950">
                    {pillar.title}
                  </h3>

                  <p className="text-xs text-stone-600 mt-2 leading-relaxed font-normal">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}

            {/* Extra Trust Highlight Box */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-orange-600 to-amber-600 text-white flex flex-col justify-between shadow-xl shadow-orange-500/20 border border-orange-500">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-orange-100 font-bold block mb-2">
                  OUR PROMISE
                </span>
                <h3 className="text-base sm:text-lg font-black text-white">
                  “Protecting Your Vehicles, Delivering Quality for Over 20 Years.”
                </h3>
                <p className="text-xs text-orange-50 mt-2 font-normal leading-relaxed">
                  We believe in building trust through quality products, reliable service, and a commitment to customer satisfaction.
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-orange-500/40 text-[11px] text-orange-100 font-semibold">
                Serving Bangalore since 2005
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 5. Serving Bangalore for Over 20 Years narrative */}
      <section className="py-14 sm:py-20 bg-white border-b border-orange-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <div className="w-14 h-14 rounded-full bg-orange-50 text-orange-600 border border-orange-200 flex items-center justify-center mx-auto shadow-xs">
            <Award className="w-7 h-7" />
          </div>

          <h2 className="text-2xl sm:text-4xl font-black text-stone-950 tracking-tight">
            Serving Bangalore for Over 20 Years
          </h2>

          <p className="text-sm sm:text-base text-stone-700 leading-relaxed font-normal">
            Over the past two decades, <strong className="text-stone-950">Hanuman Tarpaulins</strong> has continued to serve customers looking for dependable vehicle covers and tarpaulin products. Our experience helps us understand customer needs and recommend suitable products for everyday use.
          </p>

          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
            We believe in building trust through quality products, reliable service, and a commitment to customer satisfaction.
          </p>
        </div>
      </section>

      {/* 6. Visit Hanuman Tarpaulins Today (Store Location Card) */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="rounded-3xl bg-stone-950 text-white p-6 sm:p-10 shadow-2xl border border-stone-800 space-y-6">
            
            <div className="space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-orange-400 block">
                JC Road, Bangalore Store
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                Visit Hanuman Tarpaulins Today
              </h2>
              <p className="text-xs sm:text-sm text-stone-300 font-normal leading-relaxed">
                Looking for car covers, scooter covers, or tarpaulin products in Bangalore? Visit Hanuman Tarpaulins at JC Road, Bangalore, and explore our range of products and manufacturing solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs pt-2">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-3">
                <MapPin className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-white text-sm">Store Address</p>
                  <p className="text-stone-300 mt-1">{BUSINESS_CONFIG.address.fullAddress}</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-3">
                <Clock className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-white text-sm">Working Hours</p>
                  <p className="text-stone-300 mt-1">{BUSINESS_CONFIG.businessHours}</p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-stone-400 italic font-medium">
                “Hanuman Tarpaulins — Protecting Your Vehicles, Delivering Quality for Over 20 Years.”
              </p>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <a
                  href={`tel:${BUSINESS_CONFIG.phone}`}
                  className="flex-1 sm:flex-initial px-5 py-2.5 rounded-xl bg-white hover:bg-stone-100 text-stone-950 font-bold text-xs uppercase tracking-wider text-center transition-all shadow-xs"
                >
                  Call Store
                </a>
                <a
                  href={`https://wa.me/${BUSINESS_CONFIG.whatsapp.number}?text=${encodeURIComponent('Hello Hanuman Tarpaulins, I am visiting your JC Road store for custom covers.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-initial px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider text-center transition-all shadow-xs flex items-center justify-center gap-1.5"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
