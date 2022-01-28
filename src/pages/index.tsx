import { CalendarIcon } from "@heroicons/react/outline"
import { graphql } from "gatsby"
import _ from "lodash"
import * as React from "react"
import Tag from "../components/Tag"
import Layout from "../layouts/Layout"
import { Post } from "../types"
import Card from "../components/Card"
import PostCard from "../components/PostCard"
import OceanShowCase from "../components/OceanShowCase"
import { AppHeader } from "../layouts/AppHeader"

const Posts = ({ data, location }) => {
  return (
    <Layout>
      <Layout.Header location={location}>
        <OceanShowCase>
          <AppHeader location={location} />
        </OceanShowCase>
      </Layout.Header>
      <Layout.Sidebar location={location} />
      <Layout.Content>
        <ul className="container max-w-4xl mx-auto divide-y bg-gradient-to-t from-blue-500 to-emerald-600">
          {data.allMdx.nodes.map((post: Post, index) => (
            <PostCard key={index} postContent={post} />
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
