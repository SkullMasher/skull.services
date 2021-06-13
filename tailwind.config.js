module.exports = {
  mode: 'jit',
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
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
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
