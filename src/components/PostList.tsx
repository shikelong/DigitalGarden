import React from "react"

interface IPostListProps {}

const PostList = (props: IPostListProps) => {
  return (
    <ul className="grid grid-cols-3 list-none my-8 gap-4">
      {new Array(6).fill(0).map((_, i) => (
        <li
          key={i}
          className="border items-center h-48 p-4 shadow-sm hover:shadow"
        >
          {i}
        </li>
      ))}
    </ul>
  )
}

export default PostList
