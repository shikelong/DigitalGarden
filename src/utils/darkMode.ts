import { useEffect } from "react"

const isBrowser = typeof window !== "undefined"

const DarkClassName = "dark"

export const THEME_CHANGE_EVENT = "theme-change"

export enum Theme {
  Light = "light",
  Dark = "dark",
}

export function toggleDarkMode(newTheme: Theme) {
  localStorage.theme = newTheme
  autoAsyncStorageToDOM()
  window.dispatchEvent(new CustomEvent(THEME_CHANGE_EVENT))
}

export function removeUserPrefer() {
  localStorage.removeItem("theme")
}

export function isDarkMode(): boolean {
  if (isBrowser) {
    const html = document.getElementsByTagName("html")[0]
    return html.classList.contains(DarkClassName)
  }

  return Theme.Dark === localStorage.theme
}

export function autoAsyncStorageToDOM() {
  // On page load or when changing themes, best to add inline in `head` to avoid FOUC
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark")
  } else {
    document.documentElement.classList.remove("dark")
  }
}
