import React from "react"
import SiteSearch from "../components/SiteSearch"
import SiteLogo from "../components/SiteLogo"
import ThemeToggle from "../components/ThemeToggle"
import Nav from "../components/Nav"

type AppHeaderProps = {
  location: Location
}
export const AppHeader = ({ location }: AppHeaderProps): JSX.Element => (
  <header className="w-full mx-auto px-4 flex items-center justify-between gap-8">
    <SiteLogo />
    <Nav location={location} />
    <div className="float-right flex items-center">
      <SiteSearch />
      <ThemeToggle />
    </div>
  </header>
)
