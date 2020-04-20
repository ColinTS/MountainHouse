/** @jsx jsx */
import { jsx, Flex, Button } from "theme-ui"
import PropTypes from "prop-types"
import { useState, useEffect } from "react"
import Logo from "../images/logo2.svg"
import { Link } from "gatsby"

function Header({ siteTitle }) {
  const [isTop, setIsTop] = useState(true)

  useEffect(() => {
    document.addEventListener("scroll", () => {
      const isTopCheck = window.scrollY < 1
      if (isTopCheck !== isTop) {
        setIsTop(isTopCheck)
      }
    })
  })

  // if (isTop) {
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
    </div>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
