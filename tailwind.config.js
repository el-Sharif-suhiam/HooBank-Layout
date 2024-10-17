/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dimWhite: "#FFFFFFB2",
        primary: "#00040f",
        secondary: "#00f6ff",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      adel: ["Abel", "sans-serif"],
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
