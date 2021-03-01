const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: [
    "./components/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
    "./resume/**/*.{ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      xs: "460px",
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        gray: colors.gray,
        yellow: colors.amber,
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
