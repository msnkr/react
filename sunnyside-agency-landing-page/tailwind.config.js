/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "very-dark-desaturated-blue": "hsl(212, 27%, 19%)",
        "very-dark-grayish-blue": "hsl(213, 9%, 39%)",
        "dark-saturated-cyan-graphic-design": "hsl(167, 40%, 24%)",
        "dark-blue-photography-text": "hsl(198, 62%, 26%)",
        "dark-moderate-cyan-footer": "hsl(168, 34%, 41%)",
        "grayish-blue": "hsl(210, 4%, 67%)",
        "dark-grayish-blue": "hsl(232, 10%, 55%)",
        "footer-background": "hsl(165, 47%, 74%)",
        "soft-red": "hsl(7, 99%, 70%)",
        "soft-yello": "hsl(51, 100%, 49%)",
      },
      fontFamily: {
        barlow: "Barlow",
        fraunces: "Fraunces",
      },
    },
  },
  plugins: [],
};
