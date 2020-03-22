/** @jsx jsx */
import { jsx, Flex } from "theme-ui"
import PropTypes from "prop-types"
import { useState, useEffect } from "react"
import ButtonLink from "./button.js"

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
          justifyContent: "flex-end",
          margin: "0 auto",
          maxWidth: 1760,
          py: 3,
        }}
      >
        <div>
          <ButtonLink name="Book Now" textColor="white" bg="blue" />
        </div>
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
