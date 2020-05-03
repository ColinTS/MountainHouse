/** @jsx jsx */

import { jsx, Container, Grid, Button, Flex, AspectRatio } from "theme-ui"
import GoogleMapReact from "google-map-react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import Img from "gatsby-image"
import React, { useState } from "react"
import { motion } from "framer-motion"
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
    panoramaSurf: file(relativePath: { eq: "explore/panoramaSurf.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 3000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    skatepark: file(relativePath: { eq: "explore/skatepark.jpg" }) {
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
    name: "hashpointSurf",
    category: "surfing",
    header: "Hashpoint",
    body: "Hashpoint is the closest surf spot to Singlefin.",
  },
  {
    name: "panoramaSurf",
    category: "surfing",
    header: "Panorama",
    body: "Panorama is the closest surf spot to Singlefin.",
  },
  {
    name: "skatepark",
    category: "skatepark",
    header: "Skatepark",
    body: "This is some text about surf 1",
  },
]

const Content = ({ content, data }) => {
  const contentData = exploreData.find(object => object.name === content)
  console.log("content", data[content])
  return (
    <div>
      <Img
        style={{
          borderRadius: "4px 4px 0px 0px",
          maxHeight: "240px",
          width: "auto",
        }}
        fluid={data[content].childImageSharp.fluid}
      />
      <div sx={{ p: 4 }}>
        <h2 sx={{ variant: "styles.h2" }}>{contentData.header}</h2>
      </div>
    </div>
  )
}

const Explore = ({ data }) => {
  const [content, setContent] = useState("panoramaSurf")
  const [lat, setLat] = useState(30.544194)
  const [long, setLong] = useState(-9.708767)

  const createContent = (content, newLat, newLong) => {
    setContent(content)
    setLat(newLat)
    setLong(newLong)
  }

  const Marker = ({ name, newLat, newLong }) => {
    return (
      <div sx={{ position: "absolute", transform: "translate(-50%, -50%)" }}>
        <motion.div
          whileTap={{
            scale: 0.8,
          }}
          whileHover={{ scale: 1.2 }}
          sx={{
            bg: name === content ? "blue" : "white",
            width: 35,
            height: 35,
            borderStyle: "solid",
            borderColor: "blue",
            boxShadow: "0 0 10px 0px rgba(0, 0, 0, .125)",
            borderRadius: "100%",
            cursor: "pointer",
          }}
          onClick={() => createContent(name, newLat, newLong)}
        ></motion.div>
      </div>
    )
  }

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
      <div sx={{ height: "100vh", position: "relative" }}>
        <div sx={{ position: "absolute", zIndex: 1000, top: 100, left: 150 }}>
          {" "}
          <div
            sx={{
              height: "600px",
              width: "500px",
              bg: "white",
              borderRadius: 4,
              boxShadow: "0 0 10px 0px rgba(0, 0, 0, .125)",
            }}
          >
            <Content content={content} data={data} />
          </div>
        </div>
        <div sx={{ zIndex: 1, height: "100vh" }}>
          {isClient && (
            <GoogleMapReact
              bootstrapURLKeys={{
                key: process.env.GATSBY_GOOGLE_API_KEY,
              }}
              defaultCenter={[30.544194, -9.708767]}
              center={[lat, long]}
              defaultZoom={13}
              options={{
                gestureHandling: "cooperative",
                fullscreenControl: false,
                zoomControl: false,
              }}
            >
              <Marker
                lat={30.544757}
                lng={-9.711671}
                name={"hashpointSurf"}
                newLat={30.544757}
                newLong={-9.711671}
              />
              <Marker
                lat={30.542439}
                lng={-9.7038}
                name={"panoramaSurf"}
                newLat={30.542439}
                newLong={-9.7038}
              />
              <Marker
                lat={30.548887}
                lng={-9.712487}
                name={"skatepark"}
                newLat={30.548887}
                newLong={-9.712487}
              />
            </GoogleMapReact>
          )}
        </div>
      </div>
    </Layout>
  )
}

export default Explore
