import React from "react"
import { TagIcon } from "@heroicons/react/solid"

type TagProps = {
  children: string
  className?: string
  showIcon?: boolean
}

const Tag = (props: TagProps): JSX.Element => {
  const { children, className = "", showIcon = true } = props

  return (
    <label
      title={children}
      className={`cursor-pointer inline-flex flex-nowrap rounded px-2 py-1 m-1 items-center bg-black text-white text-xs ${className}`}
    >
      {showIcon && (
        <TagIcon className={` flex-shrink-0 w-4 h-4 mr-1`} fill={"white"} />
      )}
      {children}
    </label>
  )
}

export default Tag
