/**
 * Centralized Business Configuration for Hanuman Tarpaulins (Hi-Life Automotive)
 * Editable business information, contact channels, and branding values.
 */

export const BUSINESS_CONFIG = {
  brandName: "Hanuman Tarpaulins",
  subBrand: "Hi-Life Automotive Covers",
  tagline: "Quality Covers. Trusted Protection. 20 Years of Experience.",
  shortDescription: "Your Trusted Destination for Car Covers, Scooter Covers & Tarpaulin Products in Bangalore. Over 20 years of manufacturing and supply experience at JC Road.",
  yearsExperience: "20+",
  
  // Contact details
  phone: "+91 98765 43210",
  displayPhone: "+91 98765 43210",
  email: "support@hanumantarpaulins.com",
  salesEmail: "orders@hanumantarpaulins.com",
  
  // Official Business Address
  address: {
    shopName: "Hanuman Tarpaulins",
    street: "No.84/5 Manish Tower, J C Road",
    city: "Bangalore",
    state: "Karnataka",
    pincode: "560002",
    country: "India",
    fullAddress: "Hanuman Tarpaulins, No.84/5 Manish Tower, J C Road, Bangalore - 560002"
  },

  // WhatsApp configuration for one-click enquiry
  whatsapp: {
    number: "919876543210",
    defaultMessage: "Hello Hanuman Tarpaulins! 👋 I am interested in custom vehicle covers / tarpaulin products.",
    getEnquiryUrl: (carBrand, carModel, year, coverType, price) => {
      const text = `Hello Hanuman Tarpaulins! 👋%0A%0AI would like to enquire about a custom vehicle cover:%0A🚗 *Brand:* ${encodeURIComponent(carBrand || 'Not Specified')}%0A🚘 *Model:* ${encodeURIComponent(carModel || 'Not Specified')}%0A📅 *Year:* ${encodeURIComponent(year || 'Not Specified')}%0A🛡️ *Cover Type:* ${encodeURIComponent(coverType || 'Not Specified')}${price ? `%0A💰 *Price:* ₹${price}` : ''}%0A%0APlease share availability, fitting at JC Road, and delivery options.`;
      return `https://wa.me/919876543210?text=${text}`;
    }
  },

  // Social Channels
  socials: {
    instagram: "https://instagram.com/hanumantarpaulins",
    facebook: "https://facebook.com/hanumantarpaulins",
    youtube: "https://youtube.com/@hanumantarpaulins",
    twitter: "https://twitter.com/hanumancover"
  },

  // Operational details
  businessHours: "Monday – Saturday: 9:30 AM – 8:00 PM IST",
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
