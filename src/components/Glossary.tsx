import React from "react"

type GlossaryProps = {
  concept: string
  description: string[] | string
}

const Glossary = (props: GlossaryProps): JSX.Element => {
  const { concept, description = "" } = props

  const descriptionArray = Array.isArray(description)
    ? description
    : [description]
  return (
    <>
      <dt>{concept}</dt>
      {descriptionArray.map((description, index) => (
        <dd key={index}>{description}</dd>
      ))}
    </>
  )
}

Glossary.List = ({ children }: React.PropsWithChildren<{}>) => {
  return <dl>{children}</dl>
}

export default Glossary
