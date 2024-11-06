/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "very-dark-desaturated-blue": "hsl(212, 27%, 19%)",
        "very-dark-grayish-blue": "hsl(213, 9%, 39%)",
        "dark-saturated-cyan-graphic-design": "hsl(167, 40%, 24%)",
      },
      fontFamily: {
        barlow: "Barlow",
        fraunces: "Fraunces",
      },
    },
  },
  plugins: [],
};
