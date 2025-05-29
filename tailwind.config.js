/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        main1: "#100060",
        main2: "#826BE9",
        main3: "#2C517E",
        bg1: "#442F93",
        bg2: "#021333",
        logo1: "#2D40E9",
        logo2: "#962398",
      },
      fontFamily: {
        logoFont: ["New Rocker", "serif"],
        secondaryFont: ["Playfair Display SC", "serif"],
      },
      keyframes: {
        ping: {
          "0%": { transform: "scale(1)", opacity: "1" },
          "75%, 100%": { transform: "scale(2)", opacity: "0" },
        },
        fadeIn: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
      animation: {
        ping: "ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite",
        fadeIn: "fadeIn 0.3s ease-out",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
