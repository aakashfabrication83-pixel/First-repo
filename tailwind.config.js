/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./script.js"],
  theme: {
    extend: {
      colors: {
        acf: {
          ink: "#080b0e",
          panel: "#11171c",
          orange: "#ff7a1a",
          lime: "#d8ff65",
          paper: "#f0f1ec"
        }
      },
      fontFamily: {
        sans: ["Manrope", "Arial", "sans-serif"],
        mono: ["DM Mono", "monospace"]
      },
      boxShadow: {
        glow: "0 12px 34px rgba(255,122,26,.22)"
      }
    }
  },
  plugins: []
};
