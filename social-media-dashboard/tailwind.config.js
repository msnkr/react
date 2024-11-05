/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "lime-green": " hsl(163, 72%, 41%)",
        "bright-red": "hsl(356, 69%, 56%)",
        facebook: "hsl(208, 92%, 53%)",
        twitter: "hsl(203, 89%, 53%)",
        "instagram-start": "hsl(37, 97%, 70%)",
        "instagram-end": "hsl(329, 70%, 58%)",
        youtube: "hsl(348, 97%, 39%)",
        "toggle-start": "hsl(210, 78%, 56%)",
        "toggle-end": "hsl(146, 68%, 55%)",
        "very-dark-blue": "hsl(230, 17%, 14%)",
        "very-dark-blue-top-pattern": "hsl(232, 19%, 15%)",
        "dark-desaturated-blue-card-bg": " hsl(228, 28%, 20%)",
        "desaturated-blue": "hsl(228, 34%, 66%)",
        "very-pale-blue-top-patter": "hsl(225, 100%, 98%)",
        "light-grayish-blue": "hsl(227, 47%, 96%)",
        "dark-grayish-blued": "hsl(228, 12%, 44%)",
        "very-dark-blue-light": "hsl(230, 17%, 14%)",
      },
    },
  },
  plugins: [],
};
