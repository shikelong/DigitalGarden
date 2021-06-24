import React from "react"
import GlobalSearch from "../components/GlobalSearch"
import SiteLogo from "../components/SiteLogo"
import ThemeToggle from "../components/ThemeToggle"
import { HeartIcon } from "@heroicons/react/solid"
import MdxBlock from "../components/MdxBlock"

interface IPostLayoutProps {
  children: React.ReactElement
}

//todo: extract components
const defaultHeader = (
  <header className="container mx-auto px-4 flex items-center justify-between">
    <SiteLogo />
    <div>
      <GlobalSearch />
      <ThemeToggle />
    </div>
  </header>
)

const defaultFooter = (
  <div className="flex justify-center m-6">
    {" "}
    <HeartIcon className="text-red-400 w-5 mr-2" /> Powered By Gatsby
  </div>
)

const PostLayout = (props: IPostLayoutProps) => {
  const { children } = props
  //TODO: fix it, use MDXRender for pre tag.
  return (
    <section className=" dark:bg-gray-800 min-h-screen w-screen p-8 dark:text-gray-50 text-black flex flex-col">
      {defaultHeader}
      <MdxBlock content={children}></MdxBlock>
      {defaultFooter}
    </section>
  )
}

export default PostLayout
