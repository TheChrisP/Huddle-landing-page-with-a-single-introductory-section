module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        OpenSans: ["Open Sans"],
        Poppins: ["Poppins"],
      },
      colors: {
        Violet: "hsl(257, 40%, 49%)",
        SoftMagenta: "hsl(300, 69%, 71%)",
      },
      backgroundImage: {
        mobile: "url('./src/img/bg-mobile.svg')",
        desktop: "url('./src/img/bg-desktop.svg')",
      },
    },
  },
  plugins: [],
};
