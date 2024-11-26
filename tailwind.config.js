/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#CCFF00',
        dark: {
          100: '#333333',
          200: '#222222',
          300: '#111111',
        },
      },
    },
  },
  plugins: [],
};