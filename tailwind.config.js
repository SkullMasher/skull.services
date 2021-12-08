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
          light: 'hsl(214, 45%, 45%)',
          DEFAULT: 'hsl(214, 45%, 30%)',
          dark: 'hsl(214, 45%, 25%)',
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
      animation: {
        'skew': 'skew 3s cubic-bezier(.68,-0.55,.27,1.55) infinite',
        'wiggle': 'wiggle 2s ease-in-out infinite',
        'float-slower': 'float 10s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-fast': 'float 4s ease-in-out infinite',
      },
      keyframes: {
        skew: {
         '0%, 100%': { transform: 'skewX(0deg)' },
         '50%': { transform: 'skewX(-25deg)' },
        },
        wiggle: {
         '0%, 100%': { transform: 'rotate(-3deg)' },
         '50%': { transform: 'rotate(3deg)' }
        },
        float: {
          '0%': { transform: 'translatey(0px)' },
          '50%': { transform: 'translatey(-30px)' },
          '100%': { transform: 'translatey(0px)' }
        }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
