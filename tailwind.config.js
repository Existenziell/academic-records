const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Bitter', ...defaultTheme.fontFamily.sans
        ]

      },
      colors: {
        'brand': '#a6d1c9',
        'brand-dark': '#003153',
        'highlight': '#FFF01F',
      },
      backgroundImage: {
        graduate: 'url(/graduate3.jpg)',
        logo: 'url(/logo.png)',
        'logo-white': 'url(/logo-white.png)',

      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
