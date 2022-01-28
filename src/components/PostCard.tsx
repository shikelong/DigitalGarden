import { CalendarIcon } from "@heroicons/react/solid"
import _ from "lodash"
import React from "react"
import { Post } from "types"
import Card from "./Card"
import Tag from "./Tag"

type PostCardProps = {
  postContent: Post
}

const PostCard = (props: PostCardProps): JSX.Element => {
  const { postContent } = props

  return (
    <Card as={"li"} className="hover:translate-x-1 transition-transform`">
      <a href={`/${_.trim(postContent.slug, "/")}`}>
        <h3 className="font-bold text-lg mb-2">
          {postContent.frontmatter.title}
        </h3>
        <div className="flex relative top-2 items-center justify-between">
          <span className="text-sm text-gray-400 tracking-wide">
            <CalendarIcon
              className="w-4 h-4 inline mr-1 relative"
              style={{ top: -1 }}
            ></CalendarIcon>
            {postContent.frontmatter.date}
          </span>
          <span>
            {postContent.frontmatter.tags.map((tag: string, index) => (
              <Tag key={index}>{tag}</Tag>
            ))}
          </span>
        </div>
      </a>
    </Card>
  )
}

export default PostCard
