/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-red": "hsl(0, 100%, 67%)",
        "orangey-yellow": "hsl(39, 100%, 56%)",
        "green-teal": "hsl(166, 100%, 37%)",
        "cobalt-blue": "hsl(234, 85%, 45%)",
        "light-slate-blue-background": "hsl(252, 100%, 67%)",
        "light-royal-blue-background": "hsl(241, 81%, 54%)",
        "violet-blue-circle": "hsla(256, 72%, 46%, 1)",
        "persian-blue-circle": "hsla(241, 72%, 46%, 0)",
        "pale-blue": "hsl(221, 100%, 96%)",
        "light-lavender": "hsl(241, 100%, 89%)",
        "dark-gray-blue": "hsl(224, 30%, 27%)",
      },
      fontFamily: {
        customFont: "Hanken Grotesk",
      },
    },
  },
  plugins: [],
};
