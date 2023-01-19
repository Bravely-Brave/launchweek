/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js}"],
  theme: {
    colors: {
      'figblue': 'rgb(217,217,217)',
      'figorange': 'rgb(238,127,1)',
      'figwhite' : '#FFF'
    },
    backgroundImage: {
      'decorose': "url('/src/assets/decorose.png')",
      'footer-texture': "url('/img/footer-texture.png')",
    },
    extend: {
      top: {
        '97' : '97px'
      }
    },
  },
  plugins: [],
}
