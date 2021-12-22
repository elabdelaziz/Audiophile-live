module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    fontFamily: {
      sans: ["Manrope", "sans-serif"],
    },
    container: {
      padding: "1rem",
    },
    heroContainer: {
      padding: "1rem",
    },
    letterSpacing: {
      custom1: "0.2em",
    },
    extend: {
      colors: {
        darkOrange: "#D87D4A",
        darkGray: "#101010",
        lightGray: "#F1F1F1",
        nearWhite: "#F1F1F1",
        lightOrange: "#fbaf85",
        midOrange: "#D87D4A",
      },
      backgroundImage: (theme) => ({
        "home-hero-mobile":
          "url('../public/assets/home/mobile/image-header.jpg')",
        "home-hero-desktop":
          "url('../public/assets/home/desktop/image-hero.jpg')",
        "pattern-circles":
          "url('../public/assets/home/desktop/pattern-circles.svg')",
      }),
      margin: {
        mainMargin: "10rem",
      },
      // section: {
      //   paddingTop: "2rem",
      // },
    },
  },
  plugins: [],
};
