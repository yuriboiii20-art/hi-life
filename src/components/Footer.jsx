import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  Instagram, 
  Facebook, 
  Youtube, 
  Twitter, 
  ShieldCheck,
  CheckCircle2,
  Lock,
  Truck
} from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';
import { CAR_BRANDS } from '../data/vehicles';

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-neutral-300 font-sans border-t border-neutral-800">
      
      {/* Top Value Assurance Ribbon */}
      <div className="border-b border-neutral-800 bg-black py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-xs">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-neutral-900 border border-neutral-800 text-white">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <p className="font-bold text-white">100% Fitment Guarantee</p>
                <p className="text-neutral-400 text-[11px]">Vehicle-specific laser cut</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-neutral-900 border border-neutral-800 text-white">
                <Truck className="w-5 h-5" />
              </div>
              <div>
                <p className="font-bold text-white">Free All-India Delivery</p>
                <p className="text-neutral-400 text-[11px]">Doorstep express dispatch</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-neutral-900 border border-neutral-800 text-white">
                <Lock className="w-5 h-5" />
              </div>
              <div>
                <p className="font-bold text-white">Direct WhatsApp Support</p>
                <p className="text-neutral-400 text-[11px]">Instant fitment assistance</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-neutral-900 border border-neutral-800 text-white">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <p className="font-bold text-white">7-Day Return Policy</p>
                <p className="text-neutral-400 text-[11px]">Hassle-free replacement</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="inline-block group focus:outline-none">
              <img 
                src="/logo.png" 
                alt="Hi-Life Protective Car Covers" 
                className="h-16 sm:h-20 w-auto object-contain transition-transform group-hover:scale-105"
              />
            </Link>

            <p className="text-xs text-white font-bold tracking-wide uppercase">
              “{BUSINESS_CONFIG.tagline}”
            </p>

            <p className="text-xs text-neutral-400 leading-relaxed max-w-sm font-normal">
              {BUSINESS_CONFIG.shortDescription}
            </p>

            {/* Social Channels */}
            <div className="flex items-center gap-2 pt-2">
              <a
                href={BUSINESS_CONFIG.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-neutral-900 border border-neutral-800 hover:bg-neutral-800 text-white transition-colors"
                aria-label="Hi-Life on Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={BUSINESS_CONFIG.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-neutral-900 border border-neutral-800 hover:bg-neutral-800 text-white transition-colors"
                aria-label="Hi-Life on Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={BUSINESS_CONFIG.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-neutral-900 border border-neutral-800 hover:bg-neutral-800 text-white transition-colors"
                aria-label="Hi-Life on YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${BUSINESS_CONFIG.whatsapp.number}?text=${encodeURIComponent(BUSINESS_CONFIG.whatsapp.defaultMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-neutral-900 border border-neutral-800 hover:bg-neutral-800 text-emerald-400 transition-colors"
                aria-label="Chat on WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li>
                <Link to="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-white transition-colors">Products Catalogue</Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-white transition-colors">Fitment Gallery</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link>
              </li>
              <li>
                <a href="#vehicle-finder" className="text-white hover:underline font-bold">
                  Vehicle Finder →
                </a>
              </li>
            </ul>
          </div>

          {/* Popular Brands */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Supported Car Brands
            </h4>
            <div className="grid grid-cols-2 gap-x-2 gap-y-1.5 text-xs text-neutral-400">
              {CAR_BRANDS.slice(0, 8).map((brand) => (
                <Link
                  key={brand.id}
                  to={`/products?brand=${brand.id}`}
                  className="hover:text-white transition-colors truncate"
                >
                  {brand.name}
                </Link>
              ))}
            </div>
            <Link
              to="/products"
              className="text-[11px] text-white hover:underline block pt-1 font-semibold"
            >
              + View all 12+ Indian manufacturers
            </Link>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Contact & Support
            </h4>
            
            <ul className="space-y-2.5 text-xs text-neutral-400">
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-white shrink-0 mt-0.5" />
                <div>
                  <a href={`tel:${BUSINESS_CONFIG.phone}`} className="hover:text-white transition-colors font-bold text-white">
                    {BUSINESS_CONFIG.displayPhone}
                  </a>
                  <p className="text-[10px] text-neutral-500 font-normal">{BUSINESS_CONFIG.businessHours}</p>
                </div>
              </li>

              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-white shrink-0" />
                <a href={`mailto:${BUSINESS_CONFIG.email}`} className="hover:text-white transition-colors">
                  {BUSINESS_CONFIG.email}
                </a>
              </li>

              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-white shrink-0 mt-0.5" />
                <span className="text-[11px] leading-relaxed text-neutral-400 font-normal">
                  {BUSINESS_CONFIG.address.fullAddress}
                </span>
              </li>
            </ul>

            <div className="pt-2">
              <a
                href={`https://wa.me/${BUSINESS_CONFIG.whatsapp.number}?text=${encodeURIComponent(BUSINESS_CONFIG.whatsapp.defaultMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-black text-black bg-white hover:bg-neutral-200 px-3 py-2.5 rounded-xl w-full justify-center transition-colors shadow"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Instant WhatsApp Enquiry</span>
              </a>
            </div>

          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>© {new Date().getFullYear()} {BUSINESS_CONFIG.brandName} Automotive. All Rights Reserved.</p>
          
          <div className="flex items-center gap-4 text-neutral-400">
            <Link to="/about" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span>•</span>
            <Link to="/about" className="hover:text-white transition-colors">Terms of Service</Link>
            <span>•</span>
            <Link to="/contact" className="hover:text-white transition-colors">Shipping & Returns</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
