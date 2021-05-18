import React from "react"
import GlobalSearch from "../components/GlobalSearch"
import SiteLogo from "../components/SiteLogo"
import ThemeToggle from "../components/ThemeToggle"

interface ILayoutProps {
  children: React.ReactNode
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

const defaultFooter = <div></div>

const Layout = (props: ILayoutProps) => {
  const { header = defaultHeader, footer = defaultFooter, children } = props

  return (
    <section className="bg-yellow-50 dark:bg-gray-800 w-screen h-screen pt-8 dark:text-gray-50 text-black">
      {header}
      {children}
      {footer}
    </section>
  )
}

export default Layout
