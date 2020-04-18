/** @jsx jsx */
import { jsx, Grid, AspectRatio, Link } from "theme-ui"
import { useEffect } from "react"
import Img from "gatsby-image"

export default function Instagram(props) {
  const { data } = props
  const node = data.edges
  console.log("node", node)

  useEffect(() => {})

  return (
    <Grid gap={2} columns={[2, 2, 3]}>
      <Link
        href="https://www.instagram.com/single.fin.taghazout/"
        target="_blank"
      >
        <AspectRatio ratio={3 / 3}>
          <Img
            fluid={data.edges[0].node.localFile.childImageSharp.fluid}
            sx={{ height: "100%" }}
          />
        </AspectRatio>
      </Link>
      <Link
        href="https://www.instagram.com/single.fin.taghazout/"
        target="_blank"
      >
        <AspectRatio ratio={3 / 3}>
          <Img
            fluid={data.edges[1].node.localFile.childImageSharp.fluid}
            sx={{ height: "100%" }}
          />
        </AspectRatio>
      </Link>
      <Link
        href="https://www.instagram.com/single.fin.taghazout/"
        target="_blank"
      >
        <AspectRatio ratio={3 / 3}>
          <Img
            sx={{ height: "100%" }}
            fluid={data.edges[2].node.localFile.childImageSharp.fluid}
          />
        </AspectRatio>
      </Link>

      <Link
        href="https://www.instagram.com/single.fin.taghazout/"
        target="_blank"
      >
        <AspectRatio ratio={3 / 3}>
          <Img
            fluid={data.edges[3].node.localFile.childImageSharp.fluid}
            sx={{ height: "100%" }}
          />
        </AspectRatio>
      </Link>
      <Link
        href="https://www.instagram.com/single.fin.taghazout/"
        target="_blank"
      >
        <AspectRatio ratio={3 / 3}>
          <Img
            fluid={data.edges[4].node.localFile.childImageSharp.fluid}
            sx={{ height: "100%" }}
          />
        </AspectRatio>
      </Link>
      <Link
        href="https://www.instagram.com/single.fin.taghazout/"
        target="_blank"
      >
        <AspectRatio ratio={3 / 3}>
          <Img
            sx={{ height: "100%" }}
            fluid={data.edges[5].node.localFile.childImageSharp.fluid}
          />
        </AspectRatio>
      </Link>
    </Grid>
  )
}
