/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        slide: "slide 1s ",
        fadeItem: "fadeItem 1s",
      },
      keyframes: {
        slide: {
          "0%": { transform: "translateX(-200%)" },
          "100%": { transform: "translateX(0)" },
        },
        fadeItem: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
