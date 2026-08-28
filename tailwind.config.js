/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#0a0f29',
          900: '#101744',
          800: '#16215b',
          700: '#19277c', // Primary reference navy
          600: '#23369e',
          500: '#354dbd',
        },
        brand: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#19277c', // Primary Navy
          700: '#16215b',
          accent: '#47c7f1', // Vibrant Sky Cyan
          orange: '#f97316', // Orange Button Accent
          gold: '#ea580c',
          red: '#dc2626', // Promo Red
        },
      },
      fontFamily: {
        sans: ['"Figtree"', '"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        display: ['"Outfit"', '"Figtree"', 'sans-serif'],
      },
      boxShadow: {
        'clean': '0 2px 10px 0 rgba(0, 0, 0, 0.05)',
        'clean-hover': '0 10px 25px -5px rgba(25, 39, 124, 0.12), 0 8px 10px -6px rgba(0, 0, 0, 0.04)',
        'card': '0 4px 20px -2px rgba(22, 33, 91, 0.06)',
      },
      animation: {
        'marquee': 'marquee 28s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
}
