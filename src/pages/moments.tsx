import React from "react"
import Layout from "../layouts/Layout"

type momentsProps = {}

const moments = (props: momentsProps): JSX.Element => {
  return (
    <Layout>
      <Layout.Header location={location}></Layout.Header>
      <Layout.Sidebar location={location} />
      <Layout.Content>Moments</Layout.Content>
      <Layout.Footer></Layout.Footer>
    </Layout>
  )
}

export default moments
