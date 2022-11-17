import React from 'react'
import c1 from "../images/c1.jpg"
import c2 from "../images/c2.jpg"
import c3 from "../images/c3.jpg"

const Slider = () => {
  return (
    <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src={c1} class="d-block w-100" alt="..."/>
        <div class="carousel-caption d-md-block">
          <div className="heading">
             <h5>We don't make coffee , we make your mood</h5>
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <img src={c2}class="d-block w-100" alt="..."/>
        <div class="carousel-caption  d-md-block">
        <div className="heading1">
          <h5>Coffee are made from Cherry coffee</h5>
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <img src={c3} class="d-block w-100" alt="..."/>
        <div class="carousel-caption  d-md-block">
        <div className="heading2">
          <h5>Cocktail coffee </h5>
          </div>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  )
}

export default Slider