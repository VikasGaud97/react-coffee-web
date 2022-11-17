import React from 'react'
import About_content from "../contents/about/About_content"
import Navbar from './navbar/Navbar'
import Footer from './footer/Footer'

const About = () => {
  return (
    <div>
        <Navbar />
      <About_content />
      <Footer />
    </div>
  )
}

export default About