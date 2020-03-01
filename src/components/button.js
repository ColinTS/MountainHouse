import { Link } from "gatsby"
import React, { useState, useEffect } from "react"
import { Div, Text } from "atomize"
import themeFile from "../themeFile.js"

export default function ButtonLink(props) {
  const { name, textColor, bg } = props
  console.log(themeFile)

  useEffect(() => {})

  return (
    <Link to="/page-2/">
      <Div
        bg={bg}
        d="flex"
        align="center"
        p={{ x: "2.25rem", y: "0.75rem" }}
        rounded="circle"
      >
        <Text
          style={{
            letterSpacing: "0.075rem",
          }}
          textSize="button"
          fontFamily="secondary"
          textWeight="400"
          textColor={textColor}
        >
          {name}
        </Text>
      </Div>
    </Link>
  )
}
