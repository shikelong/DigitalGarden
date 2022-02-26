import React, { useEffect, useState } from "react"
import { LinkIcon } from "@heroicons/react/outline"
type BookMarkProps = {
  link: string
  title?: string
}

const BookMark = (props: BookMarkProps): JSX.Element => {
  return (
    <div className="flex justify-center">
      <div className="items-center inline-flex flex-row shadow hover:shadow-md bg-base-200 mx-4 mt-2 mb-6 px-4 py-2 min-w-fit overflow-hidden dark:bg-slate-400 ">
        <LinkIcon className="w-5 mr-4"></LinkIcon>
        <a
          href={props.link}
          target="_blank"
          className="cursor-pointer no-underline"
          onLoad={(e) => {
            debugger
          }}
        >
          {props.title}
        </a>
      </div>
    </div>
  )
}

export default BookMark
