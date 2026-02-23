import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Navbar/Hero/Hero'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'

import Services from './Components/Services/Services'
import MyWork from './Components/Mywork/Mywork.jsx'


const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <MyWork />
      <Contact />
      
    </div>
  )
}

export default App

