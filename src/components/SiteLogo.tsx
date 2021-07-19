import React from "react"
import logo from "../images/logo.png"

import { graphql, useStaticQuery } from "gatsby"

const SiteLogo = (): JSX.Element => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          siteUrl
        }
      }
    }
  `)

  console.log("data: ", data)

  const siteName = data.site.siteMetadata.title

  return (
    <a href="/" className="flex items-center cursor-pointer">
      <img src={logo} className="w-20 float-left" alt={siteName} />
      <h1
        className={`ml-6 2xl:text-3xl xl:text-2xl md:text-xl
        sm:text-lg font-bold float-left
        hover:text-yellow-500
         `}
      >
        {siteName}
      </h1>
    </a>
  )
}

export default SiteLogo
