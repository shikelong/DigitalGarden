//@ts-ignore
import Highlight, { defaultProps } from "prism-react-renderer"
import theme from "prism-react-renderer/themes/github"
import React from "react"

export default (props) => {
  const className = props.children.props.className || ""
  const matches = className.match(/language-(?<lang>.*)/)
  console.log("Code Block: ", props)
  return (
    <Highlight
      {...defaultProps}
      code={props.children.props.children.trim()}
      language={
        matches && matches.groups && matches.groups.lang
          ? matches.groups.lang
          : ""
      }
      // theme={theme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={{ ...style, padding: "20px" }}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
}
