/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef8ff",
          100: "#d9eeff",
          200: "#bce3ff",
          300: "#8ed3ff",
          400: "#59b8ff",
          500: "#3697ff",
          600: "#1f74f4",
          700: "#1a5dde",
          800: "#1d4bb4",
          900: "#1d428e",
        },
        ink: {
          50: "#f6f8fc",
          100: "#e9edf5",
          200: "#d5dce9",
          300: "#b5c0d3",
          400: "#8996ad",
          500: "#667289",
          600: "#4d576b",
          700: "#394152",
          800: "#222936",
          900: "#111620",
          950: "#090d14",
        },
        accent: {
          400: "#2dd4bf",
          500: "#14b8a6",
          600: "#0d9488",
        },
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "Segoe UI", "system-ui", "sans-serif"],
        display: ["var(--font-outfit)", "var(--font-manrope)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 40px rgb(54 151 255 / 0.15)",
      },
      keyframes: {
        "enter-up": {
          from: { opacity: "0", transform: "translateY(10px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
      animation: {
        "enter-up": "enter-up 500ms ease-out both",
        "fade-in": "fade-in 600ms ease-out both",
      },
    },
  },
  plugins: [],
};
