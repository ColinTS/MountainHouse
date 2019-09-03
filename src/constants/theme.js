import { ThemeProvider, DefaultTheme, StyleReset } from "atomize"

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#82A9FF",
    secondary: "#F9D788",
    black: "#0A0A0A",
    white: "#FFFFFF",
  },
  textSize: {
    ...DefaultTheme.textSize,
    size: {
      ...DefaultTheme.textSize.size,
      display3: "96px",
      display2: "60px",
      display1: "48px",
      header: "34px",
      paragraph: "16px",
      caption: "12px",
      anchor: "20px",
    },
  },
  fontFamily: {
    ...DefaultTheme.fontFamily,
    primary: `'Lato'`,
    secondary: `'Montserrat'`,
  },
  transition: {
    custom: "all 0.8s ease",
  },
}

export default theme
