import * as React from "react"
import GlobalSearch from "../components/GlobalSearch"
import SiteLogo from "../components/SiteLogo"
import ThemeToggle from "../components/ThemeToggle"
import Layout from "../layouts/Layout"
import { useUsePerfersMode } from "../utils"
// markup
const IndexPage = () => {
  useUsePerfersMode()
  return (
    <Layout>
      <main className="container mx-auto px-4">
        <p className="text-lg font-serif mt-10">
          My Blog is not a Blog, is a digital garden.
        </p>
      </main>
    </Layout>
  )
}

export default IndexPage
