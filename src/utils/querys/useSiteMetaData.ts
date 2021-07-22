import { graphql, useStaticQuery } from "gatsby"

type Meta = {
  title: string
}

export const useSiteMetaData = (): Meta => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          siteUrl
        }
      }
    }
  `)

  const title = data.site.siteMetadata.title
  const meta = {
    title,
  }
  return meta
}
