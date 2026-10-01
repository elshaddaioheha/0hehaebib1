/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  future: {
    // Hover styles only apply on devices that can actually hover, so taps don't leave "stuck" states on phones.
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      colors: {
        // Page roles: switch with the theme (values live in index.css under [data-theme])
        'bg-dark': 'rgb(var(--c-bg) / <alpha-value>)', // page background
        'accent': 'rgb(var(--c-accent) / <alpha-value>)', // headings, text and hairlines on the page
        'fg': 'rgb(var(--c-fg) / <alpha-value>)', // long-form body text
        'muted': 'rgb(var(--c-muted) / <alpha-value>)', // secondary labels
        'highlight': 'rgb(var(--c-highlight) / <alpha-value>)', // inline emphasis in prose
        'surface': 'rgb(var(--c-surface) / <alpha-value>)', // floating panels
        'signal': 'rgb(var(--c-signal) / <alpha-value>)', // punch red: markers, numbering, live state only

        // Card roles: the frosted hero/featured surfaces look the same in both themes
        'card': '#a8dadc', // frosted_blue
        'ink': '#0c1623', // oxford_navy-200, text on cards

        // Source palette
        'punch_red': { DEFAULT: '#e63946', 100: '#33060a', 200: '#660d14', 300: '#99131e', 400: '#cb1928', 500: '#e63946', 600: '#eb5f6b', 700: '#f08790', 800: '#f5afb5', 900: '#fad7da' },
        'honeydew': { DEFAULT: '#f1faee', 100: '#234c16', 200: '#47982c', 300: '#75ce57', 400: '#b4e4a3', 500: '#f1faee', 600: '#f5fbf2', 700: '#f7fcf6', 800: '#fafdf9', 900: '#fcfefc' },
        'frosted_blue': { DEFAULT: '#a8dadc', 100: '#163637', 200: '#2c6d6f', 300: '#42a3a6', 400: '#70c3c6', 500: '#a8dadc', 600: '#b9e2e3', 700: '#cae9ea', 800: '#dcf0f1', 900: '#edf8f8' },
        'cerulean': { DEFAULT: '#457b9d', 100: '#0e181f', 200: '#1b313e', 300: '#29495e', 400: '#37627d', 500: '#457b9d', 600: '#6097b9', 700: '#88b1cb', 800: '#b0cbdc', 900: '#d7e5ee' },
        'oxford_navy': { DEFAULT: '#1d3557', 100: '#060b12', 200: '#0c1623', 300: '#122035', 400: '#172b46', 500: '#1d3557', 600: '#315a93', 700: '#4e7fc4', 800: '#89aad8', 900: '#c4d4eb' },
      },
      keyframes: {
        'fade-in': {
          from: { opacity: '0', transform: 'translateY(10px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 500ms cubic-bezier(0.22, 1, 0.36, 1) both',
      },
      fontFamily: {
        'display': ['Anton', 'sans-serif'],
        'body': ['Outfit', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
