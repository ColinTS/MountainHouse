/** @jsx jsx */
import { graphql } from "gatsby"
import { jsx, Box, Container, Grid, Flex } from "theme-ui"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SlideShow from "../components/slideshow"
import Logo from "../images/logo2.svg"
import LogoDark from "../images/logoDark.svg"
import Check from "../images/check.svg"
import BerberOne from "../images/berberOne.svg"
import BerberTwo from "../images/berberTwo.svg"
import BerberThree from "../images/berberThree.svg"
import ButtonLink from "../components/button.js"

import SEO from "../components/seo"
import Dunes from "../images/dunes.svg"

import video from "../images/Tag.mp4"

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
    surfing: allContentfulSlideshowImages(filter: { tag: { eq: "surf" } }) {
      edges {
        node {
          images {
            fluid(maxWidth: 4000) {
              src
              srcSet
            }
          }
        }
      }
    }
    staying: allContentfulSlideshowImages(filter: { tag: { eq: "stay" } }) {
      edges {
        node {
          images {
            fluid(maxWidth: 4000) {
              src
            }
          }
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
              ...GatsbyImageSharpFluid_noBase64
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
              ...GatsbyImageSharpFluid_noBase64
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
              ...GatsbyImageSharpFluid_noBase64
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
        {/* <BigLogo
          style={{
            width: "500px",
            height: "500px",
          }}
        /> */}
        <Logo
          style={{
            width: "500px",
            height: "auto",
          }}
        />
      </div>
    </div>

    <Layout>
      <SEO title="Home" />
      <div css={{ marginTop: "-4rem" }}>
        <div sx={{ bg: "secondary", pt: 6 }}>
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
          <Flex sx={{ justifyContent: "center", pt: 5 }}>
            <BerberOne sx={{ height: 150, width: "auto" }}></BerberOne>
          </Flex>
        </div>
      </div>

      {/* surf */}
      <div
        sx={{
          variant: "layout.primaryContainer",
          background: "linear-gradient(to bottom, #FFCF8A 0%, #f7f0e1 80%)",
          boxSizing: "border-box",
        }}
      >
        <div css={{ display: "flex" }}>
          <div
            css={{
              flexBasis: "40%",
              maxWidth: "40%",
              paddingRight: "3rem",
              height: "640px",
            }}
          >
            <div css={{ width: "500px", marginLeft: "auto" }}>
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

          <div
            css={{
              flexBasis: "60%",
              maxWidth: "60%",
            }}
          >
            {" "}
            <SlideShow
              data={data.surf}
              images={surfImages}
              data2={data.surfing}
            />
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
                      fontSize: 16,
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
                      fontSize: 16,
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
                      fontSize: 16,
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
          <Flex sx={{ justifyContent: "center", pt: 6, pb: 2 }}>
            <BerberThree sx={{ height: 150, width: "auto" }}></BerberThree>
          </Flex>
        </div>
      </div>

      {/* Stay */}

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
          }}
        >
          <div
            css={{
              flexBasis: "40%",
              maxWidth: "40%",
              paddingLeft: "3rem",
              height: "640px",
            }}
          >
            <div
              css={{
                width: "500px",
                position: "relative",
                marginRight: "auto",
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

          <div css={{ flexBasis: "60%", maxWidth: "60%" }}>
            {" "}
            <SlideShow
              data={data.stay}
              images={stayImages}
              data2={data.staying}
            />
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
          <Flex sx={{ justifyContent: "center", pt: 5, pb: 2 }}>
            <BerberTwo sx={{ width: 130, height: "auto" }}></BerberTwo>
          </Flex>
        </Container>
      </div>
      {/* Eat */}
      <div
        sx={{
          variant: "layout.primaryContainer",
          background: "linear-gradient(to bottom, #f7f0e1 0%, white)",
        }}
      >
        <div
          css={{
            display: "flex",
          }}
        >
          <div
            css={{
              flexBasis: "40%",
              maxWidth: "40%",
              paddingRight: "3rem",
              height: "640px",
            }}
          >
            <div
              css={{
                width: "500px",
                position: "relative",
                marginLeft: "auto",
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

          <div css={{ flexBasis: "60%", maxWidth: "60%" }}>
            {" "}
            <SlideShow
              data={data.eat}
              images={stayImages}
              data2={data.surfing}
            />
          </div>
        </div>
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
        <Container sx={{ maxWidth: "largeContainer" }} justify="center">
          <h2 sx={{ variant: "styles.h2", textAlign: "center" }}>
            What our guests say
          </h2>
        </Container>
        <Container sx={{ maxWidth: "smallContainer", pb: 6 }} justify="center">
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
        <div
          css={{
            width: "100vw",
            margin: 0,
            padding: 0,

            marginBottom: "-2%",
          }}
        >
          <Dunes style={{ width: "100%", height: "auto" }} />
        </div>
      </div>
      <div sx={{ bg: "secondary" }}>
        <Container sx={{ maxWidth: "largeContainer", pb: 5 }} justify="center">
          <Grid gap={4} columns={[1, 1, 3]}>
            <div>
              <LogoDark
                style={{
                  width: "240px",
                  height: "auto",
                }}
              />
              <p sx={{ variant: "styles.p", pt: 2 }}>
                Singlefin is a holiday retreat in Taghazout, Morocco
              </p>
              <p sx={{ variant: "styles.p", fontSize: 14, pt: 4 }}>
                © 2020 Singlefin
              </p>
            </div>

            <div></div>
            <div></div>
          </Grid>
        </Container>
      </div>
    </Layout>
  </div>
)

export default IndexPage
