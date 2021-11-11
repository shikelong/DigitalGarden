import React from "react"
import { useSiteMetaData } from "../utils/querys/useSiteMetaData"

const SiteLogo = (): JSX.Element => {
  const siteMetaData = useSiteMetaData()

  return (
    <a href="/" className="flex items-center cursor-pointer">
      {/* <img src={logo} className="w-20 float-left" alt={siteMetaData.title} /> */}
      <h1
        className={`ml-6 2xl:text-4xl xl:text-3xl md:text-xl
        sm:text-md font-bold float-left text-wavy

         `}
      >
        {siteMetaData.title}
      </h1>
    </a>
  )
}

export default SiteLogo
