/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}" // This will ensure Tailwind scans all your JS/JSX/TS/TSX files for class names.
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
