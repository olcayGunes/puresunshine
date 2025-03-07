/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        noble: {
          DEFAULT: 'rgb(28, 41, 97)',
          hover: 'rgb(22, 33, 78)'
        }
      }
    },
  },
  plugins: [],
}; 