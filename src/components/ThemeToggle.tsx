import React, { useCallback, useState } from "react"
import { isDarkMode, Theme, toggleDarkMode } from "../utils/darkMode"
import { MoonIcon, SunIcon } from "@heroicons/react/solid"

interface IThemeToggleProps {}

const ThemeToggle = (props: IThemeToggleProps) => {
  const [_isDarkMode, setIsDarkMode] = useState(() => isDarkMode())

  const handleToggleDarkMode = useCallback(() => {
    const newTheme = _isDarkMode ? Theme.Light : Theme.Dark
    setIsDarkMode(newTheme === Theme.Dark)
    toggleDarkMode(newTheme)
  }, [_isDarkMode])

  return (
    <div
      className="cursor-pointer ml-6 inline-block fixed top-4 right-4"
      onClick={handleToggleDarkMode}
    >
      {_isDarkMode ? (
        <SunIcon className="w-8 text-white" />
      ) : (
        <MoonIcon className="w-8 text-black" />
      )}
    </div>
  )
}

export default ThemeToggle
