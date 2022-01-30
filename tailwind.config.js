const plugin = require("tailwindcss/plugin")
const selectorParser = require("postcss-selector-parser")

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  darkMode: 'class',
  important: true,
  plugins: [
    "gatsby-plugin-postcss"
  ],
}
