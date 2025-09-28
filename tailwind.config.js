/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'dancing': ['Dancing Script', 'cursive'],
        'playfair': ['Playfair Display', 'serif'],
      },
      colors: {
        'sage': {
          50: '#f6f7f4',
          100: '#e9ebe4',
          200: '#d3d8ca',
          300: '#b7bfa6',
          400: '#9caf88',
          500: '#7d936e',
          600: '#6b7c58',
          700: '#566349',
        },
        'warm-brown': {
          DEFAULT: '#8B4513',
          50: '#f7f1ed',
          100: '#ede0d3',
          200: '#d9bfa6',
          300: '#c59874',
          400: '#b3754a',
          500: '#a15d34',
          600: '#8B4513',
          700: '#743a17',
        },
        'ivory': {
          DEFAULT: '#FFFDD0',
          50: '#FFFDD0',
          100: '#fffcc4',
          200: '#fff985',
          300: '#fff146',
          400: '#ffe607',
          500: '#e6c700',
          600: '#b39c00',
          700: '#807100',
        }
      }
    },
  },
  plugins: [],
};
