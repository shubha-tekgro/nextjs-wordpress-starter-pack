/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",     
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#036340ff',    
        secondary: '#51a888ff', 
        neutral: '#6c7075ff',    
      },
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
        nunito: ['Nunito Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
