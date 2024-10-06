/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        worksans: ["Work Sans", "sans-serif"],
        poppins: ['Poppins', "sans-serif"]
      },
      screens: {
        'smh': { 'raw': '(min-height: 540px)' },
        'mdh': { 'raw': '(min-height: 720px)' },
        'lgh': { 'raw': '(min-height: 920px)' },
      }
    },
  },
  plugins: [],
}