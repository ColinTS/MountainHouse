/** @jsx jsx */
import { graphql } from "gatsby"
import { jsx, Box, Container, Grid, Flex, AspectRatio, Button } from "theme-ui"
import { GatsbyImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import SlideShow from "../components/slideshow"
import TextLogo from "../images/textLogo.svg"
import Check from "../images/check.svg"
import BerberOne from "../images/berberOne.svg"
import StarOne from "../images/StarOne.svg"
import StarTwo from "../images/StarTwo.svg"
import BerberTwo from "../images/berberTwo.svg"
import BerberThree from "../images/berberThree.svg"
import BeachHouseTitle from "../images/beachHouseTitle.svg"
import MountainVillaTitle from "../images/mountainVillaTitle.svg"
import StudiosTitle from "../images/studiosTitle.svg"
import BackgroundImage from "gatsby-background-image"
import { Link } from "gatsby"
import BoardDivider from "../images/explore/board.svg"
import SEO from "../components/seo"
import Dunes from "../images/dunes.svg"
import { Parallax } from "react-scroll-parallax"
import withSizes from "react-sizes"
import ImageCarousel from "../components/imageCarousel"
import CardCarousel from "../components/cardCarousel"
import "../styles/index.css"

import video from "../images/Tag.mp4"
import Instagram from "../components/instagram.js"

const surfImages = [
  "//images.ctfassets.net/qlhp1q6elgxs/16NM1a7FJI0IcByEiwRAvb/0bb8fb72a8f9264dbb2359bc7d54e8d3/surf4__1_.jpg",
  "//images.ctfassets.net/qlhp1q6elgxs/5wUx0XFkFjIKnj12dwOJOI/144ae6c5dc08eeb927701ac63c2b4a8e/surf3__1_.jpg",
  "//images.ctfassets.net/qlhp1q6elgxs/5vc4HttUmh4n6W1GynB9y3/0288c946282fd76c09ee44bb97bcf68f/surf2__1_.jpg",
  "//images.ctfassets.net/qlhp1q6elgxs/OjI0Pf4TQlMgHIfQwbEm8/91912ff2b7e4418d7c9fde000fbcb24d/surf1__1_.jpg",
]

const stayImages = [
  "//images.ctfassets.net/qlhp1q6elgxs/6fRrUT7HibbliXEqsHEoEh/5b86c02b8e52bea2664cbead64edc0d2/stay2__1_.jpg",
  "//images.ctfassets.net/qlhp1q6elgxs/4PPpQ1Gix8mRIMqitai0xl/f7472db8f764f30ba182b68aa3da0983/stay1__1_.jpg",
  "//images.ctfassets.net/qlhp1q6elgxs/41YnxrUFrNSQ1NrhO7A4QK/003d73da191b8fc0f1114600a391f0e7/stay_11_.jpg",
]

const eatImages = [
  "//images.ctfassets.net/qlhp1q6elgxs/77Z9ImgC6c5FDiV1tiLrJH/fe6142f0fdd671f8dc624582b9c29dd5/eat3__1_.jpg",
  "//images.ctfassets.net/qlhp1q6elgxs/3t4GEn6P5EjeSEw12q2Nq7/9554559823f613e72a70504fcef1aa3a/eat4__1_.jpg",
  "//images.ctfassets.net/qlhp1q6elgxs/71tzqqkxG9vjzn8xxpPSYD/50db9beba71b68ab90cc421e3551341d/eat2__1_.jpg",
]

export const data = graphql`
  {
    surfStay: file(relativePath: { eq: "surfStay.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    locationThumb: file(relativePath: { eq: "locationThumb.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    locationThumbBW: file(relativePath: { eq: "locationThumbBW.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    surfCoaching: file(relativePath: { eq: "surfCoaching.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    kitchenLogo: file(relativePath: { eq: "kitchenLogo.jpeg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    surfActivity: file(relativePath: { eq: "surfActivity.JPG" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`

function getRandomStar(min, max) {
  return Math.random() * (max - min) + min
}

const IndexPage = ({ data, isMobile }) => (
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
          position: "absolute",
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
    </div>

    <Layout>
      <SEO title="Singlefin - Surf Resort in Taghazout, Morocco" />
      <div>
        <div
          sx={{
            background: "linear-gradient(to bottom, #FFCF8A 0%, #fff 100%)",
            variant: "layout.primaryContainer",
            variant: "layout.gutters",
          }}
        >
          <Container
            sx={{
              maxWidth: "smallContainer",
              pt: [4],
              pb: ["2rem", "2rem", "6rem"],
            }}
          >
            <Flex
              sx={{
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <div>
                <h1
                  sx={{
                    variant: "styles.h1",
                    textAlign: "center",
                    pb: 2,
                  }}
                >
                  <TextLogo
                    sx={{
                      mr: [0, 0, 1],
                      mb: -2,
                      width: ["120px", "1500px", "170px"],
                      height: "auto",
                    }}
                  />{" "}
                  is a holiday retreat in Taghazout, Morocco
                </h1>
              </div>

              <BoardDivider sx={{ width: "75px" }} />
              <p
                sx={{
                  variant: "styles.pPlus",
                  textAlign: "center",
                  pt: 4,
                }}
              >
                We offer an authentic moroccan stay for guests from around the
                globe. Whether you want to have a memorable time surfing
                southern Morocco, have a relaxed holiday exploring the country,
                or eat healthy, local food from our restaurant, Singlefin
                welcomes you with open arms.
              </p>
            </Flex>
          </Container>
        </div>

        <div sx={{ variant: "layout.gutters" }}>
          <Container justify="center">
            <p
              sx={{
                variant: "styles.subHeader",
                py: 1,
                textAlign: "center",
              }}
            >
              Our Locations
            </p>
            <h2
              sx={{
                variant: "styles.h2",
                pb: 3,
                textAlign: "center",
              }}
            >
              Mountains or Beach – The choice is{" "}
              <span sx={{ fontWeight: 700 }}>yours </span>
            </h2>
            <div sx={{ mx: "-1.5rem" }}>
              <div className="mobileHome">
                <CardCarousel>
                  <Link to="/mountain-house">
                    <div sx={{ maxWidth: "92%" }}>
                      <div
                        sx={{
                          position: "relative",
                          // pl: "1rem",
                          borderRadius: 4,
                          mt: 4,
                          height: "470px",

                          cursor: "pointer",
                          background:
                            "linear-gradient(to right,rgba(0,0,0,.5) 0%,transparent 100%)",
                          boxShadow: "0 0 10px 0px rgba(0, 0, 0, .125)",
                        }}
                      >
                        <GatsbyImage
                          image={
                            data.locationThumb.childImageSharp.gatsbyImageData
                          }
                          sx={{
                            cursor: "pointer",
                            opacity: "1 !important",

                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                            borderRadius: 4,
                            height: ["470px"],
                          }}
                        />
                        <MountainVillaTitle
                          sx={{
                            width: ["225px", "300px", "300px"],
                            textAlign: "center",
                            position: "absolute",
                            top: "80%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                          }}
                        />
                      </div>
                    </div>
                  </Link>
                  <Link to="/mountain-house">
                    <div sx={{ maxWidth: "92%" }}>
                      <div
                        sx={{
                          position: "relative",
                          borderRadius: 4,
                          mt: 4,
                          height: "470px",
                          width: "100%",
                          cursor: "pointer",
                          background:
                            "linear-gradient(to right,rgba(0,0,0,.5) 0%,transparent 100%)",

                          boxShadow: "0 0 10px 0px rgba(0, 0, 0, .125)",
                        }}
                      >
                        <GatsbyImage
                          image={
                            data.locationThumb.childImageSharp.gatsbyImageData
                          }
                          sx={{
                            cursor: "pointer",
                            opacity: "1 !important",
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                            borderRadius: 4,
                            height: ["470px"],
                          }}
                        />
                        <BeachHouseTitle
                          sx={{
                            width: ["200px", "300px", "300px"],
                            textAlign: "center",

                            position: "absolute",
                            top: "80%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                          }}
                        />
                      </div>
                    </div>
                  </Link>
                </CardCarousel>
              </div>
            </div>
            <div className="desktopHome">
              <Parallax y={[5, -10]}>
                <Grid sx={{ pt: 4 }} gap={4} columns={[2]}>
                  <Link to="/mountain-house">
                    <div
                      sx={{
                        position: "relative",
                        borderRadius: 4,
                        height: ["300px", "300px", "350px"],
                        cursor: "pointer",
                        background:
                          "linear-gradient(to right,rgba(0,0,0,.5) 0%,transparent 100%)",
                        transform: "translate(0, 0px)",
                        transition: "all .3s ease",
                        ":hover": {
                          transform: "translate(0, -8px)",
                          transition: "all .3 ease",
                          boxShadow: "0 0 10px 0px rgba(0, 0, 0, .125)",
                        },
                      }}
                    >
                      <GatsbyImage
                        image={
                          data.locationThumb.childImageSharp.gatsbyImageData
                        }
                        sx={{
                          cursor: "pointer",
                          opacity: "1 !important",
                          backgroundSize: "cover",
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "center",
                          borderRadius: 4,
                          height: ["300px", "300px", "350px"],
                        }}
                      />
                      <MountainVillaTitle
                        sx={{
                          width: ["200px", "300px", "300px"],
                          textAlign: "center",

                          position: "absolute",
                          top: "50%",
                          left: "50%",
                          transform: "translate(-50%, -50%)",
                        }}
                      />
                    </div>
                  </Link>

                  <Link to="/mountain-house">
                    <div
                      sx={{
                        position: "relative",
                        borderRadius: 4,
                        height: ["300px", "300px", "350px"],
                        cursor: "pointer",
                        background:
                          "linear-gradient(to right,rgba(0,0,0,.5) 0%,transparent 100%)",
                        transform: "translate(0, 0px)",
                        transition: "all .3s ease",
                        ":hover": {
                          transform: "translate(0, -8px)",
                          transition: "all .3 ease",
                          boxShadow: "0 0 10px 0px rgba(0, 0, 0, .125)",
                        },
                      }}
                    >
                      <GatsbyImage
                        image={
                          data.locationThumb.childImageSharp.gatsbyImageData
                        }
                        sx={{
                          cursor: "pointer",
                          opacity: "1 !important",
                          backgroundSize: "cover",
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "center",
                          borderRadius: 4,
                          height: ["300px", "300px", "350px"],
                        }}
                      />
                      <BeachHouseTitle
                        sx={{
                          width: ["200px", "300px", "300px"],
                          textAlign: "center",

                          position: "absolute",
                          top: "50%",
                          left: "50%",
                          transform: "translate(-50%, -50%)",
                        }}
                      />
                    </div>
                  </Link>
                </Grid>
              </Parallax>
            </div>
            <Flex
              sx={{ justifyContent: "center", pt: [3, 3, 5], pb: [4, 0, 3] }}
            >
              <BerberOne
                sx={{ height: [90, 100, 140], width: "auto" }}
              ></BerberOne>
            </Flex>
          </Container>
        </div>
      </div>
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
            <ImageCarousel images={stayImages} />
          </div>
        )}
        <Grid columns={[1, 1, "1.5fr 1fr"]}>
          {!isMobile && (
            <Parallax y={[20, -20]} tagOuter="figure">
              <div sx={{ height: ["300px", "400px", "650px"] }}>
                <SlideShow data={data.surfing} images={stayImages} />
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
      <div sx={{ pb: 2 }}>
        <Container
          sx={{ maxWidth: "container", variant: "layout.gutters" }}
          justify="center"
        >
          <Box>
            <h3
              sx={{
                variant: "styles.h2",
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
          <Flex sx={{ justifyContent: "center", pt: [4, 4, 6], pb: [5, 2, 4] }}>
            <BerberTwo
              sx={{ height: [75, 100, 140], width: "auto" }}
            ></BerberTwo>
          </Flex>
        </Container>
      </div>
      {/* surf */}
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
            <ImageCarousel images={stayImages} />
          </div>
        )}
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
          {!isMobile && (
            <Parallax y={[20, -20]} tagOuter="figure">
              <div sx={{ height: ["300px", "400px", "650px"] }}>
                <SlideShow data={data.surfing} images={stayImages} />
              </div>
            </Parallax>
          )}
        </Grid>
      </div>
      <Flex sx={{ justifyContent: "center", pt: [4, 4, 4], pb: [5, 4, 4] }}>
        <BerberThree
          sx={{ height: [75, 100, 140], width: "auto" }}
        ></BerberThree>
      </Flex>
      {/* <div
        sx={{
          bg: "tertiary",
          display: "flex",
          justifyContent: "center",
          px: [3, 3, 0],
        }}
      >
        <div
          sx={{
            maxWidth: "container",
            pt: [null, null, 4],
          }}
        >
          <Box>
            <h3
              sx={{
                variant: "styles.h3",
                pt: "0.25rem",
                pb: "1rem",
              }}
            >
              Surf packages
            </h3>
          </Box>

          <Grid gap={4} columns={[1, 1, 2]}>
            <Box
              bg="white"
              sx={{
                cursor: "pointer",
                borderRadius: 4,
                transform: "translate(0, 0px)",
                transition: "all .3s ease",
                ":hover": {
                  transform: "translate(0, -8px)",
                  transition: "all .3 ease",
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
                fluid={data.surfStay.childImageSharp.fluid}
              />
              <Box sx={{ pt: "1rem", px: "2rem" }}>
                <Container>
                  <h3
                    sx={{
                      variant: "styles.h3",
                      pb: 3,
                      fontWeight: 500,
                    }}
                  >
                    Surf and stay
                  </h3>
                </Container>
                <Container>
                  <p
                    sx={{
                      variant: "styles.p",
                      fontSize: [1, 1, 2],
                      pb: 1,
                    }}
                  >
                    Starting from{" "}
                    <span style={{ fontWeight: "900" }}>370 EUR</span> per/week
                  </p>
                </Container>
                <Container>
                  <p
                    sx={{
                      variant: "styles.p",
                      fontSize: [1, 1, 2],
                      pb: 1,
                    }}
                  >
                    Are you a surfer with some experience and want to surf the
                    sweetest waves of Southern Morocco? Our experienced guides
                    will take you to their favorite places to surf.
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
                      fontSize: [1, 1, 2],
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
                      fontSize: [1, 1, 2],
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
                      fontSize: [1, 1, 2],
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
                      fontSize: [1, 1, 2],
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
                      fontSize: [1, 1, 2],
                      mb: 0,
                    }}
                  >
                    Blazing 200/20 Mbps internet
                  </p>
                </Flex>
                <Flex sx={{ pt: "1rem", pb: "1rem" }}>
                  <Button>Book now</Button>
                </Flex>
              </Box>
            </Box>

            <Box
              bg="white"
              sx={{
                cursor: "pointer",
                borderRadius: 4,
                transform: "translate(0, 0px)",
                transition: "all .3s ease",
                ":hover": {
                  transform: "translate(0, -8px)",
                  transition: "all .3s ease",
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
                fluid={data.surfCoaching.childImageSharp.fluid}
              />
              <Box sx={{ pt: "1rem", px: "2rem" }}>
                <Container>
                  <h3
                    sx={{
                      variant: "styles.h3",
                      pb: 3,
                      fontWeight: 500,
                    }}
                  >
                    Surf coaching
                  </h3>
                </Container>
                <Container>
                  <p
                    sx={{
                      variant: "styles.p",
                      fontSize: [1, 1, 2],
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
                      fontSize: [1, 1, 2],
                      pb: 1,
                    }}
                  >
                    Are you new to surfing and would like to learn to surf while
                    having a comfortable place to stay? Our experienced surf
                    instructors will help unleash your inner surfer.
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
                      fontSize: [1, 1, 2],
                      mb: 0,
                    }}
                  >
                    Daily surf lessons at different surf spots
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
                      fontSize: [1, 1, 2],
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
                      fontSize: [1, 1, 2],
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
                      fontSize: [1, 1, 2],
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
                      fontSize: [1, 1, 2],
                      mb: 0,
                    }}
                  >
                    Blazing 200/20 Mbps internet
                  </p>
                </Flex>
                <Flex sx={{ pt: "1rem", pb: "1rem" }}>
                  <Button>Book now</Button>
                </Flex>
              </Box>
            </Box>
          </Grid>
          <Flex sx={{ justifyContent: "center", pt: [5, 5, 6], pb: 5 }}>
            <BerberThree
              sx={{ height: [75, 100, 140], width: "auto" }}
            ></BerberThree>
          </Flex>
        </div>
      </div> */}

      {/* Eat */}
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
            <ImageCarousel images={stayImages} />
          </div>
        )}
        <Grid columns={[1, 1, "1.5fr 1fr"]}>
          {!isMobile && (
            <Parallax y={[20, -20]} tagOuter="figure">
              <div sx={{ height: ["300px", "400px", "650px"] }}>
                <SlideShow data={data.surfing} images={stayImages} />
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

      <div
        sx={{
          variant: "layout.primaryContainer",
          background: "white",
          pb: 0,
          overflow: "hidden",
          position: "relative ",
        }}
      >
        <Parallax sx={{ position: "absolute" }} y={[100, -100]}>
          <StarOne
            sx={{
              size: [20, 20],
              top: [10, 100],
              left: [10, 100],
              position: "relative",
            }}
          ></StarOne>
        </Parallax>
        <Parallax sx={{ position: "absolute" }} y={[100, -10]}>
          <StarTwo
            sx={{
              size: [20, 20],
              top: [10, 100],
              left: [10, 100],
              position: "relative",
            }}
          ></StarTwo>
        </Parallax>

        <Container
          sx={{ maxWidth: "largeContainer", variant: "layout.gutters" }}
          justify="center"
        >
          <h2
            sx={{
              variant: "styles.h2",
              textAlign: "center",
              zIndex: 1,
              position: "relative",
            }}
          >
            What our guests say
          </h2>
        </Container>
        <Container
          sx={{
            maxWidth: "smallContainer",
            pb: 6,
            variant: "layout.gutters",
            zIndex: 1,

            position: "relative",
          }}
          justify="center"
        >
          <p
            sx={{
              variant: "styles.p",
              py: 3,
              textAlign: "center",
              marginBottom: 0,
            }}
          >
            <span sx={{ fontWeight: "900", fontSize: "26px", color: "blue" }}>
              "
            </span>
            My stay at Singlefin was amazing. The views from the rooftop terrace
            are amazing. Incredible spot to watch the surf, watch the beautiful
            sunsets, read a book, have a coffee, enjoy a meal and just hang out.
            <span sx={{ fontWeight: "900", fontSize: "26px", color: "blue" }}>
              "
            </span>
          </p>
          <p
            sx={{
              variant: "styles.p",
              fontSize: "14px",
              fontWeight: 900,
              textAlign: "center",
            }}
          >
            James - Australia
          </p>
        </Container>
        {/* <Container
          sx={{
            maxWidth: "largeContainer",

            pb: [4, 5, 6],
            zIndex: 1,

            position: "relative",
          }}
          justify="center"
        >
          <h2 sx={{ variant: "styles.h2", pb: 4, textAlign: "center" }}>
            Find us on the gram
          </h2>
          <Instagram
            userId={22225142971}
            thumbnailWidth={640}
            photoCount={12}
          />
        </Container> */}
      </div>
    </Layout>
  </div>
)

const mapSizesToProps = ({ width }) => ({
  isMobile: width < 780,
})

export default IndexPage
