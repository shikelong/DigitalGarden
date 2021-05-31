import "./src/styles/global.css"
import React from "react"
import GlobalWrapper from "./src/components/GlobalWrapper"

export const wrapRootElement = ({ element }) => {
  return <GlobalWrapper element={element} />
}
