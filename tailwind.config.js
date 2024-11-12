/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "light",
  theme: {
    extend: {
      colors:{
        bg_primary: "#111827",
        bg_secondary: "#f59e0b",
        bg_tertiary: "#161f33",
        text_color_light: '#fcfcfc',
        text_color_dark: '#e3e3e3'
      }
    },
  },
  plugins: [require('daisyui')],
}

