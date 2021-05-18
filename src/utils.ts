import { useEffect } from "react"

export function toggleDarkMode() {
  const html = document.getElementsByTagName("html")[0]
  if (html.classList.contains("scheme-dark")) {
    html.classList.remove("scheme-dark")
  } else {
    html.classList.add("scheme-dark")
  }
}

export function isDarkMode(): boolean {
  const html = document.getElementsByTagName("html")[0]
  return html.classList.contains("scheme-dark")
}

export function useUsePerfersMode(): void {
  useEffect(() => {
    const isSystemDarkMode = isUserPerferDarkMode()
    const isUserPeferDarkMode = isDarkMode()
    //TODO: store dark mode select option to ls.

    if (isSystemDarkMode && !isUserPeferDarkMode) {
      toggleDarkMode()
    } else if (!isSystemDarkMode && isUserPeferDarkMode) {
      toggleDarkMode()
    }
  }, [])
}

export function isUserPerferDarkMode(): boolean {
  return (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  )
}
