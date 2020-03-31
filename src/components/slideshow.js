/** @jsx jsx */
import { jsx } from "theme-ui"
import { useState } from "react"
import Img from "gatsby-image"
import Arrow from "../images/arrow.svg"
import { motion, AnimatePresence } from "framer-motion"

const imageIndex = Math.floor(Math.random() * 3)

const variants = {
  enter: direction => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }
  },
  center: {
    x: 0,
    zIndex: 1,
    opacity: 1,
  },
  exit: direction => {
    return {
      x: direction < 0 ? 1000 : -1000,
      zIndex: 0,
      opacity: 0,
    }
  },
}

export default function SlideShow(props) {
  const { data, images } = props
  const [index, setIndex] = useState(0)

  const length = data.edges.length - 1
  const handleNext = () => {
    paginate(1)
    index === length ? setIndex(0) : setIndex(index + 1)
  }

  const handlePrevious = () => {
    paginate(-1)
    index === 0 ? setIndex(length) : setIndex(index - 1)
  }

  const { node } = data.edges[index]

  const [[page, direction], setPage] = useState([0, 0])
  const paginate = newDirection => {
    setPage([page + newDirection, newDirection])
  }

  return (
    <div
      css={{
        position: "relative",
        height: "100%",
        overflow: "hidden",
      }}
    >
      <AnimatePresence initial={false} custom={direction} style={{}}>
        <motion.div
          key={page}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 201 },
            opacity: { duration: 0.2 },
          }}
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
          }}
        >
          <img
            style={{
              borderRadius: 4,
              height: "640px",
            }}
            // fluid={node.childImageSharp.fluid}
            src={images[page]}
            alt={node.name.replace(/-/g, " ").substring(2)}
          />
        </motion.div>
      </AnimatePresence>

      <button
        css={{
          position: "absolute",
          top: "47%",
          left: "5%",
          background: "none",
          border: "none",
          outline: "none",
          zIndex: 2,
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
          zIndex: 2,
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
