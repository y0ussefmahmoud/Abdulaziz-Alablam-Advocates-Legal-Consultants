/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#FBD070",
        "background": "#2F3E46",
        "surface": "#37474F",
        "on-surface": "#FFFFFF",
        "on-primary": "#2F3E46",
      },
      fontFamily: {
        "headline": ["Noto Serif", "serif"],
        "body": ["Manrope", "sans-serif"],
      },
      borderRadius: {
        "DEFAULT": "0px",
        "lg": "4px",
        "xl": "8px",
        "full": "9999px",
      },
    },
  },
  plugins: [],
}
