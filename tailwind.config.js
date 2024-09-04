/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enables dark mode via a class
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#f8f8ff',
          dark: '#1a1a2e', // Custom dark mode background color
        },
        primary: {
          DEFAULT: '#008080',
          dark: '#ffdb70', // Custom dark mode primary color
        },
      },
    },
  },
  plugins: [],
}