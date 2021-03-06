const colors = require('tailwindcss/colors')


module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [
    './src/**/*.vue',
  ],
  theme: {
    container: {
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
      }
    },
    extend: {
      colors: {
        rose: colors.rose,
        orange: colors.orange,
        fuchsia: colors.fuchsia
      }
      },
  },
  variants: {},
  plugins: [],
}
