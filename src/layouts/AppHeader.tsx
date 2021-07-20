import React from "react"
import SiteSearch from "../components/SiteSearch"
import SiteLogo from "../components/SiteLogo"
import ThemeToggle from "../components/ThemeToggle"
import Nav from "../components/Nav"

export const AppHeader = (
  <header className="w-full mx-auto px-4 flex items-center justify-between gap-8">
    <SiteLogo />
    <Nav className="flex-grow" />
    <div className="float-right flex items-center">
      <SiteSearch />
      <ThemeToggle />
    </div>
  </header>
)
