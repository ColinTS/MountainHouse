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

const Content = ({ content }) => {
  const contentData = exploreData.find(object => object.name === content)
  console.log("content", contentData)
  return (
    <div>
      <h2 sx={{ variant: "styles.h2" }}>{contentData.header}</h2>
    </div>
  )
}

const Explore = ({ data }) => {
  const [content, setContent] = useState("surf1")

  const createContent = content => {
    setContent(content)
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
        <div sx={{ position: "absolute", zIndex: 1000, top: 200, left: 200 }}>
          {" "}
          <Content content={content} />
        </div>
        <div sx={{ zIndex: 1, height: "100vh" }}>
          {isClient && (
            <GoogleMapReact
              bootstrapURLKeys={{
                key: process.env.GATSBY_GOOGLE_API_KEY,
              }}
              defaultCenter={[30.544194, -9.708767]}
              defaultZoom={17}
              options={{ gestureHandling: "greedy", scrollwheel: false }}
            >
              <div
                lat={30.544194}
                lng={-9.708767}
                onClick={() => createContent("surf1")}
                sx={{
                  height: "30px",
                  width: "30px",
                  bg: "black",
                  position: "absolute",
                  transform: "translate(-50%, -50%)",
                }}
              />
              <div
                lat={30.542194}
                lng={-9.705767}
                onClick={() => createContent("surf2")}
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
      </div>
    </Layout>
  )
}

export default Explore
