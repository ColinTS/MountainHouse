/** @jsx jsx */

import { jsx, Container, Flex, AspectRatio, Grid, Box, Button } from "theme-ui"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import { useState } from "react"
import * as React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundImage from "gatsby-background-image"
import BoardDivider from "../images/explore/board.svg"
import SlideShow from "../components/slideshow"
import { motion, AnimatePresence } from "framer-motion"
import Check from "../images/check.svg"
import BerberOne from "../images/berberOne.svg"
import RoomCard from "../components/roomCard"
import withSizes from "react-sizes"
import ImageCarousel from "../components/imageCarousel"
import { Parallax } from "react-scroll-parallax"

const surfImages = [
  "//images.ctfassets.net/qlhp1q6elgxs/16NM1a7FJI0IcByEiwRAvb/0bb8fb72a8f9264dbb2359bc7d54e8d3/surf4__1_.jpg",
  "//images.ctfassets.net/qlhp1q6elgxs/5wUx0XFkFjIKnj12dwOJOI/144ae6c5dc08eeb927701ac63c2b4a8e/surf3__1_.jpg",
  "//images.ctfassets.net/qlhp1q6elgxs/5vc4HttUmh4n6W1GynB9y3/0288c946282fd76c09ee44bb97bcf68f/surf2__1_.jpg",
  "//images.ctfassets.net/qlhp1q6elgxs/OjI0Pf4TQlMgHIfQwbEm8/91912ff2b7e4418d7c9fde000fbcb24d/surf1__1_.jpg",
]

export const data = graphql`
  query {
    surfStay: file(relativePath: { eq: "surfStay.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 4000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const MountainHouse = ({ data, isMobile }) => {
  return (
    <Layout>
      <SEO title="Mountain House" />
      <div
        sx={{
          position: "relative",
          background:
            "linear-gradient(to bottom,rgba(0,0,0,.6) 50%,transparent 100%)",
        }}
      >
        <BackgroundImage
          css={{
            height: "80vh",
            opacity: "1 !important",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
          fluid={data.surfStay.childImageSharp.fluid}
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
            }}
          >
            The Mountain Villa
          </h1>
          {/* <p
            sx={{
              variant: "styles.p",
              textAlign: "center",
              opacity: 0.9,
              color: "white",
              fontSize: [2, 2, 4],
            }}
          >
            Your home in the quiet mountains above Taghazout
          </p> */}
        </div>
      </div>

      <Container
        sx={{
          variant: "layout.primaryContainer",
          variant: "layout.gutters",
          py: [4, 4, 6],
        }}
      >
        <Grid gap={[2, 3, 5]} columns={[1, 1, 2]}>
          <div>
            <h1
              sx={{
                variant: "styles.h1",
                textAlign: "center",
              }}
            >
              <span sx={{ fontWeight: 700 }}>Tranquil mountains</span>, near the
              beaches
            </h1>
          </div>
          <div>
            <p
              sx={{
                variant: "styles.pPlus",
                textAlign: "center",
              }}
            >
              Taghazout is sunny and warm almost every day of the year. Winter
              is when the swell peaks and sufing is at its best, and while
              there's surf all-year-round, it's in the Summer when you'll see
              people ennjoying the beaches and chilling in all of the cafes and
              restaurants that face the sea.
            </p>
          </div>
        </Grid>
      </Container>
      {/* Stay */}
      <div
        sx={{
          paddingTop: ["1rem", "3rem", "4rem"],
          paddingBottom: ["1rem", "3rem", "4rem"],
        }}
      >
        {isMobile && (
          <div>
            <div sx={{ variant: "layout.gutters" }}>
              <p
                sx={{
                  variant: "styles.subHeader",
                  py: 1,
                }}
              >
                The Mountains
              </p>
              <h2
                sx={{
                  variant: "styles.h2",
                  pb: 3,
                }}
              >
                In the mountains, not far from the
                <span sx={{ fontWeight: 700 }}> beach </span>
              </h2>
            </div>
            <ImageCarousel images={surfImages} />
          </div>
        )}
        <Grid columns={[1, 1, "1.5fr 1fr"]}>
          {!isMobile && (
            <Parallax y={[20, -20]} tagOuter="figure">
              <div sx={{ height: ["300px", "400px", "650px"] }}>
                <SlideShow data={data.surfing} images={surfImages} />
              </div>
            </Parallax>
          )}
          <div
            sx={{
              paddingLeft: [null, null, "2rem"],
              paddingRight: [null, null, "2rem"],
              width: [null, null, "550px"],
              marginRight: ["auto"],
              height: ["auto", "auto", "auto"],
              maxHeight: [null, null, "600px"],
            }}
          >
            <div
              sx={{
                width: ["100%", "100%", "100%"],
                variant: "layout.gutters",
              }}
            >
              {!isMobile && (
                <div>
                  <p
                    sx={{
                      variant: "styles.subHeader",
                      py: 1,
                    }}
                  >
                    The Mountains
                  </p>
                  <h2
                    sx={{
                      variant: "styles.h2",
                      pb: 3,
                    }}
                  >
                    In the mountains, not far from the
                    <span sx={{ fontWeight: 700 }}> beach </span>
                  </h2>
                </div>
              )}
              <p
                sx={{
                  variant: "styles.p",
                  fontSize: "16px",
                  pt: [0, 2, 3],
                  pb: [2, 2, 3],
                }}
              >
                The Singlefin beach house is your front-row seat to the Alantic
                ocean. Located right on Taghazout beach and facing the sea, our
                rooms are bright, airy, and got a view you'll remember.
              </p>
              <p sx={{ variant: "styles.p", pb: 3 }}>
                Built on multiple levels, the house is designed and decorated
                with a tradtional Berber style, and whether you want to check
                the surf from your room, relax on the roof top terrace with some
                tea, or fill up on home-cooked meals at our restaurant below you
                will find yourself at home.
              </p>
            </div>
          </div>
        </Grid>
      </div>
      {/* Stay */}
      <div
        sx={{
          bg: "#f8f4f0",
          display: "flex",
          justifyContent: "center",
          variant: "layout.gutters",
          paddingTop: "4rem",
          paddingBottom: "4rem",
        }}
      >
        <Container sx={{ maxWidth: "mediumContainer" }} justify="center">
          <h2 sx={{ variant: "styles.h2", textAlign: "center", pb: 3 }}>
            Our rooms
          </h2>
          <Grid gap={4} columns={[1, 1, 1]}>
            <RoomCard data={data.surfing} images={surfImages} />
            <RoomCard data={data.surfing} images={surfImages} />
            {/* <Box
              bg="white"
              sx={{
                cursor: "pointer",
                borderRadius: 4,
                transform: "translate(0, 0px)",
                transition: "all .3s ease",
                height: "400px",
                maxWidth: "100%",

                ":hover": {
                  transform: "translate(0, -8px)",
                  transition: "all .3 ease",
                  boxShadow: "0 0 10px 0px rgba(0, 0, 0, .125)",
                },
              }}
            >
              <Grid columns={[1, 1, "1.5fr 1fr"]}>
                <AspectRatio
                  ratio={16 / 9}
                  sx={{
                    overflow: "hidden",
                    maxHeight: "400px",
                  }}
                >
                  {" "}
                  <SlideShow
                    sx={{ height: "400px" }}
                    data={data.surfing}
                    images={surfImages}
                  />
                </AspectRatio>

                <div
                  sx={{
                    height: ["auto", "auto", "auto"],
                    height: "400px",
                  }}
                >
                  <Box
                    sx={{
                      py: "2rem",
                      px: "1rem",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    <div>
                      <h3
                        sx={{
                          variant: "styles.h3",
                          pb: 3,
                          fontWeight: 500,
                          fontSize: [2, 2, 3],
                          opacity: 0.5,
                        }}
                      >
                        BASIC ROOM
                      </h3>
                      <p
                        sx={{
                          variant: "styles.p",
                          fontSize: [1, 1, 2],
                          pb: 1,
                        }}
                      >
                        Are you a surfer with some experience and want to surf
                        the sweetest waves of Southern Morocco? Our experienced
                        guides will take you to their favorite places to surf.
                      </p>
                    </div>
                    <div>
                      <Button>Book now</Button>
                      <p
                        sx={{
                          variant: "styles.p",
                          fontSize: [1, 1, 2],
                          margin: 0,
                          pt: 2,
                        }}
                      >
                        Starting from{" "}
                        <span style={{ fontWeight: "900" }}>370 EUR</span>{" "}
                        per/week
                      </p>
                    </div>
                  </Box>
                </div>
              </Grid>
            </Box> */}
          </Grid>
        </Container>
      </div>
    </Layout>
  )
}

const mapSizesToProps = ({ width }) => ({
  isMobile: width < 780,
})

export default withSizes(mapSizesToProps)(MountainHouse)
