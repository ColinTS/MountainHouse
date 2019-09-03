import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"
import { Div, Container, Row, Anchor, Text } from "atomize"
import Logo from "../images/logo.svg"
import BigLink from "./link.js"

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

  if (isTop) {
    return (
      <Div
        style={{
          zIndex: 5000,
          background: `none`,
          marginBottom: `1.45rem`,
          width: "100%",
          top: 0,
          position: "fixed",
        }}
      >
        <Row
          d="flex"
          align="center"
          style={{
            margin: `0 auto`,
            maxWidth: 1760,
            padding: `1.45rem 1.0875rem`,
          }}
        >
          <Div p={{ r: "3rem" }}>
            <Logo style={{ fill: "white" }} />
          </Div>
          <BigLink
            name="Location"
            textColor={"white"}
            hoverTextColor={"primary"}
          ></BigLink>
          <BigLink
            name="Location"
            textColor={"white"}
            hoverTextColor={"primary"}
          ></BigLink>
          <BigLink
            name="Location"
            textColor={"white"}
            hoverTextColor={"primary"}
          ></BigLink>
        </Row>
      </Div>
    )
  } else
    return (
      <Div
        shadow="3"
        style={{
          zIndex: 5000,
          background: `white`,
          marginBottom: `1.45rem`,
          width: "100%",
          top: 0,
          position: "fixed",
        }}
      >
        <Row
          d="flex"
          align="center"
          style={{
            margin: `0 auto`,
            maxWidth: 1760,
            padding: `1.45rem 1.0875rem`,
          }}
        >
          <Div p={{ r: "3rem" }}>
            <Logo />
          </Div>

          <BigLink
            name="Location"
            textColor={"black"}
            hoverTextColor={"primary"}
          ></BigLink>
          <BigLink
            name="Location"
            textColor={"black"}
            hoverTextColor={"primary"}
          ></BigLink>
          <BigLink
            name="Location"
            textColor={"black"}
            hoverTextColor={"primary"}
          ></BigLink>
        </Row>
      </Div>
    )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
