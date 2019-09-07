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
          justify="space-between"
          style={{
            margin: `0 auto`,
            maxWidth: 1760,
            padding: `1.45rem 1.0875rem`,
          }}
        >
          <Div p={{ r: "3rem" }} d="flex" direction="row" align="center">
            <Logo style={{ fill: "white" }} />
            <BigLink
              name="Location"
              textColor={"white"}
              hoverTextColor={"primary"}
            ></BigLink>
            <BigLink
              name="Activities"
              textColor={"white"}
              hoverTextColor={"primary"}
            ></BigLink>
            <BigLink
              name="About us"
              textColor={"white"}
              hoverTextColor={"primary"}
            ></BigLink>
          </Div>
          <Div>
            <BigLink
              name="Bookings"
              textColor={"white"}
              hoverTextColor={"primary"}
            ></BigLink>
          </Div>
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
          justify="space-between"
          style={{
            margin: `0 auto`,
            maxWidth: 1760,
            padding: `1.45rem 1.0875rem`,
          }}
        >
          <Div p={{ r: "3rem" }} d="flex" direction="row" align="center">
            <Logo />
            <BigLink
              name="Location"
              textColor={"black"}
              hoverTextColor={"primary"}
            ></BigLink>
            <BigLink
              name="Activities"
              textColor={"black"}
              hoverTextColor={"primary"}
            ></BigLink>
            <BigLink
              name="About us"
              textColor={"black"}
              hoverTextColor={"primary"}
            ></BigLink>
          </Div>
          <Div>
            <BigLink
              name="Bookings"
              textColor={"black"}
              hoverTextColor={"primary"}
            ></BigLink>
          </Div>
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
