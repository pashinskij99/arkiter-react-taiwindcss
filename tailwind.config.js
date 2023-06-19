/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')


module.exports = {
  content: [
        "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      "arkiterBlueLight": {
        200: '#1D9EEB',
        300: '#78D9FB',
        400: '#246FFF',
        600: '#0A3D62',
        700: '#0A265F',
      },
      "arkiterWhite": {
        100: '#FFFFFF',
        200: '#FCFCFC'
      },
      "arkiterTextDark": '#606060',
      "arkiterRed": {
        400: '#D40D00'
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '3.5rem',
        sm: '1rem',
      },
      screens: {
        sm: '600px',
        md: '728px',
        lg: '984px',
        xl: '1200px',
        '2xl': '1200px',
        // '3xl': '1510px',
      }
    }
  },
  plugins: [],
}

