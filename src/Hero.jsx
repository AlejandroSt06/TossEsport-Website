import React from "react";

function Hero(){


    return (

<section className="hero-section">
<img className="hero-image" src = "../public/logoShark.png"/>
<h1 className="hero-title">TossEsports</h1>
<p className="hero-text mx-2">
Adéntrate en el mundo de los videojuegos y convierte tu realidad en una épica aventura interactiva!
</p>
      <form class="d-flex my-3" role="search">
        <input class="form-control me-3" type="search" placeholder="Search" aria-label="Search" />
        <button class="btn btn-outline-dark" type="submit">Search</button>
      </form>
</section>

    )
}
export default Hero;