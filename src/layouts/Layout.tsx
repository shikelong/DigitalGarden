import React from "react"
import { AppHeader } from "./AppHeader"
import { AppFooter } from "./AppFooter"

interface ILayoutProps {
  children: React.ReactElement[]
  className?: string
}

const Layout = (props: ILayoutProps) => {
  const { children, className = "" } = props

  return (
    <section
      className={`dark:bg-gray-800 min-h-screen w-screen p-4 bg-white dark:text-gray-50 text-black flex flex-col ${className}`}
    >
      {children}
    </section>
  )
}

Layout.Header = ({ location, children = null }) => {
  return children ?? <AppHeader location={location} />
}

Layout.Content = ({ children, className = "" }) => {
  return (
    <main
      className={`px-3 py-5 lg:px-8 lg:py-10 container 2xl:container mx-auto flex-grow ${className}`}
    >
      {children}
    </main>
  )
}

Layout.Footer = ({ children = null }) => {
  return children ?? <AppFooter />
}

export default Layout
