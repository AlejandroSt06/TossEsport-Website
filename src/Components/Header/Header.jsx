import React from 'react'
import Search from './SearchEngine/SearchEngine'

function Header(){

    const imgBackURL = "https://img.freepik.com/free-psd/technology-video-game-objects-3d-illustration_1419-2659.jpg?size=626&ext=jpg&uid=R110461870&semt=ais"
  const logoImg = "./logoShark.png"
    return( 
    <>
   
<header className="position-fixed w-100 z-1 pt-2 py-lg-2 pb-0 text-bg-dark">
    <div className="container">
   

      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
<div className='col-0 col-lg-1 ms-0 ms-lg-3'></div>
    <a href = "/" className='header-logo ms-1 px-4'>
<img src ={logoImg} ></img>
<h2>Toss Esports</h2>
    </a>
    <div className='col-0 col-lg-1'>
   
    </div>
             <form className="col-12 d-none d-lg-flex  col-lg-auto mb-3 mb-lg-0 me-lg-0 ms-4 ps-0" role="search">

<Search></Search>
</form>
    <div className='col-0 col-lg-1'>
   
   </div>
        <ul className=" nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0 top-header-nav">
          <li><a href="/" className="nav-link px-2 ">Home</a></li>
          <li><a href="/eventos" className="nav-link px-2 ">Eventos</a></li>
          <li><a href="/contacto" className="nav-link px-2">Contacto</a></li>
          {/* <li><a href="#" className="nav-link px-2 text-secondary">FAQs</a></li>
          <li><a href="#" className="nav-link px-2 text-secondary">About</a></li> */}
        </ul>
        <div className='col-0 col-lg-auto'></div>

       

        {/* <div className="text-end col-lg-auto d-none d-lg-flex">
          <button type="button" className="btn login-btn me-2">Login</button>
          <button type="button" className="btn sign-up-btn">Sign-up</button>
        </div> */}
        
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