import { useState, useEffect } from "react"
import { isDarkMode, THEME_CHANGE_EVENT } from "./darkMode"

function useDarkMode() {
  const [_isDarkMode, setIsDarkMode] = useState(isDarkMode())

  function getCurrentTheme() {
    setIsDarkMode(isDarkMode())
  }

  useEffect(() => {
    window.addEventListener(THEME_CHANGE_EVENT, getCurrentTheme)

    return () => {
      window.removeEventListener(THEME_CHANGE_EVENT, getCurrentTheme)
    }
  }, [])
  return _isDarkMode
}

export default useDarkMode
