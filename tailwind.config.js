/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js}", 
  ],
  theme: {
    extend: {
      colors: {
        'orange-IMM': '#EE7F01',
        'grey-IIM': '#F5F5F5',
        'purple-IIM': '#E8DAFF'
      }
    },
  },
  plugins: [],
}
