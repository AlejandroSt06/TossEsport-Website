import React from 'react'


function Header(){

    const imgBackURL = "https://img.freepik.com/free-psd/technology-video-game-objects-3d-illustration_1419-2659.jpg?size=626&ext=jpg&uid=R110461870&semt=ais"
return( 
    <>


<header className='top-header'>
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

</header>

</>
)

}

export default Header