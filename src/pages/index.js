import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { Div, Container, Row, Col, Anchor, Button, Text } from "atomize"
import Img from "gatsby-image"
import Layout from "../components/layout"
import PrimaryContainer from "../components/container"

import SEO from "../components/seo"
import Dunes from "../images/dunes.svg"

import video from "../images/Tag.mp4"

export const data = graphql`
  query {
    placeholderImage: file(relativePath: { eq: "image.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const IndexPage = ({ data }) => (
  <Div>
    <Div
      style={{
        margin: 0,
        height: "100vh",
        width: "100%",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <video
        autoPlay
        muted
        loop
        style={{
          left: "50%",
          minHeight: "100%",
          minWidth: "100%",
          position: "relative",
          top: "50%",
          transform: "translate(-50%, -50%)",
          overflow: "hidden",
        }}
      >
        <source src={video} type="video/mp4" />
        <source src={video} type="video/ogg" />
      </video>
      <Div
        style={{
          position: "absolute",
          bottom: "-1%",
          width: "100vw",
          margin: 0,
          padding: 0,
        }}
      >
        <Dunes style={{ width: "100%", height: "auto" }} />
      </Div>

      <Div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
        }}
      >
        <Text
          textSize="display3"
          fontFamily="secondary"
          textColor="white"
          textWeight="700"
          style={{
            letterSpacing: "0.1rem",
            textShadow: "0 0 6px rgba(0,0,0,.3)",
          }}
        >
          SINGLE FIN
        </Text>
        <Div p={{ t: "2rem" }}>
          <Text
            textSize="subHeader"
            fontFamily="secondary"
            textColor="white"
            textWeight="400"
            style={{ lineHeight: 1.2, textShadow: "0 0 6px rgba(0,0,0,.3)" }}
          >
            A place for co-working, surfing, yoga, and relaxing - located at the
            foot of the atlas mountains, near Taghazout, Morocco
          </Text>
        </Div>
      </Div>
    </Div>

    <Layout>
      <SEO title="Home" />
      <PrimaryContainer bg="secondary">
        <Container justify="center">
          <Row>
            <Col size="5">
              <Text
                textSize="subHeader"
                fontFamily="secondary"
                textColor="black"
                textWeight="500"
                style={{ lineHeight: 1.4, letterSpacing: 1.2 }}
              >
                Singlefin is a surf, yoga, and coworking experience
              </Text>
              <Text
                textSize="paragraph"
                fontFamily="primary"
                textColor="offBlack"
                textWeight="400"
                p={{ t: "1rem" }}
                style={{ lineHeight: 1.6, letterSpacing: 1.2 }}
              >
                Founded in 2019, we offer an authentic moroccan stay for guests
                from around the globe. Whether you want to have a memorable time
                surfing southern morocco, practicing yoga in our mountain villa,
                or joining our community of digital nomads to get work done,
                Singlefin welcomes you with open arms.
              </Text>
            </Col>
            <Col size="7">
              <Img fluid={data.placeholderImage.childImageSharp.fluid} />
            </Col>
          </Row>
        </Container>
      </PrimaryContainer>
      <PrimaryContainer bg="white">
        <Container justify="center">
          <Text
            textSize="subHeader"
            fontFamily="secondary"
            textColor="black"
            textWeight="500"
            textAlign="center"
            style={{ lineHeight: 1.4, letterSpacing: 1.2 }}
          >
            Activities
          </Text>
          <Text
            textSize="paragraph"
            fontFamily="primary"
            textColor="offBlack"
            textWeight="400"
            textAlign="center"
            p={{ t: "0.5rem" }}
            style={{ lineHeight: 1.6, letterSpacing: 1.2 }}
          >
            There's a lot to do here
          </Text>
        </Container>
      </PrimaryContainer>
    </Layout>
  </Div>
)

export default IndexPage
