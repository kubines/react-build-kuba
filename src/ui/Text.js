import React from 'react'
import styled, { css } from 'styled-components'

const P = styled.p`
font-family: Verdana, Geneva, Tahoma, sans-serif;
font-size: 18px;
  ${props => props.large && css`
    font-size: 22px;
  `}
`

const Text = (props) => {
  return (
    <P
      {...props}
    >
      {props.text}
    </P>
  )
}

export default Text