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
        // Hasar Park Brand Colors - Softer, More Professional Palette
        'primary-purple': {
          DEFAULT: '#6366F1',  // Softer indigo
          dark: '#4F46E5',
          light: '#818CF8',
        },
        'accent-lime': {
          DEFAULT: '#10B981',  // Softer emerald/teal
          dark: '#059669',
          light: '#34D399',
        },
        'secondary-fuchsia': {
          DEFAULT: '#8B5CF6',  // Softer violet
          dark: '#7C3AED',
          light: '#A78BFA',
        },
        'success-green': {
          DEFAULT: '#10B981',
          dark: '#059669',
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
        'none': '0',
        'sm': '6px',
        'DEFAULT': '12px',
        'md': '12px',
        'lg': '16px',
        'xl': '20px',
        '2xl': '24px',
        '3xl': '32px',
        'full': '9999px',
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
        'gradient-purple': 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)',
        'gradient-lime': 'linear-gradient(135deg, #10B981 0%, #34D399 100%)',
        'gradient-dark': 'linear-gradient(145deg, #1F2937 0%, #374151 100%)',
        'gradient-hero': 'linear-gradient(145deg, #1F2937 0%, #4F46E5 50%, #1F2937 100%)',
      },
    },
  },
  plugins: [],
};

export default config;