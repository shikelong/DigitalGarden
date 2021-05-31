import { graphql } from "gatsby"
import * as React from "react"
import BrowseAllPosts from "../components/BrowseAllPosts"
import EssentialPosts from "../components/EssentialPosts"
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
        <EssentialPosts />
        <BrowseAllPosts />
      </main>
    </Layout>
  )
}

export default IndexPage
