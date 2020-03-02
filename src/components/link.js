import { Link } from "gatsby"
import React, { useState, useEffect } from "react"
import { Anchor, Text } from "atomize"
import Logo from "../images/logo.svg"
import theme from "../theme"

export default function BigLink(props) {
  const { name, textColor, hoverTextColor } = props

  useEffect(() => {})

  return (
    <Link
      to="/page-2/"
      style={{
        textDecorationLine: "none",
      }}
    >
      <Anchor p={{ l: "3rem" }} d="block">
        <Text
          style={{
            "-webkit-transition": "color .3s ease, opacity .3s ease",
            letterSpacing: "0.075rem",
            textDecoration: "none",
          }}
          textSize="button"
          fontFamily={theme.fontFamily.secondary}
          textWeight="400"
          textColor={textColor}
          hoverTextColor={hoverTextColor}
        >
          {name}
        </Text>
      </Anchor>
    </Link>
  )
}
