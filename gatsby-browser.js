import React from "react"
import { ThemeProvider, StyleReset } from "atomize"

import theme from "constants/theme"

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>
    <StyleReset />
    {element}
  </ThemeProvider>
)
