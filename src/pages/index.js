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
          margin: "0 auto",
        }}
      >
        <Text textSize="display1" fontFamily="secondary">
          Welcome to mountainhouse
        </Text>
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
