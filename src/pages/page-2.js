/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import Img from "gatsby-image"
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
const SecondPage = ({ data }) => (
  <Layout>
    <SEO title="Page two" />
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
        Surf, Eat and Stay in Morocco
      </h1>
    </div>

    <Link sx={{}} to="/">
      Go back to the homepage
    </Link>
  </Layout>
)

export default SecondPage
