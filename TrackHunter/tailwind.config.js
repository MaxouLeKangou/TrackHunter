/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      'black': '#090A0E',
      'black-75': '#101118',
      'black-10': '#1011181A',

      'white': '#FFFFFF',
      'white-75': '#FFFFFFBF',
      'white-50': '#FFFFFF80',
      'white-10': '#FFFFFF1A',

      'green': '#2BB299',
      'red': '#EA5A5F',

      'blue': '#3B74F7',
      'blue-50': '#3B74F780',
      'blue-25': '#3B74F740',
    },
    fontFamily: {
      'Anton': ['Anton', 'sans-serif'],
      'Ubuntu': ['Ubuntu', 'sans-serif'],
    },
  },
  plugins: [],
}

