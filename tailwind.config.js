/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html"],
  theme: {
    fontFamily: {
      inter: ["Inter", "sans-serif"],
    },
    minWidth: {
      '100': '100px',
      '90': '90px',
      '80': '80px',
      '118' : '118px',
      'full' : 'max-content',
    },
    minHeight : {
      '40' : '40px'
    },
    extend: {
      width: {
        128: "15.2rem",
        dropdown: "40rem",
      },
      colors: {
        "header-background": "rgba(25,28,31,.85)",
        "popUp-menu": "rgba(25,28,31,.85)",
        "logo-background": "#feda03",
        "header-nav-link": "#ffffff99",
        "icon-color": "#575A5B",
        "span-color": "rgba(255,255,255,0.85)",
        "span-color2": "rgba(255,255,255,0.6)", 
        'border-color' : 'rgba(255,255,255,0.08)',
        'border-color2' : 'rgba(255,255,255,0.1)',
        'span-green' : 'rgb(40,184,51)',
        'span-red' : 'rgb(233,73,73)',
      },
      backgroundColor: {
        "text-header-color":
          "radial-gradient(100% 283.68% at 100% 0%, rgb(252, 201, 20) 0%, rgb(254, 111, 55) 47.95%, rgb(198, 106, 221) 75.34%, rgb(154, 116, 241) 100%)",
        "header-input": "#ffffff0a",
        "icon-input": "#333638",
        "a-back": "rgba(255,255,255,0.04)",
        "a-back-hover": "rgba(255,255,255,0.1)",
        "body-background": "#191C1F",
        "section-1-background": "#302F1C",
        "swiper-icon-bg": "#2c3236",
        "swiper-icon-bg-hover": "#30363B",
        "onAir-before-bg": "rgba(255,255,255,.2)",
        'div-chart-bg' : 'rgb(25,28,31)',
        'chart-eth-bg' : 'rgba(255,255,255,0.08)',
        'plus-bg' : "rgba(255,255,255,.3)",
        'NFT-market' : 'rgba(25, 28, 31, 0.6)',
        'section-banner-news':'rgba(122,122,0,0.08)',

      },
    },
  },
  plugins: [],
};
