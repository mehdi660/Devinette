// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Montserrat",
          "Roboto",
          "Open Sans",
          "Lato",
          "Poppins",
          "sans-serif",
        ],
      },
    },
    colors: {
      "semi-light-gray": "rgba(255, 255, 255, 0.5)", // Couleur semi-claire
    },
  },
  plugins: [],
};
