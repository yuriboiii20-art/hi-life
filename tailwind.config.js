/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#000000',
          900: '#0a0a0a',
          800: '#121212',
          700: '#1a1a1a',
          600: '#262626',
          500: '#404040',
        },
        navy: {
          950: '#000000',
          900: '#0a0a0a',
          800: '#121212',
          700: '#000000', // Mapped to black
          600: '#1a1a1a',
          500: '#262626',
        },
        brand: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#0f172a',
          700: '#000000',
          accent: '#000000',
          orange: '#111827',
          gold: '#000000',
          red: '#dc2626',
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
