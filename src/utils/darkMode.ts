import { useEffect } from "react"

const isBrowser = typeof window !== "undefined"

export function toggleDarkMode() {
  const html = document.getElementsByTagName("html")[0]
  setUserPreferToLocalStorage(!html.classList.contains("scheme-dark"))
  html.classList.toggle("scheme-dark")
}

export function isDarkMode(): boolean {
  if (isBrowser) {
    const html = document.getElementsByTagName("html")[0]
    return html.classList.contains("scheme-dark")
  }

  return false
}

export function useUsePrefersMode(): void {
  useEffect(() => {
    const isPeferDarkMode = isUserPreferDarkMode()
    const isCurrentDarkMode = isDarkMode()
    //TODO: store dark mode select option to ls.

    if (isPeferDarkMode && !isCurrentDarkMode) {
      toggleDarkMode()
    } else if (!isPeferDarkMode && isCurrentDarkMode) {
      toggleDarkMode()
    }
  }, [])
}

export function isUserPreferDarkMode(): boolean {
  const isSystemDarkMode =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches

  const darkModeValue = localStorage.getItem("isDarkMode")
  const isSiteDarkMode = darkModeValue === "1"

  return darkModeValue === undefined ? isSystemDarkMode : isSiteDarkMode
}

function setUserPreferToLocalStorage(isDark: boolean): void {
  localStorage.setItem("isDarkMode", isDark ? "1" : "0")
}
