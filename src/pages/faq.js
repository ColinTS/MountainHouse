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
const FAQ = ({ data }) => (
  <Layout>
    <SEO title="FAQ" />
    <div
      sx={{
        position: "relative",
        background:
          "linear-gradient(to bottom,rgba(0,0,0,.6) 50%,transparent 100%)",
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
      <div
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <h1
          sx={{
            variant: "styles.h1",
            textAlign: "center",
            color: "white",
            fontSize: [5, 6, 7],
          }}
        >
          Frequently asked questions
        </h1>
        <p
          sx={{
            variant: "styles.p",
            textAlign: "center",
            opacity: 0.9,
            color: "white",
            fontSize: [2, 2, 4],
          }}
        >
          Common questions about Singlefin, Taghazout, and more.
        </p>
      </div>
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

export default FAQ
