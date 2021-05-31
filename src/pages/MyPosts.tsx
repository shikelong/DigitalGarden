import { graphql } from "gatsby"
import * as React from "react"
import Layout from "../layouts/Layout"
import { Post } from "../types"

const MyPosts = ({ data }) => {
  return (
    <Layout>
      <>
        <div>My Blog Posts</div>
        <ul>
          {data.allMdx.nodes.map((post, index) => (
            <li key={index}>
              {post.frontmatter.title}
              {post.frontmatter.data}
            </li>
          ))}
        </ul>
      </>
    </Layout>
  )
}

export const query = graphql`
  query SITE_INDEX_QUERY {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        id
        excerpt(pruneLength: 250)
        frontmatter {
          title
          date(formatString: "YYYY MMMM Do")
        }
        slug
      }
    }
  }
`

export default MyPosts
