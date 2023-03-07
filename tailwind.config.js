/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    fontFamily: {
      display: ['Inter', 'sistem-ui', 'sans-serif'],
      body: ['Inter', 'sistem-ui', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#DC046C',
          50: '#FFEBF4',
          100: '#FFD6E9',
          200: '#FF99C9',
          300: '#FF5CA8',
          400: '#FF1F87',
          500: '#E00069',
          600: '#A3004C',
          700: '#660030',
          800: '#290013',
          900: '#14000A'
        },
        secondary: {
          DEFAULT: '#56CBF9',
          50: '#EBF9FE',
          100: '#D8F3FD',
          200: '#9EE1FA',
          300: '#64D0F7',
          400: '#2ABEF4',
          500: '#0B9FD5',
          600: '#08749B',
          700: '#054861',
          800: '#021D27',
          900: '#010E13'
        },
        dark: '#121417',
        light: '#FFF9FB'
      }
    }
  },
  plugins: [],
}
