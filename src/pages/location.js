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
    <div sx={{ background: "rgba(247, 240, 225, 0.3)" }}>
      <Container sx={{ px: 3, py: [4, 4, 6] }}>
        <Grid gap={[2, 3, 5]} columns={[1, 1, 2]}>
          <div>
            <p
              sx={{
                variant: "styles.p",
              }}
            >
              Singlefin is located in the heart of Taghazout, a seaside Berber
              village in Southern Morocco. Up until the 1970's, Taghazout was a
              small fishing village until its epic surf was discovered by the
              Hippies. Ever since then, the surfing scene has grown and while it
              is now considered to be a world-class destination for surf, the
              village has retained its laid back roots.
            </p>
          </div>
          <div>
            <p
              sx={{
                variant: "styles.p",
              }}
            >
              Taghazout is sunny and warm almost every day of the year. Winter
              is when the swell peaks and sufing is at its best, and while
              there's surf all-year-round, it's in the Summer when you'll see
              people ennjoying the beaches and chilling in all of the cafes and
              restaurants that face the sea.
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
        <h1 sx={{ variant: "styles.h1", textAlign: "center", pt: 6 }}>
          Want to learn more?
        </h1>
        <Flex sx={{ justifyContent: "center", pt: 3 }}>
          <Button>Explore activities</Button>
        </Flex>
      </Container>
    </div>

    <Container sx={{ pb: 6, pt: [5, 6, 6] }}>
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
