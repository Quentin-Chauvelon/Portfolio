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
  safelist: [
    // Colors for the skills cards
    "bg-[--skills-general-bg-color]",
    "text-[--skills-general-color]",
    "border-[--skills-general-color]",
    "shadow-[--skills-general-bg-color]",
    "bg-[--skills-web-bg-color]",
    "text-[--skills-web-color]",
    "border-[--skills-web-color]",
    "shadow-[--skills-web-bg-color]",
    "bg-[--skills-databases-bg-color]",
    "text-[--skills-databases-color]",
    "border-[--skills-databases-color]",
    "shadow-[--skills-databases-bg-color]",
    "bg-[--skills-frameworks-bg-color]",
    "text-[--skills-frameworks-color]",
    "border-[--skills-frameworks-color]",
    "shadow-[--skills-frameworks-bg-color]",
    "bg-[--skills-others-bg-color]",
    "text-[--skills-others-color]",
    "border-[--skills-others-color]",
    "shadow-[--skills-others-bg-color]",
  ]
}