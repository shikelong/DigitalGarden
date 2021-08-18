import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import _ from "lodash"

interface IPinnedListProps {}

const PinnedList = (props: IPinnedListProps) => {
  const data = useStaticQuery(graphql`
    query PINNED_LIST_DATA {
      allMdx(
        filter: { frontmatter: { draft: { eq: false }, pinned: { eq: true } } }
        sort: { fields: [frontmatter___date], order: ASC }
      ) {
        nodes {
          ...PostSummary
        }
      }
    }
  `)

  const pinnedPosts = data.allMdx.nodes ?? []

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 list-none my-8 gap-6">
      {pinnedPosts.map((post, i) => (
        <li
          key={post.id}
          className={`border items-center h-48 p-4 bg-white rounded-lg border-black hover:shadow`}
        >
          <a
            href={`/${_.trim(post.slug, "/")}`}
            className="w-full h-full block px-2"
          >
            <h4
              title={post.frontmatter.title}
              className="text-xl mb-4 break-all"
            >
              {post.frontmatter.title}
            </h4>
            <p>{post.frontmatter.description}</p>
          </a>
        </li>
      ))}
    </ul>
  )
}

export default PinnedList
