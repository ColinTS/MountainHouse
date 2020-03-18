/** @jsx jsx */
import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { jsx, Box, Container, Heading, Grid, Flex } from "theme-ui"
import { Div, Row, Col, Anchor, Button, Text, Icon } from "atomize"
import Img from "gatsby-image"
import Layout from "../components/layout"
import PrimaryContainer from "../components/container"
import ActivityThumbnail from "../components/activity"
import BigHeader from "../components/bigHeader"
import SubHeader from "../components/subHeader"
import SlideShow from "../components/slideshow"
import BigLogo from "../images/bigLogo.svg"
import Check from "../images/check.svg"
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
        <div sx={{ bg: "secondary", pt: 6, pb: 6 }}>
          <Container sx={{ maxWidth: "smallContainer" }} justify="center">
            <h1 sx={{ variant: "styles.h1", textAlign: "center" }}>
              Singlefin is a holiday retreat in Taghazout, Morocco{" "}
            </h1>

            <p sx={{ variant: "styles.p", textAlign: "center", pt: 2 }}>
              We offer an authentic moroccan stay for guests from around the
              globe. Whether you want to have a memorable time surfing southern
              Morocco, have a relaxed holiday exploring the country, or eat
              healthy, local food from our restaurant, Single Fin welcomes you
              with open arms.
            </p>
          </Container>
        </div>
      </div>

      {/* surf */}
      <div
        sx={{
          variant: "layout.primaryContainer",
          background: "linear-gradient(to bottom, #FFCF8A 0%, #F9EACC 80%)",
        }}
      >
        <div css={{ display: "flex", width: "100%", maxWidth: "1200" }}>
          <div
            css={{ flexBasis: "40%", maxWidth: "40%", paddingRight: "3rem" }}
          >
            <div
              css={{ width: "500px", position: "relative", marginLeft: "auto" }}
            >
              <h2 sx={{ variant: "styles.h2" }}>
                Surf the coastal paradise of southern Morocco
              </h2>
              <p sx={{ variant: "styles.p" }}>
                From beginner to advanced, we offer surf lessons and surf
                guiding for all
              </p>
            </div>
          </div>

          <div css={{ flexBasis: "60%", maxWidth: "60%" }}>
            {" "}
            <SlideShow data={data.surf} />
          </div>
        </div>
      </div>
      <div sx={{ bg: "tertiary", display: "flex", justifyContent: "center" }}>
        <div
          sx={{
            maxWidth: "container",
          }}
        >
          <Box>
            <h3
              sx={{
                variant: "styles.h3",
                pt: "0.25rem",
                pb: "1rem",
                // textAlign: "center",
              }}
            >
              Surf Packages
            </h3>
          </Box>

          <Grid gap={4} columns={[1, 1, 2]}>
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
              <Box sx={{ pt: "1rem", px: "2rem" }}>
                <Container>
                  <h3
                    sx={{
                      variant: "styles.h3",
                      pb: 1,
                    }}
                  >
                    Surf and stay
                  </h3>
                </Container>
                <Container>
                  <p
                    sx={{
                      variant: "styles.p",
                      fontSize: 16,
                      pb: 1,
                    }}
                  >
                    Starting from{" "}
                    <span style={{ fontWeight: "900" }}>450 EUR</span> per/week
                  </p>
                </Container>
                <Container>
                  <p
                    sx={{
                      variant: "styles.p",
                      fontSize: 16,
                      pb: 1,
                    }}
                  >
                    Are you a surfer with some experience and want to surf the
                    sweetest waves of Southern Morocco? Our local, lovable
                    guides will take you to their favorite places to surf.
                  </p>
                </Container>
                <Flex sx={{ alignItems: "center" }}>
                  <Check
                    sx={{
                      width: "14px",
                      height: "14px",
                      fill: "secondary",
                      mr: 1,
                    }}
                  />

                  <p
                    sx={{
                      variant: "styles.p",
                      fontSize: 16,
                      mb: 0,
                    }}
                  >
                    Find the swell: daily surf excursions
                  </p>
                </Flex>
                <Flex sx={{ alignItems: "center" }}>
                  <Check
                    sx={{
                      width: "14px",
                      height: "14px",
                      fill: "secondary",
                      mr: 1,
                    }}
                  />
                  <p
                    sx={{
                      variant: "styles.p",
                      fontSize: 16,
                      mb: 0,
                    }}
                  >
                    Overnight stay in one of our rooms
                  </p>
                </Flex>
                <Flex sx={{ alignItems: "center" }}>
                  <Check
                    sx={{
                      width: "14px",
                      height: "14px",
                      fill: "secondary",
                      mr: 1,
                    }}
                  />
                  <p
                    sx={{
                      variant: "styles.p",
                      fontSize: 16,
                      mb: 0,
                    }}
                  >
                    Free healthy breakfast
                  </p>
                </Flex>
                <Flex sx={{ alignItems: "center" }}>
                  <Check
                    sx={{
                      width: "14px",
                      height: "14px",
                      fill: "secondary",
                      mr: 1,
                    }}
                  />

                  <p
                    sx={{
                      variant: "styles.p",
                      fontSize: 16,
                      mb: 0,
                    }}
                  >
                    Chill-out terrace over the sea
                  </p>
                </Flex>
                <Flex sx={{ alignItems: "center" }}>
                  <Check
                    sx={{
                      width: "14px",
                      height: "14px",
                      fill: "secondary",
                      mr: 1,
                    }}
                  />

                  <p
                    sx={{
                      variant: "styles.p",
                      fontSize: 16,
                      mb: 0,
                    }}
                  >
                    Blazing 200/20 Mbps internet
                  </p>
                </Flex>
                <Flex sx={{ pt: "1rem", pb: "1rem" }}>
                  <ButtonLink name="Book Now" textColor="white" bg="blue" />
                </Flex>
              </Box>
            </Box>

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
              <Box sx={{ pt: "1rem", px: "2rem" }}>
                <Container>
                  <h3
                    sx={{
                      variant: "styles.h3",
                      pb: 1,
                    }}
                  >
                    Surf and stay
                  </h3>
                </Container>
                <Container>
                  <p
                    sx={{
                      variant: "styles.p",
                      fontSize: 16,
                      pb: 1,
                    }}
                  >
                    Starting from{" "}
                    <span style={{ fontWeight: "900" }}>450 EUR</span> per/week
                  </p>
                </Container>
                <Container>
                  <p
                    sx={{
                      variant: "styles.p",
                      fontSize: 16,
                      pb: 1,
                    }}
                  >
                    Are you a surfer with some experience and want to surf the
                    sweetest waves of Southern Morocco? Our local, lovable
                    guides will take you to their favorite places to surf.
                  </p>
                </Container>
                <Flex sx={{ alignItems: "center" }}>
                  <Check
                    sx={{
                      width: "14px",
                      height: "14px",
                      fill: "secondary",
                      mr: 1,
                    }}
                  />

                  <p
                    sx={{
                      variant: "styles.p",
                      fontSize: 16,
                      mb: 0,
                    }}
                  >
                    Find the swell: daily surf excursions
                  </p>
                </Flex>
                <Flex sx={{ alignItems: "center" }}>
                  <Check
                    sx={{
                      width: "14px",
                      height: "14px",
                      fill: "secondary",
                      mr: 1,
                    }}
                  />
                  <p
                    sx={{
                      variant: "styles.p",
                      fontSize: 16,
                      mb: 0,
                    }}
                  >
                    Overnight stay in one of our rooms
                  </p>
                </Flex>
                <Flex sx={{ alignItems: "center" }}>
                  <Check
                    sx={{
                      width: "14px",
                      height: "14px",
                      fill: "secondary",
                      mr: 1,
                    }}
                  />
                  <p
                    sx={{
                      variant: "styles.p",
                      fontSize: 16,
                      mb: 0,
                    }}
                  >
                    Free healthy breakfast
                  </p>
                </Flex>
                <Flex sx={{ alignItems: "center" }}>
                  <Check
                    sx={{
                      width: "14px",
                      height: "14px",
                      fill: "secondary",
                      mr: 1,
                    }}
                  />

                  <p
                    sx={{
                      variant: "styles.p",
                      fontSize: 16,
                      mb: 0,
                    }}
                  >
                    Chill-out terrace over the sea
                  </p>
                </Flex>
                <Flex sx={{ alignItems: "center" }}>
                  <Check
                    sx={{
                      width: "14px",
                      height: "14px",
                      fill: "secondary",
                      mr: 1,
                    }}
                  />

                  <p
                    sx={{
                      variant: "styles.p",
                      fontSize: 16,
                      mb: 0,
                    }}
                  >
                    Blazing 200/20 Mbps internet
                  </p>
                </Flex>
                <Flex sx={{ pt: "1rem", pb: "1rem" }}>
                  <ButtonLink name="Book Now" textColor="white" bg="blue" />
                </Flex>
              </Box>
            </Box>
          </Grid>
        </div>
      </div>

      {/* Eat */}
      <div
        sx={{
          variant: "layout.primaryContainer",
          bg: "tertiary",
        }}
      >
        <div
          css={{
            display: "flex",
            flexDirection: "row-reverse",
            width: "100%",
            maxWidth: "1200",
          }}
        >
          <div css={{ flexBasis: "40%", maxWidth: "40%", paddingLeft: "3rem" }}>
            <div
              css={{
                width: "500px",
                position: "relative",
                marginRight: "auto",
              }}
            >
              <h2 sx={{ variant: "styles.h2" }}>
                Surf the coastal paradise of southern Morocco
              </h2>
              <p sx={{ variant: "styles.p" }}>
                From beginner to advanced, we offer surf lessons and surf
                guiding for all
              </p>
            </div>
          </div>

          <div css={{ flexBasis: "60%", maxWidth: "60%" }}>
            {" "}
            <SlideShow data={data.stay} />
          </div>
        </div>
      </div>
      <div sx={{ bg: "tertiary", pb: 2 }}>
        <Container sx={{ maxWidth: "container" }} justify="center">
          <Box>
            <h3
              sx={{
                variant: "styles.h3",
                pb: 3,
              }}
            >
              What's in your stay?
            </h3>
          </Box>
          <Grid sx={{ pt: 2 }} gap={6} columns={[1, 1, 2]}>
            <Box>
              <Flex sx={{ pb: 4 }}>
                <div css={{ display: "flex" }}>
                  <Check
                    sx={{
                      height: "auto",
                      width: "20px",
                      fill: "blue",
                      mr: 3,
                    }}
                  />
                </div>

                <p
                  sx={{
                    variant: "styles.p",
                    mb: 0,
                  }}
                >
                  Bright, airy rooms with views to the sea
                </p>
              </Flex>
              <Flex sx={{ pb: 4 }}>
                <div css={{ display: "flex" }}>
                  <Check
                    sx={{
                      height: "auto",
                      width: "20px",
                      fill: "blue",
                      mr: 3,
                    }}
                  />
                </div>

                <p
                  sx={{
                    variant: "styles.p",
                    mb: 0,
                  }}
                >
                  Free, healthy breakfast served at our restaurant by the beach
                </p>
              </Flex>
              <Flex sx={{ pb: 4 }}>
                <div css={{ display: "flex" }}>
                  <Check
                    sx={{
                      height: "auto",
                      width: "20px",

                      fill: "blue",
                      mr: 3,
                    }}
                  />
                </div>

                <p
                  sx={{
                    variant: "styles.p",
                    mb: 0,
                  }}
                >
                  Roof-top terrace with a covered space to lounge, eat food, and
                  watch the sunset
                </p>
              </Flex>
            </Box>
            <Box>
              <Flex sx={{ alignItems: "center" }}>
                <div css={{ display: "flex" }}>
                  <Check
                    sx={{
                      height: "auto",
                      width: "20px",

                      fill: "blue",
                      mr: 3,
                    }}
                  />
                </div>

                <p
                  sx={{
                    variant: "styles.p",
                    mb: 0,
                  }}
                >
                  Blazing 200/20 Mbps internet
                </p>
              </Flex>
            </Box>
          </Grid>
        </Container>
      </div>
    </Layout>
  </div>
)

export default IndexPage
