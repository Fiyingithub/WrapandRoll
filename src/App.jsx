import { useState } from 'react'
import Navbar from './component/Navbar'
import Main from './component/Main'
import { Route, Routes } from 'react-router-dom'




function App() {
  

  return (
    <section className='bg-[#ff4603] h-[auto]'> 
      <Navbar/>
      <Main/>
      

    </section>
  )
}

export default App
