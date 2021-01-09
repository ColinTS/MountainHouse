/** @jsx jsx */
import { jsx, Flex, Button } from "theme-ui"
import PropTypes from "prop-types"
import { useState, useEffect, useRef } from "react"
import Logo from "../images/logo2.svg"
import { Link } from "gatsby"
import withSizes from "react-sizes"
import { motion, useCycle } from "framer-motion"
import Helmet from "react-helmet"

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
    clipPath: `circle(${height * 2 +
      200}px at calc(95% - 20px) calc(5% + 20px))`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(20px at calc(95% - 20px) calc(5% + 20px))",
    position: "absolute",
    top: 0,
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
    stroke="white"
    strokeLinecap="round"
    {...props}
  />
)

const MenuToggle = ({ toggle, isOpen }) => {
  return (
    <div>
      {isOpen ? (
        <Helmet>
          (
          <style type="text/css">{`
         body {
             position: fixed;
         }
     `}</style>
        </Helmet>
      ) : null}

      <button
        css={{
          outline: "none",
          border: "none",
          cursor: "pointer",
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          position: "absolute",
          top: "5%",

          right: "5%",
          background: "#428DA4",
        }}
        onClick={toggle}
      >
        <svg width="22" height="22" viewBox="0 0 22 22" css={{ marginTop: 8 }}>
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
    </div>
  )
}

const Navigation = () => {
  const navVariants = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  }

  const itemVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  }

  return (
    <motion.ul
      variants={navVariants}
      sx={{
        padding: "25px",
        position: "absolute",
        top: "100px",
        width: "230px",
        zIndex: 5,
      }}
    >
      <motion.li
        variants={itemVariants}
        sx={{
          listStyle: "none",
          marginBottom: "20px",
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
          zIndex: 5,
        }}
      >
        <Link
          to="/"
          sx={{
            variant: "styles.button",
            fontSize: 24,
            color: "text",
            cursor: "pointer",
            pr: 4,
            userSelect: "none",
            textDecoration: "none",
          }}
        >
          Home
        </Link>
      </motion.li>
      <motion.li
        variants={itemVariants}
        sx={{
          listStyle: "none",
          marginBottom: "20px",
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
          zIndex: 5,
        }}
      >
        <Link
          to="/explore"
          sx={{
            variant: "styles.button",
            fontSize: 24,
            color: "text",
            cursor: "pointer",
            pr: 4,
            userSelect: "none",
            textDecoration: "none",
          }}
        >
          Explore
        </Link>
      </motion.li>
      <motion.li
        variants={itemVariants}
        sx={{
          listStyle: "none",
          marginBottom: "20px",
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
        }}
      >
        <Link
          to="/location"
          sx={{
            variant: "styles.button",
            fontSize: 24,
            color: "text",
            cursor: "pointer",
            pr: 4,
            userSelect: "none",
            textDecoration: "none",
          }}
        >
          Location
        </Link>
      </motion.li>
      <motion.li
        variants={itemVariants}
        sx={{
          listStyle: "none",
          marginBottom: "20px",
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
        }}
      >
        <span
          sx={{
            variant: "styles.button",
            fontSize: 24,
            color: "text",
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
      </motion.li>
      <motion.li
        variants={itemVariants}
        sx={{
          listStyle: "none",
          marginBottom: "20px",
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
        }}
      >
        <Button sx={{ variant: "buttons.primary", mt: 4 }}>Book now</Button>
      </motion.li>
    </motion.ul>
  )
}

function Header({ siteTitle, isMobile }) {
  const [isTop, setIsTop] = useState(true)
  const [isOpen, toggleOpen] = useCycle(false, true)
  // const containerRef = useRef(null)
  // const { height } = useDimensions(containerRef)

  return (
    <div
      style={{
        zIndex: 1,
        background: `none`,

        width: "100%",
        top: 0,
        position: "absolute",
      }}
    >
      {isMobile && (
        <div>
          <motion.nav
            sx={{
              height: "100vh",
            }}
            initial={false}
            animate={isOpen ? "open" : "closed"}
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
            <Navigation sx={{ zIndex: 5 }} />
            <MenuToggle isOpen={isOpen} toggle={() => toggleOpen()} />
          </motion.nav>

          <Link sx={{ display: "flex", alignItems: "center" }} to="/">
            <Logo
              sx={{
                width: ["150px", "150px", "150px"],
                height: "auto",
                position: "absolute",
                top: "18px",
                left: "70px",
                zIndex: isOpen ? -1 : 1,
              }}
            />
          </Link>
        </div>
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
                  width: ["100px", "125px", "225px"],
                  height: "auto",
                }}
              />
            </Link>
          </Flex>
          <Flex sx={{ alignItems: "center" }}>
            <Link
              to="/"
              sx={{
                variant: "styles.button",
                color: "white",
                cursor: "pointer",
                pr: 4,
                userSelect: "none",
                textDecoration: "none",
                "&:hover": {
                  color: "blue",
                },
              }}
            >
              Home
            </Link>
            <Link
              to="/explore"
              sx={{
                variant: "styles.button",
                color: "white",
                cursor: "pointer",
                pr: 4,
                userSelect: "none",
                textDecoration: "none",
                "&:hover": {
                  color: "blue",
                },
              }}
            >
              Explore
            </Link>
            <Link
              to="/locations"
              sx={{
                variant: "styles.button",
                color: "white",
                cursor: "pointer",
                pr: 4,
                userSelect: "none",
                textDecoration: "none",
                "&:hover": {
                  color: "blue",
                },
              }}
            >
              Location
            </Link>
            <Link
              to="/faq"
              sx={{
                variant: "styles.button",
                color: "white",
                cursor: "pointer",
                pr: 4,
                userSelect: "none",
                textDecoration: "none",
                "&:hover": {
                  color: "blue",
                },
              }}
            >
              FAQ
            </Link>
            <span
              sx={{
                variant: "styles.button",
                color: "white",
                cursor: "pointer",
                pr: 4,
                userSelect: "none",
                "&:hover": {
                  color: "blue",
                },
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
