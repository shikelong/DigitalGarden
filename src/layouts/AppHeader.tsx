import React from "react"
import SiteLogo from "../components/SiteLogo"
import ThemeToggle from "../components/ThemeToggle"

type AppHeaderProps = {}
export const AppHeader = (): JSX.Element => (
  <header className="w-full mx-auto px-4 relative">
    <SiteLogo />
    <div className="float-right flex items-center">
      <ThemeToggle />
    </div>
  </header>
)
