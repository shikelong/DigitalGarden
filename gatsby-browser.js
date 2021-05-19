import "./src/styles/global.css"
import React from "react"
import GlobalWrapper from "./src/components/GlobalWrapper"
import { useUsePerfersMode } from "./src/utils/darkMode"

export const wrapRootElement = ({ element }) => {
  return <GlobalWrapper element={element} />
}
