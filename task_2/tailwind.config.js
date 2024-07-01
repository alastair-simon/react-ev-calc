/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#DEE1E8",
        white: "#FEFEFE",
        lightGrey: "#F2F2F2",
        midGrey: "#E2E2E2",
        darkGrey: "#AEAEAE",
        offBlack: "#151815",
        black: "#000000",
        green: "#5EE85B",
        yellowGreen: "#B9FF23",
      },
      fontFamily: {
        myfont: ["Plus Jakarta Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};

