import React from "react"
import { isEqualPathname } from "../utils/index"

interface INavProps {
  className?: string
  location: Location
}

type NavItem = {
  title: string
  path: string
  icon: string
}

const NavDatas: NavItem[] = [
  {
    title: "Posts",
    path: "/posts",
    icon: "",
  },
  { title: "About", path: "/about", icon: "" },
]

const Nav = (props: INavProps): JSX.Element => {
  const { className, location } = props

  return (
    <ul
      className={`text-left inline-block ${className} text-lg justify-center border-b relative`}
    >
      {NavDatas.map(({ title, path, icon }) => (
        <li
          key={path}
          className={`group px-2 pb-1 text-center no-underline w-36 inline-block mx-2 cursor-pointer hover:text-blue-400 ${
            isEqualPathname(location.pathname, path)
              ? "border-blue-400 border-b-4"
              : ""
          }`}
        >
          <a href={path}>
            {title}
            <span className="bottom-2 transform absolute group-hover:-translate-y-1  ml-2 text-2xl">
              {icon}
            </span>
          </a>
        </li>
      ))}
    </ul>
  )
}

export default Nav
