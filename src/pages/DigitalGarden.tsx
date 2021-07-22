import React from "react"
import Layout from "../layouts/Layout"
import { MyH1 } from "../components/MdxBlock"

interface IDigitalGardenProps {}

const DigitalGarden = (props: IDigitalGardenProps) => {
  return (
    <Layout>
      <h2 className="text-2xl">🌱 To be grow up...</h2>
    </Layout>
  )
}

export default DigitalGarden
