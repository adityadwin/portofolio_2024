/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["'Poppins'", "sans-serif"],
      },
      screens: {
        xs: "180px", // Custom small breakpoint
      },
    },
  },
  plugins: [],
};
