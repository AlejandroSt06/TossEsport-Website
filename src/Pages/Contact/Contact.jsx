import React from "react";
import Header from "../../Components/Header/Header";
import "./contact.css"
function Contact(){
  const sectionImage = "https://i.pinimg.com/736x/3a/dd/3f/3add3fee70905528c05a37c78b8e982f.jpg";
    return (
    <>
    <Header/>
    <div className='background-dark px-0 mx-0 '>
    <div class="container">
  <main className="py-1 mt-1 row">

    <div class="row g-5 me-0 py-5 px-lg-5">

      <div class=" col-md-7 col-lg-8 mx-lg-5">
        <h4 class="mb-3">Contactanos!</h4>
        <form class="needs-validation" novalidate="">
        
          <div class="row g-3">
            <div class="col-12">
              <label for="firstName" class="form-label">Nombre</label>
              <input type="text" class="form-control" id="firstName" placeholder="" value="" required="" />
              <div class="invalid-feedback">
                Valid first name is required.
              </div>
            </div>

           



            <div class="col-12 justify-content-center">
              <label for="email" class="form-label">Email <span class="text-body-secondary">(Optional)</span></label>
              <input type="email" class="form-control" id="email" placeholder="you@example.com" />
              <div class="invalid-feedback">
                Please enter a valid email address for shipping updates.
              </div>
            </div>

            <div class="col-12">
              <label for="address" class="form-label">Mensaje</label>
              <textarea className="form-control" rows = "5"></textarea>
              <div class="invalid-feedback">
                Please enter your shipping address.
              </div>
            </div>

          </div>






          <button class="w-100 btn-lg my-5 contact-sub-button" type="submit">Enter</button>
        </form>
      </div>
      <div className="col-12">dasds</div>
    </div>
   
  </main>
<div>


</div>
  <footer class="my-5 pt-5 text-body-secondary text-center text-small">
    <p class="mb-1">© 2017–2023 Company Name</p>
    <ul class="list-inline">
      <li class="list-inline-item"><a href="#">Privacy</a></li>
      <li class="list-inline-item"><a href="#">Terms</a></li>
      <li class="list-inline-item"><a href="#">Support</a></li>
    </ul>
  </footer>
</div>
    </div>
    </>
    )
}
export default Contact;