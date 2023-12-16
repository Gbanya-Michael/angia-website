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
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
