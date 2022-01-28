import { size } from "lodash"
import React from "react"

const HeightMaps = {
  small: "30vh",
  medium: "60vh",
  large: "100vh",
}

const ShowCase = (
  props: React.PropsWithChildren<{
    style?: React.CSSProperties
    className?: string
    size?: "small" | "medium" | "large"
  }>
): JSX.Element => {
  const { style = {}, className = "", size = "medium" } = props

  return (
    <div
      className={`relative overflow-hidden p-8 ${className}`}
      style={{
        height: HeightMaps[size],
        width: "100vw",
        ...style,
      }}
    >
      {props.children}
    </div>
  )
}

export default ShowCase
