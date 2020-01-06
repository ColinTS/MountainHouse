import { Link } from "gatsby"
import React, { useState, useEffect } from "react"
import { Text } from "atomize"

export default function SubHeader(props) {
  const { text, textColor, hoverTextColor } = props

  useEffect(() => {})

  return (
    <Text
      style={{
        lineHeight: 1.2,
        letterSpacing: "0.1rem",
        textShadow: "0 0 6px rgba(0,0,0,.3)",
      }}
      textSize="28px"
      fontFamily="Lato"
      textWeight="400"
      textColor="white"
    >
      {text}
    </Text>
  )
}
