/** @jsx jsx */
import { jsx, Flex, Button } from "theme-ui"
import PropTypes from "prop-types"
import { useState, useEffect, useRef } from "react"
import Logo from "../images/logo2.svg"
import { Link } from "gatsby"
import withSizes from "react-sizes"
import Navigation from "./navigation.js"
import { motion, useCycle } from "framer-motion"

// const useDimensions = ref => {
//   const dimensions = useRef({ width: 0, height: 0 })

//   useEffect(() => {
//     dimensions.current.width = ref.current.offsetWidth
//     dimensions.current.height = ref.current.offsetHeight
//   }, [])

//   return dimensions.current
// }

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
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.1,
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
      position: "absolute",
      top: "18px",
      left: "15px",
      background: "white",
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

function Header({ siteTitle, isMobile }) {
  const [isTop, setIsTop] = useState(true)
  const [isOpen, toggleOpen] = useCycle(false, true)
  // const containerRef = useRef(null)
  // const { height } = useDimensions(containerRef)

  return (
    <div
      style={{
        zIndex: 5000,
        background: `none`,
        marginBottom: `1.0rem`,
        width: "100%",
        top: 0,
        position: "absolute",
      }}
    >
      {isMobile && (
        <Flex
          sx={{
            alignItems: "center",
            justifyContent: "space-between",
            margin: "0 auto",
            maxWidth: 1760,
            py: 3,
            px: 3,
          }}
        >
          {/* <Menu /> */}
          <Flex>
            {/*Navigation */}
            <motion.nav
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                bottom: 0,
                height: "100vh",
              }}
              initial={false}
              animate={isOpen ? "open" : "closed"}
              // custom={height}
              // ref={containerRef}
            >
              <motion.div
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  bottom: 0,
                  width: "100vw",
                  background: "#fff",
                }}
                variants={sidebar}
              />
              <MenuToggle toggle={() => toggleOpen()} />
            </motion.nav>
            {/* <Navigation /> */}
            <Link sx={{ display: "flex", alignItems: "center" }} to="/">
              <Logo
                sx={{
                  width: ["100px", "125px", "150px"],
                  height: "auto",
                }}
              />
            </Link>
          </Flex>

          <div>
            <Button sx={{ variant: "buttons.primary" }}>Book now</Button>
          </div>
        </Flex>
      )}
      {!isMobile && (
        <Flex
          sx={{
            alignItems: "center",
            justifyContent: "space-between",
            margin: "0 auto",
            maxWidth: 1760,
            py: 3,
            px: 3,
          }}
        >
          <Flex>
            <Link sx={{ display: "flex", alignItems: "center" }} to="/">
              <Logo
                sx={{
                  width: ["100px", "125px", "150px"],
                  height: "auto",
                }}
              />
            </Link>
          </Flex>
          <Flex sx={{ alignItems: "center" }}>
            <Link
              to="/explore"
              sx={{
                variant: "styles.button",
                color: "white",
                cursor: "pointer",
                pr: 4,
                userSelect: "none",
                textDecoration: "none",
              }}
            >
              Explore
            </Link>
            <Link
              to="/location"
              sx={{
                variant: "styles.button",
                color: "white",
                cursor: "pointer",
                pr: 4,
                userSelect: "none",
                textDecoration: "none",
              }}
            >
              Location
            </Link>
            <span
              sx={{
                variant: "styles.button",
                color: "white",
                cursor: "pointer",
                pr: 4,
                userSelect: "none",
              }}
              onClick={function() {
                window.$crisp.push(["do", "chat:open"])
              }}
            >
              Contact Us
            </span>

            <div>
              <Button sx={{ variant: "buttons.primary" }}>Book now</Button>
            </div>
          </Flex>
        </Flex>
      )}
    </div>
  )
}

const mapSizesToProps = ({ width }) => ({
  isMobile: width < 880,
})

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default withSizes(mapSizesToProps)(Header)
