import React from 'react'
import styled from 'styled-components'
import { Link as LinkRoute } from 'react-router-dom'

const A = styled(LinkRoute)`
font-family: Verdana;
color: white;
text-decoration: none;
font-weight: 600;
  &:hover {
    opacity: 0.5;
  }
`

const Link = (props) => {
  return (
    <A 
      {...props}
    >
      {props.text}
    </A>
  )
}

export default Link