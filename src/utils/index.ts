import _ from "lodash"

const normalizePathname = (path: string) => {
  return _.toLower(_.trimEnd(path, `/`))
}

export const isEqualPathname = (pathname: string, pathname2: string) => {
  return normalizePathname(pathname) === normalizePathname(pathname2)
}
