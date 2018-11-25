import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { Box, Flex } from 'grid-styled'

import Header from './components/Header/Header'
import Home from './components/Home/Home'
import About from './components/About/About'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <BrowserRouter>
      <Flex
        flexDirection='column'
        css={{
          height: '100%',
        }}
      >
        <Header />
        <Box
          width='1120px'
          mx='auto'
          css={{
            flex: '1 0 auto',
          }}
        >
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
        </Box>
        <Footer />
      </Flex>
    </BrowserRouter>
  )
}

export default App