/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-dark': {
          DEFAULT: '#1C1B21',
        },
        'accent': {
          DEFAULT: '#71ADDD',
        },
      },
      fontFamily: {
        'display': ['Anton', 'sans-serif'],
        'body': ['Outfit', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

