import { graphql } from "gatsby"
import * as React from "react"
import BrowseAllPosts from "../components/BrowseAllPosts"
import PostList from "../components/PostList"
import Layout from "../layouts/Layout"
// markup
const IndexPage = () => {
  return (
    <Layout>
      <>
        <PostList />
        <BrowseAllPosts />
      </>
    </Layout>
  )
}

export default IndexPage
