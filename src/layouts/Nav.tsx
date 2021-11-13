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
  isHidden?: boolean
}

const NavDatas: NavItem[] = [
  {
    title: "Home",
    path: "/",
    icon: "",
  },
  {
    title: "Moments",
    path: "/moments",
    icon: "",
    isHidden: false,
  },
  {
    title: "About",
    path: "/about",
    icon: "",
  },
]

const Nav = (props: INavProps): JSX.Element => {
  const { className, location } = props

  return (
    <nav
      className={`${className} border-black border-2 text-xl py-8 px-2 top-1/4 left-4 fixed backdrop-blur-sm bg-gray-50 shadow-lg z-10`}
    >
      <ul>
        {NavDatas.filter((item) => !item.isHidden).map(
          ({ title, path, icon }) => (
            <li
              key={path}
              className={`group px-2 mb-2 pb-1 text-center no-underline mx-2 cursor-pointer hover:text-green-600 ${
                isEqualPathname(location.pathname, path)
                  ? "text-underline font-bold"
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
          )
        )}
      </ul>
    </nav>
  )
}

export default Nav
