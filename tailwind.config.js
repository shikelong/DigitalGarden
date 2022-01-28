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
    "gatsby-plugin-postcss",
    plugin(function ({addVariant, prefix}) {
      addVariant("dark", ({modifySelectors, separator}) => {
        modifySelectors(({selector}) => {
          return selectorParser((selectors) => {
            selectors.walkClasses((sel) => {
              sel.value = `dark${separator}${sel.value}`
              sel.parent.insertBefore(
                sel,
                selectorParser().astSync(".scheme-dark ")
              )
            })
          }).processSync(selector)
        })
      })
    }),
    plugin(function ({addVariant, e}) {
      addVariant("dark-hover", ({modifySelectors, separator}) => {
        modifySelectors(({className}) => {
          return `.scheme-dark .${e(
            `dark\:hover${separator}${className}`
          )}:hover`
        })
      })
    }),
  ],
}
