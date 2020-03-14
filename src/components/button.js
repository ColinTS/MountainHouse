/** @jsx jsx */
import { jsx, Box, Container, Heading, Grid, Flex } from "theme-ui"
import { Link } from "gatsby"
import React, { useState, useEffect } from "react"
import { Div, Text } from "atomize"
import theme from "../theme.js"

export default function ButtonLink(props) {
  const { name, textColor, bg } = props

  useEffect(() => {})

  return (
    <Link
      style={{
        textDecorationLine: "none",
      }}
      to="/page-2/"
    >
      <div
        sx={{
          backgroundColor: bg,
          display: "flex",
          alignContent: "center",
          px: 3,
          py: 3,
          borderRadius: 4,
        }}
      >
        <Text
          style={{
            letterSpacing: "0.075rem",
          }}
          textSize={theme.textSize.size.button}
          fontFamily={theme.fontFamily.secondary}
          textWeight="400"
          textColor={textColor}
          textDecor="none"
        >
          {name}
        </Text>
      </div>
    </Link>
  )
}
