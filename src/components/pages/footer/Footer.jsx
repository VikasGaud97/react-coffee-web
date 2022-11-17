import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import  { faMugSaucer } from '@fortawesome/free-solid-svg-icons'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
 

const Footer = () => {
  return (
    <>
   {/* <header>
 <h3> Main Body</h3>
</header> */}

<footer class="footer_style mt-5">
<main class="container-fluid">
 <div class="row p-3">
  <div class="col-md-4 col-12 offset-md-1"> 
   <p class="mt-5 text-justify"> The cherries are processed by disengaging the coffee seeds from their coverings and from the pulp and by drying the seeds; all beans must be removed from their fruit and dried before roasting. Three techniques are used for processing the coffee:) </p>
   <p class="text-capitalize"> &#169 2019 CherryCOffee All right reserved. </p>
  </div>

  <div class="col-md-4 col-12 mt-5">
    <h4>Contacts</h4>
              <dl>
                <dt>Address:</dt>
                <dd>Pune, Maharashtra </dd>
              </dl>
              <dl>
                <dt>email:</dt>
                <dd><a href="#" >Cherrycoffee@gmail.com</a></dd>
              </dl>
              <dl>
                <dt>phones:</dt>
                <dd><a href="#">+91 123456789</a> <span>or</span> <a href="#">+91 98765321</a>
                </dd>
              </dl>
  </div>

  <div class="col-md-2 col-12 mt-5">
   <h4>Links</h4>
              <ul>
                <li><a href="#">Services</a></li>
                <li><a href="#">Testinomial</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Contacts</a></li>
                <li><a href="#">About</a></li>
              </ul>
  </div>
 </div>

 <div class="d-flex flex-row justify-content-center align-items-center flex-wrap">
   <div class="p-md-5 p-1 flex-fill ">
   <a href="https://www.facebook.com/vinodthapa55"><i class="bi bi-facebook"></i><span><FaFacebook size={50} /></span> </a> </div>

   <div class="p-md-5 p-1 flex-fill "><a href="https://www.instagram.com/vinodthapa55/"><i class="fa fa-instagram" aria-hidden="true"></i><span><FaInstagram size={50} /></span></a></div>

   <div class="p-md-5 p-1 flex-fill "><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i><span><FaTwitter size={50} /></span></a></div>

   <div class="p-md-5 p-1 flex-fill "><a href="#"><i class="fa fa-youtube" aria-hidden="true"></i><span><FaYoutube size={50} /></span></a></div>
  
 </div>
</main>
</footer>
    </>  
  )
}

export default Footer        