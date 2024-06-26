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
        'custom-dp':'#E64E79',
        'dark-purple':'#160211',
        'purple':'#5C0D2E',
        'darkish-p':'#690E37',// Example custom color
        'shade-d':'#8C1446'
      },
      boxShadow: {
        custom: '0 0 30px rgba(0, 0, 0, 0.4)',
        small: '0 0 10px rgba(0, 0, 0, 0.5)',
        smaller: '0 0 10px rgba(0, 0, 0, 0.3)', // Example of an equally spread shadow
      },
      height: {
        '7p': '7%',
        '10p':'10%',
        '90p': '90%', 
        '7vh': '7vh',
      }
    },
  },
  plugins: [],
}
