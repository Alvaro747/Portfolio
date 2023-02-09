/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'home-light': "url('./src/assets/Bg-Home/img-ligth-theme.jpg')",
        'home-dark': "url('./src/assets/Bg-Home/img-dark-theme.jpg')",
        
      },

    },
  },
  plugins: [],
}
