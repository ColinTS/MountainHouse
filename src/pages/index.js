import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { Div, Container, Row, Col, Anchor, Button, Text, Icon } from "atomize"
import Img from "gatsby-image"
import Layout from "../components/layout"
import PrimaryContainer from "../components/container"
import ActivityThumbnail from "../components/activity"
import BigHeader from "../components/bigHeader"
import SubHeader from "../components/subHeader"
import SlideShow from "../components/slideshow"
import BigLogo from "../images/bigLogo.svg"
import theme from "../theme.js"

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
          top: "40%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          // textAlign: "center",
        }}
      >
        <BigLogo
          style={{
            width: "500px",
            height: "500px",
          }}
        />
        {/* <Div p={{ t: "2rem" }}>
          <SubHeader
            text=" A place for co-working, surfing, yoga, and relaxing - located at the
            foot of the atlas mountains, near Taghazout, Morocco"
          ></SubHeader>
        </Div> */}
      </Div>
    </Div>

    <Layout>
      <SEO title="Home" />
      <Div m={{ t: "-4rem" }}>
        <PrimaryContainer bg={theme.colors.secondary}>
          <Container justify="center" maxW="900px">
            <Text
              textSize={theme.textSize.size.header}
              fontFamily={theme.fontFamily.secondary}
              textColor={theme.colors.darkDune}
              textWeight="700"
              style={{
                lineHeight: 1.3,
                letterSpacing: 1.2,
                textAlign: "center",
              }}
            >
              Single Fin is a holiday retreat in Taghazout, Morocco{" "}
            </Text>
            <Text
              textSize={theme.textSize.size.header2}
              fontFamily={theme.fontFamily.secondary}
              textColor={theme.colors.darkDune}
              textWeight="400"
              p={{ t: "1rem" }}
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
        </PrimaryContainer>
      </Div>

      {/* surf */}
      <PrimaryContainer bg={theme.colors.secondary}>
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
                Surf with us
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
