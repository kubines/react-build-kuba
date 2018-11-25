import React from 'react'
import { Box } from 'grid-styled'

import Link from 'ui/Link'

const LinkList = [
  {
    path: '/',
    text: 'Home',
  },
  {
    path: '/content',
    text: 'Content'
  },
  {
    path: 'about',
    text: 'About'
  }
]

const Menu = () => {
  return (
    <Box   
      width='400px'
      css={{
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      {
        LinkList.map((item, index) => {
          return (
            <Link
              key={index}
              to={item.path}
              text={item.text}
            />
          )
        })
      }
    </Box>
  )
}

export default Menu