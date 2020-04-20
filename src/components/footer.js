/** @jsx jsx */
import { jsx, Container, Grid } from "theme-ui"
import { Link } from "gatsby"
import { useEffect } from "react"
import Dunes from "../images/dunes.svg"
import LogoDark from "../images/logoDark.svg"

export default function Footer(props) {
  useEffect(() => {})

  return (
    <div sx={{ width: "100%", overflow: "hidden" }}>
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
      <div sx={{ bg: "secondary", px: 3, overflowX: "hidden" }}>
        <Container
          sx={{ maxWidth: "largeContainer", pb: 5, overflowX: "hidden" }}
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
            </div>

            <div>
              <Link to="/terms-conditions" sx={{ textDecoration: "none" }}>
                <p
                  sx={{
                    variant: "styles.button",
                    color: "text",
                    pb: 2,
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
                  }}
                >
                  Privacy policy
                </p>
              </Link>
            </div>
            <div></div>
          </Grid>
          <p sx={{ variant: "styles.p", fontSize: 14, pt: [1, 1, 4] }}>
            © 2020 Singlefin
          </p>
        </Container>
      </div>
    </div>
  )
}
