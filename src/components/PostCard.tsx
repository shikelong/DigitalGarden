import _ from "lodash"
import React from "react"
import { Post } from "../types/types"

import Tag from "./Tag"

type PostCardProps = {
  postContent: Post
}

const PostCard = (props: PostCardProps): JSX.Element => {
  const { postContent } = props

  return (
    <li>
      <h3 className="mb-2 flex gap-2 items-center justify-between">
        <p>
          {postContent.frontmatter.date}
          <a
            href={`/${_.trim(postContent.slug, "/")}`}
            className="underline ml-4 leading-4"
          >
            {postContent.frontmatter.title}
          </a>
        </p>
        <span>
          {postContent.frontmatter.tags.map((tag: string, index) => (
            <Tag key={index}>{tag}</Tag>
          ))}
        </span>
      </h3>
    </li>
  )
}

export default PostCard
