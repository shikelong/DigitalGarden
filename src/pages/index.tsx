import { graphql } from "gatsby"
import * as React from "react"
import BrowseAllPosts from "../components/BrowseAllPosts"
import PostList from "../components/PostList"
import Layout from "../layouts/Layout"
// markup
const IndexPage = () => {
  return (
    <Layout>
      <main className="container 2xl:container mx-auto px-4">
        <PostList />
        <BrowseAllPosts />
      </main>
    </Layout>
  )
}

export default IndexPage
