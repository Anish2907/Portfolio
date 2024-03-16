/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'tablet': '481px',
      'large-tablet': '700px',
      'laptop': '1000px',
      'desktop': '1700px'
    },
    extend: {
      colors: {
        beigesh: "#f8f7ee",
        deepBeigsh: "#c6ba4e",
      },
      fontFamily: {
        'sans': ['"General Sans"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}

