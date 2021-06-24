import React from "react"
import { MDXProvider } from "@mdx-js/react"
import CodeBlock from "./CodeBlock"
import { MDXRenderer } from "gatsby-plugin-mdx"

interface IMdxBlockProps {
  content: any
}

const MyH1 = (props) => <h1 className="text-5xl mt-4" {...props}></h1>
const MyH2 = (props) => <h2 className="text-4xl mt-4" {...props}></h2>
const MyH3 = (props) => <h3 className="text-3xl mt-3" {...props}></h3>
const MyH4 = (props) => <h4 className="text-2xl mt-2" {...props}></h4>
const MyH5 = (props) => <h5 className="text-xl mt-2" {...props}></h5>
const MyH6 = (props) => <h6 className="text-lg mt-2" {...props}></h6>

const MyParagraph = (props) => <p className="text-base mt-2 p-2" {...props}></p>
const MyBlockQuote = (props) => (
  <blockquote
    className="border-l-4 border-green-500 bg-green-100 pl-2"
    {...props}
  ></blockquote>
)
const MyList = (props) => <ul className="list-disc m-4" {...props}></ul>
const MyOrderedList = (props) => (
  <ol className="list-decimal m-4" {...props}></ol>
)
const MyTable = (props) => (
  <table
    className="mt-4 border-gray-500 border-solid border"
    {...props}
  ></table>
)
const MyTableRow = (props) => <tr className="border" {...props}></tr>
const MyInlineCode = (props) => <code className="bg-red-300" {...props}></code>
const MyBreak = (props) => <hr className="m-4" {...props}></hr>
const Link = (props) => <a className="underline" {...props}></a>
const MyEmphasis = (props) => <em className="" {...props}></em>
const MyStrong = (props) => (
  <strong className="bg-yellow-500 bg-opacity-50 p-1" {...props}></strong>
)
const MyTableCell = (props) => <td className="p-3 border" {...props}></td>
const MyTableHeaderCell = (props) => <th className="p-3 border" {...props}></th>

const components = {
  pre: CodeBlock,
  h1: MyH1,
  h2: MyH2,
  h3: MyH3,
  h4: MyH4,
  h5: MyH5,
  h6: MyH6,
  p: MyParagraph,
  blockquote: MyBlockQuote,
  ul: MyList,
  ol: MyOrderedList,
  table: MyTable,
  tr: MyTableRow,
  td: MyTableCell,
  th: MyTableHeaderCell,
  em: MyEmphasis,
  strong: MyStrong,
  inlineCode: MyInlineCode,
  hr: MyBreak,
  a: Link,
}

const MdxBlock = (props: IMdxBlockProps) => {
  return (
    <MDXProvider components={components}>
      <div className="markdownContainer">
        <MDXRenderer>{props.content}</MDXRenderer>
      </div>
    </MDXProvider>
  )
}

export default MdxBlock
