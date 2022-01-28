import React from "react"
import { generateColorGradientClass } from "../utils/colorUtils"
import { AppFooter } from "./AppFooter"
import { AppHeader } from "./AppHeader"
import Ocean from "../components/Ocean"

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

Layout.Header = ({ location, children = null }) => {
  return children ?? <AppHeader location={location} />
}

Layout.ShowCase = (props: React.PropsWithChildren<{}>) => {
  return (
    <div
      className="relative overflow-hidden p-8"
      style={{
        height: "60vh",
        width: "100vw",
        background:
          "radial-gradient(ellipse at center, rgba(255,254,234,1) 0%, rgba(255,254,234,1) 35%, #B7E8EB 100%)",
      }}
    >
      {props.children}
      <Ocean></Ocean>
    </div>
  )
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

Layout.Sidebar = ({ children = null, location }) => {
  // return children ?? <Nav location={location} />
  return children ?? null
}

export default Layout
