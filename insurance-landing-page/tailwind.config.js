/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-violet": "hsl(256, 26%, 20%)",
        "grayish-blue": "hsl(216, 30%, 68%)",
      },
      fontFamily: {
        fontDM: "DM Serif Display",
        fontKarla: "Karla",
      },
    },
  },
  plugins: [],
};
