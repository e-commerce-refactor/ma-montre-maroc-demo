/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        obsidian: {
          950: '#05070B',
          900: '#07090E',
          850: '#0B0F17',
          800: '#0E131F',
          700: '#141C2E',
          600: '#1D273D',
        },
        rolex: {
          50: '#ECFDF5',
          100: '#D1FAE5',
          500: '#10B981',
          600: '#059669',
          700: '#047857',
          800: '#065F46',
          900: '#064E3B',
        },
        champagne: {
          100: '#F5EEDB',
          200: '#EBDCB7',
          400: '#D4AF37',
          500: '#C5A059',
          600: '#A6823C',
        },
        steel: {
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      boxShadow: {
        'glow-emerald': '0 0 25px -5px rgba(16, 185, 129, 0.25)',
        'glow-gold': '0 0 25px -5px rgba(197, 160, 89, 0.25)',
      }
    },
  },
  plugins: [],
}
