import { size } from "lodash"
import React from "react"

const HeightMaps = {
  small: "30vh",
  medium: "60vh",
  full: "100vh",
}

export type ShowCaseProps = React.PropsWithChildren<{
  style?: React.CSSProperties
  className?: string
  size?: "small" | "medium" | "full"
}>

const ShowCase = (props: ShowCaseProps): JSX.Element => {
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
