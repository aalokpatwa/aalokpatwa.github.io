/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/*"
  ],
  theme: {
    extend: {
      fontFamily: {
        cmubright: ['cmubright', 'sans-serif'],
        assistant: ["Assistant", "sans-serif"]
        // ...
      },
      backgroundImage:{
        'mtsi': '/mtsi.png'
      },
      colors: {
        numberphile: {
          100: '#f0ebe4',
          200: '#d6c1a5'
        }
      }
    },
  },
  plugins: [],
}
