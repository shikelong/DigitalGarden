import React from "react"
import Layout from "../layouts/Layout"

const About = ({ data, location }): JSX.Element => {
  return (
    <Layout>
      <Layout.Header location={location}></Layout.Header>
      <Layout.Content>About</Layout.Content>
      <Layout.Footer></Layout.Footer>
    </Layout>
  )
}

export default About
