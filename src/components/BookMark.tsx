import { startCase } from "lodash"
import React, { useEffect, useState } from "react"
import { LinkIcon } from "@heroicons/react/outline"
type BookMarkProps = {
  link: string
  title?: string
}

const getTitleFromLink = (link: string) => {
  const title = link.split("/").pop()
  return title ?? ""
}

const BookMark = (props: BookMarkProps): JSX.Element => {
  const { link } = props

  const title = startCase(props.title ?? getTitleFromLink(link)) ?? link

  return (
    <div className="flex justify-center">
      <div className="items-center inline-flex flex-row shadow hover:shadow-md bg-base-200 mx-4 mt-4 mb-8 px-4 py-2 min-w-fit overflow-hidden dark:bg-slate-400 ">
        <LinkIcon className="w-5 mr-4"></LinkIcon>
        <a
          href={link}
          target="_blank"
          className="cursor-pointer no-underline"
          onLoad={(e) => {
            debugger
          }}
        >
          {title}
        </a>
      </div>
    </div>
  )
}

export default BookMark
