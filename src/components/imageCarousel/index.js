import React from "react"
import { AspectImage } from "theme-ui"

import AliceCarousel from "react-alice-carousel"

export default function ImageCarousel(props) {
  const { images } = props
  return (
    <div>
      <AliceCarousel paddingRight={20}>
        {images.map(image => (
          <AspectImage
            sx={{
              height: "100%",
              width: "calc(100% - 12px)",
            }}
            ratio={4 / 4}
            src={image}
          />
        ))}
      </AliceCarousel>
    </div>
  )
}
