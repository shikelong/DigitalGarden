import React from "react"
import { useUsePerfersMode } from "../utils/darkMode"

const GlobalWrapper = ({ element }: { element: React.ReactNode }) => {
  useUsePerfersMode()
  return element
}

export default GlobalWrapper
