/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Natural leaf green — desaturated, botanical (not neon SaaS green)
        primary: {
          50: '#f3f8f1',
          100: '#e3efdf',
          200: '#c7dfc0',
          300: '#a2c899',
          400: '#77ab6e',
          500: '#538c4c',
          600: '#40753c',
          700: '#345d32',
          800: '#2b4a2a',
          900: '#223a22',
        },
        // Coco-brown — the color of the brick itself
        earth: {
          50: '#faf6ef',
          100: '#f4ecdf',
          200: '#e7d6bc',
          300: '#d6ba92',
          400: '#c09a67',
          500: '#a87e4b',
          600: '#8c633a',
          700: '#704e2f',
          800: '#5a3f28',
          900: '#3e2c1d',
        },
        // Deep soil black — dark sections, footer, body text
        soil: {
          600: '#4a3a2b',
          700: '#33281e',
          800: '#241b14',
          900: '#17110c',
        },
        // Warm off-white — sunlight through leaves
        cream: '#fbf7f0',
      },
      fontFamily: {
        sans: ['"Schibsted Grotesk"', 'system-ui', 'sans-serif'],
        display: ['Fraunces', 'Georgia', 'serif'],
      },
      boxShadow: {
        'soft': '0 2px 12px -2px rgba(62, 44, 29, 0.08), 0 8px 32px -8px rgba(62, 44, 29, 0.12)',
        'lifted': '0 4px 16px -4px rgba(62, 44, 29, 0.12), 0 16px 48px -12px rgba(62, 44, 29, 0.18)',
      },
    },
  },
  plugins: [
    // Custom scrollbar-hide utility for clean horizontal scrolling on mobile
    plugin(function({ addUtilities }) {
      addUtilities({
        '.scrollbar-hide': {
          /* IE and Edge */
          '-ms-overflow-style': 'none',
          /* Firefox */
          'scrollbar-width': 'none',
          /* Chrome, Safari and Opera */
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        },
        '.scrollbar-default': {
          /* IE and Edge */
          '-ms-overflow-style': 'auto',
          /* Firefox */
          'scrollbar-width': 'auto',
          /* Chrome, Safari and Opera */
          '&::-webkit-scrollbar': {
            display: 'block',
          },
        },
      });
    }),
  ],
}
