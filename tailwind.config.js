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
  },
  plugins: [],
};
