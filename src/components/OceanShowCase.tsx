import React from "react"
import Ocean from "./Ocean"
import ShowCase from "./ShowCase"

const OceanShowCase = (props: React.PropsWithChildren<{}>): JSX.Element => {
  return (
    <ShowCase
      style={{
        background:
          "radial-gradient(ellipse at center, rgba(255,254,234,1) 0%, rgba(255,254,234,1) 35%, #B7E8EB 100%)",
      }}
    >
      <>
        {props.children}
        <Ocean></Ocean>
      </>
    </ShowCase>
  )
}

export default OceanShowCase
