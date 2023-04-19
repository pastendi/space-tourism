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
      backgroundImage: () => ({
        'mobile-home': "url('./src/images/home/background-home-mobile.jpg')",
        'tablet-home': "url('./src/images/home/background-home-tablet.jpg')",
        'desktop-home': "url('./src/images/home/background-home-desktop.jpg')",
      }),
    },
  },
  screens: {
    sm: '480px',
    md: '768px',
    lg: '1020px',
    xl: '1440px',
  },
  plugins: [],
}
