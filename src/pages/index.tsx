import { graphql, useStaticQuery } from "gatsby"
import * as React from "react"
import BrowseAllPosts from "../components/BrowseAllPosts"
import PostList from "../components/PostList"
import Layout from "../layouts/Layout"

const IndexPage = (props) => {
  return (
    <Layout>
      <Layout.Header location={props.location}></Layout.Header>
      <Layout.Content>
        <PostList />
        <BrowseAllPosts />
      </Layout.Content>
      <Layout.Footer></Layout.Footer>
    </Layout>
  )
}

export default IndexPage
