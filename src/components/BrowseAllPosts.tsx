import React from "react"
import { Post } from "../types"

interface IBrowseAllPostsProps {}

const BrowseAllPosts = (props: IBrowseAllPostsProps) => {
  return (
    <button
      className={`text-lg text-green-500 cursor-pointer
    bg-green-200 p-3 rounded-sm hover:text-white hover:bg-green-600`}
    >
      <a href="/MyPosts">Browse all Articles</a>
    </button>
  )
}

export default BrowseAllPosts
