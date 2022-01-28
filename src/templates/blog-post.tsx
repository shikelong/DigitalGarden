import * as React from "react"
import { Link, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../layouts/Layout"
import MdxBlock from "../components/MdxBlock"
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  CalendarIcon,
} from "@heroicons/react/outline"
import { Helmet } from "react-helmet"
import { AppHeader } from "../layouts/AppHeader"
import ShowCase from "../components/ShowCase"

const BlogPostTemplate = ({ data, location }) => {
  const post = data.mdx
  const { previous, next } = data

  return (
    <Layout>
      <Helmet>
        <link rel="stylesheet" href="https://unpkg.com/heti/umd/heti.min.css" />
        <script src="//unpkg.com/heti/umd/heti-addon.min.js"></script>
        <script>
          {`window.onload = function() {
              var heti = new Heti('.heti');
              heti.autoSpacing();
            }`}
        </script>
      </Helmet>
      <Layout.Header location={location}>
        <ShowCase
          size="small"
          className="bg-gradient-to-b from-white to-slate-500 text-white"
        >
          <AppHeader location={location} />
        </ShowCase>
      </Layout.Header>
      <Layout.Sidebar location={location}></Layout.Sidebar>
      <Layout.Content className="max-w-5xl">
        <div>
          <article
            className="blog-post"
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
                {previous && (
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
                {next && (
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
      </Layout.Content>
      <Layout.Footer></Layout.Footer>
    </Layout>
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
    mdx(id: { eq: $id }) {
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
