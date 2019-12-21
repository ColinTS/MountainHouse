import React from "react"

import { ThemeProvider, StyleReset } from "atomize"

const theme = {
  colors: {
    primary: "#82A9FF",
    secondary: "#FFCF8A",
    black: "#0A0A0A",
    offBlack: "#333333",
    white: "#FFFFFF",
  },
  textSize: {
    size: {
      display3: "96px",
      display2: "60px",
      display1: "48px",
      header: "34px",
      subHeader: "28px",
      paragraph: "20px",
      caption: "12px",
      anchor: "22px",
    },
  },
  fontFamily: {
    primary: `'Lato', sans-serif;`,
    secondary: `'Lato', sans-serif;`,
  },
  transition: {
    custom: "all 0.8s ease",
  },
}

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>
    <StyleReset />
    {element}
  </ThemeProvider>
)
