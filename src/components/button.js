/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import { useEffect } from "react"

export default function ButtonLink(props) {
  const { name, bg } = props

  useEffect(() => {})

  return (
    <Link
      style={{
        textDecorationLine: "none",
      }}
      to="/terms-conditions"
    >
      <div
        sx={{
          backgroundColor: bg,
          display: "flex",
          alignContent: "center",
          px: 4,
          py: 3,
          borderRadius: 4,
        }}
      >
        <p
          sx={{
            color: "white",
            variant: "styles.button",
          }}
        >
          {name}
        </p>
      </div>
    </Link>
  )
}
