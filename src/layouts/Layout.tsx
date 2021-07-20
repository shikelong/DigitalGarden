import React from "react"
import { AppHeader } from "./AppHeader"
import { AppFooter } from "./AppFooter"

interface ILayoutProps {
  children: React.ReactElement
  header?: React.ReactNode
  footer?: React.ReactNode
}

const Layout = (props: ILayoutProps) => {
  const { header = AppHeader, footer = AppFooter, children } = props

  if (!React.Children.only(children)) {
    throw new Error("should has only one children!")
  }

  return (
    <section
      className={`dark:bg-gray-800 min-h-screen w-screen p-4 
      dark:text-gray-50 text-black flex flex-col`}
    >
      {header}
      <main className="px-3 py-5 container 2xl:container mx-auto flex-grow ">
        <children.type
          {...children.props}
          className={`${children.props?.className || ""} flex-grow`}
        />
      </main>
      {footer}
    </section>
  )
}

export default Layout
