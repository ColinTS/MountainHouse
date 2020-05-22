import * as React from "react"
import { motion, useCycle } from "framer-motion"
import { useEffect, useRef } from "react"

const useDimensions = ref => {
  const dimensions = useRef({ width: 0, height: 0 })

  useEffect(() => {
    dimensions.current.width = ref.current.offsetWidth
    dimensions.current.height = ref.current.offsetHeight
  }, [])

  return dimensions.current
}

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(40px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
}

const Path = props => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
)

const MenuToggle = ({ toggle }) => (
  <button
    css={{
      outline: "none",
      border: "none",
      cursor: "pointer",
      width: "50px",
      height: "50px",
      borderRadius: "50%",
      display: "flex",
      justifyContent: "center",
      background: "#fff",
    }}
    onClick={toggle}
  >
    <svg width="23" height="23" viewBox="0 0 23 23">
      <Path
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" },
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" },
        }}
      />
    </svg>
  </button>
)

const Menu = () => (
  <div
    sx={{
      position: "absolute",
      top: 0,
      left: 0,
      p: 4,
      background: "white",
      height: "100vh",
      width: "300px",
    }}
  ></div>
)

const Navigation = () => {
  const [isOpen, toggleOpen] = useCycle(false, true)
  const containerRef = useRef(null)
  const { height } = useDimensions(containerRef)

  return (
    <div>
      <motion.nav
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          width: "300px",
        }}
        initial={false}
        animate={isOpen ? "open" : "closed"}
        custom={height}
        ref={containerRef}
      >
        <motion.div
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            width: "300px",
            background: "#fff",
          }}
          variants={sidebar}
        />
        <MenuToggle toggle={() => toggleOpen()} />
      </motion.nav>
      <Menu />
    </div>
  )
}

export default Navigation
