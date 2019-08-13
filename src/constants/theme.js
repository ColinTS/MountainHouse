import { ThemeProvider, DefaultTheme, StyleReset } from "atomize"

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#0095ff",
    black: "#333",
  },
  textSize: {
    ...DefaultTheme.textSize,
    size: {
      ...DefaultTheme.textSize.size,
      paragraph: "15px",
    },
  },
  fontFamily: {
    ...DefaultTheme.fontFamily,
    primary: `'Poppins', sans-serif`,
    secondary: `'IBM Plex Mono', monospace`,
  },
}

export default theme
