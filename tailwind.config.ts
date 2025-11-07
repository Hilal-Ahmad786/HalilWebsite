import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'whatsapp': {
          DEFAULT: '#25D366',
          dark: '#20BA5A',
        },
        // Premium Auto Brand Colors
        'primary-purple': {
          DEFAULT: '#9333EA',
          dark: '#7E22CE',
          light: '#A855F7',
        },
        'accent-lime': {
          DEFAULT: '#A3E635',
          dark: '#84CC16',
          light: '#BEF264',
        },
        'secondary-fuchsia': {
          DEFAULT: '#C026D3',
          dark: '#A21CAF',
          light: '#D946EF',
        },
        'success-green': {
          DEFAULT: '#16A34A',
          dark: '#15803D',
        },
        // Extend existing gray scale
        gray: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
          950: '#030712',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        '7xl': '4.5rem',
        '8xl': '6rem',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
      },
      borderRadius: {
        none: '0',
      },
      boxShadow: {
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      },
      animation: {
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce': 'bounce 1s infinite',
        'spin': 'spin 1s linear infinite',
      },
      backgroundImage: {
        'gradient-purple': 'linear-gradient(135deg, #9333EA 0%, #C026D3 100%)',
        'gradient-lime': 'linear-gradient(135deg, #A3E635 0%, #BEF264 100%)',
        'gradient-dark': 'linear-gradient(135deg, #111827 0%, #1F2937 100%)',
        'gradient-hero': 'linear-gradient(135deg, #111827 0%, #7E22CE 50%, #111827 100%)',
      },
    },
  },
  plugins: [],
};

export default config;