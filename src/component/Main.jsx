import React from 'react'
import Home from './Pages/Home'
import About from './Pages/About'
import Menu from './Pages/Menu'
import Contact from './Pages/Contact'

const Header = () => {
  return (
    <div className='space-y-20'>
      <Home/>
      <About/>
      <Menu/>
      <Contact/>
    </div>
  )
}

export default Header