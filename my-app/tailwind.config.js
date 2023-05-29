/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif']    
      },
      colors: {
        trueBlue: '#586ba4ff',
        marianBlue: '#324376ff',
        flax: '#f5dd90ff',
        atomicTangerine: '#f68e5fff',
        bittersweet: '#f76c5eff'
      }
    },
  },
  plugins: [],
}
