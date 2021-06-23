import React from "react"
import { useUsePrefersMode } from "../utils/darkMode"

const GlobalWrapper = ({ element }: { element: React.ReactNode }) => {
  useUsePrefersMode()
  return element
}

export default GlobalWrapper
