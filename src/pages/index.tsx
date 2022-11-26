import { graphql } from "gatsby"
import React, { useEffect } from "react"
import { Post } from "../types/types"
import PostCard from "../components/PostCard"
import { AppHeader } from "../layouts/AppHeader"
import AppLayout from "../layouts/AppLayout"
import { autoAsyncStorageToDOM } from "../utils/darkMode"
import { Helmet } from "react-helmet"

const Posts = ({ data }) => {
  useEffect(() => {
    autoAsyncStorageToDOM()
  }, [])

  return (
    <AppLayout>
      <AppLayout.Header>
        <Helmet>
          <link
            rel="stylesheet"
            media="all"
            href="//cdnjs.cloudflare.com/ajax/libs/Han/3.3.0/han.min.css"
          />
        </Helmet>
        <AppHeader />
      </AppLayout.Header>
      <AppLayout.Sidebar />
      <AppLayout.Content className="border-l-[3px] border-black flex">
        <ul className="container max-w-4xl mx-auto list-disc">
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
