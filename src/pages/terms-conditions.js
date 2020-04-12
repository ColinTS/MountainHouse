/** @jsx jsx */

import { jsx, Container } from "theme-ui"
import { graphql } from "gatsby"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundImage from "gatsby-background-image"

export const data = graphql`
  query {
    tos: file(relativePath: { eq: "tos.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 4000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
const TermsAndConditions = ({ data }) => (
  <Layout>
    <SEO title="Terms & Conditions" />
    <div
      sx={{
        position: "relative",
        background:
          "linear-gradient(to right,rgba(0,0,0,.5) 0%,transparent 100%)",
      }}
    >
      <BackgroundImage
        css={{
          height: "70vh",
          opacity: "1 !important",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        fluid={data.tos.childImageSharp.fluid}
      />
      <h1
        sx={{
          variant: "styles.h1",
          fontSize: [5, 6, 8],
          textAlign: "center",
          color: "white",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        Terms & Conditions
      </h1>
    </div>

    <Container sx={{ px: 3, py: 5, maxWidth: "smallContainer" }}>
      <div sx={{ pb: 4 }}>
        <h2 sx={{ variant: "styles.h2" }}>Point 1</h2>
        <p sx={{ variant: "styles.p" }}>Blah blah blah</p>
      </div>
      <div sx={{ pb: 4 }}>
        <h2 sx={{ variant: "styles.h2" }}>Point 2</h2>
        <p sx={{ variant: "styles.p" }}>Blah blah blah</p>
      </div>
      <div sx={{ pb: 4 }}>
        <h2 sx={{ variant: "styles.h2" }}>Point 3</h2>
        <p sx={{ variant: "styles.p" }}>Blah blah blah</p>
      </div>
      <div sx={{ pb: 4 }}>
        <h2 sx={{ variant: "styles.h2" }}>Point 4</h2>
        <p sx={{ variant: "styles.p" }}>Blah blah blah</p>
      </div>
      <div sx={{}}>
        <h2 sx={{ variant: "styles.h2" }}>Point 5</h2>
        <p sx={{ variant: "styles.p" }}>Blah blah blah</p>
      </div>
    </Container>
  </Layout>
)

export default TermsAndConditions
