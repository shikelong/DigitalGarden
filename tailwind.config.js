const plugin = require("tailwindcss/plugin")
const selectorParser = require("postcss-selector-parser")

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  darkMode: 'class',
  // darkMode: 'media',
  important: true,
  plugins: [
    "gatsby-plugin-postcss",
    require("@tailwindcss/typography"),
    require("daisyui")
  ],
}
