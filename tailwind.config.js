/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        navy: '#1B2A4A',
        teal: '#2A9D8F',
        gold: '#E9C46A',
        softWhite: '#F8F9FA',
        darkText: '#264653',
        lightText: '#6B7280',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
