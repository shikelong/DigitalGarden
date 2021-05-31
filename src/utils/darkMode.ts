import { useEffect } from "react"
import { SunIcon, MoonIcon } from "@heroicons/react/solid"

export function toggleDarkMode() {
  const html = document.getElementsByTagName("html")[0]
  setUserPerferToLocalStorage(!html.classList.contains("scheme-dark"))
  html.classList.toggle("scheme-dark")
}

export function isDarkMode(): boolean {
  const html = document.getElementsByTagName("html")[0]
  return html.classList.contains("scheme-dark")
}

export function useUsePerfersMode(): void {
  useEffect(() => {
    const isPeferDarkMode = isUserPerferDarkMode()
    const isCurrentDarkMode = isDarkMode()
    //TODO: store dark mode select option to ls.

    if (isPeferDarkMode && !isCurrentDarkMode) {
      toggleDarkMode()
    } else if (!isPeferDarkMode && isCurrentDarkMode) {
      toggleDarkMode()
    }
  }, [])
}

export function isUserPerferDarkMode(): boolean {
  const isSystemDarkMode =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches

  const darkModeValue = localStorage.getItem("isDarkMode")
  const isSiteDarkMode = darkModeValue === "1"

  return darkModeValue === undefined ? isSystemDarkMode : isSiteDarkMode
}

function setUserPerferToLocalStorage(isDark: boolean): void {
  localStorage.setItem("isDarkMode", isDark ? "1" : "0")
}
