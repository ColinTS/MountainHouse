/** @jsx jsx */

import { jsx, Container, Grid, Button, Flex, AspectRatio } from "theme-ui"
import GoogleMapReact from "google-map-react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import Img from "gatsby-image"
import React, { useState } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundImage from "gatsby-background-image"
import Marker from "../images/location/Marker.svg"

const isClient = typeof window !== "undefined"

export const data = graphql`
  query {
    sunsetSurf: file(relativePath: { eq: "explore/sunsetSurf.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 3000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
const exploreData = [
  {
    name: "surf1",
    header: "Surf 1",
    body: "This is some text about surf 1",
  },
  {
    name: "surf2",
    header: "This be Surf 2",
    body: "This is some text about surf 1",
  },
]

const exploreContent = content => {
  const contentData = exploreData.find(object => object.name === content)
  return <div></div>
}

const Explore = ({ data }) => {
  const [content, setContent] = useState("surf1")
  return (
    <Layout>
      <SEO title="Explore things to do around Taghazout" />
      <div
        sx={{
          position: "relative",
          background:
            "linear-gradient(to right,rgba(0,0,0,.5) 0%,transparent 100%)",
        }}
      >
        <BackgroundImage
          css={{
            height: "70vh",
            opacity: "1 !important",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "50% 25%",
          }}
          fluid={data.sunsetSurf.childImageSharp.fluid}
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
            Explore Taghazout
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
            From surfing to souks, discover all the inspiring things to do near
            Singlefin
          </p>
        </div>
      </div>
      <div sx={{ py: 6 }}>
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

          <div style={{ height: "700px", width: "100%" }}>
            {isClient && (
              <GoogleMapReact
                bootstrapURLKeys={{
                  key: process.env.GATSBY_GOOGLE_API_KEY,
                }}
                defaultCenter={[30.544194, -9.708767]}
                defaultZoom={17}
              >
                <div
                  lat={30.544194}
                  lng={-9.708767}
                  onClick={() => setContent("surf1")}
                  sx={{
                    height: "30px",
                    width: "30px",
                    bg: "blue",
                    position: "absolute",
                    transform: "translate(-50%, -50%)",
                  }}
                />
                <div
                  lat={30.542194}
                  lng={-9.705767}
                  onClick={() => setContent("surf2")}
                  sx={{
                    height: "30px",
                    width: "30px",
                    bg: "black",
                    position: "absolute",
                    transform: "translate(-50%, -50%)",
                  }}
                />
              </GoogleMapReact>
            )}
          </div>
        </Grid>
      </div>
    </Layout>
  )
}

export default Explore
