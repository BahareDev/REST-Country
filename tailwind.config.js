/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["Nunito Sans Variable"],
      },

      colors: {
        DarkBlue: "#2b3945",
        BackDarkBlue: "#202c37",
        TextDarkBlue: "#111517",
        DarkGray: "#858585",
        LightGray: "#fafafa",
      },
    },
  },
  plugins: [],
};
