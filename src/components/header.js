import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"
import { Div, Container, Row, Anchor, Text } from "atomize"
import Logo from "../images/logo.svg"
import LogoBlack from "../images/logoBlack.svg"
import BigLink from "./link.js"
import ButtonLink from "./button.js"
import theme from "../theme.js"
import { jsx } from "theme-ui"

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
    <Div
      style={{
        zIndex: 5000,
        background: `none`,
        marginBottom: `1.0rem`,
        width: "100%",
        top: 0,
        position: "absolute",
      }}
    >
      <Row
        d="flex"
        align="center"
        justify="space-between"
        style={{
          margin: `0 auto`,
          maxWidth: 1760,
          padding: `0.4rem`,
        }}
      >
        <Div p={{ r: "3rem" }} d="flex" direction="row" align="center">
          <Logo style={{ width: "75px" }} />
        </Div>
        <Div d="flex" direction="column" align="center">
          <BigLink
            name="Our Packages"
            textColor={"white"}
            hoverTextColor={theme.colors.primary}
          ></BigLink>
          <Div p={{ l: "2rem" }}>
            <ButtonLink
              name="Book Now"
              textColor="white"
              bg={theme.colors.primary}
            />
          </Div>
        </Div>
      </Row>
    </Div>
  )

  // else
  //   return (
  //     <Div
  //       shadow="3"
  //       style={{
  //         zIndex: 5000,
  //         background: `white`,
  //         marginBottom: `1.0rem`,
  //         width: "100%",
  //         top: 0,
  //         position: "absolute",
  //       }}
  //     >
  //       <Row
  //         d="flex"
  //         align="center"
  //         justify="space-between"
  //         style={{
  //           margin: `0 auto`,
  //           maxWidth: 1760,
  //           padding: `0.4rem`,
  //         }}
  //       >
  //         <Div p={{ r: "3rem" }} d="flex" direction="row" align="center">
  //           <LogoBlack style={{ width: "75px" }} />

  //         </Div>
  //         <Div d="flex" direction="column" align="center">
  //           <BigLink
  //             name="Our Packages"
  //             textColor={"black"}
  //             hoverTextColor={"primary"}
  //           ></BigLink>
  //           <Div p={{ l: "2rem" }}>
  //             <ButtonLink
  //               name="Book Now"
  //               textColor="white"
  //               bg={theme.colors.primary}
  //             />
  //           </Div>
  //         </Div>
  //       </Row>
  //     </Div>
  //   )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
