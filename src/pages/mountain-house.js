/** @jsx jsx */

import { jsx, Container, Flex, AspectRatio, Grid, Box } from "theme-ui"
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

const MountainHouse = ({ data }) => {
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
            height: "70vh",
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
              fontSize: [5, 6, 7],
            }}
          >
            The Mountainhouse
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
            Your home in the quiet mountains above Taghazout
          </p>
        </div>
      </div>

      <Container
        sx={{
          variant: "layout.primaryContainer",
          px: 3,
          py: [4, 4, 6],
        }}
      >
        <Grid gap={[2, 3, 5]} columns={[1, 1, 2]}>
          <div>
            <p
              sx={{
                variant: "styles.p",
              }}
            >
              Singlefin is located in the heart of Taghazout, a seaside Berber
              village in Southern Morocco. Up until the 1970's, Taghazout was a
              small fishing village until its epic surf was discovered by the
              Hippies. Ever since then, the surfing scene has grown and while it
              is now considered to be a world-class destination for surf, the
              village has retained its laid back roots.
            </p>
          </div>
          <div>
            <p
              sx={{
                variant: "styles.p",
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
        {/* <Flex
          sx={{
            justifyContent: "center",
            alignItems: "center",
            pt: 4,
            px: [3, 3, 3],
            flexDirection: "column",
          }}
        >
          <h1
            sx={{
              variant: "styles.h1",

              textAlign: "center",
              pb: 2,
            }}
          >
            The Mountain House
          </h1>
          <BoardDivider sx={{ width: "75px" }} />
          <p
            sx={{
              variant: "styles.p",
              textAlign: "center",
              color: "text",
              pt: 4,
            }}
          >
            Short bio about the mountain house
          </p>
        </Flex> */}
      </Container>
      <Container>
        <AspectRatio
          ratio={16 / 9}
          sx={{
            overflow: "hidden",
          }}
        >
          {" "}
          <SlideShow images={surfImages} />
        </AspectRatio>
      </Container>
      <div sx={{ py: 5, px: [3, 3, 0] }}>
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
          <Grid sx={{ pt: 2 }} gap={[0, 0, 6]} columns={[1, 1, 2]}>
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
                  Daily, healthy breakfast served at our restaurant by the beach
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
              <Flex sx={{ alignItems: "center", pb: 4 }}>
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
              <Flex sx={{ alignItems: "center", pb: 4 }}>
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
                  Fully equipped kitchen to cook your own food
                </p>
              </Flex>
            </Box>
          </Grid>
        </Container>
        <Flex sx={{ justifyContent: "center", pt: [2, 2, 4] }}>
          <BerberOne sx={{ height: [75, 100, 140], width: "auto" }}></BerberOne>
        </Flex>
      </div>
    </Layout>
  )
}

export default MountainHouse
