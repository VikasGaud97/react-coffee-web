import React from 'react'
import card1 from "../images/jungle.jpg"
import card2 from "../images/delivery-coffee.jpg"


const Services_content = () => {
  return (
    <>
    <div className="text-center my-5 bg-drak">
        <h1 className="display-4">Services</h1>
        <hr className='w-25 mx-auto'/>
        </div>
        <div className=' container bg-secondary py-4 '>
    <div class="card  mx-3 ">
  <img src={card1} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Cofee Any Time Any-Where</h5>
    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. </p>
    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
  </div>
</div>
<div class="card mx-3 " >
  <img src={card2}  class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title"> Cofee Home-delivery </h5>
    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. </p>
    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
  </div>
</div>
</div>
    </>
  )
}

export default Services_content