import * as React from "react"
import BrowseAllArticles from "../components/BrowseAllArticles"
import EssentialArticles from "../components/EssentialArticles"
import Layout from "../layouts/Layout"
// markup
const IndexPage = () => {
  return (
    <Layout>
      <main className="container mx-auto px-4">
        <p className="text-lg font-serif mt-10">
          My Blog is not a Blog, is a digital garden. My Blog is not a Blog, is
          a digital garden. My Blog is not a Blog, is a digital garden. My Blog
          is not a Blog, is a digital garden.
          <br />
          My Blog is not a Blog, is a digital garden. My Blog is not a Blog, is
          a digital garden. My Blog is not a Blog, is a digital garden. My Blog
          is not a Blog, is a digital garden.
        </p>
        <EssentialArticles />
        <BrowseAllArticles />
      </main>
    </Layout>
  )
}

export default IndexPage
