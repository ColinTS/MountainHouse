import { Link } from "gatsby"
import React, { useState, useEffect } from "react"
import { Div } from "atomize"

export default function PrimaryContainer(props) {
  const { bg } = props

  useEffect(() => {})

  return (
    <Div bg={bg} h="10rem" d="flex" align="center">
      {props.children}
    </Div>
  )
}
