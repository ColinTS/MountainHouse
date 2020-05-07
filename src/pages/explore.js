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
    category: "taghazout skatepark",
    header: "Skatepark",
    body: "This is some text about surf 1",
  },
]

const Content = ({ content, data }) => {
  const contentData = exploreData.find(object => object.name === content)
  console.log("content", contentData)
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
        <p
          sx={{
            variant: "styles.p",
            fontSize: [1, 1, 2],
            fontWeight: "heading",
            letterSpacing: 1.6,

            color: "blue",
          }}
        >
          {contentData.category.toUpperCase()}
        </p>
        <h2 sx={{ variant: "styles.h3" }}>{contentData.header}</h2>
        <p sx={{ variant: "styles.p", fontSize: [1, 1, 2] }}>
          {contentData.body}
        </p>
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

  const SkateIcon = ({ width, fill }) => (
    <svg
      width={width}
      height={width}
      viewBox="0 0 513 513"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M477.905 35.095C434.351 -8.45997 365.379 -11.471 318.3 26.045C300.711 9.01603 272.554 9.17703 255.179 26.552L222.597 59.134C205.404 76.326 205.066 104.073 221.558 121.695L122.693 220.559C105.071 204.068 77.324 204.406 60.132 221.598L27.55 254.18C10.174 271.555 10.013 299.711 27.043 317.3C-10.473 364.379 -7.46199 433.348 36.093 476.903C79.619 520.431 148.577 523.502 195.698 485.953C213.328 503.022 241.469 502.795 258.819 485.446L291.401 452.864C308.512 435.755 308.932 408.188 292.679 390.555L391.421 291.551C409.089 307.969 436.736 307.531 453.866 290.402L486.448 257.82C503.824 240.445 503.985 212.289 486.955 194.7C524.471 147.619 521.46 78.65 477.905 35.095V35.095ZM456.687 56.313C488.579 88.204 491.486 138.264 465.423 173.477C447.762 159.108 421.658 160.144 405.215 176.587L399.533 182.269L375.74 158.476L387.636 146.58C393.496 140.721 393.496 131.221 387.636 125.362C381.777 119.503 372.277 119.503 366.418 125.362L354.522 137.258L330.729 113.465L336.411 107.783C352.854 91.341 353.89 65.237 339.521 47.576C374.736 21.515 424.795 24.423 456.687 56.313V56.313ZM271.399 369.396C253.736 354.13 226.934 354.867 210.169 371.631L204.487 377.313L180.694 353.52L192.59 341.624C198.45 335.765 198.45 326.265 192.59 320.406C186.731 314.547 177.231 314.547 171.372 320.406L159.476 332.302L135.683 308.509L141.365 302.827C158.048 286.145 158.86 259.525 143.826 241.861L242.863 142.825C251.236 149.951 261.616 153.526 272.003 153.526C292.541 153.526 302.996 141.198 309.512 134.682L333.305 158.475L321.409 170.371C315.549 176.23 315.549 185.73 321.409 191.589C327.269 197.449 336.768 197.448 342.627 191.589L354.523 179.693L378.316 203.486L372.634 209.168C355.913 225.888 355.136 252.591 370.277 270.255L271.399 369.396ZM243.816 80.352L276.398 47.77C282.249 41.921 291.765 41.921 297.616 47.77L315.194 65.348C321.044 71.198 321.044 80.716 315.194 86.566L282.612 119.148C276.761 124.997 267.245 124.997 261.394 119.148L243.816 101.57C237.966 95.719 237.966 86.202 243.816 80.352V80.352ZM48.77 275.396L81.352 242.814C87.203 236.965 96.719 236.965 102.57 242.814L120.148 260.392C125.998 266.242 125.998 275.76 120.148 281.61L87.566 314.192C81.715 320.041 72.199 320.041 66.348 314.192L48.77 296.614C42.92 290.764 42.92 281.246 48.77 275.396V275.396ZM57.313 455.683C25.421 423.792 22.514 373.732 48.577 338.519C66.248 352.896 92.349 351.845 108.785 335.409L114.467 329.727L138.26 353.52L126.364 365.416C120.504 371.275 120.504 380.775 126.364 386.634C132.224 392.494 141.723 392.493 147.582 386.634L159.478 374.738L183.271 398.531L177.589 404.213C161.146 420.655 160.11 446.759 174.479 464.42C139.264 490.481 89.205 487.574 57.313 455.683V455.683ZM270.184 431.645L237.602 464.227C231.751 470.076 222.235 470.076 216.384 464.227L198.806 446.649C192.956 440.799 192.956 431.281 198.806 425.431L231.388 392.849C237.239 387 246.755 387 252.606 392.849L270.184 410.427C276.034 416.277 276.034 425.795 270.184 431.645ZM465.23 236.6L432.648 269.182C426.797 275.031 417.281 275.031 411.43 269.182L393.852 251.604C388.002 245.754 388.002 236.236 393.852 230.386L426.434 197.804C432.285 191.955 441.801 191.955 447.652 197.804L465.23 215.382C471.08 221.232 471.08 230.75 465.23 236.6V236.6Z"
        fill={fill}
      />
    </svg>
  )

  const Marker = ({ name, category, newLat, newLong }) => {
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
            {
              {
                surf: (
                  <SurfIcon
                    width={"24px"}
                    fill={name === content ? "white" : "#428DA4"}
                  />
                ),
                skate: (
                  <SkateIcon
                    width={"24px"}
                    fill={name === content ? "white" : "#428DA4"}
                  />
                ),
              }[category]
            }
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
                category={"surf"}
                newLat={30.544757}
                newLong={-9.711671}
              />
              <Marker
                lat={30.542439}
                lng={-9.7038}
                name={"panoramaSurf"}
                category={"surf"}
                newLat={30.542439}
                newLong={-9.7038}
              />
              <Marker
                lat={30.548887}
                lng={-9.712487}
                name={"skatepark"}
                category={"skate"}
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
