/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'primaryColor': '#233745',
        'primaryDarkColor' :'#2e2e2e',
        'containerColor': '#FFFFFF',
        'inutColor' : '#202020',
        'navColor': '#401C8C'
      }
    },
  },
  plugins: [],
};