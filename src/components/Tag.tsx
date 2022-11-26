import React from "react"

type TagProps = {
  children: string
  className?: string
}

const Tag = (props: TagProps): JSX.Element => {
  const { children, className = "", showSymbol = false } = props

  return (
    <label
      title={children}
      className={`cursor-pointer inline-flex flex-nowrap rounded px-2 py-1 m-1 items-center text-xs ${className}`}
    >
      <span className="mr-0.5">#</span>
      {children}
    </label>
  )
}

export default Tag
