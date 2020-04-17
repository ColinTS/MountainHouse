/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import { useEffect } from "react"

export default function Instagram(props) {
  const { data } = props
  const node = data.edges
  console.log("node", node)

  useEffect(() => {})

  return <div></div>
}
