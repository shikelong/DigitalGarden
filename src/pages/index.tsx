import { graphql } from "gatsby"
import React, { useEffect } from "react"
import { Post } from "types/types"
import OceanShowCase from "../components/OceanShowCase"
import PostCard from "../components/PostCard"
import { AppHeader } from "../layouts/AppHeader"
import AppLayout from "../layouts/AppLayout"
import { autoAsyncStorageToDOM } from "../utils/darkMode"

const Posts = ({ data }) => {
  useEffect(() => {
    autoAsyncStorageToDOM()
  }, [])

  return (
    <AppLayout>
      <AppLayout.Header>
        <OceanShowCase>
          <AppHeader />
        </OceanShowCase>
      </AppLayout.Header>
      <AppLayout.Sidebar />
      <AppLayout.Content>
        <ul className="container max-w-4xl mx-auto divide-y bg-gradient-to-t from-blue-500 to-emerald-600">
          {data.allMdx.nodes.map((post: Post, index) => (
            <PostCard key={index} postContent={post} />
          ))}
        </ul>
      </AppLayout.Content>
      <AppLayout.Footer></AppLayout.Footer>
    </AppLayout>
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
