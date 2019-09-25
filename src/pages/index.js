import React from "react"
import { Link } from "gatsby"
import { Div, Container, Row, Anchor, Button, Text } from "atomize"

import Layout from "../components/layout"
import PrimaryContainer from "../components/container"
import Image from "../components/image"
import SEO from "../components/seo"
import Dunes from "../images/dunes.svg"

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
          bottom: "-1%",
          width: "100vw",
          margin: 0,
          padding: 0,
        }}
      >
        <Dunes style={{ width: "100%", height: "auto" }} />
      </Div>

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
          textSize="display3"
          fontFamily="secondary"
          textColor="white"
          textWeight="700"
          style={{
            letterSpacing: "0.1rem",
            textShadow: "0 0 6px rgba(0,0,0,.3)",
          }}
        >
          MOUNTAIN HOUSE
        </Text>
        <Div p={{ t: "2rem" }}>
          <Text
            textSize="subHeader"
            fontFamily="secondary"
            textColor="white"
            textWeight="400"
            style={{ lineHeight: 1.2, textShadow: "0 0 6px rgba(0,0,0,.3)" }}
          >
            A place for co-working, surfing, yoga, and relaxing - located at the
            foot of the atlas mountains, near Taghazout, Morocco
          </Text>
        </Div>
      </Div>
    </Div>
    {/* <PrimaryContainer>
      <Div h="10rem">
        <Text>Hey</Text>
      </Div>
    </PrimaryContainer> */}

    <Layout>
      <SEO title="Home" />
      <Div bg="secondary" h="10rem">
        <Container>
          <Text>Hey</Text>
        </Container>
      </Div>
    </Layout>
  </Div>
)

export default IndexPage
