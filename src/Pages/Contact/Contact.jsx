import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer"
import "./contact.css"
function Contact(){
  const sectionImage = "https://i.pinimg.com/736x/3a/dd/3f/3add3fee70905528c05a37c78b8e982f.jpg";
    return (
    <>
    <Header/>
    <div className='background-dark px-0 mx-0 '>
    <div class="container d-flex flex-column align-items-center justify-content-center">
  <main className="py-0  row contact-card ">

    <div class="row g-5 me-0 py-0 px-lg-0 col d-flex justify-content-center">

      <div class=" col-md-12 col-lg-8  my-0">
        <h4 className="mb-5 contact-h4">Contactanos!</h4>
        <form class="needs-validation" novalidate="">
        
          <div class="row g-3">
            <div class="col-12">
              <label for="firstName" class="form-label">Nombre</label>
              <input type="text" class="form-control" id="firstName" placeholder=""  required="" />
              <div class="invalid-feedback">
                Valid first name is required.
              </div>
            </div>

           



            <div class="col-12 justify-content-center">
              <label for="email" class="form-label">Email <span class="text-body-secondary-contact">(Optional)</span></label>
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
    
    </div>
    <div className="col  image-container d-none d-lg-block"><img className=" contact-image" src ={sectionImage}></img></div>
  </main>
<div>


</div>

</div>

    </div>
    <Footer></Footer>
    </>
    )
}
export default Contact;