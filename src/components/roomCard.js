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
import withSizes from "react-sizes"

const RoomCard = ({ images, data, isMobile, title, description, price }) => {
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
      <Grid gap={0} columns={["minmax(0, 1fr)", "minmax(0, 1fr)", "1.5fr 1fr"]}>
        {!isMobile && (
          <AspectRatio
            ratio={16 / 9}
            sx={{
              overflow: "hidden",
              maxHeight: "400px",
            }}
          >
            {" "}
            <SlideShow data={data} images={images} />
          </AspectRatio>
        )}
        {isMobile && (
          <AliceCarousel>
            {images.map(image => (
              <AspectRatio ratio={4 / 3}>
                <Image
                  sx={{
                    height: "100%",
                  }}
                  src={image}
                />
              </AspectRatio>
            ))}
          </AliceCarousel>
        )}
        <div>
          <Box
            sx={{
              py: [0, "2rem", "2rem"],
              px: "1rem",
              pb: ["1rem", 0, 0],
              display: "flex",
              height: ["250px", "400px"],
              flexDirection: "column",
              justifyContent: ["space-between"],
            }}
          >
            <div>
              <h3
                sx={{
                  variant: "styles.h3",
                  pb: [0],
                  fontWeight: 500,
                  fontSize: [2, 2, 3],
                  opacity: 0.5,
                }}
              >
                {title}
              </h3>
              <p
                sx={{
                  variant: "styles.p",
                  fontSize: ["14px", 1, 2],
                  pb: 1,
                }}
              >
                {description}
              </p>
            </div>
            <div>
              <Button>Book</Button>
              <p
                sx={{
                  variant: "styles.p",
                  fontSize: ["14px", 1, 2],

                  margin: 0,
                  pt: 2,
                  pb: [0, 1, 3],
                }}
              >
                <span style={{ fontWeight: "900" }}>{price} EUR</span> / night
              </p>
            </div>
          </Box>
        </div>
      </Grid>
    </Box>
  )
}

const mapSizesToProps = ({ width }) => ({
  isMobile: width < 600,
})

export default withSizes(mapSizesToProps)(RoomCard)
