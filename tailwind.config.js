/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html"],
  theme: {
    fontFamily: {
      inter: ["Inter", "sans-serif"],
    },
    extend: {
      width : {
         '128' : '15.2rem',
         'dropdown' : '40rem',
      },
      colors: {
        "header-background": "#191C1F",
        'popUp-menu' : 'rgba(31,34,38,.85)',
        "logo-background": "#feda03",
        "header-nav-link": "#ffffff99",
        'icon-color' : '#575A5B',
        'span-color' : 'rgba(255,255,255,0.85)',
        'span-color2' : 'rgba(255,255,255,0.6)',
      },
      backgroundColor: {
        "text-header-color":
          "radial-gradient(100% 283.68% at 100% 0%, rgb(252, 201, 20) 0%, rgb(254, 111, 55) 47.95%, rgb(198, 106, 221) 75.34%, rgb(154, 116, 241) 100%)",
        "header-input": "#ffffff0a",
        "icon-input": "#333638",
        'a-back' : 'rgba(255,255,255,0.04)',
        'body-background' : '#191C1F',
        'section-1-background' : "#302F1C"
      },
    },
  },
  plugins: [],
};
