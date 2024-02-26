/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      
    },
    extend: {
      boxShadow:{
        '1': '0px 0px 15px 0px #FFFFFF40',
        '2': '0px 25px 50px -12px #FFFFFF40'
      }
    },
  },
  plugins: [],
}

