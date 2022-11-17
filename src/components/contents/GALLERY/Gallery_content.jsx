import React from 'react'
import img1 from "../images/img1.jpg"
import img2 from "../images/img2.jpg"
import img3 from "../images/img3.jpg" 
import img4 from "../images/img4.jpg" 
import img5 from "../images/img5.jpg" 
import img6 from "../images/img6.jpg" 


const Gallery_content = () => {
  return (
    <>
     <section main_heading my-5 pt-5>
    <div className="text-center my-5">
        <h1 className="display-4">Gallery</h1>
        <hr className='w-25 mx-auto'/>
        </div>
        <div className="container bg-light py-5">
            <div className="row gy-2 shadow-lg">
                <div className="col-md-4 col-10 c0l-xxl-4 mx-auto">
                    <figure>
                    <img src={img1} alt="img3"  className='img-fluid img zoom'/>
                    </figure>
                </div>
                <div className="col-md-4 col-10 c0l-xxl-4 mx-auto">
                <figure>
                    <img src={img2} alt="img3"  className='img-fluid img zoom'/>
                    </figure>
                </div>
                <div className="col-md-4 col-10 c0l-xxl-4 mx-auto">
                <figure>
                    <img src= {img3} alt="img3"  className='img-fluid img zoom'/>
                    </figure>
                </div>
                <div className="col-md-4 col-10 c0l-xxl-4 mx-auto">
                <figure>
                    <img src={img4}alt="img3"  className='img-fluid img zoom'/>
                    </figure>
                </div>
                <div className="col-md-4 col-10 c0l-xxl-4 mx-auto">
                <figure>
                    <img src={img5}alt="img3"  className='img-fluid img zoom'/>
                    </figure>
                </div>
                <div className="col-md-4 col-10 c0l-xxl-4 mx-auto">
                <figure>
                    <img src={img6} alt="img3"  className='img-fluid img  zoom'/>
                    </figure>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Gallery_content