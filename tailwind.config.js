/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        emerald: {
          900: '#064e3b',
          800: '#065f46',
        },
        amber: {
          500: '#f59e0b',
        }
      }
    },
  },
  plugins: [],
}