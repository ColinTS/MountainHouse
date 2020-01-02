import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { Div, Container, Row, Col, Anchor, Button, Text, Icon } from "atomize"
import Img from "gatsby-image"
import Layout from "../components/layout"
import PrimaryContainer from "../components/container"
import ActivityThumbnail from "../components/activity"
import SlideShow from "../components/slideshow"

import SEO from "../components/seo"
import Dunes from "../images/dunes.svg"

import video from "../images/Tag.mp4"

export const data = graphql`
  query {
    placeholderImage: file(relativePath: { eq: "image.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 4000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    kitchenLogo: file(relativePath: { eq: "kitchenLogo.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 4000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    surfActivity: file(relativePath: { eq: "surfActivity.JPG" }) {
      childImageSharp {
        fluid(maxWidth: 4000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    surf: allFile(
      sort: { fields: name, order: DESC }
      filter: { relativeDirectory: { eq: "surf" } }
    ) {
      edges {
        node {
          id
          name
          childImageSharp {
            fluid(maxWidth: 4000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    stay: allFile(
      sort: { fields: name, order: DESC }
      filter: { relativeDirectory: { eq: "stay" } }
    ) {
      edges {
        node {
          id
          name
          childImageSharp {
            fluid(maxWidth: 4000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    eat: allFile(
      sort: { fields: name, order: DESC }
      filter: { relativeDirectory: { eq: "eat" } }
    ) {
      edges {
        node {
          id
          name
          childImageSharp {
            fluid(maxWidth: 4000) {
              ...GatsbyImageSharpFluid
            }
          }
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
          fontFamily="primary"
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
      <Div m={{ t: "-8rem" }}>
        <PrimaryContainer bg="secondary">
          <Container justify="center">
            <Row>
              <Col size="5">
                <Text
                  textSize="subHeader"
                  fontFamily="secondary"
                  textColor="black"
                  textWeight="700"
                  style={{ lineHeight: 1.4, letterSpacing: 1.2 }}
                >
                  Singlefin is a surf, yoga, and coworking experience
                </Text>
                <Text
                  textSize="header2"
                  fontFamily="primary"
                  textColor="offBlack"
                  textWeight="400"
                  p={{ t: "1rem" }}
                  style={{ lineHeight: 1.6, letterSpacing: 1.2 }}
                >
                  Founded in 2019, we offer an authentic moroccan stay for
                  guests from around the globe. Whether you want to have a
                  memorable time surfing southern morocco, practicing yoga in
                  our mountain villa, or joining our community of digital nomads
                  to get work done, Singlefin welcomes you with open arms.
                </Text>
              </Col>
              <Col size="7">
                <Img
                  style={{
                    borderRadius: 4,
                  }}
                  fluid={data.placeholderImage.childImageSharp.fluid}
                />
              </Col>
            </Row>
          </Container>
        </PrimaryContainer>
      </Div>
      <PrimaryContainer bg="white">
        <Container justify="center">
          <Row>
            <Col size="12">
              <Text
                textSize="subHeader"
                fontFamily="secondary"
                textColor="black"
                textWeight="700"
                textAlign="center"
                style={{ lineHeight: 1.4, letterSpacing: 1.2 }}
              >
                Stay with us
              </Text>
              <Text
                textSize="header2"
                fontFamily="primary"
                textColor="offBlack"
                textWeight="400"
                textAlign="center"
                p={{ t: "0.25rem", b: "3rem" }}
                style={{ lineHeight: 1.6, letterSpacing: 1.2 }}
              >
                Rooms right on the beach
              </Text>

              <SlideShow data={data.stay} />
            </Col>
          </Row>
          <Row p={{ t: "3rem" }}>
            <Col size="8">
              <Text
                textSize="header2"
                fontFamily="secondary"
                textColor="black"
                textWeight="700"
                style={{ lineHeight: 1.4, letterSpacing: 1.2 }}
              >
                Sleep and surf
              </Text>
              <Text
                textSize="paragraph"
                fontFamily="primary"
                textColor="offBlack"
                textWeight="400"
                p={{ t: "1rem" }}
                style={{ lineHeight: 1.6, letterSpacing: 1.2 }}
              >
                From cozy one-beds to a spacious penthouse, we have the room for
                you. Located right on the beach, surfing is literally steps away
                from your bedroom.
              </Text>
            </Col>
            <Col size="4">
              <Text
                textSize="header2"
                fontFamily="secondary"
                textColor="black"
                textWeight="700"
                p={{ b: "1rem" }}
                style={{ lineHeight: 1.4, letterSpacing: 1.2 }}
              >
                Amenities{" "}
              </Text>
              <Div
                style={{
                  padding: "1rem",
                  borderStyle: "solid",
                  borderColor: "#d3d3d3",
                  borderRadius: 3,
                }}
              >
                <Row align="center">
                  <Icon name="Checked" color="primary" size="30px" />
                  <Text
                    textSize="paragraph"
                    fontFamily="primary"
                    textColor="offBlack"
                    textWeight="400"
                    p={{ l: "1rem" }}
                    style={{ lineHeight: 1.6, letterSpacing: 1.2 }}
                  >
                    Full furnishings
                  </Text>
                </Row>
                <Row align="center">
                  <Icon name="Checked" color="primary" size="30px" />
                  <Text
                    textSize="paragraph"
                    fontFamily="primary"
                    textColor="offBlack"
                    textWeight="400"
                    p={{ l: "1rem" }}
                    style={{ lineHeight: 1.6, letterSpacing: 1.2 }}
                  >
                    Free breakfast
                  </Text>
                </Row>
                <Row align="center">
                  <Icon name="Checked" color="primary" size="30px" />
                  <Text
                    textSize="paragraph"
                    fontFamily="primary"
                    textColor="offBlack"
                    textWeight="400"
                    p={{ l: "1rem" }}
                    style={{ lineHeight: 1.6, letterSpacing: 1.2 }}
                  >
                    Fast WiFi
                  </Text>
                </Row>
                <Row align="center">
                  <Icon name="Checked" color="primary" size="30px" />
                  <Text
                    textSize="paragraph"
                    fontFamily="primary"
                    textColor="offBlack"
                    textWeight="400"
                    p={{ l: "1rem" }}
                    style={{ lineHeight: 1.6, letterSpacing: 1.2 }}
                  >
                    Ocean views{" "}
                  </Text>
                </Row>
              </Div>
            </Col>
          </Row>
        </Container>
      </PrimaryContainer>
      {/* surf */}
      <PrimaryContainer bg="#F9EACC">
        <Container justify="center">
          <Row>
            <Col size="12">
              <Text
                textSize="subHeader"
                fontFamily="secondary"
                textColor="black"
                textWeight="700"
                textAlign="center"
                style={{ lineHeight: 1.4, letterSpacing: 1.2 }}
              >
                Surf with us
              </Text>
              <Text
                textSize="header2"
                fontFamily="primary"
                textColor="offBlack"
                textWeight="400"
                textAlign="center"
                p={{ t: "0.25rem", b: "3rem" }}
                style={{ lineHeight: 1.6, letterSpacing: 1.2 }}
              >
                From beginner to advanced, we offer surf lessons and surf
                guiding for all
              </Text>

              <SlideShow data={data.surf} />
            </Col>
          </Row>
          <Row p={{ t: "3rem" }}>
            <Col size="8">
              <Text
                textSize="header2"
                fontFamily="secondary"
                textColor="black"
                textWeight="700"
                style={{ lineHeight: 1.4, letterSpacing: 1.2 }}
              >
                Lessons and Guides
              </Text>
              <Text
                textSize="paragraph"
                fontFamily="primary"
                textColor="offBlack"
                textWeight="400"
                p={{ t: "1rem" }}
                style={{ lineHeight: 1.6, letterSpacing: 1.2 }}
              >
                At Singlefin we love to surf. Our local guides know the best
                spots to improve your surfing, whether you are a beginner,
                intermediate, or advanced.
              </Text>
            </Col>
            <Col size="4">
              <Text
                textSize="header2"
                fontFamily="secondary"
                textColor="black"
                textWeight="700"
                p={{ b: "1rem" }}
                style={{ lineHeight: 1.4, letterSpacing: 1.2 }}
              >
                What's included
              </Text>
              <Div
                style={{
                  padding: "1rem",
                  borderStyle: "solid",
                  borderColor: "#d3d3d3",
                  borderRadius: 3,
                }}
              >
                <Row align="center">
                  <Icon name="Checked" color="primary" size="30px" />
                  <Text
                    textSize="paragraph"
                    fontFamily="primary"
                    textColor="offBlack"
                    textWeight="400"
                    p={{ l: "1rem" }}
                    style={{ lineHeight: 1.6, letterSpacing: 1.2 }}
                  >
                    2 hour surf lesson
                  </Text>
                </Row>
                <Row align="center">
                  <Icon name="Checked" color="primary" size="30px" />
                  <Text
                    textSize="paragraph"
                    fontFamily="primary"
                    textColor="offBlack"
                    textWeight="400"
                    p={{ l: "1rem" }}
                    style={{ lineHeight: 1.6, letterSpacing: 1.2 }}
                  >
                    Board and wetsuit
                  </Text>
                </Row>
                <Row align="center">
                  <Icon name="Checked" color="primary" size="30px" />
                  <Text
                    textSize="paragraph"
                    fontFamily="primary"
                    textColor="offBlack"
                    textWeight="400"
                    p={{ l: "1rem" }}
                    style={{ lineHeight: 1.6, letterSpacing: 1.2 }}
                  >
                    Fast WiFi
                  </Text>
                </Row>
                <Row align="center">
                  <Icon name="Checked" color="primary" size="30px" />
                  <Text
                    textSize="paragraph"
                    fontFamily="primary"
                    textColor="offBlack"
                    textWeight="400"
                    p={{ l: "1rem" }}
                    style={{ lineHeight: 1.6, letterSpacing: 1.2 }}
                  >
                    Ocean views{" "}
                  </Text>
                </Row>
              </Div>
            </Col>
          </Row>
        </Container>
      </PrimaryContainer>
      {/* Eat */}
      <PrimaryContainer bg="white">
        <Container justify="center">
          <Row>
            <Col size="12">
              <Text
                textSize="subHeader"
                fontFamily="secondary"
                textColor="black"
                textWeight="700"
                textAlign="center"
                style={{ lineHeight: 1.4, letterSpacing: 1.2 }}
              >
                Eat with us
              </Text>
              <Text
                textSize="header2"
                fontFamily="primary"
                textColor="offBlack"
                textWeight="400"
                textAlign="center"
                p={{ t: "0.25rem", b: "3rem" }}
                style={{ lineHeight: 1.6, letterSpacing: 1.2 }}
              >
                We offer healthy Moroccon meals at our kitchen by the sea
              </Text>

              <SlideShow data={data.eat} />
            </Col>
          </Row>
          <Row p={{ t: "3rem" }}>
            <Col size="8">
              <Text
                textSize="header2"
                fontFamily="secondary"
                textColor="black"
                textWeight="700"
                style={{ lineHeight: 1.4, letterSpacing: 1.2 }}
              >
                Food and Drinks{" "}
              </Text>
              <Text
                textSize="paragraph"
                fontFamily="primary"
                textColor="offBlack"
                textWeight="400"
                p={{ t: "1rem" }}
                style={{ lineHeight: 1.6, letterSpacing: 1.2 }}
              >
                Singlefin's Seafood Kitchen is located on Taghazout beach,
                serving up some of the freshest seafood brought in by the local
                fisherman.
              </Text>
            </Col>
            <Col size="4">
              <Img
                style={{
                  borderRadius: 4,
                }}
                fluid={data.kitchenLogo.childImageSharp.fluid}
              />
            </Col>
          </Row>
        </Container>
      </PrimaryContainer>
    </Layout>
  </Div>
)

export default IndexPage
