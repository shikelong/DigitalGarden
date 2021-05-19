import React, { useCallback, useState } from "react"
import { isDarkMode, toggleDarkMode } from "../utils/darkMode"

interface IThemeToggleProps {}

const ThemeToggle = (props: IThemeToggleProps) => {
  const [darkMode, setDarkMode] = useState(isDarkMode())

  const handleToggleDarkMode = useCallback(() => {
    toggleDarkMode()
    setDarkMode((value) => !value)
  }, [])

  return (
    <button
      className="inline-block cursor-pointer"
      onClick={handleToggleDarkMode}
    >
      {darkMode ? "Light" : "Dark"}
    </button>
  )
}

export default ThemeToggle
