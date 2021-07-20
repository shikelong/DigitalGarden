import React from "react"

interface IPostListProps {}

const PostList = (props: IPostListProps) => {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 list-none my-8 gap-6">
      {new Array(5).fill(0).map((_, i) => (
        <li
          key={i}
          className="border items-center h-48 p-4 shadow-sm hover:shadow bg-white"
        >
          {i}
        </li>
      ))}
    </ul>
  )
}

export default PostList
