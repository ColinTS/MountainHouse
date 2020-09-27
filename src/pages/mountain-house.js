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
      {/* Stay */}
      <div
        sx={{
          paddingTop: "4rem",
          paddingBottom: "4rem",
        }}
      >
        <Grid columns={[1, 1, "1.5fr 1fr"]}>
          <AspectRatio
            ratio={16 / 9}
            sx={{
              overflow: "hidden",
            }}
          >
            {" "}
            <SlideShow data={data.surfing} images={surfImages} />
          </AspectRatio>
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
                px: [3, 3, 0],
              }}
            >
              <h2 sx={{ variant: "styles.h2" }}>Stay by the sea</h2>
              <p sx={{ variant: "styles.p", py: 3 }}>
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
      <div
        sx={{
          pt: [2, 2, 6],
          paddingBottom: "4rem",
        }}
      >
        <Grid columns={[1, 1, "1fr 1.5fr"]}>
          <div
            sx={{
              paddingLeft: [null, null, "2rem"],
              paddingRight: [null, null, "2rem"],
              width: [null, null, "550px"],
              marginLeft: ["auto"],
              height: ["auto", "auto", "auto"],
              maxHeight: [null, null, "600px"],
            }}
          >
            <div
              sx={{
                width: ["100%", "100%", "100%"],
                px: [3, 3, 3],
              }}
            >
              <h2 sx={{ variant: "styles.h2" }}>
                Surf the coastal paradise of southern Morocco
              </h2>
              <p sx={{ variant: "styles.p", py: 3 }}>
                There is surfing all-year round in Morocco and Taghazout is at
                the center of it all. Just within a few km of the village there
                are 10 beautiful surfing spots, for beginners and pros.
              </p>
              <p sx={{ variant: "styles.p", pb: 3 }}>
                Right in front of our beach house there are 2 spots - Hash point
                and Panorama. Just a quick walk down the beach and you'll find
                Anchor point - One of Morocco's most famous places to surf. In
                fact, you can check the surf from our roof terrace.
              </p>
              <p sx={{ variant: "styles.p" }}>
                We offer surf lessons for beginners and guided surf trips for
                those with more experience. No matter your skill level you'll be
                surfing your heart out when you stay with us.
              </p>
            </div>
          </div>
          <AspectRatio
            ratio={16 / 9}
            sx={{
              overflow: "hidden",
            }}
          >
            {" "}
            <SlideShow data={data.surfing} images={surfImages} />
          </AspectRatio>
        </Grid>
      </div>
      <div
        sx={{
          bg: "tertiary",
          display: "flex",
          justifyContent: "center",
          px: [3, 3, 0],
          paddingTop: "4rem",
          paddingBottom: "4rem",
        }}
      >
        <Container sx={{ maxWidth: "smallContainer" }} justify="center">
          <h2 sx={{ variant: "styles.h2", textAlign: "center", pb: 3 }}>
            Our rooms
          </h2>
          <Grid gap={4} columns={[1, 1, 1]}>
            <Box
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
            ></Box>
          </Grid>
        </Container>
      </div>
    </Layout>
  )
}

export default MountainHouse
