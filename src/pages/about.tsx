import React from "react"
import Layout from "../layouts/Layout"

const About = ({ data, location }): JSX.Element => {
  return (
    <Layout>
      <Layout.Header location={location}></Layout.Header>
      <Layout.Sidebar location={location} />
      <Layout.Content>
        <p className="border p-10 my-10 shadow text-xl">
          <h2 className="font-semibold text-3xl mb-8">观测 / 探索 / 表达</h2>
          <p>
            来世间一趟，除了不停的输入，更重要的对这个世界的输出。<br></br>
            这也是这个 Blog 存在于此的意义，希望这里的内容对你有所帮助。
          </p>
        </p>
      </Layout.Content>
      <Layout.Footer></Layout.Footer>
    </Layout>
  )
}

export default About
