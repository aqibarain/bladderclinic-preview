/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./*.html"],
  theme: {
    extend: {
      fontFamily: {
        cormorant: ['"Cormorant Garamond"', 'serif'],
        dmSerif: ['"DM Serif Display"', 'serif'],
        inter: ['Inter', 'sans-serif']
      },
      colors: {
        primaryTeal: '#355F63',
        secondarySage: '#7E9C90',
        accentTerracotta: '#B86E4B',
        bgIvory: '#FAF8F5',
        clinicDark: '#2E3D3F'
      }
    }
  },
  plugins: [],
}