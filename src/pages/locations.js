/** @jsx jsx */

import { jsx, Container, Grid, Button, Flex } from "theme-ui"
import GoogleMapReact from "google-map-react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundImage from "gatsby-background-image"
import Marker from "../images/location/Marker.svg"

const isClient = typeof window !== "undefined"

export const data = graphql`
  query {
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

const Location = ({ data }) => (
  <Layout>
    <SEO title="Taghazout" />
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
          backgroundPosition: "center",
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
          Our Locations
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
          From sea to mountains
        </p>
      </div>
    </div>
    <div sx={{ background: "rgba(247, 240, 225, 0.3)" }}>
      <Container sx={{ px: 3, py: [4, 4, 6] }}>
        <Grid gap={[2, 3, 5]} columns={[1, 1, 2]}>
          <div>
            <p
              sx={{
                variant: "styles.p",
              }}
            >
              Singlefin offers 3 uniquely different places to stay, all of which
              are in and around Taghazout - a bohemian, seaside village on the
              Southern Moroccan coast. In the center of the village and a stone
              throw away from the surf and the sea, is the Singlefin Beachhouse.
              {""}
            </p>
            <p
              sx={{
                variant: "styles.p",
                pt: 3,
              }}
            >
              The Beachhouse is perfect for guests who want to be at the center
              of the buzz in Taghazout, while being as close to the surf as
              possibe. All rooms are private with a rooftop terrace on the top
              floor, perfect for watching sunsets over the sea, and our
              restaurant attached to the house serving local, health-conscious
              food.
            </p>
          </div>
          <div>
            <p
              sx={{
                variant: "styles.p",
              }}
            >
              The Mountainhouse is the place for guests to escape the Taghazout
              buzz and find themselves in the peaceful, tranquil surroundings of
              the Atlas mountains. While only a 10 minute drive from the
              Beachhouse, the Mountainhouse feels like you are far away from the
              village when in reality you never left.
            </p>
          </div>
        </Grid>
      </Container>
    </div>

    <Container sx={{ pb: 6, pt: [5, 6, 6] }}>
      <h1 sx={{ variant: "styles.h2", textAlign: "center" }}>Find us</h1>
      <p sx={{ variant: "styles.p", textAlign: "center", pb: 4 }}>
        65 Tayought Street, Taghazout 80022
      </p>
      <div style={{ height: "600px", width: "100%" }}>
        {isClient && (
          <GoogleMapReact
            bootstrapURLKeys={{
              key: process.env.GATSBY_GOOGLE_API_KEY,
            }}
            defaultCenter={[30.544194, -9.708767]}
            defaultZoom={17}
          >
            <Marker
              lat={30.544194}
              lng={-9.708767}
              sx={{
                height: "64px",
                position: "absolute",
                transform: "translate(-50%, -50%)",
              }}
            />
          </GoogleMapReact>
        )}
      </div>
    </Container>
  </Layout>
)

export default Location
