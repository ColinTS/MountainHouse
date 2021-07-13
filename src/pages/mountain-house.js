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
import GoogleMapReact from "google-map-react"
import Marker from "../images/location/Marker.svg"

// const isClient = typeof window !== "undefined"

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
            width: "100vw",
            px: 3,
            transform: "translate(-50%, -50%)",
          }}
        >
          <h1
            sx={{
              variant: "styles.h1",
              textAlign: "center",
              color: "white",
              fontSize: [6, 7, 8],
            }}
          >
            The Mountain Villa
          </h1>
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
          py: [5, 5, 6],
        }}
      >
        <Container sx={{ maxWidth: "mediumContainer" }} justify="center">
          <div>
            <p
              sx={{
                variant: "styles.subHeader",

                textAlign: "center",
              }}
            >
              The Rooms
            </p>
            <h2
              sx={{
                variant: "styles.h2",
                pb: 3,
                textAlign: "center",
              }}
            >
              A room for
              <span sx={{ fontWeight: 700 }}> everyone </span>
            </h2>
          </div>
          <Grid gap={4} columns={[1, 1, 1]}>
            <RoomCard
              data={data.surfing}
              images={surfImages}
              title="ROOM ONE"
              description="Room one is a spacious room with a private terrace overlooking the peaceful garden and front seat to the sunrise and sunset."
              price="30"
            />
            <RoomCard
              data={data.surfing}
              images={surfImages}
              title="ROOM TWO"
              description="Room one is a spacious room with a private terrace overlooking the peaceful garden and front seat to the sunrise and sunset."
              price="40"
            />
          </Grid>
        </Container>
      </div>
      <Container
        sx={{
          variant: "layout.primaryContainer",
          variant: "layout.gutters",
          py: [5, 5, 6],
        }}
      >
        <div>
          <p
            sx={{
              variant: "styles.subHeader",
              py: 1,
            }}
          >
            How to get here
          </p>
          {/* <h2
            sx={{
              variant: "styles.h2",
              pb: 3,
            }}
          >
            In the mountains, not far from the
            <span sx={{ fontWeight: 700 }}> beach </span>
          </h2> */}
        </div>
        <div sx={{ height: "600px", width: "100%", px: "-1.5rem" }}>
          {/* {isClient && ( */}
          <GoogleMapReact
            bootstrapURLKeys={{
              key: process.env.GATSBY_GOOGLE_API_KEY,
            }}
            defaultCenter={[30.544194, -9.708767]}
            defaultZoom={17}
          >
            <Marker
              lat={30.544194}
              lng={-9.708767}
              sx={{
                height: "64px",
                position: "absolute",
                transform: "translate(-50%, -50%)",
              }}
            />
          </GoogleMapReact>
          {/* )} */}
        </div>
        <p
          sx={{
            variant: "styles.p",
            pt: [4, 2, 3],
            pb: [2, 2, 3],
          }}
        >
          The Singlefin beach house is your front-row seat to the Alantic ocean.
          Located right on Taghazout beach and facing the sea, our rooms are
          bright, airy, and got a view you'll remember.
        </p>
      </Container>
    </Layout>
  )
}

const mapSizesToProps = ({ width }) => ({
  isMobile: width < 600,
})

export default withSizes(mapSizesToProps)(MountainHouse)
