import React from "react"
import { MDXProvider } from "@mdx-js/react"
import CodeBlock from "./CodeBlock"
import { MDXRenderer } from "gatsby-plugin-mdx"

interface IMdxBlockProps {
  content: any
}

const components = {
  pre: CodeBlock,
}

const MdxBlock = (props: IMdxBlockProps) => {
  console.log("children: ", props.content)
  return (
    <MDXProvider components={components}>
      {/* <MDXRenderer>{props.content}</MDXRenderer> */}
      {props.content}
    </MDXProvider>
  )
}

export default MdxBlock
