import React from "react"

interface IBrowseAllArticlesProps {}

const BrowseAllArticles = (props: IBrowseAllArticlesProps) => {
  return (
    <button
      className={`text-lg text-green-500 cursor-pointer
    bg-green-200 p-3 rounded-sm hover:text-white hover:bg-green-600`}
    >
      <a href="/Articles">Browse all Articles</a>
    </button>
  )
}

export default BrowseAllArticles
