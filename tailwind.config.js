/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        barlow: ['Barlow Condensed', 'sans-serif'],
        bellefair: ['Bellefair', 'serif'],
      },
      colors: {
        darkPrimary: '#0B0D17',
        primary: '#FFFFFF',
        secondary: '#D0D6F9',
      },
    },
  },
  plugins: [],
}
