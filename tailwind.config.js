/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        'picky-orange': '#eb570c',
      },
      fontFamily: {
        // Đặt 'Montserrat' làm font sans mặc định
        sans: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}