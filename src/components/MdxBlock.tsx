import React from "react"
import { MDXProvider } from "@mdx-js/react"
import CodeBlock from "./CodeBlock"
import { MDXRenderer } from "gatsby-plugin-mdx"

interface IMdxBlockProps {
  content: any
}

export const MyH1 = (props) => <h1 className="text-4xl mt-4" {...props}></h1>
export const MyH2 = (props) => <h2 className="text-3xl mt-4" {...props}></h2>
export const MyH3 = (props) => <h3 className="text-2xl mt-3" {...props}></h3>
export const MyH4 = (props) => <h4 className="text-xl mt-2" {...props}></h4>
export const MyH5 = (props) => <h5 className="text-xl mt-2" {...props}></h5>
export const MyH6 = (props) => <h6 className="text-xl mt-2" {...props}></h6>

export const MyParagraph = (props) => (
  <p className="text-base mt-2 p-2" {...props}></p>
)
export const MyBlockQuote = (props) => (
  <blockquote
    className="border-l-4 border-yellow-500 bg-[#f5eddd] dark:bg-purple-100 dark:border-purple-500 rounded px-2 py-2 dark:text-black"
    {...props}
  ></blockquote>
)
export const MyList = (props) => <ul className="list-disc m-4" {...props}></ul>
export const MyOrderedList = (props) => (
  <ol className="list-decimal m-4" {...props}></ol>
)
export const MyTable = (props) => (
  <table
    className="mt-4 border-gray-500 border-solid border"
    {...props}
  ></table>
)
export const MyTableRow = (props) => <tr className="border" {...props}></tr>
export const MyInlineCode = (props) => (
  <code className="bg-slate-300 py-1 px-1.5" {...props}></code>
)
export const MyBreak = (props) => <hr className="m-4" {...props}></hr>
export const MyLink = (props) => <a className="underline" {...props}></a>
export const MyEmphasis = (props) => <em className="" {...props}></em>
export const MyStrong = (props) => (
  <strong
    className="font-bold text-blue-800 dark:text-red-300"
    {...props}
  ></strong>
)
export const MyTableCell = (props) => (
  <td className="p-3 border" {...props}></td>
)
export const MyTableHeaderCell = (props) => (
  <th className="p-3 border" {...props}></th>
)

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
  a: MyLink,
}

const MdxBlock = (props: IMdxBlockProps) => {
  return (
    <MDXProvider components={components}>
      <div className="px-4 py-5 mx-auto">
        <MDXRenderer>{props.content}</MDXRenderer>
      </div>
    </MDXProvider>
  )
}

export default MdxBlock
