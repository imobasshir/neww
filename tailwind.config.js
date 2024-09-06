/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enables dark mode via a class
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      vs: '320px',
      xxs: '460px',
      xs: '580px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      my: '1200px',
      xl: '1280px',
      '2xl': '1536px',
    },
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