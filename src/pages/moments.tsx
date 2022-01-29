import React from "react"
import Layout from "../layouts/Layout"

type momentsProps = {}

const moments = (props: momentsProps): JSX.Element => {
  return (
    <Layout>
      <Layout.Header></Layout.Header>
      <Layout.Sidebar />
      <Layout.Content>Moments</Layout.Content>
      <Layout.Footer></Layout.Footer>
    </Layout>
  )
}

export default moments
