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
      backgroundImage: {
        astronaut: "url('./public/image/history-in-hd-e5eDHbmHprg-unsplash.jpg')",
      }
    },
  },
  plugins: [],
}
