import React from "react"
import { Link } from "gatsby"
import { Div, Container, Row, Anchor, Button, Text } from "atomize"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import video from "../images/Tag.mp4"

const IndexPage = () => (
  <Div>
    <Div
      style={{
        margin: 0,
        height: "100vh",
        width: "100%",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <video
        autoPlay
        muted
        loop
        style={{
          left: "50%",
          minHeight: "100%",
          minWidth: "100%",
          position: "relative",
          top: "50%",
          transform: "translate(-50%, -50%)",
          overflow: "hidden",
        }}
      >
        <source src={video} type="video/mp4" />
        <source src={video} type="video/ogg" />
      </video>
      <Div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
        }}
      >
        <Text
          textSize="display1"
          fontFamily="secondary"
          textColor="white"
          textWeight="400"
        >
          Welcome to MountainHouse
        </Text>
        <Div p={{ t: "1rem" }}>
          <Text
            textSize="subHeader"
            fontFamily="secondary"
            textColor="white"
            textWeight="200"
            style={{ lineHeight: 1.2 }}
          >
            A place for co-working, surfing, yoga, and relaxing - located at the
            foot of the atlas mountains, near Taghazout, Morocco
          </Text>
        </Div>
      </Div>
    </Div>
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <Button bg="warning700">It worked</Button>
      <Div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </Div>
      <Link to="/page-2/">Go to page 2</Link>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <Button bg="warning700">It worked</Button>
      <Div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </Div>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  </Div>
)

export default IndexPage
