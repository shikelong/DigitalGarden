module.exports = {
  siteMetadata: {
    title: "RioShi's Digital Garden",
  },
  plugins: [
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "G-JPCFLEVF9L",
      },
    },
    "gatsby-plugin-react-helmet",
    // "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/logo.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.md`, `.mdx`],
        defaultLayouts: {
          default: require.resolve("./src/layouts/PostsLayout.tsx"),
        },
      },
    },
  ],
}
