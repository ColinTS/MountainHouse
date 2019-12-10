import { useStaticQuery, graphql } from "gatsby"
import React, { useState, useEffect } from "react"
import { Div, Text, Icon } from "atomize"
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
        fluid={node.childImageSharp.fluid}
        key={node.id}
        alt={node.name.replace(/-/g, " ").substring(2)}
      />
      <button
        style={{
          position: "absolute",
          top: "50%",
          left: "5%",
        }}
        onClick={() => handlePrevious()}
      >
        Previous
      </button>
      <button
        style={{
          position: "absolute",
          top: "50%",
          right: "5%",
        }}
        onClick={() => handleNext()}
      >
        Next
      </button>
    </div>
  )
}
