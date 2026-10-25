/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        stone: {
          50: '#fafaf9',
          100: '#f5f5f4',
          200: '#e7e5e4',
          300: '#d6d3d1',
          400: '#a8a29e',
          500: '#78716c',
          600: '#57534e',
          700: '#44403c',
          800: '#292524',
          900: '#1c1917',
          950: '#0c0a09',
        },
        charcoal: {
          950: '#09090b',
          900: '#18181b',
          800: '#27272a',
          700: '#3f3f46',
          600: '#52525b',
        },
        amber: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        brand: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
          accent: '#ea580c',
          orange: '#ff6600',
          amber: '#f59e0b',
          charcoal: '#18181b',
          red: '#dc2626',
        },
      },
      fontFamily: {
        sans: ['"Inter"', '"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        display: ['"AwesomeSerif"', '"Outfit"', 'serif'],
        editorial: ['"AwesomeSerif"', 'Georgia', 'serif'],
        serif: ['"AwesomeSerif"', 'Georgia', 'serif'],
      },
      boxShadow: {
        'clean': '0 2px 10px 0 rgba(28, 25, 23, 0.04)',
        'clean-hover': '0 12px 30px -6px rgba(28, 25, 23, 0.1), 0 4px 10px -2px rgba(28, 25, 23, 0.04)',
        'card': '0 4px 20px -2px rgba(28, 25, 23, 0.05)',
        'soft': '0 1px 3px 0 rgba(28, 25, 23, 0.05), 0 1px 2px -1px rgba(28, 25, 23, 0.05)',
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
