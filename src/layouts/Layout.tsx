import React from "react"
import GlobalSearch from "../components/GlobalSearch"
import SiteLogo from "../components/SiteLogo"
import ThemeToggle from "../components/ThemeToggle"
import { HeartIcon } from "@heroicons/react/solid"

interface ILayoutProps {
  children: React.ReactElement
  header?: React.ReactNode
  footer?: React.ReactNode
}

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

const Layout = (props: ILayoutProps) => {
  const { header = defaultHeader, footer = defaultFooter, children } = props

  if (!React.Children.only(children)) {
    throw new Error("should has only one children!")
  }

  return (
    <section className="dark:bg-gray-800 min-h-screen w-screen p-8 dark:text-gray-50 text-black flex flex-col">
      {header}
      <children.type
        {...children.props}
        className={`${children.props?.className || ""} flex-grow`}
      />
      {footer}
    </section>
  )
}

export default Layout
