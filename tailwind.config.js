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
        "second-medium": "#EC4176",
        "second-light": "#FFA45E",
      },
      fontFamily: {
        sans: ["Roboto", "Inter var", "sans-serif"],
      },
      backgroundImage: {
        'background-landing': "url('../src/images/background-landing.png')",
        'logo': "url('../src/images/logo-only.png')",
        'logo-name': "url('../src/images/logo-name.png')",
      }
    },
  },
  plugins: [],

}
