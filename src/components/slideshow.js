import { useStaticQuery, graphql } from "gatsby"
import React, { useState, useEffect } from "react"
import { Div, Text, Icon, Button } from "atomize"
import Img from "gatsby-image"

export default function SlideShow(props) {
  const { data } = props
  const [index, setIndex] = useState(0)

  //Minus 1 for array offset from 0
  const length = data.edges.length - 1
  const handleNext = () =>
    index === length ? setIndex(0) : setIndex(index + 1)
  const handlePrevious = () =>
    index === 0 ? setIndex(length) : setIndex(index - 1)
  const { node } = data.edges[index]
  return (
    <div
      style={{
        position: "relative",
      }}
    >
      <Img
        style={{
          borderRadius: 4,
        }}
        fluid={node.childImageSharp.fluid}
        key={node.id}
        alt={node.name.replace(/-/g, " ").substring(2)}
      />
      <Button
        rounded="circle"
        h="2.5rem"
        w="2.5rem"
        m={{ r: "1rem" }}
        bg="white"
        shadow="2"
        hoverShadow="4"
        style={{
          position: "absolute",
          top: "50%",
          left: "5%",
        }}
      >
        <Icon
          name="LeftArrow"
          color="primary"
          size="40px"
          onClick={() => handlePrevious()}
        />
      </Button>

      <Button
        rounded="circle"
        h="2.5rem"
        w="2.5rem"
        m={{ r: "1rem" }}
        bg="white"
        shadow="2"
        hoverShadow="4"
        style={{
          position: "absolute",
          top: "50%",
          right: "5%",
        }}
      >
        <Icon
          name="RightArrow"
          color="primary"
          size="40px"
          onClick={() => handleNext()}
        />
      </Button>
    </div>
  )
}
