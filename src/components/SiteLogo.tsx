import React from "react"
import logo from "../images/logo.png"
import logoWhite from "../images/logoWhite.png"

const siteName = `rio shi's digital garden`

const SiteLogo = (): JSX.Element => {
  return (
    <a href="/" className="flex items-center cursor-pointer">
      <img src={logo} className="w-20 float-left" alt={siteName} />
      <h1
        className={`ml-6 font-serif 2xl:text-3xl xl:text-2xl md:text-xl
        sm:text-lg subpixel-antialiased font-bold italic float-left
        hover:text-yellow-500
         `}
      >
        {siteName}
      </h1>
    </a>
  )
}

export default SiteLogo
