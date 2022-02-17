const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./*.html",],
  theme: {
    extend: {
      colors: {
        'Dark-Blue': 'hsl(240, 38%, 20%)',
        'Grayish-Blue': 'hsl(240, 18%, 77%)',
      },
      fontFamily: {
        sans : ["'Inter'", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        "pattern-bg": "url('./images/pattern-bg.svg')",
      },
    },
  },
  plugins: [],
}
