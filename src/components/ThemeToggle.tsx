import React, { useCallback, useState } from "react"
import { isDarkMode, toggleDarkMode } from "../utils/darkMode"
import { MoonIcon, SunIcon } from "@heroicons/react/solid"

interface IThemeToggleProps {}

const ThemeToggle = (props: IThemeToggleProps) => {
  const [darkMode, setDarkMode] = useState(isDarkMode())

  const handleToggleDarkMode = useCallback(() => {
    toggleDarkMode()
    setDarkMode((value) => !value)
  }, [])

  return (
    <div
      className="cursor-pointer ml-6 inline-block"
      onClick={handleToggleDarkMode}
    >
      {darkMode ? (
        <SunIcon className="w-8 text-white" />
      ) : (
        <MoonIcon className="w-8 text-black" />
      )}
    </div>
  )
}

export default ThemeToggle
