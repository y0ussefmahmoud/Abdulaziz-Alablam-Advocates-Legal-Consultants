/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-primary': '#111827',
        'dark-secondary': '#1f2937',
        'dark-accent': '#374151',
        'gold': '#eab308',
        'gold-dark': '#ca8a04',
      },
      fontFamily: {
        'arabic': ['Cairo', 'sans-serif'],
        'english': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
