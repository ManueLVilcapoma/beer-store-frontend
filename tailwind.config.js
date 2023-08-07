/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors:{
          primary:"#CB5930",
          secondary:"#212025",
          accent:"#E9E0D3",
          fondodepantalla:"gray"
        }
    }, 
  },
  plugins: [],
}

