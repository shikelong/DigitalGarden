import React from "react"
import logo from "../images/logo.png"
import { useSiteMetaData } from "../utils/querys/useSiteMetaData"

const SiteLogo = (): JSX.Element => {
  const siteMetaData = useSiteMetaData()

  return (
    <a href="/" className="flex items-center cursor-pointer">
      <img src={logo} className="w-20 float-left" alt={siteMetaData.title} />
      <h1
        className={`ml-6 2xl:text-2xl xl:text-xl md:text-xl
        sm:text-md font-bold float-left

         `}
      >
        {siteMetaData.title}
      </h1>
    </a>
  )
}

export default SiteLogo
