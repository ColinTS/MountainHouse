/** @jsx jsx */
import { jsx, Container, Flex, AspectRatio, Grid, Box, Button } from "theme-ui"
import { useState } from "react"
import SlideShow from "./slideshow"

export default function RoomCard(props) {
  const { images, data } = props

  return (
    <Box
      bg="white"
      sx={{
        cursor: "pointer",
        borderRadius: 4,
        transform: "translate(0, 0px)",
        transition: "all .3s ease",
        height: "400px",
        maxWidth: "100%",

        ":hover": {
          transform: "translate(0, -8px)",
          transition: "all .3 ease",
          boxShadow: "0 0 10px 0px rgba(0, 0, 0, .125)",
        },
      }}
    >
      <Grid columns={[1, 1, "1.5fr 1fr"]}>
        <AspectRatio
          ratio={16 / 9}
          sx={{
            overflow: "hidden",
            maxHeight: "400px",
          }}
        >
          {" "}
          <SlideShow sx={{ height: "400px" }} data={data} images={images} />
        </AspectRatio>

        <div
          sx={{
            height: ["auto", "auto", "auto"],
            height: "400px",
          }}
        >
          <Box
            sx={{
              py: "2rem",
              px: "1rem",
              height: "100%",
              display: "flex",
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
                sweetest waves of Southern Morocco? Our experienced guides will
                take you to their favorite places to surf.
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
