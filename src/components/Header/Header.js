import React from 'react'
import { Flex } from 'grid-styled'

import Logo from 'ui/Logo'
import Menu from './Menu'

const Header = () => {
  return (
    <Flex
     justifyContent='center'
     css={{
       background: 'black',
       width: '100%',
       flex: '0 0 auto',
     }}
     is='header'
    >
      <Flex
        justifyContent='space-between'
        alignItems='center'
        css={{
          width: '1120px',
          height: '70px',
        }}
      >
        <Logo />
        <Menu />
      </Flex>
    </Flex>
  )
}

export default Header