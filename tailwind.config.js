/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    colors: {
      green1: '#00875F',
      green2: '#00B37E',
      green3: '#1EA483',

      gray1: '#121214',
      gray2: '#202024',
      gray3: '#C4C4CC',
      gray4: '#E1E1E6',

      purple: '#7465D4',
      white: 'FFFFF',
    },
    extend: {
      height: {
        560: '35rem',
      },
    },
  },
  plugins: [],
}
