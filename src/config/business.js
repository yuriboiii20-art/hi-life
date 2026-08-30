/**
 * Centralized Business Configuration for Hi-Life
 * Editable business information, contact channels, and branding values.
 */

export const BUSINESS_CONFIG = {
  brandName: "Hi-Life",
  tagline: "Stronger Fabric – Stronger Trust",
  shortDescription: "Precision engineered, custom-fit car covers designed for superior all-weather vehicle protection.",
  
  // Contact details (Placeholder values ready to be replaced with live details)
  phone: "+91 98765 43210",
  displayPhone: "+91 98765 43210",
  email: "support@hilifecovers.com",
  salesEmail: "orders@hilifecovers.com",
  
  // Official Business Address
  address: {
    street: "No.84/5 Manish Tower, J C Road",
    city: "Bangalore",
    state: "Karnataka",
    pincode: "560002",
    country: "India",
    fullAddress: "No.84/5 Manish Tower, J C Road, Bangalore - 560002"
  },

  // WhatsApp configuration for one-click enquiry
  whatsapp: {
    number: "919876543210", // Country code + 10 digit number without '+'
    defaultMessage: "Hello Hi-Life Team, I am interested in protective car covers for my vehicle.",
    getEnquiryUrl: (carBrand, carModel, year, coverType, price) => {
      const text = `Hello Hi-Life Team! 👋%0A%0AI would like to enquire about a custom car cover:%0A🚗 *Brand:* ${encodeURIComponent(carBrand || 'Not Specified')}%0A🚘 *Model:* ${encodeURIComponent(carModel || 'Not Specified')}%0A📅 *Year:* ${encodeURIComponent(year || 'Not Specified')}%0A🛡️ *Cover Type:* ${encodeURIComponent(coverType || 'Not Specified')}${price ? `%0A💰 *Price:* ₹${price}` : ''}%0A%0APlease share availability, fitting details, and delivery options.`;
      return `https://wa.me/919876543210?text=${text}`;
    }
  },

  // Social Channels
  socials: {
    instagram: "https://instagram.com/hilifecarcovers",
    facebook: "https://facebook.com/hilifecarcovers",
    youtube: "https://youtube.com/@hilifecarcovers",
    twitter: "https://twitter.com/hilifecovers"
  },

  // Operational details
  businessHours: "Monday – Saturday: 9:30 AM – 7:30 PM IST",
  shippingPolicy: "Dispatched within 24–48 hours across India. 3–5 days standard express delivery.",
  returnPolicy: "7-day seamless replacement guarantee for fitting issues.",

  // Currency & formatting helper
  currency: "₹",
  formatPrice: (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  }
};
