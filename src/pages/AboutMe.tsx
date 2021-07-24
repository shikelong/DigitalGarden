import React from "react"
import Layout from "../layouts/Layout"

type AboutMeProps = {
  location: Location
}

const AboutMe = ({ location }: AboutMeProps) => {
  return (
    <Layout>
      <Layout.Header location={location}></Layout.Header>
      <Layout.Content>
        <div>About Me</div>
      </Layout.Content>
      <Layout.Footer></Layout.Footer>
    </Layout>
  )
}

export default AboutMe
