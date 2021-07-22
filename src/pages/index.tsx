import { graphql, useStaticQuery } from "gatsby"
import * as React from "react"
import BrowseAllPosts from "../components/BrowseAllPosts"
import PostList from "../components/PostList"
import Layout from "../layouts/Layout"

const IndexPage = () => {
  return (
    <Layout>
      <div>
        <PostList />
        <BrowseAllPosts />
      </div>
    </Layout>
  )
}

export default IndexPage
