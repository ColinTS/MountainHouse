/** @jsx jsx */
import { jsx, Box, Container, Heading, Grid, Flex, Text } from "theme-ui"
import { Link } from "gatsby"
import React, { useState, useEffect } from "react"
import { Div } from "atomize"
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
          px: 4,
          py: 3,
          borderRadius: 4,
        }}
      >
        <p
          sx={{
            color: "white",
            variant: "styles.button",
          }}
        >
          {name}
        </p>
      </div>
    </Link>
  )
}
