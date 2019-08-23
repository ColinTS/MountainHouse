import { ThemeProvider, DefaultTheme, StyleReset } from "atomize"

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#00A8E8",
    secondary: "#F9D788",
    black: "#0A0A0A",
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
}

export default theme
