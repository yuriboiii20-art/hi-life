import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Truck, 
  Lock, 
  MapPin, 
  Phone, 
  Mail, 
  MessageCircle, 
  Award,
  Clock,
  ArrowRight
} from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-stone-300 font-sans border-t border-stone-800">
      
      {/* 1. Value Ribbon (Oenum Clean High-Trust Banner) */}
      <div className="border-b border-stone-800 bg-[#0d0d0d] py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-xs">
            
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-2xl bg-white/5 border border-white/10 text-amber-400">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <p className="font-bold text-white text-xs">20+ Years Experience</p>
                <p className="text-stone-400 text-[11px]">Bangalore's trusted hub</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-2xl bg-white/5 border border-white/10 text-amber-400">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <p className="font-bold text-white text-xs">100% Custom Tailored</p>
                <p className="text-stone-400 text-[11px]">250+ vehicle contours</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-2xl bg-white/5 border border-white/10 text-amber-400">
                <Truck className="w-5 h-5" />
              </div>
              <div>
                <p className="font-bold text-white text-xs">Free Pan-India Delivery</p>
                <p className="text-stone-400 text-[11px]">Direct express dispatch</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-2xl bg-white/5 border border-white/10 text-amber-400">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div>
                <p className="font-bold text-white text-xs">JC Road Direct Support</p>
                <p className="text-stone-400 text-[11px]">Instant fitting guidance</p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* 2. Main Footer Navigation Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="inline-block group focus:outline-none">
              <div className="flex items-center gap-3">
                <img 
                  src="/logo.png" 
                  alt="Hanuman Tarpaulins Logo" 
                  className="h-12 w-auto object-contain transition-transform group-hover:scale-105"
                />
                <div>
                  <h3 className="text-base font-black text-white uppercase tracking-tight">
                    Hanuman Tarpaulins
                  </h3>
                  <p className="text-[10px] text-amber-400 font-bold uppercase tracking-wider">
                    JC Road, Bangalore • 20 Years
                  </p>
                </div>
              </div>
            </Link>

            <p className="text-xs text-stone-400 leading-relaxed max-w-sm font-normal">
              Your Trusted Destination for Car Covers, Scooter Covers & Tarpaulin Products in Bangalore. Quality Covers. Trusted Protection.
            </p>

            <div className="pt-2">
              <a
                href={`https://wa.me/${BUSINESS_CONFIG.whatsapp.number}?text=${encodeURIComponent('Hello Hanuman Tarpaulins, I have an enquiry regarding covers.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-xs"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Column 2: Products */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Cover Categories
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>
                <Link to="/products" className="hover:text-white transition-colors">
                  Standard All-Weather Cover
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-white transition-colors">
                  Premium Waterproof Monsoonal Cover
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-white transition-colors">
                  UV Shield Solar Deflector Cover
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-white transition-colors">
                  Heavy-Duty Military Outdoor Armor
                </Link>
              </li>
              <li>
                <Link to="/products?category=two-wheeler-camo" className="hover:text-white transition-colors">
                  Two-Wheeler & Scooter Covers
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  Custom Tarpaulin Manufacturing
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Trust & Company */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Company
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  Why Hanuman Tarpaulins
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-white transition-colors">
                  Fitment Showcase
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Support & Inquiries
                </Link>
              </li>
              <li>
                <a href="#vehicle-finder" className="hover:text-white transition-colors">
                  Vehicle Finder
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Bangalore Store Details */}
          <div className="lg:col-span-3 space-y-3 text-xs">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Bangalore Hub
            </h4>
            
            <div className="space-y-2 text-stone-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{BUSINESS_CONFIG.address.fullAddress}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`tel:${BUSINESS_CONFIG.phone}`} className="hover:text-white font-medium">
                  {BUSINESS_CONFIG.displayPhone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{BUSINESS_CONFIG.businessHours}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-12 border-t border-stone-800 text-[11px] text-stone-500 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>
            © 2026 Hanuman Tarpaulins. All Rights Reserved. JC Road, Bangalore.
          </p>
          <div className="flex items-center gap-4 text-stone-400">
            <span>Free All-India Shipping</span>
            <span>•</span>
            <span>7-Day Return Policy</span>
            <span>•</span>
            <span>Secure Checkout</span>
          </div>
        </div>

      </div>

    </footer>
  );
}
