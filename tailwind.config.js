/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      colors : {
        'primary' :  "#3255EB"
      },
      fontfamily:{
        'display' : ['poppins' ,'sans-serif'],
        'body': ['Inter', 'sans-serif']
      }
    
    },
  },
  plugins: [],
}

