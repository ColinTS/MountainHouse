import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"
import { Div, Container, Row, Anchor } from "atomize"
import Logo from "../images/logo.svg"

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

          <Anchor p={{ l: "1rem" }} href="https://www.google.com" d="block">
            Link 1
          </Anchor>
          <Anchor p={{ l: "1rem" }} href="https://www.google.com" d="block">
            Link 2
          </Anchor>
          <Anchor p={{ l: "1rem" }} href="https://www.google.com" d="block">
            Link 3
          </Anchor>
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

          <Anchor p={{ l: "1rem" }} href="https://www.google.com" d="block">
            Link 1
          </Anchor>
          <Anchor p={{ l: "1rem" }} href="https://www.google.com" d="block">
            Link 2
          </Anchor>
          <Anchor p={{ l: "1rem" }} href="https://www.google.com" d="block">
            Link 3
          </Anchor>
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
