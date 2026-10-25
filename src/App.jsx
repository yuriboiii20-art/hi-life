import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';
import AnnouncementBar from './components/AnnouncementBar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import NexusFabric from './pages/NexusFabric';
import PlasmaFabric from './pages/PlasmaFabric';
import WhoItIsFor from './pages/WhoItIsFor';
import FAQ from './pages/FAQ';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import OrderSuccess from './pages/OrderSuccess';
import ShippingPolicy from './pages/ShippingPolicy';
import ReplacementPolicy from './pages/ReplacementPolicy';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndConditions from './pages/TermsAndConditions';
import CartDrawer from './components/CartDrawer';
import { CartProvider } from './context/CartContext';
import { BUSINESS_CONFIG } from './config/business';

// Scroll to top helper on navigation
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <CartProvider>
      <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen bg-white text-stone-900 selection:bg-orange-500 selection:text-white font-sans">
          
          {/* Top Announcement Strip */}
          <AnnouncementBar />

          {/* Sticky Responsive Header */}
          <Navbar />

          {/* Slide-over Cart Drawer */}
          <CartDrawer />

          {/* Main Content Area */}
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/:productSlug" element={<ProductDetail />} />
              <Route path="/pages/nexus" element={<Navigate to="/products" replace />} />
              <Route path="/pages/plasma" element={<Navigate to="/products" replace />} />
              <Route path="/pages/who-it-is-for" element={<WhoItIsFor />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/shipping-policy" element={<ShippingPolicy />} />
              <Route path="/replacement-policy" element={<ReplacementPolicy />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
              <Route path="/order-confirmation/:orderId" element={<OrderSuccess />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </main>

          {/* Footer */}
          <Footer />

          {/* Floating WhatsApp Quick Action Button */}
          <a
            href={`https://wa.me/${BUSINESS_CONFIG.whatsapp.number}?text=${encodeURIComponent(BUSINESS_CONFIG.whatsapp.defaultMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-40 p-3.5 sm:p-4 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-2xl shadow-emerald-600/40 hover:scale-110 active:scale-95 transition-all flex items-center justify-center group focus:outline-none focus:ring-4 focus:ring-emerald-500/30 cursor-pointer"
            aria-label="Chat with Hanuman Tarpaulins on WhatsApp"
          >
            <MessageCircle className="w-6 h-6" />
            <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out font-bold text-xs pl-0 group-hover:pl-2">
              JC Road Support
            </span>
          </a>

        </div>
      </Router>
    </CartProvider>
  );
}
