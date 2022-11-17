import React from 'react'

const Contact_content = () => {
  return (
   <>
    <section main_heading my-5 pt-5>
    <div className="text-center my-5">
        <h1 className="display-4">Contact Us</h1>
        <hr className='w-25 mx-auto'/>
        </div>
        <div className="container-fluid mb-5 py-5 bg-dark pb-5">
          <div className="row">
            <div className="col-xxl-8 col-10 col-md-8 mx-auto">
            <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" />
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="button" class="btn btn-outline-light">Submit</button>
</form>
            </div>
          </div>
        </div>

        </section>
   </>
  )
}

export default Contact_content