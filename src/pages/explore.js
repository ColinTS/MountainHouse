/** @jsx jsx */

import { jsx, Container, Grid, Button, Flex, AspectRatio } from "theme-ui"
import withSizes from "react-sizes"
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
import BoardDivider from "../images/explore/board.svg"

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
    hashpointSurf: file(relativePath: { eq: "explore/hashpointSurf.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 3000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    anchorSurf: file(relativePath: { eq: "explore/anchorPoint.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 3000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    mysteriesSurf: file(relativePath: { eq: "explore/mysteriesSurf.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 3000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    laSourceSurf: file(relativePath: { eq: "explore/laSource.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 3000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    killerSurf: file(relativePath: { eq: "explore/killerPoint.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 3000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    bananaSurf: file(relativePath: { eq: "explore/bananaSurf.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 3000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    boilersSurf: file(relativePath: { eq: "explore/panoramaSurf.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 3000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    devilsrockSurf: file(relativePath: { eq: "explore/devilsSurf.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 3000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    paradiseValley: file(relativePath: { eq: "explore/paradiseValley.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 3000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    surfTaghazout: file(relativePath: { eq: "explore/surfTaghazout.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 3000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    sandboard: file(relativePath: { eq: "explore/sandboard.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 3000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    souk: file(relativePath: { eq: "explore/souk.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 3000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    taghazout: file(relativePath: { eq: "location/taghazoutTown.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 3000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    taghazoutSurf: file(relativePath: { eq: "location/taghazoutSurf.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 3000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    taghazoutView: file(relativePath: { eq: "location/taghazoutView.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 3000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    taghazoutYoga: file(relativePath: { eq: "location/taghazoutYoga.jpg" }) {
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
    superHeader: "Beginner Surfing",
    header: "Hashpoint",
    body:
      "The local surfing spot, for everyone. Just a few steps out the door from Singlefin, into the water, and you will be riding the waves at Hashpoint. Popular for its laid back sunset surf sessions, Hashpoint sees waves from 0.5 to 2 meters and comes with good vibes and smiles.",
  },
  {
    name: "panoramaSurf",
    superHeader: "Beginner Surfing",
    header: "Panorama",
    body:
      "Panorama is the neighborhood surf spot. It's only a few minute walk to this big, open beach break and when the swell is strong it turns into a sweet point break with 0.5 - 2 meter waves. It's friendly to beginners just as much as it is to advanced surfers.",
  },
  {
    name: "anchorSurf",
    superHeader: "advanced surfing",
    header: "Anchor Point",
    body:
      "Chances are if you are coming to Morocco, you already know about this wave. Well known as the most famous wave in Morocco, Anchor Point is packed with long and fast barrels when it's working. They start working at 1 meter and can pick up to over 10 meters. Although it is for advanced surfers, don't be afraid to give it a go when the swell is small. It's only a 15 minute walk from Singlefin. In fact, you can check the surf in the morning from the roof terrace!",
  },
  {
    name: "mysteriesSurf",
    superHeader: "intermediate surfing",
    header: "Mysteries",
    body:
      "Mysteries is an exposed reef break for intermediate surfers. The reef at the bottom and a giant rock in the water forms these 1- 5 meter waves that break to the right. Mysteries is only a 15 minute walk from Singlefin.",
  },
  {
    name: "laSourceSurf",
    superHeader: "intermediate surfing",
    header: "La Source",
    body:
      "La source is a beautiful reef break with 1 - 3 meter waves, breaking both from the left and right. Depending on the swell you can sometimes see all levels of surfers out there. It's only a 25 minute walk from Singlefin.",
  },
  {
    name: "boilersSurf",
    superHeader: "surfing",
    header: "La Source",
    body: "La source is the closest surf spot to Singlefin.",
  },
  {
    name: "killerSurf",
    superHeader: "Advanced Surfing",
    header: "Killer Point",
    body:
      "Strong, fast waves makes this spot a challenging spot to surf and quite a wave to witness. But its not the powerful waves that gives it it's name, it gets its name from the Killer Whales that have been known to pass nearby this point! Killers is typically a right-hand break although it can sometimes break left. The surf ranges between 1 - 5 meters and if you're so inclined to take these on, it's about a 30 minute walk from the Singlefin Surfhouse.",
  },
  {
    name: "bananaSurf",
    superHeader: "beginner surfing",
    header: "Banana Point",
    body:
      "With all the bananas being grown by this beach you won't wonder how it got it's name. The sandy, rocky bottom forms an easy point break for beginners and a nice beach break as well. The waves here are easy to paddle on and can be anywhere from 0.5 - 2 meters.",
  },
  {
    name: "devilsrockSurf",
    superHeader: "beginner surfing",
    header: "Devil's Rock",
    body:
      "The sandy bottom and rock that the waves wedge off of produce easy left and right hand breaks. There are cafes nearby, local families hanging on the beach, making this the perfect place for beginners and children to learn how to surf.",
  },
  {
    name: "skatepark",
    superHeader: "Skate above the sea",
    header: "Skatepark",
    body:
      "Arguably one of the most iconic skateparks in the world. Sitting on top of the mountain, with an infnite view of the Moroccan sea below, the Taghazout skatepark is quite the place to be, even if you don't skate. Often you will see local kids and tourists skating this park together, enjoying the sun and good company. ",
  },
  {
    name: "paradiseValley",
    superHeader: "An Oasis in the mountains",
    header: "Paradise Valley",
    body:
      "Tucked up in the foothills of the Atlas mountains is an oasis with fresh natural pools of water, surrounded by palm trees and views of the mountains. Day trips are often made here and when the surf is slow (or not), Paradise Valley is the pefrect place to come and relax by the tranquil waters, espeecially to cool off on a hot day and even go cliff jumping.",
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
          height: "220px",

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
          {contentData.superHeader.toUpperCase()}
        </p>
        <h2 sx={{ variant: "styles.h3" }}>{contentData.header}</h2>
        <p sx={{ variant: "styles.p", fontSize: [1, 1, 2] }}>
          {contentData.body}
        </p>
      </div>
    </div>
  )
}

const Explore = ({ data, isMobile }) => {
  const [content, setContent] = useState("killerSurf")
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

  const ParadiseIcon = ({ width, fill }) => (
    <svg
      width={width}
      height={width}
      viewBox="0 0 472 472"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0)">
        <path
          d="M152.339 7.26997C117.928 -7.00203 84.2431 -0.111031 57.5341 26.62C53.3741 30.78 53.3741 37.543 57.5341 41.703L100.2 84.369C104.381 88.55 111.123 88.55 115.304 84.369L118.419 81.254V98.171C118.419 101.926 120.382 105.382 123.603 107.323L170.024 135.184C170.728 135.589 171.475 135.931 172.221 136.187C193.938 143.206 213.288 154.811 228.2 169.723C230.248 171.75 232.979 172.838 235.752 172.838C237.117 172.838 238.504 172.582 239.805 172.006C243.794 170.363 246.397 166.459 246.397 162.15C246.398 96.06 205.971 29.478 152.339 7.26997ZM179.987 116.262L139.752 92.134V55.505C139.752 51.196 137.149 47.292 133.16 45.649C129.171 43.985 124.605 44.902 121.533 47.974L107.752 61.755L80.6381 34.62C104.041 16.551 127.721 20.156 144.19 26.983C183.059 43.09 214.718 88.999 222.995 137.66C210.088 128.678 195.539 121.425 179.987 116.262Z"
          fill={fill}
        />
        <path
          d="M243.283 154.641C198.995 110.353 126.76 94.822 71.5501 117.649C33.5551 133.393 11.7531 165.18 11.7531 204.838C11.7531 207.995 13.1611 211.003 15.5931 213.03C17.5131 214.63 19.9451 215.505 22.4201 215.505C23.0601 215.505 23.7001 215.441 24.3191 215.313L82.9861 204.646C86.2931 204.049 89.1301 201.937 90.6231 198.929L97.5351 185.105L102.292 193.788C104.532 197.884 109.289 200.039 113.855 199.079L237.972 172.626C241.791 171.815 244.863 168.957 245.972 165.223C247.08 161.468 246.035 157.393 243.283 154.641ZM117.16 176.55L106.429 157.03C104.53 153.553 100.712 151.398 96.8721 151.505C92.9041 151.59 89.3201 153.852 87.5491 157.414L73.9381 184.635L34.1091 191.867C38.1411 167.12 53.9701 148.027 79.7201 137.36C93.9491 131.451 109.779 128.635 125.949 128.635C156.093 128.635 187.474 138.406 212.306 156.262L117.16 176.55Z"
          fill={fill}
        />
        <path
          d="M413.95 26.641C387.219 -0.111019 353.555 -7.00202 319.144 7.29198C265.533 29.5 225.085 96.081 225.085 162.172C225.085 166.481 227.688 170.385 231.677 172.028C233 172.583 234.386 172.839 235.752 172.839C238.525 172.839 241.256 171.751 243.261 169.724C258.194 154.812 277.544 143.207 299.24 136.188C300.029 135.932 300.755 135.612 301.459 135.185L347.902 107.324C351.123 105.383 353.086 101.927 353.086 98.172V81.254L356.201 84.39C360.361 88.55 367.124 88.55 371.284 84.39L413.951 41.723C418.11 37.564 418.11 30.801 413.95 26.641ZM363.752 61.756L349.971 47.953C346.92 44.902 342.355 44.006 338.344 45.649C334.355 47.292 331.752 51.196 331.752 55.505V92.134L291.517 116.262C275.944 121.425 261.416 128.678 248.509 137.659C256.786 88.976 288.424 43.067 327.293 26.982C334.845 23.867 343.89 21.414 353.746 21.414C365.415 21.414 378.173 24.849 390.866 34.641L363.752 61.756Z"
          fill={fill}
        />
        <path
          d="M399.955 117.628C344.702 94.801 272.531 110.332 228.222 154.62C225.47 157.393 224.425 161.447 225.534 165.201C226.643 168.934 229.694 171.772 233.534 172.604L357.651 199.057C362.216 200.017 366.952 197.862 369.214 193.766L373.971 185.126L380.883 198.95C382.376 201.958 385.214 204.07 388.52 204.667L447.187 215.334C447.806 215.462 448.446 215.505 449.086 215.505C451.561 215.505 453.993 214.63 455.913 213.009C458.345 210.982 459.753 207.974 459.753 204.817C459.753 165.158 437.95 133.372 399.955 117.628ZM397.566 184.636L383.955 157.393C382.163 153.852 378.579 151.59 374.611 151.505C370.366 151.356 366.952 153.553 365.054 157.03L354.323 176.55L259.176 156.262C297.384 128.849 351.037 120.465 391.784 137.361C417.512 148.006 433.363 167.1 437.395 191.868L397.566 184.636Z"
          fill={fill}
        />
        <path
          d="M289.064 460.049L267.731 172.049C267.283 166.182 262.163 161.66 256.296 162.214C250.429 162.662 246.013 167.782 246.461 173.649L266.941 450.193H204.584L225.064 173.649C225.512 167.761 221.096 162.662 215.229 162.214C209.106 161.638 204.242 166.182 203.794 172.049L182.461 460.049C182.226 462.993 183.25 465.916 185.277 468.092C187.282 470.268 190.12 471.505 193.085 471.505H278.418C281.383 471.505 284.221 470.268 286.247 468.092C288.254 465.916 289.278 463.014 289.064 460.049Z"
          fill={fill}
        />
        <path
          d="M267.752 386.172H203.752C197.864 386.172 193.085 390.951 193.085 396.839C193.085 402.727 197.864 407.506 203.752 407.506H267.752C273.64 407.506 278.419 402.727 278.419 396.839C278.419 390.95 273.64 386.172 267.752 386.172Z"
          fill={fill}
        />
        <path
          d="M257.086 322.172H214.419C208.531 322.172 203.752 326.951 203.752 332.839C203.752 338.727 208.531 343.506 214.419 343.506H257.086C262.974 343.506 267.753 338.727 267.753 332.839C267.752 326.95 262.974 322.172 257.086 322.172Z"
          fill={fill}
        />
        <path
          d="M257.086 258.172H214.419C208.531 258.172 203.752 262.951 203.752 268.839C203.752 274.727 208.531 279.506 214.419 279.506H257.086C262.974 279.506 267.753 274.727 267.753 268.839C267.753 262.951 262.974 258.172 257.086 258.172Z"
          fill={fill}
        />
        <path
          d="M257.086 194.172H214.419C208.531 194.172 203.752 198.951 203.752 204.839C203.752 210.727 208.531 215.506 214.419 215.506H257.086C262.974 215.506 267.753 210.727 267.753 204.839C267.753 198.951 262.974 194.172 257.086 194.172Z"
          fill={fill}
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="471.505" height="471.505" fill="white" />
        </clipPath>
      </defs>
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
            height: 40,
            width: 40,
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
                    width={"22px"}
                    fill={name === content ? "white" : "#428DA4"}
                  />
                ),
                skate: (
                  <SkateIcon
                    width={"22px"}
                    fill={name === content ? "white" : "#428DA4"}
                  />
                ),
                paradise: (
                  <ParadiseIcon
                    width={"22px"}
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
            backgroundPosition: "50% 50%",
          }}
          fluid={data.taghazout.childImageSharp.fluid}
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
        {!isMobile && (
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
        )}

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
                // gestureHandling: "cooperative",
                fullscreenControl: false,
                zoomControl: false,
                scrollwheel: false,
                // draggable: true,
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
                lat={30.54517}
                lng={-9.726857}
                name={"anchorSurf"}
                category={"surf"}
                newLat={30.54517}
                newLong={-9.726857}
              />
              <Marker
                lat={30.548198}
                lng={-9.729592}
                name={"mysteriesSurf"}
                category={"surf"}
                newLat={30.548198}
                newLong={-9.729592}
              />
              <Marker
                lat={30.550545}
                lng={-9.73369}
                name={"laSourceSurf"}
                category={"surf"}
                newLat={30.550545}
                newLong={-9.73369}
              />
              <Marker
                lat={30.551533}
                lng={-9.739244}
                name={"killerSurf"}
                category={"surf"}
                newLat={30.551533}
                newLong={-9.739244}
              />
              <Marker
                lat={30.495989}
                lng={-9.67711}
                name={"bananaSurf"}
                category={"surf"}
                newLat={30.495989}
                newLong={-9.67711}
              />
              <Marker
                lat={30.50677}
                lng={-9.688515}
                name={"devilsrockSurf"}
                category={"surf"}
                newLat={30.50677}
                newLong={-9.688515}
              />
              {/* <Marker
                lat={30.628845}
                lng={-9.886865}
                name={"boilersSurf"}
                category={"surf"}
                newLat={30.628845}
                newLong={-9.886865}
              /> */}
              <Marker
                lat={30.548887}
                lng={-9.712487}
                name={"skatepark"}
                category={"skate"}
                newLat={30.548887}
                newLong={-9.712487}
              />
              <Marker
                lat={30.588435}
                lng={-9.526074}
                name={"paradiseValley"}
                category={"paradise"}
                newLat={30.588435}
                newLong={-9.526074}
              />
            </GoogleMapReact>
          )}
        </div>
      </div>
      {isMobile && (
        <Flex sx={{ justifyContent: "center" }}>
          <div sx={{ marginTop: "-200px" }}>
            {" "}
            <div
              sx={{
                height: "600px",
                width: ["340px", "600px"],
                bg: "white",
                borderRadius: 4,
                boxShadow: "0 0 10px 0px rgba(0, 0, 0, .125)",
              }}
            >
              <Content content={content} data={data} />
            </div>
          </div>
        </Flex>
      )}
      <div sx={{ background: "rgba(247, 240, 225, 0.3)" }}>
        <Container>
          <Grid sx={{ pt: 5, px: [5, 0, 0] }} gap={5} columns={[1, 3, 3]}>
            <div
              sx={{
                display: "relative",
                bg: "text",
                height: ["300px", "350px", "375px"],
                "-webkit-clip-path": " polygon(50% 0%, 0% 100%, 100% 100%)",
                clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
              }}
            >
              <Img
                fluid={data.taghazoutView.childImageSharp.fluid}
                sx={{
                  position: "absolute",
                  height: "94%",
                  width: "93%",
                  top: "4%",
                  left: "3.5%",
                  "-webkit-clip-path": " polygon(50% 0%, 0% 100%, 100% 100%)",
                  clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
                }}
              />
            </div>
            <div
              sx={{
                display: "relative",
                bg: "text",
                height: ["300px", "350px", "375px"],
                borderTopRightRadius: "50%",
                borderTopLeftRadius: "50%",
              }}
            >
              <Img
                fluid={data.taghazoutYoga.childImageSharp.fluid}
                sx={{
                  height: "100%",
                  position: "absolute",
                  height: "96%",
                  width: "95%",
                  top: "2%",
                  left: "2.7%",
                  borderTopRightRadius: "50%",
                  borderTopLeftRadius: "50%",
                }}
              />
            </div>
            <div
              sx={{
                display: "relative",
                bg: "text",
                height: ["300px", "350px", "375px"],
                "-webkit-clip-path":
                  "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
                clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
              }}
            >
              <Img
                fluid={data.taghazoutSurf.childImageSharp.fluid}
                sx={{
                  position: "absolute",
                  height: "94%",
                  width: "94%",
                  top: "3.2%",
                  left: "3%",
                  "-webkit-clip-path":
                    "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
                  clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
                }}
              />
            </div>
          </Grid>
        </Container>
        <Container
          sx={{
            variant: "layout.primaryContainer",
            maxWidth: "smallContainer",
          }}
        >
          <Flex
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
              The little bohemiam surfing village by the sea
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
              Singlefin is located in the heart of Taghazout, a seaside Berber
              village in Southern Morocco. Up until the 1970's, Taghazout was a
              small fishing village until its epic surf was discovered by the
              Hippies. Ever since then, the surfing scene has grown and while it
              is now considered to be a world-class destination for surf, the
              village has retained its laid back roots.
            </p>
          </Flex>
        </Container>
      </div>
      <Container
        sx={{
          variant: "layout.primaryContainer",
        }}
      >
        <Flex
          sx={{
            justifyContent: "center",
            alignItems: "center",
            pt: 4,
            pb: 5,
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
            Things to do
          </h1>
          <BoardDivider sx={{ width: "75px" }} />
        </Flex>
        <div>
          <Img
            sx={{
              height: ["200px", "250px", "300px"],
              opacity: "1 !important",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "50% 25%",
            }}
            fluid={data.surfTaghazout.childImageSharp.fluid}
          />
          <div
            sx={{
              p: 4,
              bg: "white",
              borderRadius: 5,
              maxWidth: ["300px", "400px", "500px"],
              position: "relative",
              textAlign: "center",
              margin: "-30px auto",
            }}
          >
            <h1 sx={{ variant: "styles.h2", letterSpacing: 1.8 }}>Surf</h1>
          </div>
        </div>
        <Flex
          sx={{
            justifyContent: "center",
            alignItems: "center",
            pt: 3,
            flexDirection: "column",
            px: [3, 3, 3],
          }}
        >
          {/* <BoardDivider sx={{ width: "75px" }} /> */}
          <Grid sx={{ pt: 4 }} gap={[2, 3, 5]} columns={[1, 1, 2]}>
            <div>
              <p
                sx={{
                  variant: "styles.p",
                }}
              >
                Come to Morocco and you will soon realize it is a surfer's
                paradise, and that Taghazout is at the center of it all. People
                come from all over the world to enjoy these near perfect waves -
                the sun is out year-around and during Winter, when the weather
                is warm and waves are fully formed, Taghazout beocomes a
                surfer's dream.
              </p>
            </div>
            <div>
              <p
                sx={{
                  variant: "styles.p",
                }}
              >
                There are over 10 surfing spots within a 30 minute walk from
                Singlefin, and there is a spot for everyone. Whether you are
                learning to surf for the first time or looking to hop a ride in
                a fast barrell.
              </p>
              <p
                p
                sx={{
                  variant: "styles.p",
                }}
              >
                Singlefin offers surf lessons, coaching, and day trips. You can
                also check out our{" "}
                {
                  <span
                    sx={{ variant: "styles.p", color: "blue", fontWeight: 700 }}
                  >
                    surf packages
                  </span>
                }
                .
              </p>
            </div>
          </Grid>
        </Flex>
      </Container>
      <Container
        sx={{
          variant: "layout.primaryContainer",
        }}
      >
        <div>
          <BackgroundImage
            sx={{
              height: ["200px", "250px", "300px"],
              opacity: "1 !important",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "50% 75%",
            }}
            fluid={data.sandboard.childImageSharp.fluid}
          />
          <div
            sx={{
              p: 4,
              bg: "white",
              borderRadius: 5,
              maxWidth: ["300px", "400px", "500px"],
              position: "relative",
              textAlign: "center",
              margin: "-30px auto",
            }}
          >
            <h1 sx={{ variant: "styles.h2", letterSpacing: 1.8 }}>Sandboard</h1>
          </div>
        </div>
        <Flex
          sx={{
            justifyContent: "center",
            alignItems: "center",
            pt: 4,
            flexDirection: "column",
            px: [3, 3, 3],
          }}
        >
          <Grid sx={{ pt: 3 }} gap={[2, 3, 5]} columns={[1, 1, 2]}>
            <div>
              <p
                sx={{
                  variant: "styles.p",
                }}
              >
                Who says surfing needs to be in water? Just outside of Taghazout
                is the sahara desert, full of untouched dunes, ripe for the
                adventurous soul to barrel down them on a sandboard.
              </p>
            </div>
            <div>
              <p
                sx={{
                  variant: "styles.p",
                }}
              >
                Do you have the adventurous spirit to try sandboarding? Just let
                us know and we can organize a day trip for you and your friends.
              </p>
            </div>
          </Grid>
        </Flex>
      </Container>
      <Container
        sx={{
          variant: "layout.primaryContainer",
        }}
      >
        <div>
          <BackgroundImage
            sx={{
              height: ["200px", "250px", "300px"],
              opacity: "1 !important",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "50% 80%",
            }}
            fluid={data.paradiseValley.childImageSharp.fluid}
          />
          <div
            sx={{
              p: 4,
              bg: "white",
              borderRadius: 5,
              maxWidth: ["300px", "400px", "500px"],
              position: "relative",
              textAlign: "center",
              margin: "-30px auto",
            }}
          >
            <h1 sx={{ variant: "styles.h2", letterSpacing: 1.8 }}>
              Paradise Valley
            </h1>
          </div>
        </div>
        <Flex
          sx={{
            justifyContent: "center",
            alignItems: "center",
            pt: 3,
            flexDirection: "column",
            px: [3, 3, 3],
          }}
        >
          <Grid sx={{ pt: 4 }} gap={[2, 3, 5]} columns={[1, 1, 2]}>
            <div>
              <p
                sx={{
                  variant: "styles.p",
                }}
              >
                Tucked up in the foothills of the Atlas mountains is an oasis
                with fresh natural pools of water, surrounded by palm trees and
                views of the mountains. Day trips are often made here and when
                the surf is slow (or not), Paradise Valley is the pefrect place
                to come and relax by the tranquil waters, espeecially to cool
                off on a hot day and even go cliff jumping.
              </p>
            </div>
            <div>
              <p
                sx={{
                  variant: "styles.p",
                }}
              >
                Singlefin offers our guests day trips to this beautiful oasis in
                the mountains, included with food, transportation, and good
                vibes. Just let us know if you and your friends want to go!
              </p>
            </div>
          </Grid>
        </Flex>
      </Container>
      <Container
        sx={{
          variant: "layout.primaryContainer",
        }}
      >
        <div>
          <BackgroundImage
            sx={{
              height: ["200px", "250px", "300px"],
              opacity: "1 !important",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "20% 50%",
            }}
            fluid={data.souk.childImageSharp.fluid}
          />
          <div
            sx={{
              p: 4,
              bg: "white",
              borderRadius: 5,
              maxWidth: ["300px", "400px", "500px"],
              position: "relative",
              textAlign: "center",
              margin: "-30px auto",
            }}
          >
            <h1 sx={{ variant: "styles.h2", letterSpacing: 1.8 }}>Souk </h1>
          </div>
        </div>
        <Flex
          sx={{
            justifyContent: "center",
            alignItems: "center",
            pt: 3,
            flexDirection: "column",
            px: [3, 3, 3],
          }}
        >
          <Grid sx={{ pt: 4 }} gap={[2, 3, 5]} columns={[1, 1, 2]}>
            <div>
              <p
                sx={{
                  variant: "styles.p",
                }}
              >
                A Souk is a tradtional Moroccan market where you will find fresh
                fruit, vegetables, spices, rugs, artistic crafts, and pretty
                much anything useful for the home! More than just a market, the
                Souk is central gathering place for all Moroccans and is as
                diverse with people as it is diverse with scents and sensations.
                There are just two things to know about the Souk...If you go
                there you will not leave empty handed and the only price tag is
                bargaining.
              </p>
            </div>
            <div>
              <p
                sx={{
                  variant: "styles.p",
                }}
              >
                The local Souk takes place every Wednesday. We at Singlefin love
                to take our guests there, just let us know anytime!
              </p>
            </div>
          </Grid>
        </Flex>
      </Container>
      <Container
        sx={{
          variant: "layout.primaryContainer",
        }}
      >
        <div>
          <BackgroundImage
            sx={{
              height: ["200px", "250px", "300px"],
              opacity: "1 !important",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "40% 45%",
            }}
            fluid={data.skatepark.childImageSharp.fluid}
          />
          <div
            sx={{
              p: 4,
              bg: "white",
              borderRadius: 5,
              maxWidth: ["300px", "400px", "500px"],
              position: "relative",
              textAlign: "center",
              margin: "-30px auto",
            }}
          >
            <h1 sx={{ variant: "styles.h2", letterSpacing: 1.8 }}>Skatepark</h1>
          </div>
        </div>
        <Flex
          sx={{
            justifyContent: "center",
            alignItems: "center",
            pt: 3,
            flexDirection: "column",
            px: [3, 3, 3],
          }}
        >
          <Grid sx={{ pt: 4 }} gap={[2, 3, 5]} columns={[1, 1, 2]}>
            <div>
              <p
                sx={{
                  variant: "styles.p",
                }}
              >
                Arguably one of the most iconic skateparks in the world. Sitting
                on top of the mountain, with an infnite view of the Moroccan sea
                below, the Taghazout skatepark is quite the place to be, even if
                you don't skate. Often you will see local kids and tourists
                skating this park together, enjoying the sun and good company.
              </p>
            </div>
            <div>
              <p
                sx={{
                  variant: "styles.p",
                }}
              >
                It must be mentioned that this is an epic place to watch the
                sunsets over the expansive ocean.
              </p>
            </div>
          </Grid>
        </Flex>
      </Container>
    </Layout>
  )
}

const mapSizesToProps = ({ width }) => ({
  isMobile: width < 880,
})

export default withSizes(mapSizesToProps)(Explore)
