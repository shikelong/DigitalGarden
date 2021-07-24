import { graphql } from "gatsby"
import _ from "lodash"
import * as React from "react"
import Layout from "../layouts/Layout"
import { Post } from "../types"

const MyPosts = ({ data, location }) => {
  return (
    <Layout>
      <Layout.Header location={location}></Layout.Header>
      <Layout.Content>
        <ul className="container max-w-4xl mx-auto border divide-y">
          {data.allMdx.nodes.map((post: Post, index) => (
            <li key={index} className="p-4">
              <a href={`/${_.trim(post.slug, "/")}`}>
                <h3 className="font-bold text-lg hover:text-blue-400">
                  {post.frontmatter.title}
                </h3>
                {post.frontmatter.data}
              </a>
            </li>
          ))}
        </ul>
      </Layout.Content>
      <Layout.Footer></Layout.Footer>
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
