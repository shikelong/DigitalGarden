import React from "react"
import { HeartIcon } from "@heroicons/react/solid"

export const AppFooter = () => (
  <footer className="flex justify-center mx-auto text-sm">
    {" "}
    <HeartIcon className="text-black w-5 mr-2 " />
    <a
      href="https://www.gatsbyjs.com/"
      target="_blank"
      className="hover:underline"
    >
      Powered By Gatsby
    </a>
  </footer>
)
