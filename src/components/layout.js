/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Helmet from "react-helmet"
import Footer from "./footer.js"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  document.body.style.overflowX = "hidden"
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Helmet>
        <script type="text/javascript">{`window.$crisp=[];window.CRISP_WEBSITE_ID="3f96f73e-9f2d-40ac-81d8-12ba7e9462b4";(function(){d=document;s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();`}</script>
      </Helmet>
      <Header siteTitle={data.site.siteMetadata.title} />

      <main style={{ overflowX: "hidden" }}>{children}</main>

      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
