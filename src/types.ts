export type Frontmatter = {
  title: string
  data: string
}
export type Post = {
  id: string
  slug: string
  excerpt: string
  frontmatter: Frontmatter
}
