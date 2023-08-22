import FooterSection from "./FooterSection"
function Footer(){
return(

<div class="container">
  <footer class="row row-cols-1 row-cols-sm-2 row-cols-md-5 pt-3 my-5">
    <div class="col mb-3">
      <a href="/" class="d-flex align-items-center mb-3  text-decoration-none">
        <svg class="bi me-2" width="40" height="32"></svg>
      </a>
      <p>© 2023</p>
    </div>

    <div class="col mb-3">

    </div>

<FooterSection />
<FooterSection />
<FooterSection />
  </footer>
</div>

)

}
export default Footer