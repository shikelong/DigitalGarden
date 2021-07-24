const useLocation = (): Location => {
  if (typeof window !== "undefined") {
    return window.location
  }
  return {
    href: "",
    pathname: "",
    search: "",
    hash: "",
    host: "",
    hostname: "",
    port: "",
    protocol: "",
    origin: "",
  } as Location
}

export default useLocation
