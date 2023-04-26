/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      // specifying screens is mandatory in every tailwind.config file
      zs: "85.5px",
      as: "120px",
      ys: "145px",
      bs: "96px",
      cs: "674px",
      ds: "812px",
      es: "652px",
      gs: "312px",
      ss: "342px",
      hs: "392px",
      is: "688px",
      js: "209px",
      ks: "500px",
      sm: "200px",
      xs: "320px", //min-width 480px
      // sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      dxl: "1440px",
      xlRange: { min: "1270px", max: "1400px" },
      mobile: { min: "320px", max: "767px" },
      tablet: { min: "768px", max: "1023px" },
      desktop: { min: "1024px", max: "2600px" },
      tab1: { min: "768px", max: "819px" },
      tab2: { min: "820px", max: "1023px" },
      desktopMax: { min: "1371px", max: "1700px" },
      desktopMin: { min: "1024px", max: "1370px" },
    },
    minWidth: {
      150: "150px",
    },
    minHeight: {
      768: "768px",
    },
    extend: {
      fontFamily: {
        monstserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
