import React from "react"
import { graphql } from "gatsby"
import Layout from "../layouts/Layout"

interface IFileListProps {
  data: any
  location: Location
}

const FileList = (props: IFileListProps) => {
  const { data, location } = props
  return (
    <Layout>
      <Layout.Header location={location}></Layout.Header>
      <Layout.Content>
        <h1>My Site's Files</h1>
        <table className="border-green-600 border m-4">
          <thead>
            <tr>
              <th className="p-2">relativePath</th>
              <th className="p-2">prettySize</th>
              <th className="p-2">extension</th>
              <th className="p-2">birthTime</th>
            </tr>
          </thead>
          <tbody>
            {data.allFile.edges.map(({ node }, index) => (
              <tr key={index} className="border-green-600 border">
                <td className="py-2 px-2">{node.relativePath}</td>
                <td className="py-2 px-2">{node.prettySize}</td>
                <td className="py-2 px-2">{node.extension}</td>
                <td className="py-2 px-2">{node.birthTime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Layout.Content>
      <Layout.Footer></Layout.Footer>
    </Layout>
  )
}

export const query = graphql`
  query {
    allFile {
      edges {
        node {
          relativePath
          prettySize
          extension
          birthTime(fromNow: true)
        }
      }
    }
  }
`

export default FileList
