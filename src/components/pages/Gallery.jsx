import React from 'react'
import Navbar from './navbar/Navbar'
import Footer from './footer/Footer'
import Gallery_content from "../contents/GALLERY/Gallery_content"


const Gallery = () => {
  return (
    <div>
    <Navbar />
    <Gallery_content />
    <Footer />
    </div>
  )
}

export default Gallery