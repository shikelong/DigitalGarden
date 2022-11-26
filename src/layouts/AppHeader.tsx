import React from "react"
import ThemeToggle from "../components/ThemeToggle"

export const AppHeader = (): JSX.Element => (
  <header className="w-full mx-auto p-4 relative">
    <h1 className="text-3xl">
      <a href="/" className="siteLogo inline-block cursor-pointer">
        Rio's Garden
      </a>
    </h1>
    {/* <div className="float-right flex items-center">
      <ThemeToggle />
    </div> */}
  </header>
)
