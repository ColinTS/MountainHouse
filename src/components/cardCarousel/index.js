import React from "react"
import { AspectImage } from "theme-ui"

import AliceCarousel from "react-alice-carousel"

import "./styles.css"

export default function CardCarousel(props) {
  return (
    <AliceCarousel
      disableDotsControls={true}
      paddingLeft={24}
      paddingRight={24}
    >
      {props.children.map(card => card)}
    </AliceCarousel>
  )
}
