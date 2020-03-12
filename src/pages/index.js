/** @jsx jsx */
import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { jsx, Box, Container, Heading } from "theme-ui"
import { Div, Row, Col, Anchor, Button, Text, Icon } from "atomize"
import Img from "gatsby-image"
import Layout from "../components/layout"
import PrimaryContainer from "../components/container"
import ActivityThumbnail from "../components/activity"
import BigHeader from "../components/bigHeader"
import SubHeader from "../components/subHeader"
import SlideShow from "../components/slideshow"
import BigLogo from "../images/bigLogo.svg"
import theme from "../theme.js"
import ButtonLink from "../components/button.js"

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
  <div>
    <div
      css={{
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
      <div
        css={{
          position: "absolute",
          bottom: "-1%",
          width: "100vw",
          margin: 0,
          padding: 0,
        }}
      >
        <Dunes style={{ width: "100%", height: "auto" }} />
      </div>

      <div
        css={{
          position: "absolute",
          top: "40%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <BigLogo
          style={{
            width: "500px",
            height: "500px",
          }}
        />
      </div>
    </div>

    <Layout>
      <SEO title="Home" />
      <div css={{ marginTop: "-4rem" }}>
        <div sx={{ bg: "secondary", py: 6 }}>
          <Container sx={{ maxWidth: "smallContainer" }} justify="center">
            <h1 sx={{ variant: "styles.h1", textAlign: "center" }}>
              Single Fin is a holiday retreat in Taghazout, Morocco{" "}
            </h1>

            <Text
              textSize={theme.textSize.size.header2}
              fontFamily={theme.fontFamily.secondary}
              textColor={theme.colors.darkDune}
              textWeight="400"
              style={{
                lineHeight: 1.6,
                letterSpacing: 1.2,
                textAlign: "center",
              }}
            >
              We offer an authentic moroccan stay for guests from around the
              globe. Whether you want to have a memorable time surfing southern
              Morocco, have a relaxed holiday exploring the country, or eat
              healthy, local food from our restaurant, Single Fin welcomes you
              with open arms.
            </Text>

            {/* <Col size="7">
                <Img
                  style={{
                    borderRadius: 4,
                  }}
                  fluid={data.placeholderImage.childImageSharp.fluid}
                />
              </Col> */}
          </Container>
        </div>
      </div>

      {/* surf */}
      <Div
        bg={"linear-gradient(to bottom, #FFCF8A 0%, #F9EACC 80%)"}
        p={{ t: "6rem", b: "6rem" }}
        d="flex"
        align="center"
      >
        <Div style={{ display: "flex", width: "100%", maxWidth: "1200" }}>
          <Div p={{ l: "3rem" }} style={{ flexBasis: "50%", maxWidth: "50%" }}>
            <Div w="500px" pos="relative" left="33.33333%">
              <Text
                textSize={theme.textSize.size.header}
                fontFamily={theme.fontFamily.secondary}
                textColor={theme.colors.darkDune}
                textWeight="700"
                style={{ lineHeight: 1.4, letterSpacing: 1.2 }}
              >
                Surf the coastal paradise of southern Morocco
              </Text>
              <Text
                textSize={theme.textSize.size.header2}
                fontFamily={theme.fontFamily.secondary}
                textColor={theme.colors.darkDune}
                textWeight="400"
                p={{ t: "0.25rem", b: "3rem" }}
                style={{ lineHeight: 1.6, letterSpacing: 1.2 }}
              >
                From beginner to advanced, we offer surf lessons and surf
                guiding for all
              </Text>
            </Div>
          </Div>

          <Div style={{ flexBasis: "50%", maxWidth: "50%" }}>
            {" "}
            <SlideShow data={data.surf} />
          </Div>
        </Div>
      </Div>
      <Div bg="#F9EACC">
        <Container justify="center" maxW="1000px">
          <Row>
            <Col size="12">
              <Text
                textSize={theme.textSize.size.header2}
                fontFamily={theme.fontFamily.secondary}
                textColor={theme.colors.darkDune}
                textWeight="700"
                p={{ t: "0.25rem", b: "3rem" }}
                textAlign="center"
                style={{ lineHeight: 1.6, letterSpacing: 1.2 }}
              >
                Surf Packages
              </Text>
            </Col>
          </Row>
          <Row justify="space-between">
            <Col size="6">
              <Box
                bg="white"
                sx={{
                  cursor: "pointer",
                  borderRadius: 4,
                  transform: "translate(0, 0px)",
                  transition: "all .4s ease",
                  ":hover": {
                    transform: "translate(0, -8px)",
                    transition: "all .4s ease",
                    boxShadow: "0 0 10px 0px rgba(0, 0, 0, .125)",
                  },
                }}
              >
                <Img
                  style={{
                    borderRadius: "4px 4px 0px 0px",
                    maxHeight: "240px",

                    width: "auto",
                  }}
                  fluid={data.placeholderImage.childImageSharp.fluid}
                />
                <Div p={{ t: "1rem", l: "2rem" }}>
                  <Row>
                    <Text
                      textSize={theme.textSize.size.header2}
                      fontFamily={theme.fontFamily.secondary}
                      textColor={theme.colors.darkDune}
                      textWeight="700"
                      p={{ b: "0.5rem" }}
                      style={{ lineHeight: 1.6, letterSpacing: 1.2 }}
                    >
                      Surf and Stay
                    </Text>
                  </Row>
                  <Row>
                    <Text
                      textSize={theme.textSize.size.paragraph}
                      fontFamily={theme.fontFamily.secondary}
                      textColor={theme.colors.darkDune}
                      textWeight="500"
                      p={{ b: "1rem" }}
                      style={{ lineHeight: 1.6, letterSpacing: 1.2 }}
                    >
                      Starting from{" "}
                      <span style={{ fontWeight: "900" }}>450 EUR</span>{" "}
                      per/week
                    </Text>
                  </Row>
                  <Row>
                    <Text
                      textSize={theme.textSize.size.paragraph}
                      fontFamily={theme.fontFamily.secondary}
                      textColor={theme.colors.darkDune}
                      textWeight="500"
                      p={{ b: "1rem" }}
                      style={{ lineHeight: 1.6, letterSpacing: 1.2 }}
                    >
                      Are you a surfer with some experience and want to surf the
                      sweetest waves of Southern Morocco? Our local, lovable
                      guides will take you to their favorite places to surf.
                    </Text>
                  </Row>
                  <Row align="center" p={{ b: "0.25rem" }}>
                    <Icon
                      name="Checked"
                      color={theme.colors.secondary}
                      size="30px"
                    />

                    <Text
                      textSize={theme.textSize.size.paragraph}
                      fontFamily={theme.fontFamily.secondary}
                      textColor={theme.colors.darkDune}
                      textWeight="500"
                      style={{ lineHeight: 1.6, letterSpacing: 1.2 }}
                    >
                      Find the swell: daily surf excursions
                    </Text>
                  </Row>
                  <Row align="center" p={{ b: "0.25rem" }}>
                    <Icon
                      name="Checked"
                      color={theme.colors.secondary}
                      size="30px"
                    />

                    <Text
                      textSize={theme.textSize.size.paragraph}
                      fontFamily={theme.fontFamily.secondary}
                      textColor={theme.colors.darkDune}
                      textWeight="500"
                      style={{ lineHeight: 1.6, letterSpacing: 1.2 }}
                    >
                      Overnight stay in one of our rooms
                    </Text>
                  </Row>
                  <Row align="center" p={{ b: "0.25rem" }}>
                    <Icon
                      name="Checked"
                      color={theme.colors.secondary}
                      size="30px"
                    />

                    <Text
                      textSize={theme.textSize.size.paragraph}
                      fontFamily={theme.fontFamily.secondary}
                      textColor={theme.colors.darkDune}
                      textWeight="500"
                      style={{ lineHeight: 1.6, letterSpacing: 1.2 }}
                    >
                      Free healthy breakfast
                    </Text>
                  </Row>
                  <Row align="center" p={{ b: "0.25rem" }}>
                    <Icon
                      name="Checked"
                      color={theme.colors.secondary}
                      size="30px"
                    />

                    <Text
                      textSize={theme.textSize.size.paragraph}
                      fontFamily={theme.fontFamily.secondary}
                      textColor={theme.colors.darkDune}
                      textWeight="500"
                      style={{ lineHeight: 1.6, letterSpacing: 1.2 }}
                    >
                      Chill-out terrace over the sea
                    </Text>
                  </Row>
                  <Row align="center" p={{ b: "0.25rem" }}>
                    <Icon
                      name="Checked"
                      color={theme.colors.secondary}
                      size="30px"
                    />

                    <Text
                      textSize={theme.textSize.size.paragraph}
                      fontFamily={theme.fontFamily.secondary}
                      textColor={theme.colors.darkDune}
                      textWeight="500"
                      style={{ lineHeight: 1.6, letterSpacing: 1.2 }}
                    >
                      200/20 Mbps internet
                    </Text>
                  </Row>
                  <Row p={{ t: "1rem", b: "1rem" }}>
                    <ButtonLink
                      name="Book Now"
                      textColor="white"
                      bg={theme.colors.primary}
                    />
                  </Row>
                </Div>
              </Box>
            </Col>
            <Col size="6">
              <Div bg="white" p="2rem" rounded="sm">
                <Text
                  textSize={theme.textSize.size.header2}
                  fontFamily={theme.fontFamily.secondary}
                  textColor={theme.colors.darkDune}
                  textWeight="700"
                  p={{ t: "0.25rem", b: "3rem" }}
                  style={{ lineHeight: 1.6, letterSpacing: 1.2 }}
                >
                  Package 1
                </Text>
              </Div>
            </Col>
          </Row>
        </Container>
      </Div>

      {/* Eat */}
      <PrimaryContainer bg={theme.colors.lightDune}>
        <Container justify="center"></Container>
      </PrimaryContainer>
    </Layout>
  </div>
)

export default IndexPage
