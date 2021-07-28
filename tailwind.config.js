const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      current: 'currentColor',
      black: '#232220',
      lightBlack: '#47443f',
      yellow: '#ffb10f',
      textBlack: '#272624',
      textWhite: '#d5d5d5',
      lightYellow: '#fff1ce',
      gold: '#eea50f',
      frost: '#16d2d9'
    },
    fontFamily: {
      'Fell': 'IM Fell DW Pica SC'
    },
    extend: {
      width: {
        '1300': '1300px',
      },
      maxWidth: {
        '1300': '1300px',
      },
      screens: {
        'xs': {'max': '400px'},
        's': {'max': '512px'},
        'sm': {'max': '640px'},
        'md': {'max': '768px'},
        'lg': {'max': '1024px'},
        'xl': {'max': '1280px'},
        '2xl': {'max': '1536px'},
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}