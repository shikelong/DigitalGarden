import React from "react"
import Layout from "../layouts/Layout"
import { MyH1 } from "../components/MdxBlock"

interface IDigitalGardenProps {
  location: Location
}

const DigitalGarden = (props: IDigitalGardenProps) => {
  return (
    <Layout>
      <Layout.Header location={props.location}></Layout.Header>
      <Layout.Content>
        <h2 className="text-2xl">🌱 To be grow up...</h2>
      </Layout.Content>
      <Layout.Footer></Layout.Footer>
    </Layout>
  )
}

export default DigitalGarden
