/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors:{
        'blue-2': "rgb(133, 200, 221)",
        'orange-1': "rgb(245, 169, 98)",
        'gray-1': "rgb(221, 221, 221)",
        'blue-1': "rgb(60, 141, 173)",
        'blue-3': "rgb(18, 93, 152)",
      }
    },
  },
  plugins: [],
}

