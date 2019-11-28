import { Link } from "gatsby"
import React, { useState, useEffect } from "react"
import { Div, Text } from "atomize"
import Img from "gatsby-image"

export default function ActivityThumbnail(props) {
  const { data } = props

  useEffect(() => {})

  return (
    <Div
      style={{
        position: "relative",
        textAlign: "center",
        color: "white",
      }}
    >
      <Img
        style={{
          borderRadius: 4,
        }}
        fluid={data}
      ></Img>
      <Text
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        Hi
      </Text>
    </Div>
  )
}
