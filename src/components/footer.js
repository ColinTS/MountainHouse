/** @jsx jsx */
import { jsx, Container, Grid } from "theme-ui"
import { Link } from "gatsby"
import { useEffect, useState } from "react"
import Dunes from "../images/dunes.svg"
import LogoDark from "../images/logo2Dark.svg"

export default function Footer(props) {
  useEffect(() => {})

  const InstagramLogo = ({ width, fill }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 2476 2476"
      width={width}
      height={width}
      sx={{
        mt: 3,
        fill: "text",
        cursor: "pointer",
        "&:hover": {
          fill: "blue",
        },
      }}
    >
      <path d="M825.4 1238c0-227.9 184.7-412.7 412.6-412.7 227.9 0 412.7 184.8 412.7 412.7 0 227.9-184.8 412.7-412.7 412.7-227.9 0-412.6-184.8-412.6-412.7m-223.1 0c0 351.1 284.6 635.7 635.7 635.7s635.7-284.6 635.7-635.7-284.6-635.7-635.7-635.7S602.3 886.9 602.3 1238m1148-660.9c0 82 66.5 148.6 148.6 148.6 82 0 148.6-66.6 148.6-148.6s-66.5-148.5-148.6-148.5-148.6 66.5-148.6 148.5M737.8 2245.7c-120.7-5.5-186.3-25.6-229.9-42.6-57.8-22.5-99-49.3-142.4-92.6-43.3-43.3-70.2-84.5-92.6-142.3-17-43.6-37.1-109.2-42.6-229.9-6-130.5-7.2-169.7-7.2-500.3s1.3-369.7 7.2-500.3c5.5-120.7 25.7-186.2 42.6-229.9 22.5-57.8 49.3-99 92.6-142.4 43.3-43.3 84.5-70.2 142.4-92.6 43.6-17 109.2-37.1 229.9-42.6 130.5-6 169.7-7.2 500.2-7.2 330.6 0 369.7 1.3 500.3 7.2 120.7 5.5 186.2 25.7 229.9 42.6 57.8 22.4 99 49.3 142.4 92.6 43.3 43.3 70.1 84.6 92.6 142.4 17 43.6 37.1 109.2 42.6 229.9 6 130.6 7.2 169.7 7.2 500.3 0 330.5-1.2 369.7-7.2 500.3-5.5 120.7-25.7 186.3-42.6 229.9-22.5 57.8-49.3 99-92.6 142.3-43.3 43.3-84.6 70.1-142.4 92.6-43.6 17-109.2 37.1-229.9 42.6-130.5 6-169.7 7.2-500.3 7.2-330.5 0-369.7-1.2-500.2-7.2M727.6 7.5c-131.8 6-221.8 26.9-300.5 57.5-81.4 31.6-150.4 74-219.3 142.8C139 276.6 96.6 345.6 65 427.1 34.4 505.8 13.5 595.8 7.5 727.6 1.4 859.6 0 901.8 0 1238s1.4 378.4 7.5 510.4c6 131.8 26.9 221.8 57.5 300.5 31.6 81.4 73.9 150.5 142.8 219.3 68.8 68.8 137.8 111.1 219.3 142.8 78.8 30.6 168.7 51.5 300.5 57.5 132.1 6 174.2 7.5 510.4 7.5 336.3 0 378.4-1.4 510.4-7.5 131.8-6 221.8-26.9 300.5-57.5 81.4-31.7 150.4-74 219.3-142.8 68.8-68.8 111.1-137.9 142.8-219.3 30.6-78.7 51.6-168.7 57.5-300.5 6-132.1 7.4-174.2 7.4-510.4s-1.4-378.4-7.4-510.4c-6-131.8-26.9-221.8-57.5-300.5-31.7-81.4-74-150.4-142.8-219.3C2199.4 139 2130.3 96.6 2049 65c-78.8-30.6-168.8-51.6-300.5-57.5-132-6-174.2-7.5-510.4-7.5-336.3 0-378.4 1.4-510.5 7.5" />
    </svg>
  )

  return (
    <div
      sx={{
        width: "100%",
        overflow: "hidden",
        zIndex: 1,
        position: "relative",
      }}
    >
      <div
        css={{
          width: "100vw",
          margin: 0,
          padding: 0,
          marginBottom: "-2%",
        }}
      >
        <Dunes style={{ width: "100%", height: "auto" }} />
      </div>
      <div
        sx={{ bg: "secondary", variant: "layout.gutters", overflowX: "hidden" }}
      >
        <Container
          sx={{
            maxWidth: "largeContainer",
            pb: [3, 4, 5],
            overflowX: "hidden",
          }}
          justify="center"
        >
          <Grid gap={4} columns={[1, 1, 3]}>
            <div>
              <Link to="/">
                <LogoDark
                  sx={{
                    width: ["140px", "180px", "200px"],
                    height: "auto",
                  }}
                />
              </Link>
              <p sx={{ variant: "styles.p", pt: 2 }}>
                Singlefin is a holiday retreat in Taghazout, Morocco
              </p>
              <p sx={{ variant: "styles.p", fontSize: [1, 1, 1] }}>
                © 2020 Singlefin
              </p>
            </div>

            <div>
              <Link to="/" sx={{ textDecoration: "none" }}>
                <p
                  sx={{
                    variant: "styles.button",
                    color: "text",
                    pb: 2,
                    "&:hover": {
                      color: "blue",
                    },
                  }}
                >
                  Home
                </p>
              </Link>
              <Link to="/explore" sx={{ textDecoration: "none" }}>
                <p
                  sx={{
                    variant: "styles.button",
                    color: "text",
                    pb: 2,
                    "&:hover": {
                      color: "blue",
                    },
                  }}
                >
                  Explore
                </p>
              </Link>
              <Link to="/locations" sx={{ textDecoration: "none" }}>
                <p
                  sx={{
                    variant: "styles.button",
                    color: "text",
                    pb: 2,
                    "&:hover": {
                      color: "blue",
                    },
                  }}
                >
                  Location
                </p>
              </Link>
              <Link to="/faq" sx={{ textDecoration: "none" }}>
                <p
                  sx={{
                    variant: "styles.button",
                    color: "text",
                    pb: 2,
                    "&:hover": {
                      color: "blue",
                    },
                  }}
                >
                  FAQ
                </p>
              </Link>
              <p
                sx={{
                  variant: "styles.button",
                  color: "text",
                  pb: 2,
                  cursor: "pointer",
                  "&:hover": {
                    color: "blue",
                  },
                }}
                onClick={function() {
                  window.$crisp.push(["do", "chat:open"])
                }}
              >
                Contact Us
              </p>
              {/* <Link to="/terms-conditions" sx={{ textDecoration: "none" }}>
                <p
                  sx={{
                    variant: "styles.button",
                    color: "text",
                    pb: 2,
                    "&:hover": {
                      color: "blue",
                    },
                  }}
                >
                  Terms & Conditions
                </p>
              </Link>
              <Link to="/terms-conditions" sx={{ textDecoration: "none" }}>
                <p
                  sx={{
                    variant: "styles.button",
                    color: "text",
                    pb: 2,
                    "&:hover": {
                      color: "blue",
                    },
                  }}
                >
                  Privacy policy
                </p>
              </Link> */}
              <a
                target="_blank"
                href="https://www.instagram.com/single.fin.taghazout/"
              >
                <InstagramLogo width={"32px"} />
              </a>
            </div>
            <div></div>
          </Grid>
        </Container>
      </div>
    </div>
  )
}
