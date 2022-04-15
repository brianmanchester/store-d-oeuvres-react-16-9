const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      pink: colors.pink,
      blue: colors.blue,
      blueGray: colors.blueGray,
      orange: colors.orange,
      teal: colors.teal,
      cyan: colors.cyan,
      white: colors.white,
      yellow: colors.yellow,
      purple: colors.purple,
      emerald: colors.emerald,
      sky: colors.sky,
      indigo: colors.indigo
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
