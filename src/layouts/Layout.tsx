import React from "react"
import { AppFooter } from "./AppFooter"
import { AppHeader } from "./AppHeader"

interface ILayoutProps {
  children: React.ReactElement[]
  className?: string
}

const Layout = (props: ILayoutProps) => {
  const { children, className = "" } = props

  return (
    <section
      className={`dark:bg-gray-700 min-h-screen w-screen dark:text-gray-50 text-black flex flex-col ${className}`}
    >
      {children}
    </section>
  )
}

Layout.Header = ({ children = null }) => {
  return children ?? <AppHeader />
}

Layout.Content = ({ children, className = "" }) => {
  return (
    <main
      className={`px-3 py-5 lg:px-8 lg:py-10 max-w-4xl container mx-auto flex-grow ${className}`}
    >
      {children}
    </main>
  )
}

Layout.Footer = ({ children = null }) => {
  return children ?? <AppFooter />
}

Layout.Sidebar = ({ children = null }) => {
  // return children ?? <Nav  />
  return children ?? null
}

export default Layout
