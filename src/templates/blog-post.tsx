import {
  ArrowLeftIcon,
  ArrowRightIcon,
  CalendarIcon,
} from "@heroicons/react/outline"
import { graphql, Link } from "gatsby"
import * as React from "react"
import MdxBlock from "../components/MdxBlock"
import ShowCase from "../components/ShowCase"
import { AppHeader } from "../layouts/AppHeader"
import AppLayout from "../layouts/AppLayout"
import { Post } from "../types/types"
import { Helmet } from "react-helmet"

const BlogPostTemplate = ({
  data,
}: {
  data: {
    previous: Post
    next: Post
    post: Post
  }
}) => {
  const { previous, next, post } = data

  return (
    <AppLayout>
      <Helmet>
        <link
          rel="stylesheet"
          media="all"
          href="//cdnjs.cloudflare.com/ajax/libs/Han/3.3.0/han.min.css"
        />
      </Helmet>
      <AppLayout.Header>
        <AppHeader />
      </AppLayout.Header>
      <AppLayout.Sidebar></AppLayout.Sidebar>
      <AppLayout.Content className="max-w-5xl">
        <div>
          <article
            className="blog-post prose dark:prose-invert max-w-none"
            itemScope
            itemType="http://schema.org/Article"
          >
            <header>
              <h1
                itemProp="headline"
                className="text-4xl font-bold text-center mb-10"
              >
                {post.frontmatter.title}
              </h1>
            </header>
            <hr />
            <MdxBlock content={post.body}></MdxBlock>
            <hr />
            <footer className="my-6">
              <span className="text-sm text-gray-400 tracking-wide">
                <CalendarIcon
                  className="w-4 h-4 inline mr-1 relative"
                  style={{ top: -1 }}
                ></CalendarIcon>
                {post.frontmatter.date}
              </span>
            </footer>
          </article>
          <nav className="blog-post-nav mt-24">
            <ul
              style={{
                display: `flex`,
                flexWrap: `wrap`,
                justifyContent: `space-between`,
                listStyle: `none`,
                padding: 0,
              }}
              className="mt-8"
            >
              <li>
                {previous && !previous.frontmatter.draft && (
                  <Link
                    to={`/${previous.slug}`}
                    rel="prev"
                    className="inline-flex items-center gap-2 hover:underline"
                  >
                    <ArrowLeftIcon className="h-4 inline-block"></ArrowLeftIcon>{" "}
                    {previous.frontmatter.title}
                  </Link>
                )}
              </li>
              <li>
                {next && !next.frontmatter.draft && (
                  <Link
                    to={`/${next.slug}`}
                    rel="next"
                    className="inline-flex items-center gap-2 hover:underline"
                  >
                    {next.frontmatter.title}{" "}
                    <ArrowRightIcon className="h-4 inline-block"></ArrowRightIcon>
                  </Link>
                )}
              </li>
            </ul>
          </nav>
        </div>
      </AppLayout.Content>
      <AppLayout.Footer></AppLayout.Footer>
    </AppLayout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    post: mdx(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        date(formatString: "YYYY/MM/DD")
      }
    }
    previous: mdx(id: { eq: $previousPostId }) {
      frontmatter {
        title
      }
      slug
    }
    next: mdx(id: { eq: $nextPostId }) {
      frontmatter {
        title
      }
      slug
    }
  }
`
