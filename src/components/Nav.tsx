import React from "react"

interface INavProps {
  className?: string
}

type NavItem = {
  title: string
  path: string
}

const NavDatas: NavItem[] = [
  {
    title: "Posts",
    path: "/MyPosts",
  },
  {
    title: "DigitalGarden",
    path: "/DigitalGarden",
  },
  {
    title: "About",
    path: "/AboutMe",
  },
]

const Nav = (props: INavProps): JSX.Element => {
  const { className } = props
  return (
    <ul className={`text-center flex-row ${className} text-lg`}>
      {NavDatas.map(({ title, path }) => (
        <li
          key={path}
          className="min-w-min inline-block mx-4 cursor-pointer underline hover:text-blue-800"
        >
          <a href={path}>{title}</a>
        </li>
      ))}
    </ul>
  )
}

export default Nav
