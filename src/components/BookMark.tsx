import React from "react"

type BookMarkProps = {
  link: string
  title: string
}

const BookMark = (props: BookMarkProps): JSX.Element => {
  return (
    <div className="card shadow-md bg-base-200">
      <div className="card-body">
        <a href={props.link} target="_blank">
          {props.title}
        </a>
      </div>
    </div>
  )
}

export default BookMark
