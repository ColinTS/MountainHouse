/** @jsx jsx */
import { graphql } from "gatsby"
import { jsx, Box, Container, Grid, Flex, AspectRatio, Button } from "theme-ui"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SlideShow from "../components/slideshow"
// import Logo from "../images/logo2.svg"
import Check from "../images/check.svg"
import BerberOne from "../images/berberOne.svg"
import BerberTwo from "../images/berberTwo.svg"
import BerberThree from "../images/berberThree.svg"
import BackgroundImage from "gatsby-background-image"
import { Link } from "gatsby"
import BoardDivider from "../images/explore/board.svg"
import SEO from "../components/seo"
import Dunes from "../images/dunes.svg"

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
  query {
    surfStay: file(relativePath: { eq: "surfStay.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 4000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    surfCoaching: file(relativePath: { eq: "surfCoaching.jpg" }) {
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

      {/* <div
        css={{
          position: "absolute",
          top: "40%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Logo
          sx={{
            width: ["250px", "400px", "500px"],
            height: "auto",
          }}
        />
      </div> */}
    </div>

    <Layout>
      <SEO title="Singlefin - Surf Resort in Taghazout, Morocco" />
      <div css={{}}>
        <div
          sx={{
            background: "linear-gradient(to bottom, #FFCF8A 0%, #f7f0e1 80%)",
            variant: "layout.primaryContainer",
            px: [3, 3, 3],
          }}
        >
          <Container sx={{ maxWidth: "smallContainer" }}>
            <Flex
              sx={{
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <h1 sx={{ variant: "styles.h1", textAlign: "center", pb: 2 }}>
                Singlefin is a holiday retreat in Taghazout, Morocco{" "}
              </h1>
              <BoardDivider sx={{ width: "75px" }} />
              <p
                sx={{
                  variant: "styles.p",
                  textAlign: "center",
                  pt: 4,
                  fontSize: [2, 2, 3],
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
          <Container sx={{ pt: 6, px: [3, 3, 3] }} justify="center">
            <h3
              sx={{
                variant: "styles.h3",
                pb: 3,
                textAlign: "center",
              }}
            >
              Our Locations
            </h3>
            <Grid sx={{ pt: 4 }} gap={4} columns={[1, 1, 3]}>
              <Link to="/mountain-house">
                <div
                  sx={{
                    position: "relative",
                    borderRadius: 4,
                    height: "500px",
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
                  <Img
                    sx={{
                      cursor: "pointer",
                      opacity: "1 !important",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                      borderRadius: 4,
                      height: "500px",
                    }}
                    fluid={data.surfStay.childImageSharp.fluid}
                  />
                  <h2
                    sx={{
                      variant: "styles.h2",

                      textAlign: "center",
                      color: "white",
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    The Mountainhouse
                  </h2>
                </div>
              </Link>
              <div
                sx={{
                  position: "relative",
                  borderRadius: 4,
                  height: "500px",
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
                <Img
                  sx={{
                    cursor: "pointer",
                    opacity: "1 !important",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    borderRadius: 4,
                    height: "500px",
                  }}
                  fluid={data.surfStay.childImageSharp.fluid}
                />
                <h2
                  sx={{
                    variant: "styles.h2",

                    textAlign: "center",
                    color: "white",
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  The Beachhouse
                </h2>
              </div>

              <div
                sx={{
                  position: "relative",
                  borderRadius: 4,
                  height: "500px",
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
                <Img
                  sx={{
                    cursor: "pointer",
                    opacity: "1 !important",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    borderRadius: 4,
                    height: "500px",
                  }}
                  fluid={data.surfStay.childImageSharp.fluid}
                />
                <h2
                  sx={{
                    variant: "styles.h2",

                    textAlign: "center",
                    color: "white",
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  The Villas
                </h2>
              </div>
            </Grid>
          </Container>
          <Flex sx={{ justifyContent: "center", pt: [5, 5, 6] }}>
            <BerberOne
              sx={{ height: [75, 100, 140], width: "auto" }}
            ></BerberOne>
          </Flex>
        </div>
      </div>
      {/* Stay */}
      <div
        sx={{
          paddingTop: "4rem",
          paddingBottom: "4rem",
          bg: "tertiary",
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
            <SlideShow data={data.surfing} images={stayImages} />
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
      <div sx={{ bg: "tertiary", pb: 2, px: [3, 3, 0] }}>
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
          <Flex sx={{ justifyContent: "center", pt: [5, 5, 5], pb: 2 }}>
            <BerberTwo
              sx={{ height: [75, 100, 140], width: "auto" }}
            ></BerberTwo>
          </Flex>
        </Container>
      </div>
      {/* surf */}
      <div
        sx={{
          pt: [2, 2, 6],
          paddingBottom: "4rem",
          background: "#f7f0e1",
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
      </div>

      {/* Eat */}
      <div
        sx={{
          variant: "layout.primaryContainer",
          background: "linear-gradient(to bottom, #f7f0e1 0%, white)",
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
            <SlideShow data={data.surfing} images={eatImages} />
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
              <h2 sx={{ variant: "styles.h2" }}>
                Eat local food made with love
              </h2>
              <p sx={{ variant: "styles.p", py: 3 }}>
                Attached to Singlefin is our beachside restaurant: Seafood
                Kitchen. Our local chefs take pride in serving our guests a
                healthy fusion of Moroccan and European cuisine.
              </p>
              <p sx={{ variant: "styles.p", pb: 3 }}>
                Every morning we will serve you a delicious Moroccan breakfast
                for you to enjoy by the sea or on the roof terrace. Throughout
                the day and evening we are preparing tasty vegetarian,
                non-vegetarian meals, and of course our specialty: seafood. We
                also have an extensive menu of healthy smoothies, desserts,
                teas, and coffee.
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
          position: "relative",
        }}
      >
        <Container
          sx={{ maxWidth: "largeContainer", px: [3, 3, 3] }}
          justify="center"
        >
          <h2 sx={{ variant: "styles.h2", textAlign: "center" }}>
            What our guests say
          </h2>
        </Container>
        <Container
          sx={{ maxWidth: "smallContainer", pb: 6, px: [3, 3, 3] }}
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
        <Container
          sx={{ maxWidth: "largeContainer", px: [3, 3, 3], pb: 6 }}
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
        </Container>
      </div>
    </Layout>
  </div>
)

export default IndexPage
