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
      backgroundImage: (theme) => ({
        'mobile-home': "url('./src/images/home/background-home-mobile.jpg')",
        'tablet-home': "url('./src/images/home/background-home-tablet.jpg')",
        'desktop-home': "url('./src/images/home/background-home-desktop.jpg')",
        'mobile-destination':
          "url('./src/images/destination/background-destination-mobile.jpg')",
        'tablet-destination':
          "url('./src/images/destination/background-destination-tablet.jpg')",
        'desktop-destination':
          "url('./src/images/destination/background-destination-desktop.jpg')",
        'mobile-crew': "url('./src/images/crew/background-crew-mobile.jpg')",
        'tablet-crew': "url('./src/images/crew/background-crew-tablet.jpg')",
        'desktop-crew': "url('./src/images/crew/background-crew-desktop.jpg')",
        'mobile-technology':
          "url('./src/images/technology/background-technology-mobile.jpg')",
        'tablet-technology':
          "url('./src/images/technology/background-technology-tablet.jpg')",
        'desktop-technology': "url('./src/images/')",
      }),
    },
  },
  plugins: [],
  safelist: ['mobile-home', 'tablet-home', 'desktop-home'],
}
