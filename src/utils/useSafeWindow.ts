export function useSafeWindow<T>(
  fn: (window: Window) => T | undefined,
  def: T
) {
  return typeof window !== "undefined" ? fn(window) : def
}
