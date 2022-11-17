import React from 'react'
import c1 from "../images/c1.jpg"

const About_content = () => {
  return (
   <>
     <section className='main_heading '>
      <div className="text-center my-5">
        <h1 className="display-4">About Us</h1>
        <hr className='w-25 mx-auto'/>
        </div>
        <div className="container bg-light  d-flex align-items-center justify-content-center  py-5">
            <div className="row ">
              <div className="col-md-6 col-10 c0l-xxl-6 mx-auto pb-5 bg-warning d-flex justify-content-center" >
                <figure>
                  <img src={c1}alt="c1image" className="img-fluid about_img shadow-lg "/>
                </figure>
                </div> 
                <div className="col-md-6 col-10 c0l-xxl-6 mx-auto  pt-5  text-center bg-primary " >
                <h1 className='mb-3 mt-5'> about us</h1>
                <div className="para">
                <p1 className="text-capitalize px-5 mx-auto">Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                      Fugiat ab delectus laboriosam autem quasi dolores rerum
                      voluptatum ipsa non error.</p1>
                </div>
                      <div className='tn'>
                      <button type="button" class="btn btn-outline-light">Learn More</button>
                   </div>
                </div>
               
               </div>
          </div>
    </section>
   </>
  )
}

export default About_content