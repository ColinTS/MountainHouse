import { Link } from "gatsby"
import React, { useState, useEffect } from "react"
import { Div, Text } from "atomize"
import theme from "../theme.js"

export default function ButtonLink(props) {
  const { name, textColor, bg } = props

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
          textSize={theme.textSize.size.button}
          fontFamily={theme.fontFamily.secondary}
          textWeight="400"
          textColor={textColor}
        >
          {name}
        </Text>
      </Div>
    </Link>
  )
}
