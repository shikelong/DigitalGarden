import React from "react"

type CardProps<E extends React.ElementType = React.ElementType> = {
  children: JSX.Element | JSX.Element[]
  as?: E
  className?: string
}

const Card = (props: CardProps): JSX.Element => {
  const { children, as: Component = "div", className = "" } = props
  return (
    <Component
      style={{
        boxShadow:
          "rgb(0 0 0 / 20%) 0px 2px 1px -1px, rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px",
        transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
      }}
      className={`${className} p-4 mb-4 bg-white dark:bg-gray-800`}
    >
      {children}
    </Component>
  )
}

export default Card
