/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    extend: {
      colors: {
        dlyapc: {
          100: '#0075FF',
          200: '#00A3FF',
          300: '#FFFFFF',
          400: '#8D8D8D',
          500: '#272727',
          600: '#000000'
        }
      }
    },
  },
  plugins: [],
}
