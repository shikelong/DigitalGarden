import { graphql, useStaticQuery } from "gatsby"
import * as React from "react"
import BrowseAllPosts from "../components/BrowseAllPosts"
import PostList from "../components/PostList"
import Layout from "../layouts/Layout"

const IndexPage = ({ data, location }) => {
  console.log("data", data)

  return (
    <Layout>
      <Layout.Header location={location}></Layout.Header>
      <Layout.Content>
        <PostList />
        <BrowseAllPosts />
      </Layout.Content>
      <Layout.Footer></Layout.Footer>
    </Layout>
  )
}

export const query = graphql`
  fragment PostSummary on Mdx {
    id
    excerpt(pruneLength: 250)
    frontmatter {
      title
      date(formatString: "YYYY/MM/DD")
      tags
    }
    slug
  }
  query FAV_POSTS_QUERY {
    allMdx(
      filter: { frontmatter: { draft: { eq: false } } }
      sort: { fields: [frontmatter___date], order: ASC }
    ) {
      nodes {
        ...PostSummary
      }
    }
  }
`

export default IndexPage
