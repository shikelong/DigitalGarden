import classNames from "classnames"
import _ from "lodash"
import React from "react"

type ButtonProps = React.PropsWithChildren<{
  onClick?: () => void
  icon?: React.ReactNode
  type?: "primary" | "secondary" | "light" | "text"
  disabled?: boolean
  className?: string
  style?: React.CSSProperties
}>

const Button = (props: ButtonProps): JSX.Element => {
  const {
    children,
    onClick = _.noop,
    icon = null,
    type = "primary",
    disabled = false,
    className = "",
    style = {},
  } = props
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      style={style}
      className={classNames(
        "rounded py-2 px-4 m-4 border flex items-center justify-center gap-x-1",
        {
          "bg-blue-500 text-white": type === "primary",
          "bg-gray-500 text-gray-100": type === "secondary",
          "bg-white text-gray-500": type === "light",
          "text-gray-500 border-0": type === "text",
          "bg-gray-300 cursor-not-allowed": disabled,
        },
        className
      )}
    >
      {icon}
      {children}
    </button>
  )
}

export default Button
