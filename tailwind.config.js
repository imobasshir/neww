/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enables dark mode via a class
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#ffffff',
          dark: '#1a1a2e', // Custom dark mode background color
        },
      },
    },
  },
  plugins: [],
}