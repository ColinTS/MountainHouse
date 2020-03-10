import { Link } from "gatsby"
import React, { useState, useEffect } from "react"
import { Div } from "atomize"
import { jsx } from "theme-ui"

export default function PrimaryContainer(props) {
  const { background } = props

  useEffect(() => {})

  return (
    <div sx={{ bg: "secondary", py: 6 }} d="flex" align="center">
      {props.children}
    </div>
  )
}
