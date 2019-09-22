import { Link } from "gatsby"
import React, { useState, useEffect } from "react"
import { Anchor, Text } from "atomize"
import Logo from "../images/logo.svg"

export default function BigLink(props) {
  const { name, textColor, hoverTextColor } = props

  useEffect(() => {})

  return (
    <Link to="/page-2/">
      <Anchor p={{ l: "3rem" }} d="block">
        <Text
          style={{
            "-webkit-transition": "color .3s ease, opacity .3s ease",
            letterSpacing: "0.02rem",
          }}
          textSize="anchor"
          fontFamily="secondary"
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
