/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        fade: "fade 3s ease-in-out",
        scale: "scale 1s",
        rotate: "rotate 3s infinite",
        flip: "flip 1s",
        translateX: "translateX 2s",
      },
      keyframes: {
        fade: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        scale: {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.5)" },
          "100%": { transform: "scale(1)" },
        },
        rotate: {
          "0%": { transform: "rotate(0)" },
          "100%": { transform: "rotate(360deg)" },
        },
        flip: {
          "0%": { transform: "scaleX(1)" },
          "50%": { transform: "scaleX(-1)" },
          "100%": { transform: "scaleX(1)" },
        },
        translateX: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};
