import React from 'react';
import { Link } from 'react-router-dom';
import { BUSINESS_CONFIG } from '../config/business';

export default function Footer() {
  return (
    <footer className="bg-white text-stone-700 font-sans border-t border-orange-100 select-none">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-14 py-14 sm:py-20">
        
        {/* Brand Banner with Official Logo */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-12 mb-12 border-b border-orange-100">
          <Link to="/" className="flex items-center gap-4 group">
            <img 
              src="/logo.png" 
              alt="Hi-Life Logo" 
              className="h-14 sm:h-16 w-auto object-contain transition-transform group-hover:scale-105" 
            />
            <div className="flex flex-col">
              <span className="font-editorial text-3xl font-bold tracking-tight text-stone-950 group-hover:text-orange-600 transition-colors">
                Hi-Life
              </span>
              <span className="text-[9px] font-extrabold tracking-[0.25em] text-orange-600 uppercase">
                HANUMAN TARPAULINS • JC ROAD BANGALORE
              </span>
            </div>
          </Link>
          <div className="text-xs sm:text-sm text-stone-500 max-w-md sm:text-right">
            Over 20 years of custom vehicle protection engineering. Stronger fabric, precision custom contours, trusted nationwide.
          </div>
        </div>

        {/* 3-Column Navigation Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-12 pb-14 border-b border-orange-100">
          
          {/* Column 1: Customer Account */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-600"></span>
              Customer Support & Care
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-stone-600 font-normal">
              <li>
                <Link to="/contact" className="hover:text-orange-600 transition-colors">
                  Profile & Inquiries
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-orange-600 transition-colors">
                  Order Status
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-orange-600 transition-colors">
                  Customer Support
                </Link>
              </li>
              <li>
                <a 
                  href={`https://wa.me/${BUSINESS_CONFIG.whatsapp.number}?text=${encodeURIComponent(BUSINESS_CONFIG.whatsapp.defaultMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange-600 font-medium text-orange-700 transition-colors inline-flex items-center gap-1.5"
                >
                  WhatsApp Assistance (9:30 AM - 8:30 PM)
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Discover Hi-Life */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-600"></span>
              Discover Hi-Life
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-stone-600 font-normal">
              <li>
                <Link to="/about" className="hover:text-orange-600 transition-colors">
                  Why Hi-Life (20+ Years at JC Road)
                </Link>
              </li>
              <li>
                <Link to="/pages/who-it-is-for" className="hover:text-orange-600 transition-colors">
                  Who Hi-Life Is For
                </Link>
              </li>
              <li>
                <Link to="/pages/nexus" className="hover:text-orange-600 transition-colors">
                  Nexus Series (Triple Layer Fabric)
                </Link>
              </li>
              <li>
                <Link to="/pages/plasma" className="hover:text-orange-600 transition-colors">
                  Plasma Series (Waterproof Armor)
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-orange-600 transition-colors">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Policies & Store */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-600"></span>
              Policies & Store
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-stone-600 font-normal">
              <li>
                <Link to="/shipping-policy" className="hover:text-orange-600 transition-colors">
                  Shipping Policy
                </Link>
              </li>
              <li>
                <Link to="/replacement-policy" className="hover:text-orange-600 transition-colors">
                  Replacement Policy
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="hover:text-orange-600 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-and-conditions" className="hover:text-orange-600 transition-colors">
                  Terms and Conditions
                </Link>
              </li>
              <li className="pt-2 text-[11px] text-stone-500 leading-relaxed">
                Store: {BUSINESS_CONFIG.address.fullAddress}
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Social Icons */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>
            © 2026 Hanuman Tarpaulins (Hi-Life) Private Limited. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4 text-stone-600">
            <a
              href={BUSINESS_CONFIG.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-orange-600 transition-colors"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </svg>
            </a>

            <a
              href={BUSINESS_CONFIG.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-orange-600 transition-colors"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>

            <a
              href={BUSINESS_CONFIG.socials.youtube}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="hover:text-orange-600 transition-colors"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
