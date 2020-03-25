/** @jsx jsx */
import { jsx } from "theme-ui"
import { useState } from "react"
import Img from "gatsby-image"
import Arrow from "../images/arrow.svg"
import { motion, AnimatePresence } from "framer-motion"

const variants = {
  enter: direction => {
    return {
      opacity: 0,
    }
  },
  center: {
    zIndex: 1,
    opacity: 1,
  },
  exit: direction => {
    return {
      zIndex: 0,
      opacity: 0,
    }
  },
}

export default function SlideShow(props) {
  const { data } = props
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
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={page}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            opacity: { duration: 5 },
          }}
        >
          <Img
            style={{
              borderRadius: 4,
            }}
            fluid={node.childImageSharp.fluid}
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
