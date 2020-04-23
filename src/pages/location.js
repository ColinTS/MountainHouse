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
          Welcome to Taghazout
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
          The little bohemian village by the Moroccan sea
        </p>
      </div>
    </div>

    <Container sx={{ px: 3, py: [4, 4, 6] }}>
      <Grid gap={[2, 3, 6]} columns={[1, 1, 2]}>
        <div>
          <p
            sx={{
              variant: "styles.p",
            }}
          >
            Taghazout is a fishing village on Morocco's Atlantic coast, north of
            the city of Agadir. It’s known for its surf beaches. Killer Point is
            a powerful point break. To the south, La Source is named for the
            fresh water that bubbles up from the rocks. Anchor Point has barrel
            waves. Cafes and surf shops line the main street. Inland, Paradise
            Valley, on the Tamraght River, is a palm-lined gorge with pools and
            waterfalls.
          </p>
        </div>
        <div>
          <p
            sx={{
              variant: "styles.p",
            }}
          >
            Taghazout is a fishing village on Morocco's Atlantic coast, north of
            the city of Agadir. It’s known for its surf beaches. Killer Point is
            a powerful point break. To the south, La Source is named for the
            fresh water that bubbles up from the rocks. Anchor Point has barrel
            waves. Cafes and surf shops line the main street. Inland, Paradise
            Valley, on the Tamraght River, is a palm-lined gorge with pools and
            waterfalls.
          </p>
        </div>
      </Grid>
      <Grid sx={{ pt: 5, px: [5, 0, 0] }} gap={4} columns={[1, 3, 3]}>
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
            "-webkit-clip-path": "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
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
      <Flex sx={{ justifyContent: "center", pt: 5 }}>
        <Button>Explore activities</Button>
      </Flex>
    </Container>
    <Container sx={{ pb: 6, pt: [5, 0, 0] }}>
      <h1 sx={{ variant: "styles.h1", textAlign: "center" }}>Find us</h1>
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
