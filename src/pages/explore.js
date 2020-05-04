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
// import SurfIcon from "../images/explore/SurfIcon.svg"

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
    hashpointSurf: file(relativePath: { eq: "explore/panoramaSurf.jpg" }) {
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

  const SurfIcon = ({ width, fill }) => (
    <svg
      width={width}
      height={width}
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M507.351 14.772L505.039 6.962L497.229 4.649C495.779 4.219 461.07 -5.755 406.525 4.903C375.091 11.045 343.219 22.802 311.796 39.847C272.922 60.934 234.6 90.238 197.893 126.944C118.706 206.131 70.216 284.866 43.483 336.972C14.322 393.81 4.061 431.664 3.638 433.247L0 446.883L48.84 463.159L65.116 512L78.753 508.362C80.336 507.939 118.191 497.678 175.028 468.517C227.134 441.783 305.867 393.294 385.055 314.106C421.761 277.4 451.065 239.078 472.153 200.204C489.199 168.78 500.956 136.909 507.096 105.475C517.755 50.932 507.782 16.223 507.351 14.772ZM195.664 423C183.622 430.019 172.41 436.12 162.266 441.344C127.416 459.289 99.815 469.838 84.448 475.109L72.56 439.44L36.891 427.553C42.166 412.183 52.714 384.581 70.657 349.736C75.881 339.593 81.982 328.38 89 316.338H195.664V423ZM225.667 404.591V286.334H107.409C117.094 271.308 128.037 255.419 140.374 238.95V239.01H272.99V371.625H273.05C256.581 383.963 240.692 394.906 225.667 404.591ZM477.242 101.777C471.482 130.015 460.645 158.779 445.033 187.272C425.381 223.133 398.064 258.67 363.84 292.893C343.352 313.381 322.91 331.715 302.992 348.098V209.007H163.902C180.286 189.089 198.619 168.647 219.107 148.159C253.33 113.936 288.867 86.619 324.728 66.967C353.22 51.354 381.984 40.516 410.222 34.758C430.521 30.618 447.651 29.734 460.689 30.094L407.558 83.225L428.773 104.44L481.904 51.309C482.266 64.349 481.382 81.479 477.242 101.777Z"
        fill={fill}
      />
    </svg>
  )

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
            height: 50,
            width: 50,
            borderStyle: "solid",
            borderColor: "blue",
            boxShadow: "0 0 10px 0px rgba(0, 0, 0, .125)",
            borderRadius: "100%",
            cursor: "pointer",
            position: "relative",

            // "&::after": {
            //   content: `''`,
            //   position: "absolute",
            //   transform: "translateX(-50%) ",
            //   top: "96%",
            //   left: "50%",
            //   width: 0,
            //   height: 0,
            //   borderLeft: "10px solid transparent",
            //   borderRight: "10px solid transparent",
            //   borderTop: "10px solid white",
            //   borderBottomRightRadius: "10px",
            // },
            // "&::before": {
            //   content: `''`,
            //   position: "absolute",
            //   transform: "translateX(-50%) ",
            //   top: "100%",
            //   left: "50%",
            //   width: 0,
            //   height: 0,
            //   borderLeft: "14px solid transparent",
            //   borderRight: "14px solid transparent",
            //   borderTop: "14px solid #428DA4",
            // },
          }}
          onClick={() => createContent(name, newLat, newLong)}
        >
          <div
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <SurfIcon width={"24px"} fill={"blue"} />
          </div>
        </motion.div>
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
      <SurfIcon width={"32px"} />
    </Layout>
  )
}

export default Explore
