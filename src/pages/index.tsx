import * as React from "react"
import Layout from "../layouts/Layout"

const IndexPage = ({ data, location }) => {
  return (
    <Layout className={`homePage bg-scroll bg-cover`}>
      <Layout.Header location={location}></Layout.Header>
      <Layout.Content className="grid grid-flow-row gap-10">
        <h1 className=" text-6xl">To be continued...</h1>
      </Layout.Content>
      <Layout.Footer></Layout.Footer>
    </Layout>
  )
}

export default IndexPage
