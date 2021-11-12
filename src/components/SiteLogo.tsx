import React from "react"
import siteNameImg from "../images/siteName.png"
import { useSiteMetaData } from "../utils/querys/useSiteMetaData"

const SiteLogo = (): JSX.Element => {
  const siteMetaData = useSiteMetaData()

  return (
    <a href="/" className="siteLogo inline-block cursor-pointer">
      <img
        src={siteNameImg}
        className="w-56 select-none invert(0.5) brightness(1.8)"
        alt={siteMetaData.title}
      />
    </a>
  )
}

export default SiteLogo
