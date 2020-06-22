/** @jsx jsx */

import { jsx, Container } from "theme-ui"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import { useState } from "react"
import * as React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundImage from "gatsby-background-image"
import { motion, AnimatePresence } from "framer-motion"

export const data = graphql`
  query {
    tos: file(relativePath: { eq: "tos.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 4000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
const Accordion = ({ i, expanded, setExpanded, question, answer }) => {
  const isOpen = i === expanded
  // By using `AnimatePresence` to mount and unmount the contents, we can animate
  // them in and out while also only rendering the contents of open accordions
  return (
    <>
      <motion.div
        initial={false}
        animate={{ backgroundColor: isOpen ? "#428DA4" : "white" }}
        onClick={() => setExpanded(isOpen ? false : i)}
        sx={{
          background: " white",
          borderStyle: "solid",
          borderWidth: "4px",
          borderColor: "#4b96ad",
          borderRadius: "10px",
          color: "white",
          cursor: "pointer",
          height: "60px",
          marginBottom: "20px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <motion.p
          animate={{ color: isOpen ? "white" : "#473831" }}
          sx={{ variant: "styles.p", margin: 0, pl: "20px" }}
        >
          {question}
        </motion.p>
      </motion.div>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            sx={{ overflow: "hidden" }}
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <motion.div
              variants={{ collapsed: { scale: 0.9 }, open: { scale: 1 } }}
              transition={{ duration: 0.5 }}
              sx={{
                padding: "20px",
                transformOrigin: "top center",
              }}
            >
              <p sx={{ variant: "styles.p", marginBottom: "20px" }}>{answer}</p>
            </motion.div>
          </motion.section>
        )}
      </AnimatePresence>
    </>
  )
}
const Faqs = () => {
  const accordionIds = [
    { id: 0, question: "What is Taghaout?", answer: "How come there is more?" },
    {
      id: 1,
      question: "How many fish are there?",
      answer: "Dont talk about fish",
    },
  ]
  const accordionIds2 = [
    { id: 2, question: "What is Taghaout?", answer: "How come there is more?" },
    {
      id: 3,
      question: "How many fish are there?",
      answer: "Dont talk about fish",
    },
  ]
  const [expanded, setExpanded] = useState(0)
  return (
    <div>
      <div>
        {accordionIds.map(i => (
          <Accordion
            i={i.id}
            question={i.question}
            answer={i.answer}
            expanded={expanded}
            setExpanded={setExpanded}
          />
        ))}
      </div>
      <div>
        {accordionIds2.map(i => (
          <Accordion
            i={i.id}
            question={i.question}
            answer={i.answer}
            expanded={expanded}
            setExpanded={setExpanded}
          />
        ))}
      </div>
    </div>
  )
}

const FAQ = ({ data }) => {
  return (
    <Layout>
      <SEO title="FAQ" />
      <div
        sx={{
          position: "relative",
          background:
            "linear-gradient(to bottom,rgba(0,0,0,.6) 50%,transparent 100%)",
        }}
      >
        <BackgroundImage
          css={{
            height: "70vh",
            opacity: "1 !important",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
          fluid={data.tos.childImageSharp.fluid}
        />
        <div
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <h1
            sx={{
              variant: "styles.h1",
              textAlign: "center",
              color: "white",
              fontSize: [5, 6, 7],
            }}
          >
            Frequently asked questions
          </h1>
          <p
            sx={{
              variant: "styles.p",
              textAlign: "center",
              opacity: 0.9,
              color: "white",
              fontSize: [2, 2, 4],
            }}
          >
            Common questions about Singlefin, Taghazout, and more.
          </p>
        </div>
      </div>

      <Container sx={{ px: 3, py: 5, maxWidth: "smallContainer" }}>
        <div sx={{ pb: 4 }}>
          <Faqs />
        </div>
        <div sx={{ pb: 4 }}>
          <h2 sx={{ variant: "styles.h2" }}>Point 2</h2>
          <p sx={{ variant: "styles.p" }}>Blah blah blah</p>
        </div>
        <div sx={{ pb: 4 }}>
          <h2 sx={{ variant: "styles.h2" }}>Point 3</h2>
          <p sx={{ variant: "styles.p" }}>Blah blah blah</p>
        </div>
        <div sx={{ pb: 4 }}>
          <h2 sx={{ variant: "styles.h2" }}>Point 4</h2>
          <p sx={{ variant: "styles.p" }}>Blah blah blah</p>
        </div>
        <div sx={{}}>
          <h2 sx={{ variant: "styles.h2" }}>Point 5</h2>
          <p sx={{ variant: "styles.p" }}>Blah blah blah</p>
        </div>
      </Container>
    </Layout>
  )
}

export default FAQ
