module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-dark": "#262254",
        "primary-medium": "#543884",
        "primary-light": "#9A77CF",
        "second-dark": "#A13670",
      },
      fontFamily: {
        sans: ["Roboto", "Inter var", "sans-serif"],
      },
      backgroundImage: {
        'background-landing': "url('../src/images/background-landing.png')",
      }
    },
  },
  plugins: [],

}
