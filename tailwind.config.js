module.exports = {
  mode: 'jit',
  purge: [],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        'xs': '340px',
      },
      colors: {
        elegiac: {
          light: 'hsl(214, 38%, 45%)',
          DEFAULT: 'hsl(214, 38%, 30%)',
          dark: 'hsl(214, 38%, 25%)',
        },
        ytred: '#d42627',
        ttvpurple: '#663398',
      },
      fontFamily: {
        sans: [
          'Heebo',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      gridTemplateColumns: {
        'recommendation': 'repeat(3, minmax(280px, 480px))',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
