export type Frontmatter = {
  title: string
  date: string
  path: string
  tags?: string[]
  slug: string
  id: string
  draft: boolean
}
export type Post = {
  id: string
  slug: string
  excerpt: string
  frontmatter: Frontmatter
  body: string
}
