import React from 'react'
import styled from 'styled-components'

const Btn = styled.button`
padding: 10px;
color: red;
text-transform: uppercase;
border: 0;
background: yellow;
transition: .1s ease-in;
  &:hover {
    cursor: pointer;
    opacity: .5;
  }
`

const Button = (props) => {
  return (
    <Btn
      {...props}
    >
      {props.text}
    </Btn>
  )
}

export default Button