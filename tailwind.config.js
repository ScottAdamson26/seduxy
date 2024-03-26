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
        'custom-pink': '#bc3373', // Example custom color
        'custom-red': '#fe5686',  // Example custom color
        'custom-yellow': '#bc3373',
        'custom-dp':'#E64E79' // Example custom color
      },
      boxShadow: {
        custom: '0 0 30px rgba(0, 0, 0, 0.4)',
        small: '0 0 10px rgba(0, 0, 0, 0.5)',
        smaller: '0 0 10px rgba(0, 0, 0, 0.3)', // Example of an equally spread shadow
      },
    },
  },
  plugins: [],
}
