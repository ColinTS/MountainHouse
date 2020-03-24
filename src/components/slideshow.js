/** @jsx jsx */
import { jsx } from "theme-ui"
import { useState } from "react"
import Img from "gatsby-image"
import Arrow from "../images/arrow.svg"

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
      <button
        css={{
          position: "absolute",
          top: "47%",
          left: "5%",
          background: "none",
          border: "none",
          outline: "none",
        }}
      >
        <Arrow
          css={{
            width: "70px",
            height: "auto",
            cursor: "pointer",
            transform: "rotate(180deg) scale(1)",
            transition: "all .3s ease",
            ":hover": {
              transform: "rotate(180deg) scale(1.2)",
              transition: "all .3s ease",
            },
          }}
          onClick={() => handlePrevious()}
        ></Arrow>
      </button>
      <button
        css={{
          position: "absolute",
          top: "47%",
          right: "5%",
          background: "none",
          border: "none",
          outline: "none",
        }}
      >
        <Arrow
          css={{
            width: "70px",
            height: "auto",
            cursor: "pointer",
            transform: "scale(1)",
            transition: "all .3s ease",
            ":hover": {
              transform: "scale(1.2)",
              transition: "all .3s ease",
            },
          }}
          onClick={() => handleNext()}
        ></Arrow>
      </button>
    </div>
  )
}
