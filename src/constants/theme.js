import { ThemeProvider, DefaultTheme, StyleReset } from "atomize"

const theme = {
  ...DefaultTheme,

  colors: {
    ...DefaultTheme.colors,
    primary: "#82A9FF",
    secondary: "#FFCF8A",
    black: "#0A0A0A",
    offBlack: "#333333",
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
      subHeader: "28px",
      paragraph: "20px",
      caption: "12px",
      anchor: "22px",
    },
  },
  fontFamily: {
    ...DefaultTheme.fontFamily,
    primary: `'Lato'`,
    secondary: `'Rubik'`,
  },
  transition: {
    custom: "all 0.8s ease",
  },
}

export default theme
