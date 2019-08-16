import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Div, Container, Row, Anchor } from "atomize"

const Header = ({ siteTitle }) => (
  <Div
    style={{
      background: `white`,
      marginBottom: `1.45rem`,
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
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `black`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </h1>
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

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
