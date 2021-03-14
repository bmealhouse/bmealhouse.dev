const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: [
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
    "./logos/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      xs: "460px",
      ...defaultTheme.screens,
    },
    ringColor: (theme) => ({
      DEFAULT: theme("colors.gray.500", "#71717a"),
      ...theme("colors"),
    }),
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
