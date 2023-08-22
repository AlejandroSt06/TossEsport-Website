import React from 'react'


function Header(){

    const imgBackURL = "https://img.freepik.com/free-psd/technology-video-game-objects-3d-illustration_1419-2659.jpg?size=626&ext=jpg&uid=R110461870&semt=ais"
return( 
    <>
<header class="p-3 text-bg-dark">
    <div class="container">
      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">


        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><a href="#" class="nav-link px-2 text-secondary">Home</a></li>
          <li><a href="#" class="nav-link px-2 text-white">Features</a></li>
          <li><a href="#" class="nav-link px-2 text-white">Pricing</a></li>
          <li><a href="#" class="nav-link px-2 text-white">FAQs</a></li>
          <li><a href="#" class="nav-link px-2 text-white">About</a></li>
        </ul>

        <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
          <input type="search" class="form-control form-control-dark" placeholder="Search..." aria-label="Search" />
        </form>

        <div class="text-end">
          <button type="button" class="btn btn-outline-light me-2">Login</button>
          <button type="button" class="btn sign-up-btn">Sign-up</button>
        </div>
      </div>
    </div>
  </header>

{/* <header className='top-header'>
<a className = "top-header-link" href = "#" >
<img className='top-header-logo' src = "../public/images/logoShark.png" alt = "logo" width="44px"></img>
<h2 className='top-header-title'>TossEsports</h2>

</a>
<nav className='top-header-nav'>
<ul>
    <li><a href = "#">Home</a></li>
    <li><a href = "#">About Us</a></li>
    <li><a href = "#">Contact Us</a></li>
</ul>

</nav>

</header> */}

</>
)

}

export default Header