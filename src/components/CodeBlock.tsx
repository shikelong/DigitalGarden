//@ts-ignore
import Highlight, { defaultProps } from "prism-react-renderer"
import lightTheme from "prism-react-renderer/themes/vsLight/"
import darkTheme from "prism-react-renderer/themes/vsDark"
import React from "react"
import useDarkMode from "../utils/useDarkMode"
import { ClipboardCopyIcon } from "@heroicons/react/solid"

const getLanguageFromClassName = (className: string) => {
  const matches = className.match(/language-(?<lang>.*)/)
  return matches && matches.groups && matches.groups.lang
    ? matches.groups.lang
    : ""
}

const CodeBlock = (props) => {
  const isDarkMode = useDarkMode()
  const className = props.children.props.className || ""
  const codes = props.children.props.children.trim()

  const handleCopy = () => {
    navigator.clipboard.writeText(codes)
  }
  return (
    <Highlight
      {...defaultProps}
      code={codes}
      language={getLanguageFromClassName(className)}
      theme={isDarkMode ? darkTheme : lightTheme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => {
        return (
          <pre
            className={`${className} border group dark:border-stone-700 bg-base-200 dark:bg-black relative`}
            style={{ ...style, padding: "30px 20px" }}
          >
            <ClipboardCopyIcon
              onClick={handleCopy}
              className="w-5 cursor-pointer h-5 hidden text-gray-600 group-hover:inline-block dark:text-gray-50 absolute right-4 top-4 z-10"
            ></ClipboardCopyIcon>
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
            <span className="absolute text-xs bottom-2 right-4 text-slate-500 dark:text-white">
              {getLanguageFromClassName(className ?? "")}
            </span>
          </pre>
        )
      }}
    </Highlight>
  )
}

export default CodeBlock
