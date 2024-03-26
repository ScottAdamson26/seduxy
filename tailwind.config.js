/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
      },
      colors: {
        'custom-pink': '#4e1035', // Example custom color
        'custom-red': '#fe5686',  // Example custom color
        'custom-yellow': '#4e1035' // Example custom color
      },
    },
  },
  plugins: [],
}
