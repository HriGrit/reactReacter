import React from 'react'
import Header from './Header'
import Poster from './Poster.jsx'
import Nav from './Nav.jsx'
import Line from './Line.jsx'
import Body from '../Body/Body.jsx'

const HomePage = () => {
  return (
    <div className='h-100vh'>
      <Header />
      <Poster />
      <Nav />
      <Line />
      <Body />
    </div>
  )
}

export default HomePage