import { createThemes } from "tw-colors";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {},
  },
  plugins: [
    createThemes({
      light: {
        primary: "#FF0000",
        secondary: "#00FF00",
      },
      dark: {
        primary: "#0000FF",
        secondary: "#FFFF00",
      },
    }),
  ],
};
