import * as React from "react"
import "../styles/global.css"
import Layout from "../layouts/Layout"
import Nav from "../layouts/Nav"

const IndexPage = ({ data, location }) => {
  return (
    <Layout className={`homePage bg-scroll bg-cover`}>
      <Layout.Header location={location}></Layout.Header>
      <Layout.Sidebar location={location}></Layout.Sidebar>
      <Layout.Content className="grid grid-flow-row gap-10 ml-60">
        <h1 className="text-6xl">To be continued...</h1>
      </Layout.Content>
      <Layout.Footer></Layout.Footer>
    </Layout>
  )
}

export default IndexPage
