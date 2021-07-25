export type Frontmatter = {
  title: string
  date: string
  path: string
  tags?: string[]
}
export type Post = {
  id: string
  slug: string
  excerpt: string
  frontmatter: Frontmatter
}
