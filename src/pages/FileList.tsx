import React from "react"
import { graphql } from "gatsby"
import Layout from "../layouts/Layout"
import Tag from "../components/Tag"
import _ from "lodash"

interface IFileListProps {
  data: any
  location: Location
}

/**
 * This page is only for test. you can via this page to check the unpublished pages.
 * @param props
 * @returns
 */
const FileList = (props: IFileListProps) => {
  const { data, location } = props
  console.log(data)
  return (
    <Layout>
      <Layout.Header location={location}></Layout.Header>
      <Layout.Content>
        <h1>My Site's Markdown Files:</h1>
        <table className="border-green-600 border m-4">
          <thead>
            <tr>
              <th className="p-2">relativePath</th>
              <th className="p-2">prettySize</th>
              <th className="p-2">extension</th>
              <th className="p-2">birthTime</th>
              <th className="p-2">tags</th>
              <th className="p-2">isDraft</th>
            </tr>
          </thead>
          <tbody>
            {data.allFile.edges.map(({ node }, index) => {
              const frontmatter = node.childrenMdx[0]?.frontmatter || {}
              return (
                <tr key={index} className="border-green-600 border">
                  <td className="py-2 px-2">
                    <a
                      href={`/${_.trim(frontmatter.slug, "/")}`}
                      target="_blank"
                      className="cursor-pointer hover:underline"
                    >
                      {node.relativePath}
                    </a>
                  </td>
                  <td className="py-2 px-2">{node.prettySize}</td>
                  <td className="py-2 px-2">{node.extension}</td>
                  <td className="py-2 px-2">{node.birthTime}</td>
                  <td className="py-2 px-2">
                    {(frontmatter.tags ?? []).map((tag, index) => (
                      <Tag>{tag}</Tag>
                    ))}
                  </td>
                  <td className="py-2 px-2">
                    {frontmatter.draft ? "✅" : "❌"}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </Layout.Content>
      <Layout.Footer></Layout.Footer>
    </Layout>
  )
}

export const query = graphql`
  query {
    allFile(filter: { ext: { regex: "/(.md|.mdx)/" } }) {
      edges {
        node {
          relativePath
          prettySize
          extension
          birthTime(fromNow: true)
          childrenMdx {
            frontmatter {
              title
              tags
              draft
              category
              slug
            }
          }
        }
      }
    }
  }
`

export default FileList
