export type Frontmatter = {
  title: string
  data: string,
  path: string
}
export type Post = {
  id: string
  slug: string
  excerpt: string
  frontmatter: Frontmatter
}
