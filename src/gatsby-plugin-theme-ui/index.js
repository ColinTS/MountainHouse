export default {
  colors: {
    text: "#604218",
    blackText: "#2e2e2e",
    background: "#fff",
    primary: "#333",
    secondary: "#FFCF8A",
    tertiary: "#f7f0e1",
    blue: "#428DA4",
  },
  fonts: {
    body:
      ' Roboto,system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", sans-serif',
    heading:
      'Rubik, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    monospace: "Menlo, monospace",
  },
  sizes: {
    container: 1200,
    mediumContainer: 1000,
    smallContainer: 800,
  },
  fontWeights: {
    body: 400,
    heading: 700,
    subHeading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.2,
  },
  letterSpacings: {
    body: 1.0,
    heading: 1.2,
  },
  layout: {
    primaryContainer: {
      paddingTop: "4rem",
      paddingBottom: "4rem",
    },
    gutters: {
      px: 3,
    },
  },
  breakpoints: ["40em", "56em", "64em"],
  styles: {
    h1: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: [4, 5, 6],
      letterSpacing: "heading",
      marginBottom: "0.5rem",
    },
    h2: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: [4, 4, 5],
      letterSpacing: "heading",
      marginBottom: "0.5rem",
    },
    h3: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "subHeading",
      fontSize: 4,
      letterSpacing: "body",
      marginBottom: "0.5rem",
    },
    p: {
      color: "blackText",
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body",
      fontSize: [2, 2, 3],
      letterSpacing: "body",
      marginBottom: "0.5rem",
    },
    button: {
      fontFamily: "body",
      fontWeight: "subHeading",
      fontSize: 2,
      marginBottom: 0,
    },
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 40, 48, 64, 72],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
}
