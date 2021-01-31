/** @jsx jsx */
import {
  jsx,
  Container,
  Flex,
  AspectRatio,
  Grid,
  Box,
  Button,
  Image,
} from "theme-ui"
import { useState } from "react"
import SlideShow from "./slideshow"
import { AspectImage } from "theme-ui"
import AliceCarousel from "react-alice-carousel"
// import "react-alice-carousel/lib/alice-carousel.css"

export default function RoomCard(props) {
  const { images, data } = props

  return (
    <Box
      bg="white"
      sx={{
        // cursor: "pointer",
        borderRadius: 4,
        // transform: "translate(0, 0px)",
        // transition: "all .3s ease",
        // height: ["600px", "400px"],
        maxWidth: "100%",
        overflowX: "hidden",
        boxShadow: "0 0 10px 0px rgba(0, 0, 0, .125)",
        // ":hover": {
        //   transform: "translate(0, -8px)",
        //   transition: "all .3 ease",
        //   boxShadow: "0 0 10px 0px rgba(0, 0, 0, .125)",
        // },
      }}
    >
      <Grid columns={[1, 1, "1.5fr 1fr"]}>
        {/* <AspectRatio
          ratio={16 / 9}
          sx={{
            overflow: "hidden",
            maxHeight: "400px",
          }}
        >
          {" "}
          <SlideShow sx={{ height: "400px" }} data={data} images={images} />
        </AspectRatio> */}

        <AliceCarousel>
          {images.map(image => (
            <AspectRatio ratio={4 / 3}>
              <Image
                sx={{
                  height: "100%",
                  width: "100%",
                }}
                src={image}
              />
            </AspectRatio>
          ))}
        </AliceCarousel>

        <div>
          <Box
            sx={{
              py: "2rem",
              px: "1rem",
              display: "flex",
              height: ["300px", "400px"],
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <h3
                sx={{
                  variant: "styles.h3",
                  pb: 3,
                  fontWeight: 500,
                  fontSize: [2, 2, 3],
                  opacity: 0.5,
                }}
              >
                BASIC ROOM
              </h3>
              <p
                sx={{
                  variant: "styles.p",
                  fontSize: [1, 1, 2],
                  pb: 1,
                }}
              >
                Are you a surfer with some experience and want to surf the
                sweetest waves of Southern Morocco?
              </p>
            </div>
            <div>
              <Button>Book now</Button>
              <p
                sx={{
                  variant: "styles.p",
                  fontSize: [1, 1, 2],
                  margin: 0,
                  pt: 2,
                }}
              >
                Starting from <span style={{ fontWeight: "900" }}>370 EUR</span>{" "}
                per/week
              </p>
            </div>
          </Box>
        </div>
      </Grid>
    </Box>
  )
}
