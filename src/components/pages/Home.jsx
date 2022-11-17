import React from 'react'
import Gallery_content from '../contents/GALLERY/Gallery_content'
import Footer from "./footer/Footer"
import Navbar from './navbar/Navbar'
import Slider from './Slider'
import Services_content from "../contents/Services/Services_content"
import About_content from '../contents/about/About_content'
const Home = () => {
  return (
    <>
    <Navbar />
    <Slider />
    <Services_content/>
    <Gallery_content />
    <About_content />
    <Footer />
    </>
  )
}

export default Home