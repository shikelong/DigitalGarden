import { CalendarIcon } from "@heroicons/react/outline"
import { graphql } from "gatsby"
import _ from "lodash"
import * as React from "react"
import Tag from "../components/Tag"
import Layout from "../layouts/Layout"
import { Post } from "../types"

const Posts = ({ data, location }) => {
  return (
    <Layout>
      <Layout.Header location={location}></Layout.Header>
      <Layout.Sidebar location={location} />
      <Layout.Content>
        <ul className="container max-w-4xl mx-auto border-2 border-black divide-y">
          {data.allMdx.nodes.map((post: Post, index) => (
            <li key={index} className="py-2 px-4 mb-3 border-black">
              <a href={`/${_.trim(post.slug, "/")}`}>
                <h3 className="font-bold text-lg hover:text-purple-700 mb-2">
                  {post.frontmatter.title}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400 tracking-wide">
                    <CalendarIcon
                      className="w-4 h-4 inline mr-1 relative"
                      style={{ top: -1 }}
                    ></CalendarIcon>
                    {post.frontmatter.date}
                  </span>
                  <span>
                    {post.frontmatter.tags.map((tag: string, index) => (
                      <Tag key={index}>{tag}</Tag>
                    ))}
                  </span>
                </div>
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
  query POSTS_QUERY {
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

export default Posts
