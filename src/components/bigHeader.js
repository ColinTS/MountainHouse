import { Link } from "gatsby"
import React, { useState, useEffect } from "react"
import { Text } from "atomize"

export default function BigHeader(props) {
  const { text, textColor, hoverTextColor } = props

  useEffect(() => {})

  return (
    <Text
      style={{
        letterSpacing: "0.1rem",
        textShadow: "0 0 6px rgba(0,0,0,.3)",
      }}
      textSize="96px"
      fontFamily="Lato"
      textColor="white"
      textWeight="700"
    >
      {text}
    </Text>
  )
}
