import React from "react"
import { Post } from "../types"
import { ArrowRightIcon } from "@heroicons/react/solid"

interface IBrowseAllPostsProps {}

const BrowseAllPosts = (props: IBrowseAllPostsProps) => {
  return (
    <button
      className={`text-md cursor-pointer border border-current flex
          items-center
          bg-white
          hover:underline
          dark:text-black
     p-3 rounded-sm `}
    >
      <a href="/MyPosts">Browse all Articles</a>
      <ArrowRightIcon className="w-5 inline-block ml-2" />
    </button>
  )
}

export default BrowseAllPosts
