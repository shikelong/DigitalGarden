import React from "react"
import Layout from "../layouts/Layout"

const About = ({ data, location }): JSX.Element => {
  return (
    <Layout>
      <Layout.Header location={location}></Layout.Header>
      <Layout.Content>
        <h1 className={"text-2xl mb-4"}>关于我</h1>
        <p>我的英文名叫 Rio，我信奉终身学习</p>
      </Layout.Content>
      <Layout.Footer></Layout.Footer>
    </Layout>
  )
}

export default About
