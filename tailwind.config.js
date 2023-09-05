/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html"],
  theme: {
    extend: {
      colors: {
        "header-background": "#191c1fd9",
        "logo-background": "#feda03",
      },
      backgroundColor : {
        "text-header-color":
          "radial-gradient(100% 283.68% at 100% 0%, rgb(252, 201, 20) 0%, rgb(254, 111, 55) 47.95%, rgb(198, 106, 221) 75.34%, rgb(154, 116, 241) 100%)",
      }
    },
  },
  plugins: [],
};
