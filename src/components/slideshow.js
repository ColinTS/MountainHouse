/** @jsx jsx */
import { jsx } from "theme-ui"
import { useState } from "react"
import Arrow from "../images/arrow.svg"
import { motion, AnimatePresence } from "framer-motion"
import { wrap } from "@popmotion/popcorn"

const variants = {
  enter: direction => {
    return {
      x: direction > 0 ? 1000 : -1000,
    }
  },
  center: {
    x: 0,
    zIndex: 1,
  },
  exit: direction => {
    return {
      x: direction < 0 ? 1000 : -1000,
      zIndex: 0,
    }
  },
}

export default function SlideShow(props) {
  const { images } = props

  const [[page, direction], setPage] = useState([0, 0])
  const paginate = newDirection => {
    setPage([page + newDirection, newDirection])
  }
  const imageIndex = wrap(0, images.length, page)

  return (
    <div
      sx={{
        position: ["relative", null, "relative"],
        height: "100%",
        width: "auto",
        overflow: ["hidden", null, "hidden"],
      }}
    >
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          key={page}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 200 },
            opacity: { duration: 0.7 },
          }}
          sx={{
            borderRadius: 4,
            position: ["absolute", null, "absolute"],
            minHeight: [null, null, "600px"],
            objectFit: "cover",
          }}
          src={images[imageIndex]}
          // alt={node.name.replace(/-/g, " ").substring(2)}
        />
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
          onClick={() => paginate(1)}
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
          onClick={() => paginate(-1)}
        ></Arrow>
      </button>
    </div>
  )
}
