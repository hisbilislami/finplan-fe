const { fontFamily } = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-quicksand)", ...fontFamily.sans],
        serif: ["var(--font-quicksand)", ...fontFamily.serif],
      },
      colors: {
        "bill-white": "#ffffff",
        "bill-misty-rose": "#ffeaeb",
        "bill-imperial-red": "#ff4045",
        "bill-snow": "#fff9f9",
        "bill-french-gray": "#b7b6bb",
        "bill-oxford-blue": "#171e32",
        "bill-light-coral": "#e68084",
        "bill-orange-web": "#ffb336",
        "bill-blue-crayola": "#0076fb",
        "bill-light-sea-green": "#00b9ab",
      },
    },
  },
  plugins: [],
};
