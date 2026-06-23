/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        charcoal: {
          950: '#0A0A0A',
          900: '#111111',
          800: '#1A1A1A',
          700: '#222222',
          600: '#333333',
          500: '#555555',
          400: '#777777',
          300: '#999999',
          200: '#BBBBBB',
          100: '#DDDDDD',
          50:  '#F5F5F5',
        },
        gold: {
          900: '#6B4A00',
          800: '#8A6200',
          700: '#A97A00',
          600: '#C49320',
          500: '#C9A84C',
          400: '#D4B96A',
          300: '#DFCA88',
          200: '#EADAA8',
          100: '#F4EDD0',
          50:  '#FAF6EC',
        },
        cream: {
          DEFAULT: '#F8F5EF',
          dark: '#EFE9DC',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-2xl': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-xl':  ['3.75rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-lg':  ['3rem',    { lineHeight: '1.15', letterSpacing: '-0.015em' }],
        'display-md':  ['2.25rem', { lineHeight: '1.2',  letterSpacing: '-0.01em' }],
        'display-sm':  ['1.875rem',{ lineHeight: '1.25' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      maxWidth: {
        '8xl': '90rem',
      },
      backgroundImage: {
        'hero-overlay': 'linear-gradient(to bottom, rgba(10,10,10,0.45) 0%, rgba(10,10,10,0.55) 60%, rgba(10,10,10,0.75) 100%)',
      },
    },
  },
  plugins: [],
}
