module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
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

        //
        // "primary-color-500": "#8A42DB",
        // "primary-color-400": "#9b67e8",
        "primary-color-500": "#262254",
        "primary-color-400": "#543884",
        "secondary-color": "#7DFFAF",

        // Surface-colors
        "surface-background": "#171023",
        "surface-primary": "#2C243B",
        "surface-secondary": "#413A4F",
        "surface-tertiary": "#4E4563",

        // Text-colors
        "text-primary": "#F5F6F6",
        "text-secondary": "#CDD0D4",
      },
      fontFamily: {
        sans: ["Hebbo", "Inter var", "sans-serif"],
        cursive: ["Kalam", "cursive"],
      },
      backgroundImage: {
        "background-landing": "url('../assets/images/background-landing.png')",
        logo: "url('../assets/images/logo-only.png')",
        "logo-name": "url('../assets/images/logo-name.png')",
      },
    },
  },
  plugins: [],
};
